import { majorWorldCities } from "@/lib/constants/world-cities";

/**
 * Verified Unsplash photo IDs — each resolved to a real, free-to-use image.
 * Format: the segment after "photo-" in https://images.unsplash.com/photo-{ID}
 */
export const TRAVEL_PHOTOS: Record<string, string> = {
  // Roma
  colosseum: "1552832230-c0197dd311b5",
  colosseumSunrise: "1752813372873-6e694a7574ee",
  romeTrasteverse: "1529260830199-a09d7fa2ed10",
  romePantheon: "1531572753322-ad063cecc140",
  // Firenze
  florence: "1523906834658-6e24ef2386f9",
  florencePonteVecchio: "1541370976299-4d24ebbc9077",
  // Venezia
  veniceGrandCanal: "1508184089160-2758663ef519",
  veniceSunset: "1761589339308-542aee20bbbb",
  // Napoli
  naplesVesuvius: "1768322264436-9b766658d037",
  naplesCoast: "1775188816339-181d3d8cb06b",
  // Milano
  milanDuomo: "1513581166391-887a96dde669",
  milanGalleria: "1520440621352-5e21fd14e4f9",
  // Torino
  turinMole: "1568891299194-3d3a2e3b0f4e",
  // Verona
  veronaArena: "1570155722844-b1295e3de1ba",
  // Bologna
  bolognaPiazza: "1564594736846-b28a3de9e6d1",
  // Costiera Amalfitana
  amalfiPositanoHill: "1601581875309-fafbf2d3ed3a",
  amalfiPositanoSea: "1633321702518-7fecdaa69e06",
  amalfiCoastCliffs: "1599832124677-1ef45f9e4d54",
  amalfiPositanoColors: "1560703650-ef6b300adfef",
  // Cinque Terre
  cinqueTerre: "1502986549429-7925519d1a23",
  // Sicilia / Taormina
  taormina: "1523531294919-4bcd7c65e216",
  // Sardegna
  sardinia: "1507525428034-b723cf961d3e",
  // Puglia / Alberobello
  pugliaTrulli: "1558985212-ba56dbaa743a",
  // Lago di Como
  lakeComo: "1541782030700-6b6c2ef0f1df",
  // Parigi
  paris: "1502602898657-3e91760cbb34",
  parisSeine: "1499856871958-5b9627545d1a",
  parisStreet: "1511739001486-6bfe10ce785f",
  // Londra
  london: "1513635269975-59663e0ac1ad",
  londonBridge: "1486325212027-8a9ea2ee602a",
  londonBigBen: "1529655683826-aba9b3e77383",
  // Barcellona
  barcelonaSagrada: "1583422409516-2895a77ac313",
  barcelonaAerial: "1539037116277-4db20889f2d7",
  // Madrid
  madridPlaza: "1543785734-4b6e564642f8",
  madridPalace: "1558642452-9d2a7deb7f62",
  madridRetiro: "1741353171152-5a9cfc05e094",
  madridTapas: "1565599837634-134bc3aadce8",
  // Berlino
  berlinGate: "1775045309134-7525be4e2f2d",
  berlinGateDusk: "1762983326643-1892404695e2",
  // Amsterdam
  amsterdamCanal: "1534351590666-13e3e96b5017",
  amsterdamHouses: "1468436139062-f60a71c5c892",
  // Lisbona
  lisbonTram: "1555881400-74d7acaacd8b",
  lisbonPanorama: "1548707309-dcebeab9ea9b",
  // Praga
  pragueBridge: "1519677100203-a0e668e92439",
  pragueOld: "1541849546-216549ae216d",
  // Vienna
  viennaSchonbrunn: "1516550893923-42d28e5677af",
  viennaPalace: "1609856878074-a735e41f1f40",
  // Istanbul
  istanbulMosque: "1524231757912-21f4fe3a7200",
  istanbulSkyline: "1541432901042-2d8bd64b4a9b",
  // Santorini
  santorini: "1570077188670-e3a8d69ac5ff",
  santoriniSunset: "1530991472021-ce0e43475f6e",
  // Dubai
  dubai: "1512453979798-5ea266f8880c",
  dubaiMarina: "1518684079-3c830dcef090",
  // Tokyo
  tokyo: "1540959733332-eab4deabeeaf",
  tokyoShibuya: "1542051841857-5f90071e7989",
  tokyoTemple: "1545569341-9eb8b30979d9",
  // New York
  nyc: "1496442226666-8d4d0e62e6e9",
  nycBrooklyn: "1534430480872-3498386e7856",
  nycCentral: "1534270324853-3e28f12b24b1",
  // Bangkok
  bangkokTemple: "1508009603885-50cf7c579365",
  bangkokWatArun: "1768392810963-017c92313d79",
  bangkokWatSunset: "1762950297550-1d8d7cce12ae",
  bangkokWatNight: "1563492065599-3520f775eeed",
  bangkokSkyline: "1553803095-58e9e8a3e5c3",
  // Phuket
  phuketBeach: "1552465011-b4e21bf6e79a",
  phuketViewpoint: "1601225612316-b4733315a717",
  phuketIsland: "1754295560175-86037557a4fd",
  phuketSunset: "1537996194471-e657a9a42cfe",
  // Generic
  beach: "1552465011-b4e21bf6e79a",
  europeStreet: "1515542622106-78bda8ba0e5b",
  canal: "1506973035872-a4ec16b8e8d9",
  culture: "1488646953014-85cb44e25828",
  night: "1558618666-fcd25c85cd64",
};

