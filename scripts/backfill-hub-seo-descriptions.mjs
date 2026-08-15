/**
 * Backfill description / description_en per strutture senza testo (hub prioritari).
 * Usage:
 *   node scripts/backfill-hub-seo-descriptions.mjs --dry-run
 *   node scripts/backfill-hub-seo-descriptions.mjs --cities Roma,Milano
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { buildHotelSeoLine } = await import("./lib/structure-seo-copy.mjs");

const TOURIST_CITIES = [
  "Taormina",
  "Positano",
  "Capri",
  "Sorrento",
  "Amalfi",
  "Matera",
  "Siena",
  "Cortina d'Ampezzo",
  "Salerno",
  "Lecce",
  "Siracusa",
  "Como",
  "Parma",
  "Pisa",
  "Padova",
  "Olbia",
  "Brescia",
  "Sanremo",
  "Cagliari",
  "Trieste",
];

const DEFAULT_CITIES = [
  "Roma",
  "Milano",
  "Napoli",
  "Firenze",
  "Venezia",
  "Verona",
  "Torino",
  "Bologna",
  "Catania",
  "Palermo",
  "Bari",
  "Genova",
  "Rimini",
  "Bolzano",
  "Bergamo",
  "Perugia",
  ...TOURIST_CITIES,
];

const dryRun = process.argv.includes("--dry-run");
const citiesArg = process.argv.find((a) => a.startsWith("--cities="));
const cities = citiesArg
  ? citiesArg
      .slice("--cities=".length)
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
  : DEFAULT_CITIES;

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function buildDescriptionIt(nome, city) {
  return buildHotelSeoLine({ name: nome, cityName: city }, "it");
}

function buildDescriptionEn(nome, city) {
  return buildHotelSeoLine({ name: nome, cityName: city }, "en");
}

async function fetchCandidates(cityName) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, main_photo_url, description, description_en, status, slug")
    .ilike("city_name", cityName)
    .not("main_photo_url", "is", null)
    .not("indirizzo", "is", null);

  if (error) throw error;
  return (data ?? []).filter((row) => !(row.description ?? "").trim());
}

async function main() {
  console.log(dryRun ? "DRY RUN" : "Backfill descrizioni hub");
  console.log(`Città: ${cities.join(", ")}\n`);

  let updated = 0;
  for (const city of cities) {
    const rows = await fetchCandidates(city);
    if (!rows.length) continue;
    console.log(`${city}: ${rows.length} senza description IT`);

    for (const row of rows) {
      const patch = {
        description: buildDescriptionIt(row.nome, row.city_name ?? city),
        description_en: buildDescriptionEn(row.nome, row.city_name ?? city),
      };
      const seoRow = { ...row, ...patch };
      patch.seo_indexable = isOnboardingSeoIndexable(seoRow);

      if (dryRun) {
        console.log(`  [dry] ${row.slug} | ${patch.description.slice(0, 60)}…`);
        updated++;
        continue;
      }

      const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
      if (error) throw error;
      updated++;
    }
  }

  console.log(`\nTotale aggiornati: ${updated}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
