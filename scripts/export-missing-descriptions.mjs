/**
 * Export ALL onboarding_hotels senza descrizione IT.
 * Output in data/n8n/missing-descriptions/
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Missing Supabase env");
  process.exit(1);
}

const PAGE = 1000;
const BLOCK_SIZE = 35;
const select =
  "id,slug,nome,city_name,indirizzo,lat,lng,email,website,phone";

async function fetchPage(from) {
  const endpoint =
    url +
    `/rest/v1/onboarding_hotels?select=${select}` +
    "&description=is.null&main_photo_url=not.is.null&indirizzo=not.is.null" +
    `&order=city_name.asc,nome.asc&offset=${from}&limit=${PAGE}`;

  const res = await fetch(endpoint, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data;
}

const hotels = [];
for (let from = 0; ; from += PAGE) {
  const page = await fetchPage(from);
  if (!page.length) break;
  hotels.push(...page);
  process.stdout.write(`\rFetched ${hotels.length}...`);
  if (page.length < PAGE) break;
}
console.log(`\nTotal: ${hotels.length}`);

const outDir = resolve(__dirname, "../data/n8n/missing-descriptions");
mkdirSync(outDir, { recursive: true });

function hotelPromptBlock(h, index) {
  const lat = h.lat ?? "—";
  const lng = h.lng ?? "—";
  return [
    `${index + 1}. ${h.nome}`,
    `ID: ${h.id}`,
    `Slug: ${h.slug}`,
    `Nome: ${h.nome}`,
    `Comune / Provincia: ${h.city_name || "—"}`,
    `Indirizzo: ${h.indirizzo || "—"}`,
    `Coordinate: Lat ${lat}, Lng ${lng}`,
    `Website: ${h.website || "—"}`,
    `Email: ${h.email || ""}`,
    "",
  ].join("\n");
}

// Full JSON
writeFileSync(
  resolve(outDir, "all-hotels.json"),
  JSON.stringify({
    exported_at: new Date().toISOString(),
    count: hotels.length,
    criteria: "main_photo_url + indirizzo, description IS NULL",
    hotels,
  }, null, 2),
);

// CSV leggero
const csvLines = ["slug,nome,city_name,indirizzo,lat,lng,website,email,phone,id"];
for (const h of hotels) {
  const esc = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
  csvLines.push(
    [h.slug, h.nome, h.city_name, h.indirizzo, h.lat, h.lng, h.website, h.email, h.phone, h.id].map(esc).join(","),
  );
}
writeFileSync(resolve(outDir, "all-hotels.csv"), csvLines.join("\n"));

// Prompt blocks (35 hotel) per Gemini
const blocksDir = resolve(outDir, "prompt-blocks");
mkdirSync(blocksDir, { recursive: true });
const blockCount = Math.ceil(hotels.length / BLOCK_SIZE);
for (let b = 0; b < blockCount; b++) {
  const slice = hotels.slice(b * BLOCK_SIZE, (b + 1) * BLOCK_SIZE);
  const lines = ["ELENCO STRUTTURE (genera scheda per ogni riga):", ""];
  slice.forEach((h, i) => lines.push(hotelPromptBlock(h, b * BLOCK_SIZE + i)));
  const num = String(b + 1).padStart(3, "0");
  writeFileSync(resolve(blocksDir, `block-${num}-prompt.txt`), lines.join("\n"));
}

// Index
writeFileSync(
  resolve(outDir, "README.txt"),
  [
    "Hotel senza descrizione IT — export HotelsDrop",
    `Totale: ${hotels.length}`,
    `Esportato: ${new Date().toISOString()}`,
    "",
    "File:",
    "  all-hotels.json     — dati completi (import/script)",
    "  all-hotels.csv      — tabella (Excel)",
    "  prompt-blocks/      — blocchi da 35 per Gemini (block-001-prompt.txt ...)",
    "",
    `Blocchi prompt: ${blockCount} (× ${BLOCK_SIZE} hotel)`,
    "",
    "Prompt sistema: data/missing-descriptions/booking-seo-system-prompt.md",
  ].join("\n"),
);

console.log(`Written to ${outDir}`);
console.log(`JSON + CSV + ${blockCount} prompt blocks`);
