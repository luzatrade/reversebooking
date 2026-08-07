/**
 * Genera descrizioni SEO via LM Studio (OpenAI-compatible API locale).
 *
 * Prerequisiti sul tuo PC:
 *   1. LM Studio avviato con Local Server su http://127.0.0.1:1234
 *   2. Modello caricato
 *   3. In .env.local (opzionale):
 *        LMSTUDIO_BASE_URL=http://127.0.0.1:1234/v1
 *        LMSTUDIO_MODEL=nome-modelo-esatto
 *
 * Usage:
 *   node scripts/generate-block-descriptions-lmstudio.mjs --block 011
 *   node scripts/generate-block-descriptions-lmstudio.mjs --block 011 --from 1 --to 3
 *   node scripts/generate-block-descriptions-lmstudio.mjs --block 011 --import
 *   node scripts/generate-block-descriptions-lmstudio.mjs --probe
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { chatCompletion, getLmStudioConfig, probeLmStudio, resolveModel } from "./lib/lmstudio-client.mjs";
import {
  buildEnglishSeoPrompt,
  buildItalianSeoPrompt,
  buildRetryPrompt,
  parseJsonField,
  validateItalianDescription,
} from "./lib/seo-description-prompt.mjs";

const MAX_RETRIES = 2;
const OUT_DIR = resolve(__dirname, "../data/gemini-responses");

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const block = get("--block");
  if (!block && !process.argv.includes("--probe")) {
    console.error("Servono --block NNN (es. --block 011) oppure --probe");
    process.exit(1);
  }
  return {
    block: block ? String(block).padStart(3, "0") : null,
    from: get("--from") ? Number.parseInt(get("--from"), 10) : 1,
    to: get("--to") ? Number.parseInt(get("--to"), 10) : null,
    withEn: process.argv.includes("--en"),
    importAfter: process.argv.includes("--import"),
    dryRun: process.argv.includes("--dry-run"),
    probe: process.argv.includes("--probe"),
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

async function generateItalian(hotel, baseUrl, model) {
  let lastText = "";
  let lastIssues = [];

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const prompt =
      attempt === 0
        ? buildItalianSeoPrompt(hotel)
        : buildRetryPrompt(hotel, lastIssues, lastText);

    const raw = await chatCompletion({
      baseUrl,
      model,
      messages: [
        { role: "system", content: prompt.system },
        { role: "user", content: prompt.user },
      ],
    });

    lastText = parseJsonField(raw, "description");
    lastIssues = validateItalianDescription(lastText, hotel);

    if (!lastIssues.length) return { description: lastText, issues: [] };
    console.log(`  ↻ retry ${attempt + 1}/${MAX_RETRIES}: ${lastIssues.join("; ")}`);
  }

  return { description: lastText, issues: lastIssues };
}

async function generateEnglish(hotel, italian, baseUrl, model) {
  const { system, user } = buildEnglishSeoPrompt(hotel, italian);
  const raw = await chatCompletion({
    baseUrl,
    model,
    messages: [{ role: "system", content: system }, { role: "user", content: user }],
    temperature: 0.35,
  });
  return parseJsonField(raw, "description_en");
}

async function main() {
  const args = parseArgs();
  const { baseUrl, model: envModel } = getLmStudioConfig();

  if (args.probe) {
    const probe = await probeLmStudio(baseUrl);
    console.log(JSON.stringify(probe, null, 2));
    process.exit(probe.ok ? 0 : 1);
  }

  const probe = await probeLmStudio(baseUrl);
  if (!probe.ok) {
    console.error(`LM Studio non raggiungibile su ${baseUrl}`);
    console.error(probe.error);
    console.error("\nEsegui questo script sul PC dove gira LM Studio (non dal Cloud Agent).");
    process.exit(1);
  }

  const model = await resolveModel(baseUrl, envModel);
  console.log(`LM Studio OK — modello: ${model}`);

  const blockPath = resolve(__dirname, `../data/missing-descriptions/blocks/block-${args.block}.json`);
  if (!existsSync(blockPath)) {
    throw new Error(`File non trovato: ${blockPath}`);
  }

  const block = JSON.parse(readFileSync(blockPath, "utf8"));
  const hotels = block.hotels.slice(args.from - 1, args.to ?? block.hotels.length);

  console.log(`Blocco ${args.block}: ${hotels.length} strutture (da indice ${args.from})\n`);

  const results = [];
  let warnings = 0;

  for (const [i, hotel] of hotels.entries()) {
    const idx = args.from + i;
    const enriched = args.enrich ? await enrichFromSupabase(hotel) : hotel;
    console.log(`[${idx}] ${enriched.slug}`);

    if (args.dryRun) {
      const { system, user } = buildItalianSeoPrompt(enriched);
      console.log("  (dry-run) prompt length:", system.length + user.length);
      continue;
    }

    const { description, issues } = await generateItalian(enriched, baseUrl, model);
    const row = {
      slug: enriched.slug,
      description,
      indirizzo: enriched.indirizzo,
    };

    if (issues.length) {
      warnings++;
      console.log(`  ⚠ validazione: ${issues.join("; ")}`);
    } else {
      console.log(`  ✓ IT ${description.split(/\s+/).filter(Boolean).length} parole`);
    }

    if (args.withEn) {
      row.description_en = await generateEnglish(enriched, description, baseUrl, model);
      console.log(`  ✓ EN generato`);
    }

    results.push(row);

    mkdirSync(OUT_DIR, { recursive: true });
    const partialPath = resolve(OUT_DIR, `block-${args.block}-updates.partial.json`);
    writeFileSync(partialPath, JSON.stringify(results, null, 2) + "\n");
  }

  if (args.dryRun) return;

  const outPath = resolve(OUT_DIR, `block-${args.block}-updates.json`);
  writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nSalvato: ${outPath}`);
  console.log(`Completati: ${results.length} | Warning validazione: ${warnings}`);

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
