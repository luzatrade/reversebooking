const PEXELS_API_KEY = process.env.PEXELS_API_KEY ?? "";
const PEXELS_BASE = "https://api.pexels.com/v1";

type PexelsPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    landscape: string;
  };
};

type PexelsSearchResponse = {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
};

export async function searchCityPhotos(
  cityName: string,
  perPage = 5,
): Promise<string[]> {
  if (!PEXELS_API_KEY) return [];

  const query = `${cityName} city landmark travel`;

  try {
    const response = await fetch(
      `${PEXELS_BASE}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape&size=medium`,
      {
        headers: { Authorization: PEXELS_API_KEY },
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) return [];

    const data = (await response.json()) as PexelsSearchResponse;

    return data.photos
      .filter((p) => p.width >= 800)
      .map((p) => p.src.landscape || p.src.large || p.src.medium);
  } catch {
    return [];
  }
}

export function isPexelsConfigured() {
  return Boolean(PEXELS_API_KEY);
}
