"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { FavoriteHotelButton } from "@/components/favorites/FavoriteHotelButton";
import { formatMessage } from "@/lib/i18n/format";
import { getServiceLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import { BRAND_NAME } from "@/lib/legal/company";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import type { HouseRules } from "@/lib/constants/house-rules";
import { buildHouseRulesLines } from "@/lib/hotel/public-profile-extras";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { exploreMapBackHref } from "@/lib/showcase/exploreMapReturn";
import type { StructureType } from "@/types/app";

type HotelProfile = {
  id: string;
  property_name: string;
  structure_type: StructureType;
  provider_kind: "structure" | "agency";
  cun_code: string | null;
  main_photo_url: string | null;
  gallery_photo_urls: string[] | null;
  description: string | null;
  full_address: string;
  country_name: string;
  city_name: string;
  specific_area: string | null;
  points_of_interest: string[] | null;
  rooms_quantity: number;
  services: Record<string, boolean> | null;
  house_rules: HouseRules | null;
  public_email: string | null;
  public_phone: string | null;
  google_maps_url: string | null;
  cin_code: string;
};

function activeServiceLabels(services: Record<string, boolean> | null, labels: Record<string, string>) {
  if (!services) return [];
  return Object.entries(services)
    .filter(([, value]) => value)
    .map(([key]) => labels[key] ?? key);
}

export function PublicHotelProfile() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const serviceLabelMap = getServiceLabels(locale);
  const params = useParams<{ id: string }>();
  const hotelId = params.id;
  const [hotel, setHotel] = useState<HotelProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHotel() {
      setLoading(true);
      setError(null);

      try {
        const supabase = createBrowserSupabaseClient();
        const { data, error: hotelError } = await supabase
          .from("hotel_accounts")
          .select("id, property_name, structure_type, provider_kind, cun_code, main_photo_url, gallery_photo_urls, description, full_address, country_name, city_name, specific_area, points_of_interest, rooms_quantity, services, house_rules, public_email, public_phone, google_maps_url, cin_code")
          .eq("id", hotelId)
          .eq("account_status", "active")
          .eq("subscription_active", true)
          .single();

        if (hotelError || !data) {
          setError(t.hotel.publicProfileNotFound);
          return;
        }

        setHotel(data as HotelProfile);
      } catch (err) {
        setError(err instanceof Error ? err.message : t.hotel.publicProfileLoadError);
      } finally {
        setLoading(false);
      }
    }

    void loadHotel();
  }, [hotelId, t.hotel.publicProfileLoadError, t.hotel.publicProfileNotFound]);

  const mailTemplate = useMemo(() => {
    if (!hotel) return null;
    const lines = [
      formatMessage(t.showcase.availabilityMailIntro, { name: hotel.property_name, brand: BRAND_NAME }),
      "",
      t.showcase.availabilityMailCheckIn,
      t.showcase.availabilityMailCheckOut,
      t.showcase.availabilityMailGuests,
      "",
      t.showcase.availabilityMailOutro,
    ];
    return {
      subject: formatMessage(t.showcase.availabilityMailSubject, { name: hotel.property_name }),
      body: lines.join("\n"),
      whatsApp: formatMessage(t.showcase.availabilityWhatsApp, { name: hotel.property_name, brand: BRAND_NAME }),
    };
  }, [hotel, t.showcase]);

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.hotel.loadingPublicProfile}</div>;
  }

  const services = activeServiceLabels(hotel?.services ?? null, serviceLabelMap);
  const houseRulesLines = hotel?.house_rules ? buildHouseRulesLines(hotel.house_rules, t.hotel) : [];
  const isAgency = hotel?.provider_kind === "agency";
  const mapBackHref = hotel
    ? exploreMapBackHref(
        searchParams,
        {
          city_id: resolveCanonicalCityId({ cityName: hotel.city_name }),
          city_name: hotel.city_name,
          country_code: null,
        },
        hotelId,
      )
    : null;

  return (
    <div className="space-y-6">
      <Link href={mapBackHref ?? "/"} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> {mapBackHref ? t.hotel.backToExploreMap : t.hotel.backToHome}
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      {hotel ? (
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {hotel.main_photo_url ? (
            <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-48 w-full object-cover sm:h-64 md:h-72" />
          ) : (
            <div className="flex h-48 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-950 sm:h-64 md:h-72">
              {isAgency ? t.hotel.agencyPhotoUnavailable : t.hotel.photoUnavailable}
            </div>
          )}

          <div className="p-4 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700 sm:text-sm">
              {isAgency ? t.hotel.agencyProfileLabel : t.hotel.structureProfileLabel}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{hotel.property_name}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {isAgency ? t.hotel.agencyKind : structureTypeLabels[hotel.structure_type]} · {hotel.city_name}, {hotel.country_name}
            </p>
            {hotel.specific_area ? (
              <p className="mt-1 text-sm text-zinc-500">
                {isAgency ? t.hotel.operatingArea : t.hotel.zoneShort}: {hotel.specific_area}
              </p>
            ) : null}
            <div className="mt-4">
              <FavoriteHotelButton hotelId={hotel.id} hotelName={hotel.property_name} />
            </div>
            {isAgency
              ? (hotel.cun_code ? <p className="mt-1 text-xs text-zinc-400">CUN: {hotel.cun_code}</p> : null)
              : <p className="mt-1 text-xs text-zinc-400">CIN: {hotel.cin_code}</p>}

            {hotel.description ? <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">{hotel.description}</p> : null}

            {hotel.gallery_photo_urls?.length ? (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                {hotel.gallery_photo_urls.map((photo) => (
                  <img key={photo} src={photo} alt={hotel.property_name} className="h-28 w-full rounded-xl object-cover sm:h-36 sm:rounded-2xl" />
                ))}
              </div>
            ) : null}

            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">{t.hotel.infoSection}</h2>
                <p className="mt-2 text-sm text-zinc-500">{formatMessage(t.hotel.addressLine, { address: hotel.full_address })}</p>
                {!isAgency ? (
                  <p className="mt-1 text-sm text-zinc-500">{formatMessage(t.hotel.roomsUnitsLine, { count: hotel.rooms_quantity })}</p>
                ) : null}
                {hotel.points_of_interest?.length ? (
                  <p className="mt-1 text-sm text-zinc-500">
                    {formatMessage(t.hotel.poiLine, { points: hotel.points_of_interest.join(", ") })}
                  </p>
                ) : null}
                {hotel.google_maps_url ? (
                  <a href={hotel.google_maps_url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950 sm:py-2">
                    <MapPin className="h-4 w-4" /> {t.hotel.openGoogleMaps}
                  </a>
                ) : null}
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">{isAgency ? t.hotel.contactsOnly : t.hotel.publicContacts}</h2>
                {!isAgency ? (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-zinc-800">{t.hotel.servicesLabel}</p>
                    {services.length ? (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {services.map((service) => (
                          <li
                            key={service}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-100"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-zinc-500">{t.hotel.noServicesListed}</p>
                    )}
                  </div>
                ) : null}
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                  {hotel.public_email && mailTemplate ? (
                    <a
                      href={`mailto:${hotel.public_email}?subject=${encodeURIComponent(mailTemplate.subject)}&body=${encodeURIComponent(mailTemplate.body)}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:py-2"
                    >
                      <Mail className="h-4 w-4" /> {t.common.email}
                    </a>
                  ) : null}
                  {hotel.public_phone && mailTemplate ? (
                    <a
                      href={`https://wa.me/${hotel.public_phone.replace(/\D/g, "")}?text=${encodeURIComponent(mailTemplate.whatsApp)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:py-2"
                    >
                      <Phone className="h-4 w-4" /> {t.common.whatsApp}
                    </a>
                  ) : null}
                  {hotel.public_phone ? (
                    <a href={`tel:${hotel.public_phone.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f4c81] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4373] sm:py-2">
                      <PhoneCall className="h-4 w-4" /> {t.hotel.callButton}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            {!isAgency && houseRulesLines.length ? (
              <div className="mt-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:mt-6 sm:p-5">
                <h2 className="font-semibold">{t.hotel.rulesLabel}</h2>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {houseRulesLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article>
      ) : null}
    </div>
  );
}
