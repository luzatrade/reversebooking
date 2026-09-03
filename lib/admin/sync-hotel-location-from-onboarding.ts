import type { SupabaseClient } from "@supabase/supabase-js";

function cityIdFromName(cityName: string) {
  const slug = cityName
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `IT-${slug}`;
}

/** Fallback server-side quando la RPC admin_sync_hotel_location_from_onboarding non è ancora su Supabase. */
export async function syncHotelLocationFromOnboarding(admin: SupabaseClient, onboardingId: string) {
  const { data: onboarding, error: onboardingError } = await admin
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, lat, lng, slug, slug_previous")
    .eq("id", onboardingId)
    .maybeSingle();
  if (onboardingError) throw onboardingError;
  if (!onboarding) throw new Error("Onboarding hotel not found");

  const cityName = onboarding.city_name?.trim() ?? "";
  const cityId = cityIdFromName(cityName);

  const { data: hotel, error: hotelReadError } = await admin
    .from("hotel_accounts")
    .select("*")
    .eq("onboarding_hotel_id", onboardingId)
    .maybeSingle();
  if (hotelReadError) throw hotelReadError;
  if (!hotel) return;

  const nextHotel = {
    ...hotel,
    city_name: cityName,
    city_id: cityId,
    country_code: "IT",
    country_name: "Italia",
    full_address: onboarding.indirizzo ?? hotel.full_address,
    latitude: onboarding.lat ?? hotel.latitude,
    longitude: onboarding.lng ?? hotel.longitude,
    slug: onboarding.slug ?? hotel.slug,
    slug_previous: onboarding.slug_previous ?? hotel.slug_previous,
    updated_at: new Date().toISOString(),
  };

  const { error: deleteError } = await admin.from("hotel_accounts").delete().eq("id", hotel.id);
  if (deleteError) throw deleteError;

  const { error: insertError } = await admin.from("hotel_accounts").insert(nextHotel);
  if (insertError) throw insertError;
}
