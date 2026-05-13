import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/legal/company";

type Body = {
  email?: string;
  password?: string;
  accountKind?: "inserzionista" | "struttura";
  termsAccepted?: boolean;
  privacyAccepted?: boolean;
  marketingAccepted?: boolean;
  termsVersion?: string;
  privacyVersion?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  const termsAccepted = Boolean(body.termsAccepted);
  const privacyAccepted = Boolean(body.privacyAccepted);
  const marketingAccepted = Boolean(body.marketingAccepted);
  const accountKind = body.accountKind === "struttura" ? "struttura" : "inserzionista";

  if (!email || !password) {
    return NextResponse.json({ error: "Email e password sono obbligatori" }, { status: 400 });
  }

  if (!termsAccepted || !privacyAccepted) {
    return NextResponse.json({ error: "Consenso a Termini e Privacy obbligatorio" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

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
  if (!user) {
    return NextResponse.json({ error: "Utente non creato" }, { status: 400 });
  }

  const termsVersion = body.termsVersion ?? TERMS_VERSION;
  const privacyVersion = body.privacyVersion ?? PRIVACY_VERSION;

  let consentStored = false;

  if (serviceKey) {
    const admin = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error: insertError } = await admin.from("user_consents").insert({
      user_id: user.id,
      terms_accepted: true,
      privacy_accepted: true,
      marketing_accepted: marketingAccepted,
      terms_version: termsVersion,
      privacy_version: privacyVersion,
      ip_address: ip,
      user_agent: userAgent,
    });

    if (insertError) {
      return NextResponse.json(
        {
          error: insertError.message,
          detail: "Utente creato in auth ma consensi non salvati: verificare migration e policy.",
        },
        { status: 500 },
      );
    }
    consentStored = true;
  }

  return NextResponse.json({ ok: true, consentStored, userId: user.id });
}
