/**
 * Corregge città e coordinate Casa Ena (onboarding + account partner).
 *
 * Usage:
 *   node scripts/fix-casa-ena-location.mjs
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const ONBOARDING_ID = "12e69b54-ab0e-4e05-b64c-8afdff610007";

const patch = {
  city_name: "Viverone",
  indirizzo: "Località Comuna 4, 13886 Viverone BI",
  lat: 45.409198,
  lng: 8.056268,
};

const { data: istatRow } = await sb.from("comuni_italiani").select("codice_istat").ilike("nome", "Viverone").maybeSingle();
if (istatRow?.codice_istat) patch.city_istat = istatRow.codice_istat;

const { error: onboardingError } = await sb.from("onboarding_hotels").update(patch).eq("id", ONBOARDING_ID);
if (onboardingError) {
  console.error("onboarding_hotels:", onboardingError.message);
  process.exit(1);
}

const { error: rpcError } = await sb.rpc("admin_sync_hotel_location_from_onboarding", {
  p_onboarding_id: ONBOARDING_ID,
});

if (rpcError) {
  console.warn("RPC non disponibile (esegui supabase db push):", rpcError.message);
  const { error: partialError } = await sb
    .from("hotel_accounts")
    .update({
      city_name: patch.city_name,
      full_address: patch.indirizzo,
      specific_area: patch.indirizzo,
      latitude: patch.lat,
      longitude: patch.lng,
    })
    .eq("onboarding_hotel_id", ONBOARDING_ID);
  if (partialError) {
    console.error("hotel_accounts fallback:", partialError.message);
    process.exit(1);
  }
}

const [{ data: onboarding }, { data: hotel }] = await Promise.all([
  sb.from("onboarding_hotels").select("nome, city_name, indirizzo, lat, lng").eq("id", ONBOARDING_ID).single(),
  sb.from("hotel_accounts").select("city_name, city_id, latitude, longitude, full_address").eq("onboarding_hotel_id", ONBOARDING_ID).maybeSingle(),
]);

console.log("Casa Ena aggiornata:");
console.log(JSON.stringify({ onboarding, hotel_account: hotel ?? null }, null, 2));
