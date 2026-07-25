import { createServiceRoleClient } from "@/lib/supabase/admin";
import { buildDestinationSlug } from "@/lib/seo/city-canonical";

export type SlugLastmodMap = Map<string, Date>;

export async function fetchStructureSlugLastmods(): Promise<SlugLastmodMap> {
  const admin = createServiceRoleClient();
  const map: SlugLastmodMap = new Map();
  if (!admin) return map;

  for (const table of ["hotel_accounts", "onboarding_hotels"] as const) {
    let from = 0;
    while (true) {
      const { data, error } = await admin
        .from(table)
        .select("slug, updated_at")
        .eq("seo_indexable", true)
        .not("slug", "is", null)
        .range(from, from + 999);
      if (error) break;

      for (const row of data ?? []) {
        const slug = String(row.slug ?? "");
        const updatedAt = row.updated_at ? new Date(String(row.updated_at)) : null;
        if (!slug || !updatedAt || Number.isNaN(updatedAt.getTime())) continue;
        const existing = map.get(slug);
        if (!existing || updatedAt > existing) map.set(slug, updatedAt);
      }

      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  return map;
}

export async function fetchDestinationSlugLastmods(): Promise<SlugLastmodMap> {
  const structureMap = await fetchStructureSlugLastmods();
  const admin = createServiceRoleClient();
  const map: SlugLastmodMap = new Map();
  if (!admin) return map;

  for (const table of ["hotel_accounts", "onboarding_hotels"] as const) {
    let from = 0;
    while (true) {
      const cityField = table === "hotel_accounts" ? "city_name" : "city_name";
      const { data, error } = await admin
        .from(table)
        .select(`${cityField}, updated_at`)
        .eq("seo_indexable", true)
        .range(from, from + 999);
      if (error) break;

      for (const row of data ?? []) {
        const cityName = String(row.city_name ?? "").trim();
        const updatedAt = row.updated_at ? new Date(String(row.updated_at)) : null;
        if (!cityName || !updatedAt || Number.isNaN(updatedAt.getTime())) continue;
        const hubSlug = buildDestinationSlug(cityName);
        const existing = map.get(hubSlug);
        if (!existing || updatedAt > existing) map.set(hubSlug, updatedAt);
      }

      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  return map;
}

export function staticPageLastmod(path: string): Date {
  const fixed: Record<string, string> = {
    "/": "2026-07-25",
    "/destinazioni": "2026-07-25",
    "/guide": "2026-07-25",
    "/cos-e-hotelsdrop": "2026-07-25",
    "/contatti": "2026-05-17",
    "/note-legali": "2026-05-17",
    "/privacy-policy": "2026-05-17",
    "/cookie-policy": "2026-05-17",
    "/termini-e-condizioni": "2026-05-17",
    "/condizioni-abbonamento": "2026-05-17",
    "/struttura": "2026-05-17",
  };
  return new Date(fixed[path] ?? "2026-07-25");
}
