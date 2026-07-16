"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities } from "@/lib/constants/world-cities";
import {
  buildContactEmailHref,
  buildTelHref,
  buildWhatsAppHref,
  normalizeWebsiteUrl,
} from "@/lib/hotels/publicContactLinks";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { exploreMapBackHref } from "@/lib/showcase/exploreMapReturn";

type OnboardingProfile = {
  id: string;
  nome: string;
  indirizzo: string | null;
  city_name: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  main_photo_url: string | null;
  gallery_photo_urls: string[] | null;
  google_maps_url: string | null;
  status: string;
};

const ONBOARDING_SELECT =
  "id, nome, indirizzo, city_name, email, phone, website, main_photo_url, gallery_photo_urls, google_maps_url, status";

export function PublicOnboardingHotelProfile() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const hotelId = params.id;
  const [hotel, setHotel] = useState<OnboardingProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHotel() {
      setLoading(true);
      setError(null);

      try {
        const supabase = createBrowserSupabaseClient();
        const { data, error: hotelError } = await supabase
          .from("onboarding_hotels")
          .select(ONBOARDING_SELECT)
          .eq("id", hotelId)
          .maybeSingle();

        if (hotelError || !data) {
          setError(t.hotel.onboardingNotFound);
          return;
        }

        setHotel(data as OnboardingProfile);
      } catch (err) {
        setError(err instanceof Error ? err.message : t.hotel.onboardingLoadError);
      } finally {
        setLoading(false);
      }
    }

    void loadHotel();
  }, [hotelId, t.hotel.onboardingLoadError, t.hotel.onboardingNotFound]);

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.hotel.loadingPublicProfile}</div>;
  }

  const websiteUrl = hotel ? normalizeWebsiteUrl(hotel.website) : null;
  const whatsAppHref = hotel?.phone ? buildWhatsAppHref(hotel.nome, hotel.phone) : null;
  const addressLine = hotel?.indirizzo?.trim() || hotel?.city_name || t.hotel.addressUnavailable;
  const cityId = hotel ? resolveCanonicalCityId({ cityName: hotel.city_name }) : null;
  const countryName =
    (cityId ? majorWorldCities.find((city) => city.city_id === cityId)?.country_name : null) ??
    (cityId?.startsWith("GB-") ? "United Kingdom" : "Italia");
  const isClaimed = hotel?.status === "claimed";
  const isPendingVerification = hotel?.status === "pending_verification";
  const mapBackHref = hotel
    ? exploreMapBackHref(
        searchParams,
        { city_id: cityId, city_name: hotel.city_name, country_code: cityId?.split("-")[0] ?? "IT" },
        hotelId,
      )
    : null;

  return (
    <div className="space-y-6">
      <Link
        href={mapBackHref ?? "/"}
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> {mapBackHref ? t.hotel.backToExploreMap : t.hotel.backToShowcase}
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      {hotel ? (
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {hotel.main_photo_url ? (
            <img src={hotel.main_photo_url} alt={hotel.nome} className="h-48 w-full object-cover sm:h-64 md:h-72" />
          ) : (
            <div className="flex h-48 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-950 sm:h-64 md:h-72">
              {t.hotel.photoUnavailable}
            </div>
          )}

          <div className="p-4 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-700 sm:text-sm">{t.hotel.catalogProfileLabel}</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{hotel.nome}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {t.hotel.lodgingKind} · {hotel.city_name}, {countryName}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{addressLine}</p>

            {!isClaimed && !isPendingVerification ? (
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/30">
                <p className="text-sm text-amber-950 dark:text-amber-100">{t.hotel.unclaimedBanner}</p>
                <Link
                  href={`/registrazione?mode=partner&onboarding=${encodeURIComponent(hotel.id)}`}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  {t.hotel.claimThisProfile}
                </Link>
              </div>
            ) : isPendingVerification ? (
              <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
                {t.hotel.claimPendingVerification}
              </p>
            ) : (
              <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {t.hotel.claimVerifiedPartner}
              </p>
            )}

            {hotel.gallery_photo_urls?.length ? (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                {hotel.gallery_photo_urls.map((photo) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={hotel.nome}
                    className="h-28 w-full rounded-xl object-cover sm:h-36 sm:rounded-2xl"
                  />
                ))}
              </div>
            ) : null}

            <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">{t.hotel.infoSection}</h2>
                <p className="mt-2 text-sm text-zinc-500">{formatMessage(t.hotel.addressLine, { address: addressLine })}</p>
                <p className="mt-1 text-sm text-zinc-500">{formatMessage(t.hotel.cityLine, { city: hotel.city_name })}</p>
                {hotel.google_maps_url ? (
                  <a
                    href={hotel.google_maps_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950 sm:py-2"
                  >
                    <MapPin className="h-4 w-4" /> {t.hotel.openGoogleMaps}
                  </a>
                ) : null}
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">{t.hotel.contactsOnly}</h2>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                  {hotel.email ? (
                    <a
                      href={buildContactEmailHref(hotel.nome, hotel.email.trim())}
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
                  {hotel.phone ? (
                    <a
                      href={buildTelHref(hotel.phone)}
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
                {!hotel.phone && !hotel.email && !websiteUrl ? (
                  <p className="mt-3 text-sm text-zinc-500">{t.hotel.noDirectContacts}</p>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}
