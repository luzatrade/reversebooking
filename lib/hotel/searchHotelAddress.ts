import { geocodeHotelAddress } from "@/lib/hotel/geocodeAddress";
import { mapCenterForCity } from "@/lib/showcase/hotelMapCoords";
import { searchNominatimAddresses, type AddressSuggestion } from "@/lib/location/nominatimAddress";

export type AddressSearchSuggestion = {
  id: string;
  label: string;
  subtitle: string;
  placeId: string | null;
  fullAddress: string;
  latitude: number | null;
  longitude: number | null;
  googleMapsUrl: string | null;
  source: "google_places" | "google_geocode" | "nominatim";
};

export type SearchHotelAddressInput = {
  query: string;
  propertyName?: string | null;
  cityName?: string | null;
  countryName?: string | null;
  countryCode?: string | null;
  cityId?: string | null;
};

function googleApiKey(): string | null {
  return process.env.GOOGLE_PLACES_API_KEY?.trim() || null;
}

function roundCoord(value: number): number {
  return Math.round(value * 1e7) / 1e7;
}

function buildSearchInput(input: SearchHotelAddressInput): string | null {
  const query = input.query.trim();
  if (query.length < 3) return null;

  const parts = [input.propertyName?.trim(), query, input.cityName?.trim(), input.countryName?.trim()].filter(
    Boolean,
  ) as string[];

  return parts.join(", ");
}

function toSuggestionFromNominatim(item: AddressSuggestion): AddressSearchSuggestion {
  return {
    id: item.id,
    label: item.label,
    subtitle: item.subtitle,
    placeId: null,
    fullAddress: item.fullAddress,
    latitude: item.latitude,
    longitude: item.longitude,
    googleMapsUrl: null,
    source: "nominatim",
  };
}

async function searchWithGooglePlacesAutocomplete(
  input: SearchHotelAddressInput,
): Promise<AddressSearchSuggestion[]> {
  const apiKey = googleApiKey();
  const text = buildSearchInput(input);
  if (!apiKey || !text) return [];

  const { center } = mapCenterForCity(input.cityName ?? "", input.cityId, input.countryCode);
  const body: Record<string, unknown> = {
    input: text,
    languageCode: "it",
  };

  const countryCode = input.countryCode?.trim().toLowerCase();
  if (countryCode) {
    body.includedRegionCodes = [countryCode];
  }

  body.locationBias = {
    circle: {
      center: { latitude: center[0], longitude: center[1] },
      radius: 40_000,
    },
  };

  const response = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) return [];

  const data = (await response.json()) as {
    suggestions?: Array<{
      placePrediction?: {
        placeId?: string;
        text?: { text?: string };
        structuredFormat?: {
          mainText?: { text?: string };
          secondaryText?: { text?: string };
        };
      };
    }>;
  };

  return (data.suggestions ?? [])
    .map((entry) => {
      const prediction = entry.placePrediction;
      if (!prediction) return null;
      const placeId = prediction.placeId?.trim();
      const fullText = prediction.text?.text?.trim();
      if (!placeId || !fullText) return null;

      const mainText = prediction.structuredFormat?.mainText?.text?.trim() ?? fullText.split(",")[0]?.trim() ?? fullText;
      const secondaryText = prediction.structuredFormat?.secondaryText?.text?.trim() ?? fullText;

      return {
        id: placeId,
        label: mainText,
        subtitle: secondaryText,
        placeId,
        fullAddress: fullText,
        latitude: null,
        longitude: null,
        googleMapsUrl: null,
        source: "google_places" as const,
      };
    })
    .filter(Boolean)
    .slice(0, 8) as AddressSearchSuggestion[];
}

