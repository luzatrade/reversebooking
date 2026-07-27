import type { SupabaseClient } from "@supabase/supabase-js";
import {
  catalogOfferExpiresAtIso,
  checkoutExpiresAtIso,
  isCheckoutExpired,
} from "@/lib/lifecycle/checkout-expiry";

export type PurgeExpiredResult = {
  travelRequests: number;
  offers: number;
  catalogOffers: number;
};

const ACCEPTED_OFFER = "accepted";
const COMPLETED_REQUEST = "completed";
const CATALOG_KEEP_ACCEPTANCE = new Set(["pending", "confirmed", "completed"]);

type TravelRequestRow = {
  id: string;
  country_code: string;
  city_id: string;
  check_out: string;
  status: string;
};

type OfferRow = {
  id: string;
  status: string;
  travel_request_id: string;
  travel_requests:
    | { country_code: string; city_id: string; check_out: string; status: string }
    | { country_code: string; city_id: string; check_out: string; status: string }[]
    | null;
};

function linkedTravelRequest(row: OfferRow) {
  const request = row.travel_requests;
  if (!request) return null;
  return Array.isArray(request) ? (request[0] ?? null) : request;
}

type CatalogOfferRow = {
  id: string;
  status: string;
  date_mode: "fixed" | "date_range" | "month_flexible";
  check_out: string | null;
  valid_until: string | null;
  flexible_month: number | null;
  flexible_year: number | null;
  catalog_offer_destinations: Array<{ country_code: string; city_id: string; sort_order: number; role: string }>;
};

function primaryDestination<T extends { sort_order: number; role: string }>(destinations: T[]): T | null {
  if (!destinations.length) return null;
  return (
    destinations.find((destination) => destination.role === "primary") ??
    [...destinations].sort((a, b) => a.sort_order - b.sort_order)[0] ??
    null
  );
}

async function purgeTravelRequests(admin: SupabaseClient): Promise<number> {
  let deleted = 0;
  let from = 0;

  while (true) {
    const { data, error } = await admin
      .from("travel_requests")
      .select("id, country_code, city_id, check_out, status")
      .neq("status", COMPLETED_REQUEST)
      .range(from, from + 499);

    if (error) throw error;
    const rows = (data ?? []) as TravelRequestRow[];
    if (!rows.length) break;

    for (const row of rows) {
      if (!isCheckoutExpired(row.check_out, row.country_code, row.city_id)) continue;

      const { data: acceptedOffer } = await admin
        .from("offers")
        .select("id")
        .eq("travel_request_id", row.id)
        .eq("status", ACCEPTED_OFFER)
        .maybeSingle();

      if (acceptedOffer) continue;

      const { error: deleteError } = await admin.from("travel_requests").delete().eq("id", row.id);
      if (deleteError) throw deleteError;
      deleted += 1;
    }

    if (rows.length < 500) break;
    from += 500;
  }

  return deleted;
}

async function purgeOffers(admin: SupabaseClient): Promise<number> {
  let deleted = 0;
  let from = 0;

  while (true) {
    const { data, error } = await admin
      .from("offers")
      .select("id, status, travel_request_id, travel_requests(country_code, city_id, check_out, status)")
      .neq("status", ACCEPTED_OFFER)
      .range(from, from + 499);

    if (error) throw error;
    const rows = (data ?? []) as unknown as OfferRow[];
    if (!rows.length) break;

    for (const row of rows) {
      const request = linkedTravelRequest(row);
      if (!request) {
        const { error: deleteError } = await admin.from("offers").delete().eq("id", row.id);
        if (deleteError) throw deleteError;
        deleted += 1;
        continue;
      }

      if (request.status === COMPLETED_REQUEST) continue;
      if (!isCheckoutExpired(request.check_out, request.country_code, request.city_id)) continue;

      const { error: deleteError } = await admin.from("offers").delete().eq("id", row.id);
      if (deleteError) throw deleteError;
      deleted += 1;
    }

    if (rows.length < 500) break;
    from += 500;
  }

  return deleted;
}

async function purgeCatalogOffers(admin: SupabaseClient): Promise<number> {
  let deleted = 0;
  let from = 0;

  while (true) {
    const { data, error } = await admin
      .from("catalog_offers")
      .select(
        "id, status, date_mode, check_out, valid_until, flexible_month, flexible_year, catalog_offer_destinations(country_code, city_id, sort_order, role)",
      )
      .in("status", ["published", "draft", "expired"])
      .range(from, from + 199);

    if (error) throw error;
    const rows = (data ?? []) as CatalogOfferRow[];
    if (!rows.length) break;

    for (const row of rows) {
      const destination = primaryDestination(row.catalog_offer_destinations ?? []);
      if (!destination) continue;

      const expiresAt = catalogOfferExpiresAtIso({
        dateMode: row.date_mode,
        checkOut: row.check_out,
        validUntil: row.valid_until,
        flexibleMonth: row.flexible_month,
        flexibleYear: row.flexible_year,
        countryCode: destination.country_code,
        cityId: destination.city_id,
      });

      if (!expiresAt || new Date(expiresAt).getTime() > Date.now()) continue;

      const { data: acceptance } = await admin
        .from("catalog_offer_acceptances")
        .select("id")
        .eq("catalog_offer_id", row.id)
        .in("status", [...CATALOG_KEEP_ACCEPTANCE])
        .limit(1)
        .maybeSingle();

      if (acceptance) continue;

      const { error: deleteError } = await admin.from("catalog_offers").delete().eq("id", row.id);
      if (deleteError) throw deleteError;
      deleted += 1;
    }

    if (rows.length < 200) break;
    from += 200;
  }

  return deleted;
}

/** Elimina richieste, offerte e catalogo scaduti. Conserva storico accettato/completato. */
export async function purgeExpiredMarketplaceContent(admin: SupabaseClient): Promise<PurgeExpiredResult> {
  const offers = await purgeOffers(admin);
  const travelRequests = await purgeTravelRequests(admin);
  const catalogOffers = await purgeCatalogOffers(admin);
  return { travelRequests, offers, catalogOffers };
}

export { checkoutExpiresAtIso, catalogOfferExpiresAtIso };
