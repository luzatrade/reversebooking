import type { Metadata } from "next";
import Link from "next/link";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { getMealPlanLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import { publicRequests } from "@/lib/demo/public-requests";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Annunci demo · HotelsDrop",
    description: "Anteprima demo di richieste di soggiorno — pagina non indicizzata.",
    robots: { index: false, follow: true },
  };
}

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function PublicRequestsPage() {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const mealPlanLabels = getMealPlanLabels(locale);
  const structureTypeLabels = getStructureTypeLabels(locale);
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.publicLanding.annunciEyebrow}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">{t.publicLanding.annunciTitle}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">{t.publicLanding.annunciDescription}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/registrazione"
              className="rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              {t.publicLanding.registerYourStructure}
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              {t.publicLanding.signInAsHotel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {publicRequests.map((request) => (
          <article
            key={request.id}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {request.advertiserType}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {request.preferredStructureType === "all"
                      ? t.values.preferredStructureAll
                      : structureTypeLabels[request.preferredStructureType]}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {mealPlanLabels[request.mealPlan]}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-950">
                  {request.cityName}, {request.countryName}
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-700">
                  {t.common.preferredArea}: <span className="text-zinc-950">{request.preferredArea}</span>
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 px-5 py-4 text-left lg:min-w-56">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{t.publicLanding.indicativeBudget}</p>
                <p className="mt-1 text-2xl font-semibold text-zinc-950">{formatCurrency(request.budget, locale)}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-zinc-100 p-4">
                <p className="text-xs text-zinc-500">{t.common.checkIn}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{formatDate(request.checkIn, locale)}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4">
                <p className="text-xs text-zinc-500">{t.common.checkOut}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{formatDate(request.checkOut, locale)}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4">
                <p className="text-xs text-zinc-500">{t.common.guests}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{request.guestsCount}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4">
                <p className="text-xs text-zinc-500">{t.common.rooms}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{request.roomsCount}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-600">{request.notes}</p>

            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-500">{t.publicLanding.advertiserContactsHidden}</p>
              <Link
                href="/registrazione"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                {t.publicLanding.registerToContact}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
