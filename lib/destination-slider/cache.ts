import { unstable_cache } from "next/cache";
import { buildFocusSlides } from "@/lib/destination-slider/focusSlides";
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
  ["destination-slider-focus-v7"],
  { revalidate: 43200 },
);

export async function getFocusSliderResponse(params: FocusParams): Promise<DestinationSliderResponse> {
  const locale = params.locale === "en" ? "en" : "it";
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
