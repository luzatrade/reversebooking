import { unstable_cache } from "next/cache";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import type { DestinationSliderSlide } from "@/types/destination-slider";

export type CityMediaRow = {
  position: number;
  public_url: string;
  title_it: string | null;
  title_en: string | null;
  caption_it: string | null;
  caption_en: string | null;
  attribution: string | null;
};

export type CityDescription = {
  descriptionIt: string | null;
  descriptionEn: string | null;
};

async function fetchCityMediaRows(cityId: string): Promise<CityMediaRow[]> {
  const admin = createServiceRoleClient();
  if (!admin) return [];
  const { data, error } = await admin
    .from("city_media")
    .select("position,public_url,title_it,title_en,caption_it,caption_en,attribution")
    .eq("city_id", cityId)
    .order("position", { ascending: true });
  if (error) return [];
  return (data ?? []) as CityMediaRow[];
}

async function fetchCityDescription(cityId: string): Promise<CityDescription | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;
  const { data, error } = await admin
    .from("city_info")
    .select("description_it,description_en")
    .eq("city_id", cityId)
    .maybeSingle();
  if (error || !data) return null;
  return { descriptionIt: data.description_it, descriptionEn: data.description_en };
}

const getCachedCityMedia = unstable_cache(
  (cityId: string) => fetchCityMediaRows(cityId),
  ["city-media-rows-v1"],
  { revalidate: 86400 },
);

const getCachedCityDescription = unstable_cache(
  (cityId: string) => fetchCityDescription(cityId),
  ["city-info-v1"],
  { revalidate: 86400 },
);

/** Slide della galleria città (≥10 foto curate) servite dal nostro storage. */
export async function getCityMediaSlides(
  cityId: string | null | undefined,
  locale: "it" | "en",
): Promise<DestinationSliderSlide[]> {
  if (!cityId) return [];
  const rows = await getCachedCityMedia(cityId);
  return rows.map((row, index) => ({
    id: `media-${cityId}-${index}`,
    cityId,
    title: (locale === "en" ? row.title_en : row.title_it) ?? (row.title_en ?? row.title_it ?? ""),
    hint: (locale === "en" ? row.caption_en : row.caption_it) ?? undefined,
    photoUrl: row.public_url,
    kind: "poi" as const,
  }));
}

/** Foto principale (position 1) della città, se presente nello storage. */
export async function getCityHeroImage(cityId: string | null | undefined): Promise<string | null> {
  if (!cityId) return null;
  const rows = await getCachedCityMedia(cityId);
  return rows[0]?.public_url ?? null;
}

export async function getCityDescription(
  cityId: string | null | undefined,
  locale: "it" | "en",
): Promise<string | null> {
  if (!cityId) return null;
  const description = await getCachedCityDescription(cityId);
  if (!description) return null;
  return (locale === "en" ? description.descriptionEn : description.descriptionIt) ?? null;
}
