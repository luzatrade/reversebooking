import Link from "next/link";
import { ExternalLink, Globe, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { FaqSection } from "@/components/seo/FaqSection";
import { HotelReverseBookingCta } from "@/components/seo/HotelReverseBookingCta";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { SeoImage } from "@/components/seo/SeoImage";
import { OtherHotelsStrip } from "@/components/seo/OtherHotelsStrip";
import { SeoBreadcrumb } from "@/components/seo/SeoBreadcrumb";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { formatMessage } from "@/lib/i18n/format";
import {
  buildContactEmailHref,
  buildTelHref,
  buildWhatsAppHref,
  normalizeWebsiteUrl,
} from "@/lib/hotels/publicContactLinks";
import { buildDestinationSlug } from "@/lib/seo/city-canonical";
import { destinationPublicPath, localizedPath } from "@/lib/i18n/routing";
import { buildStructurePageParagraphs } from "@/lib/seo/structure-description";
import { buildStructureGeoSubtitle } from "@/lib/seo/geo-context";
import { fetchDestinationHubBySlug, fetchDestinationStructures } from "@/lib/seo/destination-queries";
import { getHotelFaq, getMarketingLabels } from "@/lib/i18n/seo-marketing";
import { buildFaqPageJsonLd } from "@/lib/seo/faq-jsonld";
import { canonicalUrl } from "@/lib/seo/canonical";
import {
  buildStructureTravelRequestHref,
  type StructureSeoRecord,
} from "@/lib/seo/structure-queries";

type Props = {
  record: StructureSeoRecord;
};

export async function StructureSeoPage({ record }: Props) {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const labels = getMarketingLabels(locale);
  const destinationHub = await fetchDestinationHubBySlug(buildDestinationSlug(record.cityName));
  const destinationStructures = destinationHub
    ? (await fetchDestinationStructures(destinationHub.slug, 1))?.items ?? []
    : [];
  const websiteUrl = normalizeWebsiteUrl(record.website);
  const whatsAppHref = record.phone ? buildWhatsAppHref(record.phone, locale) : null;
  const addressLine = record.address?.trim() || record.cityName || t.hotel.addressUnavailable;
  const isOnboarding = record.source === "onboarding";
  const isClaimed = record.status === "claimed";
  const isPendingVerification = record.status === "pending_verification";
  const profileLabel = isOnboarding ? t.hotel.catalogProfileLabel : t.hotel.structureProfileLabel;
  const kindLabel = isOnboarding ? t.hotel.lodgingKind : record.structureType ?? t.hotel.lodgingKind;
  const travelRequestHref = localizedPath(locale, buildStructureTravelRequestHref(record));

  const reverseBookingCopy = {
    title: t.hotel.reverseBookingTitle,
    subtitle: t.hotel.reverseBookingSubtitle,
    cta: t.hotel.reverseBookingCta,
    trustFree: t.hotel.reverseBookingTrustFree,
    trustNoCommission: t.hotel.reverseBookingTrustNoCommission,
    trustOffers: t.hotel.reverseBookingTrustOffers,
    howItWorks: t.hotel.reverseBookingHowItWorks,
  };

  const seoParagraphs = buildStructurePageParagraphs(record, locale);
  const geoSubtitle = buildStructureGeoSubtitle(record.cityName, record.countryName, locale);
  const pageUrl = canonicalUrl(localizedPath(locale, `/hotel/${record.slug}`));

  return (
    <div className="space-y-6">
      <JsonLdScript data={buildFaqPageJsonLd(getHotelFaq(locale), pageUrl)} />
      <SeoBreadcrumb
        items={[
          { label: locale === "en" ? "Home" : "Home", href: localizedPath(locale, "/") },
          ...(destinationHub
            ? [
                {
                  label: locale === "en" ? `Hotels in ${destinationHub.displayName}` : `Hotel a ${destinationHub.displayName}`,
                  href: destinationPublicPath(destinationHub.slug, locale),
                },
              ]
            : []),
          { label: record.name },
        ]}
      />

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8">
        <div className="min-w-0 space-y-6">
          <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {record.mainPhotoUrl ? (
              <SeoImage
                src={record.mainPhotoUrl}
                alt={record.name}
                className="h-48 w-full object-cover sm:h-64 md:h-72"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            ) : (
              <div className="flex h-48 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-950 sm:h-64 md:h-72">
                {t.hotel.photoUnavailable}
              </div>
            )}

            <div className="p-4 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-amber-700 sm:text-sm">{profileLabel}</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{record.name}</h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {kindLabel} · {record.cityName}, {record.countryName}
              </p>
              {geoSubtitle ? (
                <p className="mt-1 text-sm font-medium text-[#0f4c81]">{geoSubtitle}</p>
              ) : null}
              <p className="mt-1 text-sm text-zinc-500">{addressLine}</p>

              <HotelReverseBookingCta
                locale={locale}
                cityName={record.cityName}
                requestHref={travelRequestHref}
                copy={reverseBookingCopy}
                className="mt-5 lg:hidden"
              />

              <div className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:mt-6">
                {seoParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              {isOnboarding && !isClaimed && !isPendingVerification ? (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/30">
                  <p className="text-sm text-amber-950 dark:text-amber-100">{t.hotel.unclaimedBanner}</p>
                  <Link
                    href={localizedPath(locale, `/registrazione?mode=partner&onboarding=${encodeURIComponent(record.id)}`)}
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    {t.hotel.claimThisProfile}
                  </Link>
                </div>
              ) : null}
              {isOnboarding && isPendingVerification ? (
                <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
                  {t.hotel.claimPendingVerification}
                </p>
              ) : null}
              {isOnboarding && isClaimed ? (
                <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  {t.hotel.claimVerifiedPartner}
                </p>
              ) : null}

              {destinationHub ? (
                <p className="mt-4">
                  <Link
                    href={destinationPublicPath(destinationHub.slug, locale)}
                    className="text-sm font-semibold text-[#0f4c81] hover:underline"
                  >
                    {locale === "en"
                      ? `More hotels in ${destinationHub.displayName}`
                      : `Altri hotel a ${destinationHub.displayName}`}
                  </Link>
                </p>
              ) : null}

              {record.galleryPhotoUrls.length ? (
                <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                  {record.galleryPhotoUrls.map((photo) => (
                    <SeoImage
                      key={photo}
                      src={photo}
                      alt={record.name}
                      className="h-28 w-full rounded-xl object-cover sm:h-36 sm:rounded-2xl"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  ))}
                </div>
              ) : null}

              <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                  <h2 className="font-semibold">{t.hotel.locationSection}</h2>
                  <p className="mt-2 text-sm text-zinc-500">
                    {formatMessage(t.hotel.addressLine, { address: addressLine })}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {formatMessage(t.hotel.cityLine, { city: record.cityName })}
                  </p>
                  {record.googleMapsUrl ? (
                    <a
                      href={record.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950 sm:py-2"
                    >
                      <MapPin className="h-4 w-4" /> {t.hotel.openGoogleMaps}
                    </a>
                  ) : null}
                </div>

                <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                  <h2 className="font-semibold">{t.hotel.contactsSection}</h2>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                    {record.email ? (
                      <a
                        href={buildContactEmailHref(record.email.trim(), locale)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:py-2"
                      >
                        <Mail className="h-4 w-4" /> {t.common.email}
                      </a>
                    ) : null}
                    {whatsAppHref ? (
                      <a
                        href={whatsAppHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:py-2"
                      >
                        <Phone className="h-4 w-4" /> {t.common.whatsApp}
                      </a>
                    ) : null}
                    {record.phone ? (
                      <a
                        href={buildTelHref(record.phone)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f4c81] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4373] sm:py-2"
                      >
                        <PhoneCall className="h-4 w-4" /> {t.hotel.callButton}
                      </a>
                    ) : null}
                    {websiteUrl ? (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 sm:py-2"
                      >
                        <Globe className="h-4 w-4" /> {t.hotel.websiteButton}
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    ) : null}
                  </div>
                  {!record.phone && !record.email && !websiteUrl ? (
                    <p className="mt-3 text-sm text-zinc-500">{t.hotel.noDirectContacts}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </article>

          {destinationHub ? (
            <OtherHotelsStrip
              title={
                locale === "en"
                  ? `More hotels in ${destinationHub.displayName}`
                  : `Altri hotel a ${destinationHub.displayName}`
              }
              items={destinationStructures}
              cityName={record.cityName}
              excludeSlug={record.slug}
              locale={locale}
            />
          ) : null}

          <FaqSection items={getHotelFaq(locale)} title={labels.faqTitle} compact />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <HotelReverseBookingCta
              locale={locale}
              cityName={record.cityName}
              requestHref={travelRequestHref}
              copy={reverseBookingCopy}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
