import type { SupabaseClient } from "@supabase/supabase-js";

function cityNameVariants(cityName: string): string[] {
  const base = cityName.trim();
  if (!base) return [];
  const variants = new Set<string>([base]);
  if (base.includes("'")) variants.add(base.replace(/'/g, " "));
  if (base.startsWith("Reggio ")) variants.add(base.replace(/^Reggio /, "Reggio di "));
  return [...variants];
}

export async function resolveOnboardingCityIstat(
  admin: SupabaseClient,
  cityName: string,
): Promise<string | null> {
  for (const nome of cityNameVariants(cityName)) {
    const { data } = await admin.from("comuni_italiani").select("codice_istat").ilike("nome", nome).maybeSingle();
    if (data?.codice_istat) return String(data.codice_istat);
  }
  return null;
}
