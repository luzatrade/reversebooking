/**
 * Scarica e carica solo le foto mancanti per onboarding_hotels.
 *
 * Usage:
 *   GOOGLE_PLACES_API_KEY_TEMP=... node scripts/backfill-onboarding-photos.mjs --comune Catania --centro
 *   GOOGLE_PLACES_API_KEY_TEMP=... node scripts/backfill-onboarding-photos.mjs --comune Palermo --centro --limit 50
 */

import { randomUUID } from "crypto";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const googleKey = process.env.GOOGLE_PLACES_API_KEY_TEMP || process.env.GOOGLE_PLACES_API_KEY;
/** Chiave dedicata solo a Place Details + download foto (es. temp con billing attivo) */
const googlePhotosKey =
  process.env.GOOGLE_PLACES_PHOTOS_KEY?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY;

if (!url || !serviceKey || !googlePhotosKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY e chiave Google per le foto");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const PHOTO_DELAY_MS = 150;

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
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "struttura";
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

function isInCentro(row) {
  if (!centroMode) return true;
  const centro = CITY_CENTRO[slugify(row.city_name)];
  if (!centro || row.lat == null || row.lng == null) return false;
  return haversineMeters(centro.lat, centro.lng, row.lat, row.lng) <= centro.radiusM;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchPlacePhotoName(placeId) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: {
      "X-Goog-Api-Key": googlePhotosKey,
      "X-Goog-FieldMask": "photos",
    },
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Place details ${res.status}: ${errText.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.photos?.[0]?.name ?? null;
}

async function downloadPhoto(photoName) {
  const mediaUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=900&maxWidthPx=1200`;
  const res = await fetch(mediaUrl, { headers: { "X-Goog-Api-Key": googlePhotosKey } });
  if (!res.ok) {
    const errText = await res.text();
    const billing = errText.includes("BILLING_DISABLED") ? " (billing non attivo sul progetto Google della chiave)" : "";
    throw new Error(`Photo media ${res.status}${billing}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) return null;
  return sharp(buf).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

async function uploadPhoto(row, buffer) {
  const id = randomUUID();
  const citySlug = slugify(row.city_name);
  const nameSlug = slugify(row.nome);
  const path = `${citySlug}/${nameSlug}-${id.slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function loadRows() {
  let query = sb
    .from("onboarding_hotels")
    .select("id, place_id, nome, city_name, lat, lng")
    .is("main_photo_url", null)
    .not("place_id", "is", null)
    .order("city_name", { ascending: true });

  if (comuneArg) query = query.ilike("city_name", comuneArg);

  const { data, error } = await query;
  if (error) throw error;

  let rows = (data ?? []).filter(isInCentro);
  if (limit && Number.isFinite(limit)) rows = rows.slice(0, limit);
  return rows;
}

async function main() {
  const usingTemp = Boolean(process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim());
  const usingPhotosKey = Boolean(process.env.GOOGLE_PLACES_PHOTOS_KEY?.trim());
  console.log(
    `[backfill-photos] photosKey=${usingPhotosKey ? "PHOTOS_KEY" : usingTemp ? "TEMP" : "default"} comune=${comuneArg ?? "all"} centro=${centroMode} limit=${limit ?? "none"}`,
  );

  const rows = await loadRows();
  console.log(`Da processare: ${rows.length}`);

  let uploaded = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    try {
      const photoName = await fetchPlacePhotoName(row.place_id);
      if (!photoName) {
        skipped += 1;
        console.log(`[${i + 1}/${rows.length}] skip (no photo) ${row.nome}`);
        continue;
      }

      await sleep(PHOTO_DELAY_MS);
      const buf = await downloadPhoto(photoName);
      if (!buf) {
        failed += 1;
        console.log(`[${i + 1}/${rows.length}] fail download ${row.nome}`);
        continue;
      }

      const photoUrl = await uploadPhoto(row, buf);
      const { error } = await sb.from("onboarding_hotels").update({ main_photo_url: photoUrl }).eq("id", row.id);
      if (error) throw error;

      uploaded += 1;
      console.log(`[${i + 1}/${rows.length}] ok ${row.nome}`);
    } catch (err) {
      failed += 1;
      console.log(`[${i + 1}/${rows.length}] err ${row.nome}: ${err.message ?? err}`);
    }
  }

  console.log(`=== FINE === foto caricate: ${uploaded}, skip: ${skipped}, errori: ${failed}`);
}

main().catch((err) => {
  console.error(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
