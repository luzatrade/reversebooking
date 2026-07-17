/**
 * Pulizia storage Supabase “sicura” per quota: mantiene foto principale hotel e hero città.
 *
 * Fasi (default: solo anteprima, nessuna modifica):
 *   1. Rimuove foto galleria extra (DB + storage) — visivo: sparisce griglia sotto scheda hotel
 *   2. Rimuove POI città oltre la hero (city_media position > min) — visivo: invariato su hub/home
 *   3. Elimina file orphan non referenziati nel DB
 *   4. Opzionale --recompress-mains: ricomprime main_photo in WebP più leggero (stesso look a schermo)
 *
 * Uso:
 *   node scripts/prune-storage-safe.mjs
 *   node scripts/prune-storage-safe.mjs --apply
 *   node scripts/prune-storage-safe.mjs --apply --recompress-mains
 */
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const HOTEL_BUCKET = "hotel-photos";
const CITY_BUCKET = "city-media";

const args = new Set(process.argv.slice(2));
const APPLY = args.has("--apply");
const RECOMPRESS_MAINS = args.has("--recompress-mains");
const SKIP_GALLERIES = args.has("--skip-galleries");
const SKIP_CITY_MEDIA = args.has("--skip-city-media");
const SKIP_ORPHANS = args.has("--skip-orphans");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });

function storagePathFromPublicUrl(publicUrl, bucket) {
  if (!publicUrl || typeof publicUrl !== "string") return null;
  const marker = `/storage/v1/object/public/${bucket}/`;
  const index = publicUrl.indexOf(marker);
  if (index === -1) return null;
  return decodeURIComponent(publicUrl.slice(index + marker.length));
}

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function listBucketFiles(bucket, prefix = "", acc = []) {
  const limit = 1000;
  for (let offset = 0; ; offset += limit) {
    const { data, error } = await sb.storage.from(bucket).list(prefix, {
      limit,
      offset,
      sortBy: { column: "name", order: "asc" },
    });
    if (error) throw error;
    if (!data?.length) break;

    for (const entry of data) {
      const path = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.id == null) {
        await listBucketFiles(bucket, path, acc);
      } else {
        acc.push({ path, size: entry.metadata?.size ?? 0 });
      }
    }
    if (data.length < limit) break;
  }
  return acc;
}

