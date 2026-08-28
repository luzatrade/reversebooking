function normalizeText(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

const COUNTRY_TOKENS = new Set(["italia", "italy", "it", "es", "fr", "de", "gb", "uk", "us"]);

function cleanCityToken(value: string) {
  return value.replace(/^\d{5}\s+/, "").replace(/,\s*$/, "").trim();
}

function stripProvinceSuffix(value: string) {
  return value.replace(/\s+[A-Z]{2}$/i, "").trim();
}

/** Estrae il comune dal CAP + città nell'indirizzo (alta affidabilità). */
export function extractCityFromCapAddress(address: string | null | undefined): string | null {
  if (!address?.trim()) return null;
  const capMatch = address.trim().match(
    /\b(\d{5})\s*,?\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]+?)(?:\s*,|\s+(?:Italia|Italy|IT|[A-Z]{2})\b|$)/i,
  );
  if (!capMatch?.[2]) return null;
  const city = cleanCityToken(capMatch[2]);
  if (city.length < 2 || COUNTRY_TOKENS.has(normalizeText(city))) return null;
  return stripProvinceSuffix(city);
}

/** Estrae il comune da un indirizzo postale italiano (CAP + città). */
export function extractCityFromAddress(address: string | null | undefined): string | null {
  const fromCap = extractCityFromCapAddress(address);
  if (fromCap) return fromCap;
  if (!address?.trim()) return null;
  const text = address.trim();

  const parts = text.split(",").map((part) => part.trim()).filter(Boolean);
  for (let index = parts.length - 1; index >= Math.max(0, parts.length - 3); index -= 1) {
    const part = cleanCityToken(parts[index] ?? "");
    if (!part || /^\d{5}$/.test(part) || /^[A-Z]{2}$/.test(part)) continue;
    if (COUNTRY_TOKENS.has(normalizeText(part))) continue;
    if (part.length >= 2 && !/^\d/.test(part)) return stripProvinceSuffix(part);
  }

  return null;
}

export function cityNamesMatch(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a?.trim() || !b?.trim()) return false;
  const left = normalizeText(stripProvinceSuffix(a));
  const right = normalizeText(stripProvinceSuffix(b));
  return left === right || left.startsWith(`${right} `) || right.startsWith(`${left} `);
}

/** Preferisce il comune CAP nell'indirizzo quando diverge dal comune di harvest/catalogo. */
export function resolveOnboardingCityName(input: {
  harvestCity: string;
  address?: string | null;
  structureName?: string | null;
}): string {
  const harvestCity = input.harvestCity.trim();
  const fromCap = extractCityFromCapAddress(input.address);
  if (fromCap && !cityNamesMatch(fromCap, harvestCity)) {
    return fromCap;
  }
  return harvestCity;
}
