/**
 * Import hotels from JSON with SEO descriptions (IT/EN) and optional photos.
 * Usage:
 *   node scripts/import-luxury-hotels-enriched.mjs --file data/italy-hotels-master-cards-50.json
 *   node scripts/import-luxury-hotels-enriched.mjs --file data/...json --dry-run
 *   node scripts/import-luxury-hotels-enriched.mjs --file data/...json --skip-photos
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";
import { spawnSync } from "child_process";
import dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { buildStructureSlugBase, isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");

function parseArgsEarly() {
  const args = process.argv.slice(2);
  const file = args.find((a, i) => args[i - 1] === "--file");
  return {
    file,
    dryRun: args.includes("--dry-run"),
    skipPhotos: args.includes("--skip-photos"),
  };
}

const earlyOpts = parseArgsEarly();
if (!earlyOpts.file) {
  console.error("Servono --file path/to/hotels.json");
  process.exit(1);
}

if (earlyOpts.dryRun) {
  const hotels = JSON.parse(readFileSync(resolve(process.cwd(), earlyOpts.file), "utf8"));
  const list = Array.isArray(hotels) ? hotels : hotels.hotels;
  console.log(`Dry-run: ${list.length} strutture da ${earlyOpts.file}\n`);
  for (const [i, hotel] of list.entries()) {
    console.log(`${i + 1}. ${hotel.name} — ${hotel.city} — slug=${hotel.slug ?? "(auto)"}`);
    console.log(`   IT chars: ${(hotel.description ?? "").length} | EN chars: ${(hotel.description_en ?? "").length}`);
  }
  process.exit(0);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const MAX_GALLERY = 4;

const PHOTO_MAP = {};

function slugify(value) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "struttura";
}

function manualPlaceId(slug) {
  return `manual:${slug}`;
}

function googleMapsSearchUrl(name, lat, lng) {
  const query = encodeURIComponent([name, lat, lng].filter((v) => v != null && v !== "").join(" "));
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function parseArgs() {
  return earlyOpts;
}

async function resolveCityIstat(cityName) {
  const variants = [cityName, cityName.replace(/^Reggio /, "Reggio di ")];
  for (const nome of variants) {
    const { data } = await sb
      .from("comuni_italiani")
      .select("codice_istat, nome")
      .ilike("nome", nome)
      .maybeSingle();
    if (data?.codice_istat) return data.codice_istat;
  }
  return null;
}

async function resolveCanonicalCityName(cityName) {
  const variants = [cityName, cityName.replace(/^Reggio /, "Reggio di ")];
  for (const nome of variants) {
    const { data } = await sb.from("comuni_italiani").select("nome").ilike("nome", nome).maybeSingle();
    if (data?.nome) return data.nome;
  }
  return cityName;
}

async function downloadImageBuffer(imageUrl, referer = null) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    Accept: "image/*,*/*",
  };
  if (referer) headers.Referer = referer;

  const res = await fetch(imageUrl, { headers, redirect: "follow" });
  if (res.ok) {
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length >= 500) return buf;
  }

  const curlArgs = ["-sL", "-A", headers["User-Agent"]];
  if (referer) curlArgs.push("-H", `Referer: ${referer}`);
  curlArgs.push(imageUrl);
  const curl = spawnSync("curl", curlArgs, { encoding: null, maxBuffer: 25 * 1024 * 1024 });
  if (curl.status !== 0 || !curl.stdout?.length || curl.stdout.length < 500) {
    throw new Error(`Download fallito (${res.status || curl.status}) ${imageUrl}`);
  }
  return curl.stdout;
}

