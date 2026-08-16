import type { Locale } from "@/lib/i18n/translations";
import { getCitySeoContext } from "@/lib/seo/city-context";
import { italianInCity, resolveGeoContext } from "@/lib/seo/geo-context";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";

type DescriptionInput = Pick<
  StructureSeoRecord,
  "name" | "cityName" | "countryName" | "structureType" | "source" | "descriptionIt" | "descriptionEn"
>;

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

function hashVariant(seed: string, count: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return count > 0 ? hash % count : 0;
}

function manualDescription(record: DescriptionInput, locale: Locale): string | null {
  const value =
    locale === "en"
      ? record.descriptionEn?.trim() || record.descriptionIt?.trim()
      : record.descriptionIt?.trim() || record.descriptionEn?.trim();
  return value || null;
}

function buildItalianParagraphs(record: DescriptionInput): string[] {
  const { name, cityName, countryName } = record;
  const kind = structureKindLabel(record, "it");
  const inCity = italianInCity(cityName);
  const geo = resolveGeoContext(cityName, countryName);
  const cityContext = getCitySeoContext(cityName);
  const variant = hashVariant(`${name}|${cityName}`, 3);

  let intro = `${name} è un ${kind} ${inCity}`;
  if (geo) {
    intro += `, in provincia di ${geo.provinceName} (${geo.regionName}), nel ${geo.macroAreaIt}. ${cityName} si trova in ${geo.regionName}, nel ${geo.macroAreaIt}.`;
  } else {
    intro += `, ${countryName}.`;
  }
  if (cityContext) {
    intro += ` Soluzione ideale per visitare ${cityContext.phraseIt}.`;
  }

  const transactional = [
    `Prenotazione diretta e booking su HotelsDrop: invia una richiesta gratuita con date e budget e ricevi un'offerta diretta da ${name}, senza commissione per chi viaggia.`,
    `Su HotelsDrop puoi prenotare ${inCity} con reverse booking: una richiesta di booking raggiunge la struttura che risponde con proposta diretta, senza commissioni.`,
    `Richiedi un booking personalizzato ${inCity}: prenotazione diretta con offerta su misura da ${name}, senza commissione e contatto diretto con la struttura.`,
  ][variant];

  const contact = [
    `Contatta ${name} via email, telefono o WhatsApp, oppure invia subito una richiesta di prenotazione diretta per ${cityName}.`,
    `Per un soggiorno ${inCity}, puoi scrivere alla struttura o usare HotelsDrop per ricevere offerte dirette senza commissione.`,
  ][variant % 2];

  return [intro, transactional, contact];
}

function buildEnglishParagraphs(record: DescriptionInput): string[] {
  const { name, cityName, countryName } = record;
  const kind = structureKindLabel(record, "en");
  const geo = resolveGeoContext(cityName, countryName);
  const cityContext = getCitySeoContext(cityName);
  const variant = hashVariant(`${name}|${cityName}`, 3);

  let intro = `${name} is a ${kind} in ${cityName}`;
  if (geo) {
    intro += `, ${geo.regionName}, ${geo.macroAreaEn}. ${cityName} is located in ${geo.regionName}, in ${geo.macroAreaEn}.`;
  } else {
    intro += `, ${countryName}.`;
  }
  if (cityContext) {
    intro += ` A convenient base for exploring ${cityContext.phraseEn}.`;
  }

  const transactional = [
    `Direct booking on HotelsDrop: send a free stay request with your dates and budget and receive a direct offer from ${name} — no booking commission for travellers.`,
    `Book in ${cityName} with HotelsDrop reverse booking: one request reaches the property with a direct, commission-free proposal.`,
    `Request a personalised booking in ${cityName} for a direct offer from ${name}, with no traveller commission.`,
  ][variant];

  const contact = [
    `Contact ${name} by email, phone or WhatsApp, or send a direct booking request for ${cityName} now.`,
    `For your stay in ${cityName}, message the property directly or use HotelsDrop for commission-free direct offers.`,
  ][variant % 2];

  return [intro, transactional, contact];
}

/** Multi-paragraph on-page SEO copy when no manual description exists. */
export function buildStructurePageParagraphs(record: DescriptionInput, locale: Locale): string[] {
  const manual = manualDescription(record, locale);
  if (manual) return [manual];

  return locale === "en" ? buildEnglishParagraphs(record) : buildItalianParagraphs(record);
}

/** Flat description for JSON-LD and legacy callers. */
export function buildStructureSeoDescription(record: DescriptionInput, locale: Locale): string {
  return buildStructurePageParagraphs(record, locale).join(" ");
}

/** Meta description candidates with geo + booking keywords (Italian). */
export function buildStructureMetaDescriptionCandidates(record: DescriptionInput, locale: Locale): string[] {
  const manual = manualDescription(record, locale);
  if (manual) return [manual];

  const { name, cityName, countryName } = record;
  const geo = resolveGeoContext(cityName, countryName);
  const cityContext = getCitySeoContext(cityName);
  const inCity = italianInCity(cityName);

  if (locale === "en") {
    const region = geo ? ` (${geo.regionName})` : "";
    const poi = cityContext ? ` near ${cityContext.phraseEn}.` : ".";
    return [
      `Book ${name} in ${cityName}${region}: direct booking, no commission.${poi} Request a free offer on HotelsDrop.`,
      `Direct booking for ${name} in ${cityName}${region}. Reverse booking on HotelsDrop — commission-free offers.`,
      `${name} in ${cityName}${region}: lodging with direct booking and no traveller commission on HotelsDrop.`,
    ];
  }

  const region = geo ? ` (${geo.regionName}, ${geo.macroAreaIt})` : "";
  const poi = cityContext ? ` Vicino a ${cityContext.phraseIt}.` : "";
  return [
    `Prenota ${name} ${inCity}${region}: booking diretto e prenotazione senza commissione.${poi} Richiedi offerta su HotelsDrop.`,
    `Booking e prenotazione diretta per ${name} ${inCity}${region}. Reverse booking HotelsDrop, senza commissione per chi viaggia.`,
    `${name} ${inCity}${region}: hotel con prenotazione diretta, offerta personalizzata e zero commissioni su HotelsDrop.`,
  ];
}
