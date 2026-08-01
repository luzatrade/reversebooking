import type { Locale } from "@/lib/i18n/translations";

/** Preferisce la lingua richiesta; se manca, usa l'altra versione disponibile. */
export function pickLocalizedDescription(
  descriptionIt: string | null | undefined,
  descriptionEn: string | null | undefined,
  locale: Locale,
): string | null {
  const it = descriptionIt?.trim() || null;
  const en = descriptionEn?.trim() || null;
  if (locale === "en") return en || it;
  return it || en;
}

export function hasItalianDescription(descriptionIt: string | null | undefined): boolean {
  return Boolean(descriptionIt?.trim());
}

export function needsEnglishTranslation(
  descriptionIt: string | null | undefined,
  descriptionEn: string | null | undefined,
): boolean {
  return hasItalianDescription(descriptionIt) && !descriptionEn?.trim();
}
