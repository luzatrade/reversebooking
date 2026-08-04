import { hasVerifiedCityHero } from "@/lib/seo/destination-hero";
import type { DestinationHub, DestinationStructureItem } from "@/lib/seo/destination-queries";

export function structureHasMainPhoto(item: DestinationStructureItem): boolean {
  return Boolean(item.mainPhotoUrl?.trim());
}

/** Hub indicizzabile: hero città verificata oppure catalogo premium (≥10 strutture con foto). */
export function isDestinationHubIndexable(hub: DestinationHub): boolean {
  return hub.tier === "premium" || hasVerifiedCityHero(hub.cityId);
}

export function filterIndexableDestinationHubs(hubs: DestinationHub[]): DestinationHub[] {
  return hubs.filter(isDestinationHubIndexable);
}
