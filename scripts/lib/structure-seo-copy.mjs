import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const raw = JSON.parse(readFileSync(resolve(__dirname, "../../data/seo/city-context.json"), "utf8"));

const byNormalizedName = new Map();

for (const [cityName, value] of Object.entries(raw)) {
  if (cityName.startsWith("_")) continue;
  if (!value?.phraseIt?.trim() || !value?.phraseEn?.trim()) continue;
  byNormalizedName.set(normalizeCityName(cityName), value);
}

export function normalizeCityName(cityName) {
  return cityName.trim().toLocaleLowerCase("it-IT");
}

export function getCitySeoContext(cityName) {
  if (!cityName?.trim()) return null;
  return byNormalizedName.get(normalizeCityName(cityName)) ?? null;
}

export function buildHotelSeoLine({ name, cityName }, locale = "it") {
  const cityContext = getCitySeoContext(cityName);

  if (locale === "en") {
    if (cityContext) {
      return `${name} — direct booking in ${cityName}, ideal for exploring ${cityContext.phraseEn}. Request a personalised commission-free offer on HotelsDrop.`;
    }
    return `${name} — direct booking in ${cityName}. Request a personalised commission-free offer on HotelsDrop.`;
  }

  if (cityContext) {
    return `${name} — prenotazione diretta a ${cityName}, ideale per visitare ${cityContext.phraseIt}. Su HotelsDrop richiedi un'offerta personalizzata senza commissioni.`;
  }
  return `${name} — prenotazione diretta a ${cityName}. Su HotelsDrop richiedi un'offerta personalizzata senza commissioni.`;
}