export function unsplashPhoto(photoId: string, width = 800, height = 500) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export function picsumPhoto(seed: string, width = 800, height = 500) {
  const safe = encodeURIComponent(seed.replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 80));
  return `https://picsum.photos/seed/${safe}/${width}/${height}`;
}

export const GLOBAL_TRAVEL_FALLBACK = unsplashPhoto(TRAVEL_PHOTOS.culture);

const IT_SOUTH_POOL = [TRAVEL_PHOTOS.amalfiPositanoHill, TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.pugliaTrulli, TRAVEL_PHOTOS.sardinia];
const IT_NORTH_POOL = [TRAVEL_PHOTOS.veniceGrandCanal, TRAVEL_PHOTOS.milanDuomo, TRAVEL_PHOTOS.lakeComo, TRAVEL_PHOTOS.veronaArena, TRAVEL_PHOTOS.bolognaPiazza];
const IT_CENTER_POOL = [TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.cinqueTerre, TRAVEL_PHOTOS.florencePonteVecchio, TRAVEL_PHOTOS.romeTrasteverse];

const IT_SOUTH_CITY_IDS = new Set([
  "IT-REG", "IT-BRI", "IT-LCC", "IT-TAR", "IT-AGR", "IT-CTA", "IT-PMO",
  "IT-TAO", "IT-SOR", "IT-CAP", "IT-MON", "IT-POL", "IT-CEF", "IT-OLB",
  "IT-CAG", "IT-AHO", "IT-BDS",
]);

const IT_NORTH_CITY_IDS = new Set([
  "IT-MIL", "IT-VCE", "IT-VRN", "IT-TRN", "IT-BLQ", "IT-BGY", "IT-BZO",
  "IT-TRS", "IT-CMO", "IT-GAR", "IT-DES", "IT-SIR", "IT-COR", "IT-MER",
  "IT-VIC", "IT-BSC", "IT-PAD",
]);

