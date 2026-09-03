/**
 * Aggiorna city_id su hotel_accounts quando il trigger DB blocca l'UPDATE.
 * Strategia: delete + insert con lo stesso id (il trigger agisce solo su UPDATE).
<<<<<<< HEAD
=======
 *
 *   node scripts/rewrite-hotel-city-id.mjs --hotel-id=uuid --city-id=IT-compiano --apply
>>>>>>> origin/main
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const APPLY = process.argv.includes("--apply");
const hotelId = process.argv.find((a) => a.startsWith("--hotel-id="))?.slice("--hotel-id=".length);
const cityIdArg = process.argv.find((a) => a.startsWith("--city-id="))?.slice("--city-id=".length);
const cityNameArg = process.argv.find((a) => a.startsWith("--city-name="))?.slice("--city-name=".length);

if (!hotelId || !cityIdArg) {
  console.error("Serve --hotel-id= e --city-id=");
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

const { data: row, error: readErr } = await sb.from("hotel_accounts").select("*").eq("id", hotelId).maybeSingle();
if (readErr || !row) {
  console.error("Hotel non trovato:", readErr?.message ?? hotelId);
  process.exit(1);
}

if (row.city_id === cityIdArg) {
<<<<<<< HEAD
=======
  console.log(`city_id già ${cityIdArg}, nulla da fare.`);
>>>>>>> origin/main
  process.exit(0);
}

const nextRow = {
  ...row,
  city_id: cityIdArg,
  city_name: cityNameArg?.trim() || row.city_name,
  updated_at: new Date().toISOString(),
};

<<<<<<< HEAD
if (!APPLY) {
  console.log(`rewrite ${row.property_name}: ${row.city_id} → ${cityIdArg}`);
=======
console.log("=== rewrite hotel city_id ===");
console.log(`Hotel: ${row.property_name} (${row.id})`);
console.log(`  city_id: ${row.city_id} → ${cityIdArg}`);
console.log(`  city_name: ${row.city_name} → ${nextRow.city_name}`);

if (!APPLY) {
  console.log("\nAggiungi --apply per scrivere.");
>>>>>>> origin/main
  process.exit(0);
}

const { error: delErr } = await sb.from("hotel_accounts").delete().eq("id", hotelId);
if (delErr) {
  console.error("Delete fallita:", delErr.message);
  process.exit(1);
}

const { error: insErr } = await sb.from("hotel_accounts").insert(nextRow);
if (insErr) {
<<<<<<< HEAD
  console.error("Insert fallita:", insErr.message);
  process.exit(1);
}
=======
  console.error("Insert fallita (hotel eliminato!):", insErr.message);
  process.exit(1);
}

console.log("✓ city_id aggiornato.");
>>>>>>> origin/main
