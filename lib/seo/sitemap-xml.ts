import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/seo/llms-content";
import { publicSiteOrigin } from "@/lib/seo/site-url";
import { listDestinationHubSlugs } from "@/lib/seo/destination-queries";
import { listIndexableStructureSlugs } from "@/lib/seo/structure-queries";

export const SITEMAP_REVALIDATE_SECONDS = 86400;
export const STRUCTURES_PER_SITEMAP = 5000;

const staticPaths = [
  "/",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/condizioni-abbonamento",
  "/contatti",
  "/cos-e-hotelsdrop",
  "/registrazione",
  "/struttura",
];

export type SitemapEntry = {
  loc: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function sitemapBaseUrl(): string {
  return publicSiteOrigin();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function parseSitemapId(raw: string): number | null {
  const normalized = raw.replace(/\.xml$/i, "").trim();
  const id = Number.parseInt(normalized, 10);
  if (!Number.isFinite(id) || id < 0) return null;
  return id;
}

export async function listSitemapIds(): Promise<number[]> {
  const structureSlugs = await listIndexableStructureSlugs();
  const structureChunks = Math.max(1, Math.ceil(structureSlugs.length / STRUCTURES_PER_SITEMAP));
  const ids = [0, 1];
  for (let index = 0; index < structureChunks; index += 1) {
    ids.push(index + 2);
  }
  return ids;
}

export async function buildSitemapEntries(id: number): Promise<SitemapEntry[]> {
  const base = sitemapBaseUrl();
  const now = new Date();

  if (id === 0) {
    return staticPaths.map((path) => ({
      loc: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    }));
  }

  if (id === 1) {
    const destinationSlugs = await listDestinationHubSlugs();
    return destinationSlugs.map((slug) => ({
      loc: `${base}/destinazioni/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }));
  }

  const structureIndex = id - 2;
  if (structureIndex < 0) return [];

  const slugs = await listIndexableStructureSlugs();
  const chunk = slugs.slice(
    structureIndex * STRUCTURES_PER_SITEMAP,
    (structureIndex + 1) * STRUCTURES_PER_SITEMAP,
  );

  return chunk.map((slug) => ({
    loc: `${base}/hotel/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}

export function renderSitemapIndex(ids: number[], lastModified = new Date()): string {
  const base = sitemapBaseUrl();
  const lastmod = lastModified.toISOString();
  const items = ids
    .map(
      (id) => `  <sitemap>
    <loc>${escapeXml(`${base}/sitemap/${id}.xml`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export function renderSitemapUrlset(entries: SitemapEntry[]): string {
  const items = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export function sitemapXmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": `public, max-age=0, s-maxage=${SITEMAP_REVALIDATE_SECONDS}, stale-while-revalidate=${SITEMAP_REVALIDATE_SECONDS}`,
    },
  });
}
