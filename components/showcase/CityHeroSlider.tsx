"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { findCityById } from "@/lib/constants/world-city-helpers";
import type { WorldCity } from "@/lib/constants/world-cities";
import type { DestinationSliderResponse, DestinationSliderSlide } from "@/types/destination-slider";
import { slideDisplayTitle } from "@/lib/destination-slider/slideLabels";
import { HeroSlideImage } from "@/components/showcase/HeroSlideImage";

type CityHeroSliderProps = {
  selectedCity: WorldCity;
  onSelectCity?: (city: WorldCity) => void;
};

function shuffleSlides<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function CityHeroSlider({ selectedCity, onSelectCity }: CityHeroSliderProps) {
  const { t, locale } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [browseSlides, setBrowseSlides] = useState<DestinationSliderSlide[]>([]);
  const [browseLoading, setBrowseLoading] = useState(true);
  const [focusSlides, setFocusSlides] = useState<DestinationSliderSlide[]>([]);
  const [focusSource, setFocusSource] = useState<DestinationSliderResponse["source"] | null>(null);
  const [focusLoading, setFocusLoading] = useState(false);

  const hasSelectedCity = Boolean(selectedCity.city_name.trim());
  const slides = hasSelectedCity ? focusSlides : browseSlides;
  const slideCount = slides.length;
  const isLoading = hasSelectedCity ? focusLoading : browseLoading;

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const children = Array.from(container.children) as HTMLElement[];
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, [slideCount, isLoading]);

  useEffect(() => {
    setActiveIndex(0);
    scrollToIndex(0);
  }, [hasSelectedCity, selectedCity.city_id, scrollToIndex]);

  useEffect(() => {
    const controller = new AbortController();
    setBrowseLoading(true);

    void fetch(`/api/destination-browse?locale=${locale}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Failed to load browse slider");
        return response.json() as Promise<{ slides?: DestinationSliderSlide[] }>;
      })
      .then((payload) => {
        setBrowseSlides(shuffleSlides(payload.slides ?? []));
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setBrowseSlides([]);
      })
      .finally(() => {
        if (!controller.signal.aborted) setBrowseLoading(false);
      });

    return () => controller.abort();
  }, [locale]);

  useEffect(() => {
    const cityName = selectedCity.city_name.trim();
    if (!cityName) {
      setFocusSlides([]);
      setFocusSource(null);
      setFocusLoading(false);
      return;
    }

    const controller = new AbortController();
    setFocusLoading(true);

    const params = new URLSearchParams({
      cityName,
      countryCode: selectedCity.country_code || "",
      countryName: selectedCity.country_name || "",
      cityId: selectedCity.city_id || "",
      locale,
    });

    void fetch(`/api/destination-slider?${params.toString()}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Failed to load destination slider");
        return response.json() as Promise<DestinationSliderResponse>;
      })
      .then((payload) => {
        setFocusSlides(payload.slides ?? []);
        setFocusSource(payload.source ?? "fallback");
        setActiveIndex(0);
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setFocusSlides([]);
        setFocusSource(null);
      })
      .finally(() => {
        if (!controller.signal.aborted) setFocusLoading(false);
      });

    return () => controller.abort();
  }, [
    locale,
    selectedCity.city_id,
    selectedCity.city_name,
    selectedCity.country_code,
    selectedCity.country_name,
  ]);

  const displaySlides = useMemo(
    () =>
      slides.map((slide) => ({
        ...slide,
        displayTitle:
          slide.id.startsWith("curated-") || slide.id.startsWith("browse-")
            ? slide.title
            : slideDisplayTitle(slide, selectedCity.city_name, !hasSelectedCity),
      })),
    [slides, selectedCity.city_name, hasSelectedCity],
  );

  function handleBrowseSelect(slide: DestinationSliderSlide) {
    if (!slide.cityId || !onSelectCity) return;
    onSelectCity(findCityById(slide.cityId));
  }

  const headerTitle = hasSelectedCity
    ? formatMessage(t.destinationShowcase.titleFocus, { city: selectedCity.city_name })
    : t.destinationShowcase.titleBrowse;

  const headerSubtitle = hasSelectedCity
    ? slideCount > 1
      ? t.destinationShowcase.swipeHint
      : formatMessage(t.destinationShowcase.subtitleFocus, { city: selectedCity.city_name })
    : t.destinationShowcase.subtitleBrowse;

  const usesWikipediaPhotos =
    hasSelectedCity &&
    !focusLoading &&
    focusSlides.some((slide) => slide.id.startsWith("wiki-"));

  const showWikipediaAttribution = usesWikipediaPhotos && !isLoading;

  const showFoursquareAttribution =
    hasSelectedCity && !focusLoading && focusSlides.length > 0 && focusSource === "foursquare" && !usesWikipediaPhotos;

  const showCuratedAttribution =
    hasSelectedCity &&
    !focusLoading &&
    focusSlides.length > 0 &&
    !usesWikipediaPhotos &&
    (focusSource === "curated" || focusSource === "fallback");

  return (
    <section className="hd-hero-slider p-4 sm:p-5">
      <div className="mb-3 flex items-end justify-between gap-3 sm:mb-4">
        <div className="min-w-0">
          <h2 className="hd-bento-title truncate">{headerTitle}</h2>
          <p className="hd-bento-subtitle">{headerSubtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {hasSelectedCity && slideCount > 1 ? (
            <span className="hd-hero-counter" aria-live="polite">
              {formatMessage(t.destinationShowcase.slideCounter, {
                current: String(activeIndex + 1),
                total: String(slideCount),
              })}
            </span>
          ) : null}
          {slideCount > 1 ? (
            <>
              <button
                type="button"
                aria-label={t.destinationShowcase.prev}
                onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
                className="hd-hero-nav inline-flex h-9 w-9 items-center justify-center"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={t.destinationShowcase.next}
                onClick={() => scrollToIndex(Math.min(activeIndex + 1, slideCount - 1))}
                className="hd-hero-nav inline-flex h-9 w-9 items-center justify-center"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          ) : null}
        </div>
      </div>

      <div className="relative -mx-1 sm:mx-0">
        {isLoading ? (
          <div aria-hidden className="hd-hero-media animate-pulse bg-slate-200" />
        ) : slideCount === 0 ? (
          <div className="hd-hero-media flex items-center justify-center border border-dashed border-slate-300 bg-slate-50 px-4 text-sm text-slate-500">
            {t.destinationShowcase.emptyFocus}
          </div>
        ) : (
          <div ref={scrollRef} className="hd-hero-track">
            {displaySlides.map((slide, index) => {
              const isActive = index === activeIndex;
              const isBrowse = !hasSelectedCity;
              const slideClass = `hd-hero-slide${isActive ? " hd-hero-slide--active" : ""}`;

              const media = (
                <div className="hd-hero-media">
                  <HeroSlideImage
                    src={slide.photoUrl}
                    alt={slide.displayTitle}
                    slideId={slide.id}
                    loading={index <= 1 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                  <div className="hd-hero-overlay" aria-hidden />
                  {isBrowse ? (
                    <div className="hd-hero-browse-cta" aria-hidden>
                      <MapPin className="h-4 w-4" />
                      <span>{t.destinationShowcase.tapToExplore}</span>
                    </div>
                  ) : null}
                  <div className="hd-hero-caption">
                    <h3 className="hd-hero-caption-title">{slide.displayTitle}</h3>
                    {hasSelectedCity && (slide.hint || slide.subtitle) ? (
                      <p className="hd-hero-caption-meta">{slide.hint ?? slide.subtitle}</p>
                    ) : null}
                  </div>
                </div>
              );

              return (
                <article key={slide.id} className={slideClass}>
                  {isBrowse ? (
                    <button type="button" onClick={() => handleBrowseSelect(slide)} className="block w-full text-left">
                      {media}
                    </button>
                  ) : (
                    media
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      {!isLoading && slideCount > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-2 sm:mt-4">
          {displaySlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={formatMessage(t.destinationShowcase.goToSlide, { city: slide.displayTitle })}
              onClick={() => scrollToIndex(index)}
              className={`hd-hero-dot${index === activeIndex ? " hd-hero-dot--active" : ""}`}
            />
          ))}
        </div>
      ) : null}

      {hasSelectedCity && !focusLoading && focusSlides.length > 1 ? (
        <div className="hd-hero-places mt-3 sm:mt-4">
          <p className="hd-hero-places-label">
            {focusSlides.some((s) => s.id.startsWith("curated-"))
              ? t.destinationShowcase.placesEditorial
              : usesWikipediaPhotos
                ? t.destinationShowcase.placesFromWikipedia
                : t.destinationShowcase.placesToSee}
          </p>
          <div className="hd-hero-places-track" role="tablist" aria-label={t.destinationShowcase.placesToSee}>
            {displaySlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => scrollToIndex(index)}
                className={`hd-hero-place-chip${index === activeIndex ? " hd-hero-place-chip--active" : ""}`}
              >
                {slide.displayTitle}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {!isLoading && slideCount > 0 ? (
        <p className="mt-2 text-center text-[11px] text-slate-400">
          {showWikipediaAttribution
            ? t.destinationShowcase.photoAttributionWikipedia
            : showFoursquareAttribution
              ? t.destinationShowcase.photoAttribution
              : showCuratedAttribution
                ? t.destinationShowcase.photoAttributionCurated
                : null}
        </p>
      ) : null}
    </section>
  );
}