const REGION_POOL: Record<string, string[]> = {
  IT: IT_CENTER_POOL,
  FR: [TRAVEL_PHOTOS.paris, TRAVEL_PHOTOS.parisSeine, TRAVEL_PHOTOS.parisStreet, TRAVEL_PHOTOS.culture],
  ES: [TRAVEL_PHOTOS.barcelonaSagrada, TRAVEL_PHOTOS.madridPlaza, TRAVEL_PHOTOS.barcelonaAerial, TRAVEL_PHOTOS.madridPalace],
  GB: [TRAVEL_PHOTOS.london, TRAVEL_PHOTOS.londonBridge, TRAVEL_PHOTOS.londonBigBen, TRAVEL_PHOTOS.night],
  DE: [TRAVEL_PHOTOS.berlinGate, TRAVEL_PHOTOS.berlinGateDusk, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  NL: [TRAVEL_PHOTOS.amsterdamCanal, TRAVEL_PHOTOS.amsterdamHouses, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet],
  PT: [TRAVEL_PHOTOS.lisbonTram, TRAVEL_PHOTOS.lisbonPanorama, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.europeStreet],
  CZ: [TRAVEL_PHOTOS.pragueBridge, TRAVEL_PHOTOS.pragueOld, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  AT: [TRAVEL_PHOTOS.viennaSchonbrunn, TRAVEL_PHOTOS.viennaPalace, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture],
  TR: [TRAVEL_PHOTOS.istanbulMosque, TRAVEL_PHOTOS.istanbulSkyline, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  GR: [TRAVEL_PHOTOS.santorini, TRAVEL_PHOTOS.santoriniSunset, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture],
  US: [TRAVEL_PHOTOS.nyc, TRAVEL_PHOTOS.nycBrooklyn, TRAVEL_PHOTOS.nycCentral, TRAVEL_PHOTOS.night],
  JP: [TRAVEL_PHOTOS.tokyo, TRAVEL_PHOTOS.tokyoShibuya, TRAVEL_PHOTOS.tokyoTemple, TRAVEL_PHOTOS.culture],
  TH: [TRAVEL_PHOTOS.bangkokWatArun, TRAVEL_PHOTOS.bangkokWatSunset, TRAVEL_PHOTOS.phuketViewpoint, TRAVEL_PHOTOS.phuketIsland, TRAVEL_PHOTOS.bangkokTemple],
  AE: [TRAVEL_PHOTOS.dubai, TRAVEL_PHOTOS.dubaiMarina, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.culture],
  DEFAULT: [TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.beach],
};

const CITY_HERO_OVERRIDES: Record<string, string> = {
  "IT-ROM": TRAVEL_PHOTOS.colosseum,
  "IT-MIL": TRAVEL_PHOTOS.milanDuomo,
  "IT-FLR": TRAVEL_PHOTOS.florence,
  "IT-VCE": TRAVEL_PHOTOS.veniceGrandCanal,
  "IT-NAP": TRAVEL_PHOTOS.naplesVesuvius,
  "IT-TRN": TRAVEL_PHOTOS.turinMole,
  "IT-VRN": TRAVEL_PHOTOS.veronaArena,
  "IT-BLQ": TRAVEL_PHOTOS.bolognaPiazza,
  "IT-PMO": TRAVEL_PHOTOS.taormina,
  "IT-CTA": TRAVEL_PHOTOS.taormina,
  "IT-TAO": TRAVEL_PHOTOS.taormina,
  "IT-SOR": TRAVEL_PHOTOS.amalfiPositanoHill,
  "IT-CAP": TRAVEL_PHOTOS.amalfiPositanoSea,
  "IT-REG": TRAVEL_PHOTOS.beach,
  "IT-BRI": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-LCC": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-TAR": TRAVEL_PHOTOS.pugliaTrulli,
  "IT-AGR": TRAVEL_PHOTOS.beach,
  "IT-CAG": TRAVEL_PHOTOS.sardinia,
  "IT-OLB": TRAVEL_PHOTOS.sardinia,
  "IT-AHO": TRAVEL_PHOTOS.sardinia,
  "IT-CMO": TRAVEL_PHOTOS.lakeComo,
  "IT-MAT": TRAVEL_PHOTOS.europeStreet,
  "IT-CQT": TRAVEL_PHOTOS.cinqueTerre,
  "FR-PAR": TRAVEL_PHOTOS.paris,
  "GB-LON": TRAVEL_PHOTOS.london,
  "ES-BCN": TRAVEL_PHOTOS.barcelonaSagrada,
  "ES-MAD": TRAVEL_PHOTOS.madridPlaza,
  "DE-BER": TRAVEL_PHOTOS.berlinGate,
  "NL-AMS": TRAVEL_PHOTOS.amsterdamCanal,
  "PT-LIS": TRAVEL_PHOTOS.lisbonTram,
  "CZ-PRG": TRAVEL_PHOTOS.pragueBridge,
  "AT-VIE": TRAVEL_PHOTOS.viennaSchonbrunn,
  "TR-IST": TRAVEL_PHOTOS.istanbulMosque,
  "GR-ATH": TRAVEL_PHOTOS.culture,
  "GR-JTR": TRAVEL_PHOTOS.santorini,
  "GR-JMK": TRAVEL_PHOTOS.santoriniSunset,
  "US-NYC": TRAVEL_PHOTOS.nyc,
  "US-LAX": TRAVEL_PHOTOS.beach,
  "US-MIA": TRAVEL_PHOTOS.beach,
  "JP-TYO": TRAVEL_PHOTOS.tokyo,
  "TH-HKT": TRAVEL_PHOTOS.phuketViewpoint,
  "TH-BKK": TRAVEL_PHOTOS.bangkokWatArun,
  "AE-DXB": TRAVEL_PHOTOS.dubai,
  "SG-SIN": TRAVEL_PHOTOS.night,
  "AU-SYD": TRAVEL_PHOTOS.beach,
  "BR-RIO": TRAVEL_PHOTOS.beach,
};

/** 3–5 foto iconiche per ogni meta del catalogo browse. */
const CITY_PHOTO_POOLS: Record<string, string[]> = {
  "IT-ROM": [TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.colosseumSunrise, TRAVEL_PHOTOS.romeTrasteverse, TRAVEL_PHOTOS.romePantheon],
  "IT-MIL": [TRAVEL_PHOTOS.milanDuomo, TRAVEL_PHOTOS.milanGalleria, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  "IT-VCE": [TRAVEL_PHOTOS.veniceGrandCanal, TRAVEL_PHOTOS.veniceSunset, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet],
  "IT-NAP": [TRAVEL_PHOTOS.naplesVesuvius, TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.beach],
  "IT-FLR": [TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.florencePonteVecchio, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet],
  "IT-SOR": [TRAVEL_PHOTOS.amalfiPositanoHill, TRAVEL_PHOTOS.amalfiPositanoSea, TRAVEL_PHOTOS.amalfiCoastCliffs, TRAVEL_PHOTOS.amalfiPositanoColors],
  "IT-CQT": [TRAVEL_PHOTOS.cinqueTerre, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture],
  "IT-CMO": [TRAVEL_PHOTOS.lakeComo, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.canal],
  "IT-BRI": [TRAVEL_PHOTOS.pugliaTrulli, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture],
  "IT-TAO": [TRAVEL_PHOTOS.taormina, TRAVEL_PHOTOS.naplesCoast, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture],
  "IT-CAG": [TRAVEL_PHOTOS.sardinia, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet],
  "FR-PAR": [TRAVEL_PHOTOS.paris, TRAVEL_PHOTOS.parisSeine, TRAVEL_PHOTOS.parisStreet, TRAVEL_PHOTOS.night],
  "GB-LON": [TRAVEL_PHOTOS.london, TRAVEL_PHOTOS.londonBridge, TRAVEL_PHOTOS.londonBigBen, TRAVEL_PHOTOS.night],
  "ES-BCN": [TRAVEL_PHOTOS.barcelonaSagrada, TRAVEL_PHOTOS.barcelonaAerial, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.beach],
  "ES-MAD": [TRAVEL_PHOTOS.madridPlaza, TRAVEL_PHOTOS.madridPalace, TRAVEL_PHOTOS.madridRetiro, TRAVEL_PHOTOS.madridTapas],
  "DE-BER": [TRAVEL_PHOTOS.berlinGate, TRAVEL_PHOTOS.berlinGateDusk, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  "NL-AMS": [TRAVEL_PHOTOS.amsterdamCanal, TRAVEL_PHOTOS.amsterdamHouses, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet],
  "PT-LIS": [TRAVEL_PHOTOS.lisbonTram, TRAVEL_PHOTOS.lisbonPanorama, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.beach],
  "CZ-PRG": [TRAVEL_PHOTOS.pragueBridge, TRAVEL_PHOTOS.pragueOld, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night],
  "AT-VIE": [TRAVEL_PHOTOS.viennaSchonbrunn, TRAVEL_PHOTOS.viennaPalace, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet],
  "TR-IST": [TRAVEL_PHOTOS.istanbulMosque, TRAVEL_PHOTOS.istanbulSkyline, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  "GR-JTR": [TRAVEL_PHOTOS.santorini, TRAVEL_PHOTOS.santoriniSunset, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture],
  "AE-DXB": [TRAVEL_PHOTOS.dubai, TRAVEL_PHOTOS.dubaiMarina, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.culture],
  "JP-TYO": [TRAVEL_PHOTOS.tokyo, TRAVEL_PHOTOS.tokyoShibuya, TRAVEL_PHOTOS.tokyoTemple, TRAVEL_PHOTOS.night],
  "US-NYC": [TRAVEL_PHOTOS.nyc, TRAVEL_PHOTOS.nycBrooklyn, TRAVEL_PHOTOS.nycCentral, TRAVEL_PHOTOS.night],
  "TH-BKK": [TRAVEL_PHOTOS.bangkokWatArun, TRAVEL_PHOTOS.bangkokWatSunset, TRAVEL_PHOTOS.bangkokWatNight, TRAVEL_PHOTOS.bangkokSkyline],
  "TH-HKT": [TRAVEL_PHOTOS.phuketViewpoint, TRAVEL_PHOTOS.phuketIsland, TRAVEL_PHOTOS.phuketSunset, TRAVEL_PHOTOS.phuketBeach],
};

function poolForCity(canonicalId: string | null, countryCode?: string | null) {
  if (canonicalId && CITY_PHOTO_POOLS[canonicalId]) return CITY_PHOTO_POOLS[canonicalId];
  return poolForCountry(countryCode, canonicalId);
}

const CITY_NAME_ALIASES: Record<string, string> = {
  roma: "IT-ROM", rome: "IT-ROM",
  milano: "IT-MIL", milan: "IT-MIL",
  firenze: "IT-FLR", florence: "IT-FLR",
  venezia: "IT-VCE", venice: "IT-VCE",
  napoli: "IT-NAP", naples: "IT-NAP",
  torino: "IT-TRN", turin: "IT-TRN",
  bologna: "IT-BLQ",
  verona: "IT-VRN",
  palermo: "IT-PMO",
  catania: "IT-CTA",
  matera: "IT-MAT",
  sorrento: "IT-SOR",
  capri: "IT-CAP",
  taormina: "IT-TAO",
  "reggio calabria": "IT-REG",
  bari: "IT-BRI",
  lecce: "IT-LCC",
  "cinque terre": "IT-CQT",
  "costiera amalfitana": "IT-SOR",
  "amalfi coast": "IT-SOR",
  "lago di como": "IT-CMO",
  "lake como": "IT-CMO",
  como: "IT-CMO",
  alberobello: "IT-BRI",
  cagliari: "IT-CAG",
  olbia: "IT-OLB",
  alghero: "IT-AHO",
  parigi: "FR-PAR", paris: "FR-PAR",
  londra: "GB-LON", london: "GB-LON",
  barcellona: "ES-BCN", barcelona: "ES-BCN",
  madrid: "ES-MAD",
  berlino: "DE-BER", berlin: "DE-BER",
  amsterdam: "NL-AMS",
  lisbona: "PT-LIS", lisbon: "PT-LIS",
  praga: "CZ-PRG", prague: "CZ-PRG",
  vienna: "AT-VIE", wien: "AT-VIE",
  istanbul: "TR-IST",
  santorini: "GR-JTR",
  mykonos: "GR-JMK",
  atene: "GR-ATH", athens: "GR-ATH",
  dubai: "AE-DXB",
  tokyo: "JP-TYO",
  phuket: "TH-HKT",
  bangkok: "TH-BKK",
  "new york": "US-NYC",
};

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function hashString(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function poolForItalianCity(cityId?: string | null) {
  if (!cityId) return IT_CENTER_POOL;
  if (cityId === "IT-ROM") return [TRAVEL_PHOTOS.colosseum, TRAVEL_PHOTOS.colosseumSunrise, TRAVEL_PHOTOS.romeTrasteverse, TRAVEL_PHOTOS.romePantheon];
  if (IT_SOUTH_CITY_IDS.has(cityId)) return IT_SOUTH_POOL;
  if (IT_NORTH_CITY_IDS.has(cityId)) return IT_NORTH_POOL;
  return IT_CENTER_POOL;
}

function poolForCountry(countryCode?: string | null, cityId?: string | null) {
  const code = countryCode?.toUpperCase();
  if (code === "IT") return poolForItalianCity(cityId);
  if (code && REGION_POOL[code]) return REGION_POOL[code];
  return REGION_POOL.DEFAULT;
}

export function resolveCanonicalCityId(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
}): string | null {
  const cityId = input.cityId?.trim();
  if (cityId && majorWorldCities.some((city) => city.city_id === cityId)) return cityId;
  if (cityId && CITY_HERO_OVERRIDES[cityId]) return cityId;

  const normalizedName = normalizeText(input.cityName);
  if (CITY_NAME_ALIASES[normalizedName]) return CITY_NAME_ALIASES[normalizedName];

  const countryCode = input.countryCode?.toUpperCase();
  const byName = majorWorldCities.find(
    (city) => normalizeText(city.city_name) === normalizedName && (!countryCode || city.country_code === countryCode),
  );
  if (byName) return byName.city_id;

  if (cityId?.includes("-")) {
    const slug = cityId.split("-").slice(1).join("-");
    const slugNorm = normalizeText(slug.replace(/-/g, " "));
    if (CITY_NAME_ALIASES[slugNorm]) return CITY_NAME_ALIASES[slugNorm];
    const fromSlug = majorWorldCities.find(
      (city) =>
        normalizeText(city.city_name) === slugNorm &&
        (!countryCode || city.country_code === countryCode),
    );
    if (fromSlug) return fromSlug.city_id;
  }

  return cityId || null;
}

export function getCityHeroImage(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
}): string {
  const canonicalId = resolveCanonicalCityId(input);
  if (canonicalId && CITY_HERO_OVERRIDES[canonicalId]) {
    return unsplashPhoto(CITY_HERO_OVERRIDES[canonicalId]);
  }

  const pool = poolForCountry(input.countryCode, canonicalId);
  const key = canonicalId || `${input.countryCode ?? "XX"}-${normalizeText(input.cityName)}`;
  const photoId = pool[hashString(key) % pool.length];
  return unsplashPhoto(photoId);
}

export function getCityPhotoVariants(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
  count?: number;
}): string[] {
  const count = input.count ?? 5;
  const hero = getCityHeroImage(input);
  const canonicalId = resolveCanonicalCityId(input) ?? `${input.countryCode}-${normalizeText(input.cityName)}`;
  const pool = poolForCity(canonicalId, input.countryCode).map((id) => unsplashPhoto(id));
  const urls = [hero];

  for (const url of pool) {
    if (urls.length >= count) break;
    if (!urls.includes(url)) urls.push(url);
  }

  for (let index = 1; urls.length < count; index += 1) {
    urls.push(picsumPhoto(`${canonicalId}-poi-${index}`));
  }

  return urls.slice(0, count);
}
