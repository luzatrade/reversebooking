/**
 * Prova rapida LM Studio su una struttura.
 *
 * Usage:
 *   node scripts/test-lmstudio-one-hotel.mjs
 *   node scripts/test-lmstudio-one-hotel.mjs --slug b-b-aquilegia-acqualagna
 *   node scripts/test-lmstudio-one-hotel.mjs --block 011 --index 1
 *   node scripts/test-lmstudio-one-hotel.mjs --dry-run
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

const DEFAULT_HOTEL = {
  nome: "B&B Aquilegia",
  slug: "b-b-aquilegia-acqualagna",
  city_name: "Acqualagna",
  indirizzo: "Via Furlo, 12, 61041 Acqualagna PU",
  lat: 43.640224,
  lng: 12.714989,
  website: "https://www.aquilegiafurlo.it/",
};

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
    withEn: process.argv.includes("--en"),
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

async function main() {
  const args = parseArgs();
  let hotel = DEFAULT_HOTEL;

  if (args.block) {
    hotel = loadHotelFromBlock(String(args.block).padStart(3, "0"), args.index);
  } else if (args.slug) {
    const found = findHotelBySlug(args.slug);
    if (!found) throw new Error(`Slug non trovato: ${args.slug}`);
    hotel = found;
  }

  const { baseUrl, model: envModel } = getLmStudioConfig();
  const probe = await probeLmStudio(baseUrl);

  console.log(`\n=== Test LM Studio ===`);
  console.log(`Hotel: ${hotel.nome} (${hotel.slug})`);
  console.log(`Server: ${baseUrl}`);

  if (!probe.ok) {
    console.error(`\n✗ LM Studio non raggiungibile: ${probe.error}`);
    console.error("\nAvvia LM Studio sul tuo PC, carica un modello, attiva Local Server.");
    process.exit(1);
  }

  console.log(`Modelli: ${probe.models.join(", ")}`);

  const { system, user } = buildItalianSeoPrompt(hotel);

  if (args.dryRun) {
    console.log("\n--- SYSTEM ---\n", system);
    console.log("\n--- USER ---\n", user);
    return;
  }

  const model = await resolveModel(baseUrl, envModel);
  console.log(`Modello: ${model}\n`);

  const raw = await chatCompletion({
    baseUrl,
    model,
    messages: [{ role: "system", content: system }, { role: "user", content: user }],
  });

  const description = parseJsonField(raw, "description");
  const issues = validateItalianDescription(description, hotel);

  console.log("--- DESCRIZIONE IT ---\n");
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
