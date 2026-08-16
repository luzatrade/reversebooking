/**
 * Foto placeholder per onboarding: hero Unsplash per città (stesso set del frontend).
 */

import { randomUUID } from "crypto";
import sharp from "sharp";

const BUCKET = "hotel-photos";

/** photo-{id} segmenti Unsplash — allineati a lib/destination-slider/cityPhotos.ts */
const CITY_HERO_PHOTO = {
  "IT-REG": "1775188816339-181d3d8cb06b",
  "IT-ROM": "1552832230-c0197dd311b5",
  "IT-FLR": "1523906834658-6e24ef2386f9",
  "IT-VCE": "1508184089160-2758663ef519",
  "IT-NAP": "1775188816339-181d3d8cb06b",
  "IT-MIL": "1516296270211-f3ae5494e65d",
  "IT-PMO": "1568843434673-fa08a17c6ceb",
  "IT-CTA": "1568843434673-fa08a17c6ceb",
  "IT-VRN": "1516483638261-f4dbaf036963",
  "IT-BRI": "1491566102020-21838225c3c8",
  "IT-SOR": "1601581875309-fafbf2d3ed3a",
  "IT-TAO": "1523531294919-4bcd7c65e216",
  "FR-PAR": "1502602898657-3e91760cbb34",
  "GB-LON": "1513635269975-59663e0ac1ad",
  "ES-BCN": "1583422403895-507f2d4d4a48",
  "ES-MAD": "1539037110167-a9b6e4e4f4d4",
  "DE-BER": "1560969184-10fe8839e71f",
};

const DEFAULT_PHOTOS = [
  "1507525428034-b723cf961d3e",
  "1516483638261-f4dbaf036963",
  "1587046377996-01aa69d0e290",
  "1472207241423-9e30d66d4b0f",
];

const CITY_ALIASES = {
  "reggio calabria": "IT-REG",
  "reggio di calabria": "IT-REG",
  rome: "IT-ROM",
  roma: "IT-ROM",
  florence: "IT-FLR",
  firenze: "IT-FLR",
  venice: "IT-VCE",
  venezia: "IT-VCE",
  naples: "IT-NAP",
  napoli: "IT-NAP",
  milan: "IT-MIL",
  milano: "IT-MIL",
  palermo: "IT-PMO",
  catania: "IT-CTA",
  verona: "IT-VRN",
  london: "GB-LON",
  londra: "GB-LON",
  paris: "FR-PAR",
  parigi: "FR-PAR",
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

function normalize(value) {
  return (value ?? "").trim().toLowerCase();
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function resolveCityPhotoId(cityName, cityIstat = null) {
  const n = normalize(cityName);
  const alias = CITY_ALIASES[n];
  if (alias && CITY_HERO_PHOTO[alias]) return CITY_HERO_PHOTO[alias];

  if (cityIstat) {
    const byIstat = Object.entries(CITY_HERO_PHOTO).find(([id]) => id.endsWith(`-${cityIstat.slice(-3)}`));
    if (byIstat) return byIstat[1];
  }

  const slug = slugify(cityName);
  const syntheticId = `XX-${slug}`;
  const photoId = DEFAULT_PHOTOS[hashString(syntheticId) % DEFAULT_PHOTOS.length];
  return photoId;
}

export function unsplashUrl(photoId, width = 1200, height = 900) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;
}

export async function downloadPlaceholderBuffer(cityName, cityIstat = null) {
  const photoId = resolveCityPhotoId(cityName, cityIstat);
  const res = await fetch(unsplashUrl(photoId));
  if (!res.ok) throw new Error(`Download foto fallito (${res.status})`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) throw new Error("Immagine troppo piccola");
  return sharp(buf).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

export async function uploadPlaceholderPhoto(sb, cityName, hotelName, buffer) {
  const path = `${slugify(cityName)}/${slugify(hotelName)}-placeholder-${randomUUID().slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function setPlaceholderPhotoForHotel(sb, hotel, { force = false } = {}) {
  if (hotel.main_photo_url && !force) {
    return { updated: false, photoUrl: hotel.main_photo_url };
  }

  const buffer = await downloadPlaceholderBuffer(hotel.city_name, hotel.city_istat ?? null);
  const photoUrl = await uploadPlaceholderPhoto(sb, hotel.city_name, hotel.nome, buffer);

  const { error } = await sb
    .from("onboarding_hotels")
    .update({ main_photo_url: photoUrl })
    .eq("id", hotel.id);

  if (error) throw error;
  return { updated: true, photoUrl };
}
