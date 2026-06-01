// Harvest delle foto città: per ogni POL definito in city-galleries.mjs cerca la
// foto migliore su Wikimedia Commons, la scarica, la converte in WebP, la carica
// sul bucket Supabase "city-media" e salva la riga in city_media. Idempotente:
// se la foto è già presente per (city_id, storage_path) la salta (usa --force per
// rigenerare).
//
// Uso:
//   node scripts/harvest-city-media.mjs            # tutte le città del file
//   node scripts/harvest-city-media.mjs IT-ROM     # solo una città
//   node scripts/harvest-city-media.mjs --force    # rigenera anche le esistenti
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { cityGalleries } = await import("./city-galleries.mjs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !service) {
  console.error("Mancano NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}
const admin = createClient(url, service, { auth: { persistSession: false } });

const BUCKET = "city-media";
const USER_AGENT = "HotelsDrop/1.0 (city media harvest; info@hotelsdrop.com)";
const EXCLUDE = /flag|logo|icon|coat[_ ]of[_ ]arms|\.svg|\.pdf|\.ogg|\bmap\b|mappa|diagram|locator|qr[_ ]code|engraving|etching|postcard|lithograph|antique|painting|\bpaint\b|drawing|sketch|fresco|\btruck\b|garbage|plaque|signboard|information[_ ](board|panel|sign|sheet)|notice[_ ]board|leaflet|brochure|\b1[5-8]\d\d\b|\b19[0-5]\d\b/i;

const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyCity = args.find((a) => !a.startsWith("--"));

function stripHtml(value) {
  return (value ?? "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

// Termini generici/descrittivi che NON identificano un luogo: non vanno usati
// per verificare la pertinenza del titolo del file.
const GENERIC_TOKENS = new Set([
  "view", "views", "panorama", "cityscape", "skyline", "exterior", "facade",
  "square", "street", "night", "evening", "daytime", "aerial", "harbour",
  "harbor", "beach", "tower", "towers", "interior", "gardens", "garden",
  "river", "coast", "village", "town", "city", "island", "islands", "bridge",
  "cathedral", "church", "mosque", "temple", "palace", "castle", "fountain",
  "boats", "boat", "sunset", "lake", "front", "rooftops", "downtown",
]);

function queryTokens(query) {
  return [
    ...new Set(
      query
        .toLowerCase()
        .replace(/[^a-zà-ÿ\s']/gi, " ")
        .split(/\s+/)
        .filter((word) => word.length >= 4 && !GENERIC_TOKENS.has(word)),
    ),
  ];
}

async function findCommonsImage(query, attempt = 0) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "20",
    prop: "imageinfo",
    iiurlwidth: "1600",
    iiprop: "url|size|extmetadata",
    iiextmetadatafilter: "Artist|LicenseShortName|Credit",
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!response.ok) {
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 1500));
      return findCommonsImage(query, attempt + 1);
    }
    return null;
  }
  const data = await response.json();
  const pages = Object.values(data.query?.pages ?? {});
  // ordina per indice di ricerca per rispettare la rilevanza
  pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

  // Token significativi della query (>=4 lettere, esclusi termini generici):
  // servono a verificare che il file riguardi davvero il luogo cercato.
  const tokens = queryTokens(query);

  const candidates = [];
  for (const page of pages) {
    const title = page.title ?? "";
    if (EXCLUDE.test(title)) continue;
    const info = page.imageinfo?.[0];
    if (!info?.thumburl) continue;
    const width = Number(info.thumbwidth || info.width || 0);
    const height = Number(info.thumbheight || info.height || 0);
    if (width < 700) continue;
    const ratio = height ? width / height : 0;
    // Scartiamo le verticali: ritagliate a 3:2 diventano "schegge" sullo sfondo.
    // Servono solo orizzontali (o quasi quadrate) per le card.
    if (ratio < 1.1) continue;
    const landscape = ratio >= 1.3;
    const titleLower = decodeURIComponent(title).toLowerCase().replace(/_/g, " ");
    const matches = tokens.filter((token) => titleLower.includes(token)).length;
    const meta = info.extmetadata ?? {};
    let artist = stripHtml(meta.Artist?.value);
    if (artist.length > 60) artist = ""; // alcune attribuzioni sono testi lunghissimi
    const license = stripHtml(meta.LicenseShortName?.value);
    const attribution = [artist || null, license || null].filter(Boolean).join(" · ");
    candidates.push({
      thumburl: info.thumburl,
      landscape,
      matches,
      index: Number(page.index ?? 999),
      attribution: attribution ? `${attribution} · Wikimedia Commons` : "Wikimedia Commons",
    });
  }
  if (!candidates.length) return null;

  // Se almeno un candidato cita il luogo nel titolo, scarta quelli non pertinenti
  // (evita foto astratte/generiche che si piazzano in cima alla ricerca).
  const relevant = candidates.filter((c) => c.matches > 0);
  const pool = relevant.length ? relevant : candidates;

  // prima i file che nominano davvero il luogo, poi le orizzontali, poi la
  // rilevanza di Commons. Mettere i match per primi evita che una foto generica
  // (cartelli, camion, panorami casuali) finisca in cima solo perché orizzontale.
  pool.sort(
    (a, b) =>
      b.matches - a.matches ||
      Number(b.landscape) - Number(a.landscape) ||
      a.index - b.index,
  );
  return pool[0];
}

async function fetchCommonsFile(fileTitle, attempt = 0) {
  const title = fileTitle.startsWith("File:") ? fileTitle : `File:${fileTitle}`;
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    titles: title,
    prop: "imageinfo",
    iiurlwidth: "1600",
    iiprop: "url|size|extmetadata",
    iiextmetadatafilter: "Artist|LicenseShortName",
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!response.ok) {
    // Un file esplicito DEVE essere recuperato: ritenta invece di ricadere su
    // una query generica (che sceglierebbe una foto sbagliata).
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      return fetchCommonsFile(fileTitle, attempt + 1);
    }
    return null;
  }
  const data = await response.json();
  const page = Object.values(data.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.thumburl) return null;
  const meta = info.extmetadata ?? {};
  let artist = stripHtml(meta.Artist?.value);
  if (artist.length > 60) artist = "";
  const license = stripHtml(meta.LicenseShortName?.value);
  const attribution = [artist || null, license || null].filter(Boolean).join(" · ");
  return {
    thumburl: info.thumburl,
    attribution: attribution ? `${attribution} · Wikimedia Commons` : "Wikimedia Commons",
  };
}

