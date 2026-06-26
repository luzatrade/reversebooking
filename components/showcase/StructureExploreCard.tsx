"use client";

import Link from "next/link";
import { Building2, Euro, MapPin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getStructureTypeLabels } from "@/lib/i18n/labels";
import type { StructureType } from "@/types/app";

export type StructureExploreHotel = {
  id: string;
  property_name: string;
  structure_type: StructureType;
  country_code: string | null;
  city_name: string;
  city_id: string | null;
  specific_area: string | null;
  description: string | null;
  main_photo_url: string | null;
  latitude?: number | null;
  longitude?: number | null;
  isOnboarding?: boolean;
};

const ctaMaps =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-100";
const ctaProfile =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e8f0f8] px-3.5 py-2 text-xs font-bold text-[#0f4c81] shadow-sm transition hover:bg-[#d4e4f2]";
const ctaRequest =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#fff7ed] px-3.5 py-2 text-xs font-bold text-[#c2410c] shadow-sm transition hover:bg-[#ffedd5]";

function countryLabel(code: string | null | undefined) {
  const c = (code ?? "").trim().toUpperCase();
  if (!c) return null;
  try {
    return new Intl.DisplayNames(["it"], { type: "region" }).of(c) ?? c;
  } catch {
    return c;
  }
}

function mapsHref(hotel: StructureExploreHotel) {
  const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function createRequestHrefForHotel(hotel: Pick<StructureExploreHotel, "id" | "city_id" | "city_name">) {
  if (!hotel.city_name.trim()) return "/inserzionista/crea-annuncio";
  return `/inserzionista/crea-annuncio?city_id=${encodeURIComponent(hotel.city_id ?? "")}&city=${encodeURIComponent(hotel.city_name)}&hotel_id=${encodeURIComponent(hotel.id)}`;
}

function publicHotelDescription(description: string | null) {
  const value = description?.trim() ?? "";
  if (!value) return null;
  const lower = value.toLowerCase();
  if (
    lower.includes("profilo struttura creato") ||
    lower.includes("da completare nel pannello struttura") ||
    lower.includes("accesso social")
  ) {
    return null;
  }
  return value;
}

type StructureExploreCardProps = {
  hotel: StructureExploreHotel;
  hideRequestButton?: boolean;
  className?: string;
};

export function StructureExploreCard({ hotel, hideRequestButton = false, className = "" }: StructureExploreCardProps) {
  const { locale, t } = useLanguage();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const country = countryLabel(hotel.country_code);
  const locationLine = `${structureTypeLabels[hotel.structure_type]} · ${hotel.city_name}${country ? `, ${country}` : ""}`;
  const description = publicHotelDescription(hotel.description);

  return (
    <article
      data-hotel-id={hotel.id}
      className={`flex w-[min(85vw,18.5rem)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 sm:w-[20rem] ${className}`}
    >
      {hotel.main_photo_url ? (
        <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-36 w-full object-cover" />
      ) : (
        <div className="flex h-36 w-full items-center justify-center bg-zinc-100 text-zinc-400">
          <Building2 className="h-8 w-8" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <p className="font-semibold">{hotel.property_name}</p>
        <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{locationLine}</p>
        {description ? <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{description}</p> : null}
        <div className="mt-4 flex-1" />
        <div className="flex flex-wrap items-center gap-2">
          <a href={mapsHref(hotel)} target="_blank" rel="noreferrer" className={ctaMaps}>
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardMap}
          </a>
          {hotel.isOnboarding ? (
            <Link href={`/hotel/onboarding/${hotel.id}`} className={ctaProfile}>
              {t.showcase.cardProfile}
            </Link>
          ) : (
            <Link href={`/hotel/${hotel.id}`} className={ctaProfile}>
              {t.showcase.cardProfile}
            </Link>
          )}
          {!hideRequestButton ? (
            <Link href={createRequestHrefForHotel(hotel)} className={ctaRequest}>
              <Euro className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardRequest}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
