import type { CatalogOfferListItem } from "@/types/catalog-offers";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities } from "@/lib/constants/world-cities";
import {
  onboardingCitySearchNames,
  supabaseCityNameOrFilter,
} from "@/lib/onboarding/city-match";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { isMissingColumnError } from "@/lib/supabase/schema-compat";
import {
  fetchShowcaseConcludedRequests,
  fetchShowcaseTravelRequests,
  type ShowcaseTravelRequest,
} from "@/lib/showcase/publicRequests";
import { fetchRandomCatalogOffers } from "@/lib/catalog-offers/queries";
import { fetchActiveTravelRequestCount, fetchCatalogStructureCount } from "@/lib/showcase/catalogCounts";
import { parseStoredCoords } from "@/lib/showcase/hotelMapCoords";
import { resolveStructureCityName } from "@/lib/showcase/resolveStructureCity";

export const RANDOM_ONBOARDING_POOL = 320;
export const RANDOM_ONBOARDING_SHOW = 40;
export const RANDOM_REGISTERED_SHOW = 20;
export const SHOWCASE_REQUESTS_POOL = 250;

const PUBLIC_ONBOARDING_STATUS_SET = new Set<string>([
  "unclaimed",
  "claimed",
  "pending_verification",
]);

const REGISTERED_SELECT =
  "id, slug, seo_indexable, property_name, structure_type, provider_kind, country_code, city_name, city_id, specific_area, description, description_en, public_email, public_phone, main_photo_url, latitude, longitude, onboarding_hotel_id";

const ONBOARDING_SELECT =
  "id, slug, seo_indexable, nome, city_name, indirizzo, description, description_en, email, phone, main_photo_url, lat, lng, status";

const ONBOARDING_SELECT_LEGACY =
  "id, slug, seo_indexable, nome, city_name, indirizzo, description, email, phone, main_photo_url, lat, lng, status";

const REGISTERED_SELECT_LEGACY =
  "id, slug, seo_indexable, property_name, structure_type, provider_kind, country_code, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, latitude, longitude, onboarding_hotel_id";

export type ShowcaseHomeHotel = {
  id: string;
  slug: string | null;
  seoIndexable: boolean;
  property_name: string;
  structure_type: string;
  provider_kind: "structure" | "agency";
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  specific_area: string | null;
  description: string | null;
  description_en: string | null;
  public_email: string | null;
  public_phone: string | null;
  main_photo_url: string | null;
  latitude: number | null;
  longitude: number | null;
  isOnboarding: boolean;
};

export type ShowcaseHomeInitialData = {
  requests: ShowcaseTravelRequest[];
  hotels: ShowcaseHomeHotel[];
  structureOffers: CatalogOfferListItem[];
  agencyOffers: CatalogOfferListItem[];
  catalogTotalCount: number;
  activeRequestTotalCount: number;
};

export type FetchShowcaseStructuresOptions = {
  cityId?: string | null;
  cityName?: string | null;
  countryCode?: string | null;
};

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function onboardingCityMeta(cityName: string) {
  const cityId = resolveCanonicalCityId({ cityName });
  const catalogCity = cityId ? majorWorldCities.find((city) => city.city_id === cityId) : undefined;
  const countryCode = catalogCity?.country_code ?? (cityId?.includes("-") ? cityId.split("-")[0]! : "IT");
  return {
    country_code: countryCode,
    city_id: cityId ?? `${String(cityName || "").toLowerCase().replace(/ +/g, "-")}-it`,
  };
}

function mapOnboardingRow(row: {
  id: string;
  slug: string | null;
  nome: string;
  city_name: string;
  indirizzo: string | null;
  description?: string | null;
  description_en?: string | null;
  email: string | null;
  phone: string | null;
  main_photo_url: string | null;
  lat: number | null;
  lng: number | null;
}): ShowcaseHomeHotel {
  const city_name = resolveStructureCityName({
    structureName: String(row.nome ?? ""),
    cityName: String(row.city_name ?? ""),
    address: row.indirizzo,
  });
  const { country_code, city_id } = onboardingCityMeta(city_name);
  const coords = parseStoredCoords(row.lat, row.lng);
  return {
    id: String(row.id),
    slug: row.slug ?? null,
    seoIndexable: Boolean((row as { seo_indexable?: boolean }).seo_indexable),
    property_name: String(row.nome ?? ""),
    structure_type: "hotel",
    provider_kind: "structure",
    country_code,
    city_name,
    city_id,
    specific_area: row.indirizzo ?? null,
    description: row.description ?? null,
    description_en: row.description_en ?? null,
    public_email: row.email ?? null,
    public_phone: row.phone ?? null,
    main_photo_url: row.main_photo_url ?? null,
    latitude: coords.latitude,
    longitude: coords.longitude,
    isOnboarding: true,
  };
}

