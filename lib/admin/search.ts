import { createServiceRoleClient } from "@/lib/supabase/admin";
import { buildOrFilter, isUuid, matchesAllTokens, searchPatternTerm, tokenizeSearchTerm } from "@/lib/admin/query";

const REGISTERED_HOTEL_FIELDS = [
  "property_name",
  "city_name",
  "cin_code",
  "public_email",
  "specific_area",
  "full_address",
] as const;

const ONBOARDING_HOTEL_FIELDS = ["nome", "city_name", "email", "phone", "indirizzo"] as const;

export type AdminSearchHitType =
  | "user"
  | "hotel"
  | "advertiser"
  | "request"
  | "offer"
  | "invoice"
  | "onboarding";

export type AdminSearchHit = {
  type: AdminSearchHitType;
  id: string;
  title: string;
  subtitle: string;
  href: string;
  userId?: string;
};

export const adminSearchTypeLabels: Record<AdminSearchHitType, string> = {
  user: "Utente",
  hotel: "Struttura",
  advertiser: "Inserzionista",
  request: "Annuncio",
  offer: "Offerta",
  invoice: "Fattura",
  onboarding: "Onboarding",
};

function db() {
  const client = createServiceRoleClient();
  if (!client) throw new Error("SUPABASE_SERVICE_ROLE_KEY mancante sul server");
  return client;
}

function hrefFor(type: AdminSearchHitType, query: string) {
  const q = encodeURIComponent(query);
  switch (type) {
    case "user":
      return `/console/utenti?q=${q}`;
    case "hotel":
      return `/console/strutture?q=${q}`;
    case "advertiser":
      return `/console/inserzionisti?q=${q}`;
    case "request":
      return `/console/annunci?q=${q}`;
    case "offer":
      return `/console/offerte?q=${q}`;
    case "invoice":
      return `/console/fatture?q=${q}`;
    case "onboarding":
      return `/console/onboarding?q=${q}`;
  }
}

async function searchProfiles(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const filter = buildOrFilter(term, ["email", "phone_number"], ["id", "user_id"]);
  if (!filter) return [];

  const { data, error } = await supabase
    .from("profiles")
    .select("id, user_id, role, email, phone_number, account_status")
    .or(filter)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return (data ?? []).map((row) => ({
    type: "user" as const,
    id: row.id,
    userId: row.user_id,
    title: row.email,
    subtitle: [row.role, row.phone_number, row.account_status].filter(Boolean).join(" · "),
    href: hrefFor("user", row.email),
  }));
}

async function searchHotels(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const tokens = tokenizeSearchTerm(term);
  const dbTerm = searchPatternTerm(term);
  if (!dbTerm || (dbTerm.length < 2 && !isUuid(dbTerm))) return [];

  const registeredFilter = buildOrFilter(dbTerm, [...REGISTERED_HOTEL_FIELDS], ["id", "user_id"]);
  const onboardingFilter = buildOrFilter(dbTerm, [...ONBOARDING_HOTEL_FIELDS], ["id"]);
  if (!registeredFilter && !onboardingFilter) return [];

  const [registeredResult, onboardingResult] = await Promise.all([
    registeredFilter
      ? supabase
          .from("hotel_accounts")
          .select(
            "id, user_id, property_name, city_name, country_name, account_status, cin_code, public_email, specific_area, full_address",
          )
          .or(registeredFilter)
          .order("created_at", { ascending: false })
          .limit(Math.max(limit * 4, 24))
      : Promise.resolve({ data: [], error: null }),
    onboardingFilter
      ? supabase
          .from("onboarding_hotels")
          .select("id, nome, city_name, email, status, indirizzo")
          .or(onboardingFilter)
          .order("created_at", { ascending: false })
          .limit(Math.max(limit * 4, 24))
      : Promise.resolve({ data: [], error: null }),
  ]);

  if (registeredResult.error) throw registeredResult.error;
  if (onboardingResult.error) throw onboardingResult.error;

  const tokenFilter = tokens.length > 0 ? tokens : [dbTerm];

  const registeredHits = (registeredResult.data ?? [])
    .filter((row) =>
      matchesAllTokens(
        [row.property_name, row.city_name, row.cin_code, row.public_email, row.specific_area, row.full_address],
        tokenFilter,
      ),
    )
    .map((row) => ({
      type: "hotel" as const,
      id: row.id,
      userId: row.user_id,
      title: row.property_name,
      subtitle: ["Registrata", row.city_name, row.country_name, row.account_status].filter(Boolean).join(" · "),
      href: hrefFor("hotel", row.property_name),
    }));

  const onboardingHits = (onboardingResult.data ?? [])
    .filter((row) => matchesAllTokens([row.nome, row.city_name, row.email, row.indirizzo], tokenFilter))
    .map((row) => ({
      type: "hotel" as const,
      id: row.id,
      title: row.nome,
      subtitle: ["Onboarding", row.city_name, row.email, row.status].filter(Boolean).join(" · "),
      href: hrefFor("onboarding", row.nome),
    }));

  return [...registeredHits, ...onboardingHits].slice(0, limit);
}

