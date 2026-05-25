import {
  getCityPhotoVariants,
  resolveCanonicalCityId,
  unsplashPhoto,
  TRAVEL_PHOTOS,
} from "@/lib/destination-slider/cityPhotos";
import { formatPoiLabel } from "@/lib/destination-slider/slideLabels";
import type { DestinationSliderSlide } from "@/types/destination-slider";

export type CityHighlight = {
  id: string;
  nameIt: string;
  nameEn: string;
  photoUrl: string;
  /** Ricerca Commons se manca photoUrl (raro). */
  commonsSearch?: string;
  hintIt?: string;
  hintEn?: string;
};

/** Pacchetti manuali con URL Wikimedia fissi (qualità massima). */
const MANUAL_WIKIMEDIA_CITY_IDS = new Set(["IT-REG"]);

function w(
  id: string,
  nameIt: string,
  nameEn: string,
  photoUrl: string,
  hintIt: string,
  hintEn: string,
): CityHighlight {
  return { id, nameIt, nameEn, photoUrl, hintIt, hintEn };
}

const P = TRAVEL_PHOTOS;
const u = unsplashPhoto;

function h(
  id: string,
  nameIt: string,
  nameEn: string,
  photoId: string,
  hintIt: string,
  hintEn: string,
): CityHighlight {
  return { id, nameIt, nameEn, photoUrl: u(photoId), hintIt, hintEn };
}

