import type { Locale } from "@/lib/i18n/translations";
import { getCitySeoContext } from "@/lib/seo/city-context";
import { trimSeoDescription } from "@/lib/seo/serp-copy";

type HotelCopyInput = {
  name: string;
  cityName: string;
};

/** One-line hotel description — POI only when verified in city-context.json. */
export function buildHotelSeoLine(input: HotelCopyInput, locale: Locale): string {
  const { name, cityName } = input;
  const cityContext = getCitySeoContext(cityName);

  if (locale === "en") {
    if (cityContext) {
      return `${name} — direct booking in ${cityName}, ideal for exploring ${cityContext.phraseEn}. Request a personalised commission-free offer on HotelsDrop.`;
    }
    return `${name} — direct booking in ${cityName}. Request a personalised commission-free offer on HotelsDrop.`;
  }

  if (cityContext) {
    return `${name} — prenotazione diretta a ${cityName}, ideale per visitare ${cityContext.phraseIt}. Su HotelsDrop richiedi un'offerta personalizzata senza commissioni.`;
  }
  return `${name} — prenotazione diretta a ${cityName}. Su HotelsDrop richiedi un'offerta personalizzata senza commissioni.`;
}

export function buildHotelMetaDescription(input: HotelCopyInput, locale: Locale): string {
  return trimSeoDescription(buildHotelSeoLine(input, locale));
}

export function buildHotelSeoTitle(input: HotelCopyInput, locale: Locale): string {
  const { name, cityName } = input;
  if (locale === "en") {
    return `Book ${name} in ${cityName} — direct booking`;
  }
  return `Prenota ${name} a ${cityName} — prenotazione diretta`;
}

type DestinationCopyInput = {
  cityName: string;
  structureCount: number;
};

export function buildDestinationSeoLine(input: DestinationCopyInput, locale: Locale): string {
  const { cityName, structureCount } = input;
  const cityContext = getCitySeoContext(cityName);

  if (locale === "en") {
    if (cityContext) {
      return `Book hotels in ${cityName} near ${cityContext.phraseEn}. ${structureCount} properties with direct booking and zero traveller commission on HotelsDrop.`;
    }
    return `Book hotels in ${cityName}. ${structureCount} properties with direct booking and zero traveller commission on HotelsDrop.`;
  }

  if (cityContext) {
    return `Prenota hotel a ${cityName} vicino a ${cityContext.phraseIt}. ${structureCount} strutture con prenotazione diretta e zero commissioni su HotelsDrop.`;
  }
  return `Prenota hotel a ${cityName}. ${structureCount} strutture con prenotazione diretta e zero commissioni su HotelsDrop.`;
}
