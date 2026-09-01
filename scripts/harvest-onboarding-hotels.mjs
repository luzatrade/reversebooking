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
 *   node scripts/harvest-onboarding-hotels.mjs --skip-emails
 *   node scripts/harvest-onboarding-hotels.mjs --comune Catania --centro --hotel-only
 *   node scripts/harvest-onboarding-hotels.mjs --city London --centro --hotel-only --max-hotels 10
 *   node scripts/harvest-onboarding-hotels.mjs --countries france,spain --centro --hotel-only --max-hotels 15
 *   node scripts/harvest-onboarding-hotels.mjs --italy-priority --centro --hotel-only --max-hotels 15
 *   node scripts/harvest-onboarding-hotels.mjs --italy-extra --centro --hotel-only --max-hotels 15
 *   node scripts/harvest-onboarding-hotels.mjs --fill-gaps --centro --hotel-only --max-hotels 15
 *
 * Requires: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and one of:
 *   GOOGLE_PLACES_API_KEY_TEMP  (ricerca strutture — non consuma la key prod)
 *   GOOGLE_PLACES_PHOTOS_KEY    (solo download foto — opzionale, es. key prod)
 *   GOOGLE_PLACES_API_KEY
 */

import { randomUUID } from "crypto";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { appendFileSync, mkdirSync } from "fs";
import dotenv from "dotenv";
import sharp from "sharp";
import { fetchEmailFromWebsite } from "./lib/onboarding-email.mjs";
import { resolveOnboardingCityName } from "./lib/extract-city-from-address.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const googleSearchKey =
  process.env.GOOGLE_PLACES_API_KEY_TEMP ||
  process.env.GOOGLE_PLACES_API_KEY ||
  process.env.google?.trim();
const googlePhotosKey =
  process.env.GOOGLE_PLACES_PHOTOS_KEY?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim() ||
  process.env.GOOGLE_PLACES_API_KEY?.trim() ||
  process.env.google?.trim();
const usingTempGoogleKey = Boolean(process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim());
const usingProdPhotosKey = Boolean(
  process.env.GOOGLE_PLACES_PHOTOS_KEY?.trim() &&
    process.env.GOOGLE_PLACES_PHOTOS_KEY.trim() !== process.env.GOOGLE_PLACES_API_KEY_TEMP?.trim(),
);

if (!url || !serviceKey || !googleSearchKey) {
  console.error(
    "Mancano NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY e chiave Google search (GOOGLE_PLACES_API_KEY_TEMP o GOOGLE_PLACES_API_KEY)",
  );
  process.exit(1);
}

const sb = createClient(url, serviceKey, { auth: { persistSession: false } });
const BUCKET = "hotel-photos";
const MAX_PER_COMUNE = 20;
const MAX_CENTRO_HOTELS = 40;
const SEARCH_DELAY_MS = 250;
const COMUNE_DELAY_MS = 150;
const EMAIL_DELAY_MS = 250;
const HOTEL_TYPES = new Set(["hotel", "resort_hotel", "extended_stay_hotel", "motel"]);
const LODGING_TYPES = new Set([
  ...HOTEL_TYPES,
  "lodging",
  "bed_and_breakfast",
  "guest_house",
  "hostel",
  "campground",
  "rv_park",
]);

