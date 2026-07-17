import { cityHeroImages } from "@/data/cityHeroImages";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import type { DestinationHub } from "@/lib/seo/destination-queries";

function resolveHubCityId(hub: Pick<DestinationHub, "displayName" | "cityId" | "countryCode">) {
  return (
    hub.cityId ??
    resolveCanonicalCityId({ cityName: hub.displayName, countryCode: hub.countryCode }) ??
    resolveCanonicalCityId({ cityName: hub.displayName, countryCode: "IT" })
  );
}

/** Hero verificata da city_media — null se assente (usare placeholder, mai fallback automatici). */
export function getVerifiedCityHeroUrl(cityId: string | null | undefined): string | null {
  if (!cityId) return null;
  return cityHeroImages[cityId] ?? null;
}

export function getDestinationCityPhoto(hub: DestinationHub): string | null {
  return getVerifiedCityHeroUrl(resolveHubCityId(hub));
}

export function hasVerifiedCityHero(cityId: string | null | undefined): boolean {
  return Boolean(cityId && cityHeroImages[cityId]);
}
