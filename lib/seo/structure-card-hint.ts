import { getCitySeoContext } from "@/lib/seo/city-context";
import type { Locale } from "@/lib/i18n/translations";

const CARD_ATTRACTION_LIMIT = 4;
const MAX_ITEM_LENGTH = 42;

function stripParentheticals(value: string): string {
  return value.replace(/—[^—]*—/g, "").trim();
}

function normalizeAttractionLabel(value: string): string {
  let label = stripParentheticals(value.trim());
  label = label.replace(/^(il|lo|la|i|gli|le|the)\s+/i, "").trim();
  if (label.length > MAX_ITEM_LENGTH) {
    return `${label.slice(0, MAX_ITEM_LENGTH - 1).trim()}…`;
  }
  return label;
}

function attractionsFromPhrase(phrase: string, limit = CARD_ATTRACTION_LIMIT): string[] {
  const items: string[] = [];
  for (const part of phrase.split(",")) {
    const label = normalizeAttractionLabel(part);
    if (!label) continue;
    if (items.some((existing) => existing.toLowerCase() === label.toLowerCase())) continue;
    items.push(label);
    if (items.length >= limit) break;
  }
  return items;
}

/** Short POI line for structure cards, e.g. "Colosseo · Trastevere · Vaticano". */
export function getStructureCardAttractionHint(cityName: string | null | undefined, locale: Locale): string | null {
  if (!cityName?.trim()) return null;
  const cityContext = getCitySeoContext(cityName);
  if (!cityContext) return null;

  const phrase = locale === "en" ? cityContext.phraseEn : cityContext.phraseIt;
  const items = attractionsFromPhrase(phrase);
  return items.length ? items.join(" · ") : null;
}

/** Manual DB description takes priority; otherwise city attractions for the card body. */
export function getStructureCardSecondaryLine(
  cityName: string | null | undefined,
  locale: Locale,
  manualDescription: string | null | undefined,
): string | null {
  const manual = manualDescription?.trim();
  if (manual) return manual;
  return getStructureCardAttractionHint(cityName, locale);
}
