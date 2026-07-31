import type { CatalogOfferListItem } from "@/types/catalog-offers";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities } from "@/lib/constants/world-cities";
import {
  onboardingCitySearchNames,
  supabaseCityNameOrFilter,
} from "@/lib/onboarding/city-match";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import {
  fetchShowcaseConcludedRequests,
  fetchShowcaseTravelRequests,
  type ShowcaseTravelRequest,
} from "@/lib/showcase/publicRequests";
import { fetchRandomCatalogOffers } from "@/lib/catalog-offers/queries";
import { parseStoredCoords } from "@/lib/showcase/hotelMapCoords";

export const RANDOM_ONBOARDING_POOL = 320;
export const RANDOM_ONBOARDING_SHOW = 40;
export const RANDOM_REGISTERED_SHOW = 20;
export const SHOWCASE_REQUESTS_POOL = 200;

const PUBLIC_ONBOARDING_STATUSES = ["unclaimed", "claimed", "pending_verification"] as const;

const REGISTERED_SELECT =
  "id, slug, property_name, structure_type, provider_kind, country_code, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, latitude, longitude";

const ONBOARDING_SELECT =
  "id, slug, nome, city_name, indirizzo, description, email, phone, main_photo_url, lat, lng";

export type ShowcaseHomeHotel = {
  id: string;
  slug: string | null;
  property_name: string;
  structure_type: string;
  provider_kind: "structure" | "agency";
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  specific_area: string | null;
  description: string | null;
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
  description: string | null;
  email: string | null;
  phone: string | null;
  main_photo_url: string | null;
  lat: number | null;
  lng: number | null;
}): ShowcaseHomeHotel {
  const { country_code, city_id } = onboardingCityMeta(String(row.city_name ?? ""));
  const coords = parseStoredCoords(row.lat, row.lng);
  return {
    id: String(row.id),
    slug: row.slug ?? null,
    property_name: String(row.nome ?? ""),
    structure_type: "hotel",
    provider_kind: "structure",
    country_code,
    city_name: String(row.city_name ?? ""),
    city_id,
    specific_area: row.indirizzo ?? null,
    description: row.description ?? null,
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
    property_name: String(row.property_name ?? ""),
    structure_type: String(row.structure_type ?? "hotel"),
    provider_kind: (row.provider_kind ?? "structure") as "structure" | "agency",
    country_code: row.country_code ?? null,
    city_name: String(row.city_name ?? ""),
    city_id: row.city_id ?? null,
    specific_area: row.specific_area ?? null,
    description: row.description ?? null,
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

  let registeredQuery = admin
    .from("hotel_accounts")
    .select(REGISTERED_SELECT)
    .eq("account_status", "active")
    .eq("subscription_active", true)
    .order("property_name", { ascending: true });

  if (hasCity && options.cityId) {
    registeredQuery = registeredQuery.eq("city_id", options.cityId);
  } else if (!hasCity) {
    registeredQuery = registeredQuery.limit(RANDOM_REGISTERED_SHOW);
  }

  let onboardingQuery = admin
    .from("onboarding_hotels")
    .select(ONBOARDING_SELECT)
    .in("status", [...PUBLIC_ONBOARDING_STATUSES])
    .order("nome", { ascending: true });

  if (hasCity) {
    const names = onboardingCitySearchNames({
      cityId: options.cityId,
      cityName,
      countryCode: options.countryCode,
    });
    onboardingQuery = onboardingQuery.or(supabaseCityNameOrFilter(names)).limit(200);
  } else {
    onboardingQuery = onboardingQuery.limit(RANDOM_ONBOARDING_POOL);
  }

  const [{ data: registeredHotels }, { data: onboardingHotels }] = await Promise.all([
    registeredQuery,
    onboardingQuery,
  ]);

  const onboardingMapped = shuffleItems(onboardingHotels ?? [])
    .slice(0, hasCity ? 200 : RANDOM_ONBOARDING_SHOW)
    .map(mapOnboardingRow);

  const registeredPool = registeredHotels ?? [];
  const registeredMapped = (hasCity ? shuffleItems(registeredPool) : shuffleItems(registeredPool)).map(
    mapRegisteredRow,
  );

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
    const [requests, acceptedIds, hotels, structureOffers, agencyOffers] = await Promise.all([
      fetchShowcaseTravelRequests(SHOWCASE_REQUESTS_POOL),
      fetchRecentlyAcceptedRequestIds(),
      fetchShowcaseStructures(),
      fetchRandomCatalogOffers("hotel_vacancy", 12),
      fetchRandomCatalogOffers("agency_package", 12),
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
    };
  } catch {
    return null;
  }
}
