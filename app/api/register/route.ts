import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import {
  assertOnboardingClaimable,
  buildHotelFromOnboarding,
  loadOnboardingHotel,
  reserveOnboardingClaim,
} from "@/lib/hotel/onboarding-claim";
import { normalizePhoneE164 } from "@/lib/phone/normalize";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

type Body = {
  email?: string;
  password?: string;
  accountKind?: "inserzionista" | "struttura" | "agenzia";
  structureType?: string;
  onboardingId?: string;
  legalAccepted?: boolean;
  termsAccepted?: boolean;
  privacyAccepted?: boolean;
  marketingAccepted?: boolean;
  termsVersion?: string;
  privacyVersion?: string;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = await rateLimit({ key: "register", identifier: ip, max: 8, windowSeconds: 600 });
  if (!limit.allowed) return tooManyRequestsResponse();

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  const onboardingId = body.onboardingId?.trim() || null;
  const legalOk =
    body.legalAccepted === true || (Boolean(body.termsAccepted) && Boolean(body.privacyAccepted));
  const marketingAccepted = Boolean(body.marketingAccepted);
  const accountKind =
    body.accountKind === "struttura" ? "struttura" : body.accountKind === "agenzia" ? "agenzia" : "inserzionista";
  const role = accountKind === "struttura" ? "hotel" : accountKind === "agenzia" ? "agency" : "advertiser";

  if (!email || !password) {
    return NextResponse.json({ error: "Email e password sono obbligatori" }, { status: 400 });
  }

  if (!legalOk) {
    return NextResponse.json({ error: "Consenso a Termini e Privacy obbligatorio" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anonKey) {
    return NextResponse.json({ error: "Supabase non configurato." }, { status: 503 });
  }

  if (onboardingId && accountKind === "struttura" && serviceKey) {
    const adminClient = createClient(url, serviceKey, { auth: { persistSession: false } });
    const onboarding = await loadOnboardingHotel(adminClient, onboardingId);
    if (!onboarding || onboarding.status !== "unclaimed") {
      return NextResponse.json(
        { error: onboarding?.status === "claimed" ? "Questa struttura è già stata rivendicata." : "Struttura non disponibile per la rivendica." },
        { status: 409 },
      );
    }
    if (!normalizePhoneE164(onboarding.phone)) {
      return NextResponse.json(
        { error: "Questa struttura non ha un telefono verificabile. Contatta assistenza." },
        { status: 400 },
      );
    }
  }

  const userAgent = request.headers.get("user-agent") ?? null;

  const supabase = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        account_kind: accountKind,
        structure_type: body.structureType ?? "hotel",
        role,
        marketing_accepted: marketingAccepted,
        terms_version: body.termsVersion ?? TERMS_VERSION,
        privacy_version: body.privacyVersion ?? PRIVACY_VERSION,
        ip_address: ip,
        user_agent: userAgent,
        onboarding_hotel_id: onboardingId,
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const user = data.user;
  const session = data.session;

  if (!user) {
    return NextResponse.json({ error: "Registrazione fallita." }, { status: 500 });
  }

  if (!session) {
    return NextResponse.json({
      ok: true,
      role,
      userId: user.id,
      emailConfirmationRequired: true,
      claimPending: Boolean(onboardingId && accountKind === "struttura"),
    });
  }

  const userClient = createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${session.access_token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    await completeProfile(userClient, user.id, email, role, body, ip, userAgent, Boolean(user.email_confirmed_at));
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Errore durante la creazione del profilo." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    role,
    userId: user.id,
    emailConfirmationRequired: false,
    claimPending: Boolean(onboardingId && accountKind === "struttura"),
    session: {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    },
  });
}

type AppSupabase = SupabaseClient;

async function completeProfile(
  userClient: AppSupabase,
  userId: string,
  email: string,
  role: string,
  body: Body,
  ip: string | null,
  userAgent: string | null,
  emailVerified: boolean,
) {
  let profilePhone = `+39${userId.replaceAll("-", "").slice(0, 10)}`;

  if (role === "hotel" && body.onboardingId) {
    const serviceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceUrl && serviceKey) {
      const adminClient = createClient(serviceUrl, serviceKey, { auth: { persistSession: false } });
      const onboarding = await loadOnboardingHotel(adminClient, body.onboardingId!);
      const normalized = normalizePhoneE164(onboarding?.phone);
      if (normalized) profilePhone = normalized;
    }
  }

  await userClient.from("profiles").upsert(
    {
      user_id: userId,
      role,
      email,
      phone_number: profilePhone,
      email_verified: emailVerified,
      phone_verified: false,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );

  if (role === "hotel") {
    await createHotelAccount(userClient, userId, email, body);
  } else if (role === "agency") {
    await createAgencyAccount(userClient, userId, email);
  } else {
    await userClient.from("advertiser_profiles").upsert(
      {
        user_id: userId,
        advertiser_type: "private_individual",
        first_name: "Nome",
        last_name: "Cognome",
        short_description: "Profilo inserzionista creato automaticamente. Da completare nel pannello inserzionista.",
        contact_email: email,
      },
      { onConflict: "user_id" },
    );
  }

  await userClient.from("user_consents").insert({
    user_id: userId,
    terms_accepted: true,
    privacy_accepted: true,
    marketing_accepted: Boolean(body.marketingAccepted),
    terms_version: body.termsVersion ?? TERMS_VERSION,
    privacy_version: body.privacyVersion ?? PRIVACY_VERSION,
    ip_address: ip,
    user_agent: userAgent,
  });
}

async function createHotelAccount(
  userClient: AppSupabase,
  userId: string,
  email: string,
  body: Body,
) {
  const serviceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceUrl || !serviceKey) {
    await userClient.from("hotel_accounts").upsert(
      {
        user_id: userId,
        structure_type: body.structureType ?? "hotel",
        property_name: "Nuova struttura",
        cin_code: `NEW-${userId.slice(0, 8)}`,
        full_address: "Indirizzo da completare",
        country_code: "IT",
        country_name: "Italia",
        city_name: "Da completare",
        city_id: "",
        rooms_quantity: 1,
        private_notification_email: email,
        subscription_status: "active",
        subscription_active: true,
        account_status: "active",
      },
      { onConflict: "user_id" },
    );
    return;
  }

  const adminClient = createClient(serviceUrl, serviceKey, { auth: { persistSession: false } });

  if (body.onboardingId) {
    const onboarding = await loadOnboardingHotel(adminClient, body.onboardingId);
    const claimError = assertOnboardingClaimable(onboarding, userId);
    if (claimError) throw new Error(claimError);

    const hotelData = buildHotelFromOnboarding(userId, email, onboarding!, body.structureType ?? "hotel");
    const { error: hotelError } = await adminClient.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
    if (hotelError) throw new Error(hotelError.message);
    await reserveOnboardingClaim(adminClient, onboarding!.id, userId);
    return;
  }

  const { data: matchData } = await adminClient
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, email, phone, main_photo_url, website, google_maps_url, status, claimed_by")
    .eq("email", email)
    .eq("status", "unclaimed")
    .maybeSingle();

  if (matchData) {
    const hotelData = buildHotelFromOnboarding(userId, email, matchData, body.structureType ?? "hotel");
    const { error: hotelError } = await adminClient.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });
    if (hotelError) throw new Error(hotelError.message);
    await reserveOnboardingClaim(adminClient, matchData.id, userId);
    return;
  }

  const { error: fallbackHotelError } = await adminClient.from("hotel_accounts").upsert(
    {
      user_id: userId,
      structure_type: body.structureType ?? "hotel",
      property_name: "Nuova struttura",
      cin_code: `NEW-${userId.slice(0, 8)}`,
      description: null as string | null,
      full_address: "Indirizzo da completare",
      country_code: "IT",
      country_name: "Italia",
      city_name: "Da completare",
      city_id: "",
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
  if (fallbackHotelError) throw new Error(fallbackHotelError.message);
}

async function createAgencyAccount(
  userClient: AppSupabase,
  userId: string,
  email: string,
) {
  await userClient.from("hotel_accounts").upsert(
    {
      user_id: userId,
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
      city_id: "",
      specific_area: null as string | null,
      rooms_quantity: 1,
      private_notification_email: email,
      public_email: null as string | null,
      public_phone: null as string | null,
      main_photo_url: null as string | null,
      subscription_status: "active",
      subscription_active: true,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );

  await userClient.from("advertiser_profiles").upsert(
    {
      user_id: userId,
      advertiser_type: "travel_agency",
      first_name: "Agenzia",
      last_name: "Viaggi",
      agency_name: "Nuova agenzia",
      short_description: "Profilo agenzia creato automaticamente. Da completare nel pannello agenzia.",
      contact_email: email,
    },
    { onConflict: "user_id" },
  );
}
