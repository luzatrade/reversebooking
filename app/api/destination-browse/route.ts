import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { defaultDestinationCities } from "@/data/defaultDestinationCities";
import { getCityHeroImage } from "@/lib/destination-slider/cityMedia";
import { formatBrowseCityLabel } from "@/lib/destination-slider/slideLabels";
import type { DestinationSliderSlide } from "@/types/destination-slider";

async function buildBrowseSlides(locale: "it" | "en"): Promise<DestinationSliderSlide[]> {
  const slides = await Promise.all(
    defaultDestinationCities.map(async (city) => {
      const cityName = locale === "it" ? city.cityNameIt : city.cityNameEn;
      const countryName = locale === "it" ? city.countryNameIt : city.countryNameEn;
      // Hero curata dal nostro storage; fallback alla foto del catalogo statico.
      const hero = await getCityHeroImage(city.cityId);

      return {
        id: `browse-${city.id}-0`,
        cityId: city.cityId,
        title: formatBrowseCityLabel(cityName),
        photoUrl: hero ?? city.imageUrl,
        kind: "city" as const,
        subtitle: countryName,
      } satisfies DestinationSliderSlide;
    }),
  );

  return slides;
}

const getCachedBrowseSlides = unstable_cache(
  (locale: "it" | "en") => buildBrowseSlides(locale),
  ["destination-browse-slides-v8"],
  { revalidate: 86400 },
);

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale = localeParam === "en" ? "en" : "it";

  try {
    const slides = await getCachedBrowseSlides(locale);
    return NextResponse.json(
      { mode: "browse" as const, slides, source: "curated" as const },
      {
        headers: {
          "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load browse slider";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
