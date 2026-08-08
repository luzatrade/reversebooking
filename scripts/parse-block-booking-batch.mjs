/**
 * Parse Booking-style user batch (#### N. Name, bullet fields, IT/EN descriptions).
 *
 * Usage:
 *   node scripts/parse-block-booking-batch.mjs --block 012 --source data/gemini-responses/block-012-user-paste-part1.md
 *   node scripts/parse-block-booking-batch.mjs --block 012 --source ... --out data/gemini-responses/block-012-updates-partial.json
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
  const out = get("--out");
  if (!block || !source) {
    console.error(
      "Usage: node scripts/parse-block-booking-batch.mjs --block 012 --source path.md [--out updates.json]",
    );
    process.exit(1);
  }
  return {
    block: String(block).padStart(3, "0"),
    source: resolve(process.cwd(), source),
    out: out ? resolve(process.cwd(), out) : null,
  };
}

function cleanText(s) {
  return s
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseSections(text) {
  const sections = text.split(/(?=#### \*\*\d+\.)/).map((s) => s.trim()).filter((s) => s.includes("**ID:**"));
  const entries = [];

  for (const section of sections) {
    const idMatch = section.match(/\*\*ID:\*\*\s*`([a-f0-9-]+)`/i);
    if (!idMatch) continue;

    const slugMatch = section.match(/\*\*Slug:\*\*\s*`([^`]+)`/i);
    const emailMatch = section.match(/\*\*Email:\*\*\s*`([^`]+)`/i);
    const addrMatch = section.match(/\*\*Indirizzo completo:\*\*\s*(.+?)(?:\n|$)/i);

    const itMatch = section.match(
      /\*\*Descrizione SEO Italiano[^*]*:\*\*\s*([\s\S]*?)(?=\n\* \*\*SEO Description English|\n\*\*SEO Description English)/i,
    );
    const enMatch = section.match(
      /\*\*SEO Description English[^*]*:\*\*\s*([\s\S]*?)(?=\n\* \*\*Servizi principali|\n\*\*Servizi principali)/i,
    );

    const description = itMatch ? cleanText(itMatch[1]) : null;
    const description_en = enMatch ? cleanText(enMatch[1]) : null;
    const email = emailMatch?.[1]?.trim() || null;
    const indirizzo = addrMatch ? cleanText(addrMatch[1]) : null;

    if (!description) {
      console.warn(`Skip ${idMatch[1]}: no IT description`);
      continue;
    }

    entries.push({
      id: idMatch[1],
      slug: slugMatch?.[1]?.trim(),
      description,
      description_en: description_en || undefined,
      email: email || undefined,
      indirizzo: indirizzo || undefined,
    });
  }

  return entries;
}

function main() {
  const { block, source, out } = parseArgs();
  if (!existsSync(source)) {
    console.error(`File not found: ${source}`);
    process.exit(1);
  }

  const blockPath = resolve(__dirname, `../data/missing-descriptions/blocks/block-${block}.json`);
  const blockData = JSON.parse(readFileSync(blockPath, "utf8"));
  const byId = new Map(blockData.hotels.map((h) => [h.id, h]));

  const parsed = parseSections(readFileSync(source, "utf8"));
  const results = [];

  for (const row of parsed) {
    const hotel = byId.get(row.id);
    if (!hotel) {
      console.warn(`ID not in block ${block}: ${row.id}`);
      continue;
    }
    if (row.slug && row.slug !== hotel.slug) {
      console.warn(`Slug mismatch ${row.id}: paste=${row.slug} block=${hotel.slug}`);
    }
    results.push({
      slug: hotel.slug,
      description: row.description,
      ...(row.description_en ? { description_en: row.description_en } : {}),
      ...(row.email ? { email: row.email } : {}),
      indirizzo: row.indirizzo ?? hotel.indirizzo,
    });
  }

  const outPath =
    out ?? resolve(__dirname, `../data/gemini-responses/block-${block}-updates.json`);
  writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
  console.log(`Parsed ${parsed.length} sections → ${results.length} hotels`);
  console.log(`Written: ${outPath}`);
}

main();
