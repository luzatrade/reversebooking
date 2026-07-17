import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";

export type WorldCountry = { country_code: string; country_name: string };

const countryCodes = [
  "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"
];

const displayNames = typeof Intl !== "undefined" && "DisplayNames" in Intl ? new Intl.DisplayNames(["en"], { type: "region" }) : null;

function countryNameFor(code: string) {
  return displayNames?.of(code) ?? code;
}

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function citySlug(value: string) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "city";
}

function titleFromSlug(value: string) {
  return value.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export function getAllCountries(): WorldCountry[] {
  const countries = new Map<string, WorldCountry>();
  for (const code of countryCodes) countries.set(code, { country_code: code, country_name: countryNameFor(code) });
  for (const city of majorWorldCities) countries.set(city.country_code, { country_code: city.country_code, country_name: city.country_name });
  return Array.from(countries.values()).sort((a, b) => a.country_name.localeCompare(b.country_name));
}

export function getCountriesFromMajorCities() {
  return getAllCountries();
}

export function getCitiesByCountry(countryCode: string) {
  return majorWorldCities
    .filter((city) => city.country_code === countryCode)
    .sort((a, b) => a.city_name.localeCompare(b.city_name));
}

export const PENDING_CITY_ID = "IT-PENDING";

export function pendingWorldCity(): WorldCity {
  return {
    label: "Da completare, Italia",
    country_code: "IT",
    country_name: "Italia",
    city_name: "Da completare",
    city_id: PENDING_CITY_ID,
  };
}

export function isPendingCityId(cityId?: string | null): boolean {
  if (!cityId) return true;
  const trimmed = cityId.trim();
  return trimmed === "" || trimmed === PENDING_CITY_ID;
}

export function emptyWorldCity(): WorldCity {
  return { label: "", country_code: "", country_name: "", city_name: "", city_id: "" };
}

export function createWorldCity(countryCode: string, cityName: string, countryName?: string): WorldCity {
  const country = getAllCountries().find((item) => item.country_code === countryCode) ?? getAllCountries()[0];
  const cleanCityName = cityName.trim();
  const finalCountryName = countryName?.trim() || country.country_name;
  return {
    label: cleanCityName ? `${cleanCityName}, ${finalCountryName}` : finalCountryName,
    country_code: country.country_code,
    country_name: finalCountryName,
    city_name: cleanCityName,
    city_id: `${country.country_code}-${citySlug(cleanCityName)}`,
  };
}

export function findCityById(cityId?: string | null): WorldCity {
  if (isPendingCityId(cityId)) return pendingWorldCity();
  const knownCity = majorWorldCities.find((city) => city.city_id === cityId);
  if (knownCity) return knownCity;
  const match = cityId?.match(/^([A-Z]{2})-(.+)$/);
  if (match) return createWorldCity(match[1], titleFromSlug(match[2]));
  return majorWorldCities[0];
}

export function findFirstCityByCountry(countryCode?: string | null): WorldCity {
  const majorCity = majorWorldCities.find((city) => city.country_code === countryCode);
  if (majorCity) return majorCity;
  const country = getAllCountries().find((item) => item.country_code === countryCode) ?? getAllCountries()[0];
  return createWorldCity(country.country_code, "", country.country_name);
}

export function cityFromStored(data: { country_code?: string | null; country_name?: string | null; city_name?: string | null; city_id?: string | null }): WorldCity {
  const byId = data.city_id ? majorWorldCities.find((city) => city.city_id === data.city_id) : null;
  if (byId) return byId;
  return createWorldCity(data.country_code || "US", data.city_name || "", data.country_name || undefined);
}

export function cityFromInput(countryCode: string, cityName: string): WorldCity {
  const exactCity = majorWorldCities.find((city) => city.country_code === countryCode && normalizeText(city.city_name) === normalizeText(cityName));
  if (exactCity) return exactCity;
  return createWorldCity(countryCode, cityName);
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
  "reggio di calabria": "IT-REG",
  genova: "IT-GOA", genoa: "IT-GOA",
  rimini: "IT-RMI",
  bolzano: "IT-BZO",
  bergamo: "IT-BGY",
  perugia: "IT-PEG",
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

/** Lightweight city id resolver (no photo/slider deps — safe for forms). */
export function resolveCanonicalCityId(input: {
  cityName: string;
  countryCode?: string | null;
  cityId?: string | null;
}): string | null {
  const cityId = input.cityId?.trim();
  if (cityId && majorWorldCities.some((city) => city.city_id === cityId)) return cityId;
  if (cityId && CITY_NAME_ALIASES[cityId.toLowerCase()]) return CITY_NAME_ALIASES[cityId.toLowerCase()];

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
      (city) => normalizeText(city.city_name) === slugNorm && (!countryCode || city.country_code === countryCode),
    );
    if (fromSlug) return fromSlug.city_id;
  }

  return cityId || null;
}