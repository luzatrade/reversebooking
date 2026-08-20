import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const CITY_CENTRO = {
  Venezia: { lat: 45.4343, lng: 12.3388, radiusM: 2000 },
  Milano: { lat: 45.4642, lng: 9.19, radiusM: 2800 },
};

const comuneFlag = process.argv.indexOf("--comune");
const comuneName =
  comuneFlag !== -1 && process.argv[comuneFlag + 1] && !process.argv[comuneFlag + 1].startsWith("--")
    ? process.argv[comuneFlag + 1]
    : "Venezia";

const CENTRO = CITY_CENTRO[comuneName];
if (!CENTRO) throw new Error(`Comune non supportato: ${comuneName}`);

function haversineMeters(lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function inCentro(row) {
  if (row.lat == null || row.lng == null) return false;
  return haversineMeters(CENTRO.lat, CENTRO.lng, Number(row.lat), Number(row.lng)) <= CENTRO.radiusM;
}

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const { data, error } = await sb
  .from("onboarding_hotels")
  .select(
    "slug, nome, email, phone, website, indirizzo, lat, lng, main_photo_url, seo_indexable, status"
  )
  .ilike("city_name", comuneName)
  .order("nome");

if (error) throw error;

const centro = (data ?? []).filter(inCentro);
const slugCity = comuneName.toLowerCase();
const outPath = resolve(__dirname, `../data/${slugCity}-centro-full-export.json`);
writeFileSync(outPath, JSON.stringify(centro, null, 2));
console.log(`Exported ${centro.length} ${comuneName} centro structures to ${outPath}`);
console.log(`seo_indexable: ${centro.filter((r) => r.seo_indexable).length}`);
