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
  /** Una card per viewport, frecce grandi e contatore posizione. */
  singleCard?: boolean;
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
  singleCard = false,
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
    child?.scrollIntoView({ behavior: "smooth", inline: singleCard ? "center" : "start", block: "nearest" });
  }, [itemCount, singleCard]);

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

  const showNav = itemCount > 1;

  return (
    <section id={sectionId} className={cn("hd-feed-card scroll-mt-24 p-4 sm:p-5", sectionClassName)}>
      <div className={cn("mb-3 flex items-end justify-between gap-3", singleCard ? "sm:mb-4" : "sm:mb-4")}>
        <div className="min-w-0">
          <h2 className={cn("hd-bento-title", singleCard ? "whitespace-normal" : "truncate", titleClassName)}>{title}</h2>
          {subtitle ? <p className={cn("hd-bento-subtitle", subtitleClassName)}>{subtitle}</p> : null}
        </div>
        {showNav && !singleCard ? (
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

      <div className={cn("relative", singleCard && showNav && "px-12 sm:px-14")}>
        {showNav && singleCard ? (
          <>
            <button
              type="button"
              aria-label={prevLabel}
              onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
              disabled={activeIndex === 0}
              className="hd-hero-nav absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#0f4c81] bg-white shadow-xl transition hover:bg-[#0f4c81] hover:text-white disabled:pointer-events-none disabled:opacity-35 sm:h-14 sm:w-14"
            >
              <ChevronLeft className="h-6 w-6 text-[#0f4c81] group-hover:text-white" />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={() => scrollToIndex(Math.min(activeIndex + 1, itemCount - 1))}
              disabled={activeIndex >= itemCount - 1}
              className="hd-hero-nav absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#0f4c81] bg-white shadow-xl transition hover:bg-[#0f4c81] hover:text-white disabled:pointer-events-none disabled:opacity-35 sm:h-14 sm:w-14"
            >
              <ChevronRight className="h-6 w-6 text-[#0f4c81]" />
            </button>
          </>
        ) : null}

        <div
          ref={scrollRef}
          className={cn(
            "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            singleCard ? "gap-0 scroll-px-0" : "gap-4",
            singleCard && "[&>article]:w-full [&>article]:max-w-none [&>article]:flex-[0_0_100%] [&>article]:snap-center",
          )}
        >
          {children}
        </div>
      </div>

      {singleCard && showNav ? (
        <p className="mt-2 text-center text-xs font-medium text-zinc-500" aria-live="polite">
          {activeIndex + 1} / {itemCount}
        </p>
      ) : null}

      {footer ? <div className="mt-4 flex justify-center">{footer}</div> : null}
    </section>
  );
}
