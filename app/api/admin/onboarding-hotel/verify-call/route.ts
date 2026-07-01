import { NextResponse } from "next/server";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminApi } from "@/lib/admin/verify";
import { normalizePhoneE164 } from "@/lib/phone/normalize";
import { isTwilioVerifyConfigured, startVoiceVerification } from "@/lib/twilio/verify";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

type Body = { id?: string };

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = await rateLimit({ key: "admin-onboarding-verify-call", identifier: ip, max: 10, windowSeconds: 900 });
  if (!limit.allowed) return tooManyRequestsResponse();

  const gate = await requireAdminApi(request);
  if ("error" in gate) return gate.error;

  if (!isTwilioVerifyConfigured()) {
    return NextResponse.json({ error: "Twilio Verify non configurato sul server." }, { status: 503 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const id = body.id?.trim();
  if (!id) {
    return NextResponse.json({ error: "ID struttura mancante" }, { status: 400 });
  }

  const admin = gate.admin;
  const [{ data: onboarding, error: onboardingError }, { data: linkedHotel }] = await Promise.all([
    admin.from("onboarding_hotels").select("id, nome, phone, status").eq("id", id).maybeSingle(),
    admin.from("hotel_accounts").select("public_phone").eq("onboarding_hotel_id", id).maybeSingle(),
  ]);

  if (onboardingError) {
    return NextResponse.json({ error: onboardingError.message }, { status: 500 });
  }
  if (!onboarding) {
    return NextResponse.json({ error: "Struttura onboarding non trovata" }, { status: 404 });
  }

  const rawPhone = linkedHotel?.public_phone ?? onboarding.phone;
  const phone = normalizePhoneE164(rawPhone);
  if (!phone) {
    return NextResponse.json(
      { error: "Telefono non valido o assente. Correggi il numero e salva prima di inviare la chiamata." },
      { status: 400 },
    );
  }

  try {
    const result = await startVoiceVerification(phone);

    await logAdminAction(admin, request, {
      actor: gate.profile,
      action: "trigger_onboarding_verify_call",
      targetType: "onboarding",
      targetId: id,
      details: { phone: result.phone, twilioStatus: result.status, onboardingStatus: onboarding.status },
    });

    return NextResponse.json({
      ok: true,
      phone: result.phone,
      status: result.status,
      message: "Chiamata Twilio avviata. Chi risponde al numero riceverà il codice vocale.",
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile avviare la chiamata Twilio." },
      { status: 502 },
    );
  }
}