const highlightsByCityId: Record<string, CityHighlight[]> = {
  "IT-ROM": [
    h("rome-colosseum", "Colosseo", "Colosseum", P.colosseum, "Icona imperiale", "Imperial landmark"),
    h("rome-street", "Centro storico", "Historic center", P.europeStreet, "Tridente e piazze", "Squares & alleys"),
    h("rome-culture", "Musei Capitolini", "Capitoline Museums", P.culture, "Arte e storia", "Art & history"),
    h("rome-canal", "Trastevere", "Trastevere", P.canal, "Vita locale", "Local life"),
    h("rome-night", "Vista notturna", "Night views", P.night, "Roma by night", "Rome at night"),
  ],
  "IT-MIL": [
    h("mil-duomo", "Duomo di Milano", "Milan Cathedral", P.night, "Piazza del Duomo", "Duomo square"),
    h("mil-galleria", "Galleria Vittorio Emanuele II", "Galleria Vittorio Emanuele II", P.europeStreet, "Shopping", "Shopping"),
    h("mil-navigli", "Navigli", "Navigli canals", P.canal, "Vita notturna", "Nightlife"),
    h("mil-brera", "Brera", "Brera", P.culture, "Quartiere artistico", "Arts district"),
  ],
  "IT-FLR": [
    h("flr-duomo", "Duomo di Firenze", "Florence Cathedral", P.florence, "Centro UNESCO", "UNESCO center"),
    h("flr-arno", "Lungarni", "Arno riverfront", P.canal, "Sull'Arno", "On the Arno"),
    h("flr-uffizi", "Galleria degli Uffizi", "Uffizi Gallery", P.culture, "Arte rinascimentale", "Renaissance art"),
    h("flr-street", "Oltrarno", "Oltrarno", P.europeStreet, "Artigianato", "Craftsmen quarter"),
  ],
  "IT-VCE": [
    h("vce-canal", "Canal Grande", "Grand Canal", P.canal, "In gondola", "By gondola"),
    h("vce-san-marco", "Piazza San Marco", "St. Mark's Square", P.europeStreet, "Cuore di Venezia", "Heart of Venice"),
    h("vce-bridge", "Ponte di Rialto", "Rialto Bridge", P.florence, "Sul Canal Grande", "On the Grand Canal"),
    h("vce-islands", "Isola di Burano", "Burano island", P.beach, "Case colorate", "Colorful houses"),
  ],
  "IT-REG": [
    w(
      "reg-lungomare",
      "Lungomare Falcomatà",
      "Falcomatà promenade",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Reggio_Calabria_-_Lungomare_Falcomat%C3%A0_-_4.jpg/960px-Reggio_Calabria_-_Lungomare_Falcomat%C3%A0_-_4.jpg",
      "Passeggiata sul mare",
      "Seaside walk",
    ),
    w(
      "reg-mura",
      "Mura Greche",
      "Greek Walls",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mura_Greche_Reggio_Calabria.jpg/960px-Mura_Greche_Reggio_Calabria.jpg",
      "Parco archeologico",
      "Archaeological park",
    ),
    w(
      "reg-magna",
      "Museo Magna Grecia",
      "National Archaeological Museum",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bronzi_Di_Riace_Statua_A%2BB.jpg/960px-Bronzi_Di_Riace_Statua_A%2BB.jpg",
      "Bronzi di Riace",
      "Riace Bronzes",
    ),
    w(
      "reg-castello",
      "Castello Aragonese",
      "Aragonese Castle",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castello_Aragonese_-_Reggio_Calabria_02.jpg/960px-Castello_Aragonese_-_Reggio_Calabria_02.jpg",
      "Vista sul porto",
      "Harbour view",
    ),
    w(
      "reg-duomo",
      "Duomo di Reggio",
      "Reggio Cathedral",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Duomo_reggio_calabria_statua_santo_stefano.jpg",
      "Centro storico",
      "Historic center",
    ),
    w(
      "reg-stretto",
      "Stretto di Messina",
      "Strait of Messina",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Stretto_Di_Messina_Reggio_Calabria_Tramonto_%28120307611%29.jpeg/960px-Stretto_Di_Messina_Reggio_Calabria_Tramonto_%28120307611%29.jpeg",
      "Tramonto",
      "Sunset",
    ),
    w(
      "reg-mura-lungomare",
      "Mura Greche e lungomare",
      "Greek Walls & seafront",
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Reggio_calabria_mura_greche_lungomare.jpg",
      "Itinerario iconico",
      "Iconic route",
    ),
  ],
  "IT-NAP": [
    h("nap-center", "Centro storico", "Historic center", P.beach, "Spaccanapoli", "Spaccanapoli"),
    h("nap-sea", "Lungomare", "Seafront", P.beach, "Vista sul golfo", "Gulf views"),
    h("nap-culture", "Museo Archeologico", "Archaeological Museum", P.culture, "Pompei e Ercolano", "Pompeii & Herculaneum"),
    h("nap-food", "Quartieri vivaci", "Lively districts", P.night, "Pizza e mercati", "Pizza & markets"),
  ],
  "IT-BLQ": [
    h("blq-towers", "Due Torri", "Two Towers", P.europeStreet, "Centro medievale", "Medieval center"),
    h("blq-portico", "Portici UNESCO", "UNESCO porticoes", P.culture, "A piedi in città", "Walk the city"),
    h("blq-food", "Quadrilatero", "Quadrilatero market", P.night, "Cucina emiliana", "Emilian cuisine"),
    h("blq-piazza", "Piazza Maggiore", "Piazza Maggiore", P.florence, "Cuore di Bologna", "Heart of Bologna"),
  ],
  "IT-VRN": [
    h("vrn-arena", "Arena di Verona", "Verona Arena", P.florence, "Lirica sotto le stelle", "Opera under the stars"),
    h("vrn-romeo", "Casa di Giulietta", "Juliet's House", P.europeStreet, "Centro storico", "Historic center"),
    h("vrn-adige", "Lungadige", "Adige river", P.canal, "Passeggiata", "Riverside walk"),
    h("vrn-piazza", "Piazza delle Erbe", "Piazza delle Erbe", P.culture, "Mercato", "Market square"),
  ],
  "IT-PMO": [
    h("pmo-cathedral", "Cattedrale", "Palermo Cathedral", P.europeStreet, "Centro storico", "Historic center"),
    h("pmo-market", "Mercati storici", "Historic markets", P.night, "Street food", "Street food"),
    h("pmo-sea", "Mondello", "Mondello beach", P.beach, "Mare cristallino", "Clear sea"),
    h("pmo-culture", "Musei e palazzi", "Museums & palaces", P.culture, "Arabo-normanno", "Arab-Norman"),
  ],
  "IT-MAT": [
    h("mat-sassi", "Sassi di Matera", "Sassi di Matera", P.europeStreet, "Patrimonio UNESCO", "UNESCO site"),
    h("mat-cave", "Chiese rupestri", "Rock churches", P.culture, "Storia millenaria", "Ancient history"),
    h("mat-view", "Panorama", "Panoramic view", P.florence, "Tramonto", "Sunset views"),
    h("mat-street", "Vicoli", "Alleyways", P.night, "Atmosfera unica", "Unique atmosphere"),
  ],
  "IT-SOR": [
    h("sor-center", "Centro storico", "Historic center", P.beach, "Costiera", "Amalfi Coast"),
    h("sor-marina", "Marina Grande", "Marina Grande", P.canal, "Vista sul mare", "Sea views"),
    h("sor-path", "Sentiero dei Limoni", "Path of Lemons", P.culture, "Trekking leggero", "Easy hiking"),
    h("sor-capri", "Vista su Capri", "Capri views", P.florence, "Isola vicina", "Nearby island"),
  ],
  "IT-TAO": [
    h("tao-greek", "Teatro Greco", "Greek Theatre", P.beach, "Vista sull'Etna", "Etna views"),
    h("tao-corso", "Corso Umberto", "Corso Umberto", P.europeStreet, "Passeggiata", "Evening stroll"),
    h("tao-beach", "Isola Bella", "Isola Bella", P.canal, "Baia turchese", "Turquoise bay"),
    h("tao-food", "Cucina siciliana", "Sicilian cuisine", P.night, "Granita e cannoli", "Granita & cannoli"),
  ],
  "FR-PAR": [
    h("par-eiffel", "Torre Eiffel", "Eiffel Tower", P.paris, "Champ de Mars", "Champ de Mars"),
    h("par-louvre", "Museo del Louvre", "Louvre Museum", P.parisStreet, "Parigi centro", "Central Paris"),
    h("par-street", "Montmartre", "Montmartre", P.europeStreet, "Sacré-Cœur", "Sacré-Cœur"),
    h("par-seine", "Rive gauche", "Left Bank", P.canal, "Sulla Senna", "On the Seine"),
    h("par-night", "Luci della città", "City lights", P.night, "Sera parigina", "Parisian evening"),
  ],
  "GB-LON": [
    h("lon-bridge", "Tower Bridge", "Tower Bridge", P.london, "Thames", "River Thames"),
    h("lon-eye", "London Eye", "London Eye", P.night, "South Bank", "South Bank"),
    h("lon-street", "Westminster", "Westminster", P.europeStreet, "Parlamento", "Parliament"),
    h("lon-culture", "British Museum", "British Museum", P.culture, "Musei gratuiti", "Free museums"),
  ],
  "ES-BCN": [
    h("bcn-sagrada", "Sagrada Família", "Sagrada Família", P.europeStreet, "Gaudí", "Gaudí"),
    h("bcn-gothic", "Barrio Gótico", "Gothic Quarter", P.florence, "Storia medievale", "Medieval history"),
    h("bcn-rambla", "La Rambla", "La Rambla", P.night, "Centro", "City center"),
    h("bcn-beach", "Barceloneta", "Barceloneta", P.beach, "Mare urbano", "Urban beach"),
  ],
  "ES-MAD": [
    h("mad-plaza", "Plaza Mayor", "Plaza Mayor", P.europeStreet, "Centro", "City center"),
    h("mad-park", "Parco del Retiro", "Retiro Park", P.culture, "Verde in città", "Green oasis"),
    h("mad-palace", "Palacio Real", "Royal Palace", P.florence, "Madrid classico", "Classic Madrid"),
    h("mad-food", "Tapas", "Tapas bars", P.night, "Mercato di San Miguel", "San Miguel market"),
  ],
  "DE-BER": [
    h("ber-gate", "Porta di Brandeburgo", "Brandenburg Gate", P.europeStreet, "Mitte", "Mitte district"),
    h("ber-wall", "East Side Gallery", "East Side Gallery", P.culture, "Storia recente", "Recent history"),
    h("ber-museum", "Museum Island", "Museum Island", P.florence, "UNESCO", "UNESCO"),
    h("ber-night", "Vita notturna", "Nightlife", P.night, "Kreuzberg", "Kreuzberg"),
  ],
  "NL-AMS": [
    h("ams-canal", "Canali del centro", "Central canals", P.canal, "In bici", "By bike"),
    h("ams-museum", "Museo Van Gogh", "Van Gogh Museum", P.culture, "Museumplein", "Museumplein"),
    h("ams-street", "Jordaan", "Jordaan", P.europeStreet, "Quartiere trendy", "Trendy quarter"),
    h("ams-market", "Mercato dei fiori", "Flower market", P.florence, "Bloemenmarkt", "Bloemenmarkt"),
  ],
  "PT-LIS": [
    h("lis-tram", "Tram 28", "Tram 28", P.europeStreet, "Alfama", "Alfama"),
    h("lis-tower", "Torre di Belém", "Belém Tower", P.beach, "Fiume Tago", "Tagus river"),
    h("lis-view", "Miradouros", "Viewpoints", P.florence, "Tramonto", "Sunset"),
    h("lis-food", "Pastéis de nata", "Pastéis de nata", P.night, "Bairro Alto", "Bairro Alto"),
  ],
  "JP-TYO": [
    h("tyo-shibuya", "Shibuya Crossing", "Shibuya Crossing", P.tokyo, "Cuore di Tokyo", "Heart of Tokyo"),
    h("tyo-senso", "Senso-ji", "Senso-ji Temple", P.temple, "Asakusa", "Asakusa"),
    h("tyo-meiji", "Santuario Meiji", "Meiji Shrine", P.japan, "Parco Yoyogi", "Yoyogi Park"),
    h("tyo-night", "Shinjuku", "Shinjuku", P.night, "Luci al neon", "Neon lights"),
  ],
  "US-NYC": [
    h("nyc-skyline", "Skyline di Manhattan", "Manhattan skyline", P.nyc, "Downtown", "Downtown"),
    h("nyc-bridge", "Brooklyn Bridge", "Brooklyn Bridge", P.europeStreet, "East River", "East River"),
    h("nyc-park", "Central Park", "Central Park", P.culture, "Oasi verde", "Green oasis"),
    h("nyc-night", "Times Square", "Times Square", P.night, "Luci e teatri", "Lights & theaters"),
  ],
  "TH-HKT": [
    h("pkt-beach", "Patong Beach", "Patong Beach", P.beach, "Mare Andamano", "Andaman Sea"),
    h("pkt-island", "Isole Phi Phi", "Phi Phi Islands", P.canal, "Giornata in barca", "Boat day trip"),
    h("pkt-temple", "Templi", "Temples", P.temple, "Cultura thai", "Thai culture"),
    h("pkt-old", "Phuket Old Town", "Phuket Old Town", P.europeStreet, "Sino-portoghese", "Sino-Portuguese"),
  ],
  "TH-BKK": [
    h("bkk-palace", "Grand Palace", "Grand Palace", P.temple, "Rattanakosin", "Rattanakosin"),
    h("bkk-market", "Mercati galleggianti", "Floating markets", P.canal, "Canali", "Canals"),
    h("bkk-street", "Street food", "Street food", P.night, "Chinatown", "Chinatown"),
    h("bkk-mall", "Skyline moderno", "Modern skyline", P.tokyo, "Sukhumvit", "Sukhumvit"),
  ],
  "AE-DXB": [
    h("dxb-burj", "Burj Khalifa", "Burj Khalifa", P.dubai, "Downtown", "Downtown"),
    h("dxb-marina", "Dubai Marina", "Dubai Marina", P.marina, "Skyline moderno", "Modern skyline"),
    h("dxb-desert", "Deserto", "Desert safari", P.beach, "Dune bashing", "Dune bashing"),
    h("dxb-old", "Al Fahidi", "Al Fahidi", P.culture, "Dubai storica", "Historic Dubai"),
  ],
  "TR-IST": [
    h("ist-hagia", "Santa Sofia", "Hagia Sophia", P.temple, "Sultanahmet", "Sultanahmet"),
    h("ist-bazaar", "Gran Bazar", "Grand Bazaar", P.europeStreet, "Shopping", "Shopping"),
    h("ist-bosphorus", "Crociera sul Bosforo", "Bosphorus cruise", P.canal, "Due continenti", "Two continents"),
    h("ist-food", "Cucina turca", "Turkish cuisine", P.night, "Mercati", "Markets"),
  ],
  "AU-SYD": [
    h("syd-opera", "Opera House", "Sydney Opera House", P.beach, "Harbour", "Harbour"),
    h("syd-bridge", "Harbour Bridge", "Harbour Bridge", P.night, "Climb o vista", "Climb or view"),
    h("syd-beach", "Bondi Beach", "Bondi Beach", P.canal, "Surf e sole", "Surf & sun"),
    h("syd-rocks", "The Rocks", "The Rocks", P.europeStreet, "Storia coloniale", "Colonial history"),
  ],
};

