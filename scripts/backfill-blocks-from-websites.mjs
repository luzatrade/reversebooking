/**
 * Backfill contatti reali da siti ufficiali per blocchi 1-3 (150 hotel).
 * Usage: node scripts/backfill-blocks-from-websites.mjs [--blocks 1,2,3] [--dry-run]
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { fetchContactsFromWebsite, phonesEquivalent } from "./lib/onboarding-website-contacts.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function parseArgs() {
  const blocksArg = process.argv.find((a) => a.startsWith("--blocks="));
  const blocks = blocksArg
    ? blocksArg.split("=")[1].split(",").map((n) => parseInt(n, 10))
    : [1, 2, 3];
  return { blocks, dryRun: process.argv.includes("--dry-run") };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isBadWebsite(url) {
  if (!url) return true;
  const u = url.toLowerCase();
  return (
    u.includes("facebook.com") ||
    u.includes("instagram.com") ||
    u.includes("airbnb") ||
    u.includes("abnb.me") ||
    u.includes("booking.com") ||
    u.includes("tripadvisor") ||
    u.includes("overplace.com")
  );
}

async function resolveCityIstat(cityName) {
  if (!cityName) return null;
  const { data } = await sb.from("comuni_italiani").select("codice_istat, nome").ilike("nome", cityName).maybeSingle();
  return data?.codice_istat ?? null;
}

async function resolveCanonicalCityName(cityName) {
  if (!cityName) return null;
  const { data } = await sb.from("comuni_italiani").select("nome").ilike("nome", cityName).maybeSingle();
  return data?.nome ?? cityName;
}

function loadBlockHotels(blockNums) {
  const hotels = [];
  for (const n of blockNums) {
    const file = resolve(process.cwd(), `data/gemini-master-cards/block-${String(n).padStart(3, "0")}.json`);
    const block = JSON.parse(readFileSync(file, "utf8"));
    for (const h of block.hotels) {
      hotels.push({
        block: n,
        slug: h.slug || h.slug_suggerito,
        nome: h.nome,
        indirizzo: h.indirizzo,
        city_name: h.city_name,
        phone_harvest: h.phone ?? null,
        website_seed: h.website ?? null,
        source: h.source,
      });
    }
  }
  return hotels;
}

async function backfillExisting(row, website, { dryRun }) {
  const contacts = await fetchContactsFromWebsite(website);
  const patch = {};

  if (contacts.email) patch.email = contacts.email;
  if (contacts.phone && !row.phone) patch.phone = contacts.phone;

  if (!Object.keys(patch).length) {
    return { updated: false, contacts, patch: {} };
  }

  const seoRow = { ...row, ...patch };
  patch.seo_indexable = isOnboardingSeoIndexable(seoRow);

  if (!dryRun) {
    const { error } = await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    if (error) throw error;
  }

  return { updated: true, contacts, patch };
}

async function importPremier(premier, contacts, { dryRun }) {
  const cityName = await resolveCanonicalCityName(premier.city);
  const cityIstat = await resolveCityIstat(premier.city);
  const placeId = `manual:${premier.slug}`;

  const row = {
    place_id: placeId,
    nome: premier.name,
    slug: premier.slug,
    indirizzo: premier.address,
    city_name: cityName,
    city_istat: cityIstat,
    website: premier.website,
    phone: contacts.phone ?? premier.phone ?? null,
    email: contacts.email ?? premier.email ?? null,
    status: "unclaimed",
    google_maps_url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${premier.name} ${premier.address}`)}`,
  };

  row.seo_indexable = isOnboardingSeoIndexable(row);

  if (dryRun) return { created: true, row };

  const { data: upserted, error } = await sb
    .from("onboarding_hotels")
    .upsert(row, { onConflict: "place_id" })
    .select("id, nome, slug, phone, email, website, main_photo_url, status, city_name, city_istat, indirizzo")
    .single();

  if (error) throw error;

  if (!upserted.main_photo_url) {
    await setPlaceholderPhotoForHotel(sb, upserted, { force: true });
  }

  return { created: true, row: upserted };
}

async function main() {
  const { blocks, dryRun } = parseArgs();
  const premierList = JSON.parse(readFileSync(resolve(process.cwd(), "data/block-001-premier-official.json"), "utf8"));
  const premierBySlug = Object.fromEntries(premierList.map((p) => [p.slug, p]));

  const hotels = loadBlockHotels(blocks);
  const report = {
    dryRun,
    blocks,
    total: hotels.length,
    emailUpdated: 0,
    phoneFilled: 0,
    skippedNoWebsite: 0,
    premierImported: 0,
    errors: [],
    details: [],
  };

  console.log(`Backfill siti ufficiali — blocchi ${blocks.join(",")}${dryRun ? " [DRY RUN]" : ""}\n`);

  for (let i = 0; i < hotels.length; i++) {
    const h = hotels[i];
    process.stderr.write(`[${i + 1}/${hotels.length}] ${h.nome}\n`);

    try {
      const { data: row } = await sb
        .from("onboarding_hotels")
        .select("id, slug, nome, phone, email, website, description, description_en, city_name, indirizzo, status, main_photo_url")
        .eq("slug", h.slug)
        .maybeSingle();

      if (!row && premierBySlug[h.slug]) {
        const premier = premierBySlug[h.slug];
        const contacts = await fetchContactsFromWebsite(premier.website);
        await importPremier(premier, contacts, { dryRun });
        report.premierImported++;
        report.details.push({ slug: h.slug, action: "premier_import", email: contacts.email, phone: contacts.phone });
        await sleep(400);
        continue;
      }

      if (!row) {
        report.details.push({ slug: h.slug, action: "skip_not_in_db" });
        await sleep(100);
        continue;
      }

      let website = row.website;
      if (isBadWebsite(website)) website = null;
      if (!website && h.website_seed && !isBadWebsite(h.website_seed)) website = h.website_seed;
      if (!website && premierBySlug[h.slug]?.website) website = premierBySlug[h.slug].website;

      if (!website) {
        report.skippedNoWebsite++;
        report.details.push({ slug: h.slug, action: "no_website" });
        await sleep(100);
        continue;
      }

      if (!row.website && website && !dryRun) {
        await sb.from("onboarding_hotels").update({ website }).eq("id", row.id);
      }

      const result = await backfillExisting({ ...row, website }, website, { dryRun });
      if (result.patch.email) report.emailUpdated++;
      if (result.patch.phone) report.phoneFilled++;
      report.details.push({
        slug: h.slug,
        action: result.updated ? "updated" : "no_new_data",
        website,
        email: result.contacts.email,
        phone: result.contacts.phone,
        patch: result.patch,
      });
    } catch (err) {
      report.errors.push({ slug: h.slug, error: err.message });
    }

    await sleep(350);
  }

  const outPath = resolve(process.cwd(), "data/gemini-responses/blocks-website-backfill-report.json");
  writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");

  console.log("\n=== RIEPILOGO ===");
  console.log(`Email aggiornate:     ${report.emailUpdated}`);
  console.log(`Telefoni aggiunti:    ${report.phoneFilled}`);
  console.log(`Premier importati:    ${report.premierImported}`);
  console.log(`Senza sito:           ${report.skippedNoWebsite}`);
  console.log(`Errori:               ${report.errors.length}`);
  console.log(`Report: ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