async function collectReferencedPaths() {
  const mainHotelPaths = new Set();
  const galleryHotelPaths = new Set();
  const cityHeroPaths = new Set();

  async function scanHotels(table, mainField, galleryField) {
    let from = 0;
    while (true) {
      const { data, error } = await sb
        .from(table)
        .select(`${mainField}, ${galleryField}`)
        .range(from, from + 999);
      if (error) throw error;
      for (const row of data ?? []) {
        const mainPath = storagePathFromPublicUrl(row[mainField], HOTEL_BUCKET);
        if (mainPath) mainHotelPaths.add(mainPath);
        const gallery = Array.isArray(row[galleryField]) ? row[galleryField] : [];
        for (const item of gallery) {
          const galleryPath = storagePathFromPublicUrl(item, HOTEL_BUCKET);
          if (galleryPath) galleryHotelPaths.add(galleryPath);
        }
      }
      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  await scanHotels("onboarding_hotels", "main_photo_url", "gallery_photo_urls");
  await scanHotels("hotel_accounts", "main_photo_url", "gallery_photo_urls");

  const { data: cityRows, error: cityError } = await sb
    .from("city_media")
    .select("city_id, position, storage_path, public_url");
  if (cityError) throw cityError;

  const heroPositionByCity = new Map();
  for (const row of cityRows ?? []) {
    const current = heroPositionByCity.get(row.city_id);
    if (current == null || row.position < current) heroPositionByCity.set(row.city_id, row.position);
  }

  const cityMediaExtras = [];
  for (const row of cityRows ?? []) {
    const heroPos = heroPositionByCity.get(row.city_id) ?? row.position;
    if (row.storage_path && row.position === heroPos) cityHeroPaths.add(row.storage_path);
    if (row.position !== heroPos) cityMediaExtras.push(row);
  }

  return { mainHotelPaths, galleryHotelPaths, cityHeroPaths, cityMediaExtras };
}

async function clearGalleryUrls() {
  let galleryUrls = 0;
  let galleryFiles = 0;
  let freedBytes = 0;

  async function processTable(table) {
    let from = 0;
    while (true) {
      const { data, error } = await sb.from(table).select("id, gallery_photo_urls").range(from, from + 999);
      if (error) throw error;

      for (const row of data ?? []) {
        const gallery = Array.isArray(row.gallery_photo_urls) ? row.gallery_photo_urls : [];
        if (!gallery.length) continue;
        galleryUrls += gallery.length;

        for (const publicUrl of gallery) {
          const path = storagePathFromPublicUrl(publicUrl, HOTEL_BUCKET);
          if (!path) continue;
          if (APPLY) {
            const { error: removeError } = await sb.storage.from(HOTEL_BUCKET).remove([path]);
            if (removeError) console.warn(`  ⚠ rimozione ${path}: ${removeError.message}`);
          }
          galleryFiles += 1;
        }

        if (APPLY) {
          await sb.from(table).update({ gallery_photo_urls: [] }).eq("id", row.id);
        }
      }

      if (!data || data.length < 1000) break;
      from += 1000;
    }
  }

  await processTable("onboarding_hotels");
  await processTable("hotel_accounts");

  return { galleryUrls, galleryFiles, freedBytes };
}

async function pruneCityMediaExtras(cityMediaExtras) {
  let rows = 0;
  let files = 0;
  for (const row of cityMediaExtras) {
    rows += 1;
    if (row.storage_path) {
      files += 1;
      if (APPLY) {
        await sb.storage.from(CITY_BUCKET).remove([row.storage_path]);
        await sb.from("city_media").delete().eq("city_id", row.city_id).eq("storage_path", row.storage_path);
      }
    }
  }
  return { rows, files };
}

async function pruneOrphans(allHotelFiles, referencedHotelPaths, allCityFiles, referencedCityPaths) {
  const orphanHotel = allHotelFiles.filter((file) => !referencedHotelPaths.has(file.path));
  const orphanCity = allCityFiles.filter((file) => !referencedCityPaths.has(file.path));
  const orphanHotelBytes = orphanHotel.reduce((sum, file) => sum + file.size, 0);
  const orphanCityBytes = orphanCity.reduce((sum, file) => sum + file.size, 0);

  if (APPLY) {
    for (let index = 0; index < orphanHotel.length; index += 100) {
      const chunk = orphanHotel.slice(index, index + 100).map((file) => file.path);
      if (chunk.length) await sb.storage.from(HOTEL_BUCKET).remove(chunk);
    }
    for (let index = 0; index < orphanCity.length; index += 100) {
      const chunk = orphanCity.slice(index, index + 100).map((file) => file.path);
      if (chunk.length) await sb.storage.from(CITY_BUCKET).remove(chunk);
    }
  }

  return {
    orphanHotelCount: orphanHotel.length,
    orphanCityCount: orphanCity.length,
    orphanHotelBytes,
    orphanCityBytes,
  };
}

async function recompressMainPhotos(mainHotelPaths) {
  let processed = 0;
  let savedBytes = 0;

  for (const path of mainHotelPaths) {
    if (!/\.(jpe?g|png|webp)$/i.test(path)) continue;

    const { data: blob, error: downloadError } = await sb.storage.from(HOTEL_BUCKET).download(path);
    if (downloadError || !blob) continue;

    const input = Buffer.from(await blob.arrayBuffer());
    const before = input.length;
    const output = await sharp(input)
      .rotate()
      .resize({ width: 960, height: 640, fit: "cover", position: "attention", withoutEnlargement: true })
      .webp({ quality: 74 })
      .toBuffer();

    if (output.length >= before * 0.92) continue;

    if (APPLY) {
      const webpPath = path.replace(/\.(jpe?g|png|webp)$/i, ".webp");
      const { error: uploadError } = await sb.storage.from(HOTEL_BUCKET).upload(webpPath, output, {
        contentType: "image/webp",
        upsert: true,
      });
      if (uploadError) {
        console.warn(`  ⚠ upload ${webpPath}: ${uploadError.message}`);
        continue;
      }
      if (webpPath !== path) {
        await sb.storage.from(HOTEL_BUCKET).remove([path]);
      }
      const { data: publicUrlData } = sb.storage.from(HOTEL_BUCKET).getPublicUrl(webpPath);
      const newUrl = publicUrlData.publicUrl;
      await sb.from("onboarding_hotels").update({ main_photo_url: newUrl }).eq("main_photo_url", pathToPublicUrl(path));
      await sb.from("hotel_accounts").update({ main_photo_url: newUrl }).eq("main_photo_url", pathToPublicUrl(path));
    }

    processed += 1;
    savedBytes += Math.max(0, before - output.length);
  }

  return { processed, savedBytes };
}

function pathToPublicUrl(path) {
  return `${url.replace(/\/$/, "")}/storage/v1/object/public/${HOTEL_BUCKET}/${path}`;
}

async function main() {
  console.log(APPLY ? "=== MODALITÀ APPLY (modifiche reali) ===" : "=== DRY RUN (anteprima, aggiungi --apply) ===");
  if (RECOMPRESS_MAINS) console.log("→ Ricompressione main_photo attiva\n");

  let allHotelFiles = [];
  let allCityFiles = [];
  try {
    console.log("Scansione bucket…");
    allHotelFiles = await listBucketFiles(HOTEL_BUCKET);
    allCityFiles = await listBucketFiles(CITY_BUCKET);
  } catch (error) {
    console.error("\n❌ Supabase non raggiungibile o progetto bloccato per quota:");
    console.error(`   ${error.message}`);
    console.error("\nSe il progetto è bloccato, libera spazio manualmente:");
    console.error("   Dashboard Supabase → Storage → hotel-photos → elimina cartelle più pesanti");
    console.error("   Poi rilancia questo script.\n");
    process.exit(1);
  }

  const hotelBytes = allHotelFiles.reduce((sum, file) => sum + file.size, 0);
  const cityBytes = allCityFiles.reduce((sum, file) => sum + file.size, 0);
  console.log(`\nStorage attuale:`);
  console.log(`  ${HOTEL_BUCKET}: ${allHotelFiles.length} file, ${formatMb(hotelBytes)}`);
  console.log(`  ${CITY_BUCKET}: ${allCityFiles.length} file, ${formatMb(cityBytes)}`);
  console.log(`  Totale stimato: ${formatMb(hotelBytes + cityBytes)} (quota free ≈ 1024 MB)\n`);

  const { mainHotelPaths, galleryHotelPaths, cityHeroPaths, cityMediaExtras } = await collectReferencedPaths();
  const keepHotelPaths = new Set(mainHotelPaths);
  const keepCityPaths = new Set(cityHeroPaths);

  if (!SKIP_GALLERIES) {
    const gallery = await clearGalleryUrls();
    console.log(`Gallerie extra: ${gallery.galleryUrls} URL, ${gallery.galleryFiles} file da rimuovere`);
  }

  if (!SKIP_CITY_MEDIA) {
    const city = await pruneCityMediaExtras(cityMediaExtras);
    console.log(`City media (non hero): ${city.rows} righe, ${city.files} file da rimuovere`);
  }

  if (!SKIP_GALLERIES && APPLY) {
    for (const path of galleryHotelPaths) keepHotelPaths.delete(path);
  }

  if (!SKIP_ORPHANS) {
    const orphans = await pruneOrphans(allHotelFiles, keepHotelPaths, allCityFiles, keepCityPaths);
    console.log(
      `Orphan: ${orphans.orphanHotelCount} hotel (${formatMb(orphans.orphanHotelBytes)}), ${orphans.orphanCityCount} city (${formatMb(orphans.orphanCityBytes)})`,
    );
  }

  if (RECOMPRESS_MAINS) {
    console.log("\nRicompressione main_photo (960px WebP q74)…");
    const recompress = await recompressMainPhotos(mainHotelPaths);
    console.log(`  ${recompress.processed} foto ricompressi, risparmio stimato ${formatMb(recompress.savedBytes)}`);
  }

  console.log("\nVisivo preservato:");
  console.log("  ✓ Foto principale hotel (card vetrina + scheda SEO)");
  console.log("  ✓ Hero città (Destinazioni popolari + hub /destinazioni/)");
  console.log("  ✗ Griglia foto extra sotto scheda hotel (solo galleria)");

  if (!APPLY) {
    console.log("\n→ Per eseguire: node scripts/prune-storage-safe.mjs --apply");
    console.log("→ Se non basta sotto 1 GB: node scripts/prune-storage-safe.mjs --apply --recompress-mains");
  } else {
    console.log("\n✅ Pulizia completata. Attendi 5–15 min e verifica https://www.hotelsdrop.com/");
    console.log("   Poi rigenera hero statiche se serve: node scripts/export-city-heroes.mjs");
  }
}

await main();