function mapRegisteredRow(row: {
  id: string;
  slug: string | null;
  property_name: string;
  structure_type: string | null;
  provider_kind: string | null;
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  specific_area: string | null;
  description: string | null;
  description_en: string | null;
  public_email: string | null;
  public_phone: string | null;
  main_photo_url: string | null;
  latitude: number | null;
  longitude: number | null;
}): ShowcaseHomeHotel {
  const coords = parseStoredCoords(row.latitude, row.longitude);
  return {
    id: String(row.id),
    slug: row.slug ?? null,
    seoIndexable: Boolean((row as { seo_indexable?: boolean }).seo_indexable),
    property_name: String(row.property_name ?? ""),
    structure_type: String(row.structure_type ?? "hotel"),
    provider_kind: (row.provider_kind ?? "structure") as "structure" | "agency",
    country_code: row.country_code ?? null,
    city_name: String(row.city_name ?? ""),
    city_id: row.city_id ?? null,
    specific_area: row.specific_area ?? null,
    description: row.description ?? null,
    description_en: row.description_en ?? null,
    public_email: row.public_email ?? null,
    public_phone: row.public_phone ?? null,
    main_photo_url: row.main_photo_url ?? null,
    latitude: coords.latitude,
    longitude: coords.longitude,
    isOnboarding: false,
  };
}

/** Partner attivi + strutture onboarding pubbliche, mescolate per la vetrina homepage. */
export async function fetchShowcaseStructures(
  options: FetchShowcaseStructuresOptions = {},
): Promise<ShowcaseHomeHotel[]> {
  const admin = createServiceRoleClient();
  if (!admin) return [];

  const cityName = options.cityName?.trim() ?? "";
  const hasCity = Boolean(cityName);

  const { error: descriptionEnProbeError } = await admin
    .from("onboarding_hotels")
    .select("description_en")
    .limit(1);
  const descriptionEnAvailable = !isMissingColumnError(descriptionEnProbeError, "description_en");

  const [{ data: registeredHotels, error: registeredError }, linkedOnboardingIds] = await Promise.all([
    (async () => {
      let registeredQuery = descriptionEnAvailable
        ? admin
            .from("hotel_accounts")
            .select(REGISTERED_SELECT)
            .eq("account_status", "active")
            .eq("subscription_active", true)
            .order("property_name", { ascending: true })
        : admin
            .from("hotel_accounts")
            .select(REGISTERED_SELECT_LEGACY)
            .eq("account_status", "active")
            .eq("subscription_active", true)
            .order("property_name", { ascending: true });

      if (hasCity && options.cityId) {
        registeredQuery = registeredQuery.eq("city_id", options.cityId);
      } else if (!hasCity) {
        registeredQuery = registeredQuery.limit(RANDOM_REGISTERED_SHOW);
      }

      return registeredQuery;
    })(),
    (async () => {
      const { data } = await admin
        .from("hotel_accounts")
        .select("onboarding_hotel_id")
        .eq("account_status", "active")
        .eq("subscription_active", true)
        .not("onboarding_hotel_id", "is", null);
      return new Set((data ?? []).map((row) => String(row.onboarding_hotel_id)));
    })(),
  ]);

  if (registeredError) {
    console.error("[showcase] hotel_accounts query failed:", registeredError.message);
  }

  const onboardingPool: Array<Record<string, unknown>> = [];

  const maxPool = hasCity ? 200 : RANDOM_ONBOARDING_POOL;
  let from = 0;

  const onboardingSelect = descriptionEnAvailable ? ONBOARDING_SELECT : ONBOARDING_SELECT_LEGACY;

  while (onboardingPool.length < maxPool) {
    let query = descriptionEnAvailable
      ? admin.from("onboarding_hotels").select(ONBOARDING_SELECT)
      : admin.from("onboarding_hotels").select(ONBOARDING_SELECT_LEGACY);
    query = query.order("updated_at", { ascending: false }).range(from, from + 999);

    if (hasCity) {
      const names = onboardingCitySearchNames({
        cityId: options.cityId,
        cityName,
        countryCode: options.countryCode,
      });
      query = query.or(supabaseCityNameOrFilter(names));
    }

    const { data, error } = await query;
    if (error) {
      console.error("[showcase] onboarding_hotels query failed:", error.message);
      break;
    }
    if (!data?.length) break;

    const rows = (data ?? []) as unknown as Array<{
      id: string;
      nome: string;
      city_name: string;
      status?: string | null;
      description_en?: string | null;
      main_photo_url?: string | null;
      [key: string]: unknown;
    }>;

    for (const row of rows) {
      const status = String(row.status ?? "unclaimed").toLowerCase();
      if (!PUBLIC_ONBOARDING_STATUS_SET.has(status)) continue;
      if (linkedOnboardingIds.has(String(row.id))) continue;
      if (!row.nome?.trim() || !row.city_name?.trim()) continue;
      onboardingPool.push({
        ...row,
        description_en: descriptionEnAvailable ? (row.description_en ?? null) : null,
      });
      if (onboardingPool.length >= maxPool) break;
    }

    if (data.length < 1000) break;
    from += 1000;
  }

  if (onboardingPool.length === 0) {
    const fallbackQuery = descriptionEnAvailable
      ? admin.from("onboarding_hotels").select(ONBOARDING_SELECT)
      : admin.from("onboarding_hotels").select(ONBOARDING_SELECT_LEGACY);
    const { data, error } = await fallbackQuery.order("nome", { ascending: true }).limit(maxPool);
    if (error) {
      console.error("[showcase] onboarding_hotels fallback query failed:", error.message);
    } else {
      const rows = (data ?? []) as unknown as Array<{
        id: string;
        nome: string;
        city_name: string;
        description_en?: string | null;
        main_photo_url?: string | null;
        [key: string]: unknown;
      }>;
      for (const row of rows) {
        if (linkedOnboardingIds.has(String(row.id))) continue;
        if (!row.nome?.trim() || !row.city_name?.trim()) continue;
        onboardingPool.push({
          ...row,
          description_en: descriptionEnAvailable ? (row.description_en ?? null) : null,
        });
      }
    }
  }

  const onboardingMapped = shuffleItems(
    onboardingPool.sort((a, b) => Number(Boolean(b.main_photo_url)) - Number(Boolean(a.main_photo_url))),
  )
    .slice(0, hasCity ? 200 : RANDOM_ONBOARDING_SHOW)
    .map((row) => mapOnboardingRow(row as Parameters<typeof mapOnboardingRow>[0]));

  const registeredPool = (registeredHotels ?? []) as unknown as Parameters<typeof mapRegisteredRow>[0][];
  const registeredMapped = shuffleItems(registeredPool).map(mapRegisteredRow);

  return shuffleItems([...onboardingMapped, ...registeredMapped]);
}

