/**
 * Backfill email mancanti per onboarding_hotels (dal sito web Google Places).
 *
 * Usage:
 *   node scripts/backfill-onboarding-emails.mjs --comune London
 *   node scripts/backfill-onboarding-emails.mjs --comune Catania --centro --limit 50
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { fetchEmailFromWebsite } from "./lib/onboarding-email.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const EMAIL_DELAY_MS = 250;

const CITY_CENTRO = {
  catania: { lat: 37.502361, lng: 15.087269, radiusM: 2000 },
  palermo: { lat: 38.115687, lng: 13.361267, radiusM: 2500 },
  london: { lat: 51.5074, lng: -0.1278, radiusM: 2500 },
};

const args = process.argv.slice(2);
const centroMode = args.includes("--centro");
const comuneArg = args.find((a, i) => args[i - 1] === "--comune");
const limitArg = args.find((a, i) => args[i - 1] === "--limit");
const limit = limitArg ? Number(limitArg) : null;

function slugify(value) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function haversineMeters(lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371000;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function inCentro(row) {
  const centro = CITY_CENTRO[slugify(row.city_name)];
  if (!centro || row.lat == null || row.lng == null) return true;
  return haversineMeters(centro.lat, centro.lng, Number(row.lat), Number(row.lng)) <= centro.radiusM;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchCandidateRows() {
  const PAGE_SIZE = 1000;
  const rows = [];

  for (let from = 0; ; from += PAGE_SIZE) {
    let query = sb
      .from("onboarding_hotels")
      .select("id, nome, city_name, website, email, lat, lng")
      .is("email", null)
      .not("website", "is", null)
      .order("city_name", { ascending: true })
      .range(from, from + PAGE_SIZE - 1);

    if (comuneArg) query = query.ilike("city_name", comuneArg);

    const { data, error } = await query;
    if (error) throw error;
    if (!data?.length) break;

    rows.push(...data);
    if (data.length < PAGE_SIZE) break;
  }

  return rows;
}

async function main() {
  console.log(`[backfill-emails] comune=${comuneArg ?? "all"} centro=${centroMode} limit=${limit ?? "none"}`);

  let rows = await fetchCandidateRows();
  if (centroMode) rows = rows.filter(inCentro);
  if (limit && Number.isFinite(limit)) rows = rows.slice(0, limit);

  console.log(`Da processare: ${rows.length}`);
  let updated = 0;
  let skipped = 0;

  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const email = await fetchEmailFromWebsite(row.website);
    if (email) {
      const { error: updateError } = await sb.from("onboarding_hotels").update({ email }).eq("id", row.id);
      if (updateError) {
        console.log(`[${i + 1}/${rows.length}] errore ${row.nome}: ${updateError.message}`);
      } else {
        updated += 1;
        console.log(`[${i + 1}/${rows.length}] ok ${row.nome} → ${email}`);
      }
    } else {
      skipped += 1;
      console.log(`[${i + 1}/${rows.length}] skip ${row.nome}`);
    }
    await sleep(EMAIL_DELAY_MS);
  }

  console.log(`=== FINE === email inserite: ${updated}, skip: ${skipped}`);
}

main().catch((err) => {
  console.error(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
