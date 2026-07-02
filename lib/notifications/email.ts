import { resolveNotificationEmailFrom } from "@/lib/email/from";

type EmailPayload = {
  to: string | null | undefined;
  subject: string;
  html: string;
};

export async function sendEmailNotification(payload: EmailPayload) {
  const to = payload.to?.trim();
  if (!to) return { ok: false, skipped: true, reason: "missing_recipient"};

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = resolveNotificationEmailFrom();

  if (!resendApiKey) {
    console.info("Email notification ready", { to, subject: payload.subject});
    return { ok: false, skipped: true, reason: "missing_resend_api_key"};
 }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
   },
    body: JSON.stringify({
      from,
      to,
      subject: payload.subject,
      html: payload.html,
   }),
 });

  if (!response.ok) {
    const text = await response.text();
    return { ok: false, skipped: false, reason: text};
 }

  return { ok: true, skipped: false};
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
