import { onboardingCitySearchNames, supabaseOnboardingLocationOrFilter } from "@/lib/onboarding/city-match";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import type { FetchShowcaseStructuresOptions } from "@/lib/showcase/homeData";

async function countOnboardingStructures(
  admin: NonNullable<ReturnType<typeof createServiceRoleClient>>,
  options: FetchShowcaseStructuresOptions = {},
) {
  const cityName = options.cityName?.trim() ?? "";
  const hasCity = Boolean(cityName);

  let query = admin
    .from("onboarding_hotels")
    .select("id", { count: "exact", head: true })
    .eq("seo_indexable", true);

  if (hasCity) {
    const names = onboardingCitySearchNames({
      cityId: options.cityId,
      cityName,
      countryCode: options.countryCode,
    });
    query = query.or(supabaseOnboardingLocationOrFilter(names));
  }

  const { count, error } = await query;
  if (error) {
    console.error("[showcase] onboarding catalog count failed:", error.message);
    return 0;
  }
  return count ?? 0;
}

async function countRegisteredStructures(
  admin: NonNullable<ReturnType<typeof createServiceRoleClient>>,
  options: FetchShowcaseStructuresOptions = {},
) {
  const cityName = options.cityName?.trim() ?? "";
  const hasCity = Boolean(cityName);

  let query = admin
    .from("hotel_accounts")
    .select("id", { count: "exact", head: true })
    .eq("seo_indexable", true)
    .neq("provider_kind", "agency");

  if (hasCity && options.cityId) {
    query = query.eq("city_id", options.cityId);
  }

  const { count, error } = await query;
  if (error) {
    console.error("[showcase] hotel_accounts catalog count failed:", error.message);
    return 0;
  }
  return count ?? 0;
}

export async function fetchCatalogStructureCount(
  options: FetchShowcaseStructuresOptions = {},
): Promise<number> {
  const admin = createServiceRoleClient();
  if (!admin) return 0;

  const [onboarding, registered] = await Promise.all([
    countOnboardingStructures(admin, options),
    countRegisteredStructures(admin, options),
  ]);

  return onboarding + registered;
}

export async function fetchActiveTravelRequestCount(
  options: { countryCode?: string | null; cityId?: string | null } = {},
): Promise<number> {
  const admin = createServiceRoleClient();
  if (!admin) return 0;

  const now = new Date().toISOString();
  let query = admin
    .from("travel_requests")
    .select("id", { count: "exact", head: true })
    .eq("status", "active")
    .gt("expires_at", now);

  const country = options.countryCode?.trim().toUpperCase();
  if (country) query = query.eq("country_code", country);

  const cityId = options.cityId?.trim();
  if (cityId) query = query.eq("city_id", cityId);

  const { count, error } = await query;
  if (error) {
    console.error("[showcase] travel_requests count failed:", error.message);
    return 0;
  }
  return count ?? 0;
}
