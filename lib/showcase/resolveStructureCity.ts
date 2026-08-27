import {
  createWorldCity,
  findCityById,
  resolveCanonicalCityId,
} from "@/lib/constants/world-city-helpers";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";

function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function namesMatch(a: string, b: string) {
  const left = normalizeText(a);
  const right = normalizeText(b);
  if (!left || !right) return false;
  return left === right || left.includes(right) || right.includes(left);
}

const COUNTRY_TOKENS = new Set(["italia", "italy", "it", "es", "fr", "de", "gb", "uk", "us"]);

function cleanCityToken(value: string) {
  return value.replace(/^\d{5}\s+/, "").replace(/,\s*$/, "").trim();
}

/** Extract a municipality from a formatted postal address when city_name is wrong. */
export function extractCityFromAddress(address: string | null | undefined): string | null {
  if (!address?.trim()) return null;
  const text = address.trim();

  const capMatch = text.match(/\b(\d{5})\s*,?\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]+?)(?:\s*,|\s+(?:Italia|Italy|IT|[A-Z]{2})\b|$)/i);
  if (capMatch?.[2]) {
    const city = cleanCityToken(capMatch[2]);
    if (city.length >= 2 && !COUNTRY_TOKENS.has(normalizeText(city))) return city;
  }

  const parts = text.split(",").map((part) => part.trim()).filter(Boolean);
  for (let index = parts.length - 1; index >= Math.max(0, parts.length - 3); index -= 1) {
    const part = cleanCityToken(parts[index] ?? "");
    if (!part || /^\d{5}$/.test(part) || /^[A-Z]{2}$/.test(part)) continue;
    if (COUNTRY_TOKENS.has(normalizeText(part))) continue;
    if (part.length >= 2 && !/^\d/.test(part)) return part;
  }

  return null;
}

export function resolveStructureCityName(input: {
  structureName: string;
  cityName: string;
  address?: string | null;
}): string {
  const structureName = input.structureName.trim();
  const cityName = input.cityName.trim();
  const fromAddress = extractCityFromAddress(input.address);

  if (cityName && !namesMatch(cityName, structureName)) {
    const canonicalId = resolveCanonicalCityId({ cityName });
    if (canonicalId && majorWorldCities.some((city) => city.city_id === canonicalId)) {
      return cityName;
    }
    return cityName;
  }

  if (fromAddress && !namesMatch(fromAddress, structureName)) {
    return fromAddress;
  }

  return cityName;
}

export function resolveStructureWorldCity(input: {
  structureName: string;
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
  address?: string | null;
}): WorldCity {
  const resolvedName = resolveStructureCityName({
    structureName: input.structureName,
    cityName: input.cityName,
    address: input.address,
  });
  const countryCode = input.countryCode?.trim().toUpperCase() || "IT";
  const canonicalId = resolveCanonicalCityId({
    cityName: resolvedName,
    countryCode,
    cityId: input.cityId,
  });

  if (canonicalId && majorWorldCities.some((city) => city.city_id === canonicalId)) {
    return findCityById(canonicalId);
  }

  return createWorldCity(countryCode, resolvedName);
}
