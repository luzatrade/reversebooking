/**
 * Genera descrizioni SEO IT via Gemini API (Google AI Studio).
 *
 * Env: GEMINI_API_KEY (required), GEMINI_MODEL (optional, default gemini-2.0-flash)
 *
 * Usage:
 *   node scripts/generate-block-descriptions-gemini.mjs --probe
 *   node scripts/generate-block-descriptions-gemini.mjs --block 011
 *   node scripts/generate-block-descriptions-gemini.mjs --block 011 --from 1 --to 3
 *   node scripts/generate-block-descriptions-gemini.mjs --block 011 --import
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { geminiGenerateContent, getGeminiConfig, probeGemini } from "./lib/gemini-client.mjs";
import {
  buildEnglishSeoPrompt,
  buildItalianSeoPrompt,
  buildRetryPrompt,
  parseJsonField,
  validateItalianDescription,
} from "./lib/seo-description-prompt.mjs";

const MAX_RETRIES = 2;
const OUT_DIR = resolve(__dirname, "../data/gemini-responses");
const DELAY_MS = Number(process.env.GEMINI_DELAY_MS ?? 400);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  if (process.argv.includes("--probe")) return { probe: true };
  const block = get("--block");
  if (!block) {
    console.error("Servono --block NNN (es. --block 011) oppure --probe");
    process.exit(1);
  }
  return {
    block: String(block).padStart(3, "0"),
    from: get("--from") ? Number.parseInt(get("--from"), 10) : 1,
    to: get("--to") ? Number.parseInt(get("--to"), 10) : null,
    withEn: process.argv.includes("--en"),
    importAfter: process.argv.includes("--import"),
    dryRun: process.argv.includes("--dry-run"),
    enrich: !process.argv.includes("--no-enrich"),
  };
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

async function generateItalian(hotel, model) {
  let lastText = "";
  let lastIssues = [];

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const prompt =
      attempt === 0 ? buildItalianSeoPrompt(hotel) : buildRetryPrompt(hotel, lastIssues, lastText);

    const raw = await geminiGenerateContent({
      system: prompt.system,
      user: prompt.user,
      model,
    });

    lastText = parseJsonField(raw, "description");
    lastIssues = validateItalianDescription(lastText, hotel);

    if (!lastIssues.length) return { description: lastText, issues: [] };
    console.log(`  ↻ retry ${attempt + 1}/${MAX_RETRIES}: ${lastIssues.join("; ")}`);
  }

  return { description: lastText, issues: lastIssues };
}

async function generateEnglish(hotel, italian, model) {
  const { system, user } = buildEnglishSeoPrompt(hotel, italian);
  const raw = await geminiGenerateContent({
    system,
    user,
    model,
    temperature: 0.5,
  });
  return parseJsonField(raw, "description_en");
}

async function main() {
  const args = parseArgs();

  if (args.probe) {
    const result = await probeGemini();
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  const probe = await probeGemini();
  if (!probe.ok) {
    console.error(probe.error);
    process.exit(1);
  }

  const { model } = getGeminiConfig();
  console.log(`Gemini OK — modello: ${model}\n`);

  const blockPath = resolve(__dirname, `../data/missing-descriptions/blocks/block-${args.block}.json`);
  if (!existsSync(blockPath)) throw new Error(`File non trovato: ${blockPath}`);

  const block = JSON.parse(readFileSync(blockPath, "utf8"));
  const hotels = block.hotels.slice(args.from - 1, args.to ?? block.hotels.length);

  console.log(`Blocco ${args.block}: ${hotels.length} strutture (indice ${args.from})\n`);

  const results = [];
  let warnings = 0;

  for (const [i, hotel] of hotels.entries()) {
    const idx = args.from + i;
    const enriched = args.enrich ? await enrichFromSupabase(hotel) : hotel;
    console.log(`[${idx}] ${enriched.slug}`);

    if (args.dryRun) continue;

    const { description, issues } = await generateItalian(enriched, model);
    const row = {
      slug: enriched.slug,
      description,
      indirizzo: enriched.indirizzo,
    };

    if (issues.length) {
      warnings++;
      console.log(`  ⚠ ${issues.join("; ")}`);
    } else {
      console.log(`  ✓ IT ${description.split(/\s+/).filter(Boolean).length} parole`);
    }

    if (args.withEn) {
      row.description_en = await generateEnglish(enriched, description, model);
      console.log(`  ✓ EN`);
    }

    results.push(row);
    mkdirSync(OUT_DIR, { recursive: true });
    writeFileSync(
      resolve(OUT_DIR, `block-${args.block}-updates.partial.json`),
      JSON.stringify(results, null, 2) + "\n",
    );

    await sleep(DELAY_MS);
  }

  if (args.dryRun) return;

  const outPath = resolve(OUT_DIR, `block-${args.block}-updates.json`);
  writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nSalvato: ${outPath}`);
  console.log(`Completati: ${results.length} | Warning: ${warnings}`);

  if (args.importAfter) {
    console.log("\nImport Supabase…");
    const r = spawnSync(
      "node",
      [resolve(__dirname, "import-gemini-block-descriptions.mjs"), "--file", outPath],
      { stdio: "inherit", cwd: resolve(__dirname, "..") },
    );
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
