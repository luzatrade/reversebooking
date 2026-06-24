import { createWorldCity } from "@/lib/constants/world-city-helpers";
import type { WorldCity } from "@/lib/constants/world-cities";

export type HomeSeoDestination = {
  slug: string;
  city: WorldCity;
};

/** Italian destinations for homepage local SEO links. */
export const homeSeoDestinations: HomeSeoDestination[] = [
  { slug: "roma", city: createWorldCity("IT", "Roma") },
  { slug: "milano", city: createWorldCity("IT", "Milano") },
  { slug: "firenze", city: createWorldCity("IT", "Firenze") },
  { slug: "napoli", city: createWorldCity("IT", "Napoli") },
  { slug: "venezia", city: createWorldCity("IT", "Venezia") },
  { slug: "torino", city: createWorldCity("IT", "Torino") },
  { slug: "bologna", city: createWorldCity("IT", "Bologna") },
  { slug: "verona", city: createWorldCity("IT", "Verona") },
  { slug: "palermo", city: createWorldCity("IT", "Palermo") },
  { slug: "como", city: createWorldCity("IT", "Como") },
  { slug: "rimini", city: createWorldCity("IT", "Rimini") },
  { slug: "amalfi", city: createWorldCity("IT", "Amalfi") },
];

export function buildCreateRequestPrefillUrl(
  city: WorldCity,
  extra?: { check_in?: string; check_out?: string; adults?: number; rooms?: number },
) {
  const params = new URLSearchParams();
  if (city.city_id) params.set("city_id", city.city_id);
  if (city.city_name) params.set("city", city.city_name);
  if (extra?.check_in) params.set("check_in", extra.check_in);
  if (extra?.check_out) params.set("check_out", extra.check_out);
  if (extra?.adults) params.set("adults", String(extra.adults));
  if (extra?.rooms) params.set("rooms", String(extra.rooms));
  return `/inserzionista/crea-annuncio?${params.toString()}`;
}
