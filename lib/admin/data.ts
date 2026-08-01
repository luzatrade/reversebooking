import { createServiceRoleClient } from "@/lib/supabase/admin";
import {
  buildOrFilter,
  matchesAllTokens,
  searchPatternTerm,
  sortBySearchRelevance,
  tokenizeSearchTerm,
} from "@/lib/admin/query";

function db() {
  const client = createServiceRoleClient();
  if (!client) throw new Error("SUPABASE_SERVICE_ROLE_KEY mancante sul server");
  return client;
}

function applySearch<T extends { or: (filters: string) => T }>(query: T, term: string | undefined, textFields: string[], idFields?: string[]) {
  if (!term?.trim()) return query;
  const filter = buildOrFilter(term, textFields, idFields);
  return filter ? query.or(filter) : query;
}

export async function getAdminStats() {
  const supabase = db();
  const [
    users,
    hotels,
    advertisers,
    requests,
    offers,
    catalogOffers,
    agencyCatalogOffers,
    activeSubs,
    invoices,
  ] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "hotel"),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "advertiser"),
    supabase.from("travel_requests").select("id", { count: "exact", head: true }),
    supabase.from("offers").select("id", { count: "exact", head: true }),
    supabase.from("catalog_offers").select("id", { count: "exact", head: true }),
    supabase.from("catalog_offers").select("id", { count: "exact", head: true }).eq("offer_kind", "agency_package"),
    supabase.from("hotel_accounts").select("id", { count: "exact", head: true }).eq("subscription_active", true),
    supabase.from("billing_invoices").select("id", { count: "exact", head: true }),
  ]);

  return {
    users: users.count ?? 0,
    hotels: hotels.count ?? 0,
    advertisers: advertisers.count ?? 0,
    requests: requests.count ?? 0,
    offers: offers.count ?? 0,
    catalogOffers: catalogOffers.count ?? 0,
    agencyCatalogOffers: agencyCatalogOffers.count ?? 0,
    activeSubscriptions: activeSubs.count ?? 0,
    invoices: invoices.count ?? 0,
  };
}

