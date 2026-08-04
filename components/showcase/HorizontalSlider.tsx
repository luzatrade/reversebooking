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
  /** Solo swipe/scroll: niente frecce né contatore. */
  hideNavigation?: boolean;
  /** Larghezza card responsive: ~2 su mobile, ~4 su desktop. */
  denseGrid?: boolean;
  footer?: ReactNode;
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
  hideNavigation = false,
  denseGrid = false,
  footer,
}: HorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, itemCount - 1));
    setActiveIndex(clamped);
    const child = container.children[clamped] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [itemCount]);

  useEffect(() => {
    if (hideNavigation) return;
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
  }, [hideNavigation, itemCount]);

  const showNav = !hideNavigation && itemCount > 1;

  return (
    <section id={sectionId} className={cn("hd-feed-card scroll-mt-24 p-4 sm:p-5", sectionClassName)}>
      <div className="mb-3 flex items-end justify-between gap-3 sm:mb-4">
        <div className="min-w-0">
          <h2 className={cn("hd-bento-title", denseGrid ? "whitespace-normal" : "truncate", titleClassName)}>{title}</h2>
          {subtitle ? <p className={cn("hd-bento-subtitle", subtitleClassName)}>{subtitle}</p> : null}
        </div>
        {showNav ? (
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
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          denseGrid ? "gap-3 scroll-px-0" : "gap-4 pb-2",
          denseGrid &&
            "[&>article]:w-[calc(50%-6px)] [&>article]:max-w-[calc(50%-6px)] [&>article]:flex-[0_0_calc(50%-6px)] [&>article]:snap-start sm:[&>article]:w-[calc(33.333%-8px)] sm:[&>article]:max-w-[calc(33.333%-8px)] sm:[&>article]:flex-[0_0_calc(33.333%-8px)] lg:[&>article]:w-[calc(25%-9px)] lg:[&>article]:max-w-[calc(25%-9px)] lg:[&>article]:flex-[0_0_calc(25%-9px)]",
        )}
      >
        {children}
      </div>

      {footer ? <div className="mt-4 flex justify-center">{footer}</div> : null}
    </section>
  );
}
