import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";
import { structureProfileHref } from "@/lib/showcase/structureExploreLinks";

export const EXPLORE_MAP_FROM = "explore-map";

export function buildExploreMapHomeHref(
  city: { city_id?: string | null; city_name: string; country_code?: string | null },
  hotelId?: string | null,
) {
  const params = new URLSearchParams({ map: "1" });
  if (city.city_id) params.set("city_id", city.city_id);
  if (city.city_name.trim()) params.set("city", city.city_name.trim());
  if (city.country_code) params.set("country", city.country_code);
  if (hotelId) params.set("map_hotel", hotelId);
  return `/?${params.toString()}`;
}

export function structureProfileHrefFromExploreMap(
  hotel: Pick<StructureExploreHotel, "id" | "isOnboarding" | "slug" | "city_id" | "city_name" | "country_code">,
) {
  const params = new URLSearchParams({ from: EXPLORE_MAP_FROM });
  if (hotel.city_id) params.set("city_id", hotel.city_id);
  if (hotel.city_name.trim()) params.set("city", hotel.city_name.trim());
  if (hotel.country_code) params.set("country", hotel.country_code);
  return `${structureProfileHref(hotel)}?${params.toString()}`;
}

export function isExploreMapReturn(searchParams: Pick<URLSearchParams, "get">) {
  return searchParams.get("from") === EXPLORE_MAP_FROM;
}

export function exploreMapBackHref(
  searchParams: Pick<URLSearchParams, "get">,
  fallback: { city_id?: string | null; city_name?: string | null; country_code?: string | null },
  hotelId: string,
) {
  if (!isExploreMapReturn(searchParams)) return null;
  return buildExploreMapHomeHref(
    {
      city_id: searchParams.get("city_id") ?? fallback.city_id,
      city_name: searchParams.get("city") ?? fallback.city_name ?? "",
      country_code: searchParams.get("country") ?? fallback.country_code,
    },
    hotelId,
  );
}
