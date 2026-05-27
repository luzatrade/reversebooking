import { defaultDestinationCities } from "@/data/defaultDestinationCities";

/** City IDs from the featured-destinations catalog — always use curated Unsplash, never generic Commons. */
export const CATALOG_CITY_IDS = new Set(defaultDestinationCities.map((city) => city.cityId));

export function isCatalogCity(cityId?: string | null) {
  return Boolean(cityId && CATALOG_CITY_IDS.has(cityId));
}
