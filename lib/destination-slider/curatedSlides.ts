import {
  getManualHighlightsForCity,
  highlightsToSlides,
  type CityHighlight,
} from "@/data/cityHighlights";
import { isCatalogCity } from "@/lib/destination-slider/catalogCities";
import { getCityPhotoVariants, resolveCanonicalCityId } from "@/lib/destination-slider/cityPhotos";
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

function buildPoolHighlights(input: CuratedInput): CityHighlight[] {
  const photos = getCityPhotoVariants({
    cityName: input.cityName,
    countryCode: input.countryCode,
    cityId: input.cityId,
    count: 4,
  });

  return photos.map((photoUrl, index) => ({
    id: `pool-${index}`,
    nameIt: index === 0 ? input.cityName : `${input.cityName} · luogo ${index + 1}`,
    nameEn: index === 0 ? input.cityName : `${input.cityName} · place ${index + 1}`,
    photoUrl,
    hintIt: "Foto curata",
    hintEn: "Curated photo",
  }));
}

async function resolveHighlights(input: CuratedInput, locale: "it" | "en") {
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

  // Mete del catalogo: mai etichette generiche + foto Commons a caso (es. "Musei" → cera di Nadal).
  if (isCatalogCity(canonicalId)) {
    return buildPoolHighlights({ ...input, cityId: canonicalId });
  }

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
  const highlights = await resolveHighlights(input, locale);

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
