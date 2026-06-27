import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";

export function structureProfileHref(hotel: Pick<StructureExploreHotel, "id" | "isOnboarding">) {
  return hotel.isOnboarding ? `/hotel/onboarding/${hotel.id}` : `/hotel/${hotel.id}`;
}

export function structureRequestHref(hotel: Pick<StructureExploreHotel, "id" | "city_id" | "city_name">) {
  if (!hotel.city_name.trim()) return "/inserzionista/crea-annuncio";
  return `/inserzionista/crea-annuncio?city_id=${encodeURIComponent(hotel.city_id ?? "")}&city=${encodeURIComponent(hotel.city_name)}&hotel_id=${encodeURIComponent(hotel.id)}`;
}

export function structureMapsHref(hotel: Pick<StructureExploreHotel, "property_name" | "specific_area" | "city_name">) {
  const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
