import { fetchCatalogStructureCount, fetchActiveTravelRequestCount } from "@/lib/showcase/catalogCounts";
import { listAllDestinationHubs } from "@/lib/seo/destination-queries";
import type { LlmsCatalogStats } from "@/lib/seo/llms-content";

export async function fetchLlmsCatalogStats(): Promise<LlmsCatalogStats> {
  const [structureCount, activeRequestCount, hubs] = await Promise.all([
    fetchCatalogStructureCount(),
    fetchActiveTravelRequestCount({ countryCode: "IT" }),
    listAllDestinationHubs(),
  ]);

  return {
    structureCount,
    activeRequestCount,
    destinationHubCount: hubs.length,
  };
}
