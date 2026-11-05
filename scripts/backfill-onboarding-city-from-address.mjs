/**
 * Corregge city_name su onboarding_hotels quando l'indirizzo CAP indica un comune
 * diverso da quello harvest (es. Bisacquino → Caltabellotta, Bardi → Compiano).
 *
 *   node scripts/backfill-onboarding-city-from-address.mjs                    # cross-provincia
 *   node scripts/backfill-onboarding-city-from-address.mjs --include-same-province
 *   node scripts/backfill-onboarding-city-from-address.mjs --include-same-province --apply
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "node:child_process";
import * as dotenv from "dotenv";
import {
  cityNamesMatch,
  extractCityFromCapAddress,
  resolveOnboardingCityName,
} from "./lib/extract-city-from-address.mjs";
import { buildStructureSlugBase, resolveUniqueSlug } from "./lib/seo-slug.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const PAGE = 1000;
const APPLY = process.argv.includes("--apply");
const INCLUDE_SAME_PROVINCE = process.argv.includes("--include-same-province");
const CONCURRENCY = 40;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

const comuneByName = new Map();
const usedSlugs = new Set();

function normalizeName(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function cityIdFromName(cityName, countryCode = "IT") {
  const slug = cityName
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${countryCode}-${slug}`;
}

async function loadComuniIndex() {
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from("comuni_italiani")
      .select("codice_istat, sigla_provincia, nome")
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    for (const row of data) {
      comuneByName.set(normalizeName(row.nome), row);
    }
    if (data.length < 1000) break;
  }
  console.log(`Indice comuni caricati: ${comuneByName.size}`);
}

async function loadUsedSlugs() {
  for (const table of ["onboarding_hotels", "hotel_accounts"]) {
    for (let from = 0; ; from += 1000) {
      const { data, error } = await sb.from(table).select("slug").not("slug", "is", null).range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (row.slug) usedSlugs.add(row.slug);
      }
      if (!data || data.length < 1000) break;
    }
  }
  console.log(`Slug in uso caricati: ${usedSlugs.size}`);
}

function resolveComune(cityName) {
  const variants = [cityName, cityName.replace(/^Reggio /, "Reggio di ")];
  for (const nome of variants) {
    const hit = comuneByName.get(normalizeName(nome));
    if (hit) return hit;
  }
  return null;
}

function planSlug(nome, cityName, prevSlug) {
  const base = buildStructureSlugBase(nome, cityName);
  const slug = resolveUniqueSlug(base, usedSlugs, prevSlug);
  usedSlugs.add(slug);
  return { slug };
}

async function syncLinkedHotel(onboardingId, cityName, cityId, slug, slugPrevious) {
  const { data: hotel } = await sb
    .from("hotel_accounts")
    .select("id, city_id, slug, slug_previous")
    .eq("onboarding_hotel_id", onboardingId)
    .maybeSingle();
  if (!hotel) return;

  const prevHotelSlugs = Array.isArray(hotel.slug_previous) ? hotel.slug_previous : [];
  const hotelSlugPrevious =
    hotel.slug && hotel.slug !== slug ? [...new Set([...prevHotelSlugs, hotel.slug])] : prevHotelSlugs;

  const { error: partialErr } = await sb
    .from("hotel_accounts")
    .update({
      city_name: cityName,
      slug,
      slug_previous: slugPrevious?.length ? slugPrevious : hotelSlugPrevious,
      country_code: "IT",
      country_name: "Italia",
    })
    .eq("id", hotel.id);
  if (partialErr) console.warn(`  ! hotel partial ${hotel.id}: ${partialErr.message}`);

  if (hotel.city_id !== cityId) {
    try {
      execSync(
        `node scripts/rewrite-hotel-city-id.mjs --hotel-id=${hotel.id} --city-id=${JSON.stringify(cityId)} --city-name=${JSON.stringify(cityName)} --apply`,
        { stdio: "pipe", cwd: resolve(__dirname, "..") },
      );
    } catch (err) {
      console.warn(`  ! hotel city_id ${hotel.id}:`, err.stderr?.toString()?.slice(0, 120) || err.message);
    }
  } else if (slug !== hotel.slug) {
    await sb.from("hotel_accounts").update({ slug, slug_previous: hotelSlugPrevious }).eq("id", hotel.id);
  }
}

await loadComuniIndex();
if (APPLY) await loadUsedSlugs();

const fixes = [];

for (let from = 0; ; from += PAGE) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, nome, slug, slug_previous, city_name, indirizzo")
    .not("indirizzo", "is", null)
    .range(from, from + PAGE - 1);
  if (error) {
    console.error(error.message);
    process.exit(1);
  }
  if (!data?.length) break;

  for (const row of data) {
    const capCity = extractCityFromCapAddress(row.indirizzo);
    if (!capCity || cityNamesMatch(capCity, row.city_name)) continue;

    const resolved = resolveOnboardingCityName({
      harvestCity: row.city_name ?? "",
      address: row.indirizzo,
    });
    if (cityNamesMatch(resolved, row.city_name)) continue;

    const harvestComune = resolveComune(row.city_name ?? "");
    const capComune = resolveComune(resolved);
    if (!capComune) continue;

    if (!INCLUDE_SAME_PROVINCE) {
      if (harvestComune?.sigla_provincia && capComune.sigla_provincia === harvestComune.sigla_provincia) {
        continue;
      }
    }

    fixes.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug,
      slugPrevious: Array.isArray(row.slug_previous) ? row.slug_previous : [],
      from: row.city_name,
      to: resolved,
      harvestProvince: harvestComune?.sigla_provincia ?? "?",
      capProvince: capComune.sigla_provincia,
      cityIstat: capComune.codice_istat,
    });
  }

  if (data.length < PAGE) break;
}

const modeLabel = INCLUDE_SAME_PROVINCE ? "CAP mismatch (incl. stessa provincia)" : "CAP + provincia diversa";
console.log(`Trovate ${fixes.length} strutture (${modeLabel})`);
for (const fix of fixes.slice(0, 30)) {
  console.log(`  ${fix.nome} (${fix.slug}): ${fix.from} [${fix.harvestProvince}] → ${fix.to} [${fix.capProvince}]`);
}
if (fixes.length > 30) console.log(`  ... +${fixes.length - 30} altre`);

if (!APPLY) {
  console.log("\nDRY RUN — aggiungi --apply per scrivere");
  process.exit(0);
}

let updated = 0;
for (let offset = 0; offset < fixes.length; offset += CONCURRENCY) {
  const chunk = fixes.slice(offset, offset + CONCURRENCY);
  await Promise.all(
    chunk.map(async (fix) => {
      const { slug, slugPrevious } = planSlug(fix.nome, fix.to, fix.slug);
      const mergedPrevious =
        fix.slug && fix.slug !== slug ? [...new Set([...fix.slugPrevious, fix.slug])] : fix.slugPrevious;

      const { error } = await sb
        .from("onboarding_hotels")
        .update({
          city_name: fix.to,
          city_istat: fix.cityIstat ?? null,
          slug,
          slug_previous: mergedPrevious,
        })
        .eq("id", fix.id);
      if (error) {
        console.warn(`  ! ${fix.nome}: ${error.message}`);
        return;
      }

      await syncLinkedHotel(fix.id, fix.to, cityIdFromName(fix.to), slug, mergedPrevious);
      updated += 1;
    }),
  );
  if (updated % 400 === 0 || offset + CONCURRENCY >= fixes.length) {
    console.log(`  Progress: ${updated}/${fixes.length}`);
  }
}

console.log(`\nAggiornate ${updated}/${fixes.length} strutture`);
process.exit(0);
