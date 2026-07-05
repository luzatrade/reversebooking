import type { SupabaseClient } from "@supabase/supabase-js";

const AGENCY_SELECT =
  "id, property_name, cun_code, description, full_address, country_code, country_name, city_name, city_id, specific_area, main_photo_url, gallery_photo_urls, google_maps_url, public_email, public_phone, subscription_active, account_status";

export type AgencyHotelRow = {
  id: string;
  property_name: string | null;
  cun_code: string | null;
  description: string | null;
  full_address: string | null;
  country_code: string;
  country_name: string;
  city_name: string;
  city_id: string;
  specific_area: string | null;
  main_photo_url: string | null;
  gallery_photo_urls: string[] | null;
  google_maps_url: string | null;
  public_email: string | null;
  public_phone: string | null;
  subscription_active: boolean | null;
  account_status: string | null;
};

export async function loadAgencyHotelAccount(
  supabase: SupabaseClient,
  userId: string,
): Promise<{ data: AgencyHotelRow | null; error: string | null }> {
  const { data, error } = await supabase
    .from("hotel_accounts")
    .select(AGENCY_SELECT)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) return { data: null, error: error.message };
  return { data: (data as AgencyHotelRow | null) ?? null, error: null };
}

export async function ensureAgencyProfile(
  supabase: SupabaseClient,
  userId: string,
): Promise<{ data: AgencyHotelRow | null; error: string | null }> {
  const initial = await loadAgencyHotelAccount(supabase, userId);
  if (initial.error) return initial;
  if (initial.data?.id) return initial;

  const session = await supabase.auth.getSession();
  const token = session.data.session?.access_token;
  if (!token) {
    return { data: null, error: "Sessione scaduta. Accedi di nuovo." };
  }

  const response = await fetch("/api/auth/complete-profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role: "agency" }),
  });

  const body = (await response.json().catch(() => ({}))) as { error?: string };
  if (!response.ok) {
    return { data: null, error: body.error ?? "Impossibile creare il profilo agenzia." };
  }

  return loadAgencyHotelAccount(supabase, userId);
}
