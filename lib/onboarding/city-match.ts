import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities } from "@/lib/constants/world-cities";

const cityAliases: Record<string, string[]> = {
  rome: ["roma"],
  roma: ["rome"],
  florence: ["firenze"],
  firenze: ["florence"],
  milan: ["milano"],
  milano: ["milan"],
  naples: ["napoli"],
  napoli: ["naples"],
  venice: ["venezia"],
  venezia: ["venice"],
  turin: ["torino"],
  torino: ["turin"],
  genoa: ["genova"],
  genova: ["genoa"],
  padua: ["padova"],
  padova: ["padua"],
  syracuse: ["siracusa"],
  siracusa: ["syracuse"],
  "reggio calabria": ["reggio di calabria", "reggio"],
  "reggio di calabria": ["reggio calabria", "reggio"],
  reggio: ["reggio calabria", "reggio di calabria"],
  london: ["londra"],
  londra: ["london"],
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function titleCaseWord(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function cityLookupNames(cityName: string): string[] {
  const base = cityName.trim();
  if (!base) return [];
  const n = normalize(base);
  const names = new Set<string>([base, titleCaseWord(base)]);
  for (const alias of cityAliases[n] ?? []) {
    names.add(alias);
    names.add(titleCaseWord(alias));
  }
  for (const [key, vals] of Object.entries(cityAliases)) {
    if (vals.includes(n)) {
      names.add(key);
      names.add(titleCaseWord(key));
    }
  }
  return [...names];
}

/** Nomi città per match su onboarding_hotels.city_name (IT/EN, alias). */
export function onboardingCitySearchNames(input: {
  cityId?: string | null;
  cityName: string;
  countryCode?: string | null;
}): string[] {
  const canonicalId = resolveCanonicalCityId({
    cityName: input.cityName,
    cityId: input.cityId ?? undefined,
    countryCode: input.countryCode ?? undefined,
  });
  const catalogCity = canonicalId
    ? majorWorldCities.find((city) => city.city_id === canonicalId)
    : undefined;
  const names = cityLookupNames(catalogCity?.city_name ?? input.cityName);
  if (input.cityName.trim()) {
    for (const name of cityLookupNames(input.cityName)) names.push(name);
  }
  return [...new Set(names)];
}

export function supabaseCityNameOrFilter(names: string[]): string {
  const unique = [...new Set(names.map((name) => name.trim()).filter(Boolean))];
  if (!unique.length) return "city_name.is.null";
  return unique.map((name) => `city_name.ilike."${name.replace(/"/g, '""')}"`).join(",");
}
