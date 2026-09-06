import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const CITY_ZONES = {
  Venezia: {
    centro: { lat: 45.4343, lng: 12.3388, radiusM: 2000 },
    mestre: { lat: 45.4935, lng: 12.2424, radiusM: 1800 },
  },
  Milano: {
    centro: { lat: 45.4642, lng: 9.19, radiusM: 2800 },
  },
  Verona: {
    centro: { lat: 45.4384, lng: 10.9916, radiusM: 2500 },
  },
  Firenze: {
    centro: { lat: 43.7696, lng: 11.2558, radiusM: 2500 },
  },
  Padova: {
    centro: { lat: 45.4064, lng: 11.8768, radiusM: 7000 },
  },
};

const comuneFlag = process.argv.indexOf("--comune");
const zoneFlag = process.argv.indexOf("--zone");
const comuneName =
  comuneFlag !== -1 && process.argv[comuneFlag + 1] && !process.argv[comuneFlag + 1].startsWith("--")
    ? process.argv[comuneFlag + 1]
    : "Venezia";
const zoneName =
  zoneFlag !== -1 && process.argv[zoneFlag + 1] && !process.argv[zoneFlag + 1].startsWith("--")
    ? process.argv[zoneFlag + 1]
    : "all";

const zones = CITY_ZONES[comuneName];
if (!zones) throw new Error(`Comune non supportato: ${comuneName}`);

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

function inZone(row, zone) {
  if (row.lat == null || row.lng == null) return false;
  return haversineMeters(zone.lat, zone.lng, Number(row.lat), Number(row.lng)) <= zone.radiusM;
}

function zoneLabel(row) {
  if (zones.centro && inZone(row, zones.centro)) return "centro";
  if (zones.mestre && inZone(row, zones.mestre)) return "mestre";
  return null;
}

function inExport(row) {
  if (zoneName === "all") {
    return (zones.centro && inZone(row, zones.centro)) || (zones.mestre && inZone(row, zones.mestre));
  }
  if (!zones[zoneName]) return false;
  return inZone(row, zones[zoneName]);
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

const exported = (data ?? [])
  .filter(inExport)
  .map((row) => ({ ...row, area: zoneLabel(row) }))
  .sort((a, b) => a.nome.localeCompare(b.nome, "it"));

const slugCity = comuneName.toLowerCase();
const zoneSuffix = zoneName === "all" ? "centro-mestre" : zoneName;
const outPath = resolve(__dirname, `../data/${slugCity}-${zoneSuffix}-full-export.json`);
writeFileSync(outPath, JSON.stringify(exported, null, 2));

const byArea = exported.reduce(
  (acc, r) => {
    const k = r.area ?? "other";
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  },
  {},
);

console.log(`Exported ${exported.length} ${comuneName} (${zoneName}) → ${outPath}`);
console.log("Per area:", byArea);
console.log(`seo_indexable: ${exported.filter((r) => r.seo_indexable).length}`);
