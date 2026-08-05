/**
 * Esporta strutture onboarding senza description IT in blocchi da N.
 *
 * Usage:
 *   node scripts/export-missing-description-blocks.mjs
 *   node scripts/export-missing-description-blocks.mjs --block-size 35 --max-blocks 5
 */

import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { buildGeminiDescriptionPromptHeader } from "./lib/gemini-description-rules.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const OUT_DIR = resolve(__dirname, "../data/missing-descriptions/blocks");
const DEFAULT_BLOCK_SIZE = 35;

function parseArgs() {
  const sizeArg = process.argv.find((a) => a.startsWith("--block-size="));
  const maxArg = process.argv.find((a) => a.startsWith("--max-blocks="));
  return {
    blockSize: sizeArg ? Number.parseInt(sizeArg.split("=")[1], 10) : DEFAULT_BLOCK_SIZE,
    maxBlocks: maxArg ? Number.parseInt(maxArg.split("=")[1], 10) : null,
  };
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function fetchMissingDescription() {
  const rows = [];
  let from = 0;
  while (true) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select(
        "id, slug, nome, city_name, indirizzo, phone, email, website, lat, lng, main_photo_url, status, description, description_en",
      )
      .not("main_photo_url", "is", null)
      .not("indirizzo", "is", null)
      .order("city_name", { ascending: true })
      .order("nome", { ascending: true })
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;

    for (const row of data) {
      if (!(row.description ?? "").trim()) rows.push(row);
    }

    if (data.length < 1000) break;
    from += 1000;
  }
  return rows;
}

function padBlock(n) {
  return String(n).padStart(3, "0");
}

async function main() {
  const { blockSize, maxBlocks } = parseArgs();
  const rows = await fetchMissingDescription();
  const totalBlocks = Math.ceil(rows.length / blockSize);
  const blocksToWrite = maxBlocks ? Math.min(maxBlocks, totalBlocks) : totalBlocks;

  mkdirSync(OUT_DIR, { recursive: true });

  const index = {
    exportedAt: new Date().toISOString(),
    blockSize,
    totalStructures: rows.length,
    totalBlocks,
    blocksWritten: blocksToWrite,
    criteria: "onboarding_hotels: main_photo_url + indirizzo presenti, description IT vuota",
    importScript:
      "node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-XXX-response.json",
    blocks: [],
  };

  for (let blockNum = 1; blockNum <= blocksToWrite; blockNum += 1) {
    const start = (blockNum - 1) * blockSize;
    const chunk = rows.slice(start, start + blockSize);
    const blockId = padBlock(blockNum);

    const payload = {
      block: blockNum,
      blockId,
      totalBlocks,
      blockSize: chunk.length,
      hotels: chunk.map((row) => ({
        id: row.id,
        slug: row.slug,
        nome: row.nome,
        city_name: row.city_name,
        indirizzo: row.indirizzo,
        lat: row.lat ?? null,
        lng: row.lng ?? null,
      })),
    };

    const jsonPath = resolve(OUT_DIR, `block-${blockId}.json`);
    writeFileSync(jsonPath, JSON.stringify(payload, null, 2), "utf8");

    const promptLines = [
      buildGeminiDescriptionPromptHeader(blockNum, totalBlocks, chunk.length),
    ];

    for (const [i, row] of chunk.entries()) {
      promptLines.push(
        `${i + 1}. **${row.nome}** — ${row.city_name}`,
        `   - slug: \`${row.slug ?? "DA GENERARE"}\``,
        `   - indirizzo: ${row.indirizzo ?? "—"}`,
        "",
      );
    }

    writeFileSync(resolve(OUT_DIR, `block-${blockId}-prompt.md`), promptLines.filter(Boolean).join("\n"), "utf8");

    index.blocks.push({
      blockId,
      file: `blocks/block-${blockId}.json`,
      prompt: `blocks/block-${blockId}-prompt.md`,
      count: chunk.length,
      cities: [...new Set(chunk.map((r) => r.city_name))],
    });
  }

  writeFileSync(resolve(__dirname, "../data/missing-descriptions/index.json"), JSON.stringify(index, null, 2), "utf8");

  console.log(`Strutture senza description: ${rows.length}`);
  console.log(`Blocchi (${blockSize} cad.): ${blocksToWrite} scritti su ${totalBlocks} totali`);
  console.log(`Cartella: data/missing-descriptions/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
