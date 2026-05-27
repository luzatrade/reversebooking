import { resolveCanonicalCityId } from "@/lib/destination-slider/cityPhotos";
import { isCatalogCity } from "@/lib/destination-slider/catalogCities";
import { buildCuratedSlides, shouldPreferCuratedPack } from "@/lib/destination-slider/curatedSlides";
import { geocodeCity, formatLatLng, formatNearQuery } from "@/lib/foursquare/geocode";
import { isFoursquareConfigured, placeToPhotoSlide, searchPlaces, type FoursquarePlace } from "@/lib/foursquare/client";
import { fetchWikipediaCitySlides } from "@/lib/destination-slider/wikipediaPhotos";
import { isPexelsConfigured, searchCityPhotos } from "@/lib/pexels/client";
import type { DestinationSliderSlide } from "@/types/destination-slider";

const LANDMARK_CATEGORY_IDS = "16000,10027,16032,16046,16026";
/** Massimo slide in modalità focus (pack curato / wiki / POI). */
const MAX_SLIDES = 6;
const MIN_POI_BEFORE_GENERIC = 4;

type FocusInput = {
  cityName: string;
  countryCode?: string | null;
  countryName?: string | null;
  cityId?: string | null;
};

function dedupePlaces(places: FoursquarePlace[]) {
  const seen = new Set<string>();
  return places.filter((place) => {
    const id = place.fsq_place_id;
    if (!id || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

function dedupeSlides(slides: DestinationSliderSlide[]) {
  const seen = new Set<string>();
  return slides.filter((slide) => {
    const key = `${slide.title.toLowerCase()}|${slide.photoUrl}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function wikipediaSlidesLocalized(input: FocusInput, locale: "it" | "en") {
  return fetchWikipediaCitySlides({
    cityName: input.cityName,
    countryCode: input.countryCode,
    countryName: input.countryName,
    locale,
    limit: MAX_SLIDES,
  });
}

async function collectPlaces(location: { near?: string; ll?: string }, query?: string, categoryIds?: string) {
  return searchPlaces({
    near: location.near,
    ll: location.ll,
    query,
    fsqCategoryIds: categoryIds,
    limit: MAX_SLIDES,
  });
}

export async function buildFocusSlides(input: FocusInput, locale: "it" | "en" = "it"): Promise<DestinationSliderSlide[]> {
  const cityLabel = [input.cityName, input.countryName].filter(Boolean).join(", ");
  if (!input.cityName.trim()) return [];

  const canonicalId = resolveCanonicalCityId({
    cityName: input.cityName,
    countryCode: input.countryCode,
    cityId: input.cityId,
  });

  const catalogCity = isCatalogCity(canonicalId);

  if (shouldPreferCuratedPack(input.cityName) || catalogCity) {
    const editorialSlides = await buildCuratedSlides(
      {
        cityName: input.cityName,
        cityId: canonicalId ?? input.cityId,
        countryCode: input.countryCode,
        countryName: input.countryName,
      },
      cityLabel,
      locale,
      MAX_SLIDES,
    );
    if (editorialSlides.length >= (catalogCity ? 1 : 2)) {
      return dedupeSlides(editorialSlides);
    }
  }

  if (catalogCity) {
    return [];
  }

  const wikiSlides = await wikipediaSlidesLocalized(input, locale);
  if (wikiSlides.length >= 2) {
    return dedupeSlides(wikiSlides).slice(0, MAX_SLIDES);
  }

  const curated = async () =>
    buildCuratedSlides(
      {
        cityName: input.cityName,
        cityId: canonicalId ?? input.cityId,
        countryCode: input.countryCode,
        countryName: input.countryName,
      },
      cityLabel,
      locale,
      MAX_SLIDES,
    );

  if (wikiSlides.length > 0) {
    return dedupeSlides(wikiSlides).slice(0, MAX_SLIDES);
  }

  if (!isFoursquareConfigured()) {
    return wikiSlides.length > 0 ? wikiSlides : await curated();
  }

  const geo = await geocodeCity(input.cityName, input.countryName, input.countryCode);
  const near = formatNearQuery(input.cityName, input.countryName);
  const location = geo ? { ll: formatLatLng(geo), near } : { near };

  const poiCandidates = dedupePlaces(
    (
      await Promise.all([
        collectPlaces(location, undefined, LANDMARK_CATEGORY_IDS),
        collectPlaces(location, "landmark", LANDMARK_CATEGORY_IDS),
        collectPlaces(location, "tourist attraction"),
      ])
    ).flat(),
  );

  const slides: DestinationSliderSlide[] = [];
  for (const place of poiCandidates) {
    if (slides.length >= MAX_SLIDES) break;
    const slide = await placeToPhotoSlide(place, cityLabel);
    if (slide) slides.push(slide);
  }

  if (slides.length < MIN_POI_BEFORE_GENERIC) {
    const genericCandidates = await collectPlaces(location, `${input.cityName} sights`);
    for (const place of genericCandidates) {
      if (slides.length >= MAX_SLIDES) break;
      const slide = await placeToPhotoSlide(place, cityLabel);
      if (slide) slides.push({ ...slide, kind: "generic" });
    }
  }

  const unique = dedupeSlides(slides).slice(0, MAX_SLIDES);
  if (unique.length >= MIN_POI_BEFORE_GENERIC) return unique;

  const merged = dedupeSlides([...unique, ...(await curated())]).slice(0, MAX_SLIDES);
  if (merged.length > 0) return merged;

  if (isPexelsConfigured()) {
    const pexelsUrls = await searchCityPhotos(input.cityName, MAX_SLIDES);
    if (pexelsUrls.length > 0) {
      return pexelsUrls.map((url, i) => ({
        id: `pexels-${i}-${input.cityName.slice(0, 20).replace(/\W+/g, "-")}`,
        title: input.cityName,
        photoUrl: url,
        kind: "generic" as const,
        hint: "Photo from Pexels",
      }));
    }
  }

  return curated();
}
