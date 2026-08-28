import type { SupabaseClient } from "@supabase/supabase-js";

export async function resolveOnboardingCityIstat(
  admin: SupabaseClient,
  cityName: string,
): Promise<string | null> {
  const trimmed = cityName.trim();
  if (!trimmed) return null;

  const variants = [trimmed, trimmed.replace(/^Reggio /, "Reggio di ")];
  for (const nome of variants) {
    const { data } = await admin
      .from("comuni_italiani")
      .select("codice_istat")
      .ilike("nome", nome)
      .maybeSingle();
    if (data?.codice_istat) return data.codice_istat;
  }
  return null;
}