/** Centro storico approssimativo per bias ricerca Places */
const CITY_CENTRO = {
  catania: { lat: 37.502361, lng: 15.087269, radiusM: 2000 },
  palermo: { lat: 38.115687, lng: 13.361267, radiusM: 2500 },
  roma: { lat: 41.9028, lng: 12.4964, radiusM: 3000 },
  milano: { lat: 45.4642, lng: 9.19, radiusM: 2800 },
  napoli: { lat: 40.8518, lng: 14.2681, radiusM: 2500 },
  torino: { lat: 45.0703, lng: 7.6869, radiusM: 2500 },
  genova: { lat: 44.4056, lng: 8.9463, radiusM: 2200 },
  bologna: { lat: 44.4949, lng: 11.3426, radiusM: 2200 },
  firenze: { lat: 43.7696, lng: 11.2558, radiusM: 2500 },
  bari: { lat: 41.1171, lng: 16.8719, radiusM: 2200 },
  venezia: { lat: 45.4343, lng: 12.3388, radiusM: 2000 },
  /** Mestre centro (Piazza Ferretto, stazione, Via Piave) — non Marghera/Tessera */
  mestre: { lat: 45.4935, lng: 12.2424, radiusM: 1800 },
  verona: { lat: 45.4384, lng: 10.9916, radiusM: 2500 },
  rimini: { lat: 44.0678, lng: 12.5695, radiusM: 2500 },
  siena: { lat: 43.3188, lng: 11.3308, radiusM: 1500 },
  pisa: { lat: 43.7228, lng: 10.4017, radiusM: 1800 },
  siracusa: { lat: 37.0755, lng: 15.2866, radiusM: 2000 },
  "reggio-di-calabria": { lat: 38.1113, lng: 15.6471, radiusM: 2200 },
  sorrento: { lat: 40.6263, lng: 14.3758, radiusM: 1500 },
  amalfi: { lat: 40.634, lng: 14.6027, radiusM: 1200 },
  padova: { lat: 45.4064, lng: 11.8768, radiusM: 2200 },
  trieste: { lat: 45.6495, lng: 13.7768, radiusM: 2000 },
  perugia: { lat: 43.1107, lng: 12.389, radiusM: 2000 },
  lecce: { lat: 40.3515, lng: 18.175, radiusM: 2000 },
  cagliari: { lat: 39.2238, lng: 9.1217, radiusM: 2500 },
  taormina: { lat: 37.8516, lng: 15.2853, radiusM: 1500 },
  como: { lat: 45.8081, lng: 9.0852, radiusM: 1800 },
  salerno: { lat: 40.6824, lng: 14.7681, radiusM: 2000 },
  catanzaro: { lat: 38.9098, lng: 16.5877, radiusM: 1800 },
  london: { lat: 51.5074, lng: -0.1278, radiusM: 2500 },
  paris: { lat: 48.8566, lng: 2.3522, radiusM: 2500 },
  lyon: { lat: 45.764, lng: 4.8357, radiusM: 2200 },
  madrid: { lat: 40.4168, lng: -3.7038, radiusM: 2500 },
  barcelona: { lat: 41.3874, lng: 2.1686, radiusM: 2500 },
  bangkok: { lat: 13.7563, lng: 100.5018, radiusM: 3500 },
  phuket: { lat: 7.8804, lng: 98.3923, radiusM: 3500 },
  manila: { lat: 14.5995, lng: 120.9842, radiusM: 3500 },
  cebu: { lat: 10.3157, lng: 123.8854, radiusM: 2500 },
  tokyo: { lat: 35.6762, lng: 139.6503, radiusM: 5000 },
  osaka: { lat: 34.6937, lng: 135.5023, radiusM: 2800 },
  berlin: { lat: 52.52, lng: 13.405, radiusM: 2800 },
  munich: { lat: 48.1372, lng: 11.5755, radiusM: 2500 },
  amsterdam: { lat: 52.3676, lng: 4.9041, radiusM: 2500 },
  lisbon: { lat: 38.7223, lng: -9.1393, radiusM: 2800 },
  prague: { lat: 50.0755, lng: 14.4378, radiusM: 2500 },
  vienna: { lat: 48.2082, lng: 16.3738, radiusM: 2800 },
  istanbul: { lat: 41.0082, lng: 28.9784, radiusM: 4000 },
  santorini: { lat: 36.3932, lng: 25.4615, radiusM: 2500 },
  dubai: { lat: 25.2048, lng: 55.2708, radiusM: 4000 },
  "new-york": { lat: 40.758, lng: -73.9855, radiusM: 4000 },
  ravello: { lat: 40.649, lng: 14.6114, radiusM: 1200 },
  portofino: { lat: 44.3038, lng: 9.2096, radiusM: 1200 },
  merano: { lat: 46.668, lng: 11.159, radiusM: 1800 },
  bolzano: { lat: 46.4983, lng: 11.3548, radiusM: 2000 },
  urbino: { lat: 43.7263, lng: 12.6363, radiusM: 1500 },
  messina: { lat: 38.1938, lng: 15.554, radiusM: 2200 },
  ravenna: { lat: 44.4184, lng: 12.2035, radiusM: 2000 },
  "monterosso-al-mare": { lat: 44.1456, lng: 9.6548, radiusM: 1500 },
  "cinque-terre": { lat: 44.1456, lng: 9.6548, radiusM: 2500 },
  positano: { lat: 40.628, lng: 14.485, radiusM: 1500 },
  matera: { lat: 40.6664, lng: 16.6043, radiusM: 1800 },
  alberobello: { lat: 40.786, lng: 17.237, radiusM: 1500 },
  capri: { lat: 40.551, lng: 14.242, radiusM: 1500 },
  bergamo: { lat: 45.6983, lng: 9.6773, radiusM: 2000 },
  parma: { lat: 44.8015, lng: 10.3279, radiusM: 2000 },
  olbia: { lat: 40.9237, lng: 9.496, radiusM: 2000 },
  agrigento: { lat: 37.3111, lng: 13.5765, radiusM: 2000 },
};

