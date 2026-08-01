import { getManualHighlightsForCity } from "@/data/cityHighlights";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

type LocalizedHint = { it: string; en: string };

/** Zone e angoli editoriali per le card destinazione (slug canonico). */
const DESTINATION_CARD_HINTS: Record<string, LocalizedHint> = {
  roma: { it: "Centro Storico · Trastevere · Termini · EUR", en: "Historic centre · Trastevere · Termini · EUR" },
  milano: { it: "Duomo · Porta Garibaldi · Fiera", en: "Duomo · Porta Garibaldi · Trade fair" },
  napoli: { it: "Centro · Golfo · Costiera", en: "City centre · Gulf · Amalfi Coast" },
  firenze: { it: "Centro · Oltrarno · Toscana", en: "Historic centre · Oltrarno · Tuscany" },
  torino: { it: "Centro · Lingotto · Alpi", en: "City centre · Lingotto · Alps" },
  bologna: { it: "Centro · Università · Fiere", en: "City centre · University · Trade fairs" },
  catania: { it: "Etna · Mare · Barocco", en: "Etna · Coast · Baroque" },
  palermo: { it: "Centro storico · Waterfront · Aeroporto", en: "Historic centre · Waterfront · Airport" },
  bari: { it: "Centro · Puglia · Mare", en: "City centre · Puglia · Coast" },
  verona: { it: "Arena · Centro · Lago di Garda", en: "Arena · City centre · Lake Garda" },
  rimini: { it: "Riviera · Mare · Centro", en: "Riviera · Beach · City centre" },
  parigi: { it: "Marais · Saint-Germain · Montmartre", en: "Marais · Saint-Germain · Montmartre" },
  londra: { it: "City · Westminster · Metro", en: "City · Westminster · Tube" },
  barcelona: { it: "Eixample · Barceloneta · Gràcia", en: "Eixample · Barceloneta · Gràcia" },
  amsterdam: { it: "Canali · Musei · Centro", en: "Canals · Museums · City centre" },
  berlino: { it: "Mitte · Kreuzberg · Prenzlauer Berg", en: "Mitte · Kreuzberg · Prenzlauer Berg" },
  madrid: { it: "Prado · Retiro · Gran Vía", en: "Prado · Retiro · Gran Vía" },
  tokyo: { it: "Shibuya · Shinjuku · Asakusa", en: "Shibuya · Shinjuku · Asakusa" },
  venezia: { it: "San Marco · Cannaregio · Mestre", en: "San Marco · Cannaregio · Mestre" },
  genova: { it: "Porto · Centro · Levante", en: "Port · Historic centre · Levante" },
  padova: { it: "Centro · Università · Venezia", en: "City centre · University · Venice" },
  trieste: { it: "Centro · Adriatico · Europa", en: "City centre · Adriatic · Europe" },
  salerno: { it: "Centro · Costiera Amalfitana", en: "City centre · Amalfi Coast" },
  perugia: { it: "Centro · Umbria · Borghi", en: "City centre · Umbria · Villages" },
  siracusa: { it: "Barocco · Mare · Archeologia", en: "Baroque · Sea · Archaeology" },
  lecce: { it: "Barocco · Salento · Centro", en: "Baroque · Salento · City centre" },
  bergamo: { it: "Città Alta · Aeroporto · Laghi", en: "Upper Town · Airport · Lakes" },
  bolzano: { it: "Dolomiti · Centro · Enogastronomia", en: "Dolomites · City centre · Food & wine" },
  lisbona: { it: "Alfama · Baixa · Centro", en: "Alfama · Baixa · City centre" },
  lisbon: { it: "Alfama · Baixa · Centro", en: "Alfama · Baixa · City centre" },
  vienna: { it: "Musei · Opera · Centro", en: "Museums · Opera · City centre" },
  zurigo: { it: "Centro · Laghi · Business", en: "City centre · Lakes · Business" },
  praga: { it: "Centro storico · Cultura · Ponte Carlo", en: "Old Town · Culture · Charles Bridge" },
  dublin: { it: "Centro · Pub culture · Irlanda", en: "City centre · Pub culture · Ireland" },
  bruxelles: { it: "UE · Gastronomia · Art Nouveau", en: "EU quarter · Food · Art Nouveau" },
  monaco: { it: "Costa Azzurra · Premium · Eventi", en: "French Riviera · Premium · Events" },
  santorini: { it: "Caldera · Tramonti · Boutique", en: "Caldera · Sunsets · Boutique" },
  mykonos: { it: "Spiagge · Nightlife · Chora", en: "Beaches · Nightlife · Chora" },
  crete: { it: "Mare · Borghi · Isola", en: "Coast · Villages · Island" },
  ibiza: { it: "Spiagge · Nightlife · Boutique", en: "Beaches · Nightlife · Boutique" },
  malta: { it: "Storia · Mediterraneo · City break", en: "History · Mediterranean · City break" },
  copenhagen: { it: "Design · Canali · Nordica", en: "Design · Canals · Nordic" },
  stockholm: { it: "Archipelago · Musei · Centro", en: "Archipelago · Museums · City centre" },
  oslo: { it: "Fiordi · Business · Cultura nordica", en: "Fjords · Business · Nordic culture" },
  helsinki: { it: "Design · Baltico · Sauna", en: "Design · Baltic · Sauna" },
  athens: { it: "Acropoli · Plaka · Isole", en: "Acropolis · Plaka · Islands" },
  dubai: { it: "Luxury · Business · Mare", en: "Luxury · Business · Coast" },
  regina: { it: "Centro · Wascana · Business", en: "Downtown · Wascana · Business" },
};

const GENERIC_FALLBACK: LocalizedHint = {
  it: "Hotel, B&B e appartamenti",
  en: "Hotels, B&Bs and apartments",
};

function isGenericHighlightName(name: string, cityName: string): boolean {
  const normalized = name.trim().toLowerCase();
  const city = cityName.trim().toLowerCase();
  if (!normalized || normalized === city) return true;
  if (normalized.startsWith("vedute di ") || normalized.startsWith("views of ")) return true;
  if (normalized.startsWith("scopri ") || normalized.startsWith("discover ")) return true;
  if (normalized.startsWith("destinazione") || normalized === "destination") return true;
  if (normalized.startsWith("galleria") || normalized === "gallery") return true;
  if (normalized.startsWith("in evidenza") || normalized === "featured") return true;
  return false;
}

function hintsFromHighlights(hub: DestinationHub, locale: Locale): string | null {
  const highlights = getManualHighlightsForCity({
    cityName: hub.displayName,
    cityId: hub.cityId,
    countryCode: hub.countryCode,
  });
  if (!highlights.length) return null;

  const names = highlights
    .map((item) => (locale === "en" ? item.nameEn : item.nameIt))
    .filter((name) => !isGenericHighlightName(name, hub.displayName));

  const unique: string[] = [];
  for (const name of names) {
    if (!unique.some((existing) => existing.toLowerCase() === name.toLowerCase())) {
      unique.push(name);
    }
    if (unique.length >= 4) break;
  }

  return unique.length ? unique.join(" · ") : null;
}

export function getDestinationCardHint(hub: DestinationHub, locale: Locale): string {
  const slugHint = DESTINATION_CARD_HINTS[hub.slug];
  if (slugHint) return locale === "en" ? slugHint.en : slugHint.it;

  const highlightHint = hintsFromHighlights(hub, locale);
  if (highlightHint) return highlightHint;

  return locale === "en" ? GENERIC_FALLBACK.en : GENERIC_FALLBACK.it;
}
