/**
 * Import descrizioni da batch n8n (webhook → Cursor automation).
 *
 * Formato file:
 *   { "batch_id": "...", "hotels": [ { id, slug, description_it, description_en, email, address, ... } ] }
 *   oppure array diretto di hotel.
 *
 * Usage:
 *   node scripts/import-n8n-description-batch.mjs --file /tmp/n8n-batch.json
 *   node scripts/import-n8n-description-batch.mjs --file batch.json --validate-only
 *   cat batch.json | node scripts/import-n8n-description-batch.mjs --stdin
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { validateItalianDescription } = await import("./lib/seo-description-prompt.mjs");

const args = process.argv.slice(2);
const validateOnly = args.includes("--validate-only");
const withContacts = args.includes("--with-contacts");
const useStdin = args.includes("--stdin");
const fileArg = args.find((a, i) => args[i - 1] === "--file");

function readPayload() {
  const raw = useStdin
    ? readFileSync(0, "utf8")
    : readFileSync(resolve(process.cwd(), fileArg), "utf8");
  const parsed = JSON.parse(raw);
  const hotels = Array.isArray(parsed) ? parsed : parsed.hotels;
  if (!Array.isArray(hotels) || hotels.length === 0) {
    throw new Error("Payload invalido: serve array hotels o { hotels: [...] }");
  }
  const batchId =
    (Array.isArray(parsed) ? null : parsed.batch_id) ||
    new Date().toISOString().replace(/[:.]/g, "-");
  return { batchId, hotels };
}

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

async function fetchHotelById(id) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, city_name, indirizzo, lat, lng, website, email, description, description_en")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function fetchHotelBySlug(slug) {
  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, slug, nome, city_name, indirizzo, lat, lng, website, email, description, description_en")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data;
}

function normalizeRow(row, dbRow) {
  const description = (row.description_it ?? row.description ?? "").trim();
  const description_en = (row.description_en ?? "").trim();
  const indirizzo = (row.address ?? row.indirizzo ?? dbRow?.indirizzo ?? "").trim();
  const email = (row.email ?? "").trim();

  return {
    slug: dbRow?.slug ?? row.slug,
    description,
    description_en,
    indirizzo,
    ...(email ? { email } : {}),
    _db: dbRow,
    _input: row,
  };
}

async function main() {
  if (!useStdin && !fileArg) {
    console.error(
      "Usage: node scripts/import-n8n-description-batch.mjs --file path.json [--validate-only] [--with-contacts]",
    );
    process.exit(1);
  }

  const { batchId, hotels } = readPayload();
  console.log(`n8n batch: ${batchId} | ${hotels.length} hotel | validate-only=${validateOnly}\n`);

  const report = { batchId, ok: [], skip: [], invalid: [] };
  const updates = [];

  for (const row of hotels) {
    const id = row.id?.trim();
    const slug = row.slug?.trim();
    let dbRow = null;

    if (id) dbRow = await fetchHotelById(id);
    if (!dbRow && slug) dbRow = await fetchHotelBySlug(slug);

    if (!dbRow) {
      report.skip.push({ id, slug, reason: "hotel non trovato in onboarding_hotels" });
      console.warn(`SKIP: ${slug || id} — non trovato`);
      continue;
    }

    const norm = normalizeRow(row, dbRow);
    if (!norm.description && !norm.description_en) {
      report.skip.push({ slug: norm.slug, reason: "nessuna descrizione nel payload" });
      console.warn(`SKIP: ${norm.slug} — testo vuoto`);
      continue;
    }

    const issues = norm.description
      ? validateItalianDescription(norm.description, {
          nome: dbRow.nome,
          lat: dbRow.lat,
          lng: dbRow.lng,
        })
      : [];

    if (issues.length > 0) {
      report.invalid.push({ slug: norm.slug, issues });
      console.warn(`INVALID: ${norm.slug}`);
      for (const i of issues) console.warn(`  - ${i}`);
      if (validateOnly) continue;
      // In import mode: still queue for agent review — skip auto-import of invalid IT
      if (norm.description) {
        report.skip.push({ slug: norm.slug, reason: "validazione IT fallita", issues });
        continue;
      }
    }

    updates.push({
      slug: norm.slug,
      description: norm.description || undefined,
      description_en: norm.description_en || undefined,
      indirizzo: norm.indirizzo,
      ...(norm.email ? { email: norm.email } : {}),
    });
    report.ok.push(norm.slug);
    console.log(`OK: ${norm.slug}`);
  }

  const outDir = resolve(__dirname, "../data/gemini-responses/n8n");
  mkdirSync(outDir, { recursive: true });
  const stamp = batchId.replace(/[^\w-]/g, "_").slice(0, 64);
  const reportPath = resolve(outDir, `${stamp}-report.json`);
  const updatesPath = resolve(outDir, `${stamp}-updates.json`);
  writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
  writeFileSync(updatesPath, JSON.stringify(updates, null, 2) + "\n");
  console.log(`\nReport → ${reportPath}`);
  console.log(`Updates → ${updatesPath}`);
  console.log(`OK: ${report.ok.length} | Invalid: ${report.invalid.length} | Skip: ${report.skip.length}`);

  if (validateOnly) {
    process.exit(report.invalid.length > 0 ? 2 : 0);
  }

  if (updates.length === 0) {
    console.log("Nessun update da importare.");
    process.exit(report.invalid.length > 0 ? 2 : 0);
  }

  const r = spawnSync(
    "node",
    [
      resolve(__dirname, "import-gemini-block-descriptions.mjs"),
      "--file",
      updatesPath,
      ...(withContacts ? ["--with-contacts"] : []),
    ],
    { stdio: "inherit", cwd: resolve(__dirname, "..") },
  );
  process.exit(r.status ?? 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