export async function listProfiles(query?: string) {
  const supabase = db();
  let request = supabase
    .from("profiles")
    .select("id, user_id, role, email, phone_number, account_status, email_verified, created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(request, query, ["email", "phone_number"], ["id", "user_id"]);
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
}

export async function listAdvertisers(query?: string) {
  const supabase = db();
  let request = supabase
    .from("advertiser_profiles")
    .select(
      "id, user_id, advertiser_type, first_name, last_name, company_name, contact_email, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(
    request,
    query,
    ["first_name", "last_name", "company_name", "contact_email"],
    ["id", "user_id"],
  );
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
}

const REGISTERED_HOTEL_SEARCH_FIELDS = [
  "property_name",
  "city_name",
  "cin_code",
  "public_email",
  "specific_area",
  "full_address",
] as const;

const ONBOARDING_HOTEL_SEARCH_FIELDS = ["nome", "city_name", "email", "phone", "indirizzo"] as const;

function filterRankedRows<T>(
  query: string | undefined,
  rows: T[],
  valuesFor: (row: T) => Array<string | null | undefined>,
) {
  const trimmed = query?.trim() ?? "";
  if (!trimmed) return rows;

  const tokens = tokenizeSearchTerm(trimmed);
  const fallbackTokens = tokens.length > 0 ? tokens : [searchPatternTerm(trimmed)].filter(Boolean);
  const filtered = rows.filter((row) => matchesAllTokens(valuesFor(row), fallbackTokens));
  return sortBySearchRelevance(filtered, trimmed, valuesFor);
}

export async function listHotels(query?: string) {
  const supabase = db();
  let request = supabase
    .from("hotel_accounts")
    .select(
      "id, user_id, property_name, structure_type, city_name, country_name, cin_code, subscription_active, subscription_status, account_status, stripe_customer_id, created_at, public_email, specific_area, full_address",
    )
    .order("created_at", { ascending: false })
    .limit(query?.trim() ? 500 : 200);
  request = applySearch(request, query, [...REGISTERED_HOTEL_SEARCH_FIELDS], ["id", "user_id"]);
  const { data, error } = await request;
  if (error) throw error;
  return filterRankedRows(query, data ?? [], (row) => [
    row.property_name,
    row.city_name,
    row.country_name,
    row.cin_code,
    row.public_email,
    row.specific_area,
    row.full_address,
    row.id,
  ]).slice(0, 200);
}

export async function listTravelRequests(query?: string) {
  const supabase = db();
  let request = supabase
    .from("travel_requests")
    .select(
      "id, city_name, country_name, preferred_area, check_in, check_out, guests_count, rooms_count, budget, status, expires_at, created_at, advertiser_id",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(request, query, ["city_name", "preferred_area", "country_name"], ["id"]);
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
}

export async function listOffers(query?: string) {
  const supabase = db();
  let request = supabase
    .from("offers")
    .select(
      "id, offer_code, total_price, status, expires_at, created_at, hotel_account_id, travel_request_id",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(request, query, ["offer_code"], ["id", "travel_request_id", "hotel_account_id"]);
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
}

const CATALOG_OFFER_SEARCH_FIELDS = ["offer_code", "title_it", "title_en"] as const;

export type AdminCatalogOfferRow = {
  id: string;
  offer_code: string;
  offer_kind: string;
  title_it: string;
  title_en: string;
  status: string;
  check_in: string | null;
  check_out: string | null;
  published_at: string | null;
  expires_at: string | null;
  created_at: string;
  provider_id: string;
  provider: { property_name: string; city_name: string } | null;
  destinations: { city_name: string; role: string; sort_order: number }[];
};

function normalizeAdminCatalogOffer(row: Record<string, unknown>): AdminCatalogOfferRow {
  const providerRaw = row.provider;
  const provider = Array.isArray(providerRaw) ? providerRaw[0] : providerRaw;
  const destinations = (Array.isArray(row.destinations) ? row.destinations : []) as AdminCatalogOfferRow["destinations"];

  return {
    id: String(row.id),
    offer_code: String(row.offer_code),
    offer_kind: String(row.offer_kind),
    title_it: String(row.title_it),
    title_en: String(row.title_en),
    status: String(row.status),
    check_in: (row.check_in as string | null) ?? null,
    check_out: (row.check_out as string | null) ?? null,
    published_at: (row.published_at as string | null) ?? null,
    expires_at: (row.expires_at as string | null) ?? null,
    created_at: String(row.created_at),
    provider_id: String(row.provider_id),
    provider: (provider as AdminCatalogOfferRow["provider"]) ?? null,
    destinations,
  };
}

export function primaryCatalogOfferCity(offer: AdminCatalogOfferRow) {
  const primary = offer.destinations
    .filter((destination) => destination.role === "primary")
    .sort((a, b) => a.sort_order - b.sort_order)[0];
  return primary?.city_name ?? offer.destinations[0]?.city_name ?? offer.provider?.city_name ?? "—";
}

export async function listCatalogOffers(
  query?: string,
  options?: { offerKind?: "agency_package" | "hotel_vacancy" },
) {
  const supabase = db();
  let request = supabase
    .from("catalog_offers")
    .select(
      `
      id, offer_code, offer_kind, title_it, title_en, status,
      check_in, check_out, published_at, expires_at, created_at, provider_id,
      provider:hotel_accounts(property_name, city_name),
      destinations:catalog_offer_destinations(city_name, role, sort_order)
    `,
    )
    .order("created_at", { ascending: false })
    .limit(query?.trim() ? 500 : 200);
  if (options?.offerKind) {
    request = request.eq("offer_kind", options.offerKind);
  }
  request = applySearch(request, query, [...CATALOG_OFFER_SEARCH_FIELDS], ["id", "provider_id"]);
  const { data, error } = await request;
  if (error) throw error;

  const rows = (data ?? []).map((row) => normalizeAdminCatalogOffer(row as Record<string, unknown>));
  return filterRankedRows(query, rows, (row) => [
    row.offer_code,
    row.title_it,
    row.title_en,
    row.provider?.property_name,
    row.provider?.city_name,
    primaryCatalogOfferCity(row),
    row.status,
  ]).slice(0, 200);
}

export async function listSubscriptions() {
  const supabase = db();
  const { data, error } = await supabase
    .from("subscriptions")
    .select(
      "id, hotel_account_id, status, stripe_subscription_id, stripe_customer_id, current_period_end, cancel_at_period_end, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw error;
  return data ?? [];
}

export async function listInvoices(query?: string) {
  const supabase = db();
  let request = supabase
    .from("billing_invoices")
    .select(
      "id, hotel_account_id, invoice_number, status, amount_due, amount_paid, currency, paid_at, hosted_invoice_url, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(request, query, ["invoice_number"], ["id", "hotel_account_id"]);
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
}

export async function countOnboardingHotels() {
  const supabase = db();
  const { count, error } = await supabase.from("onboarding_hotels").select("id", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
}

export async function getOnboardingHotelById(id: string) {
  const supabase = db();
  const { data, error } = await supabase
    .from("onboarding_hotels")
    .select(
      "id, place_id, nome, indirizzo, city_name, description, description_en, email, phone, website, google_maps_url, main_photo_url, gallery_photo_urls, status, claimed_by, created_at, updated_at",
    )
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function getLinkedHotelAccountForOnboarding(onboardingId: string) {
  const supabase = db();
  const { data, error } = await supabase
    .from("hotel_accounts")
    .select(
      "id, user_id, property_name, public_phone, public_email, account_status, subscription_active, subscription_status",
    )
    .eq("onboarding_hotel_id", onboardingId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function getOnboardingPartnerContext(onboardingId: string) {
  const linkedAccount = await getLinkedHotelAccountForOnboarding(onboardingId);
  const enterUserId =
    linkedAccount?.user_id ?? (await resolveOnboardingEnterUserIdAsync(onboardingId));
  let profileEmail: string | null = null;

  if (enterUserId) {
    const supabase = db();
    const { data: profile } = await supabase
      .from("profiles")
      .select("email, account_status")
      .eq("user_id", enterUserId)
      .maybeSingle();
    profileEmail = profile?.email ?? null;
  }

  return { linkedAccount, enterUserId, profileEmail };
}

export async function mapLinkedHotelUsersForOnboarding(onboardingIds: string[]) {
  const uniqueIds = [...new Set(onboardingIds.filter(Boolean))];
  if (!uniqueIds.length) return new Map<string, string>();

  const supabase = db();
  const map = new Map<string, string>();

  const { data, error } = await supabase
    .from("hotel_accounts")
    .select("onboarding_hotel_id, user_id")
    .in("onboarding_hotel_id", uniqueIds);
  if (error) throw error;

  for (const row of data ?? []) {
    if (row.onboarding_hotel_id && row.user_id) {
      map.set(row.onboarding_hotel_id, row.user_id);
    }
  }

  const missing = uniqueIds.filter((id) => !map.has(id));
  if (!missing.length) return map;

  const { data: onboardingRows, error: onboardingError } = await supabase
    .from("onboarding_hotels")
    .select("id, claimed_by, status")
    .in("id", missing)
    .in("status", ["pending_verification", "claimed"]);
  if (onboardingError) throw onboardingError;

  const claimedUserIds = [
    ...new Set((onboardingRows ?? []).map((row) => row.claimed_by).filter(Boolean)),
  ] as string[];
  if (!claimedUserIds.length) return map;

  const { data: accounts, error: accountsError } = await supabase
    .from("hotel_accounts")
    .select("user_id")
    .in("user_id", claimedUserIds);
  if (accountsError) throw accountsError;

  const activeClaimUsers = new Set((accounts ?? []).map((row) => row.user_id));

  for (const row of onboardingRows ?? []) {
    if (row.claimed_by && activeClaimUsers.has(row.claimed_by)) {
      map.set(row.id, row.claimed_by);
    }
  }

  return map;
}

export async function resolveOnboardingEnterUserIdAsync(onboardingId: string): Promise<string | null> {
  const linked = await getLinkedHotelAccountForOnboarding(onboardingId);
  if (linked?.user_id) return linked.user_id;

  const supabase = db();
  const { data: onboarding, error } = await supabase
    .from("onboarding_hotels")
    .select("claimed_by, status")
    .eq("id", onboardingId)
    .maybeSingle();
  if (error) throw error;
  if (!onboarding?.claimed_by || onboarding.status === "unclaimed") return null;

  const { data: account } = await supabase
    .from("hotel_accounts")
    .select("user_id")
    .eq("user_id", onboarding.claimed_by)
    .maybeSingle();

  return account?.user_id ?? null;
}

export function resolveOnboardingEnterUserId(
  hotel: { id: string; claimed_by?: string | null },
  linkedUsers: Map<string, string>,
) {
  return linkedUsers.get(hotel.id) ?? null;
}

export async function listOnboardingHotels(query?: string) {
  const trimmed = query?.trim() ?? "";
  if (!trimmed) return [];

  const supabase = db();
  let request = supabase
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, description, description_en, email, phone, main_photo_url, status, claimed_by, created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  request = applySearch(request, trimmed, [...ONBOARDING_HOTEL_SEARCH_FIELDS], ["id"]);
  const { data, error } = await request;
  if (error) throw error;

  return filterRankedRows(trimmed, data ?? [], (row) => [
    row.nome,
    row.city_name,
    row.indirizzo,
    row.email,
    row.phone,
    row.id,
  ]).slice(0, 200);
}

export async function listConsents() {
  const supabase = db();
  const { data, error } = await supabase
    .from("user_consents")
    .select(
      "id, user_id, terms_accepted, privacy_accepted, marketing_accepted, terms_version, privacy_version, subscription_terms_accepted, accepted_at",
    )
    .order("accepted_at", { ascending: false })
    .limit(200);
  if (error) throw error;
  return data ?? [];
}

export async function listAuditLog() {
  const supabase = db();
  const { data, error } = await supabase
    .from("admin_audit_log")
    .select("id, actor_email, action, target_type, target_id, details, ip_address, created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) throw error;
  return data ?? [];
}

export async function profileEmailsByUserIds(userIds: string[]) {
  if (userIds.length === 0) return new Map<string, string>();
  const supabase = db();
  const { data, error } = await supabase.from("profiles").select("user_id, email").in("user_id", userIds);
  if (error) throw error;
  return new Map((data ?? []).map((row) => [row.user_id, row.email]));
}

export async function hotelNamesByIds(ids: string[]) {
  if (ids.length === 0) return new Map<string, string>();
  const supabase = db();
  const { data, error } = await supabase.from("hotel_accounts").select("id, property_name").in("id", ids);
  if (error) throw error;
  return new Map((data ?? []).map((row) => [row.id, row.property_name]));
}