async function searchWithGoogleGeocode(input: SearchHotelAddressInput): Promise<AddressSearchSuggestion[]> {
  const apiKey = googleApiKey();
  const text = buildSearchInput(input);
  if (!apiKey || !text) return [];

  const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");
  url.searchParams.set("address", text);
  url.searchParams.set("key", apiKey);
  if (input.countryCode?.trim()) {
    url.searchParams.set("components", `country:${input.countryCode.trim().toLowerCase()}`);
  }

  const response = await fetch(url);
  if (!response.ok) return [];

  const data = (await response.json()) as {
    status?: string;
    results?: Array<{
      formatted_address?: string;
      geometry?: { location?: { lat?: number; lng?: number } };
      place_id?: string;
    }>;
  };

  if (data.status !== "OK" || !data.results?.length) return [];

  return data.results.slice(0, 5).map((result, index) => {
    const lat = result.geometry?.location?.lat;
    const lng = result.geometry?.location?.lng;
    const formatted = result.formatted_address?.trim() ?? text;
    const [label, ...rest] = formatted.split(",");
    return {
      id: result.place_id ?? `geocode-${index}-${formatted}`,
      label: label?.trim() || formatted,
      subtitle: rest.join(",").trim(),
      placeId: result.place_id ?? null,
      fullAddress: formatted,
      latitude: lat != null ? roundCoord(lat) : null,
      longitude: lng != null ? roundCoord(lng) : null,
      googleMapsUrl: result.place_id
        ? `https://www.google.com/maps/place/?q=place_id:${result.place_id}`
        : null,
      source: "google_geocode" as const,
    };
  });
}

export async function searchHotelAddresses(input: SearchHotelAddressInput): Promise<AddressSearchSuggestion[]> {
  const places = await searchWithGooglePlacesAutocomplete(input);
  if (places.length) return places;

  const geocoded = await searchWithGoogleGeocode(input);
  if (geocoded.length) return geocoded;

  const text = buildSearchInput(input);
  if (!text) return [];

  const nominatim = await searchNominatimAddresses(text, { countryCode: input.countryCode });
  return nominatim.map(toSuggestionFromNominatim);
}

export async function resolveHotelPlace(
  placeId: string,
): Promise<
  | {
      ok: true;
      fullAddress: string;
      latitude: number;
      longitude: number;
      googleMapsUrl: string | null;
      source: "google_places";
    }
  | { ok: false; error: string }
> {
  const apiKey = googleApiKey();
  const id = placeId.trim();
  if (!apiKey || !id) {
    return { ok: false, error: "Risoluzione luogo non disponibile." };
  }

  const resource = id.startsWith("places/") ? id : `places/${id}`;
  const response = await fetch(`https://places.googleapis.com/v1/${resource}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "id,formattedAddress,location,googleMapsUri,displayName",
    },
  });

  if (!response.ok) {
    return { ok: false, error: "Impossibile recuperare i dettagli del luogo." };
  }

  const data = (await response.json()) as {
    formattedAddress?: string;
    location?: { latitude?: number; longitude?: number };
    googleMapsUri?: string;
    displayName?: { text?: string };
  };

  const lat = data.location?.latitude;
  const lng = data.location?.longitude;
  if (lat == null || lng == null) {
    return { ok: false, error: "Coordinate non disponibili per questo luogo." };
  }

  return {
    ok: true,
    fullAddress: data.formattedAddress?.trim() || data.displayName?.text?.trim() || id,
    latitude: roundCoord(lat),
    longitude: roundCoord(lng),
    googleMapsUrl: data.googleMapsUri ?? null,
    source: "google_places",
  };
}

export async function resolveHotelAddressSuggestion(
  suggestion: AddressSearchSuggestion,
): Promise<
  | {
      ok: true;
      fullAddress: string;
      latitude: number;
      longitude: number;
      googleMapsUrl: string | null;
      source: AddressSearchSuggestion["source"];
    }
  | { ok: false; error: string }
> {
  if (
    suggestion.latitude != null &&
    suggestion.longitude != null &&
    suggestion.fullAddress.trim()
  ) {
    return {
      ok: true,
      fullAddress: suggestion.fullAddress,
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
      googleMapsUrl: suggestion.googleMapsUrl,
      source: suggestion.source,
    };
  }

  if (suggestion.placeId) {
    const resolved = await resolveHotelPlace(suggestion.placeId);
    if (resolved.ok) return resolved;
  }

  const geocoded = await geocodeHotelAddress({
    address: suggestion.fullAddress,
  });
  if (!geocoded.ok) {
    return { ok: false, error: geocoded.error };
  }

  return {
    ok: true,
    fullAddress: geocoded.formattedAddress ?? suggestion.fullAddress,
    latitude: geocoded.coords.latitude,
    longitude: geocoded.coords.longitude,
    googleMapsUrl: null,
    source: geocoded.source === "google" ? "google_geocode" : "nominatim",
  };
}
