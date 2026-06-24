import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { normalizePhoneE164 } from "@/lib/phone/normalize";
import { startVoiceVerification } from "@/lib/twilio/verify";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = await rateLimit({ key: "phone-verify-request", identifier: ip, max: 5, windowSeconds: 900 });
  if (!limit.allowed) return tooManyRequestsResponse();

  const auth = await requireUser(request);
  if ("error" in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  const admin = createServiceRoleClient();
  if (!admin) return NextResponse.json({ error: "Server non configurato." }, { status: 503 });

  const [{ data: profile }, { data: hotel }] = await Promise.all([
    admin.from("profiles").select("phone_verified, role").eq("user_id", auth.user.id).maybeSingle(),
    admin
      .from("hotel_accounts")
      .select("onboarding_hotel_id, public_phone, account_status")
      .eq("user_id", auth.user.id)
      .maybeSingle(),
  ]);

  if (profile?.role !== "hotel" || !hotel?.onboarding_hotel_id) {
    return NextResponse.json({ error: "Nessuna rivendica struttura in corso." }, { status: 400 });
  }

  if (profile.phone_verified) {
    return NextResponse.json({ ok: true, alreadyVerified: true });
  }

  const phone = normalizePhoneE164(hotel.public_phone);
  if (!phone) {
    return NextResponse.json(
      { error: "Telefono non disponibile per la verifica. Contatta assistenza." },
      { status: 400 },
    );
  }

  try {
    const result = await startVoiceVerification(phone);
    return NextResponse.json({ ok: true, phone: result.phone, status: result.status });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Impossibile avviare la verifica." },
      { status: 502 },
    );
  }
}
