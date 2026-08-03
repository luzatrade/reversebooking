/**
 * Descrizioni SEO per premier blocco 1 da meta tag siti ufficiali.
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");
const { isOnboardingSeoIndexable } = await import("./lib/seo-slug.mjs");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

function extractMeta(html) {
  const og = html.match(/property=["']og:description["'][^>]*content=["']([^"']+)["']/i)?.[1]
    ?? html.match(/content=["']([^"']+)["'][^>]*property=["']og:description["']/i)?.[1];
  const meta = html.match(/name=["']description["'][^>]*content=["']([^"']+)["']/i)?.[1]
    ?? html.match(/content=["']([^"']+)["'][^>]*name=["']description["']/i)?.[1];
  return (og || meta || "").trim().replace(/\s+/g, " ");
}

async function fetchMeta(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0", "Accept-Language": "en-US,en;q=0.9,it;q=0.8" },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    return extractMeta(html);
  } catch {
    return null;
  }
}

async function main() {
  const premier = JSON.parse(readFileSync(resolve(process.cwd(), "data/block-001-premier-official.json"), "utf8"));
  premier.push({
    slug: "grand-hotel-et-des-palmes-palermo",
    website: "https://www.grandhotel-et-des-palmes.com/",
    name: "Grand Hotel et des Palmes",
  });

  for (const p of premier) {
    const { data: row } = await sb.from("onboarding_hotels").select("*").eq("slug", p.slug).maybeSingle();
    if (!row || row.description?.length > 80) continue;

    const meta = await fetchMeta(p.website);
    if (!meta || meta.length < 40) {
      console.warn("No meta", p.slug);
      continue;
    }

    const description_en = meta.length > 600 ? meta.slice(0, 597) + "..." : meta;
    const description = description_en; // EN meta; IT può essere allineato in seguito con Gemini

    const patch = { description_en, description, seo_indexable: isOnboardingSeoIndexable({ ...row, description, description_en }) };
    await sb.from("onboarding_hotels").update(patch).eq("id", row.id);
    console.log("✓", p.slug, description_en.slice(0, 80) + "...");
    await new Promise((r) => setTimeout(r, 500));
  }
}

main();
