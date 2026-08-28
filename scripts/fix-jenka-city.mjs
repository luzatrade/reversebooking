/**
 * Allinea città/coordinate Jenka (Caltabellotta) su hotel_accounts collegato.
 * Richiede migration admin_sync_hotel_location_from_onboarding applicata in prod.
 *
 *   node scripts/fix-jenka-city.mjs
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const ONBOARDING_ID = "a102dbd9-c8d9-43c4-b505-6b56b26073d9";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

const { error } = await sb.rpc("admin_sync_hotel_location_from_onboarding", {
  p_onboarding_id: ONBOARDING_ID,
});

if (error) {
  console.error("RPC fallita:", error.message);
  console.error("Applica prima: npm run supabase:push");
  process.exit(1);
}

const { data } = await sb
  .from("hotel_accounts")
  .select("property_name, city_name, city_id, slug")
  .eq("onboarding_hotel_id", ONBOARDING_ID)
  .maybeSingle();

console.log("Jenka aggiornata:", data);
process.exit(0);
