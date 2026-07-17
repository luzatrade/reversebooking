import { slugifySeo } from "@/lib/seo/slug";

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
  sardinia: ["sardegna"],
  sardegna: ["sardinia"],
  "reggio calabria": ["reggio di calabria"],
  "reggio di calabria": ["reggio calabria"],
  london: ["londra"],
  londra: ["london"],
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function titleCaseWord(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function canonicalCityKey(cityName: string) {
  const base = normalize(cityName);
  if (!base) return "";
  if (cityAliases[base]) return base;
  for (const [key, aliases] of Object.entries(cityAliases)) {
    if (aliases.includes(base)) return key;
  }
  return base;
}

export function cityLookupNames(cityName: string) {
  const base = cityName.trim();
  if (!base) return [];
  const key = canonicalCityKey(base);
  const names = new Set<string>([base, titleCaseWord(base)]);
  for (const alias of cityAliases[key] ?? []) {
    names.add(alias);
    names.add(titleCaseWord(alias));
  }
  if (key !== normalize(base)) {
    names.add(key);
    names.add(titleCaseWord(key));
  }
  return [...names];
}

export function buildDestinationSlug(cityName: string) {
  return slugifySeo(canonicalCityKey(cityName), 64);
}

export function destinationPublicPath(cityNameOrSlug: string) {
  const slug = cityNameOrSlug.includes("-") && !cityNameOrSlug.includes(" ")
    ? slugifySeo(cityNameOrSlug, 64)
    : buildDestinationSlug(cityNameOrSlug);
  return `/destinazioni/${slug}`;
}

export function cityNameMatches(cityName: string, hubDisplayName: string, hubKey: string) {
  const key = canonicalCityKey(cityName);
  return key === hubKey || normalize(cityName) === normalize(hubDisplayName);
}
