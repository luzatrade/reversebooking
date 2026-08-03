/**
 * Fix missing main photos for known gap hotels (website og:image or city hero fallback).
 */
import { randomUUID } from "crypto";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const CITY_MEDIA_BASE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/city-media`;

function slugify(value) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "struttura";
}

async function ogImage(site) {
  try {
    const res = await fetch(site, { headers: { "User-Agent": "Mozilla/5.0 (compatible; HotelsDrop/1.0)" } });
    if (!res.ok) return null;
    const html = await res.text();
    const match =
      html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function uploadPhoto(city, name, imageUrl, referer) {
  const img = await fetch(imageUrl, {
    headers: { "User-Agent": "Mozilla/5.0", Referer: referer ?? imageUrl },
  });
  if (!img.ok) throw new Error(`Download fallito (${img.status})`);
  const buf = await sharp(Buffer.from(await img.arrayBuffer())).rotate().jpeg({ quality: 82 }).toBuffer();
  const path = `${slugify(city)}/${slugify(name)}-${randomUUID().slice(0, 8)}.jpg`;
  const { error } = await sb.storage.from("hotel-photos").upload(path, buf, {
    contentType: "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  return sb.storage.from("hotel-photos").getPublicUrl(path).data.publicUrl;
}

const JOBS = [
  {
    slug: "due-torri-hotel-verona",
    website: "https://www.duetorrihotel.com/",
    fallbackImage: `${CITY_MEDIA_BASE}/IT-VRN/arena.webp`,
  },
  {
    slug: "bed-and-breakfast-le-palme-ficarazzi",
    fallbackImage: `${CITY_MEDIA_BASE}/IT-CTA/duomo.webp`,
  },
  {
    slug: "casa-della-seta-abbadia-lariana",
    fallbackImage: `${CITY_MEDIA_BASE}/IT-ROM/colosseum.webp`,
  },
];

for (const job of JOBS) {
  const { data: row } = await sb
    .from("onboarding_hotels")
    .select("id, nome, city_name, main_photo_url")
    .eq("slug", job.slug)
    .maybeSingle();
  if (!row) {
    console.warn("SKIP", job.slug);
    continue;
  }

  try {
    let sourceUrl = job.fallbackImage ?? null;
    if (job.website) {
      sourceUrl = (await ogImage(job.website)) ?? sourceUrl;
    }
    if (!sourceUrl) {
      console.warn("NO_IMAGE", job.slug);
      continue;
    }

    const photoUrl = await uploadPhoto(row.city_name, row.nome, sourceUrl, job.website ?? sourceUrl);
    await sb.from("onboarding_hotels").update({ main_photo_url: photoUrl }).eq("id", row.id);
    console.log("OK", job.slug);
  } catch (error) {
    console.error("ERR", job.slug, error instanceof Error ? error.message : error);
  }
}
