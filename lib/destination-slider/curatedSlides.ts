import {
  getManualHighlightsForCity,
  highlightsToSlides,
} from "@/data/cityHighlights";
import { resolveCanonicalCityId } from "@/lib/destination-slider/cityPhotos";
import { fetchCommonsPhotoUrl } from "@/lib/destination-slider/commonsPhotos";
import { getDynamicEditorialHighlights } from "@/lib/destination-slider/dynamicEditorial";
import type { DestinationSliderSlide } from "@/types/destination-slider";

type CuratedInput = {
  cityName: string;
  countryCode?: string | null;
  countryName?: string | null;
  cityId?: string | null;
};

async function resolveHighlightPhotoUrl(highlight: {
  photoUrl: string;
  commonsSearch?: string;
}) {
  if (highlight.photoUrl.includes("wikimedia.org")) return highlight.photoUrl;
  if (highlight.commonsSearch) {
    const fromCommons = await fetchCommonsPhotoUrl(highlight.commonsSearch);
    if (fromCommons) return fromCommons;
  }
  return highlight.photoUrl;
}

async function resolveHighlights(input: CuratedInput) {
  const canonicalId =
    resolveCanonicalCityId({
      cityName: input.cityName,
      countryCode: input.countryCode,
      cityId: input.cityId,
    }) ?? input.cityId ?? "";

  const manual = getManualHighlightsForCity({
    cityName: input.cityName,
    cityId: canonicalId,
    countryCode: input.countryCode,
  });

  if (manual.length > 0) return manual;

  return getDynamicEditorialHighlights({
    cityId: canonicalId,
    cityName: input.cityName,
    countryCode: input.countryCode ?? "",
    countryName: input.countryName ?? input.countryCode ?? "",
  });
}

export async function buildCuratedSlides(
  input: CuratedInput,
  cityLabel: string,
  locale: "it" | "en",
  maxSlides = 6,
): Promise<DestinationSliderSlide[]> {
  const highlights = await resolveHighlights(input);

  const enriched = await Promise.all(
    highlights.map(async (item) => ({
      ...item,
      photoUrl: await resolveHighlightPhotoUrl(item),
    })),
  );

  return highlightsToSlides(enriched, cityLabel, locale, { editorial: true }).slice(0, maxSlides);
}

export function shouldPreferCuratedPack(cityName: string) {
  return Boolean(cityName.trim());
}
