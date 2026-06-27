"use client";

import Link from "next/link";
import { Building2, Euro } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getStructureTypeLabels } from "@/lib/i18n/labels";
import { structureProfileHref, structureRequestHref } from "@/lib/showcase/structureExploreLinks";
import type { StructureExploreHotel } from "@/components/showcase/StructureExploreCard";

type StructureExploreActionSheetProps = {
  hotel: StructureExploreHotel;
  hideRequestButton?: boolean;
  hasLastMinuteOffer?: boolean;
};

function countryLabel(code: string | null | undefined, locale: string) {
  const c = (code ?? "").trim().toUpperCase();
  if (!c) return null;
  try {
    return new Intl.DisplayNames([locale === "en" ? "en" : "it"], { type: "region" }).of(c) ?? c;
  } catch {
    return c;
  }
}

export function StructureExploreActionSheet({
  hotel,
  hideRequestButton = false,
  hasLastMinuteOffer = false,
}: StructureExploreActionSheetProps) {
  const { locale, t } = useLanguage();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const country = countryLabel(hotel.country_code, locale);
  const locationLine = `${structureTypeLabels[hotel.structure_type]} · ${hotel.city_name}${country ? `, ${country}` : ""}`;

  return (
    <div className="hd-explore-map-sheet shrink-0 border-t border-zinc-200 bg-white px-3 py-2 shadow-[0_-6px_20px_rgba(15,23,42,0.07)] safe-bottom sm:px-4 sm:py-3 md:px-5 md:py-4">
      <div className="flex items-center gap-2.5 md:items-start md:gap-3">
        {hotel.main_photo_url ? (
          <img src={hotel.main_photo_url} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover md:h-14 md:w-14 md:rounded-xl" />
        ) : (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400 md:h-14 md:w-14 md:rounded-xl">
            <Building2 className="h-4 w-4 md:h-6 md:w-6" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
            <p className="truncate text-sm font-semibold text-zinc-900 md:text-base">{hotel.property_name}</p>
            {hasLastMinuteOffer ? (
              <span className="inline-flex shrink-0 items-center rounded-full bg-orange-100 px-1.5 py-px text-[10px] font-bold text-orange-700 md:px-2 md:py-0.5 md:text-[11px]">
                ⚡
              </span>
            ) : null}
          </div>
          <p className="truncate text-[11px] text-zinc-500 md:mt-0.5 md:text-xs">{locationLine}</p>
          {hotel.specific_area ? (
            <p className="hidden truncate text-xs text-zinc-400 md:mt-0.5 md:block">{hotel.specific_area}</p>
          ) : null}
        </div>
      </div>

      <div className={`mt-2 grid gap-1.5 md:mt-3 md:gap-2 ${hideRequestButton ? "grid-cols-1" : "grid-cols-2"}`}>
        <Link
          href={structureProfileHref(hotel)}
          className="inline-flex min-h-9 items-center justify-center rounded-full bg-[#e8f0f8] px-2.5 text-[11px] font-semibold text-[#0f4c81] transition hover:bg-[#d4e4f2] md:min-h-12 md:px-4 md:text-sm md:font-bold"
        >
          {t.showcase.cardProfile}
        </Link>
        {!hideRequestButton ? (
          <Link
            href={structureRequestHref(hotel)}
            className="inline-flex min-h-9 items-center justify-center gap-1 rounded-full bg-[#fff7ed] px-2.5 text-[11px] font-semibold text-[#c2410c] transition hover:bg-[#ffedd5] md:min-h-12 md:gap-1.5 md:px-4 md:text-sm md:font-bold"
          >
            <Euro className="h-3 w-3 shrink-0 md:h-4 md:w-4" />
            {t.showcase.cardRequest}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