/** Città estere (fuori comuni_italiani) */
const FOREIGN_CITIES = {
  london: { nome: "London", regionCode: "GB", languageCode: "en" },
  paris: { nome: "Paris", regionCode: "FR", languageCode: "fr" },
  lyon: { nome: "Lyon", regionCode: "FR", languageCode: "fr" },
  madrid: { nome: "Madrid", regionCode: "ES", languageCode: "es" },
  barcelona: { nome: "Barcelona", regionCode: "ES", languageCode: "es" },
  bangkok: { nome: "Bangkok", regionCode: "TH", languageCode: "en" },
  phuket: { nome: "Phuket", regionCode: "TH", languageCode: "en" },
  manila: { nome: "Manila", regionCode: "PH", languageCode: "en" },
  cebu: { nome: "Cebu", regionCode: "PH", languageCode: "en" },
  tokyo: {
    nome: "Tokyo",
    regionCode: "JP",
    languageCode: "en",
    searchQueries: [
      "hotel Tokyo city center",
      "hotel Shinjuku Tokyo",
      "hotel Shibuya Tokyo",
      "hotel Ginza Tokyo",
      "hotel Marunouchi Tokyo",
    ],
  },
  osaka: { nome: "Osaka", regionCode: "JP", languageCode: "en" },
  berlin: { nome: "Berlin", regionCode: "DE", languageCode: "de" },
  munich: { nome: "Munich", regionCode: "DE", languageCode: "de" },
  amsterdam: { nome: "Amsterdam", regionCode: "NL", languageCode: "en" },
  lisbon: { nome: "Lisbon", regionCode: "PT", languageCode: "en" },
  prague: { nome: "Prague", regionCode: "CZ", languageCode: "en" },
  vienna: { nome: "Vienna", regionCode: "AT", languageCode: "en" },
  istanbul: { nome: "Istanbul", regionCode: "TR", languageCode: "en" },
  santorini: { nome: "Santorini", regionCode: "GR", languageCode: "en" },
  dubai: { nome: "Dubai", regionCode: "AE", languageCode: "en" },
  "new-york": { nome: "New York", regionCode: "US", languageCode: "en" },
};

/** Capitale + seconda città per paese (batch internazionale) */
const COUNTRY_CITY_BATCH = {
  france: ["Paris", "Lyon"],
  spain: ["Madrid", "Barcelona"],
  thailand: ["Bangkok", "Phuket"],
  philippines: ["Manila", "Cebu"],
  japan: ["Tokyo", "Osaka"],
  germany: ["Berlin", "Munich"],
};

/** Principali città italiane (turismo / capoluoghi) — 15 hotel centro ciascuna */
const ITALY_PRIORITY_CITIES = [
  "Roma",
  "Milano",
  "Napoli",
  "Torino",
  "Palermo",
  "Genova",
  "Bologna",
  "Firenze",
  "Bari",
  "Catania",
  "Venezia",
  "Verona",
  "Rimini",
];

/** Secondo giro — città turistiche / capoluoghi aggiuntivi */
const ITALY_EXTRA_CITIES = [
  "Siena",
  "Pisa",
  "Siracusa",
  "Reggio di Calabria",
  "Sorrento",
  "Amalfi",
  "Padova",
  "Trieste",
  "Perugia",
  "Lecce",
  "Cagliari",
  "Taormina",
  "Como",
  "Salerno",
];

/** Candidati per --fill-gaps: solo quelli sotto cap vengono processati */
const GAP_CANDIDATE_FOREIGN = [
  "London",
  "Amsterdam",
  "Lisbon",
  "Prague",
  "Vienna",
  "Istanbul",
  "Santorini",
  "Dubai",
  "New York",
];
const GAP_CANDIDATE_ITALY = [
  "Ravello",
  "Portofino",
  "Merano",
  "Bolzano",
  "Urbino",
  "Messina",
  "Catanzaro",
  "Ravenna",
  "Cinque Terre",
  "Reggio di Calabria",
  "Positano",
  "Matera",
  "Alberobello",
  "Capri",
  "Bergamo",
  "Parma",
  "Olbia",
  "Agrigento",
];

