/**
 * Import user-provided Gemini IT+EN descriptions for block 011.
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const BY_ID = JSON.parse(
  readFileSync(resolve(__dirname, "../data/gemini-responses/block-011-gemini-user.json"), "utf8"),
);

const block = JSON.parse(
  readFileSync(resolve(__dirname, "../data/missing-descriptions/blocks/block-011.json"), "utf8"),
);

const results = [];
for (const hotel of block.hotels) {
  const row = BY_ID[hotel.id];
  if (!row) throw new Error(`Missing user text for ${hotel.slug} (${hotel.id})`);
  results.push({
    slug: hotel.slug,
    description: row.description,
    description_en: row.description_en,
    indirizzo: hotel.indirizzo,
  });
}

const outPath = resolve(__dirname, "../data/gemini-responses/block-011-updates.json");
writeFileSync(outPath, JSON.stringify(results, null, 2) + "\n");
console.log(`Written ${results.length} rows → ${outPath}`);

const r = spawnSync(
  "node",
  [resolve(__dirname, "import-gemini-block-descriptions.mjs"), "--file", outPath],
  { stdio: "inherit", cwd: resolve(__dirname, "..") },
);
process.exit(r.status ?? 0);
