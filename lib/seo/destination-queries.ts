import { createServiceRoleClient } from "@/lib/supabase/admin";
import { buildDestinationSlug, canonicalCityKey, cityLookupNames } from "@/lib/seo/city-canonical";

export const DESTINATION_MIN_STRUCTURES = 3;
export const DESTINATION_PAGE_SIZE = 48;
export const POPULAR_DESTINATIONS_LIMIT = 20;

export type DestinationHub = {
  slug: string;
  displayName: string;
  structureCount: number;
  tier: "premium" | "standard";
};

export type DestinationStructureItem = {
  slug: string;
  name: string;
  address: string | null;
  mainPhotoUrl: string | null;
};

type DestinationIndex = {
  hubs: Map<string, DestinationHub>;
  structuresBySlug: Map<string, DestinationStructureItem[]>;
};

let cachedIndex: { value: DestinationIndex; expiresAt: number } | null = null;
const INDEX_TTL_MS = 60 * 60 * 1000;

function pickDisplayName(current: string, candidate: string) {
  if (!current) return candidate;
  if (candidate.length > current.length) return candidate;
  return current;
}

async function loadDestinationIndex(): Promise<DestinationIndex> {
  const now = Date.now();
  if (cachedIndex && cachedIndex.expiresAt > now) return cachedIndex.value;

  const admin = createServiceRoleClient();
  if (!admin) return { hubs: new Map(), structuresBySlug: new Map() };

  const structuresByHubKey = new Map<
    string,
    { slug: string; displayName: string; items: Map<string, DestinationStructureItem> }
  >();

  async function ingestOnboarding() {
    if (!admin) return;
    let from = 0;
    while (true) {
      const { data, error } = await admin
        .from("onboarding_hotels")
        .select("slug, seo_indexable, city_name, nome, indirizzo, main_photo_url")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .range(from, from + 999);
      if (error) throw error;

      for (const row of data ?? []) {
        const slug = String(row.slug ?? "");
        if (!slug) continue;
        const cityName = String(row.city_name ?? "").trim();
        if (!cityName) continue;
        const item: DestinationStructureItem = {
          slug,
          name: String(row.nome ?? ""),
          address: row.indirizzo ?? null,
          mainPhotoUrl: row.main_photo_url ?? null,
        };
        addStructure(cityName, item);
      }

      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  async function ingestHotels() {
    if (!admin) return;
    let from = 0;
    while (true) {
      const { data, error } = await admin
        .from("hotel_accounts")
        .select("slug, seo_indexable, city_name, property_name, full_address, main_photo_url, provider_kind")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .range(from, from + 999);
      if (error) throw error;

      for (const row of data ?? []) {
        if (row.provider_kind === "agency") continue;
        const slug = String(row.slug ?? "");
        if (!slug) continue;
        const cityName = String(row.city_name ?? "").trim();
        if (!cityName) continue;
        const item: DestinationStructureItem = {
          slug,
          name: String(row.property_name ?? ""),
          address: row.full_address ?? null,
          mainPhotoUrl: row.main_photo_url ?? null,
        };
        addStructure(cityName, item);
      }

      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  function addStructure(cityName: string, item: DestinationStructureItem) {
    const hubKey = canonicalCityKey(cityName);
    const hubSlug = buildDestinationSlug(cityName);
    const bucket = structuresByHubKey.get(hubKey) ?? {
      slug: hubSlug,
      displayName: cityName,
      items: new Map<string, DestinationStructureItem>(),
    };
    bucket.slug = hubSlug;
    bucket.displayName = pickDisplayName(bucket.displayName, cityName);
    bucket.items.set(item.slug, item);
    structuresByHubKey.set(hubKey, bucket);
  }

  await ingestOnboarding();
  await ingestHotels();

  const hubs = new Map<string, DestinationHub>();
  const structuresBySlug = new Map<string, DestinationStructureItem[]>();

  for (const bucket of structuresByHubKey.values()) {
    const items = [...bucket.items.values()].sort((a, b) => a.name.localeCompare(b.name, "it"));
    if (items.length < DESTINATION_MIN_STRUCTURES) continue;

    const hub: DestinationHub = {
      slug: bucket.slug,
      displayName: bucket.displayName,
      structureCount: items.length,
      tier: items.length >= 10 ? "premium" : "standard",
    };
    hubs.set(bucket.slug, hub);
    structuresBySlug.set(bucket.slug, items);
  }

  const value = { hubs, structuresBySlug };
  cachedIndex = { value, expiresAt: now + INDEX_TTL_MS };
  return value;
}

export async function fetchDestinationHubBySlug(slug: string): Promise<DestinationHub | null> {
  const index = await loadDestinationIndex();
  return index.hubs.get(slug) ?? null;
}

export async function listDestinationHubSlugs(): Promise<string[]> {
  const index = await loadDestinationIndex();
  return [...index.hubs.keys()].sort();
}

export async function listPopularDestinations(limit = POPULAR_DESTINATIONS_LIMIT): Promise<DestinationHub[]> {
  const index = await loadDestinationIndex();
  return [...index.hubs.values()].sort((a, b) => b.structureCount - a.structureCount).slice(0, limit);
}

export async function fetchDestinationStructures(
  slug: string,
  page = 1,
): Promise<{ hub: DestinationHub; items: DestinationStructureItem[]; totalPages: number } | null> {
  const index = await loadDestinationIndex();
  const hub = index.hubs.get(slug);
  const allItems = index.structuresBySlug.get(slug);
  if (!hub || !allItems) return null;

  const totalPages = Math.max(1, Math.ceil(allItems.length / DESTINATION_PAGE_SIZE));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * DESTINATION_PAGE_SIZE;
  const items = allItems.slice(start, start + DESTINATION_PAGE_SIZE);
  return { hub, items, totalPages };
}

export function destinationHubMatchesCity(hub: DestinationHub, cityName: string) {
  return buildDestinationSlug(cityName) === hub.slug || cityLookupNames(cityName).some(
    (name) => buildDestinationSlug(name) === hub.slug,
  );
}
