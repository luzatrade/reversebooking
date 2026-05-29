import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

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

  const adminClient = createClient(url, serviceKey, { auth: { persistSession: false } });

  const { data: existingProfile } = await adminClient
    .from("profiles")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingProfile) {
    return NextResponse.json({ ok: true, alreadyComplete: true });
  }

  const meta = user.user_metadata ?? {};
  const role = meta.role === "hotel" ? "hotel" : meta.role === "advertiser" ? "advertiser" : "advertiser";
  const email = user.email ?? "";
  const phoneNumber = `+39${user.id.replaceAll("-", "").slice(0, 10)}`;

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? meta.ip_address ?? null;
  const userAgent = request.headers.get("user-agent") ?? meta.user_agent ?? null;

  await adminClient.from("profiles").upsert(
    {
      user_id: user.id,
      role,
      email,
      phone_number: phoneNumber,
      email_verified: Boolean(user.email_confirmed_at),
      phone_verified: false,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );

  if (role === "hotel") {
    let onboardingMatch: Record<string, unknown> | null = null;

    const { data: matchData } = await adminClient
      .from("onboarding_hotels")
      .select("id, nome, city_name, indirizzo, email, phone, main_photo_url, website, google_maps_url")
      .eq("email", email)
      .maybeSingle();
    onboardingMatch = matchData;

    const structureType = meta.structure_type ?? "hotel";

    const hotelData = onboardingMatch
      ? {
          user_id: user.id,
          structure_type: structureType,
          property_name: onboardingMatch.nome as string,
          cin_code: `ONB-${user.id.slice(0, 8)}`,
          description: null as string | null,
          full_address: (onboardingMatch.indirizzo as string) || (onboardingMatch.city_name as string),
          country_code: "IT",
          country_name: "Italia",
          city_name: onboardingMatch.city_name as string,
          city_id: String(onboardingMatch.city_name as string).toLowerCase().replace(/ +/g, "-") + "-it",
          specific_area: onboardingMatch.indirizzo as string | null,
          rooms_quantity: 1,
          private_notification_email: email,
          public_email: onboardingMatch.email as string | null,
          public_phone: onboardingMatch.phone as string | null,
          main_photo_url: onboardingMatch.main_photo_url as string | null,
          google_maps_url: onboardingMatch.google_maps_url as string | null,
          subscription_status: "active",
          subscription_active: true,
          account_status: "active",
        }
      : {
          user_id: user.id,
          structure_type: structureType,
          property_name: "Nuova struttura",
          cin_code: `NEW-${user.id.slice(0, 8)}`,
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
        };

    await adminClient.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });

    if (onboardingMatch) {
      await adminClient
        .from("onboarding_hotels")
        .update({ status: "claimed" })
        .eq("id", onboardingMatch.id as string);
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

  return NextResponse.json({ ok: true, role });
}
