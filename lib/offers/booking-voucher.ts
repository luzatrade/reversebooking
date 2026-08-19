import type { SupabaseClient } from "@supabase/supabase-js";
import type { AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";
import type { CatalogAcceptanceSnapshot } from "@/types/catalog-offers";
import type { MealPlan, StructureType } from "@/types/app";

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === "string" && UUID_REGEX.test(value);
}

const VOUCHER_SELECT = `
  id, offer_code, status, total_price, description, conditions, meal_plan_included, updated_at, hotel_account_id,
  hotel_accounts ( user_id, property_name, structure_type, city_name, specific_area, cin_code ),
  travel_requests ( request_code, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes )
`;

type VoucherHotel = {
  user_id: string | null;
  property_name: string | null;
  structure_type: StructureType | null;
  city_name: string | null;
  specific_area: string | null;
  cin_code: string | null;
};

type VoucherRequest = {
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  room_details: unknown;
  preference_filters: unknown;
  budget: number | string;
  meal_plan: MealPlan;
  notes: string | null;
};

type VoucherOffer = {
  id: string;
  offer_code: string | null;
  status: string;
  total_price: number | string;
  description: string;
  conditions: string | null;
  meal_plan_included: MealPlan;
  updated_at: string;
  hotel_account_id: string;
  hotel_accounts: VoucherHotel | VoucherHotel[] | null;
  travel_requests: VoucherRequest | VoucherRequest[] | null;
};

function firstRelation<T>(value: T | T[] | null): T | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value;
}

export type VoucherLoadResult =
  | { ok: true; data: AcceptedBookingSummaryData }
  | { ok: false; reason: "not_found" | "not_accepted" };

/**
 * Ricostruisce il riepilogo prenotazione reverse-booking dal database.
 * La visibilità è garantita dalla RLS (`can_access_offer`).
 */
export async function loadBookingVoucherData(
  supabase: SupabaseClient,
  offerId: string,
  userId: string,
): Promise<VoucherLoadResult> {
  const { data, error } = await supabase
    .from("offers")
    .select(VOUCHER_SELECT)
    .eq("id", offerId)
    .maybeSingle();

  if (error || !data) return { ok: false, reason: "not_found" };

  const offer = data as unknown as VoucherOffer;
  const request = firstRelation(offer.travel_requests);
  if (!request) return { ok: false, reason: "not_found" };

  if (offer.status !== "accepted") return { ok: false, reason: "not_accepted" };

  const hotel = firstRelation(offer.hotel_accounts);
  const audience: AcceptedBookingSummaryData["audience"] =
    hotel?.user_id && hotel.user_id === userId ? "hotel" : "advertiser";

  return {
    ok: true,
    data: {
      audience,
      requestCode: request.request_code ?? "RB------",
      offerCode: offer.offer_code ?? "OF------",
      cityName: request.city_name,
      preferredArea: request.preferred_area,
      checkIn: request.check_in,
      checkOut: request.check_out,
      guestsCount: request.guests_count,
      roomsCount: request.rooms_count,
      roomDetails: request.room_details,
      mealPlanRequest: request.meal_plan,
      mealPlanOffer: offer.meal_plan_included,
      budgetPerRoom: Number(request.budget),
      totalPrice: Number(offer.total_price),
      hotelName: hotel?.property_name ?? "Struttura",
      hotelStructureType: hotel?.structure_type ?? null,
      hotelCity: hotel?.city_name ?? null,
      hotelArea: hotel?.specific_area ?? null,
      hotelCin: hotel?.cin_code ?? null,
      description: offer.description,
      conditions: offer.conditions,
      notes: request.notes,
      preferenceFilters: request.preference_filters,
      acceptedAt: offer.updated_at,
    },
  };
}

type CatalogAcceptanceRow = {
  acceptance_code: string;
  accepted_at: string;
  total_price_snapshot: number | string;
  snapshot_json: CatalogAcceptanceSnapshot;
  catalog_offers:
    | {
        offer_code: string;
        hotel_accounts: { user_id: string | null; property_name: string | null } | { user_id: string | null; property_name: string | null }[] | null;
      }
    | {
        offer_code: string;
        hotel_accounts: { user_id: string | null; property_name: string | null } | { user_id: string | null; property_name: string | null }[] | null;
      }[]
    | null;
  advertiser_profiles: { user_id: string | null } | { user_id: string | null }[] | null;
};

function destinationLabel(snapshot: CatalogAcceptanceSnapshot) {
  const names = snapshot.destinations?.map((d) => d.city_name).filter(Boolean);
  return names?.length ? names.join(" · ") : snapshot.provider_name;
}

/**
 * Ricostruisce il PDF catalogo dall'ultima accettazione visibile all'utente (RLS).
 */
export async function loadCatalogBookingVoucherData(
  supabase: SupabaseClient,
  catalogOfferId: string,
  userId: string,
): Promise<VoucherLoadResult> {
  const { data, error } = await supabase
    .from("catalog_offer_acceptances")
    .select(
      "acceptance_code, accepted_at, total_price_snapshot, snapshot_json, advertiser_profiles(user_id), catalog_offers(offer_code, hotel_accounts(user_id, property_name))",
    )
    .eq("catalog_offer_id", catalogOfferId)
    .order("accepted_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return { ok: false, reason: "not_found" };

  const row = data as unknown as CatalogAcceptanceRow;
  const offer = firstRelation(row.catalog_offers);
  const hotel = firstRelation(offer?.hotel_accounts);
  const advertiser = firstRelation(row.advertiser_profiles);
  const snapshot = row.snapshot_json;

  const isProvider = hotel?.user_id === userId;
  const isAdvertiser = advertiser?.user_id === userId;
  if (!isProvider && !isAdvertiser) return { ok: false, reason: "not_found" };

  const destinations = destinationLabel(snapshot);

  return {
    ok: true,
    data: {
      audience: isProvider ? "hotel" : "advertiser",
      requestCode: offer?.offer_code ?? snapshot.offer_code,
      offerCode: row.acceptance_code,
      cityName: destinations,
      preferredArea: destinations,
      checkIn: snapshot.check_in ?? "—",
      checkOut: snapshot.check_out ?? "—",
      guestsCount: 1,
      roomsCount: 1,
      roomDetails: null,
      mealPlanRequest: snapshot.board_basis ?? "room_only",
      mealPlanOffer: snapshot.board_basis ?? "room_only",
      budgetPerRoom: Number(row.total_price_snapshot),
      totalPrice: Number(row.total_price_snapshot),
      hotelName: hotel?.property_name ?? snapshot.provider_name,
      hotelStructureType: null,
      hotelCity: null,
      hotelArea: null,
      hotelCin: null,
      description: snapshot.title_it,
      conditions: snapshot.cancellation_policy_it ?? null,
      notes: null,
      preferenceFilters: null,
      acceptedAt: row.accepted_at,
    },
  };
}
