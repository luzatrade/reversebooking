import { createServiceRoleClient, withSupabaseFallback } from "@/lib/supabase/admin";
import { cityHeroImages } from "@/data/cityHeroImages";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { onboardingCitySearchNames, supabaseCityNameOrFilter } from "@/lib/onboarding/city-match";
import { buildDestinationSlug, cityLookupNames } from "@/lib/seo/city-canonical";
import {
  filterIndexableDestinationHubs,
  isDestinationHubIndexable,
  structureHasMainPhoto,
} from "@/lib/seo/destination-quality";
import { POPULAR_DESTINATION_CITIES } from "@/lib/seo/popular-destinations";

/** Min structures with photo to materialize a destination hub page (serving).
 * Sitemap/index still gated by isDestinationHubIndexable (hero or ≥10). */
export const DESTINATION_MIN_STRUCTURES = 1;
export const DESTINATION_PAGE_SIZE = 48;
export const POPULAR_DESTINATIONS_LIMIT = 20;

export type DestinationHub = {
  slug: string;
  displayName: string;
  structureCount: number;
  tier: "premium" | "standard";
  cityId: string | null;
  countryCode: string | null;
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
        .not("main_photo_url", "is", null)
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
        .not("main_photo_url", "is", null)
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
    if (!structureHasMainPhoto(item)) return;

    // Merge by canonical destination slug so Rome/Roma (and IT/EN aliases) share one hub.
    const hubSlug = buildDestinationSlug(cityName);
    if (!hubSlug) return;
    const hubKey = hubSlug;
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

  try {
    await ingestOnboarding();
    await ingestHotels();
  } catch (error) {
    console.error(
      "[destination] index load failed:",
      error instanceof Error ? error.message : error,
    );
    return { hubs: new Map(), structuresBySlug: new Map() };
  }

  const hubs = new Map<string, DestinationHub>();
  const structuresBySlug = new Map<string, DestinationStructureItem[]>();

  for (const bucket of structuresByHubKey.values()) {
    const items = [...bucket.items.values()].sort((a, b) => a.name.localeCompare(b.name, "it"));
    if (items.length < DESTINATION_MIN_STRUCTURES) continue;

    const cityId =
      resolveCanonicalCityId({ cityName: bucket.displayName }) ??
      resolveCanonicalCityId({ cityName: bucket.displayName, countryCode: "IT" });
    const countryCode = cityId?.split("-")[0] ?? null;

    const hub: DestinationHub = {
      slug: bucket.slug,
      displayName: bucket.displayName,
      structureCount: items.length,
      tier: items.length >= 10 ? "premium" : "standard",
      cityId,
      countryCode,
    };
    hubs.set(bucket.slug, hub);
    structuresBySlug.set(bucket.slug, items);
  }

  const value = { hubs, structuresBySlug };
  cachedIndex = { value, expiresAt: now + INDEX_TTL_MS };
  return value;
}

export async function listDestinationHubSlugs(): Promise<string[]> {
  const index = await loadDestinationIndex();
  return [...index.hubs.values()]
    .filter(isDestinationHubIndexable)
    .map((hub) => hub.slug)
    .sort();
}

export async function listAllDestinationHubs(): Promise<DestinationHub[]> {
  const index = await loadDestinationIndex();
  return filterIndexableDestinationHubs([...index.hubs.values()]).sort((a, b) =>
    a.displayName.localeCompare(b.displayName, "it"),
  );
}

export async function listPopularDestinations(): Promise<DestinationHub[]> {
  const index = await loadDestinationIndex();
  const results: DestinationHub[] = [];

  for (const entry of POPULAR_DESTINATION_CITIES) {
    if (!cityHeroImages[entry.cityId]) continue;

    const slug = buildDestinationSlug(entry.displayName);
    const hub = index.hubs.get(slug);
    if (!hub) continue;

    const countryCode = entry.cityId.split("-")[0] ?? null;

    results.push({
      ...hub,
      displayName: entry.displayName,
      cityId: entry.cityId,
      countryCode,
    });
  }

  return results;
}

/**
 * Carica un hub "soft" on-demand quando la città ha strutture con foto
 * ma non raggiunge DESTINATION_MIN_STRUCTURES (evita 404 dal CTA homepage).
 * Non entra in sitemap / listAll — solo fetchDestinationStructures / BySlug.
 */
async function loadSoftDestinationHub(slug: string): Promise<{
  hub: DestinationHub;
  items: DestinationStructureItem[];
} | null> {
  const admin = createServiceRoleClient();
  if (!admin || !slug) return null;

  return withSupabaseFallback("soft destination hub", null, () => loadSoftDestinationHubUnsafe(admin, slug));
}

