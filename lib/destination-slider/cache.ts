import { unstable_cache } from "next/cache";
import { buildFocusSlides } from "@/lib/destination-slider/focusSlides";
import { resolveCanonicalCityId } from "@/lib/destination-slider/cityPhotos";
import { getCityMediaSlides, getCityDescription } from "@/lib/destination-slider/cityMedia";
import type { DestinationSliderResponse } from "@/types/destination-slider";

type FocusParams = {
  cityName: string;
  countryCode?: string | null;
  countryName?: string | null;
  cityId?: string | null;
  locale?: "it" | "en";
};

function resolveSource(slides: Awaited<ReturnType<typeof buildFocusSlides>>): DestinationSliderResponse["source"] {
  if (!slides.length) return "fallback";
  const hasWiki = slides.some((slide) => slide.id.startsWith("wiki-"));
  const hasCurated = slides.some((slide) => slide.id.startsWith("curated-"));
  const hasLive = slides.some((slide) => !slide.id.startsWith("wiki-") && !slide.id.startsWith("curated-"));
  if (hasCurated && !hasWiki && !hasLive) return "curated";
  if (hasWiki && (hasCurated || hasLive)) return "mixed";
  if (hasWiki) return "wikipedia";
  if (hasCurated && hasLive) return "mixed";
  if (hasLive) return "foursquare";
  return "curated";
}

const getCachedFocusSlides = unstable_cache(
  async (cityId: string, countryCode: string, cityName: string, countryName: string, locale: "it" | "en") =>
    buildFocusSlides(
      {
        cityId: cityId || null,
        countryCode: countryCode || null,
        cityName,
        countryName: countryName || null,
      },
      locale,
    ),
  ["destination-slider-focus-v10"],
  { revalidate: 43200 },
);

export async function getFocusSliderResponse(params: FocusParams): Promise<DestinationSliderResponse> {
  const locale = params.locale === "en" ? "en" : "it";

  // Priorità assoluta alla galleria curata servita dal nostro storage (city_media):
  // foto verificate e didascalie coerenti, nessuna chiamata esterna a runtime.
  const canonicalId = resolveCanonicalCityId({
    cityName: params.cityName,
    countryCode: params.countryCode,
    cityId: params.cityId,
  });
  if (canonicalId) {
    const [mediaSlides, description] = await Promise.all([
      getCityMediaSlides(canonicalId, locale),
      getCityDescription(canonicalId, locale),
    ]);
    if (mediaSlides.length > 0) {
      return {
        mode: "focus",
        slides: mediaSlides,
        source: "commons",
        description: description ?? undefined,
      };
    }
  }

  const slides = await getCachedFocusSlides(
    params.cityId ?? "",
    params.countryCode ?? "",
    params.cityName.trim(),
    params.countryName?.trim() ?? "",
    locale,
  );

  return {
    mode: "focus",
    slides,
    source: resolveSource(slides),
  };
}
