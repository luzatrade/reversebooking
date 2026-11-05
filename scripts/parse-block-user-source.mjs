/**
 * Parse user-provided markdown batch (### N. Name, ID, IT/EN descriptions).
 * Usage: node scripts/parse-block-user-source.mjs --block 011 --source data/gemini-responses/block-011-user-source.md
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const block = get("--block");
  const source = get("--source");
  if (!block || !source) {
    console.error("Usage: node scripts/parse-block-user-source.mjs --block 011 --source path.md");
    process.exit(1);
  }
  return {
    block: String(block).padStart(3, "0"),
    source: resolve(process.cwd(), source),
  };
}

function parseSections(text) {
  const sections = text.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);
  const entries = [];

  for (const section of sections) {
    if (!section.includes("**ID:**")) continue;

    const idMatch = section.match(/\*\*ID:\*\*\s*`([a-f0-9-]+)`/i);
    if (!idMatch) continue;

    const itMatch = section.match(
      /\*\*Descrizione:\*\*\s*([\s\S]*?)(?=\n\*\*Description:\*\*|\n\*\*\[ENGLISH\]\*\*|\n---|\n###\s)/i,
    );
    const enMatch = section.match(/\*\*Description:\*\*\s*([\s\S]*?)(?=\n---|\n###\s|\s*$)/i);

    const description = itMatch?.[1]?.trim().replace(/\s+/g, " ").trim();
    const description_en = enMatch?.[1]?.trim().replace(/\s+/g, " ").trim();

    if (!description) {
      console.warn(`Skip ${idMatch[1]}: no IT description`);
      continue;
    }

    entries.push({ id: idMatch[1], description, description_en: description_en || undefined });
  }

  return entries;
}

function main() {
  const { block, source } = parseArgs();
  if (!existsSync(source)) {
    console.error(`File not found: ${source}`);
    process.exit(1);
  }

  const blockPath = resolve(__dirname, `../data/missing-descriptions/blocks/block-${block}.json`);
  const blockData = JSON.parse(readFileSync(blockPath, "utf8"));
  const byId = new Map(blockData.hotels.map((h) => [h.id, h]));

  const parsed = parseSections(readFileSync(source, "utf8"));
  const results = [];
  const missing = [];

  for (const row of parsed) {
    const hotel = byId.get(row.id);
    if (!hotel) {
      missing.push(row.id);
      continue;
    }
    results.push({
      slug: hotel.slug,
      description: row.description,
      ...(row.description_en ? { description_en: row.description_en } : {}),
      indirizzo: hotel.indirizzo,
    });
  }

  if (missing.length) {
    console.warn("IDs not in block file:", missing.join(", "));
  }

  const outPath = resolve(__dirname, `../data/gemini-responses/block-${block}-updates.json`);
  writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
  console.log(`Parsed ${parsed.length} sections → ${results.length} hotels`);
  console.log(`Written: ${outPath}`);
  if (results.length !== blockData.hotels.length) {
    console.warn(`Block has ${blockData.hotels.length} hotels, output has ${results.length}`);
    const outIds = new Set(parsed.map((p) => p.id));
    for (const h of blockData.hotels) {
      if (!outIds.has(h.id)) console.warn(`  Missing in source: ${h.slug} (${h.id})`);
    }
  }
}

main();
