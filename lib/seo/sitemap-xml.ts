import { localizedPath } from "@/lib/i18n/routing";
import { listDeHubSlugs } from "@/lib/seo/de-export-content";
import { publicSiteOrigin } from "@/lib/seo/site-url";
import { listDestinationHubSlugs } from "@/lib/seo/destination-queries";
import { listIndexableStructureSlugs } from "@/lib/seo/structure-queries";
import {
  fetchDestinationSlugLastmods,
  fetchStructureSlugLastmods,
  staticPageLastmod,
} from "@/lib/seo/sitemap-lastmod";
import type { Locale } from "@/lib/i18n/translations";

export const SITEMAP_REVALIDATE_SECONDS = 86400;
export const STRUCTURES_PER_SITEMAP = 5000;

const staticInternalPaths = [
  "/",
  "/destinazioni",
  "/guide",
  "/guide/reverse-booking",
  "/guide/viaggi-di-gruppo",
  "/guide/agenzie-viaggio",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/condizioni-abbonamento",
  "/contatti",
  "/cos-e-hotelsdrop",
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
  const ids = [0, 1, 2];
  for (let index = 0; index < structureChunks; index += 1) {
    ids.push(index + 3);
  }
  return ids;
}

function localePaths(internalPath: string): string[] {
  return (["it", "en"] as Locale[]).map((locale) => localizedPath(locale, internalPath));
}

function optionalDeSitemapPath(internalPath: string): string | null {
  if (internalPath === "/") return localizedPath("de", "/");
  const match = internalPath.match(/^\/destinazioni\/([^/]+)$/);
  if (match && listDeHubSlugs().includes(match[1]!)) {
    return localizedPath("de", internalPath);
  }
  return null;
}

export async function buildSitemapEntries(id: number): Promise<SitemapEntry[]> {
  const base = sitemapBaseUrl();
  const fallback = new Date();

  if (id === 0) {
    return staticInternalPaths.flatMap((path) => {
      const locPaths = [...localePaths(path)];
      const dePath = optionalDeSitemapPath(path);
      if (dePath) locPaths.push(dePath);
      return locPaths.map((locPath) => ({
        loc: `${base}${locPath}`,
        lastModified: staticPageLastmod(path),
        changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "/" ? 1 : path === "/destinazioni" || path === "/guide" ? 0.9 : 0.7,
      }));
    });
  }

  if (id === 1) {
    const destinationSlugs = await listDestinationHubSlugs();
    const lastmods = await fetchDestinationSlugLastmods();
    return destinationSlugs.flatMap((slug) => {
      const internalPath = `/destinazioni/${slug}`;
      const locPaths = [...localePaths(internalPath)];
      const dePath = optionalDeSitemapPath(internalPath);
      if (dePath) locPaths.push(dePath);
      return locPaths.map((locPath) => ({
        loc: `${base}${locPath}`,
        lastModified: lastmods.get(slug) ?? fallback,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      }));
    });
  }

  if (id === 2) {
    const guideDate = staticPageLastmod("/guide");
    const enGuidePaths = ["/guide/reverse-booking", "/guide/group-travel", "/guide/travel-agencies"];
    const itGuidePaths = ["/guide/reverse-booking", "/guide/viaggi-di-gruppo", "/guide/agenzie-viaggio"];
    return [
      ...itGuidePaths.map((path) => localizedPath("it", path)),
      ...enGuidePaths.map((path) => localizedPath("en", path)),
    ].map((locPath) => ({
      loc: `${base}${locPath}`,
      lastModified: guideDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));
  }

  const structureIndex = id - 3;
  if (structureIndex < 0) return [];

  const slugs = await listIndexableStructureSlugs();
  const lastmods = await fetchStructureSlugLastmods();
  const chunk = slugs.slice(
    structureIndex * STRUCTURES_PER_SITEMAP,
    (structureIndex + 1) * STRUCTURES_PER_SITEMAP,
  );

  return chunk.flatMap((slug) =>
    localePaths(`/hotel/${slug}`).map((locPath) => ({
      loc: `${base}${locPath}`,
      lastModified: lastmods.get(slug) ?? fallback,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  );
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
