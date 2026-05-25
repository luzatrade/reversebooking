/**
 * Provider Google Places (New) — cerca hotel tramite Google Places API.
 * Richiede billing attivo su Google Cloud.
 */

import type { HotelSearchResult } from "../types";

const PLACES_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const PLACES_PHOTO_BASE = "https://places.googleapis.com/v1";
const MAX_RESULTS = 20;
const SEARCH_RADIUS = 15000;

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.location",
  "places.websiteUri",
  "places.internationalPhoneNumber",
  "places.photos",
  "places.googleMapsUri",
].join(",");

function getGoogleApiKey(): string {
  return process.env.GOOGLE_PLACES_API_KEY ?? "";
}

function photoUrl(photoName: string): string {
  return `${PLACES_PHOTO_BASE}/${photoName}/media?maxWidthPx=800&key=${getGoogleApiKey()}`;
}

export function isGoogleConfigured(): boolean {
  return Boolean(getGoogleApiKey());
}

export async function searchGoogle(
  cityName: string,
  provincia: string,
  lat: number | null,
  lng: number | null,
): Promise<HotelSearchResult[]> {
  const apiKey = getGoogleApiKey();
  if (!apiKey) throw new Error("GOOGLE_PLACES_API_KEY non configurata in .env.local");

  const body: Record<string, unknown> = {
    textQuery: `hotel albergo bed and breakfast ${cityName} ${provincia} Italia`,
    maxResultCount: MAX_RESULTS,
    languageCode: "it",
  };

  if (lat && lng) {
    body.locationBias = {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: SEARCH_RADIUS,
      },
    };
  }

  const response = await fetch(PLACES_SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Places API errore ${response.status}: ${text}`);
  }

  const data = await response.json();
  const results: HotelSearchResult[] = [];

  for (const place of data.places ?? []) {
    const firstPhoto = place.photos?.[0]?.name;
    results.push({
      source: "google",
      source_id: place.id,
      nome: place.displayName?.text ?? "Hotel sconosciuto",
      indirizzo: place.formattedAddress ?? null,
      lat: place.location?.latitude ?? null,
      lng: place.location?.longitude ?? null,
      google_maps_url: place.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${place.id}`,
      website: place.websiteUri ?? null,
      phone: place.internationalPhoneNumber ?? null,
      email: null,
      main_photo_url: firstPhoto ? photoUrl(firstPhoto) : null,
    });
  }

  return results;
}
