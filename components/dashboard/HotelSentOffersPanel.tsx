"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels } from "@/lib/i18n/labels";

export type HotelSentOffer = {
  id: string;
  offer_code: string | null;
  travel_request_id: string;
  status: string;
  total_price: number;
  meal_plan_included?: string;
  created_at: string;
  travel_requests?: {
    id: string;
    request_code: string | null;
    city_name: string;
    preferred_area: string;
  } | null;
};

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function HotelSentOffersPanel({
  offers,
  loading,
}: {
  offers: HotelSentOffer[];
  loading: boolean;
}) {
  const { t, locale } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);

  return (
    <section id="offerte-inviate" className={`${dashboardSurfaces.panelCream} mt-8 scroll-mt-24`}>
      <h2 className={dashboardSurfaces.sectionTitle}>{t.dashboard.hotel.sentOffersTitle}</h2>
      <p className={dashboardSurfaces.sectionSubtitle}>{t.dashboard.hotel.sentOffersHint}</p>

      <div className="mt-5 space-y-3">
        {loading ? <p className="text-sm text-zinc-500">{t.common.loading}</p> : null}
        {!loading && offers.length === 0 ? (
          <div className={dashboardSurfaces.emptyDashed}>{t.dashboard.hotel.statSentOffersDesc}</div>
        ) : null}
        {offers.map((offer, index) => {
          const request = offer.travel_requests;
          return (
            <article
              key={offer.id}
              className={index % 2 === 0 ? dashboardSurfaces.cardBlue : dashboardSurfaces.cardWhite}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="font-semibold text-zinc-950">
                    {offer.offer_code ?? "OF------"}
                    {request?.request_code ? ` · ${request.request_code}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {request?.city_name ?? t.dashboard.shared.destination}
                    {request?.preferred_area ? ` · ${request.preferred_area}` : ""}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    {formatCurrency(Number(offer.total_price), locale)}
                    {offer.meal_plan_included && mealPlanLabels[offer.meal_plan_included as keyof typeof mealPlanLabels]
                      ? ` · ${mealPlanLabels[offer.meal_plan_included as keyof typeof mealPlanLabels]}`
                      : ""}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                    {offer.status} · {formatDate(offer.created_at, locale)}
                  </p>
                </div>
                {request?.id ? (
                  <Link
                    href={`/struttura/annunci/${request.id}`}
                    className={`inline-flex shrink-0 items-center gap-1 ${dashboardSurfaces.btnPrimarySm}`}
                  >
                    {t.dashboard.hotel.openOffer}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
