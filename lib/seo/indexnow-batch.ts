import { listAllDestinationHubs } from "@/lib/seo/destination-queries";
import {
  destinationIndexNowUrls,
  structureIndexNowUrls,
} from "@/lib/seo/indexnow";
import { listIndexableStructureSlugs } from "@/lib/seo/structure-queries";

export type IndexNowBatchOptions = {
  limit?: number | null;
  hotelsOnly?: boolean;
  destinationsOnly?: boolean;
};

/** Raccoglie URL hotel + hub destinazione (IT + EN) per invio IndexNow. */
export async function collectIndexNowBatchUrls(
  options: IndexNowBatchOptions = {},
): Promise<string[]> {
  const urls = new Set<string>();
  const includeHotels = !options.destinationsOnly;
  const includeDestinations = !options.hotelsOnly;
  const limit = options.limit ?? null;

  if (includeHotels) {
    const slugs = await listIndexableStructureSlugs(limit ?? 100_000);
    const limitedSlugs = limit ? slugs.slice(0, limit) : slugs;
    for (const slug of limitedSlugs) {
      for (const url of structureIndexNowUrls(slug)) urls.add(url);
    }
  }

  if (includeDestinations) {
    const hubs = await listAllDestinationHubs();
    const limitedHubs = limit ? hubs.slice(0, limit) : hubs;
    for (const hub of limitedHubs) {
      for (const url of destinationIndexNowUrls(hub.slug)) urls.add(url);
    }
  }

  return [...urls];
}