function isShowcaseVisibleAfterAcceptance(acceptedAtIso: string, now = new Date()) {
  const until = new Date(acceptedAtIso).getTime() + 24 * 60 * 60 * 1000;
  return now.getTime() < until;
}

async function fetchRecentlyAcceptedRequestIds(): Promise<string[]> {
  const admin = createServiceRoleClient();
  if (!admin) return [];

  const acceptedCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await admin
    .from("offers")
    .select("travel_request_id, updated_at")
    .eq("status", "accepted")
    .gt("updated_at", acceptedCutoff);

  if (error) return [];

  const ids = new Set<string>();
  for (const row of data ?? []) {
    if (isShowcaseVisibleAfterAcceptance(String(row.updated_at))) {
      ids.add(String(row.travel_request_id));
    }
  }
  return [...ids];
}

export async function fetchShowcaseHomeInitialData(): Promise<ShowcaseHomeInitialData | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }

  try {
    const [requests, acceptedIds, hotels, structureOffers, agencyOffers, catalogTotalCount, activeRequestTotalCount] =
      await Promise.all([
        fetchShowcaseTravelRequests(SHOWCASE_REQUESTS_POOL),
        fetchRecentlyAcceptedRequestIds(),
        fetchShowcaseStructures(),
        fetchRandomCatalogOffers("hotel_vacancy", 12),
        fetchRandomCatalogOffers("agency_package", 12),
        fetchCatalogStructureCount(),
        fetchActiveTravelRequestCount({ countryCode: "IT" }),
      ]);

    const concluded = acceptedIds.length ? await fetchShowcaseConcludedRequests(acceptedIds) : [];
    const merged = new Map<string, ShowcaseTravelRequest>();
    for (const request of [...requests, ...concluded]) {
      merged.set(request.id, request);
    }

    return {
      requests: Array.from(merged.values())
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, SHOWCASE_REQUESTS_POOL),
      hotels,
      structureOffers,
      agencyOffers,
      catalogTotalCount,
      activeRequestTotalCount,
    };
  } catch {
    return null;
  }
}
