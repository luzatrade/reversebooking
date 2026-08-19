import { NextResponse } from "next/server";
import { isCronAuthorized } from "@/lib/cron/auth";
import { resolveNotificationEmailFrom } from "@/lib/email/from";
import { sendEmailNotification } from "@/lib/notifications/email";
import { getResendApiKey, getResendEnvDiagnostics } from "@/lib/notifications/resend-env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: Request): boolean {
  if (isCronAuthorized(request)) return true;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const authHeader = request.headers.get("authorization");
  return Boolean(serviceKey && authHeader === `Bearer ${serviceKey}`);
}

/** Diagnostica Resend in produzione (solo admin/cron). */
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }

  const diagnostics = getResendEnvDiagnostics();
  const from = resolveNotificationEmailFrom();
  const adminEmail = process.env.ADMIN_NOTIFY_EMAIL?.trim() || "info@hotelsdrop.com";

  const probe = await sendEmailNotification({
    to: adminEmail,
    subject: "[HotelsDrop] probe Resend",
    html: "<p>Probe automatico — ignora.</p>",
  });

  return NextResponse.json({
    from,
    diagnostics,
    probe,
    keyLength: getResendApiKey()?.length ?? 0,
    keyPrefix: getResendApiKey()?.slice(0, 4) ?? null,
  });
}
