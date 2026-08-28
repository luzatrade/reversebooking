/**
 * Corregge city_name su onboarding_hotels quando l'indirizzo CAP indica un comune
 * in provincia diversa (es. harvest su Bisacquino PA ma "92010 Caltabellotta AG").
 *
 *   node scripts/backfill-onboarding-city-from-address.mjs           # anteprima
 *   node scripts/backfill-onboarding-city-from-address.mjs --apply   # scrive DB + sync hotel
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import {
  cityNamesMatch,
  extractCityFromCapAddress,
  resolveOnboardingCityName,
} from "./lib/extract-city-from-address.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const PAGE = 1000;
const APPLY = process.argv.includes("--apply");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const { createClient } = await import("@supabase/supabase-js");
const sb = createClient(url, key, { auth: { persistSession: false } });

const comuneByName = new Map();

function normalizeName(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

async function loadComuniIndex() {
  const { data, error } = await sb.from("comuni_italiani").select("codice_istat, sigla_provincia, nome");
  if (error) throw error;
  for (const row of data ?? []) {
    comuneByName.set(normalizeName(row.nome), row);
  }
}

function resolveComune(cityName) {
  const variants = [cityName, cityName.replace(/^Reggio /, "Reggio di ")];
  for (const nome of variants) {
    const hit = comuneByName.get(normalizeName(nome));
    if (hit) return hit;
  }
  return null;
}

async function syncHotelLocation(onboardingId) {
  const { error } = await sb.rpc("admin_sync_hotel_location_from_onboarding", {
    p_onboarding_id: onboardingId,
  });
  if (error && !error.message.includes("Could not find the function")) {
    console.warn(`  ! sync hotel ${onboardingId}: ${error.message}`);
  }
}

await loadComuniIndex();

const fixes = [];

for (let from = 0; ; from += PAGE) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, nome, slug, city_name, indirizzo")
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
    const capComune = resolveComune(capCity);
    if (!capComune) continue;
    if (harvestComune?.sigla_provincia && capComune.sigla_provincia === harvestComune.sigla_provincia) {
      continue;
    }

    fixes.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug,
      from: row.city_name,
      to: resolved,
      harvestProvince: harvestComune?.sigla_provincia ?? "?",
      capProvince: capComune.sigla_provincia,
    });
  }

  if (data.length < PAGE) break;
}

console.log(`Trovate ${fixes.length} strutture (CAP + provincia diversa)`);
for (const fix of fixes.slice(0, 30)) {
  console.log(`  ${fix.nome} (${fix.slug}): ${fix.from} [${fix.harvestProvince}] → ${fix.to} [${fix.capProvince}]`);
}
if (fixes.length > 30) console.log(`  ... +${fixes.length - 30} altre`);

if (!APPLY) {
  console.log("\nDRY RUN — aggiungi --apply per scrivere");
  process.exit(0);
}

let updated = 0;
for (const fix of fixes) {
  const capComune = resolveComune(fix.to);
  const { error } = await sb
    .from("onboarding_hotels")
    .update({ city_name: fix.to, city_istat: capComune?.codice_istat ?? null })
    .eq("id", fix.id);
  if (error) {
    console.warn(`  ! ${fix.nome}: ${error.message}`);
    continue;
  }
  await syncHotelLocation(fix.id);
  updated += 1;
}

console.log(`\nAggiornate ${updated}/${fixes.length} strutture`);
process.exit(0);
