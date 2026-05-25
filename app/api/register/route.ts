import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";

type Body = {
  email?: string;
  password?: string;
  accountKind?: "inserzionista" | "struttura";
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
    const { error: hotelError } = await userClient.from("hotel_accounts").upsert(
      {
        user_id: user.id,
        structure_type: "hotel",
        property_name: "Struttura test",
        cin_code: `TEST-${user.id.slice(0, 8)}`,
        description: "Profilo struttura creato automaticamente. Da completare nel pannello struttura.",
        full_address: "Indirizzo da completare",
        country_code: "IT",
        country_name: "Italia",
        city_name: "Verona",
        city_id: "3164527",
        specific_area: "Centro",
        rooms_quantity: 1,
        private_notification_email: email,
        subscription_status: "active",
        subscription_active: true,
        account_status: "active",
      },
      { onConflict: "user_id" },
    );

    if (hotelError) {
      return NextResponse.json({ error: hotelError.message, detail: "Profilo struttura non creato." }, { status: 500 });
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

  return NextResponse.json({ ok: true, role, userId: user.id });
}
