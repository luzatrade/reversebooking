/**
 * Corregge strutture il cui indirizzo cade in un hub principale ma city_name è diverso
 * (pattern Albanuova: cercabili per nome ma assenti dal hub destinazione).
 *
 *   node scripts/fix-hub-city-mismatch-batch.mjs           # anteprima
 *   node scripts/fix-hub-city-mismatch-batch.mjs --apply   # scrive su Supabase
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "node:child_process";
import dotenv from "dotenv";
import { extractCityFromAddress, cityNamesMatch } from "./lib/extract-city-from-address.mjs";
import { buildStructureSlugBase, resolveUniqueSlug } from "./lib/seo-slug.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const APPLY = process.argv.includes("--apply");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const { majorWorldCities } = await import("../lib/constants/world-cities.ts");

const sb = createClient(url, key, { auth: { persistSession: false } });

function norm(v) {
  return v.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().trim();
}

const majorByNorm = new Map(majorWorldCities.map((c) => [norm(c.city_name), c]));

function hubCityId(cityName, countryCode = "IT") {
  const known = majorWorldCities.find(
    (c) => c.country_code === countryCode && norm(c.city_name) === norm(cityName),
  );
  if (known) return known.city_id;
  const slug = cityName
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${countryCode}-${slug}`;
}

async function loadOnboardingRows() {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .select("id, nome, slug, slug_previous, city_name, indirizzo, seo_indexable")
      .range(from, from + 999);
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}

async function loadUsedSlugs() {
  const used = new Set();
  for (const table of ["onboarding_hotels", "hotel_accounts"]) {
    for (let from = 0; ; from += 1000) {
      const { data, error } = await sb.from(table).select("slug").not("slug", "is", null).range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        if (row.slug) used.add(row.slug);
      }
      if (!data || data.length < 1000) break;
    }
  }
  return used;
}

function findHubMismatches(rows) {
  const fixes = [];
  for (const row of rows) {
    if (row.seo_indexable === false) continue;
    const addrCity = extractCityFromAddress(row.indirizzo ?? "");
    if (!addrCity || !row.city_name || cityNamesMatch(addrCity, row.city_name)) continue;
    const hub = majorByNorm.get(norm(addrCity));
    if (!hub || cityNamesMatch(row.city_name, hub.city_name)) continue;
    fixes.push({
      onboarding: row,
      newCityName: hub.city_name,
      newCityId: hub.city_id,
      addressCity: addrCity,
    });
  }
  return fixes;
}

async function loadLinkedHotel(onboardingId) {
  const { data, error } = await sb
    .from("hotel_accounts")
    .select("id, property_name, slug, slug_previous, city_name, city_id")
    .eq("onboarding_hotel_id", onboardingId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function applyFix(fix, usedSlugs) {
  const { onboarding, newCityName, newCityId } = fix;
  const hotel = await loadLinkedHotel(onboarding.id);
  const propertyName = hotel?.property_name ?? onboarding.nome;
  const reserved = onboarding.slug;
  const newSlug = resolveUniqueSlug(buildStructureSlugBase(propertyName, newCityName), usedSlugs, reserved);

  console.log(`\n• ${onboarding.nome}`);
  console.log(`  city: ${onboarding.city_name} → ${newCityName} (${newCityId})`);
  console.log(`  slug: ${onboarding.slug ?? "∅"} → ${newSlug}`);

  if (!APPLY) return { ok: true, newSlug };

  const onboardingPrev = Array.isArray(onboarding.slug_previous) ? onboarding.slug_previous : [];
  const onboardingPayload = {
    city_name: newCityName,
    slug: newSlug,
    slug_previous:
      onboarding.slug && onboarding.slug !== newSlug
        ? [...new Set([...onboardingPrev, onboarding.slug])]
        : onboardingPrev,
  };

  const { error: obErr } = await sb.from("onboarding_hotels").update(onboardingPayload).eq("id", onboarding.id);
  if (obErr) throw obErr;

  if (hotel) {
    const hotelPrev = Array.isArray(hotel.slug_previous) ? hotel.slug_previous : [];
    const hotelSlugPayload = {
      slug: newSlug,
      slug_previous:
        hotel.slug && hotel.slug !== newSlug ? [...new Set([...hotelPrev, hotel.slug])] : hotelPrev,
    };

    const { error: rpcErr } = await sb.rpc("admin_sync_hotel_location_from_onboarding", {
      p_onboarding_id: onboarding.id,
    });

    if (rpcErr?.message?.includes("Could not find the function")) {
      const hotelPayload = {
        city_name: newCityName,
        city_id: newCityId,
        country_code: "IT",
        country_name: "Italia",
        ...hotelSlugPayload,
      };
      const { error: hUpErr } = await sb.from("hotel_accounts").update(hotelPayload).eq("id", hotel.id);
      if (hUpErr?.message?.includes("non può essere modificata")) {
        await sb.from("hotel_accounts").update({ city_name: newCityName, ...hotelSlugPayload }).eq("id", hotel.id);
        execSync(
          `node scripts/rewrite-hotel-city-id.mjs --hotel-id=${hotel.id} --city-id=${JSON.stringify(newCityId)} --city-name=${JSON.stringify(newCityName)} --apply`,
          { stdio: "inherit", cwd: resolve(__dirname, "..") },
        );
      } else if (hUpErr) {
        throw hUpErr;
      }
    } else if (rpcErr) {
      throw rpcErr;
    } else {
      const { error: slugErr } = await sb.from("hotel_accounts").update(hotelSlugPayload).eq("id", hotel.id);
      if (slugErr) throw slugErr;
    }
  }

  if (newSlug !== onboarding.slug) usedSlugs.add(newSlug);
  return { ok: true, newSlug };
}

const rows = await loadOnboardingRows();
const fixes = findHubMismatches(rows);
const usedSlugs = await loadUsedSlugs();

console.log(`\n[fix-hub-city-mismatch-batch] ${fixes.length} strutture da correggere${APPLY ? "" : " (DRY RUN)"}\n`);

let ok = 0;
let fail = 0;
for (const fix of fixes) {
  try {
    await applyFix(fix, usedSlugs);
    ok += 1;
  } catch (err) {
    fail += 1;
    console.error(`  ✗ ${fix.onboarding.nome}:`, err instanceof Error ? err.message : err);
  }
}

console.log(`\n${APPLY ? "Applicati" : "Anteprima"}: ${ok} ok, ${fail} errori`);
if (!APPLY && fixes.length) console.log("\nAggiungi --apply per scrivere su Supabase.");
