"use client";

import { Building2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";

type StructureExploreBrowseStripProps = {
  hotels: StructureExploreHotel[];
  activeHotelId: string | null;
  hotelIdsWithOffer: Set<string>;
  onSelect: (hotelId: string) => void;
};

export function StructureExploreBrowseStrip({
  hotels,
  activeHotelId,
  hotelIdsWithOffer,
  onSelect,
}: StructureExploreBrowseStripProps) {
  const { t } = useLanguage();

  if (hotels.length <= 1) return null;

  return (
    <div className="shrink-0 border-t border-zinc-200 bg-zinc-50 px-4 py-2.5 sm:px-5">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{t.showcase.exploreMapBrowseTitle}</p>
      <div className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {hotels.map((hotel) => {
          const active = hotel.id === activeHotelId;
          return (
            <button
              key={hotel.id}
              type="button"
              onClick={() => onSelect(hotel.id)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 text-left transition ${
                active
                  ? "border-[#f97316] bg-white shadow-sm ring-1 ring-[#f97316]/40"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              {hotel.main_photo_url ? (
                <img src={hotel.main_photo_url} alt="" className="h-8 w-8 rounded-full object-cover" />
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
                  <Building2 className="h-4 w-4" />
                </span>
              )}
              <span className="max-w-[9rem] truncate text-xs font-semibold text-zinc-800">{hotel.property_name}</span>
              {hotelIdsWithOffer.has(hotel.id) ? (
                <span className="text-[10px] font-bold text-orange-600" aria-hidden>
                  ⚡
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
