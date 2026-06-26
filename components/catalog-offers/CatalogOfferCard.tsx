"use client";

import Link from "next/link";
import { CalendarDays, Euro, MapPin, Tag } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  destinationLine,
  formatOfferDateRange,
  formatOfferPrice,
  localizedOfferTitle,
  offerCoverUrl,
} from "@/lib/catalog-offers/labels";
import { catalogOfferHref } from "@/lib/identifiers";
import type { CatalogOfferListItem } from "@/types/catalog-offers";

type CatalogOfferCardProps = {
  offer: CatalogOfferListItem;
};

const ctaMaps =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-100";
const ctaProfile =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e8f0f8] px-3.5 py-2 text-xs font-bold text-[#0f4c81] shadow-sm transition hover:bg-[#d4e4f2]";

function mapsHrefForProvider(provider: CatalogOfferListItem["provider"]) {
  const query = [provider.property_name, provider.city_name].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function CatalogOfferCard({ offer }: CatalogOfferCardProps) {
  const { locale, t } = useLanguage();
  const title = localizedOfferTitle(offer, locale);
  const cover = offerCoverUrl(offer);
  const dates = formatOfferDateRange(offer, locale);
  const price = formatOfferPrice(offer, locale);
  const destinations = destinationLine(offer.destinations, locale);

  return (
    <article className="flex w-[18.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:w-[20rem]">
      <div className="relative h-36 w-full overflow-hidden bg-zinc-100">
        {cover ? (
          <img src={cover} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-400">{t.catalogOffers.noPhoto}</div>
        )}
        {offer.hotel_details?.is_weekend_offer ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-semibold text-[#c2410c]">
            {t.catalogOffers.weekendBadge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="line-clamp-2 font-semibold text-[#0f4c81]">{title}</p>
        <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{offer.provider.property_name}</p>
        {destinations ? <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{destinations}</p> : null}
        <div className="mt-3 space-y-1.5 text-sm text-zinc-600">
          <p className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0" /> {dates}
          </p>
          <p className="inline-flex items-center gap-2 font-semibold text-[#0f4c81]">
            <Euro className="h-4 w-4 shrink-0" /> {price}
          </p>
        </div>
        <div className="mt-4 flex-1" />
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={mapsHrefForProvider(offer.provider)}
            target="_blank"
            rel="noreferrer"
            className={ctaMaps}
          >
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardMap}
          </a>
          <Link href={`/hotel/${offer.provider.id}`} className={ctaProfile}>
            {t.showcase.cardProfile}
          </Link>
        </div>
        <Link
          href={catalogOfferHref(offer.offer_code)}
          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0f4c81] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#0d4373]"
        >
          <Tag className="h-4 w-4" /> {t.catalogOffers.viewOffer}
        </Link>
      </div>
    </article>
  );
}
