import cityContextData from "@/data/seo/city-context.json";

export type CitySeoContext = {
  phraseIt: string;
  phraseEn: string;
};

type CityContextFile = Record<string, CitySeoContext | string>;

const entries = Object.entries(cityContextData as CityContextFile).filter(
  ([key]) => !key.startsWith("_"),
);

const byNormalizedName = new Map<string, CitySeoContext>();

for (const [cityName, value] of entries) {
  if (typeof value === "string") continue;
  if (!value.phraseIt?.trim() || !value.phraseEn?.trim()) continue;
  byNormalizedName.set(normalizeCityName(cityName), value);
}

export function normalizeCityName(cityName: string): string {
  return cityName.trim().toLocaleLowerCase("it-IT");
}

/** Verified POI phrases only — returns null if city is not in the curated file. */
export function getCitySeoContext(cityName: string | null | undefined): CitySeoContext | null {
  if (!cityName?.trim()) return null;
  return byNormalizedName.get(normalizeCityName(cityName)) ?? null;
}

export function listCitiesWithSeoContext(): string[] {
  return [...byNormalizedName.keys()];
}
