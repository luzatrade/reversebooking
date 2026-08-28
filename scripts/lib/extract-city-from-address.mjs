/** Keep in sync with lib/geo/extractCityFromAddress.ts (used by Node harvest/backfill scripts). */

function normalizeText(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
}

const COUNTRY_TOKENS = new Set(["italia", "italy", "it", "es", "fr", "de", "gb", "uk", "us"]);

function cleanCityToken(value) {
  return value.replace(/^\d{5}\s+/, "").replace(/,\s*$/, "").trim();
}

function stripProvinceSuffix(value) {
  return value.replace(/\s+[A-Z]{2}$/i, "").trim();
}

export function extractCityFromCapAddress(address) {
  if (!address?.trim()) return null;
  const capMatch = address.trim().match(
    /\b(\d{5})\s*,?\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]+?)(?:\s*,|\s+(?:Italia|Italy|IT|[A-Z]{2})\b|$)/i,
  );
  if (!capMatch?.[2]) return null;
  const city = cleanCityToken(capMatch[2]);
  if (city.length < 2 || COUNTRY_TOKENS.has(normalizeText(city))) return null;
  return stripProvinceSuffix(city);
}

export function extractCityFromAddress(address) {
  const fromCap = extractCityFromCapAddress(address);
  if (fromCap) return fromCap;
  if (!address?.trim()) return null;
  const parts = address.trim().split(",").map((part) => part.trim()).filter(Boolean);
  for (let index = parts.length - 1; index >= Math.max(0, parts.length - 3); index -= 1) {
    const part = cleanCityToken(parts[index] ?? "");
    if (!part || /^\d{5}$/.test(part) || /^[A-Z]{2}$/.test(part)) continue;
    if (COUNTRY_TOKENS.has(normalizeText(part))) continue;
    if (part.length >= 2 && !/^\d/.test(part)) return stripProvinceSuffix(part);
  }
  return null;
}

export function cityNamesMatch(a, b) {
  if (!a?.trim() || !b?.trim()) return false;
  const left = normalizeText(stripProvinceSuffix(a));
  const right = normalizeText(stripProvinceSuffix(b));
  return left === right || left.startsWith(`${right} `) || right.startsWith(`${left} `);
}

export function resolveOnboardingCityName({ harvestCity, address }) {
  const harvest = harvestCity.trim();
  const fromCap = extractCityFromCapAddress(address);
  if (fromCap && !cityNamesMatch(fromCap, harvest)) return fromCap;
  return harvest;
}
