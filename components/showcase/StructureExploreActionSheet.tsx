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
    <div className="hd-explore-map-sheet shrink-0 border-t border-zinc-200 bg-white px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] safe-bottom sm:px-5 sm:py-4">
      <div className="flex items-start gap-3">
        {hotel.main_photo_url ? (
          <img src={hotel.main_photo_url} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
            <Building2 className="h-6 w-6" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-base font-semibold text-zinc-900">{hotel.property_name}</p>
            {hasLastMinuteOffer ? (
              <span className="inline-flex shrink-0 items-center rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-700">
                ⚡ Last Minute
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">{locationLine}</p>
          {hotel.specific_area ? <p className="mt-0.5 line-clamp-1 text-xs text-zinc-400">{hotel.specific_area}</p> : null}
        </div>
      </div>

      <div className={`mt-3 grid gap-2 ${hideRequestButton ? "grid-cols-1" : "grid-cols-2"}`}>
        <Link
          href={structureProfileHref(hotel)}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#e8f0f8] px-4 text-sm font-bold text-[#0f4c81] transition hover:bg-[#d4e4f2]"
        >
          {t.showcase.cardProfile}
        </Link>
        {!hideRequestButton ? (
          <Link
            href={structureRequestHref(hotel)}
            className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-[#fff7ed] px-4 text-sm font-bold text-[#c2410c] transition hover:bg-[#ffedd5]"
          >
            <Euro className="h-4 w-4 shrink-0" />
            {t.showcase.cardRequest}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
