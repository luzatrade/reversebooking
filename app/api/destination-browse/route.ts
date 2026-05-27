import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { defaultDestinationCities } from "@/data/defaultDestinationCities";
import { getCityPhotoVariants } from "@/lib/destination-slider/cityPhotos";
import { formatBrowseCityLabel } from "@/lib/destination-slider/slideLabels";
import type { DestinationSliderSlide } from "@/types/destination-slider";

const PHOTOS_PER_CITY = 3;

async function buildBrowseSlides(locale: "it" | "en"): Promise<DestinationSliderSlide[]> {
  return defaultDestinationCities.flatMap((city) => {
    const cityName = locale === "it" ? city.cityNameIt : city.cityNameEn;
    const countryName = locale === "it" ? city.countryNameIt : city.countryNameEn;
    const photos = getCityPhotoVariants({
      cityName: city.cityNameEn,
      countryCode: city.countryCode,
      cityId: city.cityId,
      count: PHOTOS_PER_CITY,
    });

    return photos.map((photoUrl, index) => ({
      id: `browse-${city.id}-${index}`,
      cityId: city.cityId,
      title: formatBrowseCityLabel(cityName),
      photoUrl,
      kind: "city" as const,
      subtitle: countryName,
    }));
  });
}

const getCachedBrowseSlides = unstable_cache(
  (locale: "it" | "en") => buildBrowseSlides(locale),
  ["destination-browse-slides-v3"],
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
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
        },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load browse slider";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
