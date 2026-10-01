/**
 * Parse Gemini B2C batch (### N. Name, DESCRIZIONE B2C / B2C DESCRIPTION).
 * Maps structure numbers to slugs via data/n8n/missing-descriptions/all-hotels.json.
 *
 * Usage:
 *   node scripts/parse-b2c-description-batch.mjs --source paste.md --from 421 --to 455 --out updates.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

function parseArgs() {
  const get = (flag) => {
    const i = process.argv.indexOf(flag);
    return i >= 0 ? process.argv[i + 1] : null;
  };
  const source = get("--source");
  const out = get("--out");
  const from = Number.parseInt(get("--from") ?? "1", 10);
  const to = Number.parseInt(get("--to") ?? String(from), 10);
  if (!source || !out) {
    console.error(
      "Usage: node scripts/parse-b2c-description-batch.mjs --source paste.md --from N --to M --out updates.json",
    );
    process.exit(1);
  }
  return {
    source: resolve(process.cwd(), source),
    out: resolve(process.cwd(), out),
    from,
    to,
  };
}

function loadSlugMap(from, to) {
  const data = JSON.parse(
    readFileSync(resolve(process.cwd(), "data/n8n/missing-descriptions/all-hotels.json"), "utf8"),
  );
  const map = {};
  for (let n = from; n <= to; n++) {
    const h = data.hotels[n - 1];
    if (h?.slug) map[n] = h.slug;
  }
  return map;
}

function parseSection(section) {
  const numMatch = section.match(/###\s*(\d+)\./);
  if (!numMatch) return null;

  const itMatch = section.match(
    /2\.\s*DESCRIZIONE B2C\s*\n([\s\S]*?)(?=\n3\.\s*CALL TO ACTION)/i,
  );
  const enPart = section.split(/ENGLISH VERSION/i)[1] ?? "";
  const enMatch = enPart.match(
    /2\.\s*B2C DESCRIPTION\s*\n([\s\S]*?)(?=\n3\.\s*HOTELSDROP CALL TO ACTION)/i,
  );

  const description = itMatch?.[1]?.trim();
  if (!description) return null;

  return {
    structureNumber: Number.parseInt(numMatch[1], 10),
    description,
    description_en: enMatch?.[1]?.trim() ?? undefined,
  };
}

const { source, out, from, to } = parseArgs();
const text = readFileSync(source, "utf8");
const slugMap = loadSlugMap(from, to);

const sections = text.split(/(?=###\s*\d+\.)/m).filter((s) => /###\s*\d+\./.test(s));
const entries = [];

for (const section of sections) {
  const parsed = parseSection(section);
  if (!parsed) continue;

  const slug = slugMap[parsed.structureNumber];
  if (!slug) {
    console.warn(`Skip #${parsed.structureNumber}: no slug in map`);
    continue;
  }

  entries.push({
    slug,
    description: parsed.description,
    description_en: parsed.description_en,
  });
}

writeFileSync(out, JSON.stringify(entries, null, 2) + "\n");
console.log(`Parsed ${entries.length} hotels → ${out}`);
