import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth/requireUser";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { completeOnboardingClaim } from "@/lib/hotel/onboarding-claim";
import { normalizePhoneE164 } from "@/lib/phone/normalize";
import { checkVoiceVerification } from "@/lib/twilio/verify";
import { getClientIp, rateLimit, tooManyRequestsResponse } from "@/lib/security/rate-limit";
import { notifyAdminAlertSafe } from "@/lib/notifications/admin-alert";

type Body = { code?: string };

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = await rateLimit({ key: "phone-verify-confirm", identifier: ip, max: 10, windowSeconds: 900 });
  if (!limit.allowed) return tooManyRequestsResponse();

  const auth = await requireUser(request);
  if ("error" in auth) return NextResponse.json({ error: auth.error }, { status: auth.status });

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON non valido" }, { status: 400 });
  }

  const code = body.code?.trim();
  if (!code) return NextResponse.json({ error: "Inserisci il codice ricevuto." }, { status: 400 });

  const admin = createServiceRoleClient();
  if (!admin) return NextResponse.json({ error: "Server non configurato." }, { status: 503 });

  const [{ data: profile }, { data: hotel }] = await Promise.all([
    admin.from("profiles").select("phone_verified, role").eq("user_id", auth.user.id).maybeSingle(),
    admin
      .from("hotel_accounts")
      .select("onboarding_hotel_id, public_phone")
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
    const result = await checkVoiceVerification(phone, code);
    if (!result.approved) {
      return NextResponse.json({ error: "Codice non valido o scaduto. Riprova." }, { status: 400 });
    }

    await admin
      .from("profiles")
      .update({ phone_verified: true, phone_number: phone })
      .eq("user_id", auth.user.id);

    await completeOnboardingClaim(admin, hotel.onboarding_hotel_id, auth.user.id);

    const [{ data: onboardingHotel }, { data: profileRow }] = await Promise.all([
      admin.from("onboarding_hotels").select("nome, city_name").eq("id", hotel.onboarding_hotel_id).maybeSingle(),
      admin.from("profiles").select("email").eq("user_id", auth.user.id).maybeSingle(),
    ]);

    notifyAdminAlertSafe({
      subject: `[HotelsDrop] Rivendica completata · ${onboardingHotel?.nome ?? "Struttura"}`,
      title: "Rivendica profilo catalogo completata",
      lines: [
        { label: "Struttura", value: onboardingHotel?.nome },
        { label: "Città", value: onboardingHotel?.city_name },
        { label: "Email partner", value: profileRow?.email },
        { label: "Telefono verificato", value: phone },
        { label: "Onboarding ID", value: hotel.onboarding_hotel_id },
      ],
      consolePath: `/console/onboarding/${hotel.onboarding_hotel_id}`,
    });

    return NextResponse.json({ ok: true, verified: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Verifica non riuscita." },
      { status: 400 },
    );
  }
}