async function searchAdvertisers(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const filter = buildOrFilter(
    term,
    ["first_name", "last_name", "company_name", "contact_email"],
    ["id", "user_id"],
  );
  if (!filter) return [];

  const { data, error } = await supabase
    .from("advertiser_profiles")
    .select("id, user_id, first_name, last_name, company_name, contact_email, advertiser_type")
    .or(filter)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const userIds = (data ?? []).map((row) => row.user_id);
  const emails = userIds.length
    ? await supabase.from("profiles").select("user_id, email").in("user_id", userIds)
    : { data: [] as { user_id: string; email: string }[] };
  const emailByUser = new Map((emails.data ?? []).map((row) => [row.user_id, row.email]));

  return (data ?? []).map((row) => {
    const name = row.company_name || [row.first_name, row.last_name].filter(Boolean).join(" ") || "Inserzionista";
    return {
      type: "advertiser" as const,
      id: row.id,
      userId: row.user_id,
      title: name,
      subtitle: [emailByUser.get(row.user_id), row.contact_email, row.advertiser_type].filter(Boolean).join(" · "),
      href: hrefFor("advertiser", name),
    };
  });
}

async function searchRequests(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const filter = buildOrFilter(term, ["city_name", "preferred_area", "country_name", "request_code"], ["id"]);
  if (!filter) return [];

  const { data, error } = await supabase
    .from("travel_requests")
    .select("id, request_code, city_name, country_name, preferred_area, status, check_in, check_out")
    .or(filter)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return (data ?? []).map((row) => ({
    type: "request" as const,
    id: row.id,
    title: row.request_code ? `${row.request_code} · ${row.city_name}` : `${row.city_name}, ${row.country_name}`,
    subtitle: [row.preferred_area, row.status, `${row.check_in} → ${row.check_out}`].filter(Boolean).join(" · "),
    href: `/console/annunci/${row.id}`,
  }));
}

async function searchOffers(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const filter = buildOrFilter(term, ["offer_code"], ["id", "travel_request_id", "hotel_account_id"]);
  if (!filter) return [];

  const { data, error } = await supabase
    .from("offers")
    .select("id, offer_code, status, total_price, hotel_account_id")
    .or(filter)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const hotelIds = [...new Set((data ?? []).map((row) => row.hotel_account_id).filter(Boolean))];
  const hotels = hotelIds.length
    ? await supabase.from("hotel_accounts").select("id, property_name").in("id", hotelIds)
    : { data: [] as { id: string; property_name: string }[] };
  const hotelNames = new Map((hotels.data ?? []).map((row) => [row.id, row.property_name]));

  return (data ?? []).map((row) => ({
    type: "offer" as const,
    id: row.id,
    title: row.offer_code ?? row.id.slice(0, 8),
    subtitle: [hotelNames.get(row.hotel_account_id), row.status, `€${Number(row.total_price).toFixed(0)}`]
      .filter(Boolean)
      .join(" · "),
    href: hrefFor("offer", row.offer_code ?? row.id),
  }));
}

async function searchInvoices(term: string, limit: number): Promise<AdminSearchHit[]> {
  const supabase = db();
  const filter = buildOrFilter(term, ["invoice_number"], ["id", "hotel_account_id"]);
  if (!filter) return [];

  const { data, error } = await supabase
    .from("billing_invoices")
    .select("id, invoice_number, status, amount_due, currency, hotel_account_id")
    .or(filter)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  const hotelIds = [...new Set((data ?? []).map((row) => row.hotel_account_id).filter(Boolean))];
  const hotels = hotelIds.length
    ? await supabase.from("hotel_accounts").select("id, property_name").in("id", hotelIds)
    : { data: [] as { id: string; property_name: string }[] };
  const hotelNames = new Map((hotels.data ?? []).map((row) => [row.id, row.property_name]));

  return (data ?? []).map((row) => ({
    type: "invoice" as const,
    id: row.id,
    title: row.invoice_number ?? row.id.slice(0, 8),
    subtitle: [hotelNames.get(row.hotel_account_id ?? ""), row.status, row.currency?.toUpperCase()]
      .filter(Boolean)
      .join(" · "),
    href: hrefFor("invoice", row.invoice_number ?? row.id),
  }));
}

async function safeSearch(fn: () => Promise<AdminSearchHit[]>) {
  try {
    return await fn();
  } catch {
    return [] as AdminSearchHit[];
  }
}

export async function adminGlobalSearch(term: string, limitPerType = 8) {
  const query = term.trim();
  if (query.length < 2) {
    return { query, results: [] as AdminSearchHit[], total: 0 };
  }

  const [
    users,
    hotels,
    advertisers,
    requests,
    offers,
    invoices,
  ] = await Promise.all([
    safeSearch(() => searchProfiles(query, limitPerType)),
    safeSearch(() => searchHotels(query, limitPerType)),
    safeSearch(() => searchAdvertisers(query, limitPerType)),
    safeSearch(() => searchRequests(query, limitPerType)),
    safeSearch(() => searchOffers(query, limitPerType)),
    safeSearch(() => searchInvoices(query, limitPerType)),
  ]);

  const results = [...users, ...hotels, ...advertisers, ...requests, ...offers, ...invoices];
  return { query, results, total: results.length };
}

export function groupAdminSearchHits(hits: AdminSearchHit[]) {
  const groups = new Map<AdminSearchHitType, AdminSearchHit[]>();
  for (const hit of hits) {
    const list = groups.get(hit.type) ?? [];
    list.push(hit);
    groups.set(hit.type, list);
  }
  return groups;
}
