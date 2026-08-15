import type { Locale } from "@/lib/i18n/translations";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";
import { buildHotelSeoLine } from "@/lib/seo/structure-seo-copy";

/** Unique crawlable copy when the property has no manual description. */
export function buildStructureSeoDescription(
  record: Pick<StructureSeoRecord, "name" | "cityName" | "countryName" | "structureType" | "source" | "descriptionIt" | "descriptionEn">,
  locale: Locale,
): string {
  const manual =
    locale === "en"
      ? record.descriptionEn?.trim() || record.descriptionIt?.trim()
      : record.descriptionIt?.trim() || record.descriptionEn?.trim();
  if (manual) return manual;

  return buildHotelSeoLine({ name: record.name, cityName: record.cityName }, locale);
}
