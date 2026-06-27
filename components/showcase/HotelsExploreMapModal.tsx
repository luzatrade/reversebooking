"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HotelsExploreMapPanelLoader } from "@/components/showcase/HotelsExploreMapPanelLoader";
import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";

const HotelsExploreMapPanel = dynamic(
  () => import("@/components/showcase/HotelsExploreMapPanel").then((mod) => mod.HotelsExploreMapPanel),
  {
    ssr: false,
    loading: () => <HotelsExploreMapPanelLoader />,
  },
);

type HotelsExploreMapModalProps = {
  open: boolean;
  onClose: () => void;
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
  hotels: StructureExploreHotel[];
  hotelIdsWithOffer: Set<string>;
  hideRequestButton?: boolean;
  initialActiveHotelId?: string | null;
};

export function HotelsExploreMapModal({
  open,
  onClose,
  cityName,
  cityId,
  countryCode,
  hotels,
  hotelIdsWithOffer,
  hideRequestButton = false,
  initialActiveHotelId = null,
}: HotelsExploreMapModalProps) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("hd-map-explore-open");
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("hd-map-explore-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="hd-explore-map-modal fixed inset-0 z-[200] flex items-stretch justify-center bg-black/45 p-0 md:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.showcase.exploreMapCta}
        className="relative flex h-full w-full min-h-0 flex-col overflow-hidden bg-white md:h-[min(90vh,820px)] md:max-w-6xl md:rounded-3xl md:shadow-2xl"
      >
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-200 px-3 py-2 md:px-5 md:py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-zinc-900">{t.showcase.exploreMapTitle}</p>
            <p className="truncate text-xs text-zinc-500">{cityName}</p>
            <p className="mt-0.5 hidden truncate text-[11px] text-zinc-400 md:block">{t.showcase.exploreMapSliderHint}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 md:h-10 md:w-10"
            aria-label={t.common.close}
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1">
          <HotelsExploreMapPanel
            hotels={hotels}
            centerCityName={cityName}
            centerCityId={cityId}
            centerCountryCode={countryCode}
            hotelIdsWithOffer={hotelIdsWithOffer}
            hideRequestButton={hideRequestButton}
            initialActiveHotelId={initialActiveHotelId}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
