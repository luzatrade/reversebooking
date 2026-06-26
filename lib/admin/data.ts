import { createServiceRoleClient } from "@/lib/supabase/admin";
import { buildOrFilter } from "@/lib/admin/query";

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
    activeSubs,
    invoices,
  ] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "hotel"),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "advertiser"),
    supabase.from("travel_requests").select("id", { count: "exact", head: true }),
    supabase.from("offers").select("id", { count: "exact", head: true }),
    supabase.from("hotel_accounts").select("id", { count: "exact", head: true }).eq("subscription_active", true),
    supabase.from("billing_invoices").select("id", { count: "exact", head: true }),
  ]);

  return {
    users: users.count ?? 0,
    hotels: hotels.count ?? 0,
    advertisers: advertisers.count ?? 0,
    requests: requests.count ?? 0,
    offers: offers.count ?? 0,
    activeSubscriptions: activeSubs.count ?? 0,
    invoices: invoices.count ?? 0,
  };
}

export async function listProfiles(query?: string) {
  const supabase = db();
  let request = supabase
    .from("profiles")
    .select("id, user_id, role, email, phone_number, account_status, created_at")
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

export async function listHotels(query?: string) {
  const supabase = db();
  let request = supabase
    .from("hotel_accounts")
    .select(
      "id, user_id, property_name, structure_type, city_name, country_name, cin_code, subscription_active, subscription_status, account_status, stripe_customer_id, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(200);
  request = applySearch(
    request,
    query,
    ["property_name", "city_name", "cin_code", "public_email", "specific_area", "full_address"],
    ["id", "user_id"],
  );
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
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

export async function listOnboardingHotels(query?: string) {
  const supabase = db();
  let request = supabase
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, email, phone, main_photo_url, status, created_at")
    .order("created_at", { ascending: false })
    .limit(1000);
  request = applySearch(request, query, ["nome", "city_name", "email", "phone", "indirizzo"], ["id"]);
  const { data, error } = await request;
  if (error) throw error;
  return data ?? [];
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