async function loadSoftDestinationHubUnsafe(
  admin: NonNullable<ReturnType<typeof createServiceRoleClient>>,
  slug: string,
): Promise<{
  hub: DestinationHub;
  items: DestinationStructureItem[];
} | null> {
  const displayGuess = slug.replace(/-/g, " ");
  const names = [
    ...new Set([
      ...cityLookupNames(displayGuess),
      ...onboardingCitySearchNames({ cityName: displayGuess, countryCode: "IT" }),
    ]),
  ];
  if (!names.length) return null;

  const itemsBySlug = new Map<string, DestinationStructureItem>();
  const nameFilter = supabaseCityNameOrFilter(names);

  const [{ data: onboarding, error: onboardingError }, { data: hotels, error: hotelsError }] =
    await Promise.all([
      admin
        .from("onboarding_hotels")
        .select("slug, seo_indexable, city_name, nome, indirizzo, main_photo_url")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .not("main_photo_url", "is", null)
        .or(nameFilter)
        .limit(200),
      admin
        .from("hotel_accounts")
        .select("slug, seo_indexable, city_name, property_name, full_address, main_photo_url, provider_kind")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .not("main_photo_url", "is", null)
        .or(nameFilter)
        .limit(200),
    ]);

  if (onboardingError) {
    console.error("[destination] soft hub onboarding query failed:", onboardingError.message);
  }
  if (hotelsError) {
    console.error("[destination] soft hub hotel_accounts query failed:", hotelsError.message);
  }

  for (const row of onboarding ?? []) {
    const itemSlug = String(row.slug ?? "");
    if (!itemSlug) continue;
    const item: DestinationStructureItem = {
      slug: itemSlug,
      name: String(row.nome ?? ""),
      address: row.indirizzo ?? null,
      mainPhotoUrl: row.main_photo_url ?? null,
    };
    if (!structureHasMainPhoto(item)) continue;
    if (buildDestinationSlug(String(row.city_name ?? "")) !== slug) continue;
    itemsBySlug.set(itemSlug, item);
  }

  for (const row of hotels ?? []) {
    if (row.provider_kind === "agency") continue;
    const itemSlug = String(row.slug ?? "");
    if (!itemSlug) continue;
    const item: DestinationStructureItem = {
      slug: itemSlug,
      name: String(row.property_name ?? ""),
      address: row.full_address ?? null,
      mainPhotoUrl: row.main_photo_url ?? null,
    };
    if (!structureHasMainPhoto(item)) continue;
    if (buildDestinationSlug(String(row.city_name ?? "")) !== slug) continue;
    itemsBySlug.set(itemSlug, item);
  }

  const items = [...itemsBySlug.values()].sort((a, b) => a.name.localeCompare(b.name, "it"));
  if (!items.length) return null;

  const displayName =
    names.find((n) => /^[A-ZÀ-ÖØ-Ý]/.test(n) && buildDestinationSlug(n) === slug) ??
    titleCaseSlug(slug);

  const cityId =
    resolveCanonicalCityId({ cityName: displayName }) ??
    resolveCanonicalCityId({ cityName: displayName, countryCode: "IT" });
  const countryCode = cityId?.split("-")[0] ?? null;

  const hub: DestinationHub = {
    slug,
    displayName,
    structureCount: items.length,
    tier: items.length >= 10 ? "premium" : "standard",
    cityId,
    countryCode,
  };

  return { hub, items };
}

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function fetchDestinationHubBySlug(slug: string): Promise<DestinationHub | null> {
  const index = await loadDestinationIndex();
  const cached = index.hubs.get(slug);
  if (cached) return cached;
  const soft = await loadSoftDestinationHub(slug);
  return soft?.hub ?? null;
}

export async function fetchDestinationStructures(
  slug: string,
  page = 1,
): Promise<{ hub: DestinationHub; items: DestinationStructureItem[]; totalPages: number } | null> {
  const index = await loadDestinationIndex();
  let hub = index.hubs.get(slug) ?? null;
  let allItems = index.structuresBySlug.get(slug) ?? null;

  if (!hub || !allItems) {
    const soft = await loadSoftDestinationHub(slug);
    if (!soft) return null;
    hub = soft.hub;
    allItems = soft.items;
  }

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

export function buildDestinationTravelRequestHref(
  hub: Pick<DestinationHub, "displayName" | "cityId">,
): string {
  if (!hub.displayName.trim()) return "/inserzionista/crea-annuncio";
  const params = new URLSearchParams({ city: hub.displayName.trim() });
  if (hub.cityId) params.set("city_id", hub.cityId);
  return `/inserzionista/crea-annuncio?${params.toString()}`;
}
