import { createServiceRoleClient } from "@/lib/supabase/admin";
import { type HotelShowcaseScope, requestMatchesHotelScope } from "@/lib/showcase/hotelScope";

export type ShowcaseTravelRequest = {
  id: string;
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  preferred_area: string;
  preferred_structure_type: string | null;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: string;
  preference_filters: Record<string, boolean> | null;
  notes: string | null;
  expires_at: string;
  created_at: string;
  status: string;
  advertiser_profiles: {
    first_name: string | null;
    last_name: string | null;
    advertiser_type: string | null;
  } | null;
};

const REQUEST_SELECT =
  "id, country_code, city_name, city_id, preferred_area, preferred_structure_type, check_in, check_out, guests_count, rooms_count, budget, meal_plan, preference_filters, notes, expires_at, created_at, status, advertiser_profiles(first_name, last_name, advertiser_type)";

function normalizeRows(data: unknown[]) {
  return data.map((row) => {
    const record = row as Record<string, unknown>;
    const profiles = record.advertiser_profiles;
    return {
      ...record,
      advertiser_profiles: Array.isArray(profiles) ? profiles[0] ?? null : profiles ?? null,
    };
  }) as ShowcaseTravelRequest[];
}

export async function fetchShowcaseTravelRequests(limit = 200, hotelScope?: HotelShowcaseScope | null) {
  const admin = createServiceRoleClient();
  if (!admin) throw new Error("Service role non configurato");

  const now = new Date().toISOString();
  let query = admin
    .from("travel_requests")
    .select(REQUEST_SELECT)
    .eq("status", "active")
    .gt("expires_at", now)
    .order("created_at", { ascending: false });

  if (hotelScope) {
    query = query.eq("city_id", hotelScope.cityId);
    if (hotelScope.countryCode) query = query.eq("country_code", hotelScope.countryCode);
  }

  const { data, error } = await query.limit(hotelScope ? 500 : limit);
  if (error) throw error;

  const rows = normalizeRows(data ?? []);
  if (!hotelScope) return rows.slice(0, limit);
  return rows.filter((row) => requestMatchesHotelScope(row, hotelScope));
}

export async function fetchShowcaseConcludedRequests(
  requestIds: string[],
  hotelScope?: HotelShowcaseScope | null,
) {
  if (!requestIds.length) return [] as ShowcaseTravelRequest[];

  const admin = createServiceRoleClient();
  if (!admin) throw new Error("Service role non configurato");

  const { data, error } = await admin.from("travel_requests").select(REQUEST_SELECT).in("id", requestIds);
  if (error) throw error;

  const rows = normalizeRows(data ?? []);
  if (!hotelScope) return rows;
  return rows.filter((row) => requestMatchesHotelScope(row, hotelScope));
}
