/**
 * Backfill slug + seo_indexable per onboarding_hotels e hotel_accounts.
 *
 * Usage:
 *   node scripts/backfill-structure-slugs.mjs
 *   node scripts/backfill-structure-slugs.mjs --dry-run
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import {
  buildStructureSlugBase,
  isHotelAccountSeoIndexable,
  isOnboardingSeoIndexable,
  resolveUniqueSlug,
} from "./lib/seo-slug.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const dryRun = process.argv.includes("--dry-run");
const CONCURRENCY = 40;

if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

async function loadUsedSlugs() {
  const used = new Set();
  for (const table of ["onboarding_hotels", "hotel_accounts"]) {
    let from = 0;
    while (true) {
      const { data, error } = await sb.from(table).select("slug").not("slug", "is", null).range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (row.slug) used.add(row.slug);
      }
      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }
  return used;
}

async function fetchAll(table, select) {
  const rows = [];
  let from = 0;
  while (true) {
    const { data, error } = await sb.from(table).select(select).order("created_at", { ascending: true }).range(from, from + 999);
    if (error) throw error;
    rows.push(...(data ?? []));
    if (!data || data.length < 1000) break;
    from += 1000;
  }
  return rows;
}

function planUpdates(rows, pickName, pickCity, indexableFn, used) {
  const updates = [];
  let indexableCount = 0;

  for (const row of rows) {
    const slug = row.slug?.trim() || resolveUniqueSlug(buildStructureSlugBase(pickName(row), pickCity(row)), used, null);
    used.add(slug);
    const seo_indexable = indexableFn(row);
    if (seo_indexable) indexableCount += 1;

    if (row.slug !== slug || row.seo_indexable !== seo_indexable) {
      updates.push({ id: row.id, slug, seo_indexable, prevSlug: row.slug ?? null });
    }
  }

  return { updates, indexableCount };
}

async function applyUpdates(table, updates) {
  if (dryRun) {
    for (const item of updates.slice(0, 5)) {
      console.log(`[dry-run] ${table} ${item.id}: ${item.prevSlug ?? "∅"} → ${item.slug}`);
    }
    return updates.length;
  }

  let applied = 0;
  for (let offset = 0; offset < updates.length; offset += CONCURRENCY) {
    const chunk = updates.slice(offset, offset + CONCURRENCY);
    await Promise.all(
      chunk.map(async (item) => {
        const payload = { slug: item.slug, seo_indexable: item.seo_indexable };
        if (item.prevSlug && item.prevSlug !== item.slug) {
          const { data: existing } = await sb.from(table).select("slug_previous").eq("id", item.id).maybeSingle();
          const previous = Array.isArray(existing?.slug_previous) ? existing.slug_previous : [];
          payload.slug_previous = [...new Set([...previous, item.prevSlug])];
        }
        const { error } = await sb.from(table).update(payload).eq("id", item.id);
        if (error) throw error;
      }),
    );
    applied += chunk.length;
    if (applied % 400 === 0 || offset + CONCURRENCY >= updates.length) {
      console.log(`  ${table}: ${applied}/${updates.length} scritti`);
    }
  }
  return applied;
}

async function main() {
  console.log(dryRun ? "DRY RUN — nessuna scrittura" : "Backfill slug SEO in corso…");

  const used = await loadUsedSlugs();
  const onboarding = await fetchAll(
    "onboarding_hotels",
    "id, nome, city_name, indirizzo, main_photo_url, description, description_en, status, slug, seo_indexable",
  );
  const hotels = await fetchAll(
    "hotel_accounts",
    "id, property_name, city_name, full_address, main_photo_url, description, description_en, account_status, subscription_active, provider_kind, slug, seo_indexable",
  );

  console.log(`Onboarding: ${onboarding.length} righe`);
  console.log(`Hotel accounts: ${hotels.length} righe`);

  const onboardingPlan = planUpdates(
    onboarding,
    (row) => row.nome,
    (row) => row.city_name,
    isOnboardingSeoIndexable,
    used,
  );
  const hotelPlan = planUpdates(
    hotels,
    (row) => row.property_name,
    (row) => row.city_name,
    isHotelAccountSeoIndexable,
    used,
  );

  const onboardingApplied = await applyUpdates("onboarding_hotels", onboardingPlan.updates);
  const hotelApplied = await applyUpdates("hotel_accounts", hotelPlan.updates);

  console.log("\n--- Riepilogo ---");
  console.log(`Onboarding: ${onboardingApplied} aggiornati, ${onboardingPlan.indexableCount} indicizzabili`);
  console.log(`Hotel accounts: ${hotelApplied} aggiornati, ${hotelPlan.indexableCount} indicizzabili`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
