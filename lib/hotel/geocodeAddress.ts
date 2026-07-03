import type { GeoCoords } from "@/lib/hotel/extractGoogleMapsCoords";

export type GeocodeAddressInput = {
  address: string;
  propertyName?: string | null;
  cityName?: string | null;
  countryName?: string | null;
  countryCode?: string | null;
};

export type GeocodeAddressResult =
  | {
      ok: true;
      coords: GeoCoords;
      source: "google" | "nominatim";
      formattedAddress?: string;
    }
  | {
      ok: false;
      error: string;
    };

const GEOCODE_TIMEOUT_MS = 12_000;

function roundCoord(value: number): number {
  return Math.round(value * 1e7) / 1e7;
}

function isValidCoords(lat: number, lng: number): boolean {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

function buildGeocodeQuery(input: GeocodeAddressInput): string | null {
  const address = input.address.trim();
  if (!address) return null;

  const parts = [input.propertyName?.trim(), address, input.cityName?.trim(), input.countryName?.trim()].filter(
    Boolean,
  ) as string[];

  return parts.join(", ");
}

async function geocodeWithGoogle(
  query: string,
  apiKey: string,
  countryCode?: string | null,
): Promise<GeocodeAddressResult | null> {
  const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");
  url.searchParams.set("address", query);
  url.searchParams.set("key", apiKey);
  if (countryCode?.trim()) {
    url.searchParams.set("components", `country:${countryCode.trim().toLowerCase()}`);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GEOCODE_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      status?: string;
      results?: Array<{
        formatted_address?: string;
        geometry?: { location?: { lat?: number; lng?: number } };
      }>;
    };

    if (data.status !== "OK" || !data.results?.length) return null;

    const first = data.results[0];
    const lat = first.geometry?.location?.lat;
    const lng = first.geometry?.location?.lng;
    if (lat == null || lng == null) return null;

    const latitude = roundCoord(lat);
    const longitude = roundCoord(lng);
    if (!isValidCoords(latitude, longitude)) return null;

    return {
      ok: true,
      coords: { latitude, longitude },
      source: "google",
      formattedAddress: first.formatted_address,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function geocodeWithNominatim(
  query: string,
  countryCode?: string | null,
): Promise<GeocodeAddressResult | null> {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  url.searchParams.set("addressdetails", "0");
  if (countryCode?.trim()) {
    url.searchParams.set("countrycodes", countryCode.trim().toLowerCase());
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GEOCODE_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "HotelsDrop/1.0 (hotel-profile-geocode)",
      },
    });
    if (!res.ok) return null;

    const rows = (await res.json()) as Array<{ lat?: string; lon?: string; display_name?: string }>;
    const first = rows[0];
    if (!first?.lat || !first?.lon) return null;

    const latitude = roundCoord(Number(first.lat));
    const longitude = roundCoord(Number(first.lon));
    if (!isValidCoords(latitude, longitude)) return null;

    return {
      ok: true,
      coords: { latitude, longitude },
      source: "nominatim",
      formattedAddress: first.display_name,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function geocodeHotelAddress(input: GeocodeAddressInput): Promise<GeocodeAddressResult> {
  const query = buildGeocodeQuery(input);
  if (!query) {
    return { ok: false, error: "Indirizzo mancante." };
  }

  const googleKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (googleKey) {
    const googleResult = await geocodeWithGoogle(query, googleKey, input.countryCode);
    if (googleResult?.ok) return googleResult;
  }

  const nominatimResult = await geocodeWithNominatim(query, input.countryCode);
  if (nominatimResult?.ok) return nominatimResult;

  return {
    ok: false,
    error: "Indirizzo non trovato. Verifica via, numero civico, città e paese.",
  };
}
