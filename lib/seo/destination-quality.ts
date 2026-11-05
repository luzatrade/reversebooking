import { hasVerifiedCityHero } from "@/lib/seo/destination-hero";
import type { DestinationHub, DestinationStructureItem } from "@/lib/seo/destination-queries";

export const MIN_INDEXABLE_DESTINATION_STRUCTURES = 20;

export function structureHasMainPhoto(item: DestinationStructureItem): boolean {
  return Boolean(item.mainPhotoUrl?.trim());
}

/** Hub indicizzabile: hero città verificata oppure catalogo con almeno 20 strutture con foto. */
export function isDestinationHubIndexable(hub: DestinationHub): boolean {
  return hub.structureCount >= MIN_INDEXABLE_DESTINATION_STRUCTURES || hasVerifiedCityHero(hub.cityId);
}

export function filterIndexableDestinationHubs(hubs: DestinationHub[]): DestinationHub[] {
  return hubs.filter(isDestinationHubIndexable);
}
