import { resolveNotificationEmailFrom } from "@/lib/email/from";
import { getResendApiKey } from "@/lib/notifications/resend-env";

type EmailPayload = {
  to: string | null | undefined;
  subject: string;
  html: string;
  /** Header aggiuntivi, es. List-Unsubscribe sulle email al catalogo. */
  headers?: Record<string, string>;
};

export async function sendEmailNotification(payload: EmailPayload) {
  const to = payload.to?.trim();
  if (!to) return { ok: false, skipped: true, reason: "missing_recipient"};

  const resendApiKey = getResendApiKey();
  const from = resolveNotificationEmailFrom();

  if (!resendApiKey) {
    console.info("Email notification ready", { to, subject: payload.subject});
    return { ok: false, skipped: true, reason: "missing_resend_api_key"};
 }

  for (let attempt = 0; attempt < 6; attempt++) {
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
        ...(payload.headers ? { headers: payload.headers } : {}),
      }),
    });

    if (response.ok) return { ok: true, skipped: false };

    const text = await response.text();
    const isRateLimited = response.status === 429 || text.includes("rate_limit_exceeded");
    if (!isRateLimited || attempt === 5) {
      return { ok: false, skipped: false, reason: text };
    }

    await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
  }

  return { ok: false, skipped: false, reason: "send_failed" };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const RESEND_MIN_INTERVAL_MS = 250;

let resendSendChain: Promise<void> = Promise.resolve();
let lastResendSentAt = 0;

/** Accoda gli invii Resend per restare sotto ~4 req/s (limite piano: 10/s). */
export async function sendEmailNotificationQueued(payload: EmailPayload) {
  const run = async () => {
    const waitMs = Math.max(0, RESEND_MIN_INTERVAL_MS - (Date.now() - lastResendSentAt));
    if (waitMs > 0) await new Promise((resolve) => setTimeout(resolve, waitMs));
    const result = await sendEmailNotification(payload);
    lastResendSentAt = Date.now();
    return result;
  };

  const resultPromise = resendSendChain.then(run, run);
  resendSendChain = resultPromise.then(
    () => undefined,
    () => undefined,
  );
  return resultPromise;
}
