/**
 * Scraping sito + generazione descrizione IT via LM Studio (1 hotel).
 *
 * Usage:
 *   node scripts/test-lmstudio-scrape-one-hotel.mjs --block 018 --index 1
 *   node scripts/test-lmstudio-scrape-one-hotel.mjs --slug tenuta-lanza-il-mulino-acquaviva-platani
 *   node scripts/test-lmstudio-scrape-one-hotel.mjs --block 018 --index 1 --dry-run
 */

import { readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { chatCompletion, getLmStudioConfig, probeLmStudio, resolveModel } from "./lib/lmstudio-client.mjs";
import {
  buildItalianSeoPrompt,
  parseJsonField,
  validateItalianDescription,
} from "./lib/seo-description-prompt.mjs";
import { scrapeHotelWebsite, formatScrapeForPrompt } from "./lib/scrape-hotel-website.mjs";

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  return {
    slug: get("--slug"),
    block: get("--block"),
    index: get("--index") ? Number.parseInt(get("--index"), 10) : 1,
    dryRun: process.argv.includes("--dry-run"),
    noScrape: process.argv.includes("--no-scrape"),
  };
}

function loadHotelFromBlock(blockId, index) {
  const path = resolve(__dirname, `../data/missing-descriptions/blocks/block-${blockId}.json`);
  const block = JSON.parse(readFileSync(path, "utf8"));
  const hotel = block.hotels[index - 1];
  if (!hotel) throw new Error(`Indice ${index} non trovato in block-${blockId}.json`);
  return hotel;
}

function findHotelBySlug(slug) {
  const blocksDir = resolve(__dirname, "../data/missing-descriptions/blocks");
  for (const file of readdirSync(blocksDir).filter((f) => /^block-\d+\.json$/.test(f))) {
    const block = JSON.parse(readFileSync(resolve(blocksDir, file), "utf8"));
    const hit = block.hotels.find((h) => h.slug === slug);
    if (hit) return hit;
  }
  return null;
}

async function enrichFromSupabase(hotel) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return hotel;

  const { createClient } = await import("@supabase/supabase-js");
  const sb = createClient(url, key, { auth: { persistSession: false } });
  const { data } = await sb
    .from("onboarding_hotels")
    .select("website, lat, lng, indirizzo")
    .eq("slug", hotel.slug)
    .maybeSingle();

  if (!data) return hotel;
  return {
    ...hotel,
    indirizzo: hotel.indirizzo ?? data.indirizzo,
    lat: hotel.lat ?? data.lat,
    lng: hotel.lng ?? data.lng,
    website: data.website ?? hotel.website,
  };
}

async function main() {
  const args = parseArgs();
  let hotel;

  if (args.block) {
    hotel = loadHotelFromBlock(String(args.block).padStart(3, "0"), args.index);
  } else if (args.slug) {
    hotel = findHotelBySlug(args.slug);
    if (!hotel) throw new Error(`Slug non trovato: ${args.slug}`);
  } else {
    throw new Error("Servono --block NNN --index N oppure --slug");
  }

  hotel = await enrichFromSupabase(hotel);

  console.log(`\n=== Scraping + LM Studio ===`);
  console.log(`Hotel: ${hotel.nome} (${hotel.slug})`);
  console.log(`Website: ${hotel.website || "—"}`);

  let scrape = null;
  if (!args.noScrape && hotel.website) {
    scrape = await scrapeHotelWebsite(hotel.website);
    if (scrape) {
      console.log(`\n--- SCRAPING OK (${scrape.pages.length} pagine) ---`);
      console.log(`Amenities: ${scrape.amenities.join(", ") || "—"}`);
      console.log(`Luoghi: ${scrape.nearby.join("; ") || "—"}`);
    } else {
      console.log("\n⚠ Scraping fallito — generazione solo da dati DB");
    }
  }

  const { system, user } = buildItalianSeoPrompt(hotel);
  const scrapeBlock = formatScrapeForPrompt(scrape);
  const userWithScrape = scrapeBlock ? `${user}\n\n${scrapeBlock}` : user;

  if (args.dryRun) {
    console.log("\n--- SYSTEM ---\n", system);
    console.log("\n--- USER ---\n", userWithScrape);
    return;
  }

  const { baseUrl, model: envModel } = getLmStudioConfig();
  const probe = await probeLmStudio(baseUrl);
  if (!probe.ok) {
    console.error(`\n✗ LM Studio non raggiungibile: ${probe.error}`);
    console.error(`Server configurato: ${baseUrl}`);
    console.error("\nAvvia LM Studio sul PC, carica un modello, attiva Local Server.");
    process.exit(1);
  }

  const model = await resolveModel(baseUrl, envModel);
  console.log(`\nLM Studio OK — modello: ${model}`);

  const raw = await chatCompletion({
    baseUrl,
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: userWithScrape },
    ],
  });

  const description = parseJsonField(raw, "description");
  const issues = validateItalianDescription(description, hotel);

  console.log("\n--- DESCRIZIONE IT ---\n");
  console.log(description);
  console.log("\n--- VALIDAZIONE ---");
  if (issues.length) {
    console.log("⚠ Problemi:", issues.join("; "));
  } else {
    console.log("✓ OK — pronta per import (dopo revisione umana)");
  }
  console.log(`Parole: ${description.split(/\s+/).filter(Boolean).length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