async function downloadImage(imageUrl, referer = null) {
  const buf = await downloadImageBuffer(imageUrl, referer);
  return sharp(buf).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

async function uploadPhoto(cityName, hotelName, buffer) {
  const path = `${slugify(cityName)}/${slugify(hotelName)}-${randomUUID().slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function uploadHotelPhotos(cityName, hotelName, urls, referer = null) {
  const uploaded = [];
  for (const imageUrl of urls.slice(0, MAX_GALLERY)) {
    try {
      const buffer = await downloadImage(imageUrl, referer);
      const publicUrl = await uploadPhoto(cityName, hotelName, buffer);
      uploaded.push(publicUrl);
      console.log(`  Foto ${uploaded.length}: OK`);
    } catch (err) {
      console.warn(`  Foto skip: ${err.message}`);
    }
  }
  return uploaded;
}

async function getUsedSlugs() {
  const { data: slugRows } = await sb.from("onboarding_hotels").select("slug").not("slug", "is", null);
  const { data: hotelSlugRows } = await sb.from("hotel_accounts").select("slug").not("slug", "is", null);
  return new Set([
    ...(slugRows ?? []).map((row) => row.slug).filter(Boolean),
    ...(hotelSlugRows ?? []).map((row) => row.slug).filter(Boolean),
  ]);
}

async function findExistingHotel(hotel, slug, cityName) {
  if (hotel.place_id) {
    const { data } = await sb
      .from("onboarding_hotels")
      .select("id, place_id, slug, main_photo_url, gallery_photo_urls, status")
      .eq("place_id", hotel.place_id)
      .maybeSingle();
    if (data) return data;
  }

  const { data: bySlug } = await sb
    .from("onboarding_hotels")
    .select("id, place_id, slug, main_photo_url, gallery_photo_urls, status")
    .eq("slug", slug)
    .maybeSingle();
  if (bySlug) return bySlug;

  const { data: byName } = await sb
    .from("onboarding_hotels")
    .select("id, place_id, slug, main_photo_url, gallery_photo_urls, status")
    .ilike("nome", hotel.name)
    .ilike("city_name", cityName)
    .limit(1)
    .maybeSingle();
  return byName ?? null;
}

async function importHotel(hotel, usedSlugs, { skipPhotos = false } = {}) {
  const cityName = await resolveCanonicalCityName(hotel.city);
  const cityIstat = await resolveCityIstat(hotel.city);
  const slug = hotel.slug ?? buildStructureSlugBase(hotel.name, cityName);
  const existing = await findExistingHotel(hotel, slug, cityName);
  const placeId = existing?.place_id ?? hotel.place_id ?? manualPlaceId(slug);

  const baseRow = {
    place_id: placeId,
    nome: hotel.name,
    indirizzo: hotel.address,
    city_name: cityName,
    city_istat: cityIstat,
    lat: hotel.latitude ?? hotel.lat,
    lng: hotel.longitude ?? hotel.lng,
    google_maps_url: hotel.google_maps_url ?? googleMapsSearchUrl(hotel.name, hotel.latitude ?? hotel.lat, hotel.longitude ?? hotel.lng),
    website: hotel.website ?? null,
    phone: hotel.phone ?? null,
    email: hotel.email ?? hotel.suggested_email ?? null,
    description: hotel.description ?? null,
    description_en: hotel.description_en ?? null,
    status: existing?.status ?? "unclaimed",
  };

  let upserted;
  if (existing?.id) {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .update(baseRow)
      .eq("id", existing.id)
      .select("id, nome, city_name, slug, description, description_en, main_photo_url, gallery_photo_urls")
      .single();
    if (error) throw error;
    upserted = data;
    console.log(`  Aggiornato record esistente (${existing.place_id})`);
  } else {
    const { data, error } = await sb
      .from("onboarding_hotels")
      .upsert(baseRow, { onConflict: "place_id" })
      .select("id, nome, city_name, slug, description, description_en, main_photo_url, gallery_photo_urls")
      .single();
    if (error) throw error;
    upserted = data;
  }

  const photoUrls = hotel.photo_urls ?? PHOTO_MAP[slug] ?? [];
  let mainPhoto = upserted.main_photo_url;
  let gallery = Array.isArray(upserted.gallery_photo_urls) ? upserted.gallery_photo_urls : [];

  if (!skipPhotos && photoUrls.length) {
    console.log("  Carico foto ufficiali...");
    const referer = hotel.website ? new URL(hotel.website).origin + "/" : null;
    const uploaded = await uploadHotelPhotos(cityName, hotel.name, photoUrls, referer);
    if (uploaded.length) {
      mainPhoto = uploaded[0];
      gallery = uploaded.slice(1);
    }
  }

  if (!skipPhotos && !mainPhoto) {
    const { data: fullRow } = await sb
      .from("onboarding_hotels")
      .select("id, nome, city_name, city_istat, indirizzo, main_photo_url, status")
      .eq("id", upserted.id)
      .single();
    if (fullRow) {
      const photo = await setPlaceholderPhotoForHotel(sb, fullRow, { force: true });
      if (photo.updated) {
        mainPhoto = photo.photoUrl;
        console.log("  Foto placeholder caricata");
      }
    }
  }

  const seoRow = { ...baseRow, ...upserted, main_photo_url: mainPhoto, gallery_photo_urls: gallery };
  const seo_indexable = isOnboardingSeoIndexable(seoRow);

  const { data: final, error: updateError } = await sb
    .from("onboarding_hotels")
    .update({
      slug,
      seo_indexable,
      description: hotel.description ?? null,
      description_en: hotel.description_en ?? null,
      main_photo_url: mainPhoto,
      gallery_photo_urls: gallery.length ? gallery : null,
      google_maps_url: baseRow.google_maps_url,
      website: baseRow.website,
      phone: baseRow.phone,
      email: baseRow.email,
      indirizzo: baseRow.indirizzo,
      lat: baseRow.lat,
      lng: baseRow.lng,
      city_name: baseRow.city_name,
      city_istat: baseRow.city_istat,
    })
    .eq("id", upserted.id)
    .select("id, nome, city_name, slug, seo_indexable, description, description_en, main_photo_url, gallery_photo_urls, google_maps_url")
    .single();

  if (updateError) throw updateError;

  usedSlugs.add(slug);
  return final;
}

async function main() {
  const opts = parseArgs();
  const hotels = JSON.parse(readFileSync(resolve(process.cwd(), opts.file), "utf8"));
  const list = Array.isArray(hotels) ? hotels : hotels.hotels;

  const usedSlugs = await getUsedSlugs();
  console.log(`Import enriched: ${list.length} strutture da ${opts.file}\n`);

  for (const [i, hotel] of list.entries()) {
    console.log(`[${i + 1}/${list.length}] ${hotel.name} (${hotel.city})`);
    try {
      const row = await importHotel(hotel, usedSlugs, { skipPhotos: opts.skipPhotos });
      console.log(`  Slug: ${row.slug} | SEO: ${row.seo_indexable}`);
      console.log(`  IT: ${(row.description ?? "").slice(0, 60)}…`);
      console.log(`  EN: ${(row.description_en ?? "").slice(0, 60)}…`);
      console.log(`  Foto: main=${row.main_photo_url ? "sì" : "no"} gallery=${(row.gallery_photo_urls ?? []).length}`);
      console.log(`  URL: https://www.hotelsdrop.com/hotel/${row.slug}\n`);
    } catch (err) {
      console.error(`  ERRORE: ${err.message}\n`);
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
