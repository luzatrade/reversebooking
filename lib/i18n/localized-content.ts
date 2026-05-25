import type { Locale } from "@/lib/i18n/translations";

/**
 * Fase 2 (futuro): traduzioni annunci/profili da DB o API.
 * Per ora restituisce sempre il testo originale (di solito italiano).
 */
export function getLocalizedUserText<T extends string | null | undefined>(
  value: T,
  _locale: Locale,
): T {
  return value;
}
