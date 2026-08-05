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

function inferKind(nome) {
  const n = (nome ?? "").toLowerCase();
  if (n.includes("b&b") || n.includes("bed and breakfast") || n.includes("bed & breakfast")) return "B&B";
  if (n.includes("agriturismo")) return "agriturismo";
  if (n.includes("guest house") || n.includes("guesthouse")) return "guest house";
  if (n.includes("appartament")) return "appartamento";
  if (n.includes("hotel")) return "hotel";
  return "struttura ricettiva";
}

function inferKindEn(nome) {
  const n = (nome ?? "").toLowerCase();
  if (n.includes("b&b") || n.includes("bed and breakfast")) return "B&B";
  if (n.includes("agriturismo")) return "farm stay";
  if (n.includes("guest house")) return "guest house";
  if (n.includes("appartament")) return "apartment";
  if (n.includes("hotel")) return "hotel";
  return "property";
}

function buildDescriptionIt(nome, city, indirizzo) {
  const kind = inferKind(nome);
  const addr = (indirizzo ?? "").trim();
  const location = addr ? ` in ${addr}` : ` a ${city}`;
  return `${nome} è un ${kind}${location}. Su HotelsDrop pubblichi una richiesta di soggiorno gratuita e ricevi offerte dirette dalla struttura, senza commissioni di prenotazione per chi viaggia.`;
}

function buildDescriptionEn(nome, city, indirizzo) {
  const kind = inferKindEn(nome);
  const addr = (indirizzo ?? "").trim();
  const location = addr ? ` at ${addr}` : ` in ${city}`;
  return `${nome} is a ${kind}${location}. On HotelsDrop you publish a free stay request and receive direct offers from the property with zero booking commission for travellers.`;
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
        description: buildDescriptionIt(row.nome, row.city_name ?? city, row.indirizzo),
        description_en: buildDescriptionEn(row.nome, row.city_name ?? city, row.indirizzo),
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
