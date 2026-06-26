import { createServiceRoleClient } from "@/lib/supabase/admin";

export type ShowcaseTravelRequest = {
  id: string;
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  preferred_area: string;
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
  "id, country_code, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, preference_filters, notes, expires_at, created_at, status, advertiser_profiles(first_name, last_name, advertiser_type)";

export async function fetchShowcaseTravelRequests(limit = 200) {
  const admin = createServiceRoleClient();
  if (!admin) throw new Error("Service role non configurato");

  const now = new Date().toISOString();
  const { data, error } = await admin
    .from("travel_requests")
    .select(REQUEST_SELECT)
    .eq("status", "active")
    .gt("expires_at", now)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return (data ?? []).map((row) => ({
    ...row,
    advertiser_profiles: Array.isArray(row.advertiser_profiles)
      ? row.advertiser_profiles[0] ?? null
      : row.advertiser_profiles ?? null,
  })) as ShowcaseTravelRequest[];
}

export async function fetchShowcaseConcludedRequests(requestIds: string[]) {
  if (!requestIds.length) return [] as ShowcaseTravelRequest[];

  const admin = createServiceRoleClient();
  if (!admin) throw new Error("Service role non configurato");

  const { data, error } = await admin.from("travel_requests").select(REQUEST_SELECT).in("id", requestIds);
  if (error) throw error;

  return (data ?? []).map((row) => ({
    ...row,
    advertiser_profiles: Array.isArray(row.advertiser_profiles)
      ? row.advertiser_profiles[0] ?? null
      : row.advertiser_profiles ?? null,
  })) as ShowcaseTravelRequest[];
}
