/**
 * Import block 012 part 2 from structured JSON (description_it/en, email, address).
 *
 * Usage:
 *   node scripts/import-block-json-batch.mjs --file data/gemini-responses/block-012-part2.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const file = process.argv.find((a, i) => process.argv[i - 1] === "--file") || null;
if (!file) {
  console.error("Usage: node scripts/import-block-json-batch.mjs --file path.json");
  process.exit(1);
}

const sourcePath = resolve(process.cwd(), file);
const rows = JSON.parse(readFileSync(sourcePath, "utf8"));

const block = JSON.parse(
  readFileSync(resolve(__dirname, "../data/missing-descriptions/blocks/block-012.json"), "utf8"),
);
const byId = new Map(block.hotels.map((h) => [h.id, h]));

const updates = [];
for (const row of rows) {
  const hotel = byId.get(row.id);
  if (!hotel) {
    console.warn(`Skip unknown id: ${row.id}`);
    continue;
  }
  const slug = row.slug || hotel.slug;
  if (slug !== hotel.slug) {
    console.warn(`Slug note ${row.id}: json=${slug} block=${hotel.slug}`);
  }
  updates.push({
    slug: hotel.slug,
    description: row.description_it?.trim(),
    description_en: row.description_en?.trim(),
    indirizzo: row.address?.trim() || hotel.indirizzo,
    ...(row.email?.trim() ? { email: row.email.trim() } : {}),
  });
}

const outPath = resolve(__dirname, "../data/gemini-responses/block-012-updates-part2.json");
writeFileSync(outPath, JSON.stringify(updates, null, 2) + "\n");
console.log(`Built ${updates.length} rows → ${outPath}`);

const r = spawnSync(
  "node",
  [
    resolve(__dirname, "import-gemini-block-descriptions.mjs"),
    "--file",
    outPath,
    "--with-contacts",
  ],
  { stdio: "inherit", cwd: resolve(__dirname, "..") },
);
process.exit(r.status ?? 0);
