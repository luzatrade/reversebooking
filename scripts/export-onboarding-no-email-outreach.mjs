/**
 * Export strutture onboarding SENZA email — per outreach manuale (tel/sito).
 *
 * Usage:
 *   node scripts/export-onboarding-no-email-outreach.mjs
 *   node scripts/export-onboarding-no-email-outreach.mjs --csv
 *   node scripts/export-onboarding-no-email-outreach.mjs --city Catania
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const cityFlag = process.argv.indexOf("--city");
const cityFilter =
  cityFlag !== -1 && process.argv[cityFlag + 1] && !process.argv[cityFlag + 1].startsWith("--")
    ? process.argv[cityFlag + 1]
    : null;
const asCsv = process.argv.includes("--csv");

function norm(v) {
  const s = (v ?? "").toString().trim();
  return s.length ? s : null;
}

function outreachPriority(row) {
  const phone = norm(row.phone);
  const website = norm(row.website);
  if (phone && website) return "high";
  if (phone) return "medium";
  if (website) return "low";
  return "minimal";
}

async function fetchRows(sb) {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    let q = sb
      .from("onboarding_hotels")
      .select(
        "id, slug, nome, city_name, indirizzo, phone, website, google_maps_url, lat, lng, seo_indexable, status, main_photo_url, email",
      )
      .order("city_name")
      .order("nome")
      .range(from, from + 999);
    if (cityFilter) q = q.ilike("city_name", cityFilter);
    const { data, error } = await q;
    if (error) throw error;
    if (!data?.length) break;
    rows.push(...data.filter((r) => !norm(r.email)));
    if (data.length < 1000) break;
  }
  return rows.map((row) => ({
      id: row.id,
      slug: row.slug,
      nome: row.nome,
      city_name: row.city_name,
      indirizzo: row.indirizzo,
      phone: norm(row.phone),
      website: norm(row.website),
      google_maps_url: norm(row.google_maps_url),
      lat: row.lat,
      lng: row.lng,
      seo_indexable: Boolean(row.seo_indexable),
      status: row.status,
      has_photo: Boolean(norm(row.main_photo_url)),
      outreach_priority: outreachPriority(row),
      hotelsdrop_url: row.slug ? `https://www.hotelsdrop.com/hotel/${row.slug}` : null,
    }))
    .sort((a, b) => {
      const prio = { high: 0, medium: 1, low: 2, minimal: 3 };
      const pd = (prio[a.outreach_priority] ?? 9) - (prio[b.outreach_priority] ?? 9);
      if (pd !== 0) return pd;
      return (a.city_name ?? "").localeCompare(b.city_name ?? "", "it") || (a.nome ?? "").localeCompare(b.nome ?? "", "it");
    });
}

function toCsv(rows) {
  const headers = [
    "outreach_priority",
    "city_name",
    "nome",
    "phone",
    "website",
    "indirizzo",
    "google_maps_url",
    "hotelsdrop_url",
    "slug",
    "seo_indexable",
  ];
  const esc = (v) => {
    const s = v == null ? "" : String(v);
    return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [headers.join(","), ...rows.map((r) => headers.map((h) => esc(r[h])).join(","))].join("\n") + "\n";
}

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });
  const rows = await fetchRows(sb);

  const byPriority = rows.reduce(
    (acc, r) => {
      acc[r.outreach_priority] = (acc[r.outreach_priority] ?? 0) + 1;
      return acc;
    },
    {},
  );
  const byCity = rows.reduce(
    (acc, r) => {
      const c = r.city_name ?? "(senza città)";
      acc[c] = (acc[c] ?? 0) + 1;
      return acc;
    },
    {},
  );
  const topCities = Object.entries(byCity)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  const report = {
    exported_at: new Date().toISOString(),
    city_filter: cityFilter,
    total: rows.length,
    with_phone: rows.filter((r) => r.phone).length,
    with_website: rows.filter((r) => r.website).length,
    with_phone_and_website: rows.filter((r) => r.phone && r.website).length,
    seo_indexable: rows.filter((r) => r.seo_indexable).length,
    by_priority: byPriority,
    top_cities: Object.fromEntries(topCities),
    structures: rows,
  };

  const base = cityFilter ? `onboarding-no-email-outreach-${cityFilter.toLowerCase()}` : "onboarding-no-email-outreach";
  const jsonPath = resolve(__dirname, `../data/${base}.json`);
  writeFileSync(jsonPath, JSON.stringify(report, null, 2) + "\n");

  if (asCsv) {
    const csvPath = resolve(__dirname, `../data/${base}.csv`);
    writeFileSync(csvPath, toCsv(rows));
    console.log(`CSV → ${csvPath}`);
  }

  console.log(`Export ${rows.length} strutture senza email → ${jsonPath}`);
  console.log("Priorità:", byPriority);
  console.log("Online (seo_indexable):", report.seo_indexable);
  console.log("Con telefono:", report.with_phone, "| Con sito:", report.with_website);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
