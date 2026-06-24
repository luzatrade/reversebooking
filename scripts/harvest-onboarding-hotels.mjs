/**
 * Harvest strutture ricettive reali da Google Places → onboarding_hotels.
 * Idempotente: deduplica su place_id, salta comuni già scansionati (salvo --force).
 *
 * Usage:
 *   node scripts/harvest-onboarding-hotels.mjs              # comuni non ancora scansionati
 *   node scripts/harvest-onboarding-hotels.mjs --force      # riscansiona tutti
 *   node scripts/harvest-onboarding-hotels.mjs --limit 50   # primi N comuni in coda
 *   node scripts/harvest-onboarding-hotels.mjs --comune Roma
 *   node scripts/harvest-onboarding-hotels.mjs --region "Emilia-Romagna"
 *   node scripts/harvest-onboarding-hotels.mjs --skip-photos
 *
 * Requires: GOOGLE_PLACES_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

import { randomUUID } from "crypto";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { appendFileSync, mkdirSync } from "fs";
import dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const googleKey = process.env.GOOGLE_PLACES_API_KEY;

if (!url || !serviceKey || !googleKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY o GOOGLE_PLACES_API_KEY in .env.local");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const MAX_PER_COMUNE = 20;
const SEARCH_DELAY_MS = 250;
const COMUNE_DELAY_MS = 150;
const LODGING_TYPES = new Set([
  "hotel",
  "lodging",
  "bed_and_breakfast",
  "guest_house",
  "hostel",
  "motel",
  "resort_hotel",
  "extended_stay_hotel",
  "campground",
  "rv_park",
]);

const args = process.argv.slice(2);
const force = args.includes("--force");
const skipPhotos = args.includes("--skip-photos");
const limitArg = args.find((a, i) => args[i - 1] === "--limit");
const limit = limitArg ? Number(limitArg) : null;
const comuneArg = args.find((a, i) => args[i - 1] === "--comune");
const regionArg = args.find((a, i) => args[i - 1] === "--region");

const logDir = resolve(__dirname, "../logs");
mkdirSync(logDir, { recursive: true });
const logPath = resolve(logDir, `harvest-onboarding-${new Date().toISOString().slice(0, 10)}.log`);

function log(line) {
  const msg = `[${new Date().toISOString()}] ${line}`;
  console.log(msg);
  appendFileSync(logPath, `${msg}\n`);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function slugify(value) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "struttura";
}

function isLodging(types) {
  return (types ?? []).some((t) => LODGING_TYPES.has(t));
}

function searchQueries(comune) {
  const base = `${comune.nome} ${comune.sigla_provincia}`;
  return [
    `hotel ${base} Italia`,
    `bed and breakfast ${base}`,
    `affittacamere ${base}`,
    `agriturismo ${base}`,
  ];
}

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.location",
  "places.nationalPhoneNumber",
  "places.internationalPhoneNumber",
  "places.websiteUri",
  "places.googleMapsUri",
  "places.photos",
  "places.types",
  "nextPageToken",
].join(",");

async function searchPlaces(textQuery, pageToken) {
  const body = {
    textQuery,
    languageCode: "it",
    regionCode: "IT",
    maxResultCount: 20,
  };
  if (pageToken) body.pageToken = pageToken;

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": googleKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Places search ${res.status}: ${errText.slice(0, 300)}`);
  }

  return res.json();
}

async function downloadPhoto(photoName) {
  const mediaUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=900&maxWidthPx=1200`;
  const res = await fetch(mediaUrl, { headers: { "X-Goog-Api-Key": googleKey } });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) return null;
  return sharp(buf).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

async function uploadPhoto(comune, place, buffer) {
  const id = randomUUID();
  const citySlug = slugify(comune.nome);
  const nameSlug = slugify(place.displayName?.text ?? "struttura");
  const path = `${citySlug}/${nameSlug}-${id.slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function placeExists(placeId) {
  const { data } = await sb.from("onboarding_hotels").select("id, main_photo_url").eq("place_id", placeId).maybeSingle();
  return data;
}

async function upsertHotel(comune, place, mainPhotoUrl) {
  const row = {
    place_id: place.id,
    nome: place.displayName?.text ?? "Struttura",
    indirizzo: place.formattedAddress ?? null,
    city_name: comune.nome,
    city_istat: comune.codice_istat,
    lat: place.location?.latitude ?? null,
    lng: place.location?.longitude ?? null,
    google_maps_url: place.googleMapsUri ?? null,
    website: place.websiteUri ?? null,
    phone: place.nationalPhoneNumber ?? place.internationalPhoneNumber ?? null,
    email: null,
    main_photo_url: mainPhotoUrl,
    status: "unclaimed",
  };

  const { error } = await sb.from("onboarding_hotels").upsert(row, { onConflict: "place_id" });
  if (error) throw error;
}

async function collectPlacesForComune(comune) {
  const byId = new Map();

  for (const query of searchQueries(comune)) {
    if (byId.size >= MAX_PER_COMUNE) break;

    let pageToken;
    let pages = 0;
    while (byId.size < MAX_PER_COMUNE && pages < 2) {
      await sleep(SEARCH_DELAY_MS);
      const data = await searchPlaces(query, pageToken);
      for (const place of data.places ?? []) {
        if (!isLodging(place.types)) continue;
        if (!byId.has(place.id)) byId.set(place.id, place);
        if (byId.size >= MAX_PER_COMUNE) break;
      }
      pageToken = data.nextPageToken;
      pages += 1;
      if (!pageToken) break;
    }
  }

  return [...byId.values()].slice(0, MAX_PER_COMUNE);
}

async function processComune(comune) {
  const places = await collectPlacesForComune(comune);
  let inserted = 0;
  let skipped = 0;
  let photos = 0;

  for (const place of places) {
    const existing = await placeExists(place.id);
    if (existing && !force) {
      skipped += 1;
      continue;
    }

    let photoUrl = existing?.main_photo_url ?? null;
    if (!skipPhotos && !photoUrl && place.photos?.[0]?.name) {
      try {
        const buf = await downloadPhoto(place.photos[0].name);
        if (buf) {
          photoUrl = await uploadPhoto(comune, place, buf);
          photos += 1;
        }
      } catch (err) {
        log(`  ! foto ${place.displayName?.text}: ${err.message ?? err}`);
      }
      await sleep(100);
    }

    await upsertHotel(comune, place, photoUrl);
    inserted += 1;
  }

  await sb.from("comuni_italiani").update({ last_scraped_at: new Date().toISOString() }).eq("id", comune.id);

  return { found: places.length, inserted, skipped, photos };
}

async function loadComuni() {
  const all = [];
  const pageSize = 1000;
  let from = 0;

  while (true) {
    let query = sb
      .from("comuni_italiani")
      .select("id, codice_istat, nome, provincia, sigla_provincia, regione, last_scraped_at")
      .order("nome", { ascending: true })
      .range(from, from + pageSize - 1);

    if (!force) query = query.is("last_scraped_at", null);
    if (comuneArg) query = query.ilike("nome", comuneArg);
    if (regionArg) query = query.eq("regione", regionArg);

    const { data, error } = await query;
    if (error) throw error;
    const batch = data ?? [];
    all.push(...batch);
    if (batch.length < pageSize) break;
    from += pageSize;
  }

  if (limit && Number.isFinite(limit)) return all.slice(0, limit);
  return all;
}

async function main() {
  log("HotelsDrop — harvest onboarding_hotels (Italia)");
  log(`force=${force} skipPhotos=${skipPhotos} limit=${limit ?? "none"} comune=${comuneArg ?? "all"} region=${regionArg ?? "all"}`);

  const comuni = await loadComuni();
  log(`Comuni in coda: ${comuni.length}`);
  if (!comuni.length) {
    log("Nessun comune da processare.");
    return;
  }

  let totalInserted = 0;
  let totalPhotos = 0;

  for (let i = 0; i < comuni.length; i += 1) {
    const comune = comuni[i];
    try {
      const stats = await processComune(comune);
      totalInserted += stats.inserted;
      totalPhotos += stats.photos;
      log(
        `[${i + 1}/${comuni.length}] ${comune.nome} (${comune.sigla_provincia}) — trovati ${stats.found}, nuovi/aggiornati ${stats.inserted}, skip ${stats.skipped}, foto ${stats.photos}`,
      );
    } catch (err) {
      log(`[${i + 1}/${comuni.length}] ERRORE ${comune.nome}: ${err.message ?? err}`);
    }
    await sleep(COMUNE_DELAY_MS);
  }

  const { count } = await sb.from("onboarding_hotels").select("*", { count: "exact", head: true });
  log(`=== FINE === inseriti/aggiornati in questa run: ${totalInserted}, foto caricate: ${totalPhotos}, totale onboarding_hotels: ${count}`);
}

main().catch((err) => {
  log(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
