/**
 * Genera blocchi da 50 hotel per richieste a Gemini (schede master HotelsDrop).
 * Usage: node scripts/generate-gemini-master-card-blocks.mjs [--block-size 50] [--max-blocks N]
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const OUT_DIR = resolve(__dirname, "../data/gemini-master-cards");
const BLOCK_SIZE = Number(process.argv.find((a, i) => process.argv[i - 1] === "--block-size") ?? 50);
const MAX_BLOCKS = process.argv.find((a, i) => process.argv[i - 1] === "--max-blocks")
  ? Number(process.argv[process.argv.indexOf("--max-blocks") + 1])
  : null;

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const PROMPT_HEADER = `Sei un copywriter SEO esperto di hospitality di lusso per HotelsDrop.com.

Per **ogni** struttura elencata sotto, cerca dati ufficiali (sito hotel, Booking.com, Google, catene) e produci la **scheda master completa** nel formato esatto indicato.

## Formato output richiesto (per ogni hotel)

### N. [Nome Hotel] ([Città])

* **Slug:** \`slug-kebab-case\`
* **Meta Title:** [Nome] | HotelsDrop
* **Meta Description:** [max 160 caratteri, italiano, con "su HotelsDrop.com"]
* **Keywords:** [4 keyword separate da virgola]
* **H1:** [Titolo editoriale italiano con trattino lungo –]

**La Scena: [Sottotitolo evocativo in italiano]**

[2-3 frasi narrative in italiano, seconda persona singolare, tono editoriale di lusso]

**Property Overview**

[Paragrafo in inglese: posizione, storia, design, camere, esperienza]

**Key Amenities**

* [5 bullet in inglese]

**Location & Nearby Attractions**

* [4-5 attrazioni con distanza/tempo]
* **Indirizzo:** [indirizzo completo]
* **Coordinate GPS:** Lat. XX.XXXXXX, Long. XX.XXXXXX
* **Telefono:** [+39 ...]
* **Email:** [email prenotazioni ufficiale]

---

## Regole

1. Usa i dati seed forniti; integra/correggi solo se trovi fonti ufficiali più accurate.
2. Property Overview, Key Amenities e Location devono essere in **inglese**.
3. La Scena e Meta Description in **italiano**.
4. Se mancano telefono/email/coordinate nel seed, cercali e inseriscili.
5. Slug: lowercase, trattini, max 72 caratteri, include città se utile.
6. Non inventare stelle Michelin o premi non verificabili.
7. Rispondi con **tutte** le strutture del blocco, nell'ordine indicato.

## Strutture da completare (blocco {{BLOCK_NUM}}/{{TOTAL_BLOCKS}})

`;

function isComplete(row) {
  return (row.description ?? "").includes("Servizi principali:") && (row.description_en ?? "").includes("Key Amenities:");
}

function slugify(value) {
  return (
    (value ?? "")
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 72) || "struttura"
  );
}

function suggestedSlug(row) {
  return row.slug || `${slugify(row.nome, 48)}-${slugify(row.city_name, 32)}`;
}

function missingFields(row) {
  const missing = [];
  if (!row.phone?.trim()) missing.push("telefono");
  if (!row.email?.trim()) missing.push("email");
  if (!row.website?.trim()) missing.push("website");
  if (row.lat == null || row.lng == null) missing.push("coordinate_gps");
  if (!isComplete(row)) {
    missing.push("la_scena_it", "property_overview_en", "key_amenities_en", "location_en", "meta_seo", "h1");
  }
  return missing;
}

function formatHotelSeed(h, globalIndex) {
  const lines = [
    `### ${globalIndex}. ${h.nome} (${h.city_name})`,
    "",
    "**Dati già noti (seed):**",
    `- Slug suggerito: \`${h.slug_suggerito}\``,
    `- Indirizzo: ${h.indirizzo || "DA CERCARE"}`,
  ];
  if (h.phone) lines.push(`- Telefono: ${h.phone}`);
  if (h.email) lines.push(`- Email: ${h.email}`);
  if (h.website) lines.push(`- Website: ${h.website}`);
  if (h.lat != null && h.lng != null) lines.push(`- GPS: ${h.lat}, ${h.lng}`);
  if (h.priority === "premier") lines.push(`- Priorità: **PREMIER LUXURY**`);
  if (h.priority === "partial") lines.push(`- Nota: ha descrizione generica da sostituire`);
  lines.push(`- Campi da completare: ${h.missing.join(", ")}`);
  lines.push("");
  return lines.join("\n");
}

async function fetchIncomplete() {
  const rows = [];
  let from = 0;
  while (true) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("id, nome, indirizzo, city_name, slug, phone, email, website, lat, lng, description, description_en")
      .order("city_name")
      .order("nome")
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data.filter((r) => !isComplete(r)));
    if (data.length < 1000) break;
    from += 1000;
  }
  return rows;
}

function loadPremierNotComplete(completeSlugs) {
  const premier = JSON.parse(readFileSync(resolve(__dirname, "../data/italy-premier-hotels-30.json"), "utf8"));
  const premierCompleteNames = new Set([
    "Hotel de Russie",
    "Hotel Hassler Roma",
    "Hotel Eden",
    "The St. Regis Rome",
    "Park Hyatt Milano",
    "Mandarin Oriental, Milan",
    "Armani Hotel Milano",
    "Four Seasons Hotel Firenze",
    "The St. Regis Florence",
    "Hotel Danieli",
    "Le Sirenuse",
    "Hotel Santa Caterina",
    "Mandarin Oriental, Lago di Como",
  ]);
  return premier
    .filter((h) => !premierCompleteNames.has(h.name))
    .map((h) => ({
      id: null,
      nome: h.name,
      indirizzo: h.address,
      city_name: h.city,
      slug: null,
      phone: null,
      email: null,
      website: null,
      lat: null,
      lng: null,
      description: null,
      description_en: null,
      priority: "premier",
      source: "italy-premier-hotels-30.json",
    }));
}

function normalizeRow(row) {
  const normalized = {
    id: row.id ?? null,
    nome: row.nome,
    indirizzo: row.indirizzo ?? null,
    city_name: row.city_name,
    slug: row.slug ?? null,
    phone: row.phone ?? null,
    email: row.email ?? null,
    website: row.website ?? null,
    lat: row.lat ?? null,
    lng: row.lng ?? null,
    priority: row.priority ?? (row.description && !isComplete(row) ? "partial" : "standard"),
    source: row.source ?? "onboarding_hotels",
  };
  normalized.slug_suggerito = suggestedSlug(normalized);
  normalized.missing = missingFields({ ...normalized, description: row.description, description_en: row.description_en });
  return normalized;
}

async function main() {
  console.log("Carico strutture incomplete da Supabase...");
  const dbRows = await fetchIncomplete();
  console.log(`  DB incomplete: ${dbRows.length}`);

  const premierRows = loadPremierNotComplete();
  console.log(`  Premier da aggiungere (non completi): ${premierRows.length}`);

  const partial = dbRows.filter((r) => (r.description ?? "").trim() && !isComplete(r));
  const standard = dbRows.filter((r) => !(r.description ?? "").trim());

  const premierSlugs = new Set(premierRows.map((r) => slugify(r.nome)));
  const dedupedStandard = [...partial, ...standard].filter((r) => {
    const key = slugify(r.nome);
    return !premierSlugs.has(key);
  });

  const ordered = [
    ...premierRows.map(normalizeRow),
    ...dedupedStandard.map((r) => normalizeRow({ ...r, priority: (r.description ?? "").trim() ? "partial" : "standard" })),
  ];

  const totalBlocks = Math.ceil(ordered.length / BLOCK_SIZE);
  const blocksToWrite = MAX_BLOCKS ? Math.min(MAX_BLOCKS, totalBlocks) : totalBlocks;

  mkdirSync(OUT_DIR, { recursive: true });

  const index = {
    generated_at: new Date().toISOString(),
    block_size: BLOCK_SIZE,
    total_hotels: ordered.length,
    total_blocks: totalBlocks,
    blocks_generated: blocksToWrite,
    priority_order: ["premier (17)", "partial descriptions (50)", "standard harvest (resto)"],
    usage: "Copia il contenuto di block-NNN-prompt.md in Gemini. Salva la risposta in block-NNN-response.md",
  };

  for (let b = 0; b < blocksToWrite; b++) {
    const chunk = ordered.slice(b * BLOCK_SIZE, (b + 1) * BLOCK_SIZE);
    const blockNum = b + 1;
    const pad = String(blockNum).padStart(3, "0");

    const json = {
      block: blockNum,
      total_blocks: totalBlocks,
      hotels: chunk.map((h, i) => ({
        index: b * BLOCK_SIZE + i + 1,
        ...h,
      })),
    };

    const promptBody = chunk
      .map((h, i) => formatHotelSeed(h, b * BLOCK_SIZE + i + 1))
      .join("\n");

    const prompt = PROMPT_HEADER.replace(/\{\{BLOCK_NUM\}\}/g, String(blockNum)).replace(
      /\{\{TOTAL_BLOCKS\}\}/g,
      String(totalBlocks)
    ) + promptBody;

    writeFileSync(resolve(OUT_DIR, `block-${pad}.json`), JSON.stringify(json, null, 2) + "\n");
    writeFileSync(resolve(OUT_DIR, `block-${pad}-prompt.md`), prompt);
  }

  index.blocks = Array.from({ length: blocksToWrite }, (_, i) => {
    const pad = String(i + 1).padStart(3, "0");
    const start = i * BLOCK_SIZE + 1;
    const end = Math.min((i + 1) * BLOCK_SIZE, ordered.length);
    const cities = [...new Set(ordered.slice(i * BLOCK_SIZE, (i + 1) * BLOCK_SIZE).map((h) => h.city_name))].slice(0, 5);
    return {
      block: i + 1,
      file: `block-${pad}-prompt.md`,
      hotels: end - start + 1,
      range: `${start}-${end}`,
      sample_cities: cities,
    };
  });

  writeFileSync(resolve(OUT_DIR, "INDEX.json"), JSON.stringify(index, null, 2) + "\n");

  const indexMd = `# Gemini Master Cards — Blocchi da ${BLOCK_SIZE} hotel

Generato: ${index.generated_at}

| Metrica | Valore |
|---------|--------|
| Hotel totali da completare | ${ordered.length} |
| Blocchi totali | ${totalBlocks} |
| Blocchi generati | ${blocksToWrite} |

## Come usare

1. Apri \`block-001-prompt.md\` (poi 002, 003…)
2. Copia tutto il contenuto in **Gemini**
3. Salva la risposta come \`block-001-response.md\`
4. Invia la risposta all'agente Cursor per l'import su Supabase

## Ordine priorità

1. **Blocchi 001**: hotel premier luxury (17) + prime strutture con descrizione parziale
2. **Blocchi successivi**: resto del catalogo harvest, ordinato per città

## Indice blocchi

| Blocco | Hotel | Range | Città (campione) |
|--------|-------|-------|------------------|
${index.blocks.map((b) => `| ${String(b.block).padStart(3, "0")} | ${b.hotels} | ${b.range} | ${b.sample_cities.join(", ")} |`).join("\n")}

## Formato scheda master (riferimento)

Vedi \`block-001-prompt.md\` per il template completo.
`;

  writeFileSync(resolve(OUT_DIR, "INDEX.md"), indexMd);

  console.log(`\nGenerati ${blocksToWrite} blocchi in ${OUT_DIR}`);
  console.log(`  Hotel totali: ${ordered.length}`);
  console.log(`  INDEX.md + INDEX.json creati`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
