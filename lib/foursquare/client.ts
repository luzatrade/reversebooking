const PLACES_API_VERSION = "2025-06-17";
const PHOTO_SIZE = "800x500";

export type FoursquarePhoto = {
  prefix?: string;
  suffix?: string;
  width?: number;
  height?: number;
};

export type FoursquarePlace = {
  fsq_place_id?: string;
  name?: string;
  photos?: FoursquarePhoto[];
};

function getApiKey() {
  const key = process.env.FOURSQUARE_API_KEY?.trim();
  if (!key) return null;
  return key;
}

export function buildFoursquarePhotoUrl(photo: FoursquarePhoto, size = PHOTO_SIZE) {
  if (!photo.prefix || !photo.suffix) return null;
  return `${photo.prefix}${size}${photo.suffix}`;
}

async function foursquareFetch<T>(path: string, searchParams: Record<string, string | number | undefined>) {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const url = new URL(`https://places-api.foursquare.com${path}`);
  for (const [key, value] of Object.entries(searchParams)) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
      "X-Places-Api-Version": PLACES_API_VERSION,
    },
    next: { revalidate: 43200 },
  });

  if (!response.ok) return null;
  return (await response.json()) as T;
}

function primaryPhoto(place: FoursquarePlace) {
  const photo = place.photos?.[0];
  if (!photo) return null;
  return buildFoursquarePhotoUrl(photo);
}

export async function searchPlaces(params: {
  near?: string;
  ll?: string;
  query?: string;
  fsqCategoryIds?: string;
  limit?: number;
}) {
  const data = await foursquareFetch<{ results?: FoursquarePlace[] }>("/places/search", {
    near: params.near,
    ll: params.ll,
    query: params.query,
    fsq_category_ids: params.fsqCategoryIds,
    limit: params.limit ?? 15,
    fields: "fsq_place_id,name,photos",
    sort: "POPULAR",
  });
  return data?.results ?? [];
}

export async function getPlacePhotos(placeId: string, limit = 1) {
  const data = await foursquareFetch<{ photos?: FoursquarePhoto[] }>(`/places/${placeId}/photos`, {
    limit,
    sort: "POPULAR",
  });
  return data?.photos ?? [];
}

export async function placeToPhotoSlide(place: FoursquarePlace, cityLabel: string) {
  const placeId = place.fsq_place_id;
  const name = place.name?.trim();
  if (!placeId || !name) return null;

  let photoUrl = primaryPhoto(place);
  if (!photoUrl) {
    const photos = await getPlacePhotos(placeId, 1);
    photoUrl = photos[0] ? buildFoursquarePhotoUrl(photos[0]) : null;
  }
  if (!photoUrl) return null;

  return {
    id: placeId,
    title: name,
    subtitle: cityLabel,
    photoUrl,
    kind: "poi" as const,
  };
}

export function isFoursquareConfigured() {
  return Boolean(getApiKey());
}
