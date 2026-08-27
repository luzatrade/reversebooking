/**
 * Corregge onboarding_hotels con city_name uguale al nome struttura (es. "B&B Casa Cosmano")
 * estraendo la città dall'indirizzo.
 *
 * Usage:
 *   node scripts/backfill-onboarding-city-names.mjs
 *   node scripts/backfill-onboarding-city-names.mjs --apply
 *   node scripts/backfill-onboarding-city-names.mjs --slug casa-cosmano-brancaleone --apply
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const apply = process.argv.includes("--apply");
const slugArg = process.argv.find((arg, index) => process.argv[index - 1] === "--slug") ?? null;

if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function namesMatch(a, b) {
  const left = normalizeText(a);
  const right = normalizeText(b);
  if (!left || !right) return false;
  return left === right || left.includes(right) || right.includes(left);
}

const COUNTRY_TOKENS = new Set(["italia", "italy", "it"]);

function cleanCityToken(value) {
  return value.replace(/^\d{5}\s+/, "").replace(/,\s*$/, "").trim();
}

function extractCityFromAddress(address) {
  if (!address?.trim()) return null;
  const text = address.trim();

  const capMatch = text.match(/\b(\d{5})\s*,?\s*([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]+?)(?:\s*,|\s+(?:Italia|Italy|IT|[A-Z]{2})\b|$)/i);
  if (capMatch?.[2]) {
    const city = cleanCityToken(capMatch[2]);
    if (city.length >= 2 && !COUNTRY_TOKENS.has(normalizeText(city))) return city;
  }

  const parts = text.split(",").map((part) => part.trim()).filter(Boolean);
  for (let index = parts.length - 1; index >= Math.max(0, parts.length - 3); index -= 1) {
    const part = cleanCityToken(parts[index] ?? "");
    if (!part || /^\d{5}$/.test(part) || /^[A-Z]{2}$/.test(part)) continue;
    if (COUNTRY_TOKENS.has(normalizeText(part))) continue;
    if (part.length >= 2 && !/^\d/.test(part)) return part;
  }

  return null;
}

function resolveCityName(row) {
  const structureName = String(row.nome ?? "").trim();
  const cityName = String(row.city_name ?? "").trim();
  const fromAddress = extractCityFromAddress(row.indirizzo);

  if (cityName && namesMatch(cityName, structureName)) {
    if (fromAddress && !namesMatch(fromAddress, structureName)) return fromAddress;
    return null;
  }

  if (fromAddress && cityName && normalizeText(fromAddress) !== normalizeText(cityName)) {
    const left = fromAddress.replace(/\s+[A-Z]{2}$/i, "").trim().toLowerCase();
    const right = cityName.replace(/\s+[A-Z]{2}$/i, "").trim().toLowerCase();
    if (left !== right && !left.startsWith(`${right} `) && !right.startsWith(`${left} `)) {
      return fromAddress.replace(/\s+[A-Z]{2}$/i, "").trim();
    }
  }

  return null;
}

let query = sb.from("onboarding_hotels").select("id, slug, nome, city_name, indirizzo");
if (slugArg) query = query.eq("slug", slugArg);

const { data, error } = await query;
if (error) {
  console.error(error.message);
  process.exit(1);
}

const fixes = [];
for (const row of data ?? []) {
  const resolved = resolveCityName(row);
  if (!resolved || normalizeText(resolved) === normalizeText(row.city_name)) continue;
  fixes.push({ ...row, resolvedCity: resolved });
}

if (!fixes.length) {
  console.log("Nessuna riga da correggere.");
  process.exit(0);
}

console.log(`${apply ? "Applico" : "Anteprima"} ${fixes.length} correzioni:`);
for (const row of fixes) {
  console.log(`- ${row.nome}`);
  console.log(`  slug: ${row.slug ?? row.id}`);
  console.log(`  city_name: "${row.city_name}" -> "${row.resolvedCity}"`);
  console.log(`  indirizzo: ${row.indirizzo ?? "(vuoto)"}`);
}

if (!apply) {
  console.log("\nAggiungi --apply per scrivere su Supabase.");
  process.exit(0);
}

for (const row of fixes) {
  const { error: updateError } = await sb
    .from("onboarding_hotels")
    .update({ city_name: row.resolvedCity })
    .eq("id", row.id);
  if (updateError) {
    console.error(`Errore su ${row.nome}:`, updateError.message);
    process.exit(1);
  }
}

console.log(`Aggiornate ${fixes.length} righe.`);