/** Nome comune in DB → nome canonico per onboarding_hotels / UI */
const ITALY_COMUNE_LOOKUP = {
  Merano: "Merano/Meran",
  Bolzano: "Bolzano/Bozen",
};

/** Destinazioni turistiche senza riga dedicata in comuni_italiani */
const ITALY_SYNTHETIC_DESTINATIONS = {
  "Cinque Terre": {
    id: null,
    codice_istat: null,
    nome: "Cinque Terre",
    provincia: "La Spezia",
    sigla_provincia: "SP",
    regione: "Liguria",
  },
};

const args = process.argv.slice(2);
const force = args.includes("--force");
const skipPhotos = args.includes("--skip-photos");
const skipEmails = args.includes("--skip-emails");
const centroMode = args.includes("--centro");
const hotelOnly = args.includes("--hotel-only");
const limitArg = args.find((a, i) => args[i - 1] === "--limit");
const limit = limitArg ? Number(limitArg) : null;
const maxHotelsArg = args.find((a, i) => args[i - 1] === "--max-hotels");
const maxHotels = maxHotelsArg ? Number(maxHotelsArg) : null;
const comuneArg = args.find((a, i) => args[i - 1] === "--comune");
const cityArg = args.find((a, i) => args[i - 1] === "--city");
const countriesArg = args.find((a, i) => args[i - 1] === "--countries");
const italyPriority = args.includes("--italy-priority");
const italyExtra = args.includes("--italy-extra");
const fillGaps = args.includes("--fill-gaps");
const regionArg = args.find((a, i) => args[i - 1] === "--region");
const zoneArg = args.find((a, i) => args[i - 1] === "--zone");
/** centro = laguna/isola (default); mestre = terraferma veneziana */
const harvestZone = zoneArg && ["centro", "mestre"].includes(zoneArg) ? zoneArg : "centro";

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
  const list = types ?? [];
  if (hotelOnly) return list.some((t) => HOTEL_TYPES.has(t));
  return list.some((t) => LODGING_TYPES.has(t));
}

