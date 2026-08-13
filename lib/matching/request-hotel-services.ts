import {
  normalizeHotelServices,
  type HotelServiceKey,
} from "@/lib/constants/hotel-services";
import {
  TRAVEL_REQUEST_FILTER_KEYS,
  type TravelRequestFilterKey,
} from "@/lib/constants/travel-request-filters";

export function activePreferenceFilterKeys(
  preferenceFilters: Record<string, boolean> | null | undefined,
): TravelRequestFilterKey[] {
  if (!preferenceFilters) return [];
  return TRAVEL_REQUEST_FILTER_KEYS.filter((key) => Boolean(preferenceFilters[key]));
}

/** Hotel must offer every service the traveler explicitly requested. */
export function hotelMatchesPreferenceFilters(
  hotelServices: Record<string, boolean> | null | undefined,
  preferenceFilters: Record<string, boolean> | null | undefined,
): boolean {
  const required = activePreferenceFilterKeys(preferenceFilters);
  if (!required.length) return true;
  const services = normalizeHotelServices(hotelServices);
  return required.every((key) => services[key as HotelServiceKey] === true);
}

export function requestMatchesStructureType(
  preferredStructureType: string | null | undefined,
  hotelStructureType: string | null | undefined,
): boolean {
  const preferred = preferredStructureType?.trim() || "all";
  if (preferred === "all") return true;
  const hotelType = hotelStructureType?.trim() || "hotel";
  return preferred === hotelType;
}

export function hotelMatchesTravelRequest(
  hotel: {
    services?: Record<string, boolean> | null;
    structure_type?: string | null;
  },
  request: {
    preference_filters?: Record<string, boolean> | null;
    preferred_structure_type?: string | null;
  },
): boolean {
  if (!requestMatchesStructureType(request.preferred_structure_type, hotel.structure_type)) return false;
  return hotelMatchesPreferenceFilters(hotel.services, request.preference_filters);
}
