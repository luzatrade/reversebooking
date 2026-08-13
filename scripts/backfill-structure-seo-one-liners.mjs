/**
 * Backfill one-liner IT+EN e ricalcolo seo_indexable (gate descrizione obbligatoria).
 *
 * Usage:
 *   node scripts/backfill-structure-seo-one-liners.mjs --dry-run --limit 100
 *   node scripts/backfill-structure-seo-one-liners.mjs --limit 100
 *   node scripts/backfill-structure-seo-one-liners.mjs --recalc-all
 *   node scripts/backfill-structure-seo-one-liners.mjs --recalc-all --dry-run
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { buildHotelSeoLine } = await import("./lib/structure-seo-copy.mjs");

const PAGE_SIZE = 1000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const recalcAll = args.includes("--recalc-all");
const limitFlagIndex = args.findIndex((a) => a === "--limit" || a.startsWith("--limit="));
const limit =
  limitFlagIndex >= 0
    ? args[limitFlagIndex].startsWith("--limit=")
      ? Number(args[limitFlagIndex].slice("--limit=".length))
      : Number(args[limitFlagIndex + 1])
    : null;
const citiesFlagIndex = args.findIndex((a) => a === "--cities" || a.startsWith("--cities="));
const citiesRaw =
  citiesFlagIndex >= 0
    ? args[citiesFlagIndex].startsWith("--cities=")
      ? args[citiesFlagIndex].slice("--cities=".length)
      : args[citiesFlagIndex + 1]
    : null;
const cities = citiesRaw
  ? citiesRaw
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
  : null;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

const SELECT_FIELDS =
  "id, slug, nome, city_name, indirizzo, main_photo_url, description, description_en, status, seo_indexable";

function hasDescription(row) {
  return Boolean((row.description ?? "").trim() || (row.description_en ?? "").trim());
}

async function fetchAllRows(filterFn) {
  const rows = [];
  for (let from = 0; ; from += PAGE_SIZE) {
    let query = sb
      .from("onboarding_hotels")
      .select(SELECT_FIELDS)
      .order("city_name", { ascending: true })
      .range(from, from + PAGE_SIZE - 1);

    const { data, error } = await query;
    if (error) throw error;
    if (!data?.length) break;

    for (const row of data) {
      if (filterFn(row)) rows.push(row);
    }
    if (data.length < PAGE_SIZE) break;
  }
  return rows;
}

async function recalcIndexableFlags() {
  console.log("[recalc] Ricalcolo seo_indexable su tutto onboarding_hotels…");
  const rows = await fetchAllRows(() => true);
  const toUpdate = [];

  let nowIndexable = 0;
  let nowBlocked = 0;

  for (const row of rows) {
    const next = isOnboardingSeoIndexable(row);
    if (next) nowIndexable += 1;
    else nowBlocked += 1;
    if (row.seo_indexable !== next) toUpdate.push({ id: row.id, slug: row.slug, next });
  }

  console.log(`[recalc] Totale righe: ${rows.length}`);
  console.log(`[recalc] Indexable: ${nowIndexable} | non indexable: ${nowBlocked} | da aggiornare: ${toUpdate.length}`);

  if (dryRun) {
    for (const item of toUpdate.slice(0, 20)) {
      console.log(`  [dry-recalc] ${item.slug} → ${item.next}`);
    }
    if (toUpdate.length > 20) console.log(`  … +${toUpdate.length - 20} altre righe`);
    return;
  }

  const BATCH = 100;
  for (let i = 0; i < toUpdate.length; i += BATCH) {
    const batch = toUpdate.slice(i, i + BATCH);
    await Promise.all(
      batch.map(({ id, next }) => sb.from("onboarding_hotels").update({ seo_indexable: next }).eq("id", id)),
    );
    if ((i + BATCH) % 1000 === 0 || i + BATCH >= toUpdate.length) {
      console.log(`[recalc] ${Math.min(i + BATCH, toUpdate.length)}/${toUpdate.length}`);
    }
  }
}

async function backfillOneLiners() {
  console.log("[backfill] Candidati senza description IT/EN…");
  let candidates = await fetchAllRows((row) => !hasDescription(row) && row.main_photo_url && row.indirizzo);

  if (cities?.length) {
    const citySet = new Set(cities.map((c) => c.toLocaleLowerCase("it-IT")));
    candidates = candidates.filter((row) => citySet.has((row.city_name ?? "").toLocaleLowerCase("it-IT")));
  }

  if (limit && Number.isFinite(limit)) {
    candidates = candidates.slice(0, limit);
  }

  console.log(`[backfill] Da processare: ${candidates.length}`);
  let updated = 0;

  for (const row of candidates) {
    const patch = {
      description: buildHotelSeoLine({ name: row.nome, cityName: row.city_name }, "it"),
      description_en: buildHotelSeoLine({ name: row.nome, cityName: row.city_name }, "en"),
    };
    const seoRow = { ...row, ...patch };
    patch.seo_indexable = isOnboardingSeoIndexable(seoRow);

    if (dryRun) {
      console.log(`  [dry] ${row.slug} | indexable=${patch.seo_indexable}`);
      console.log(`        ${patch.description.slice(0, 90)}…`);
      updated += 1;
      continue;
    }

    const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (error) throw error;
    updated += 1;
    console.log(`  ok ${row.slug} | ${row.city_name}`);
  }

  console.log(`[backfill] Aggiornati: ${updated}`);
}

async function main() {
  console.log(
    `[structure-seo] dryRun=${dryRun} recalcAll=${recalcAll} limit=${limit ?? "none"} cities=${cities?.join(",") ?? "all"}`,
  );

  if (recalcAll) {
    await recalcIndexableFlags();
  }

  if (!recalcAll || limit || cities) {
    await backfillOneLiners();
  }
}

main().catch((err) => {
  console.error("FATAL:", err.message ?? err);
  process.exit(1);
});
