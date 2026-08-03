import { createServiceRoleClient } from "@/lib/supabase/admin";

export type StructureSeoRecord = {
  source: "onboarding" | "hotel";
  id: string;
  slug: string;
  name: string;
  descriptionIt: string | null;
  descriptionEn: string | null;
  structureType: string | null;
  address: string | null;
  cityName: string;
  countryName: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  googleMapsUrl: string | null;
  mainPhotoUrl: string | null;
  galleryPhotoUrls: string[];
  latitude: number | null;
  longitude: number | null;
  onboardingId: string | null;
  hotelAccountId: string | null;
  status: string | null;
  seoIndexable: boolean;
};

const ONBOARDING_SELECT =
  "id, slug, seo_indexable, nome, description, description_en, indirizzo, city_name, email, phone, website, google_maps_url, main_photo_url, gallery_photo_urls, lat, lng, status";

const HOTEL_SELECT =
  "id, slug, seo_indexable, onboarding_hotel_id, property_name, description, description_en, structure_type, full_address, country_name, city_name, public_email, public_phone, google_maps_url, main_photo_url, gallery_photo_urls, latitude, longitude, account_status, subscription_active, provider_kind";

function mapOnboarding(row: Record<string, unknown>): StructureSeoRecord {
  return {
    source: "onboarding",
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.nome),
    descriptionIt: (row.description as string | null) ?? null,
    descriptionEn: (row.description_en as string | null) ?? null,
    structureType: null,
    address: (row.indirizzo as string | null) ?? null,
    cityName: String(row.city_name),
    countryName: "Italia",
    email: (row.email as string | null) ?? null,
    phone: (row.phone as string | null) ?? null,
    website: (row.website as string | null) ?? null,
    googleMapsUrl: (row.google_maps_url as string | null) ?? null,
    mainPhotoUrl: (row.main_photo_url as string | null) ?? null,
    galleryPhotoUrls: Array.isArray(row.gallery_photo_urls) ? (row.gallery_photo_urls as string[]) : [],
    latitude: row.lat != null ? Number(row.lat) : null,
    longitude: row.lng != null ? Number(row.lng) : null,
    onboardingId: String(row.id),
    hotelAccountId: null,
    status: (row.status as string | null) ?? null,
    seoIndexable: Boolean(row.seo_indexable),
  };
}

function mapHotel(row: Record<string, unknown>): StructureSeoRecord {
  return {
    source: "hotel",
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.property_name),
    descriptionIt: (row.description as string | null) ?? null,
    descriptionEn: (row.description_en as string | null) ?? null,
    structureType: (row.structure_type as string | null) ?? null,
    address: (row.full_address as string | null) ?? null,
    cityName: String(row.city_name),
    countryName: (row.country_name as string | null) ?? "Italia",
    email: (row.public_email as string | null) ?? null,
    phone: (row.public_phone as string | null) ?? null,
    website: null,
    googleMapsUrl: (row.google_maps_url as string | null) ?? null,
    mainPhotoUrl: (row.main_photo_url as string | null) ?? null,
    galleryPhotoUrls: Array.isArray(row.gallery_photo_urls) ? (row.gallery_photo_urls as string[]) : [],
    latitude: row.latitude != null ? Number(row.latitude) : null,
    longitude: row.longitude != null ? Number(row.longitude) : null,
    onboardingId: (row.onboarding_hotel_id as string | null) ?? null,
    hotelAccountId: String(row.id),
    status: null,
    seoIndexable: Boolean(row.seo_indexable),
  };
}

export async function fetchStructureBySlug(slug: string): Promise<StructureSeoRecord | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  const { data: hotel } = await admin
    .from("hotel_accounts")
    .select(HOTEL_SELECT)
    .eq("slug", slug)
    .eq("seo_indexable", true)
    .maybeSingle();

  if (hotel?.slug) return mapHotel(hotel as Record<string, unknown>);

  const { data: onboarding } = await admin
    .from("onboarding_hotels")
    .select(ONBOARDING_SELECT)
    .eq("slug", slug)
    .eq("seo_indexable", true)
    .maybeSingle();

  if (onboarding?.slug) return mapOnboarding(onboarding as Record<string, unknown>);
  return null;
}

export function buildStructureTravelRequestHref(
  record: Pick<StructureSeoRecord, "id" | "cityName" | "onboardingId" | "hotelAccountId">,
): string {
  const hotelId = record.hotelAccountId ?? record.onboardingId ?? record.id;
  const params = new URLSearchParams({ hotel_id: hotelId });
  if (record.cityName.trim()) params.set("city", record.cityName.trim());
  return `/inserzionista/crea-annuncio?${params.toString()}`;
}

export async function resolveSlugByUuid(identifier: string): Promise<string | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  const { data: hotel } = await admin
    .from("hotel_accounts")
    .select("slug, seo_indexable")
    .eq("id", identifier)
    .maybeSingle();

  if (hotel?.seo_indexable && hotel.slug) return hotel.slug;

  const { data: onboarding } = await admin
    .from("onboarding_hotels")
    .select("slug, seo_indexable")
    .eq("id", identifier)
    .maybeSingle();

  if (onboarding?.seo_indexable && onboarding.slug) return onboarding.slug;
  return null;
}

export async function fetchOnboardingSlugById(id: string): Promise<string | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  const { data } = await admin
    .from("onboarding_hotels")
    .select("slug, seo_indexable")
    .eq("id", id)
    .maybeSingle();

  if (data?.seo_indexable && data.slug) return data.slug;
  return null;
}

export async function resolveSlugFromPrevious(slug: string): Promise<string | null> {
  const admin = createServiceRoleClient();
  if (!admin) return null;

  for (const table of ["hotel_accounts", "onboarding_hotels"] as const) {
    const { data } = await admin
      .from(table)
      .select("slug")
      .contains("slug_previous", [slug])
      .eq("seo_indexable", true)
      .maybeSingle();

    if (data?.slug) return String(data.slug);
  }

  return null;
}

export async function listIndexableStructureSlugs(limit = 50000): Promise<string[]> {
  const admin = createServiceRoleClient();
  if (!admin) return [];

  const slugs = new Set<string>();
  for (const table of ["hotel_accounts", "onboarding_hotels"] as const) {
    let from = 0;
    while (slugs.size < limit) {
      const { data, error } = await admin
        .from(table)
        .select("slug")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (row.slug) slugs.add(row.slug);
        if (slugs.size >= limit) break;
      }
      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }
  return [...slugs];
}
