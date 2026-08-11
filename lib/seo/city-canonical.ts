import { slugifySeo } from "@/lib/seo/slug";

/**
 * Alias IT/EN (e regioni marketing → città hub) per slug destinazione.
 * preferredDestinationSlugKey sceglie lo slug canonico dell'hub.
 */
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
  paris: ["parigi"],
  parigi: ["paris"],
  berlin: ["berlino"],
  berlino: ["berlin"],
  barcelona: ["barcellona"],
  barcellona: ["barcelona"],
  lisbon: ["lisbona"],
  lisbona: ["lisbon"],
  prague: ["praga"],
  praga: ["prague"],
  vienna: ["wien"],
  wien: ["vienna"],
  athens: ["atene"],
  atene: ["athens"],
  /** Regioni / brand destinazione homepage → hub città catalogo */
  sorrento: ["costiera amalfitana", "amalfi coast", "amalfi"],
  "costiera amalfitana": ["sorrento", "amalfi coast", "amalfi"],
  "amalfi coast": ["sorrento", "costiera amalfitana", "amalfi"],
  amalfi: ["sorrento", "costiera amalfitana", "amalfi coast"],
  como: ["lago di como", "lake como"],
  "lago di como": ["como", "lake como"],
  "lake como": ["como", "lago di como"],
  bari: ["puglia", "alberobello"],
  puglia: ["bari", "alberobello"],
  alberobello: ["bari", "puglia"],
  taormina: ["sicilia", "sicily"],
  sicilia: ["taormina", "sicily"],
  sicily: ["taormina", "sicilia"],
  cagliari: ["sardegna", "sardinia"],
  sardegna: ["cagliari", "sardinia"],
  sardinia: ["cagliari", "sardegna"],
};

/** Slug canonico preferito per hub destinazione (allinea IT/EN e alias). */
const preferredDestinationSlugKey: Record<string, string> = {
  rome: "roma",
  roma: "roma",
  london: "london",
  londra: "london",
  paris: "paris",
  parigi: "paris",
  berlin: "berlin",
  berlino: "berlin",
  florence: "firenze",
  firenze: "firenze",
  milan: "milano",
  milano: "milano",
  naples: "napoli",
  napoli: "napoli",
  venice: "venezia",
  venezia: "venezia",
  turin: "torino",
  torino: "torino",
  genoa: "genova",
  genova: "genova",
  padua: "padova",
  padova: "padova",
  syracuse: "siracusa",
  siracusa: "siracusa",
  "reggio calabria": "reggio-calabria",
  "reggio di calabria": "reggio-calabria",
  reggio: "reggio-calabria",
  barcelona: "barcelona",
  barcellona: "barcelona",
  lisbon: "lisbon",
  lisbona: "lisbon",
  prague: "prague",
  praga: "prague",
  vienna: "vienna",
  wien: "vienna",
  athens: "athens",
  atene: "athens",
  sorrento: "sorrento",
  "costiera amalfitana": "sorrento",
  "amalfi coast": "sorrento",
  amalfi: "sorrento",
  como: "como",
  "lago di como": "como",
  "lake como": "como",
  bari: "bari",
  puglia: "bari",
  alberobello: "bari",
  taormina: "taormina",
  sicilia: "taormina",
  sicily: "taormina",
  cagliari: "cagliari",
  sardegna: "cagliari",
  sardinia: "cagliari",
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function titleCaseWord(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/** Risolve il nome normalizzato al membro del cluster alias (se esiste). */
function resolveAliasClusterKey(cityName: string): string {
  const base = normalize(cityName);
  if (!base) return "";
  if (cityAliases[base] || preferredDestinationSlugKey[base]) return base;
  for (const [key, aliases] of Object.entries(cityAliases)) {
    if (aliases.includes(base)) return key;
  }
  return base;
}

/**
 * Chiave stabile del cluster città.
 * Usa lo slug hub preferito (senza hyphen) così Rome/Roma condividono lo stesso bucket.
 */
export function canonicalCityKey(cityName: string) {
  const cluster = resolveAliasClusterKey(cityName);
  if (!cluster) return "";
  const preferred = preferredDestinationSlugKey[cluster];
  if (preferred) return preferred.replace(/-/g, " ");
  return cluster;
}

export function cityLookupNames(cityName: string) {
  const base = cityName.trim();
  if (!base) return [];
  const n = normalize(base);
  const names = new Set<string>([base, titleCaseWord(base)]);

  const clusterKeys = new Set<string>();
  const seed = resolveAliasClusterKey(base);
  if (seed) clusterKeys.add(seed);
  if (cityAliases[n]) clusterKeys.add(n);
  for (const [key, aliases] of Object.entries(cityAliases)) {
    if (key === n || aliases.includes(n) || key === seed || aliases.includes(seed)) {
      clusterKeys.add(key);
      for (const alias of aliases) clusterKeys.add(alias);
    }
  }

  for (const key of clusterKeys) {
    names.add(key);
    names.add(titleCaseWord(key));
    for (const alias of cityAliases[key] ?? []) {
      names.add(alias);
      names.add(titleCaseWord(alias));
    }
  }

  const preferredSlug = preferredDestinationSlugKey[seed] ?? preferredDestinationSlugKey[n];
  if (preferredSlug) {
    const preferredName = preferredSlug.replace(/-/g, " ");
    names.add(preferredName);
    names.add(titleCaseWord(preferredName));
  }

  return [...names];
}

export function buildDestinationSlug(cityName: string) {
  const cluster = resolveAliasClusterKey(cityName);
  if (!cluster) return "";
  const preferred = preferredDestinationSlugKey[cluster];
  return slugifySeo(preferred ?? cluster, 64);
}

/** Normalizza uno slug URL verso lo slug canonico dell'hub destinazione. */
export function resolveDestinationHubSlug(inputSlug: string) {
  return buildDestinationSlug(inputSlug.replace(/-/g, " "));
}

/** Internal unprefixed path — middleware 301s to /it/… for SEO. Prefer `@/lib/i18n/routing`. */
export function destinationPublicPath(cityNameOrSlug: string) {
  const slug =
    cityNameOrSlug.includes("-") && !cityNameOrSlug.includes(" ")
      ? resolveDestinationHubSlug(cityNameOrSlug)
      : buildDestinationSlug(cityNameOrSlug);
  return `/destinazioni/${slug}`;
}

export function cityNameMatches(cityName: string, hubDisplayName: string, hubKey: string) {
  const key = canonicalCityKey(cityName);
  return (
    key === hubKey ||
    normalize(cityName) === normalize(hubDisplayName) ||
    buildDestinationSlug(cityName) === buildDestinationSlug(hubDisplayName)
  );
}
