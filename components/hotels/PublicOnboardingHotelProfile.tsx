"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  buildContactEmailHref,
  buildTelHref,
  buildWhatsAppHref,
  normalizeWebsiteUrl,
} from "@/lib/hotels/publicContactLinks";

type OnboardingProfile = {
  id: string;
  nome: string;
  indirizzo: string | null;
  city_name: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  main_photo_url: string | null;
  google_maps_url: string | null;
  status: string;
};

const ONBOARDING_SELECT =
  "id, nome, indirizzo, city_name, email, phone, website, main_photo_url, google_maps_url, status";

export function PublicOnboardingHotelProfile() {
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
          setError("Profilo struttura non trovato o non disponibile.");
          return;
        }

        setHotel(data as OnboardingProfile);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Errore durante il caricamento del profilo.");
      } finally {
        setLoading(false);
      }
    }

    void loadHotel();
  }, [hotelId]);

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento profilo struttura...</div>;
  }

  const websiteUrl = hotel ? normalizeWebsiteUrl(hotel.website) : null;
  const whatsAppHref = hotel?.phone ? buildWhatsAppHref(hotel.nome, hotel.phone) : null;
  const addressLine = hotel?.indirizzo?.trim() || hotel?.city_name || "Indirizzo non disponibile";
  const isClaimed = hotel?.status === "claimed";

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Torna alla vetrina
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      {hotel ? (
        <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {hotel.main_photo_url ? (
            <img src={hotel.main_photo_url} alt={hotel.nome} className="h-48 w-full object-cover sm:h-64 md:h-72" />
          ) : (
            <div className="flex h-48 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-950 sm:h-64 md:h-72">
              Foto struttura non disponibile
            </div>
          )}

          <div className="p-4 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-700 sm:text-sm">Profilo catalogo</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{hotel.nome}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Struttura ricettiva · {hotel.city_name}, Italia
            </p>
            <p className="mt-1 text-sm text-zinc-500">{addressLine}</p>

            {!isClaimed ? (
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-950/30">
                <p className="text-sm text-amber-950 dark:text-amber-100">
                  Questo profilo non è ancora gestito dal titolare su HotelsDrop. Se rappresenti questa struttura, puoi
                  rivendicarlo e attivare il pannello partner.
                </p>
                <Link
                  href={`/registrazione?mode=partner&onboarding=${encodeURIComponent(hotel.id)}`}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Rivendica questo profilo
                </Link>
              </div>
            ) : (
              <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Profilo rivendicato da un partner verificato.
              </p>
            )}

            <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">Informazioni</h2>
                <p className="mt-2 text-sm text-zinc-500">Indirizzo: {addressLine}</p>
                <p className="mt-1 text-sm text-zinc-500">Città: {hotel.city_name}</p>
                {hotel.google_maps_url ? (
                  <a
                    href={hotel.google_maps_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950 sm:py-2"
                  >
                    <MapPin className="h-4 w-4" /> Apri su Google Maps
                  </a>
                ) : null}
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5">
                <h2 className="font-semibold">Contatti</h2>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                  {hotel.email ? (
                    <a
                      href={buildContactEmailHref(hotel.nome, hotel.email.trim())}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:py-2"
                    >
                      <Mail className="h-4 w-4" /> Email
                    </a>
                  ) : null}
                  {whatsAppHref ? (
                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:py-2"
                    >
                      <Phone className="h-4 w-4" /> WhatsApp
                    </a>
                  ) : null}
                  {hotel.phone ? (
                    <a
                      href={buildTelHref(hotel.phone)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f4c81] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4373] sm:py-2"
                    >
                      <PhoneCall className="h-4 w-4" /> Chiama
                    </a>
                  ) : null}
                  {websiteUrl ? (
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 sm:py-2"
                    >
                      <Globe className="h-4 w-4" /> Sito web
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : null}
                </div>
                {!hotel.phone && !hotel.email && !websiteUrl ? (
                  <p className="mt-3 text-sm text-zinc-500">Contatti diretti non disponibili per questa struttura.</p>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}