function buildGenericHighlights(cityName: string, input: { cityId?: string | null; countryCode?: string | null }): CityHighlight[] {
  const photos = getCityPhotoVariants({ cityName, cityId: input.cityId, countryCode: input.countryCode, count: 3 });
  const labels: Array<[string, string, string, string]> = [
    [`${cityName}`, cityName, "Destinazione", "Destination"],
    [`Vedute di ${cityName}`, `Views of ${cityName}`, "Galleria", "Gallery"],
    [`Scopri ${cityName}`, `Discover ${cityName}`, "In evidenza", "Featured"],
  ];

  return labels.map(([nameIt, nameEn, hintIt, hintEn], index) => ({
    id: `gen-${index}`,
    nameIt,
    nameEn,
    photoUrl: photos[index] ?? photos[0],
    hintIt,
    hintEn,
  }));
}

/** Solo pacchetti curati a mano (es. Reggio). Le altre città usano generazione dinamica Commons. */
export function getManualHighlightsForCity(input: {
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
}): CityHighlight[] {
  const canonicalId = resolveCanonicalCityId(input);
  if (canonicalId && MANUAL_WIKIMEDIA_CITY_IDS.has(canonicalId) && highlightsByCityId[canonicalId]) {
    return highlightsByCityId[canonicalId];
  }
  return [];
}

/** @deprecated Usare getManualHighlightsForCity + dynamicEditorial */
export function getHighlightsForCity(input: {
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
}): CityHighlight[] {
  const manual = getManualHighlightsForCity(input);
  if (manual.length > 0) return manual;

  return buildGenericHighlights(input.cityName, {
    cityId: resolveCanonicalCityId(input) ?? input.cityId,
    countryCode: input.countryCode,
  });
}

export function highlightsToSlides(
  highlights: CityHighlight[],
  cityLabel: string,
  locale: "it" | "en",
  options?: { editorial?: boolean },
): DestinationSliderSlide[] {
  const cityName = cityLabel.split(",")[0]?.trim() ?? cityLabel;
  return highlights.map((item) => {
    const displayName = locale === "it" ? item.nameIt : item.nameEn;
    return {
      id: `curated-${item.id}`,
      title: options?.editorial ? displayName : formatPoiLabel(displayName, cityName),
      photoUrl: item.photoUrl,
      kind: "poi" as const,
      hint: locale === "it" ? item.hintIt : item.hintEn,
    };
  });
}
