import { createClient } from "@supabase/supabase-js";
import type { CatalogOfferDetail, CatalogOfferListItem } from "@/types/catalog-offers";
import { computeMinAgencyPrice } from "@/lib/catalog-offers/labels";

const LIST_SELECT = `
  id, offer_code, offer_kind, provider_kind, title_it, title_en, status,
  date_mode, check_in, check_out, valid_from, valid_until,
  flexible_month, flexible_year, flexible_nights,
  cover_public_url, published_at,
  provider:hotel_accounts (
    id, property_name, main_photo_url, provider_kind, city_name
  ),
  destinations:catalog_offer_destinations (
    id, city_id, country_code, city_name, role, sort_order, nights_at_destination
  ),
  hotel_details:hotel_offer_details (
    board_basis, pricing_model, price_amount, currency, is_weekend_offer
  ),
  agency_details:agency_offer_details (
    trip_type, duration_days, duration_nights, base_price_per_person, target_type
  )
`;

function getAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase env");
  return createClient(url, key, { auth: { persistSession: false } });
}

function normalizeListRow(row: Record<string, unknown>): CatalogOfferListItem {
  const providerRaw = row.provider;
  const provider = Array.isArray(providerRaw) ? providerRaw[0] : providerRaw;
  const hotelRaw = row.hotel_details;
  const hotel = Array.isArray(hotelRaw) ? hotelRaw[0] : hotelRaw;
  const agencyRaw = row.agency_details;
  const agency = Array.isArray(agencyRaw) ? agencyRaw[0] : agencyRaw;
  const destinations = (Array.isArray(row.destinations) ? row.destinations : []) as CatalogOfferListItem["destinations"];

  const item: CatalogOfferListItem = {
    id: String(row.id),
    offer_code: String(row.offer_code),
    offer_kind: row.offer_kind as CatalogOfferListItem["offer_kind"],
    provider_kind: row.provider_kind as CatalogOfferListItem["provider_kind"],
    title_it: String(row.title_it),
    title_en: String(row.title_en),
    status: row.status as CatalogOfferListItem["status"],
    date_mode: row.date_mode as CatalogOfferListItem["date_mode"],
    check_in: (row.check_in as string | null) ?? null,
    check_out: (row.check_out as string | null) ?? null,
    valid_from: (row.valid_from as string | null) ?? null,
    valid_until: (row.valid_until as string | null) ?? null,
    flexible_month: (row.flexible_month as number | null) ?? null,
    flexible_year: (row.flexible_year as number | null) ?? null,
    flexible_nights: (row.flexible_nights as number | null) ?? null,
    cover_public_url: (row.cover_public_url as string | null) ?? null,
    published_at: (row.published_at as string | null) ?? null,
    provider: provider as CatalogOfferListItem["provider"],
    destinations,
    hotel_details: (hotel as CatalogOfferListItem["hotel_details"]) ?? null,
    agency_details: (agency as CatalogOfferListItem["agency_details"]) ?? null,
  };

  if (item.offer_kind === "agency_package") {
    item.min_price = agency ? Number((agency as { base_price_per_person: number }).base_price_per_person) : null;
  }
  return item;
}

export async function fetchCatalogOffersForCity(cityId: string, offerKind?: "hotel_vacancy" | "agency_package") {
  const admin = getAdmin();

  const { data: destRows, error: destError } = await admin
    .from("catalog_offer_destinations")
    .select("catalog_offer_id")
    .eq("city_id", cityId);
  if (destError) throw destError;

  const ids = [...new Set((destRows ?? []).map((r) => r.catalog_offer_id))];
  if (!ids.length) return [];

  let query = admin
    .from("catalog_offers")
    .select(LIST_SELECT)
    .in("id", ids)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(40);

  if (offerKind) query = query.eq("offer_kind", offerKind);

  const { data, error } = await query;
  if (error) throw error;

  return (data ?? []).map((row) => normalizeListRow(row as Record<string, unknown>));
}

