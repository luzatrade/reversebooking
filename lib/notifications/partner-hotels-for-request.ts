import type { SupabaseClient } from "@supabase/supabase-js";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { hotelMatchesTravelRequest } from "@/lib/matching/request-hotel-services";
import { onboardingCitySearchNames, supabaseCityNameOrFilter } from "@/lib/onboarding/city-match";

export type PartnerHotelNotifyRow = {
  id: string;
  property_name: string;
  private_notification_email: string | null;
  public_email: string | null;
};

type TravelRequestMatchInput = {
  city_id: string;
  city_name: string;
  country_code?: string | null;
  preference_filters?: Record<string, boolean> | null;
  preferred_structure_type?: string | null;
};

/** Partner attivi e abbonati nella zona della richiesta, con servizi compatibili. */
export async function fetchActivePartnerHotelsForRequest(
  admin: SupabaseClient,
  travelRequest: TravelRequestMatchInput,
): Promise<PartnerHotelNotifyRow[]> {
  const canonicalId = resolveCanonicalCityId({
    cityName: travelRequest.city_name,
    cityId: travelRequest.city_id,
    countryCode: travelRequest.country_code ?? undefined,
  });

  const cityNames = onboardingCitySearchNames({
    cityId: travelRequest.city_id,
    cityName: travelRequest.city_name,
    countryCode: travelRequest.country_code,
  });

  const cityIdCandidates = [...new Set([travelRequest.city_id, canonicalId].filter(Boolean))];
  const orParts = [
    ...cityIdCandidates.map((id) => `city_id.eq.${id}`),
    supabaseCityNameOrFilter(cityNames),
  ].filter((part) => part && !part.includes("is.null"));

  if (!orParts.length) return [];

  const { data, error } = await admin
    .from("hotel_accounts")
    .select("id, property_name, private_notification_email, public_email, city_id, city_name, services, structure_type")
    .eq("account_status", "active")
    .eq("subscription_active", true)
    .or(orParts.join(","));

  if (error) throw error;

  const seen = new Set<string>();
  return (data ?? []).filter((row) => {
    if (seen.has(row.id)) return false;
    seen.add(row.id);
    if (!hotelMatchesTravelRequest(row, travelRequest)) return false;
    return true;
  }) as PartnerHotelNotifyRow[];
}

export async function fetchActivePartnerHotelById(
  admin: SupabaseClient,
  hotelAccountId: string,
): Promise<PartnerHotelNotifyRow | null> {
  const { data, error } = await admin
    .from("hotel_accounts")
    .select("id, property_name, private_notification_email, public_email")
    .eq("id", hotelAccountId)
    .eq("account_status", "active")
    .eq("subscription_active", true)
    .maybeSingle();

  if (error) throw error;
  return (data as PartnerHotelNotifyRow | null) ?? null;
}
