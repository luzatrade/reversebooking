export type NominatimAddressPlace = {
  place_id?: number | string;
  lat?: string;
  lon?: string;
  display_name?: string;
  type?: string;
  class?: string;
  addresstype?: string;
  name?: string;
  address?: {
    house_number?: string;
    road?: string;
    pedestrian?: string;
    footway?: string;
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    state?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
    tourism?: string;
    hotel?: string;
    building?: string;
  };
};

export type AddressSuggestion = {
  id: string;
  label: string;
  subtitle: string;
  fullAddress: string;
  latitude: number;
  longitude: number;
};

function roundCoord(value: number): number {
  return Math.round(value * 1e7) / 1e7;
}

function isValidCoords(lat: number, lng: number): boolean {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

export function buildAddressSearchQuery(input: {
  query: string;
  propertyName?: string | null;
  cityName?: string | null;
  countryName?: string | null;
}): string | null {
  const text = input.query.trim();
  if (text.length < 3) return null;

  const parts = [
    input.propertyName?.trim(),
    text,
    input.cityName?.trim(),
    input.countryName?.trim(),
  ].filter(Boolean) as string[];

  return parts.join(", ");
}

export function formatAddressLine(place: NominatimAddressPlace): string {
  const address = place.address;
  if (address) {
    const street = [address.road ?? address.pedestrian ?? address.footway, address.house_number]
      .filter(Boolean)
      .join(" ");
    if (street.trim()) return street.trim();

    const named =
      address.tourism ?? address.hotel ?? address.building ?? place.name?.trim() ?? "";
    if (named) return named;
  }

  const display = place.display_name?.trim();
  if (!display) return "";
  return display.split(",").slice(0, 2).join(",").trim();
}

function formatSubtitle(place: NominatimAddressPlace): string {
  const address = place.address;
  const locality =
    address?.city ??
    address?.town ??
    address?.village ??
    address?.municipality ??
    "";
  const parts = [locality, address?.state, address?.postcode, address?.country].filter(Boolean);
  if (parts.length) return parts.join(" · ");
  return place.display_name?.split(",").slice(2, 5).join(",").trim() ?? "";
}

function addressRelevanceScore(place: NominatimAddressPlace): number {
  const address = place.address;
  let score = 0;
  if (address?.house_number) score += 4;
  if (address?.road || address?.pedestrian) score += 3;
  if (address?.tourism || address?.hotel) score += 2;
  if (place.class === "building" || place.class === "tourism") score += 2;
  if (place.addresstype === "building" || place.addresstype === "tourism") score += 1;
  return score;
}

export function addressSuggestionFromPlace(place: NominatimAddressPlace): AddressSuggestion | null {
  const lat = place.lat != null ? roundCoord(Number(place.lat)) : null;
  const lng = place.lon != null ? roundCoord(Number(place.lon)) : null;
  if (lat == null || lng == null || !isValidCoords(lat, lng)) return null;

  const fullAddress = formatAddressLine(place);
  if (!fullAddress) return null;

  const id = String(place.place_id ?? `${lat},${lng},${fullAddress}`);
  return {
    id,
    label: fullAddress,
    subtitle: formatSubtitle(place),
    fullAddress,
    latitude: lat,
    longitude: lng,
  };
}

export function mapAddressSuggestions(
  places: NominatimAddressPlace[],
  countryCode?: string | null,
): AddressSuggestion[] {
  const seen = new Set<string>();
  const restricted = countryCode?.trim().toUpperCase();

  return places
    .filter((place) => {
      if (!restricted) return true;
      const code = place.address?.country_code?.toUpperCase();
      return !code || code === restricted;
    })
    .map((place) => ({
      place,
      suggestion: addressSuggestionFromPlace(place),
      score: addressRelevanceScore(place),
    }))
    .filter((entry): entry is { place: NominatimAddressPlace; suggestion: AddressSuggestion; score: number } =>
      Boolean(entry.suggestion),
    )
    .sort((a, b) => b.score - a.score)
    .filter((entry) => {
      const key = `${entry.suggestion.latitude},${entry.suggestion.longitude},${entry.suggestion.fullAddress}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((entry) => entry.suggestion)
    .slice(0, 8);
}

export async function searchNominatimAddresses(
  query: string,
  options?: { countryCode?: string | null; signal?: AbortSignal },
): Promise<AddressSuggestion[]> {
  const params = new URLSearchParams({
    format: "jsonv2",
    addressdetails: "1",
    limit: "10",
    q: query,
  });
  if (options?.countryCode?.trim()) {
    params.set("countrycodes", options.countryCode.trim().toLowerCase());
  }

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    signal: options?.signal,
    headers: {
      Accept: "application/json",
      "User-Agent": "HotelsDrop/1.0 (hotel-address-search)",
    },
  });
  if (!response.ok) return [];

  const places = (await response.json()) as NominatimAddressPlace[];
  return mapAddressSuggestions(places, options?.countryCode);
}
