import type { MetadataRoute } from "next";
import { getAppUrl } from "@/lib/legal/company";
import { listDestinationHubSlugs } from "@/lib/seo/destination-queries";
import { listIndexableStructureSlugs } from "@/lib/seo/structure-queries";

export const revalidate = 86400;

const STRUCTURES_PER_SITEMAP = 5000;

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

export async function generateSitemaps() {
  const structureSlugs = await listIndexableStructureSlugs();
  const structureChunks = Math.max(1, Math.ceil(structureSlugs.length / STRUCTURES_PER_SITEMAP));
  const ids: { id: number }[] = [{ id: 0 }, { id: 1 }];
  for (let index = 0; index < structureChunks; index += 1) {
    ids.push({ id: index + 2 });
  }
  return ids;
}

export default async function sitemap(props: { id: Promise<number> }): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;
  const base = getAppUrl().replace(/\/$/, "");
  const now = new Date();

  if (id === 0) {
    return staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    }));
  }

  if (id === 1) {
    try {
      const destinationSlugs = await listDestinationHubSlugs();
      return destinationSlugs.map((slug) => ({
        url: `${base}/destinazioni/${slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      }));
    } catch (error) {
      console.error("[sitemap] destination slug fetch failed:", error);
      return [];
    }
  }

  const structureIndex = id - 2;
  try {
    const slugs = await listIndexableStructureSlugs();
    const chunk = slugs.slice(structureIndex * STRUCTURES_PER_SITEMAP, (structureIndex + 1) * STRUCTURES_PER_SITEMAP);
    return chunk.map((slug) => ({
      url: `${base}/hotel/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("[sitemap] structure slug fetch failed:", error);
    return [];
  }
}
