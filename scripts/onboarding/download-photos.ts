/**
 * CLI — Scarica le foto degli hotel da Google Places API e le carica su Supabase Storage.
 * Aggiorna main_photo_url nel DB con l'URL pubblico di Supabase.
 *
 * Uso:
 *   npx tsx scripts/onboarding/download-photos.ts
 *   npx tsx scripts/onboarding/download-photos.ts --limit 50
 *   npx tsx scripts/onboarding/download-photos.ts --dry-run
 */

import { resolve } from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../../.env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const BUCKET_NAME = "hotel-photos";
const CONCURRENCY = 5;
const DELAY_MS = 200;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : undefined;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

async function ensureBucket() {
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === BUCKET_NAME);
  if (!exists) {
    const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
      fileSizeLimit: 2 * 1024 * 1024, // 2MB
    });
    if (error) throw new Error(`Impossibile creare bucket: ${error.message}`);
    console.log(`✓ Bucket "${BUCKET_NAME}" creato`);
  } else {
    console.log(`✓ Bucket "${BUCKET_NAME}" già esistente`);
  }
}

async function downloadAndUpload(
  hotelId: string,
  hotelName: string,
  cityName: string,
  photoApiUrl: string,
): Promise<string | null> {
  try {
    const response = await fetch(photoApiUrl, { redirect: "follow" });
    if (!response.ok) {
      console.warn(`   ⚠ HTTP ${response.status} per ${hotelName}`);
      return null;
    }

    const contentType = response.headers.get("content-type") ?? "image/jpeg";
    const ext = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
    const buffer = Buffer.from(await response.arrayBuffer());

    const filePath = `${slugify(cityName)}/${slugify(hotelName)}-${hotelId.slice(0, 8)}.${ext}`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType,
        upsert: true,
      });

    if (error) {
      console.warn(`   ⚠ Upload fallito per ${hotelName}: ${error.message}`);
      return null;
    }

    const { data: publicUrl } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return publicUrl.publicUrl;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`   ⚠ Errore ${hotelName}: ${msg}`);
    return null;
  }
}

async function main() {
  console.log("\n📸 Download foto hotel da Google Places → Supabase Storage\n");

  if (dryRun) console.log("(modalità dry-run — nulla verrà scritto)\n");

  await ensureBucket();

  // Prendi tutti gli hotel con foto Google API (contengono "googleapis.com")
  let query = supabase
    .from("onboarding_hotels")
    .select("id, nome, city_name, main_photo_url")
    .like("main_photo_url", "%googleapis.com%")
    .order("city_name");

  if (limit) query = query.limit(limit);

  const { data: hotels, error } = await query;

  if (error) {
    console.error(`Errore query: ${error.message}`);
    process.exit(1);
  }

  if (!hotels?.length) {
    console.log("Nessun hotel con foto Google da scaricare.");
    return;
  }

  console.log(`\n📋 Hotel con foto da scaricare: ${hotels.length}\n`);

  let downloaded = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < hotels.length; i += CONCURRENCY) {
    const batch = hotels.slice(i, i + CONCURRENCY);

    const results = await Promise.all(
      batch.map(async (hotel) => {
        if (dryRun) {
          console.log(`   [DRY] ${hotel.nome} (${hotel.city_name})`);
          return { hotel, publicUrl: "dry-run" };
        }

        const publicUrl = await downloadAndUpload(
          hotel.id,
          hotel.nome,
          hotel.city_name,
          hotel.main_photo_url,
        );
        return { hotel, publicUrl };
      }),
    );

    for (const { hotel, publicUrl } of results) {
      if (dryRun) {
        downloaded++;
        continue;
      }

      if (publicUrl) {
        const { error: updateError } = await supabase
          .from("onboarding_hotels")
          .update({ main_photo_url: publicUrl })
          .eq("id", hotel.id);

        if (updateError) {
          console.warn(`   ⚠ Update DB fallito per ${hotel.nome}`);
          failed++;
        } else {
          console.log(`   ✓ ${hotel.nome} (${hotel.city_name})`);
          downloaded++;
        }
      } else {
        failed++;
      }
    }

    if (i + CONCURRENCY < hotels.length) {
      await sleep(DELAY_MS);
    }

    if ((i + CONCURRENCY) % 50 === 0 || i + CONCURRENCY >= hotels.length) {
      console.log(`\n   [${Math.min(i + CONCURRENCY, hotels.length)}/${hotels.length}] — ${downloaded} ok, ${failed} falliti\n`);
    }
  }

  console.log("\n╔═══════════════════════════════════════╗");
  console.log("║         REPORT FOTO                   ║");
  console.log("╠═══════════════════════════════════════╣");
  console.log(`║  Totali:      ${String(hotels.length).padStart(4)}                    ║`);
  console.log(`║  Scaricate:   ${String(downloaded).padStart(4)}                    ║`);
  console.log(`║  Fallite:     ${String(failed).padStart(4)}                    ║`);
  console.log("╚═══════════════════════════════════════╝");

  if (dryRun) console.log("\n(dry-run — nulla è stato scritto)");
}

main().catch(console.error);