async function downloadToWebp(imageUrl) {
  const response = await fetch(imageUrl, { headers: { "User-Agent": USER_AGENT } });
  if (!response.ok) throw new Error(`download ${response.status}`);
  const input = Buffer.from(await response.arrayBuffer());
  return sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1067, fit: "cover", position: "attention", withoutEnlargement: false })
    .webp({ quality: 82 })
    .toBuffer();
}

async function existingPaths(cityId) {
  const { data } = await admin.from("city_media").select("storage_path").eq("city_id", cityId);
  return new Set((data ?? []).map((r) => r.storage_path));
}

async function harvestCity(city) {
  console.log(`\n=== ${city.cityId} (${city.cityNameEn}) ===`);
  await admin.from("city_info").upsert(
    {
      city_id: city.cityId,
      description_it: city.descriptionIt,
      description_en: city.descriptionEn,
      source: "curated",
      updated_at: new Date().toISOString(),
    },
    { onConflict: "city_id" },
  );

  const have = await existingPaths(city.cityId);
  let ok = 0;
  let position = 0;
  for (const poi of city.pois) {
    position += 1;
    const storagePath = `${city.cityId}/${poi.id}.webp`;
    if (have.has(storagePath) && !force) {
      console.log(`  · skip (esiste) ${poi.id}`);
      ok += 1;
      continue;
    }
    try {
      let found = null;
      if (poi.file) {
        // File esplicito: non ricadere su query generiche, altrimenti si rischia
        // di pubblicare una foto sbagliata al posto di quella scelta a mano.
        found = await fetchCommonsFile(poi.file);
        if (!found) {
          console.log(`  ✗ file non recuperato: "${poi.file}" (${poi.id})`);
          continue;
        }
      } else {
        found = await findCommonsImage(poi.query);
        if (!found && poi.queryAlt) {
          found = await findCommonsImage(poi.queryAlt);
        }
      }
      if (!found) {
        console.log(`  ✗ nessuna foto per "${poi.query}"`);
        continue;
      }
      const webp = await downloadToWebp(found.thumburl);
      const { error: upErr } = await admin.storage
        .from(BUCKET)
        .upload(storagePath, webp, { contentType: "image/webp", upsert: true, cacheControl: "31536000" });
      if (upErr) throw upErr;
      const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(storagePath);
      const { error: rowErr } = await admin.from("city_media").upsert(
        {
          city_id: city.cityId,
          position,
          storage_path: storagePath,
          public_url: pub.publicUrl,
          title_it: poi.titleIt,
          title_en: poi.titleEn,
          caption_it: poi.captionIt ?? null,
          caption_en: poi.captionEn ?? null,
          attribution: found.attribution,
          source: "commons",
          curated: true,
        },
        { onConflict: "city_id,storage_path" },
      );
      if (rowErr) throw rowErr;
      ok += 1;
      console.log(`  ✓ ${poi.id} (${(webp.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`  ✗ ${poi.id}: ${err.message}`);
    }
  }
  console.log(`  → ${ok}/${city.pois.length} foto pronte`);
}

const targets = onlyCity ? cityGalleries.filter((c) => c.cityId === onlyCity) : cityGalleries;
if (!targets.length) {
  console.error(`Nessuna città trovata per "${onlyCity}"`);
  process.exit(1);
}
for (const city of targets) {
  await harvestCity(city);
}
console.log("\nFatto.");
