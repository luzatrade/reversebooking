/**
 * Provider Foursquare — cerca hotel/strutture ricettive tramite Foursquare Places API.
 * Piano gratuito: 1.000 chiamate/giorno.
 */

import type { HotelSearchResult } from "../types";

const FSQ_BASE = "https://api.foursquare.com/v3/places/search";
// Category IDs: Hotel=19014, B&B=19011, Resort=19016, Motel=19015
const HOTEL_CATEGORIES = "19014,19011,19016,19015";
const MAX_RESULTS = 50;
const SEARCH_RADIUS = 15000;

function getFsqApiKey(): string {
  return process.env.FOURSQUARE_API_KEY ?? "";
}

export async function searchFoursquare(
  cityName: string,
  lat: number | null,
  lng: number | null,
): Promise<HotelSearchResult[]> {
  const apiKey = getFsqApiKey();
  if (!apiKey) throw new Error("FOURSQUARE_API_KEY non configurata in .env.local");

  const params = new URLSearchParams({
    query: `hotel ${cityName}`,
    categories: HOTEL_CATEGORIES,
    limit: String(MAX_RESULTS),
    fields: "fsq_id,name,location,tel,website,photos,link",
  });

  if (lat && lng) {
    params.set("ll", `${lat},${lng}`);
    params.set("radius", String(SEARCH_RADIUS));
  } else {
    params.set("near", `${cityName}, Italia`);
  }

  const response = await fetch(`${FSQ_BASE}?${params}`, {
    headers: {
      Authorization: apiKey,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Foursquare API errore ${response.status}: ${text}`);
  }

  const data = await response.json();
  const results: HotelSearchResult[] = [];

  for (const place of data.results ?? []) {
    const loc = place.location ?? {};
    const photo = place.photos?.[0];
    const photoUrl = photo
      ? `${photo.prefix}original${photo.suffix}`
      : null;

    results.push({
      source: "foursquare",
      source_id: place.fsq_id,
      nome: place.name ?? "Hotel sconosciuto",
      indirizzo: loc.formatted_address ?? loc.address ?? null,
      lat: loc.latitude ?? null,
      lng: loc.longitude ?? null,
      google_maps_url: null,
      website: place.website ?? null,
      phone: place.tel ?? null,
      email: null,
      main_photo_url: photoUrl,
    });
  }

  return results;
}
