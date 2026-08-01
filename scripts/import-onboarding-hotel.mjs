/**
 * Importa una singola struttura in onboarding_hotels via Google Places.
 *
 * Usage:
 *   node scripts/import-onboarding-hotel.mjs --name "Correttori House" --city "Reggio Calabria"
 *   node scripts/import-onboarding-hotel.mjs --json data/correttori-house.json --placeholder-photo
 */

import { randomUUID } from "crypto";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sharp from "sharp";
import { fetchEmailFromWebsite } from "./lib/onboarding-email.mjs";
import {
  buildStructureSlugBase,
  isOnboardingSeoIndexable,
  resolveUniqueSlug,
} from "./lib/seo-slug.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { setPlaceholderPhotoForHotel } = await import("./lib/onboarding-placeholder-photo.mjs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const googleSearchKey = process.env.GOOGLE_PLACES_API_KEY_TEMP || process.env.GOOGLE_PLACES_API_KEY;
const googlePhotosKey =
  process.env.GOOGLE_PLACES_PHOTOS_KEY?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY;

if (!url || !serviceKey || !googleSearchKey) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY o chiave Google Places");
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const MAX_GALLERY_PHOTOS = 4;
const PHOTO_DELAY_MS = 120;
const HOTEL_TYPES = new Set(["hotel", "resort_hotel", "extended_stay_hotel", "motel"]);

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
  "places.editorialSummary",
].join(",");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isHotelPlace(place) {
  const types = place.types ?? [];
  return types.some((type) => HOTEL_TYPES.has(type));
}

function editorialDescription(place) {
  const text = place.editorialSummary?.text?.trim();
  return text || null;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const jsonPath = args.find((a, i) => args[i - 1] === "--json");
  const manual = args.includes("--manual");
  const placeholderPhoto = args.includes("--placeholder-photo");
  if (jsonPath) {
    const raw = JSON.parse(readFileSync(resolve(process.cwd(), jsonPath), "utf8"));
    return {
      manual,
      placeholderPhoto,
      name: raw.name,
      city: raw.city,
      address: raw.address ?? null,
      phone: raw.phone ?? null,
      email: raw.suggested_email ?? raw.email ?? null,
      lat: raw.latitude ?? raw.lat ?? null,
      lng: raw.longitude ?? raw.lng ?? null,
      website: raw.website ?? null,
      placeId: raw.place_id ?? null,
      country: raw.country ?? "Italy",
      description: raw.description ?? null,
      descriptionEn: raw.description_en ?? null,
    };
  }
  const get = (flag) => args.find((a, i) => args[i - 1] === flag) ?? null;
  return {
    manual,
    placeholderPhoto,
    name: get("--name"),
    city: get("--city"),
    address: get("--address"),
    phone: get("--phone"),
    email: get("--email"),
    lat: get("--lat") ? Number(get("--lat")) : null,
    lng: get("--lng") ? Number(get("--lng")) : null,
    website: get("--website"),
    placeId: get("--place-id"),
    country: get("--country") ?? "Italy",
    description: get("--description"),
    descriptionEn: get("--description-en"),
  };
}

function manualPlaceId(name, city) {
  return `manual:${slugify(name)}-${slugify(city)}`;
}

function googleMapsSearchUrl(name, lat, lng) {
  const query = encodeURIComponent([name, lat, lng].filter((v) => v != null && v !== "").join(" "));
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
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

function normalizePhone(value) {
  return (value ?? "").replace(/\D/g, "");
}

function scorePlace(place, input) {
  const name = (place.displayName?.text ?? "").toLowerCase();
  const target = (input.name ?? "").toLowerCase();
  let score = 0;
  if (isHotelPlace(place)) score += 35;
  else score -= 40;

  if (name.includes(target) || target.includes(name)) score += 50;
  else if (target.split(/\s+/).some((w) => w.length > 3 && name.includes(w))) score += 25;

  const lat = place.location?.latitude;
  const lng = place.location?.longitude;
  if (input.lat != null && input.lng != null && lat != null && lng != null) {
    const dist = haversineMeters(input.lat, input.lng, lat, lng);
    if (dist <= 100) score += 40;
    else if (dist <= 300) score += 25;
    else if (dist <= 800) score += 10;
    else score -= 20;
  }

  const placePhone = normalizePhone(place.nationalPhoneNumber ?? place.internationalPhoneNumber);
  const inputPhone = normalizePhone(input.phone);
  if (placePhone && inputPhone && (placePhone.endsWith(inputPhone.slice(-9)) || inputPhone.endsWith(placePhone.slice(-9)))) {
    score += 30;
  }

  const addr = (place.formattedAddress ?? "").toLowerCase();
  if (input.address && addr.includes(input.address.toLowerCase().split(",")[0].trim())) score += 15;

  return score;
}

async function searchPlaces(textQuery) {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": googleSearchKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery,
      languageCode: "it",
      regionCode: "IT",
      maxResultCount: 10,
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Places search ${res.status}: ${errText.slice(0, 300)}`);
  }
  return res.json();
}

async function fetchPlaceDetails(placeId) {
  if (!googlePhotosKey) return { photos: [], editorialSummary: null };
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: {
      "X-Goog-Api-Key": googlePhotosKey,
      "X-Goog-FieldMask": "photos,editorialSummary",
    },
  });
  if (!res.ok) return { photos: [], editorialSummary: null };
  const data = await res.json();
  return {
    photos: data.photos ?? [],
    editorialSummary: data.editorialSummary?.text?.trim() ?? null,
  };
}

async function downloadPhoto(photoName) {
  const mediaUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=900&maxWidthPx=1200`;
  const res = await fetch(mediaUrl, { headers: { "X-Goog-Api-Key": googlePhotosKey } });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) return null;
  return sharp(buf).rotate().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
}

