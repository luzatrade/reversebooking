/**
 * Import luxury hotels from JSON with SEO descriptions and official photos.
 * Usage: node scripts/import-luxury-hotels-enriched.mjs --file data/italy-luxury-hotels-batch-3-5.json
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

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const MAX_GALLERY = 4;

const PHOTO_MAP = {
  "villa-d-este-cernobbio": [
    "https://www.villadeste.com/assets/img/landing-hero-media-full-desktop_2025-07-31-101023_wrzw.jpg",
    "https://www.villadeste.com/assets/img/transform/_1050x790_crop_center-center_none/02-imgtext-parallax-big.jpg",
    "https://www.villadeste.com/assets/img/transform/_1600x1840_crop_center-center_none/05-blocco-camere-big.jpg",
    "https://www.villadeste.com/assets/img/transform/_1860x1500_crop_center-center_none/13-img-text-classica-sportbenessere.jpg",
  ],
  "belmond-hotel-caruso-ravello": [
    "https://img.belmond.com/f_auto/t_2580x1299/photos/car/car-ext02.jpg",
    "https://img.belmond.com/f_auto/t_2580x1299/photos/car/car-gst-pool-la-piscina37.jpg",
    "https://img.belmond.com/f_auto/t_2580x1299/photos/car/car-acc-ssv-villa-margherita02.jpg",
    "https://img.belmond.com/f_auto/t_2580x1299/photos/car/car-din-restaurant-belvedere01.jpg",
  ],
  "grand-hotel-quisisana-capri": [
    "https://cdn.blastness.biz/media/666/top/thumbs/full/esterno-piscina02-1600x824.jpg",
    "https://cdn.blastness.biz/media/666/gallery/thumbs/medium/esterni02-1024x768.jpg",
    "https://media.blastness.info/666/top/video-teaser.jpg",
  ],
  "hotel-danieli-venezia": [
    "https://www.nozio.travel/nozioadm/storage/thumbs/500aacaba926b8dbdded3853c0b879e9_600x350_90_1749800342_thumbnail_adb115059e28d960fa8badfac5516667.jpg",
    "https://www.nozio.travel/nozioadm/storage/thumbs/a2ab2355ee6c221a464d04d6d7c4333f_600x350_90_1749800342_thumbnail_adb115059e28d960fa8badfac5516667.jpg",
    "https://www.nozio.travel/nozioadm/storage/thumbs/cea5b7917e3e96bd9ec6d76017d52d00_600x350_90_1749800342_thumbnail_adb115059e28d960fa8badfac5516667.jpg",
    "https://www.nozio.travel/nozioadm/storage/thumbs/8edea864931c4dee06dc7b27f58e3650_600x350_90_1749800342_thumbnail_adb115059e28d960fa8badfac5516667.jpg",
  ],
  "borgo-egnazia-fasano": [
    "https://www.borgoegnazia.com/assets/img/luxury-hotel-puglia.jpg",
    "https://www.borgoegnazia.com/assets/img/sections/BorgoEgnazia_Festa_piazza_2.jpg",
    "https://www.borgoegnazia.com/assets/img/sections/esploranew.jpg",
    "https://www.borgoegnazia.com/assets/img/sections/iltuoborgonew.jpg",
  ],
};

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
  const args = process.argv.slice(2);
  const file = args.find((a, i) => args[i - 1] === "--file");
  if (!file) {
    console.error("Servono --file path/to/hotels.json");
    process.exit(1);
  }
  return { file };
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

async function importHotel(hotel, usedSlugs) {
  const cityName = await resolveCanonicalCityName(hotel.city);
  const cityIstat = await resolveCityIstat(hotel.city);
  const slug = hotel.slug ?? buildStructureSlugBase(hotel.name, cityName);
  const placeId = hotel.place_id ?? manualPlaceId(slug);

  const baseRow = {
    place_id: placeId,
    nome: hotel.name,
    indirizzo: hotel.address,
    city_name: cityName,
    city_istat: cityIstat,
    lat: hotel.latitude ?? hotel.lat,
    lng: hotel.longitude ?? hotel.lng,
    google_maps_url: hotel.google_maps_url ?? googleMapsSearchUrl(hotel.name, hotel.latitude, hotel.longitude),
    website: hotel.website ?? null,
    phone: hotel.phone ?? null,
    email: hotel.email ?? hotel.suggested_email ?? null,
    description: hotel.description ?? null,
    description_en: hotel.description_en ?? null,
    status: "unclaimed",
  };

  const { data: upserted, error } = await sb
    .from("onboarding_hotels")
    .upsert(baseRow, { onConflict: "place_id" })
    .select("id, nome, city_name, slug, description, description_en, main_photo_url, gallery_photo_urls")
    .single();

  if (error) throw error;

  const photoUrls = hotel.photo_urls ?? PHOTO_MAP[slug] ?? [];
  let mainPhoto = upserted.main_photo_url;
  let gallery = Array.isArray(upserted.gallery_photo_urls) ? upserted.gallery_photo_urls : [];

  if (photoUrls.length) {
    console.log("  Carico foto ufficiali...");
    const referer = hotel.website ? new URL(hotel.website).origin + "/" : null;
    const uploaded = await uploadHotelPhotos(cityName, hotel.name, photoUrls, referer);
    if (uploaded.length) {
      mainPhoto = uploaded[0];
      gallery = uploaded.slice(1);
    }
  }

  if (!mainPhoto) {
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
      gallery_photo_urls: gallery,
      google_maps_url: baseRow.google_maps_url,
      website: baseRow.website,
      phone: baseRow.phone,
      email: baseRow.email,
    })
    .eq("id", upserted.id)
    .select("id, nome, city_name, slug, seo_indexable, description, description_en, main_photo_url, gallery_photo_urls, google_maps_url")
    .single();

  if (updateError) throw updateError;

  usedSlugs.add(slug);
  return final;
}

async function main() {
  const { file } = parseArgs();
  const hotels = JSON.parse(readFileSync(resolve(process.cwd(), file), "utf8"));
  const usedSlugs = await getUsedSlugs();

  console.log(`Import enriched: ${hotels.length} strutture da ${file}\n`);

  for (const [i, hotel] of hotels.entries()) {
    console.log(`[${i + 1}/${hotels.length}] ${hotel.name} (${hotel.city})`);
    try {
      const row = await importHotel(hotel, usedSlugs);
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
