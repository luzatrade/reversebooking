import { majorWorldCities } from "@/lib/constants/world-cities";
import { getDeCityDisplayName } from "@/lib/seo/de-export-content";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

const cityNameById = new Map(majorWorldCities.map((city) => [city.city_id, city.city_name]));

const englishNamesByDisplayName: Record<string, string> = {
  Roma: "Rome",
  Milano: "Milan",
  Napoli: "Naples",
  Firenze: "Florence",
  Venezia: "Venice",
  Torino: "Turin",
  Genova: "Genoa",
  Bergamo: "Bergamo",
  Perugia: "Perugia",
  Palermo: "Palermo",
  Bologna: "Bologna",
  Verona: "Verona",
  Rimini: "Rimini",
  Bolzano: "Bolzano",
  Catania: "Catania",
  Bari: "Bari",
  Londra: "London",
  Parigi: "Paris",
  Berlino: "Berlin",
  Amsterdam: "Amsterdam",
  Barcelona: "Barcelona",
  Madrid: "Madrid",
  Tokyo: "Tokyo",
  Lisbona: "Lisbon",
  Vienna: "Vienna",
  Zurigo: "Zurich",
  Praga: "Prague",
  Bruxelles: "Brussels",
  Monaco: "Monaco",
  Atene: "Athens",
  Dublino: "Dublin",
  Stoccolma: "Stockholm",
  Oslo: "Oslo",
  Helsinki: "Helsinki",
  Copenaghen: "Copenhagen",
  Santorini: "Santorini",
  Mykonos: "Mykonos",
  Creta: "Crete",
  Ibiza: "Ibiza",
  Malta: "Malta",
  Dubai: "Dubai",
  Siracusa: "Syracuse",
  Lecce: "Lecce",
  Salerno: "Salerno",
  Padova: "Padua",
  Trieste: "Trieste",
  Regina: "Regina",
};

export function getDestinationDisplayName(hub: DestinationHub, locale: Locale): string {
  if (locale === "it") return hub.displayName;
  if (locale === "de") return getDeCityDisplayName(hub.slug, hub.displayName);
  if (hub.cityId) {
    const canonical = cityNameById.get(hub.cityId);
    if (canonical) return canonical;
  }
  return englishNamesByDisplayName[hub.displayName] ?? hub.displayName;
}
