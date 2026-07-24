import { listPopularDestinations } from "@/lib/seo/destination-queries";
import type { DestinationHub } from "@/lib/seo/destination-queries";

export async function listRelatedDestinations(
  currentSlug: string,
  countryCode: string | null,
  limit = 6,
): Promise<DestinationHub[]> {
  const popular = await listPopularDestinations();
  const sameCountry = popular.filter(
    (hub) => hub.slug !== currentSlug && (!countryCode || hub.countryCode === countryCode),
  );

  if (sameCountry.length >= limit) return sameCountry.slice(0, limit);

  const fallback = popular.filter((hub) => hub.slug !== currentSlug && !sameCountry.some((item) => item.slug === hub.slug));
  return [...sameCountry, ...fallback].slice(0, limit);
}