function shuffleRows<T>(rows: T[]): T[] {
  const copy = [...rows];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

export async function fetchRandomCatalogOffers(
  offerKind?: "hotel_vacancy" | "agency_package",
  limit = 12,
) {
  const admin = getAdmin();
  let query = admin
    .from("catalog_offers")
    .select(LIST_SELECT)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(Math.max(limit * 6, 48));

  if (offerKind) query = query.eq("offer_kind", offerKind);

  const { data, error } = await query;
  if (error) throw error;

  return shuffleRows(data ?? [])
    .slice(0, limit)
    .map((row) => normalizeListRow(row as Record<string, unknown>));
}

export async function fetchCatalogOfferByCode(code: string): Promise<CatalogOfferDetail | null> {
  const admin = getAdmin();
  const { data, error } = await admin
    .from("catalog_offers")
    .select(
      `
      ${LIST_SELECT},
      gallery_paths,
      hotel_details_full:hotel_offer_details (
        accommodation_type, board_basis, pricing_model, price_amount, currency,
        min_stay_nights, max_occupancy_per_room, cancellation_policy_it, cancellation_policy_en,
        city_tax, perks, is_weekend_offer
      ),
      agency_details_full:agency_offer_details (
        trip_type, duration_days, duration_nights, target_type, min_participants, date_type,
        primary_hotel_name, hotel_category, transport_modes, base_price_per_person, single_supplement,
        pricing_notes_it, pricing_notes_en, payment_terms_it, payment_terms_en,
        cancellation_terms_it, cancellation_terms_en
      ),
      itinerary:agency_offer_itinerary_days (
        id, day_number, title_it, title_en, description_it, description_en, meal_plan, destination_city_id, sort_order
      ),
      price_tiers:agency_offer_price_tiers (
        id, tier_kind, min_pax, max_pax, price_per_person, label_it, label_en, sort_order
      ),
      inclusions:agency_offer_inclusions (
        id, kind, label_it, label_en, sort_order
      ),
      hotel_rooms:hotel_offer_rooms (
        id, room_type, rooms_available, max_occupancy, price_override, sort_order
      )
    `,
    )
    .eq("offer_code", code)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  const base = normalizeListRow(data as Record<string, unknown>);
  const hotelFullRaw = (data as Record<string, unknown>).hotel_details_full;
  const agencyFullRaw = (data as Record<string, unknown>).agency_details_full;
  const hotelFull = Array.isArray(hotelFullRaw) ? hotelFullRaw[0] : hotelFullRaw;
  const agencyFull = Array.isArray(agencyFullRaw) ? agencyFullRaw[0] : agencyFullRaw;
  const roomsRaw = (data as Record<string, unknown>).hotel_rooms;
  const itineraryRaw = (data as Record<string, unknown>).itinerary;
  const tiersRaw = (data as Record<string, unknown>).price_tiers;
  const inclusionsRaw = (data as Record<string, unknown>).inclusions;

  const detail: CatalogOfferDetail = {
    ...base,
    gallery_paths: Array.isArray((data as Record<string, unknown>).gallery_paths)
      ? ((data as Record<string, unknown>).gallery_paths as string[])
      : [],
    hotel_details_full: hotelFull
      ? {
          ...(hotelFull as NonNullable<CatalogOfferDetail["hotel_details_full"]>),
          rooms: (Array.isArray(roomsRaw) ? roomsRaw : []) as NonNullable<CatalogOfferDetail["hotel_details_full"]>["rooms"],
        }
      : null,
    agency_details_full: agencyFull
      ? {
          ...(agencyFull as NonNullable<CatalogOfferDetail["agency_details_full"]>),
          itinerary: (Array.isArray(itineraryRaw) ? itineraryRaw : []) as NonNullable<CatalogOfferDetail["agency_details_full"]>["itinerary"],
          price_tiers: (Array.isArray(tiersRaw) ? tiersRaw : []) as NonNullable<CatalogOfferDetail["agency_details_full"]>["price_tiers"],
          inclusions: (Array.isArray(inclusionsRaw) ? inclusionsRaw : []) as NonNullable<CatalogOfferDetail["agency_details_full"]>["inclusions"],
        }
      : null,
  };

  detail.min_price = computeMinAgencyPrice(detail);
  return detail;
}

export async function buildAcceptanceSnapshot(offerId: string): Promise<Record<string, unknown> | null> {
  const admin = getAdmin();
  const { data } = await admin.from("catalog_offers").select("offer_code").eq("id", offerId).maybeSingle();
  if (!data) return null;
  const detail = await fetchCatalogOfferByCode(String(data.offer_code));
  if (!detail) return null;
  return {
    offer_code: detail.offer_code,
    offer_kind: detail.offer_kind,
    title_it: detail.title_it,
    title_en: detail.title_en,
    provider_name: detail.provider.property_name,
    destinations: detail.destinations,
    check_in: detail.check_in,
    check_out: detail.check_out,
    date_mode: detail.date_mode,
    flexible_month: detail.flexible_month,
    flexible_year: detail.flexible_year,
    flexible_nights: detail.flexible_nights,
    hotel_details: detail.hotel_details_full,
    agency_details: detail.agency_details_full,
  };
}
