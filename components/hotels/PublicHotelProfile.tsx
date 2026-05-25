"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FilePlus2 } from "lucide-react";
import { useParams } from "next/navigation";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { FavoriteHotelButton } from "@/components/favorites/FavoriteHotelButton";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getServiceLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import type { StructureType } from "@/types/app";

type HotelProfile = {
  id: string;
  property_name: string;
  structure_type: StructureType;
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
  public_email: string | null;
  public_phone: string | null;
  google_maps_url: string | null;
  cin_code: string;
};

export function PublicHotelProfile() {
  const { t, locale } = useLanguage();
  const structureTypeLabels = getStructureTypeLabels(locale);
  const serviceLabelMap = getServiceLabels(locale);
  const h = t.hotel;
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
          .select("id, property_name, structure_type, main_photo_url, gallery_photo_urls, description, full_address, country_name, city_name, specific_area, points_of_interest, rooms_quantity, services, public_email, public_phone, google_maps_url, cin_code")
          .eq("id", hotelId)
          .eq("account_status", "active")
          .eq("subscription_active", true)
          .single();

        if (hotelError || !data) {
          setError(h.publicProfileNotFound);
          return;
        }

        setHotel(data as HotelProfile);
      } catch (err) {
        setError(err instanceof Error ? err.message : h.publicProfileLoadError);
      } finally {
        setLoading(false);
      }
    }

    void loadHotel();
  }, [hotelId]);

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.common.loadingProfile}</div>;
  }

  const services = Object.entries(hotel?.services ?? {}).filter(([, v]) => v).map(([key]) => serviceLabelMap[key] ?? key);

  return (
    <div className="space-y-6">
      <Link href="/inserzionista/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      {hotel ? (
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {hotel.main_photo_url ? (
            <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-72 w-full object-cover" />
          ) : (
            <div className="flex h-72 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-950">{h.photoUnavailable}</div>
          )}

          <div className="p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{h.profile}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{hotel.property_name}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {structureTypeLabels[hotel.structure_type]} · {hotel.city_name}, {hotel.country_name}
            </p>
            {hotel.specific_area ? <p className="mt-1 text-sm text-zinc-500">{t.common.zone}: {hotel.specific_area}</p> : null}
            <div className="mt-4">
              <FavoriteHotelButton hotelId={hotel.id} hotelName={hotel.property_name} />
            </div>
            <p className="mt-1 text-xs text-zinc-400">CIN: {hotel.cin_code}</p>

            {hotel.description ? <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300">{hotel.description}</p> : null}

            {hotel.gallery_photo_urls?.length ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {hotel.gallery_photo_urls.map((photo) => (
                  <img key={photo} src={photo} alt={hotel.property_name} className="h-36 w-full rounded-2xl object-cover" />
                ))}
              </div>
            ) : null}

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h2 className="font-semibold">{h.infoSection}</h2>
                <p className="mt-2 text-sm text-zinc-500">{h.address}: {hotel.full_address}</p>
                <p className="mt-1 text-sm text-zinc-500">{h.roomsQuantity}: {hotel.rooms_quantity}</p>
                {hotel.points_of_interest?.length ? <p className="mt-1 text-sm text-zinc-500">{h.pointsOfInterest}: {hotel.points_of_interest.join(", ")}</p> : null}
                {hotel.google_maps_url ? (
                  <a href={hotel.google_maps_url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                    <MapPin className="h-4 w-4" /> Apri su Google Maps
                  </a>
                ) : null}
              </div>

              <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h2 className="font-semibold">{h.publicContacts}</h2>
                {services.length ? <p className="mt-2 text-sm text-zinc-500">{services.join(", ")}</p> : <p className="mt-2 text-sm text-zinc-500">{h.noServicesListed}</p>}
                <div className="mt-4 flex flex-wrap gap-3">
                  {hotel.public_email ? (
                    <a href={`mailto:${hotel.public_email}`} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
                      <Mail className="h-4 w-4" /> Email
                    </a>
                  ) : null}
                            <Link
            href={`/inserzionista/crea-annuncio?city=${encodeURIComponent(hotel.city_name)}&hotel_id=${encodeURIComponent(hotel.id)}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white"
          >
            <FilePlus2 className="h-4 w-4" /> Invia richiesta a questa struttura
          </Link>

          {hotel.public_phone ? (
                    <a href={`tel:${hotel.public_phone}`} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
                      <Phone className="h-4 w-4" /> Telefono
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}
