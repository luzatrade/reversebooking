// Verifica rapida: conta le foto in city_media per ogni città e segnala quelle
// con meno di 8 foto. Uso: node scripts/verify-city-media.mjs
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { cityGalleries } = await import("./city-galleries.mjs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const admin = createClient(url, service, { auth: { persistSession: false } });

const { data, error } = await admin.from("city_media").select("city_id, storage_path");
if (error) {
  console.error(error);
  process.exit(1);
}

const counts = new Map();
for (const row of data) {
  counts.set(row.city_id, (counts.get(row.city_id) ?? 0) + 1);
}

let totalCities = 0;
let totalPhotos = 0;
const problems = [];
for (const g of cityGalleries) {
  const n = counts.get(g.cityId) ?? 0;
  totalCities += 1;
  totalPhotos += n;
  const flag = n < 8 ? " ⚠️" : "";
  if (n < 8) problems.push(`${g.cityId} (${g.cityNameEn}): ${n}`);
  console.log(`${g.cityId.padEnd(8)} ${String(n).padStart(2)} foto  ${g.cityNameEn}${flag}`);
}

console.log("\n────────────────────");
console.log(`Città: ${totalCities}  •  Foto totali: ${totalPhotos}`);
if (problems.length) {
  console.log(`\n⚠️  Città con meno di 8 foto:\n  ${problems.join("\n  ")}`);
} else {
  console.log("\n✅ Tutte le città hanno almeno 8 foto.");
}
