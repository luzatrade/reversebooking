import type { Locale } from "@/lib/i18n/translations";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";

function structureKindLabel(
  record: Pick<StructureSeoRecord, "source" | "structureType">,
  locale: Locale,
): string {
  if (record.source === "onboarding") {
    return locale === "en" ? "lodging property" : "struttura ricettiva";
  }
  const type = (record.structureType ?? "hotel").toLowerCase();
  const mapIt: Record<string, string> = {
    hotel: "hotel",
    bnb: "B&B",
    apartment: "appartamento",
    agriturismo: "agriturismo",
    resort: "resort",
  };
  const mapEn: Record<string, string> = {
    hotel: "hotel",
    bnb: "B&B",
    apartment: "apartment",
    agriturismo: "farm stay",
    resort: "resort",
  };
  const table = locale === "en" ? mapEn : mapIt;
  return table[type] ?? (locale === "en" ? "property" : "struttura");
}

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

  const kind = structureKindLabel(record, locale);
  const city = record.cityName;
  const name = record.name;

  if (locale === "en") {
    return `${name} is a ${kind} in ${city}, ${record.countryName}. On HotelsDrop you can send a free personalised stay request and receive a direct offer from this property — or contact them directly by email, phone or WhatsApp. No booking commission for travellers.`;
  }

  return `${name} è un ${kind} a ${city}, ${record.countryName}. Su HotelsDrop puoi inviare una richiesta di soggiorno gratuita e personalizzata per ricevere un'offerta diretta da questa struttura — oppure contattarla subito via email, telefono o WhatsApp. Nessuna commissione di prenotazione per chi viaggia.`;
}
