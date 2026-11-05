/**
 * Build block-011-gemini-user.json from user-pasted markdown
 * (### N. Name, **ID:**, **Descrizione:**, **Description:**).
 *
 * Usage:
 *   node scripts/build-block-011-gemini-user-from-md.mjs
 *   node scripts/build-block-011-gemini-user-from-md.mjs --source data/gemini-responses/block-011-user-paste.md
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const i = process.argv.indexOf("--source");
  const source = i >= 0 ? process.argv[i + 1] : "data/gemini-responses/block-011-user-paste.md";
  return { source: resolve(process.cwd(), source) };
}

function parseSections(text) {
  const sections = text.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);
  const byId = {};

  for (const section of sections) {
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
    if (!description_en) {
      console.warn(`Skip ${idMatch[1]}: no EN description`);
      continue;
    }

    byId[idMatch[1]] = { description, description_en };
  }

  return byId;
}

function main() {
  const { source } = parseArgs();
  if (!existsSync(source)) {
    console.error(`File not found: ${source}`);
    console.error("Save the parent user Gemini paste to that path, then re-run.");
    process.exit(1);
  }

  const byId = parseSections(readFileSync(source, "utf8"));
  const block = JSON.parse(
    readFileSync(resolve(__dirname, "../data/missing-descriptions/blocks/block-011.json"), "utf8"),
  );

  const missing = [];
  for (const hotel of block.hotels) {
    if (!byId[hotel.id]) missing.push(`${hotel.slug} (${hotel.id})`);
  }

  if (missing.length) {
    console.error(`Missing ${missing.length} hotels in source:\n${missing.join("\n")}`);
    process.exit(1);
  }

  const outPath = resolve(__dirname, "../data/gemini-responses/block-011-gemini-user.json");
  writeFileSync(outPath, JSON.stringify(byId, null, 2) + "\n");
  console.log(`Written ${Object.keys(byId).length} entries → ${outPath}`);
}

main();
