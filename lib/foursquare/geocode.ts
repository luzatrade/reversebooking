export type GeoPoint = { lat: number; lng: number };

export async function geocodeCity(cityName: string, countryName?: string | null, countryCode?: string | null) {
  const query = [cityName.trim(), countryName?.trim()].filter(Boolean).join(", ");
  if (!query) return null;

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  if (countryCode) url.searchParams.set("countrycodes", countryCode.toLowerCase());

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "HotelsDrop/1.0 (destination-slider)",
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) return null;
  const rows = (await response.json()) as Array<{ lat?: string; lon?: string }>;
  const first = rows[0];
  if (!first?.lat || !first?.lon) return null;
  return { lat: Number(first.lat), lng: Number(first.lon) };
}

export function formatNearQuery(cityName: string, countryName?: string | null) {
  return [cityName.trim(), countryName?.trim()].filter(Boolean).join(", ");
}

export function formatLatLng(point: GeoPoint) {
  return `${point.lat},${point.lng}`;
}
