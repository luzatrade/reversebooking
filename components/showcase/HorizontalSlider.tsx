"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HorizontalSliderProps = {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  sectionId?: string;
  sectionClassName?: string;
  /** Numero di elementi reali (serve a mostrare/nascondere le frecce). */
  itemCount: number;
  children: ReactNode;
  prevLabel?: string;
  nextLabel?: string;
};

/**
 * Slider orizzontale generico in stile "mete in evidenza": titolo + frecce,
 * track scrollabile con snap. I figli devono avere larghezza fissa e classe
 * `snap-start shrink-0` (vedi le card compatte nella home).
 */
export function HorizontalSlider({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  sectionId,
  sectionClassName,
  itemCount,
  children,
  prevLabel = "Precedente",
  nextLabel = "Successivo",
}: HorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const items = Array.from(container.children) as HTMLElement[];
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDistance = Number.POSITIVE_INFINITY;
      items.forEach((child, index) => {
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
  }, [itemCount]);

  return (
    <section id={sectionId} className={cn("hd-feed-card scroll-mt-24 p-4 sm:p-5", sectionClassName)}>
      <div className="mb-3 flex items-end justify-between gap-3 sm:mb-4">
        <div className="min-w-0">
          <h2 className={cn("hd-bento-title truncate", titleClassName)}>{title}</h2>
          {subtitle ? <p className={cn("hd-bento-subtitle", subtitleClassName)}>{subtitle}</p> : null}
        </div>
        {itemCount > 1 ? (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label={prevLabel}
              onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
              className="hd-hero-nav inline-flex h-9 w-9 items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={() => scrollToIndex(Math.min(activeIndex + 1, itemCount - 1))}
              className="hd-hero-nav inline-flex h-9 w-9 items-center justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </section>
  );
}
