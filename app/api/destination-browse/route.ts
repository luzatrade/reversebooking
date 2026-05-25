import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { defaultDestinationCities } from "@/data/defaultDestinationCities";
import { getCityHeroImage } from "@/lib/destination-slider/cityPhotos";
import { formatBrowseCityLabel } from "@/lib/destination-slider/slideLabels";
import { fetchWikipediaHeroImage } from "@/lib/destination-slider/wikipediaPhotos";
import type { DestinationSliderSlide } from "@/types/destination-slider";

async function buildBrowseSlides(locale: "it" | "en"): Promise<DestinationSliderSlide[]> {
  const slides = await Promise.all(
    defaultDestinationCities.map(async (city) => {
      const cityName = locale === "it" ? city.cityNameIt : city.cityNameEn;
      const countryName = locale === "it" ? city.countryNameIt : city.countryNameEn;
      const wikiPhoto = await fetchWikipediaHeroImage({
        cityName: city.cityNameEn,
        countryCode: city.countryCode,
        locale,
      });

      return {
        id: `browse-${city.id}`,
        cityId: city.cityId,
        title: formatBrowseCityLabel(cityName),
        photoUrl:
          wikiPhoto ??
          getCityHeroImage({
            cityName: city.cityNameEn,
            countryCode: city.countryCode,
            cityId: city.cityId,
          }),
        kind: "city" as const,
        subtitle: countryName,
      };
    }),
  );

  return slides;
}

const getCachedBrowseSlides = unstable_cache(
  (locale: "it" | "en") => buildBrowseSlides(locale),
  ["destination-browse-slides"],
  { revalidate: 86400 },
);

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale = localeParam === "en" ? "en" : "it";

  try {
    const slides = await getCachedBrowseSlides(locale);
    return NextResponse.json(
      { mode: "browse" as const, slides, source: "wikipedia" as const },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
        },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load browse slider";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
