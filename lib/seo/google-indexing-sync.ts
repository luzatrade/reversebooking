import {
  destinationIndexNowUrls,
  structureIndexNowUrls,
} from "@/lib/seo/indexnow";
import { enqueueGoogleIndexingUrls } from "@/lib/seo/google-indexing-queue";

function collectStructureUrls(row: {
  slug: string | null;
  slug_previous?: string | null;
  city_name?: string | null;
}): string[] {
  if (!row.slug?.trim()) return [];
  const urls = structureIndexNowUrls(row.slug, row.slug_previous);
  if (row.city_name?.trim()) {
    urls.push(...destinationIndexNowUrls(row.city_name));
  }
  return [...new Set(urls)];
}

/** Accoda URL prioritari per il cron Google (max 1 ogni 15 min). IndexNow resta immediato. */
export function enqueueStructureGoogleIndexing(row: {
  slug: string | null;
  slug_previous?: string | null;
  city_name?: string | null;
}): void {
  const urls = collectStructureUrls(row);
  if (!urls.length) return;
  void enqueueGoogleIndexingUrls(urls, 1);
}