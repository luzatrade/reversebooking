/**
 * Ripristina indicizzabilità onboarding: foto placeholder + one-liner SEO + ricalcolo seo_indexable.
 *
 * Usage:
 *   node scripts/backfill-onboarding-indexable.mjs --dry-run
 *   node scripts/backfill-onboarding-indexable.mjs
 *   node scripts/backfill-onboarding-indexable.mjs --limit 50
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { buildHotelSeoLine } = await import("./lib/structure-seo-copy.mjs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const dryRun = process.argv.includes("--dry-run");
const limitArg = process.argv.find((a, i) => process.argv[i - 1] === "--limit");
const limit = limitArg ? Number(limitArg) : null;
const CONCURRENCY = 8;

if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

async function fetchAllMissing() {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("id, nome, city_name, city_istat, indirizzo, main_photo_url, description, description_en, status, seo_indexable, slug")
      .or("main_photo_url.is.null,description.is.null,description_en.is.null,seo_indexable.eq.false")
      .order("city_name", { ascending: true })
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return limit && Number.isFinite(limit) ? rows.slice(0, limit) : rows;
}

function needsDescription(row) {
  const it = (row.description ?? "").trim();
  const en = (row.description_en ?? "").trim();
  return it.length < 80 && en.length < 80;
}

async function processRow(row) {
  const patch = {};
  let photoAdded = false;
  let descAdded = false;

  if (!row.main_photo_url?.trim()) {
    if (dryRun) {
      photoAdded = true;
    } else {
      const result = await setPlaceholderPhotoForHotel(sb, row, { force: false });
      if (result.updated) {
        patch.main_photo_url = result.photoUrl;
        photoAdded = true;
      }
    }
  }

  if (needsDescription(row)) {
    const description = buildHotelSeoLine({ name: row.nome, cityName: row.city_name }, "it");
    const description_en = buildHotelSeoLine({ name: row.nome, cityName: row.city_name }, "en");
    patch.description = description;
    patch.description_en = description_en;
    descAdded = true;
  }

  const merged = { ...row, ...patch };
  const seo_indexable = isOnboardingSeoIndexable(merged);
  if (seo_indexable !== row.seo_indexable) {
    patch.seo_indexable = seo_indexable;
  }

  if (!Object.keys(patch).length) {
    return { id: row.id, nome: row.nome, skipped: true };
  }

  if (!dryRun) {
    const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (error) throw error;
  }

  return {
    id: row.id,
    nome: row.nome,
    photoAdded,
    descAdded,
    seo_indexable: patch.seo_indexable ?? row.seo_indexable,
  };
}

async function main() {
  const rows = await fetchAllMissing();
  console.log(`[backfill-indexable] candidati: ${rows.length} dryRun=${dryRun}`);

  let photos = 0;
  let descriptions = 0;
  let indexable = 0;
  let errors = 0;

  for (let offset = 0; offset < rows.length; offset += CONCURRENCY) {
    const chunk = rows.slice(offset, offset + CONCURRENCY);
    const results = await Promise.allSettled(chunk.map((row) => processRow(row)));
    for (const result of results) {
      if (result.status === "rejected") {
        errors += 1;
        console.error("ERR", result.reason?.message ?? result.reason);
        continue;
      }
      const value = result.value;
      if (value.skipped) continue;
      if (value.photoAdded) photos += 1;
      if (value.descAdded) descriptions += 1;
      if (value.seo_indexable) indexable += 1;
      console.log(`OK ${value.nome} indexable=${value.seo_indexable}`);
    }
  }

  console.log(`=== FINE === foto: ${photos}, descrizioni: ${descriptions}, ora indexable: ${indexable}, errori: ${errors}`);
}

main().catch((err) => {
  console.error(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
