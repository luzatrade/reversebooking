"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";

type TravelRequest = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  status: string;
  check_in: string;
  check_out: string;
};

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

export function AdvertiserRequestsPanel({
  requests,
  loading,
}: {
  requests: TravelRequest[];
  loading: boolean;
}) {
  const { t, locale } = useLanguage();
  const visibleRequests = requests.filter((request) => request.status !== "deleted");

  if (loading) {
    return (
      <section id="annunci-attivi" className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">{t.common.loading}</p>
      </section>
    );
  }

  return (
    <section id="annunci-attivi" className="mt-8 scroll-mt-24 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#0c3d66]">{t.dashboard.advertiser.listingsOverviewTitle}</h2>
      <p className="mt-2 text-sm text-zinc-600">
        {formatMessage(t.dashboard.advertiser.listingsOverviewCount, { count: visibleRequests.length })}
      </p>
      <p className="mt-1 text-sm text-zinc-500">{t.dashboard.advertiser.listingsOverviewHint}</p>

      {visibleRequests.length === 0 ? (
        <div className={`${dashboardSurfaces.emptyDashed} mt-5`}>{t.dashboard.shared.statActiveListingsDesc}</div>
      ) : (
        <div className="mt-5 space-y-3">
          {visibleRequests.map((request, index) => (
            <Link
              key={request.id}
              href={`/inserzionista/annunci/${request.id}`}
              className={`flex items-center justify-between gap-4 rounded-2xl border p-4 transition hover:ring-2 hover:ring-[#0f4c81]/20 ${
                index % 2 === 0 ? dashboardSurfaces.cardBlue : dashboardSurfaces.cardWhite
              }`}
            >
              <div className="min-w-0">
                <p className="font-semibold text-zinc-950">
                  {request.request_code ?? "RB------"} · {request.city_name}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {request.preferred_area} · {formatDate(request.check_in, locale)} → {formatDate(request.check_out, locale)}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500">{request.status}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0f4c81]">
                {t.dashboard.advertiser.listingOpen}
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
