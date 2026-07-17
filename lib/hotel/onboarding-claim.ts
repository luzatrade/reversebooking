import type { SupabaseClient } from "@supabase/supabase-js";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { normalizePhoneE164 } from "@/lib/phone/normalize";

type AppSupabase = SupabaseClient;

export type OnboardingHotelRow = {
  id: string;
  nome: string;
  city_name: string;
  indirizzo: string | null;
  email: string | null;
  phone: string | null;
  main_photo_url: string | null;
  gallery_photo_urls?: string[] | null;
  website: string | null;
  google_maps_url: string | null;
  status: string;
  claimed_by: string | null;
  slug?: string | null;
  seo_indexable?: boolean | null;
};

const ONBOARDING_SELECT =
  "id, nome, city_name, indirizzo, email, phone, main_photo_url, gallery_photo_urls, website, google_maps_url, status, claimed_by, slug, seo_indexable";

const PLACEHOLDER_PROPERTY_NAMES = new Set([
  "",
  "Nuova struttura",
  "Struttura da completare",
  "Struttura test",
]);

export function needsOnboardingHotelPrefill(
  hotel: { onboarding_hotel_id?: string | null; property_name?: string | null } | null | undefined,
  onboardingHotelId: string | null,
): boolean {
  if (!onboardingHotelId) return false;
  if (!hotel) return true;
  if (hotel.onboarding_hotel_id === onboardingHotelId) return false;
  if (!hotel.onboarding_hotel_id) return true;
  return PLACEHOLDER_PROPERTY_NAMES.has(hotel.property_name?.trim() ?? "");
}

export async function loadOnboardingHotel(
  admin: AppSupabase,
  onboardingId: string | null | undefined,
): Promise<OnboardingHotelRow | null> {
  const id = typeof onboardingId === "string" ? onboardingId.trim() : "";
  if (!id) return null;

  const { data } = await admin
    .from("onboarding_hotels")
    .select(ONBOARDING_SELECT)
    .eq("id", id)
    .maybeSingle();
  return data as OnboardingHotelRow | null;
}

export function assertOnboardingClaimable(row: OnboardingHotelRow | null, userId: string) {
  if (!row) return "Struttura non trovata nel catalogo.";
  if (row.status === "claimed") return "Questa struttura è già stata rivendicata.";
  if (row.status === "pending_verification" && row.claimed_by && row.claimed_by !== userId) {
    return "Un altro account sta già verificando questa struttura.";
  }
  if (!normalizePhoneE164(row.phone)) {
    return "Questa struttura non ha un telefono verificabile. Contatta assistenza.";
  }
  return null;
}

export function buildHotelFromOnboarding(
  userId: string,
  email: string,
  onboarding: OnboardingHotelRow,
  structureType: string,
) {
  const cityId =
    resolveCanonicalCityId({ cityName: onboarding.city_name, countryCode: "IT" }) ??
    `${String(onboarding.city_name).toLowerCase().replace(/ +/g, "-")}-it`;

  return {
    user_id: userId,
    onboarding_hotel_id: onboarding.id,
    structure_type: structureType,
    property_name: onboarding.nome,
    cin_code: `ONB-${userId.slice(0, 8)}`,
    description: null as string | null,
    full_address: onboarding.indirizzo || onboarding.city_name,
    country_code: "IT",
    country_name: "Italia",
    city_name: onboarding.city_name,
    city_id: cityId,
    specific_area: onboarding.indirizzo,
    rooms_quantity: 1,
    private_notification_email: email,
    public_email: onboarding.email,
    public_phone: onboarding.phone,
    main_photo_url: onboarding.main_photo_url,
    gallery_photo_urls: onboarding.gallery_photo_urls ?? [],
    google_maps_url: onboarding.google_maps_url,
    slug: onboarding.slug ?? null,
    seo_indexable: onboarding.seo_indexable ?? false,
    subscription_status: "active",
    subscription_active: true,
    account_status: "pending_verification",
  };
}

export async function reserveOnboardingClaim(
  admin: AppSupabase,
  onboardingId: string,
  userId: string,
) {
  const { error } = await admin
    .from("onboarding_hotels")
    .update({ status: "pending_verification", claimed_by: userId })
    .eq("id", onboardingId)
    .in("status", ["unclaimed", "pending_verification"]);

  if (error) throw error;
}

export async function completeOnboardingClaim(
  admin: AppSupabase,
  onboardingId: string,
  userId: string,
) {
  await admin
    .from("onboarding_hotels")
    .update({ status: "claimed", claimed_by: userId })
    .eq("id", onboardingId);

  await admin
    .from("hotel_accounts")
    .update({ account_status: "active" })
    .eq("user_id", userId)
    .eq("onboarding_hotel_id", onboardingId);
}
