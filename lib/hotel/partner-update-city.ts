import type { SupabaseClient } from "@supabase/supabase-js";
import { buildStructureSlugBase, resolveUniqueSlug } from "@/lib/seo/slug";

type UpdatePartnerCityInput = {
  hotelId: string;
  userId: string;
  countryCode: string;
  countryName: string;
  cityName: string;
  cityId: string;
};

async function loadUsedSlugs(admin: SupabaseClient, excludeHotelId: string, excludeOnboardingId: string | null) {
  const used = new Set<string>();
  for (const table of ["onboarding_hotels", "hotel_accounts"] as const) {
    let from = 0;
    while (true) {
      const { data, error } = await admin.from(table).select("id, slug").not("slug", "is", null).range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (table === "hotel_accounts" && row.id === excludeHotelId) continue;
        if (table === "onboarding_hotels" && row.id === excludeOnboardingId) continue;
        if (row.slug) used.add(row.slug);
      }
      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }
  return used;
}

export async function updatePartnerHotelCity(admin: SupabaseClient, input: UpdatePartnerCityInput) {
  const cityId = input.cityId.trim();
  const cityName = input.cityName.trim();
  const countryCode = input.countryCode.trim().toUpperCase();
  const countryName = input.countryName.trim();

  if (!cityId || cityId === "IT-PENDING") {
    throw new Error("Seleziona una città valida");
  }
  if (!cityName) throw new Error("Nome città non valido");
  if (!countryCode) throw new Error("Codice nazione non valido");

  const { data: hotel, error: hotelError } = await admin
    .from("hotel_accounts")
    .select("*")
    .eq("id", input.hotelId)
    .maybeSingle();
  if (hotelError) throw hotelError;
  if (!hotel) throw new Error("Struttura non trovata");
  if (hotel.user_id !== input.userId) throw new Error("Non autorizzato");

  const used = await loadUsedSlugs(admin, hotel.id, hotel.onboarding_hotel_id);
  const slugBase = buildStructureSlugBase(hotel.property_name, cityName);
  const newSlug = resolveUniqueSlug(slugBase, used, hotel.slug);
  const oldSlug = hotel.slug;
  const hotelSlugPrevious =
    oldSlug && oldSlug !== newSlug
      ? [...new Set([...(Array.isArray(hotel.slug_previous) ? hotel.slug_previous : []), oldSlug])]
      : Array.isArray(hotel.slug_previous)
        ? hotel.slug_previous
        : [];

  const nextHotel = {
    ...hotel,
    country_code: countryCode,
    country_name: countryName,
    city_name: cityName,
    city_id: cityId,
    slug: newSlug,
    slug_previous: hotelSlugPrevious,
    updated_at: new Date().toISOString(),
  };

  const { error: deleteError } = await admin.from("hotel_accounts").delete().eq("id", hotel.id);
  if (deleteError) throw deleteError;

  const { error: insertError } = await admin.from("hotel_accounts").insert(nextHotel);
  if (insertError) throw insertError;

  if (hotel.onboarding_hotel_id) {
    const { data: onboarding } = await admin
      .from("onboarding_hotels")
      .select("slug, slug_previous")
      .eq("id", hotel.onboarding_hotel_id)
      .maybeSingle();

    const onboardingPrev = Array.isArray(onboarding?.slug_previous) ? onboarding.slug_previous : [];
    const onboardingSlugPrevious =
      onboarding?.slug && onboarding.slug !== newSlug
        ? [...new Set([...onboardingPrev, onboarding.slug])]
        : onboardingPrev;

    const { error: onboardingError } = await admin
      .from("onboarding_hotels")
      .update({
        city_name: cityName,
        slug: newSlug,
        slug_previous: onboardingSlugPrevious,
      })
      .eq("id", hotel.onboarding_hotel_id);
    if (onboardingError) throw onboardingError;
  }

  return { slug: newSlug, slugPrevious: oldSlug ?? null };
}
