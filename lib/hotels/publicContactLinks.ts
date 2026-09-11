import type { Locale } from "@/lib/i18n/translations";
import { getTravelerContactTemplates } from "@/lib/hotels/travelerContactTemplates";

export function normalizeWebsiteUrl(raw: string | null | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

export function buildContactEmailHref(email: string, locale: Locale = "it"): string {
  const { emailSubject, emailBody } = getTravelerContactTemplates(locale);
  return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}

export function buildWhatsAppHref(phone: string, locale: Locale = "it"): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  const { whatsAppMessage } = getTravelerContactTemplates(locale);
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsAppMessage)}`;
}

export function buildTelHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
