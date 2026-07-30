/**
 * Import batch di strutture in onboarding_hotels.
 *
 * Usage:
 *   node scripts/import-onboarding-hotels-batch.mjs --file data/onboarding-import-batch.example.json
 *   node scripts/import-onboarding-hotels-batch.mjs --file my-hotels.json --manual --placeholder-photo
 *   node scripts/import-onboarding-hotels-batch.mjs --file my-hotels.json --dry-run
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function parseArgs() {
  const args = process.argv.slice(2);
  const get = (flag) => args.find((a, i) => args[i - 1] === flag) ?? null;
  return {
    file: get("--file"),
    manual: args.includes("--manual"),
    placeholderPhoto: args.includes("--placeholder-photo"),
    dryRun: args.includes("--dry-run"),
    delayMs: Number(get("--delay-ms") ?? 400),
  };
}

const opts = parseArgs();

if ((!url || !serviceKey) && !opts.dryRun) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb =
  url && serviceKey
    ? createClient(url, serviceKey, { auth: { persistSession: false } })
    : null;

function loadHotels(filePath) {
  const abs = resolve(process.cwd(), filePath);
  const raw = JSON.parse(readFileSync(abs, "utf8"));
  const hotels = Array.isArray(raw) ? raw : raw.hotels;
  if (!Array.isArray(hotels) || !hotels.length) {
    throw new Error("Il file deve contenere un array di strutture (o { hotels: [...] })");
  }
  return hotels;
}

function runSingleImport(hotel, { manual }) {
  return new Promise((resolvePromise, reject) => {
    const args = [
      resolve(__dirname, "import-onboarding-hotel.mjs"),
      "--name",
      hotel.name,
      "--city",
      hotel.city,
    ];
    if (hotel.address) args.push("--address", hotel.address);
    if (hotel.phone) args.push("--phone", hotel.phone);
    if (hotel.email ?? hotel.suggested_email) args.push("--email", hotel.email ?? hotel.suggested_email);
    if (hotel.latitude ?? hotel.lat) args.push("--lat", String(hotel.latitude ?? hotel.lat));
    if (hotel.longitude ?? hotel.lng) args.push("--lng", String(hotel.longitude ?? hotel.lng));
    if (hotel.website) args.push("--website", hotel.website);
    if (hotel.place_id) args.push("--place-id", hotel.place_id);
    if (manual) args.push("--manual");

    const child = spawn(process.execPath, args, {
      cwd: resolve(__dirname, ".."),
      stdio: ["ignore", "pipe", "pipe"],
      env: process.env,
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(stderr.trim() || stdout.trim() || `Import fallito per ${hotel.name}`));
        return;
      }
      const match = stdout.match(/"id":\s*"([^"]+)"/);
      resolvePromise({ id: match?.[1] ?? null, stdout });
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const opts = parseArgs();
  if (!opts.file) {
    console.error("Servono --file path/to/hotels.json");
    process.exit(1);
  }

  const hotels = loadHotels(opts.file);
  console.log(`Batch: ${hotels.length} strutture da ${opts.file}`);
  if (opts.dryRun) {
    for (const [i, hotel] of hotels.entries()) {
      console.log(`${i + 1}. ${hotel.name} — ${hotel.city}`);
    }
    return;
  }

  const results = { ok: 0, failed: 0, photos: 0, errors: [] };

  for (const [i, hotel] of hotels.entries()) {
    if (!hotel.name?.trim() || !hotel.city?.trim()) {
      results.failed += 1;
      results.errors.push({ name: hotel.name ?? "?", error: "name e city obbligatori" });
      continue;
    }

    console.log(`\n[${i + 1}/${hotels.length}] ${hotel.name} (${hotel.city})`);
    try {
      const { id } = await runSingleImport(hotel, { manual: opts.manual });
      results.ok += 1;

      if (opts.placeholderPhoto && id && sb) {
        const { data: row } = await sb
          .from("onboarding_hotels")
          .select("id, nome, city_name, city_istat, main_photo_url")
          .eq("id", id)
          .single();
        if (row) {
          const photo = await setPlaceholderPhotoForHotel(sb, row);
          if (photo.updated) {
            results.photos += 1;
            console.log(`  Foto placeholder: ${photo.photoUrl}`);
          }
        }
      }
    } catch (err) {
      results.failed += 1;
      results.errors.push({ name: hotel.name, error: err.message });
      console.error(`  ERRORE: ${err.message}`);
    }

    if (i < hotels.length - 1) await sleep(opts.delayMs);
  }

  console.log("\n--- Riepilogo batch ---");
  console.log(`OK: ${results.ok} | Errori: ${results.failed} | Foto: ${results.photos}`);
  if (results.errors.length) {
    console.log("Errori:");
    for (const item of results.errors) console.log(`  - ${item.name}: ${item.error}`);
  }

  if (results.failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
