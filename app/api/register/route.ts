import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";

type Body = {
  email?: string;
  password?: string;
  accountKind?: "inserzionista" | "struttura";
  structureType?: string;
  legalAccepted?: boolean;
  termsAccepted?: boolean;
  privacyAccepted?: boolean;
  marketingAccepted?: boolean;
  termsVersion?: string;
  privacyVersion?: string;
};

function makePhoneFromUserId(userId: string) {
  return `+39${userId.replaceAll("-", "").slice(0, 10)}`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  const legalOk =
    body.legalAccepted === true || (Boolean(body.termsAccepted) && Boolean(body.privacyAccepted));
  const termsAccepted = legalOk;
  const privacyAccepted = legalOk;
  const marketingAccepted = Boolean(body.marketingAccepted);
  const accountKind = body.accountKind === "struttura" ? "struttura" : "inserzionista";
  const role = accountKind === "struttura" ? "hotel" : "advertiser";

  if (!email || !password) {
    return NextResponse.json({ error: "Email e password sono obbligatori" }, { status: 400 });
  }

  if (!legalOk) {
    return NextResponse.json({ error: "Consenso a Termini e Privacy obbligatorio" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      {
        error:
          "Supabase non configurato: impostare NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY nel file env.",
      },
      { status: 503 },
    );
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? null;
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
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const user = data.user;
  const session = data.session;

  if (!user || !session) {
    return NextResponse.json({ error: "Utente creato ma sessione non disponibile. Disattiva la conferma email in Supabase durante i test." }, { status: 400 });
  }

  const userClient = createClient(url, anonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const phoneNumber = makePhoneFromUserId(user.id);

  const { error: profileError } = await userClient.from("profiles").upsert(
    {
      user_id: user.id,
      role,
      email,
      phone_number: phoneNumber,
      email_verified: true,
      phone_verified: true,
      account_status: "active",
    },
    { onConflict: "user_id" },
  );

  if (profileError) {
    return NextResponse.json({ error: profileError.message, detail: "Profilo applicativo non creato." }, { status: 500 });
  }

  if (role === "hotel") {
    const serviceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    let onboardingMatch: Record<string, unknown> | null = null;

    if (serviceUrl && serviceKey) {
      const adminClient = createClient(serviceUrl, serviceKey, { auth: { persistSession: false } });
      const { data: matchData } = await adminClient
        .from("onboarding_hotels")
        .select("id, nome, city_name, indirizzo, email, phone, main_photo_url, website, google_maps_url")
        .eq("email", email)
        .maybeSingle();
      onboardingMatch = matchData;
    }

    const hotelData = onboardingMatch
      ? {
          user_id: user.id,
          structure_type: body.structureType ?? "hotel",
          property_name: onboardingMatch.nome as string,
          cin_code: `ONB-${user.id.slice(0, 8)}`,
          description: null,
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
          structure_type: body.structureType ?? "hotel",
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

    const { error: hotelError } = await userClient.from("hotel_accounts").upsert(hotelData, { onConflict: "user_id" });

    if (hotelError) {
      return NextResponse.json({ error: hotelError.message, detail: "Profilo struttura non creato." }, { status: 500 });
    }

    if (onboardingMatch && serviceUrl && serviceKey) {
      const adminClient = createClient(serviceUrl, serviceKey, { auth: { persistSession: false } });
      await adminClient
        .from("onboarding_hotels")
        .update({ status: "claimed" })
        .eq("id", onboardingMatch.id as string);
    }
  } else {
    const { error: advertiserError } = await userClient.from("advertiser_profiles").upsert(
      {
        user_id: user.id,
        advertiser_type: "private_individual",
        first_name: "Nome",
        last_name: "Cognome",
        short_description: "Profilo inserzionista creato automaticamente. Da completare nel pannello inserzionista.",
        contact_email: email,
      },
      { onConflict: "user_id" },
    );

    if (advertiserError) {
      return NextResponse.json({ error: advertiserError.message, detail: "Profilo inserzionista non creato." }, { status: 500 });
    }
  }

  const termsVersion = body.termsVersion ?? TERMS_VERSION;
  const privacyVersion = body.privacyVersion ?? PRIVACY_VERSION;

  await userClient.from("user_consents").insert({
    user_id: user.id,
    terms_accepted: true,
    privacy_accepted: true,
    marketing_accepted: marketingAccepted,
    terms_version: termsVersion,
    privacy_version: privacyVersion,
    ip_address: ip,
    user_agent: userAgent,
  });

  return NextResponse.json({
    ok: true,
    role,
    userId: user.id,
    session: {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    },
  });
}
