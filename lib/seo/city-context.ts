import cityContextData from "@/data/seo/city-context.json";

export type CitySeoContext = {
  phraseIt: string;
  phraseEn: string;
};

const byNormalizedName = new Map<string, CitySeoContext>();

for (const [cityName, value] of Object.entries(cityContextData)) {
  if (cityName.startsWith("_")) continue;
  if (!value || typeof value !== "object") continue;
  const phraseIt = "phraseIt" in value ? String(value.phraseIt ?? "").trim() : "";
  const phraseEn = "phraseEn" in value ? String(value.phraseEn ?? "").trim() : "";
  if (!phraseIt || !phraseEn) continue;
  byNormalizedName.set(normalizeCityName(cityName), { phraseIt, phraseEn });
}

export function normalizeCityName(cityName: string): string {
  return cityName.trim().toLocaleLowerCase("it-IT");
}

export function getCitySeoContext(cityName: string | null | undefined): CitySeoContext | null {
  if (!cityName?.trim()) return null;
  return byNormalizedName.get(normalizeCityName(cityName)) ?? null;
}
