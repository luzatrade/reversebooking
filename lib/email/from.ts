import { getTransactionalEmailFrom } from "@/lib/legal/company";

/** Legge il mittente da env (Vercel) con fallback su info@hotelsdrop.com. */
export function resolveNotificationEmailFrom(): string {
  const fromEnv =
    process.env.NOTIFICATION_EMAIL_FROM?.trim() ||
    process.env.EMAIL_FROM?.trim() ||
    process.env.AUTH_EMAIL_FROM?.trim();
  return fromEnv || getTransactionalEmailFrom();
}