function centroForComune(comune) {
  const key = slugify(comune.nome);
  if (harvestZone === "mestre" && key === "venezia") return CITY_CENTRO.mestre;
  return CITY_CENTRO[key] ?? null;
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

function isInCentro(comune, place) {
  const centro = centroForComune(comune);
  const lat = place.location?.latitude;
  const lng = place.location?.longitude;
  if (!centro || lat == null || lng == null) return true;
  return haversineMeters(centro.lat, centro.lng, lat, lng) <= centro.radiusM;
}

function foreignCityConfig(comune) {
  const key = slugify(comune.nome);
  return FOREIGN_CITIES[key] ?? null;
}

function foreignHotelQueries(comune, foreign) {
  const name = comune.nome;
  if (foreign.searchQueries?.length) return foreign.searchQueries;
  if (foreign.languageCode === "fr") {
    return [`hotel centre ${name}`, `hotel ${name} centre ville`, `hotel ${name}`];
  }
  if (foreign.languageCode === "es") {
    return [`hotel centro ${name}`, `hotel ${name} centro`, `hotel ${name}`];
  }
  if (foreign.languageCode === "de") {
    return [`hotel zentrum ${name}`, `hotel ${name} mitte`, `hotel ${name}`];
  }
  if (foreign.regionCode === "JP") {
    return [`hotel ${name}`, `hotel ${name} city center`, `hotels in ${name}`];
  }
  if (slugify(name) === "london") {
    return [`hotel ${name} city centre`, `hotel central ${name}`, `hotel ${name} westminster`];
  }
  return [`hotel ${name} city centre`, `hotel central ${name}`, `hotel downtown ${name}`];
}

function searchQueries(comune) {
  const foreign = foreignCityConfig(comune);
  const base = foreign ? comune.nome : `${comune.nome} ${comune.sigla_provincia}`;
  if (centroMode && hotelOnly) {
    if (foreign) return foreignHotelQueries(comune, foreign);
    if (comune.nome === "Cinque Terre") {
      return [
        "hotel Cinque Terre",
        "hotel Monterosso al Mare Cinque Terre",
        "hotel Vernazza Cinque Terre",
      ];
    }
    if (comune.nome === "Milano") {
      return [
        `hotel centro ${comune.nome}`,
        `hotel ${comune.nome} centro storico`,
        `hotel ${base} centro`,
        "hotel Milano Duomo",
        "hotel Milano Brera",
        "hotel Milano Porta Nuova",
        "hotel Milano Corso Buenos Aires",
        "hotel Milano Navigli",
        "hotel Milano Galleria",
        "boutique hotel Milano centro",
        "luxury hotel Milano centro",
      ];
    }
    if (comune.nome === "Firenze") {
      return [
        `hotel centro ${comune.nome}`,
        `hotel ${comune.nome} centro storico`,
        `hotel ${base} centro`,
        "hotel Firenze Duomo",
        "hotel Firenze Santa Maria Novella",
        "hotel Firenze Oltrarno",
        "hotel Firenze San Lorenzo",
        "hotel Firenze Santa Croce",
        "hotel Firenze Ponte Vecchio",
        "hotel Firenze Repubblica",
        "boutique hotel Firenze centro",
        "luxury hotel Firenze",
        "affittacamere Firenze centro",
      ];
    }
    if (comune.nome === "Verona") {
      return [
        `hotel centro ${comune.nome}`,
        `hotel ${comune.nome} centro storico`,
        `hotel ${base} centro`,
        "hotel Verona Arena",
        "hotel Verona Piazza Bra",
        "hotel Verona Porta Nuova",
        "hotel Verona centro storico",
        "hotel Verona Giulietta",
        "hotel Verona Piazza Erbe",
        "hotel Verona Castelvecchio",
        "hotel Verona Veronetta",
        "hotel Verona Borgo Trento",
        "hotel Verona Corso Porta Nuova",
        "hotel Verona Adige",
        "hotel Verona stazione",
        "hotel Verona San Zeno",
        "hotel Verona Ponte Pietra",
        "affittacamere Verona centro",
        "boutique hotel Verona centro",
        "luxury hotel Verona",
      ];
    }
    if (comune.nome === "Venezia") {
      if (harvestZone === "mestre") {
        return [
          "hotel Mestre centro",
          "hotel Mestre Piazza Ferretto",
          "hotel Mestre stazione",
          "hotel Via Piave Mestre",
          "hotel Mestre Venezia centro",
          "hotel Venezia Mestre",
        ];
      }
      return [
        `hotel centro ${comune.nome}`,
        `hotel ${comune.nome} centro storico`,
        `hotel ${base} centro`,
        "hotel Venezia San Marco",
        "hotel Venezia Rialto",
        "hotel Venezia Cannaregio",
        "hotel Venezia Dorsoduro",
        "hotel Venezia Santa Lucia",
        "hotel Venezia Giudecca",
        "hotel Venezia Castello",
        "boutique hotel Venezia centro",
        "luxury hotel Venezia",
      ];
    }
    return [
      `hotel centro ${comune.nome}`,
      `hotel ${comune.nome} centro storico`,
      `hotel ${base} centro`,
    ];
  }
  if (hotelOnly) {
    return [`hotel ${base} Italia`, `hotel ${comune.nome} centro`];
  }
  return [
    `hotel ${base} Italia`,
    `bed and breakfast ${base}`,
    `affittacamere ${base}`,
    `agriturismo ${base}`,
  ];
}

function maxPlacesForRun() {
  if (maxHotels && Number.isFinite(maxHotels)) return maxHotels;
  return centroMode ? MAX_CENTRO_HOTELS : MAX_PER_COMUNE;
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

async function searchPlaces(textQuery, pageToken, comune) {
  const foreign = foreignCityConfig(comune);
  const body = {
    textQuery,
    languageCode: foreign?.languageCode ?? "it",
    regionCode: foreign?.regionCode ?? "IT",
    maxResultCount: 20,
  };
  if (pageToken) body.pageToken = pageToken;

  const centro = centroMode ? centroForComune(comune) : null;
  if (centro) {
    body.locationBias = {
      circle: {
        center: { latitude: centro.lat, longitude: centro.lng },
        radius: centro.radiusM,
      },
    };
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": googleSearchKey,
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

async function fetchPlacePhotoName(placeId) {
  if (!googlePhotosKey) return null;
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
    headers: {
      "X-Goog-Api-Key": googlePhotosKey,
      "X-Goog-FieldMask": "photos",
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.photos?.[0]?.name ?? null;
}

async function downloadPhoto(photoName) {
  const mediaUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=900&maxWidthPx=1200`;
  const res = await fetch(mediaUrl, { headers: { "X-Goog-Api-Key": googlePhotosKey } });
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
  const { data } = await sb
    .from("onboarding_hotels")
    .select("id, main_photo_url, email")
    .eq("place_id", placeId)
    .maybeSingle();
  return data;
}

async function resolvePlaceEmail(place, existingEmail) {
  if (skipEmails || existingEmail || !place.websiteUri) return existingEmail ?? null;
  const email = await fetchEmailFromWebsite(place.websiteUri);
  await sleep(EMAIL_DELAY_MS);
  return email;
}

async function upsertHotel(comune, place, mainPhotoUrl, email) {
  const formattedAddress = place.formattedAddress ?? null;
  const resolvedCity = resolveOnboardingCityName({
    harvestCity: comune.nome,
    address: formattedAddress,
    structureName: place.displayName?.text ?? "",
  });

  const row = {
    place_id: place.id,
    nome: place.displayName?.text ?? "Struttura",
    indirizzo: formattedAddress,
    city_name: resolvedCity,
    city_istat: resolvedCity === comune.nome ? comune.codice_istat : null,
    lat: place.location?.latitude ?? null,
    lng: place.location?.longitude ?? null,
    google_maps_url: place.googleMapsUri ?? null,
    website: place.websiteUri ?? null,
    phone: place.nationalPhoneNumber ?? place.internationalPhoneNumber ?? null,
    email: email ?? null,
    main_photo_url: mainPhotoUrl,
    status: "unclaimed",
  };

  if (resolvedCity !== comune.nome) {
    const { data: comuneRow } = await sb
      .from("comuni_italiani")
      .select("codice_istat")
      .ilike("nome", resolvedCity)
      .maybeSingle();
    if (comuneRow?.codice_istat) row.city_istat = comuneRow.codice_istat;
  }

  const { error } = await sb.from("onboarding_hotels").upsert(row, { onConflict: "place_id" });
  if (error) throw error;
}

async function countHotelsForComune(comune) {
  const { count, error } = await sb
    .from("onboarding_hotels")
    .select("*", { count: "exact", head: true })
    .eq("city_name", comune.nome);
  if (error) throw error;
  return count ?? 0;
}

async function existingPlaceIdsForComune(comune) {
  const { data, error } = await sb.from("onboarding_hotels").select("place_id").eq("city_name", comune.nome);
  if (error) throw error;
  return new Set((data ?? []).map((row) => row.place_id).filter(Boolean));
}

async function collectPlacesForComune(comune, existingPlaceIds) {
  const maxPlaces = maxPlacesForRun();
  const existingCount = existingPlaceIds.size;
  const slotsNeeded = force ? maxPlaces : Math.max(0, maxPlaces - existingCount);
  if (slotsNeeded === 0) return [];

  const byId = new Map();

  for (const query of searchQueries(comune)) {
    if (byId.size >= slotsNeeded) break;

    let pageToken;
    let pages = 0;
    const maxPages = maxHotels && maxHotels >= 100 ? 5 : 3;
    while (byId.size < slotsNeeded && pages < maxPages) {
      await sleep(SEARCH_DELAY_MS);
      const data = await searchPlaces(query, pageToken, comune);
      for (const place of data.places ?? []) {
        if (existingPlaceIds.has(place.id)) continue;
        if (!isLodging(place.types)) continue;
        if (centroMode && !isInCentro(comune, place)) continue;
        if (!byId.has(place.id)) byId.set(place.id, place);
        if (byId.size >= slotsNeeded) break;
      }
      pageToken = data.nextPageToken;
      pages += 1;
      if (!pageToken) break;
    }
  }

  return [...byId.values()].slice(0, slotsNeeded);
}

async function processComune(comune) {
  const hotelCap = maxHotels && Number.isFinite(maxHotels) ? maxHotels : null;
  const existingPlaceIds = await existingPlaceIdsForComune(comune);
  const existingCount = existingPlaceIds.size;

  if (!force && hotelCap && existingCount >= hotelCap) {
    return { found: 0, inserted: 0, skipped: existingCount, photos: 0, emails: 0, capped: true };
  }

  const places = await collectPlacesForComune(comune, existingPlaceIds);
  let inserted = 0;
  let skipped = 0;
  let photos = 0;
  let emails = 0;

  for (const place of places) {
    const existing = await placeExists(place.id);
    if (existing && !force) {
      skipped += 1;
      continue;
    }

    let photoUrl = existing?.main_photo_url ?? null;
    if (!skipPhotos && !photoUrl) {
      try {
        const photoName = place.photos?.[0]?.name ?? (await fetchPlacePhotoName(place.id));
        if (photoName) {
          const buf = await downloadPhoto(photoName);
          if (buf) {
            photoUrl = await uploadPhoto(comune, place, buf);
            photos += 1;
          }
        }
      } catch (err) {
        log(`  ! foto ${place.displayName?.text}: ${err.message ?? err}`);
      }
      await sleep(100);
    }

    let email = existing?.email ?? null;
    try {
      email = await resolvePlaceEmail(place, email);
      if (email && !existing?.email) emails += 1;
    } catch (err) {
      log(`  ! email ${place.displayName?.text}: ${err.message ?? err}`);
    }

    await upsertHotel(comune, place, photoUrl, email);
    inserted += 1;
    existingPlaceIds.add(place.id);

    if (hotelCap) {
      const capReached = force ? inserted >= hotelCap : existingCount + inserted >= hotelCap;
      if (capReached) break;
    }
  }

  if (!centroMode) {
    await sb.from("comuni_italiani").update({ last_scraped_at: new Date().toISOString() }).eq("id", comune.id);
  }

  return { found: places.length, inserted, skipped, photos, emails };
}

function foreignCityRow(cityName) {
  const key = slugify(cityName);
  const foreign = FOREIGN_CITIES[key];
  if (!foreign) {
    throw new Error(`Città estera non configurata: ${cityName}`);
  }
  if (!CITY_CENTRO[key]) {
    throw new Error(`Centro non configurato per ${cityName}`);
  }
  return {
    id: null,
    codice_istat: null,
    nome: foreign.nome,
    provincia: foreign.regionCode,
    sigla_provincia: foreign.regionCode,
    regione: foreign.nome,
  };
}

function loadForeignCitiesFromCountries(countriesCsv) {
  const keys = countriesCsv
    .split(",")
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean);
  if (!keys.length) throw new Error("Nessun paese in --countries");

  const rows = [];
  for (const key of keys) {
    const cities = COUNTRY_CITY_BATCH[key];
    if (!cities?.length) {
      throw new Error(`Paese non configurato: ${key} (disponibili: ${Object.keys(COUNTRY_CITY_BATCH).join(", ")})`);
    }
    for (const cityName of cities) {
      rows.push(foreignCityRow(cityName));
    }
  }
  return rows;
}

async function countHotelsByCityName(cityName) {
  const { count, error } = await sb
    .from("onboarding_hotels")
    .select("*", { count: "exact", head: true })
    .eq("city_name", cityName);
  if (error) throw error;
  return count ?? 0;
}

async function resolveFillGapTargets() {
  const cap = maxHotels && Number.isFinite(maxHotels) ? maxHotels : 15;
  const foreignNames = [];
  const italyNames = [];

  for (const name of GAP_CANDIDATE_FOREIGN) {
    const count = await countHotelsByCityName(name);
    if (count < cap) {
      log(`  gap ${name}: ${count}/${cap} → da riempire`);
      foreignNames.push(name);
    }
  }
  for (const name of GAP_CANDIDATE_ITALY) {
    const count = await countHotelsByCityName(name);
    if (count < cap) {
      log(`  gap ${name}: ${count}/${cap} → da riempire`);
      italyNames.push(name);
    }
  }

  const rows = [];
  for (const name of foreignNames) rows.push(foreignCityRow(name));
  if (italyNames.length) rows.push(...(await loadItalyBatch(italyNames)));
  return rows;
}

async function loadItalyBatch(cityNames) {
  const synthetic = [];
  const comuneNames = [];
  for (const name of cityNames) {
    if (ITALY_SYNTHETIC_DESTINATIONS[name]) synthetic.push(ITALY_SYNTHETIC_DESTINATIONS[name]);
    else comuneNames.push(name);
  }

  if (!comuneNames.length) return synthetic;

  const lookupNames = comuneNames.map((name) => ITALY_COMUNE_LOOKUP[name] ?? name);
  const { data, error } = await sb
    .from("comuni_italiani")
    .select("id, codice_istat, nome, provincia, sigla_provincia, regione, last_scraped_at")
    .in("nome", lookupNames);
  if (error) throw error;

  const byName = new Map((data ?? []).map((row) => [row.nome, row]));
  const missing = comuneNames.filter((name) => !byName.has(ITALY_COMUNE_LOOKUP[name] ?? name));
  if (missing.length) {
    throw new Error(`Comuni non trovati in comuni_italiani: ${missing.join(", ")}`);
  }

  const comuneRows = comuneNames.map((canonicalName) => {
    const row = byName.get(ITALY_COMUNE_LOOKUP[canonicalName] ?? canonicalName);
    return { ...row, nome: canonicalName };
  });
  return [...synthetic, ...comuneRows];
}

async function loadComuni() {
  if (fillGaps) {
    if (italyPriority || italyExtra || countriesArg || cityArg || comuneArg || regionArg) {
      throw new Error("Usa --fill-gaps da solo (con --centro --hotel-only --max-hotels)");
    }
    log("Analisi città vacanti (sotto cap):");
    return resolveFillGapTargets();
  }

  if (italyPriority || italyExtra) {
    if (italyPriority && italyExtra) {
      throw new Error("Usa --italy-priority oppure --italy-extra, non entrambi");
    }
    if (countriesArg || cityArg || comuneArg || regionArg) {
      throw new Error("Usa --italy-priority/--italy-extra da soli (con --centro --hotel-only --max-hotels)");
    }
    return loadItalyBatch(italyExtra ? ITALY_EXTRA_CITIES : ITALY_PRIORITY_CITIES);
  }

  if (countriesArg) {
    if (cityArg) throw new Error("Usa --city oppure --countries, non entrambi");
    return loadForeignCitiesFromCountries(countriesArg);
  }

  if (cityArg) {
    return [foreignCityRow(cityArg)];
  }

  const all = [];
  const pageSize = 1000;
  let from = 0;

  while (true) {
    let query = sb
      .from("comuni_italiani")
      .select("id, codice_istat, nome, provincia, sigla_provincia, regione, last_scraped_at")
      .order("nome", { ascending: true })
      .range(from, from + pageSize - 1);

    if (!force && !comuneArg) query = query.is("last_scraped_at", null);
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
  log("HotelsDrop — harvest onboarding_hotels");
  log(
    `googleSearch=${usingTempGoogleKey ? "TEMP" : "default"} googlePhotos=${usingProdPhotosKey ? "PHOTOS_KEY" : usingTempGoogleKey ? "TEMP" : "default"} force=${force} skipPhotos=${skipPhotos} skipEmails=${skipEmails} centro=${centroMode} zone=${harvestZone} hotelOnly=${hotelOnly} maxHotels=${maxHotels ?? "default"} limit=${limit ?? "none"} fillGaps=${fillGaps} italyPriority=${italyPriority} italyExtra=${italyExtra} city=${cityArg ?? "none"} countries=${countriesArg ?? "none"} comune=${comuneArg ?? "all"} region=${regionArg ?? "all"}`,
  );

  const comuni = await loadComuni();
  log(`Comuni in coda: ${comuni.length}`);
  if (!comuni.length) {
    log("Nessun comune da processare.");
    return;
  }

  let totalInserted = 0;
  let totalPhotos = 0;
  let totalEmails = 0;

  for (let i = 0; i < comuni.length; i += 1) {
    const comune = comuni[i];
    try {
      const stats = await processComune(comune);
      totalInserted += stats.inserted;
      totalPhotos += stats.photos;
      totalEmails += stats.emails;
      if (stats.capped) {
        log(
          `[${i + 1}/${comuni.length}] ${comune.nome} (${comune.sigla_provincia}) — cap ${maxHotels} già raggiunto (${stats.skipped} in catalogo), nessun duplicato`,
        );
      } else {
        log(
          `[${i + 1}/${comuni.length}] ${comune.nome} (${comune.sigla_provincia}) — trovati ${stats.found}, nuovi ${stats.inserted}, skip ${stats.skipped}, foto ${stats.photos}, email ${stats.emails}`,
        );
      }
    } catch (err) {
      log(`[${i + 1}/${comuni.length}] ERRORE ${comune.nome}: ${err.message ?? err}`);
    }
    await sleep(COMUNE_DELAY_MS);
  }

  const { count } = await sb.from("onboarding_hotels").select("*", { count: "exact", head: true });
  log(`=== FINE === inseriti/aggiornati in questa run: ${totalInserted}, foto caricate: ${totalPhotos}, email trovate: ${totalEmails}, totale onboarding_hotels: ${count}`);
}

main().catch((err) => {
  log(`FATAL: ${err.message ?? err}`);
  process.exit(1);
});
