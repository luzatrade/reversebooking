import type { Locale } from "@/lib/i18n/translations";
import { trimSeoTitleSegment } from "@/lib/seo/serp-copy";

const TITLE_MAX = 72;

type StructureTitleInput = {
  name: string;
  cityName: string;
};

/**
 * SERP title for a property page.
 * Keeps booking/prenotazione intent in a natural phrase — not stuffed "BOOKING".
 */
export function buildStructureSeoTitle(record: StructureTitleInput, locale: Locale = "it"): string {
  const city = record.cityName.trim();
  const name = record.name.trim();
  const isEn = locale === "en";
  const longSuffix = isEn
    ? " — Book direct, no commission"
    : " — Prenotazione diretta senza commissioni";
  const shortSuffix = isEn ? " — Book direct" : " — Prenotazione diretta";
  const cityJoiner = isEn ? " in " : " a ";

  const build = (propertyName: string, suffix: string) =>
    `${propertyName}${cityJoiner}${city}${suffix}`;

  let title = build(name, longSuffix);
  if (title.length <= TITLE_MAX) return title;

  title = build(name, shortSuffix);
  if (title.length <= TITLE_MAX) return title;

  const maxNameLength = Math.max(18, TITLE_MAX - shortSuffix.length - cityJoiner.length - city.length);
  const trimmedName = trimSeoTitleSegment(name, maxNameLength);
  return build(trimmedName, shortSuffix);
}
