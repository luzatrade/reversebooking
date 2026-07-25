import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import { CityHeroPlaceholder } from "@/components/seo/CityHeroPlaceholder";
import { SeoImage } from "@/components/seo/SeoImage";
import { DestinationHowItWorksBlock } from "@/components/seo/DestinationHowItWorksBlock";
import { FaqSection } from "@/components/seo/FaqSection";
import { RelatedDestinationsStrip } from "@/components/seo/RelatedDestinationsStrip";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { getServerLocale } from "@/lib/i18n/get-translations";
import {
  getDestinationEditorial,
  getDestinationFaq,
  getDestinationHowItWorks,
  getMarketingLabels,
} from "@/lib/i18n/seo-marketing";
import { buildDestinationIntro } from "@/lib/seo/destination-metadata";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import type { DestinationHub, DestinationStructureItem } from "@/lib/seo/destination-queries";
import { destinationPublicPath, homePath, localizedPath, structurePublicPath } from "@/lib/i18n/routing";

type Props = {
  hub: DestinationHub;
  items: DestinationStructureItem[];
  page: number;
  totalPages: number;
  relatedDestinations?: DestinationHub[];
};

export async function DestinationHubPage({ hub, items, page, totalPages, relatedDestinations = [] }: Props) {
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);
  const intro = buildDestinationIntro(hub, locale);
  const editorial = getDestinationEditorial(hub.slug, hub.displayName, hub.structureCount, locale);
  const heroUrl = getDestinationCityPhoto(hub);
  const pageTitle =
    locale === "en"
      ? `Hotels and properties in ${hub.displayName}`
      : `Hotel e strutture a ${hub.displayName}`;

  return (
    <div className="space-y-6">
      <SeoBreadcrumb
        items={[
          { label: locale === "en" ? "Home" : "Home", href: homePath(locale) },
          { label: labels.destinationsNav, href: localizedPath(locale, "/destinazioni") },
          { label: hub.displayName },
        ]}
      />

      <header className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        {heroUrl ? (
          <SeoImage
            src={heroUrl}
            alt={hub.displayName}
            className="h-44 w-full object-cover sm:h-52 md:h-60"
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        ) : (
          <CityHeroPlaceholder cityName={hub.displayName} className="h-44 sm:h-52 md:h-60" />
        )}
        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#0f4c81] sm:text-sm">
            {locale === "en" ? "Destination" : "Destinazione"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{pageTitle}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{intro}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{editorial}</p>
          <p className="mt-3 text-sm text-zinc-500">
            {locale === "en"
              ? `${hub.structureCount} indexed properties`
              : `${hub.structureCount} strutture nel catalogo`}
          </p>
        </div>
      </header>

      <section aria-label={pageTitle}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={structurePublicPath(item.slug, locale)}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-[#0f4c81]/30 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                {item.mainPhotoUrl ? (
                  <SeoImage src={item.mainPhotoUrl} alt={item.name} className="h-36 w-full object-cover" />
                ) : (
                  <div className="flex h-36 items-center justify-center bg-zinc-100 text-zinc-400 dark:bg-zinc-950">
                    <Building2 className="h-8 w-8" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-semibold text-zinc-950 dark:text-white">{item.name}</p>
                  {item.address ? (
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
                      <MapPin className="mr-1 inline h-3.5 w-3.5" />
                      {item.address}
                    </p>
                  ) : null}
                  <span className="mt-4 text-sm font-semibold text-[#0f4c81]">
                    {locale === "en" ? "View property" : "Vedi struttura"}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {page === 1 ? (
        <>
          <DestinationHowItWorksBlock
            title={labels.destinationHowItWorks}
            bullets={getDestinationHowItWorks(locale, hub.displayName)}
          />
          <RelatedDestinationsStrip
            title={labels.relatedDestinations}
            destinations={relatedDestinations}
            locale={locale}
          />
          <FaqSection
            items={getDestinationFaq(locale, hub.displayName)}
            title={labels.faqTitle}
            id={`destination-faq-${hub.slug}`}
          />
        </>
      ) : null}

      {totalPages > 1 ? (
        <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const href =
              pageNumber === 1
                ? destinationPublicPath(hub.slug, locale)
                : `${destinationPublicPath(hub.slug, locale)}?page=${pageNumber}`;
            const isCurrent = pageNumber === page;
            return (
              <Link
                key={pageNumber}
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "inline-flex min-w-10 items-center justify-center rounded-full bg-[#0f4c81] px-3 py-2 text-sm font-semibold text-white"
                    : "inline-flex min-w-10 items-center justify-center rounded-full border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200"
                }
              >
                {pageNumber}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
