import type { Metadata } from "next";
import { Suspense } from "react";
import { CreateListingBackLink } from "@/components/requests/CreateListingBackLink";
import { CreateTravelRequestForm } from "@/components/requests/CreateTravelRequestForm";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";

const CREATE_LISTING_PATH = "/inserzionista/crea-annuncio";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const locale = await getServerLocale();

  return {
    title: t.metadata.createListingTitle,
    description: t.metadata.createListingDescription,
    alternates: {
      canonical: canonicalUrl(localizedPath(locale, CREATE_LISTING_PATH)),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function Page() {
  const t = await getServerTranslations();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <CreateListingBackLink />
      <div className="mt-6">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.pages.createListing.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t.pages.createListing.title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">{t.pages.createListing.intro}</p>
      </div>
      <div className="mt-8">
        <Suspense
          fallback={
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">
              {t.pages.createListing.loadingForm}
            </div>
          }
        >
          <CreateTravelRequestForm />
        </Suspense>
      </div>
    </main>
  );
}
