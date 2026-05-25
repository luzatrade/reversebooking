import { majorWorldCities } from "@/lib/constants/world-cities";

/** Verified Unsplash IDs (HTTP 200). */
export const TRAVEL_PHOTOS = {
  colosseum: "1552832230-c0197dd311b5",
  europeStreet: "1515542622106-78bda8ba0e5b",
  florence: "1523906834658-6e24ef2386f9",
  paris: "1502602898657-3e91760cbb34",
  parisStreet: "1511739001486-6bfe10ce785f",
  london: "1513635269975-59663e0ac1ad",
  tokyo: "1540959733332-eab4deabeeaf",
  japan: "1542051841857-5f90071e7989",
  temple: "1545569341-9eb8b30979d9",
  beach: "1552465011-b4e21bf6e79a",
  dubai: "1512453979798-5ea266f8880c",
  marina: "1518684079-3c830dcef090",
  nyc: "1496442226666-8d4d0e62e6e9",
  canal: "1506973035872-a4ec16b8e8d9",
  culture: "1488646953014-85cb44e25828",
  night: "1558618666-fcd25c85cd64",
} as const;

export function unsplashPhoto(photoId: string, width = 800, height = 500) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export function picsumPhoto(seed: string, width = 800, height = 500) {
  const safe = encodeURIComponent(seed.replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 80));
  return `https://picsum.photos/seed/${safe}/${width}/${height}`;
}

export const GLOBAL_TRAVEL_FALLBACK = unsplashPhoto(TRAVEL_PHOTOS.culture);

/** Italian sub-regions — Colosseo solo su Roma (IT-ROM). */
const IT_SOUTH_POOL = [TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.night];
const IT_NORTH_POOL = [TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.florence];
const IT_CENTER_POOL = [TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.night];

const IT_SOUTH_CITY_IDS = new Set([
  "IT-REG",
  "IT-BRI",
  "IT-LCC",
  "IT-TAR",
  "IT-AGR",
  "IT-CTA",
  "IT-PMO",
  "IT-TAO",
  "IT-SOR",
  "IT-CAP",
  "IT-MON",
  "IT-POL",
  "IT-CEF",
  "IT-OLB",
  "IT-CAG",
  "IT-AHO",
  "IT-BDS",
]);

const IT_NORTH_CITY_IDS = new Set([
  "IT-MIL",
  "IT-VCE",
  "IT-VRN",
  "IT-TRN",
  "IT-BLQ",
  "IT-BGY",
  "IT-BZO",
  "IT-TRS",
  "IT-CMO",
  "IT-GAR",
  "IT-DES",
  "IT-SIR",
  "IT-COR",
  "IT-MER",
  "IT-VIC",
  "IT-BSC",
  "IT-PAD",
]);

