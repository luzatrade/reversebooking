import { BRAND_NAME } from "@/lib/legal/company";

export function normalizeWebsiteUrl(raw: string | null | undefined): string | null {
  const value = raw?.trim();
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

export function buildContactEmailHref(propertyName: string, email: string): string {
  const emailLines = [
    `Ciao! Ho trovato ${propertyName} su ${BRAND_NAME} 😊 e vorrei chiedere gentilmente informazioni e disponibilità per le seguenti date:`,
    "",
    "Check-in: ___",
    "Check-out: ___",
    "Ospiti: ___",
    "",
    "Resto in attesa di un vostro cortese riscontro.",
    "Grazie mille!",
  ];
  return `mailto:${email}?subject=${encodeURIComponent(`Richiesta disponibilità — ${propertyName}`)}&body=${encodeURIComponent(emailLines.join("\n"))}`;
}

export function buildWhatsAppHref(propertyName: string, phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  const msg = `Ciao! Ho trovato ${propertyName} su ${BRAND_NAME} 😊 e vorrei chiedere gentilmente informazioni e disponibilità per le seguenti date: ... Grazie mille!`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}

export function buildTelHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
