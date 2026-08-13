import type { HotelServiceKey } from "@/lib/constants/hotel-services";

/** Filtri selezionabili dal viaggiatore — stessi ID dei servizi struttura in dashboard. */
export const TRAVEL_REQUEST_FILTER_KEYS: HotelServiceKey[] = [
  "connecting_rooms",
  "disabled_access",
  "pool",
  "spa",
  "bathtub",
  "garage",
  "beach",
  "pets_allowed",
];

export type TravelRequestFilterKey = typeof TRAVEL_REQUEST_FILTER_KEYS[number];

export type TravelRequestFilters = Record<TravelRequestFilterKey, boolean>;

export function emptyTravelRequestFilters(): TravelRequestFilters {
  return Object.fromEntries(TRAVEL_REQUEST_FILTER_KEYS.map((key) => [key, false])) as TravelRequestFilters;
}

export function parseTravelRequestFiltersFromParam(value: string | null): TravelRequestFilters {
  const base = emptyTravelRequestFilters();
  if (!value?.trim()) return base;
  const keys = new Set(value.split(",").map((item) => item.trim()).filter(Boolean));
  for (const key of TRAVEL_REQUEST_FILTER_KEYS) {
    if (keys.has(key)) base[key] = true;
  }
  return base;
}

export function mergeTravelRequestFilters(
  input: Partial<TravelRequestFilters> | Record<string, boolean> | null | undefined,
): TravelRequestFilters {
  const base = emptyTravelRequestFilters();
  if (!input) return base;
  for (const key of TRAVEL_REQUEST_FILTER_KEYS) {
    if (typeof input[key] === "boolean") base[key] = input[key];
  }
  return base;
}