const REGION_POOL: Record<string, string[]> = {
  IT: IT_CENTER_POOL,
  FR: [TRAVEL_PHOTOS.paris, TRAVEL_PHOTOS.parisStreet, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture],
  ES: [TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.florence, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  GB: [TRAVEL_PHOTOS.london, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  DE: [TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.florence],
  NL: [TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night],
  PT: [TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.canal],
  US: [TRAVEL_PHOTOS.nyc, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.europeStreet],
  JP: [TRAVEL_PHOTOS.tokyo, TRAVEL_PHOTOS.japan, TRAVEL_PHOTOS.temple, TRAVEL_PHOTOS.culture],
  TH: [TRAVEL_PHOTOS.beach, TRAVEL_PHOTOS.temple, TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.canal],
  AE: [TRAVEL_PHOTOS.dubai, TRAVEL_PHOTOS.marina, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.culture],
  DEFAULT: [TRAVEL_PHOTOS.culture, TRAVEL_PHOTOS.europeStreet, TRAVEL_PHOTOS.canal, TRAVEL_PHOTOS.night, TRAVEL_PHOTOS.beach],
};

const CITY_HERO_OVERRIDES: Record<string, string> = {
  "IT-ROM": TRAVEL_PHOTOS.colosseum,
  "IT-MIL": TRAVEL_PHOTOS.night,
  "IT-FLR": TRAVEL_PHOTOS.florence,
  "IT-VCE": TRAVEL_PHOTOS.canal,
  "IT-NAP": TRAVEL_PHOTOS.beach,
  "IT-REG": TRAVEL_PHOTOS.beach,
  "IT-BRI": TRAVEL_PHOTOS.beach,
  "IT-LCC": TRAVEL_PHOTOS.beach,
  "IT-CTA": TRAVEL_PHOTOS.beach,
  "IT-AGR": TRAVEL_PHOTOS.beach,
  "IT-TAR": TRAVEL_PHOTOS.beach,
  "IT-BLQ": TRAVEL_PHOTOS.europeStreet,
  "IT-VRN": TRAVEL_PHOTOS.florence,
  "IT-PMO": TRAVEL_PHOTOS.beach,
  "IT-CAG": TRAVEL_PHOTOS.beach,
  "IT-TAO": TRAVEL_PHOTOS.beach,
  "IT-MAT": TRAVEL_PHOTOS.europeStreet,
  "IT-SOR": TRAVEL_PHOTOS.beach,
  "IT-CAP": TRAVEL_PHOTOS.beach,
  "IT-CQT": TRAVEL_PHOTOS.beach,
  "FR-PAR": TRAVEL_PHOTOS.paris,
  "GB-LON": TRAVEL_PHOTOS.london,
  "ES-BCN": TRAVEL_PHOTOS.europeStreet,
  "ES-MAD": TRAVEL_PHOTOS.europeStreet,
  "DE-BER": TRAVEL_PHOTOS.europeStreet,
  "NL-AMS": TRAVEL_PHOTOS.canal,
  "PT-LIS": TRAVEL_PHOTOS.beach,
  "US-NYC": TRAVEL_PHOTOS.nyc,
  "US-LAX": TRAVEL_PHOTOS.beach,
  "US-MIA": TRAVEL_PHOTOS.beach,
  "JP-TYO": TRAVEL_PHOTOS.tokyo,
  "TH-HKT": TRAVEL_PHOTOS.beach,
  "TH-BKK": TRAVEL_PHOTOS.temple,
  "AE-DXB": TRAVEL_PHOTOS.dubai,
  "TR-IST": TRAVEL_PHOTOS.temple,
  "SG-SIN": TRAVEL_PHOTOS.night,
  "AU-SYD": TRAVEL_PHOTOS.beach,
  "BR-RIO": TRAVEL_PHOTOS.beach,
};

const CITY_NAME_ALIASES: Record<string, string> = {
  roma: "IT-ROM",
  rome: "IT-ROM",
  milano: "IT-MIL",
  milan: "IT-MIL",
  firenze: "IT-FLR",
  florence: "IT-FLR",
  venezia: "IT-VCE",
  venice: "IT-VCE",
  napoli: "IT-NAP",
  naples: "IT-NAP",
  torino: "IT-TRN",
  turin: "IT-TRN",
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
  parigi: "FR-PAR",
  paris: "FR-PAR",
  londra: "GB-LON",
  london: "GB-LON",
  barcellona: "ES-BCN",
  barcelona: "ES-BCN",
  madrid: "ES-MAD",
  berlino: "DE-BER",
  berlin: "DE-BER",
  amsterdam: "NL-AMS",
  lisbona: "PT-LIS",
  lisbon: "PT-LIS",
  dubai: "AE-DXB",
  tokyo: "JP-TYO",
  phuket: "TH-HKT",
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
  if (cityId === "IT-ROM") return [TRAVEL_PHOTOS.colosseum, ...IT_CENTER_POOL];
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
  const pool = poolForCountry(input.countryCode, canonicalId).map((id) => unsplashPhoto(id));
  const urls = [hero];

  for (let index = 1; urls.length < count; index += 1) {
    urls.push(picsumPhoto(`${canonicalId}-poi-${index}`));
  }

  for (const url of pool) {
    if (urls.length >= count) break;
    if (!urls.includes(url)) urls.push(url);
  }

  return urls.slice(0, count);
}
