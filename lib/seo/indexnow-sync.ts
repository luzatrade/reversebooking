import type { SupabaseClient } from "@supabase/supabase-js";
import {
  destinationIndexNowUrls,
  notifyIndexNowAsync,
  structureIndexNowUrls,
} from "@/lib/seo/indexnow";

type StructureNotifyRow = {
  slug: string | null;
  slug_previous?: string | null;
  city_name?: string | null;
};

function collectStructureUrls(row: StructureNotifyRow): string[] {
  if (!row.slug?.trim()) return [];

  const urls = structureIndexNowUrls(row.slug, row.slug_previous);
  if (row.city_name?.trim()) {
    urls.push(...destinationIndexNowUrls(row.city_name));
  }

  return [...new Set(urls)];
}

/** Notifica IndexNow dopo modifiche a un hotel account (slug, status, profilo). */
export async function notifyHotelAccountIndexNow(
  admin: SupabaseClient,
  hotelAccountId: string,
): Promise<void> {
  const { data } = await admin
    .from("hotel_accounts")
    .select("slug, slug_previous, city_name")
    .eq("id", hotelAccountId)
    .maybeSingle();

  if (!data) return;
  notifyIndexNowAsync(collectStructureUrls(data));
}

/** Notifica IndexNow dopo modifiche a una struttura onboarding. */
export async function notifyOnboardingHotelIndexNow(
  admin: SupabaseClient,
  onboardingId: string,
): Promise<void> {
  const { data } = await admin
    .from("onboarding_hotels")
    .select("slug, slug_previous, city_name")
    .eq("id", onboardingId)
    .maybeSingle();

  if (!data) return;
  notifyIndexNowAsync(collectStructureUrls(data));
}
