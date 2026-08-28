import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import {
  applyOnboardingClaimToHotelAccount,
  assertOnboardingClaimable,
  findUnclaimedOnboardingByEmail,
  isPlaceholderHotelAccount,
  loadOnboardingHotel,
  needsOnboardingHotelPrefill,
  syncUserOnboardingMetadata,
} from "@/lib/hotel/onboarding-claim";
import {
  isEmailConfirmed,
  profileStatusForEmailConfirmation,
} from "@/lib/auth/account-activation";
import { syncAccountActivation } from "@/lib/auth/sync-account-activation";
import { resolveRegistrationRole } from "@/lib/auth/resolve-registration-role";
import { normalizePhoneE164 } from "@/lib/phone/normalize";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";
import { PENDING_CITY_ID } from "@/lib/constants/world-city-helpers";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";
import { accountKindLabel, notifyAdminAlertSafe } from "@/lib/notifications/admin-alert";

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const limit = await rateLimit({ key: "complete-profile", identifier: clientIp, max: 30, windowSeconds: 600 });
  if (!limit.allowed) return tooManyRequestsResponse();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json({ error: "Server non configurato." }, { status: 503 });
  }

  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Non autenticato." }, { status: 401 });
  }

  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const userClient = createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: authData } = await userClient.auth.getUser();
  const user = authData?.user;

  if (!user) {
    return NextResponse.json({ error: "Utente non trovato." }, { status: 401 });
  }

  if (!isEmailConfirmed(user)) {
    return NextResponse.json(
      { error: "Conferma l'email prima di attivare il profilo." },
      { status: 403 },
    );
  }

  const adminClient = createClient(url, serviceKey, { auth: { persistSession: false } });

  let requestedRole: string | null = null;
  let bodyOnboardingHotelId: string | null = null;
  try {
    const body = (await request.json()) as { role?: string | null; onboardingHotelId?: string | null };
    requestedRole = typeof body?.role === "string" ? body.role : null;
    bodyOnboardingHotelId =
      typeof body?.onboardingHotelId === "string" && body.onboardingHotelId.trim()
        ? body.onboardingHotelId.trim()
        : null;
  } catch {
    // body opzionale
  }

  const meta = user.user_metadata ?? {};

  const [{ data: existingProfile }, { data: existingHotel }] = await Promise.all([
    adminClient.from("profiles").select("user_id, role, phone_number, account_status, email_verified").eq("user_id", user.id).maybeSingle(),
    adminClient
      .from("hotel_accounts")
      .select("user_id, onboarding_hotel_id, property_name, account_status")
      .eq("user_id", user.id)
      .maybeSingle(),
  ]);

  if (existingProfile?.role === "admin") {
    return NextResponse.json({ ok: true, alreadyComplete: true, role: "admin" });
  }

  const role = resolveRegistrationRole({
    meta,
    existingProfileRole: existingProfile?.role,
    requestedRole,
  });
  const metaOnboardingHotelId =
    typeof meta.onboarding_hotel_id === "string" && meta.onboarding_hotel_id.trim()
      ? meta.onboarding_hotel_id.trim()
      : null;
  const onboardingHotelId = bodyOnboardingHotelId ?? metaOnboardingHotelId;

  const pendingOnboardingPrefill =
    role === "hotel" && needsOnboardingHotelPrefill(existingHotel, onboardingHotelId);

  const profileSetupComplete =
    existingProfile &&
    !pendingOnboardingPrefill &&
    (role === "advertiser" ||
      ((role === "hotel" || role === "agency") && existingHotel));

  if (profileSetupComplete) {
    const profileAlreadyActive =
      existingProfile.email_verified && existingProfile.account_status === "active";
    const hotelAlreadyActive =
      role === "advertiser" || !existingHotel || existingHotel.account_status === "active";
    if (profileAlreadyActive && hotelAlreadyActive) {
      return NextResponse.json({ ok: true, alreadyComplete: true, activated: true, profileStatus: "active" });
    }
    const activation = await syncAccountActivation(adminClient, user.id);
    return NextResponse.json({ ok: true, alreadyComplete: true, ...activation });
  }

  const email = user.email ?? "";
  let profilePhone = `+39${user.id.replaceAll("-", "").slice(0, 10)}`;

  if (role === "hotel" && onboardingHotelId) {
    const onboarding = await loadOnboardingHotel(adminClient, onboardingHotelId);
    const normalized = normalizePhoneE164(onboarding?.phone);
    if (normalized) profilePhone = normalized;
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? meta.ip_address ?? null;
  const userAgent = request.headers.get("user-agent") ?? meta.user_agent ?? null;

  await adminClient.from("profiles").upsert(
    {
      user_id: user.id,
      role,
      email,
      phone_number: existingProfile?.phone_number ?? profilePhone,
      email_verified: true,
      phone_verified: false,
      account_status: profileStatusForEmailConfirmation(true),
    },
    { onConflict: "user_id" },
  );

  let appliedOnboardingId: string | null = null;
  let needsClaimLink = false;

  if (role === "hotel") {
    const structureType = meta.structure_type ?? "hotel";

    if (onboardingHotelId) {
      const onboarding = await loadOnboardingHotel(adminClient, onboardingHotelId);
      const claimError = assertOnboardingClaimable(onboarding, user.id);
      if (claimError) {
        return NextResponse.json({ error: claimError }, { status: 400 });
      }

      try {
        await applyOnboardingClaimToHotelAccount(adminClient, user.id, email, onboarding!, structureType);
        appliedOnboardingId = onboarding!.id;
        await syncUserOnboardingMetadata(adminClient, user.id, onboarding!.id);
      } catch (err) {
        return NextResponse.json(
          { error: err instanceof Error ? err.message : "Collegamento catalogo non riuscito." },
          { status: 400 },
        );
      }
    } else {
      const match = await findUnclaimedOnboardingByEmail(adminClient, email);
      if (match.status === "found") {
        try {
          await applyOnboardingClaimToHotelAccount(adminClient, user.id, email, match.row, structureType);
          appliedOnboardingId = match.row.id;
          await syncUserOnboardingMetadata(adminClient, user.id, match.row.id);
        } catch (err) {
          return NextResponse.json(
            { error: err instanceof Error ? err.message : "Collegamento catalogo non riuscito." },
            { status: 400 },
          );
        }
      } else if (match.status === "ambiguous") {
        needsClaimLink = true;
      }

      if (!appliedOnboardingId && !existingHotel) {
        await adminClient.from("hotel_accounts").upsert(
          {
            user_id: user.id,
            structure_type: structureType,
            property_name: "Nuova struttura",
            cin_code: `NEW-${user.id.slice(0, 8)}`,
            description: null as string | null,
            full_address: "Indirizzo da completare",
            country_code: "IT",
            country_name: "Italia",
            city_name: "Da completare",
            city_id: PENDING_CITY_ID,
            specific_area: null as string | null,
            rooms_quantity: 1,
            private_notification_email: email,
            public_email: null as string | null,
            public_phone: null as string | null,
            main_photo_url: null as string | null,
            google_maps_url: null as string | null,
            subscription_status: "active",
            subscription_active: true,
            account_status: "active",
          },
          { onConflict: "user_id" },
        );
      } else if (!appliedOnboardingId && isPlaceholderHotelAccount(existingHotel) && match.status === "ambiguous") {
        needsClaimLink = true;
      }
    }
  } else if (role === "agency") {
    const { error: agencyHotelError } = await adminClient.from("hotel_accounts").upsert(
      {
        user_id: user.id,
        provider_kind: "agency",
        structure_type: "hotel",
        property_name: "Nuova agenzia",
        cin_code: null as string | null,
        cun_code: null as string | null,
        description: null as string | null,
        full_address: "Indirizzo da completare",
        country_code: "IT",
        country_name: "Italia",
        city_name: "Da completare",
        city_id: PENDING_CITY_ID,
        specific_area: null as string | null,
        rooms_quantity: 1,
        private_notification_email: email,
        public_email: null as string | null,
        public_phone: null as string | null,
        main_photo_url: null as string | null,
        subscription_status: "inactive",
        subscription_active: false,
        account_status: "active",
      },
      { onConflict: "user_id" },
    );
    if (agencyHotelError) {
      return NextResponse.json({ error: agencyHotelError.message }, { status: 400 });
    }
    const { error: agencyAdvertiserError } = await adminClient.from("advertiser_profiles").upsert(
      {
        user_id: user.id,
        advertiser_type: "travel_agency",
        first_name: "Agenzia",
        last_name: "Viaggi",
        agency_name: "Nuova agenzia",
        short_description: "Profilo agenzia creato automaticamente.",
        contact_email: email,
      },
      { onConflict: "user_id" },
    );
    if (agencyAdvertiserError) {
      return NextResponse.json({ error: agencyAdvertiserError.message }, { status: 400 });
    }
  } else {
    await adminClient.from("advertiser_profiles").upsert(
      {
        user_id: user.id,
        advertiser_type: "private_individual",
        first_name: "Nome",
        last_name: "Cognome",
        short_description: "Profilo inserzionista creato automaticamente.",
        contact_email: email,
      },
      { onConflict: "user_id" },
    );
  }

  const { data: existingConsent } = await adminClient
    .from("user_consents")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!existingConsent) {
    await adminClient.from("user_consents").insert({
      user_id: user.id,
      terms_accepted: true,
      privacy_accepted: true,
      marketing_accepted: Boolean(meta.marketing_accepted),
      terms_version: meta.terms_version ?? TERMS_VERSION,
      privacy_version: meta.privacy_version ?? PRIVACY_VERSION,
      ip_address: ip,
      user_agent: userAgent,
    });
  }

  notifyAdminAlertSafe({
    subject: `[HotelsDrop] Profilo attivato · ${accountKindLabel(role)}`,
    title: "Profilo attivato dopo conferma email",
    lines: [
      { label: "Email", value: email },
      { label: "Tipo account", value: accountKindLabel(role) },
      { label: "User ID", value: user.id },
      {
        label: "Rivendica catalogo",
        value: appliedOnboardingId || pendingOnboardingPrefill
          ? "Avviata (verifica telefono)"
          : onboardingHotelId
            ? "Sì"
            : "No",
      },
      { label: "Onboarding ID", value: appliedOnboardingId ?? onboardingHotelId },
    ],
    consolePath: (appliedOnboardingId ?? onboardingHotelId)
      ? `/console/onboarding/${appliedOnboardingId ?? onboardingHotelId}`
      : "/console/utenti",
  });

  return NextResponse.json({
    ok: true,
    role,
    onboardingApplied: Boolean(appliedOnboardingId),
    needsClaimLink,
    onboardingHotelId: appliedOnboardingId ?? onboardingHotelId,
  });
}