async function uploadPhoto(cityName, placeName, buffer) {
  const path = `${slugify(cityName)}/${slugify(placeName)}-${randomUUID().slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from(BUCKET).upload(path, buffer, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function uploadGalleryPhotos(cityName, placeName, photoNames, existingGallery = []) {
  if (!googlePhotosKey || !photoNames.length) return existingGallery;

  const gallery = [...existingGallery];
  const namesToTry = photoNames.slice(1, 1 + MAX_GALLERY_PHOTOS - gallery.length);

  for (const photoName of namesToTry) {
    if (gallery.length >= MAX_GALLERY_PHOTOS) break;
    const buf = await downloadPhoto(photoName);
    if (!buf) continue;
    const url = await uploadPhoto(cityName, placeName, buf);
    gallery.push(url);
    console.log(`  Galleria foto ${gallery.length}/${MAX_GALLERY_PHOTOS}`);
    await sleep(PHOTO_DELAY_MS);
  }

  return gallery;
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

async function importFromGoogle(input) {
  const country = input.country ?? "Italy";
  const query = [input.name, input.address, input.city, country].filter(Boolean).join(" ");
  console.log(`Cerco su Google Places: "${query}"`);

  const data = await searchPlaces(query);
  const places = data.places ?? [];
  if (!places.length) {
    throw new Error("Nessun risultato Google Places");
  }

  const ranked = places
    .map((place) => ({ place, score: scorePlace(place, input) }))
    .sort((a, b) => b.score - a.score);

  const hotelCandidates = ranked.filter(({ place }) => isHotelPlace(place));
  const shortlist = hotelCandidates.length ? hotelCandidates : ranked;

  console.log("\nCandidati:");
  for (const { place, score } of shortlist.slice(0, 5)) {
    const hotelTag = isHotelPlace(place) ? "hotel" : "non-hotel";
    console.log(
      `  [${score}] ${place.displayName?.text} (${hotelTag}) — ${place.formattedAddress} (${place.id})`,
    );
  }

  const best = shortlist[0];
  if (!best || best.score < 25) {
    throw new Error("Match Google troppo debole, import annullato");
  }

  const place = best.place;
  if (!isHotelPlace(place)) {
    throw new Error("Il risultato Google non è classificato come hotel");
  }

  console.log(`\nSelezionato: ${place.displayName?.text} (score ${best.score})`);

  const { data: existing } = await sb
    .from("onboarding_hotels")
    .select("id, main_photo_url, gallery_photo_urls, email, description")
    .eq("place_id", place.id)
    .maybeSingle();

  const placeDetails = await fetchPlaceDetails(place.id);
  const photoNames = [
    ...(place.photos ?? []).map((photo) => photo.name),
    ...placeDetails.photos.map((photo) => photo.name),
  ].filter(Boolean);
  const uniquePhotoNames = [...new Set(photoNames)];

  let photoUrl = existing?.main_photo_url ?? null;
  if (!photoUrl && googlePhotosKey && uniquePhotoNames.length) {
    const buf = await downloadPhoto(uniquePhotoNames[0]);
    if (buf) {
      photoUrl = await uploadPhoto(input.city, place.displayName?.text ?? input.name, buf);
      console.log("Foto principale caricata su Supabase");
    }
  }

  const existingGallery = Array.isArray(existing?.gallery_photo_urls) ? existing.gallery_photo_urls : [];
  let galleryPhotoUrls = existingGallery;
  if (googlePhotosKey && uniquePhotoNames.length > 1 && galleryPhotoUrls.length < MAX_GALLERY_PHOTOS) {
    galleryPhotoUrls = await uploadGalleryPhotos(
      input.city,
      place.displayName?.text ?? input.name,
      uniquePhotoNames,
      galleryPhotoUrls,
    );
    if (galleryPhotoUrls.length > existingGallery.length) {
      console.log(`Galleria: ${galleryPhotoUrls.length} foto`);
    }
  }

  const description = existing?.description ?? editorialDescription(place) ?? placeDetails.editorialSummary ?? null;
  if (description && !existing?.description) {
    console.log(`Descrizione: ${description.slice(0, 80)}${description.length > 80 ? "…" : ""}`);
  }

  let email = existing?.email ?? input.email ?? null;
  if (!email && place.websiteUri) {
    email = await fetchEmailFromWebsite(place.websiteUri);
    if (email) console.log(`Email dal sito: ${email}`);
  }

  const cityName = await resolveCanonicalCityName(input.city);
  const cityIstat = await resolveCityIstat(input.city);

  return {
    place_id: place.id,
    nome: place.displayName?.text ?? input.name,
    indirizzo: place.formattedAddress ?? input.address,
    city_name: cityName,
    city_istat: cityIstat,
    lat: place.location?.latitude ?? input.lat,
    lng: place.location?.longitude ?? input.lng,
    google_maps_url: place.googleMapsUri ?? null,
    website: place.websiteUri ?? input.website,
    phone: place.nationalPhoneNumber ?? place.internationalPhoneNumber ?? input.phone,
    email,
    description: existing?.description ?? input.description ?? editorialDescription(place) ?? placeDetails.editorialSummary ?? null,
    description_en: existing?.description_en ?? input.descriptionEn ?? null,
    main_photo_url: photoUrl,
    gallery_photo_urls: galleryPhotoUrls.length ? galleryPhotoUrls : null,
    status: "unclaimed",
  };
}

async function importManual(input) {
  console.log("Import manuale (Google Places non disponibile o --manual attivo)");
  const cityName = await resolveCanonicalCityName(input.city);
  const cityIstat = await resolveCityIstat(input.city);
  const placeId = input.placeId ?? manualPlaceId(input.name, cityName);

  let email = input.email ?? null;
  if (!email && input.website) {
    email = await fetchEmailFromWebsite(input.website);
    if (email) console.log(`Email dal sito: ${email}`);
  }

  return {
    place_id: placeId,
    nome: input.name,
    indirizzo: input.address,
    city_name: cityName,
    city_istat: cityIstat,
    lat: input.lat,
    lng: input.lng,
    google_maps_url: googleMapsSearchUrl(input.name, input.lat, input.lng),
    website: input.website,
    phone: input.phone,
    email,
    description: input.description ?? null,
    description_en: input.descriptionEn ?? null,
    main_photo_url: null,
    status: "unclaimed",
  };
}

async function assignOnboardingSeoFields(record) {
  const { data: slugRows } = await sb.from("onboarding_hotels").select("slug").not("slug", "is", null);
  const { data: hotelSlugRows } = await sb.from("hotel_accounts").select("slug").not("slug", "is", null);
  const used = new Set([
    ...(slugRows ?? []).map((row) => row.slug).filter(Boolean),
    ...(hotelSlugRows ?? []).map((row) => row.slug).filter(Boolean),
  ]);

  const base = buildStructureSlugBase(record.nome, record.city_name);
  const slug = resolveUniqueSlug(base, used, record.slug ?? null);
  const seo_indexable = isOnboardingSeoIndexable(record);

  const { error } = await sb
    .from("onboarding_hotels")
    .update({ slug, seo_indexable })
    .eq("id", record.id);
  if (error) throw error;

  return { ...record, slug, seo_indexable };
}

async function main() {
  const input = parseArgs();
  if (!input.name || !input.city) {
    console.error("Servono --name e --city (oppure --json)");
    process.exit(1);
  }

  let row;
  if (input.manual) {
    row = await importManual(input);
  } else {
    try {
      row = await importFromGoogle(input);
    } catch (err) {
      console.warn(`Google Places fallito: ${err.message}`);
      console.warn("Provo import manuale con i dati forniti...");
      row = await importManual(input);
    }
  }

  const { data: upserted, error } = await sb
    .from("onboarding_hotels")
    .upsert(row, { onConflict: "place_id" })
    .select("id, nome, city_name, indirizzo, email, phone, website, description, main_photo_url, gallery_photo_urls, google_maps_url, status")
    .single();

  if (error) throw error;

  let finalRow = upserted;
  if (input.placeholderPhoto) {
    const { data: fullRow } = await sb
      .from("onboarding_hotels")
      .select("id, nome, city_name, city_istat, indirizzo, main_photo_url, status")
      .eq("id", upserted.id)
      .single();
    if (fullRow) {
      const photo = await setPlaceholderPhotoForHotel(sb, fullRow, { force: !fullRow.main_photo_url });
      if (photo.updated) {
        const { data: withPhoto } = await sb
          .from("onboarding_hotels")
          .select("id, nome, city_name, indirizzo, email, phone, website, description, main_photo_url, gallery_photo_urls, google_maps_url, status")
          .eq("id", upserted.id)
          .single();
        if (withPhoto) finalRow = withPhoto;
        console.log("Foto placeholder caricata");
      }
    }
  }

  finalRow = await assignOnboardingSeoFields(finalRow);

  console.log("\nInserito/aggiornato in onboarding_hotels:");
  console.log(JSON.stringify(finalRow, null, 2));
  console.log(`\nProfilo: https://www.hotelsdrop.com/hotel/onboarding/${finalRow.id}`);
  if (finalRow.slug) {
    console.log(`SEO slug (Step 2): https://www.hotelsdrop.com/hotel/${finalRow.slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
