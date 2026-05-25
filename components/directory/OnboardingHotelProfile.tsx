"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Building2, ExternalLink, Globe, Mail, MapPin, Phone } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { BRAND_NAME } from "@/lib/legal/company";

type OnboardingHotel = {
  id: string;
  nome: string;
  indirizzo: string | null;
  city_name: string;
  lat: number | null;
  lng: number | null;
  google_maps_url: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  main_photo_url: string | null;
  status: string;
};

export function OnboardingHotelProfile() {
  const params = useParams<{ id: string }>();
  const hotelId = params.id;
  const [hotel, setHotel] = useState<OnboardingHotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [nearby, setNearby] = useState<OnboardingHotel[]>([]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const supabase = createBrowserSupabaseClient();

      const { data } = await supabase
        .from("onboarding_hotels")
        .select("id, nome, indirizzo, city_name, lat, lng, google_maps_url, website, phone, email, main_photo_url, status")
        .eq("id", hotelId)
        .single();

      if (data) {
        setHotel(data as OnboardingHotel);
        const { data: nearbyData } = await supabase
          .from("onboarding_hotels")
          .select("id, nome, city_name, main_photo_url")
          .eq("city_name", data.city_name)
          .neq("id", hotelId)
          .limit(4);
        setNearby((nearbyData as OnboardingHotel[]) ?? []);
      }
      setLoading(false);
    }
    void load();
  }, [hotelId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
        <p className="mt-4 text-sm text-zinc-500">Caricamento struttura...</p>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <Building2 className="mx-auto h-12 w-12 text-zinc-300" />
        <p className="mt-4 text-zinc-600">Struttura non trovata.</p>
        <Link href="/directory" className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700">
          ← Torna alla directory
        </Link>
      </div>
    );
  }

  const mailHref = hotel.email
    ? `mailto:${hotel.email}?subject=${encodeURIComponent(`Richiesta informazioni da ${BRAND_NAME}`)}&body=${encodeURIComponent(`Buongiorno,\n\nHo trovato la vostra struttura su ${BRAND_NAME} e vorrei ricevere maggiori informazioni.\n\nCordiali saluti`)}`
    : null;

  const waHref = hotel.phone
    ? `https://wa.me/${hotel.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Buongiorno, ho trovato la vostra struttura su ${BRAND_NAME} e vorrei ricevere maggiori informazioni.`)}`
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link
        href="/directory"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" /> Torna alla directory
      </Link>

      <article className="overflow-hidden rounded-[24px] border border-zinc-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
        {/* Hero photo */}
        {hotel.main_photo_url ? (
          <img src={hotel.main_photo_url} alt={hotel.nome} className="h-64 w-full object-cover sm:h-80" />
        ) : (
          <div className="flex h-64 items-center justify-center bg-zinc-50 sm:h-80">
            <Building2 className="h-16 w-16 text-zinc-200" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">{hotel.city_name}</p>
          <h1 className="mt-2 font-[var(--font-brand)] text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {hotel.nome}
          </h1>
          {hotel.indirizzo && (
            <p className="mt-2 flex items-start gap-2 text-sm text-zinc-500">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
              {hotel.indirizzo}
            </p>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {mailHref && (
              <a
                href={mailHref}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                <Mail className="h-4 w-4" /> Invia email
              </a>
            )}
            {hotel.phone && (
              <a
                href={`tel:${hotel.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0f4c81] bg-white px-5 py-2.5 text-sm font-semibold text-[#0f4c81] shadow-sm transition hover:bg-[#0f4c81] hover:text-white"
              >
                <Phone className="h-4 w-4" /> {hotel.phone}
              </a>
            )}
            {waHref && (
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-white px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-600 hover:text-white"
              >
                WhatsApp
              </a>
            )}
          </div>

          {/* Info grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {hotel.google_maps_url && (
              <a
                href={hotel.google_maps_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 transition hover:border-orange-200 hover:shadow-sm"
              >
                <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Google Maps</p>
                  <p className="text-xs text-zinc-500">Vedi posizione sulla mappa</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-zinc-400" />
              </a>
            )}
            {hotel.website && (
              <a
                href={hotel.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 transition hover:border-orange-200 hover:shadow-sm"
              >
                <Globe className="h-5 w-5 shrink-0 text-blue-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Sito web</p>
                  <p className="truncate text-xs text-zinc-500">{hotel.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-zinc-400" />
              </a>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-orange-50 p-5 text-center">
            <p className="text-sm font-semibold text-orange-800">Sei il proprietario di questa struttura?</p>
            <p className="mt-1 text-xs text-orange-600">
              Reclama il tuo profilo su {BRAND_NAME} per ricevere richieste dirette dai viaggiatori, senza commissioni.
            </p>
            <Link
              href="/registrazione"
              className="mt-3 inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Reclama il profilo
            </Link>
          </div>
        </div>
      </article>

      {/* Nearby */}
      {nearby.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900">
            Altre strutture a {hotel.city_name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <Link
                key={n.id}
                href={`/directory/${n.id}`}
                className="group overflow-hidden rounded-[16px] border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md hover:border-orange-200"
              >
                {n.main_photo_url ? (
                  <img src={n.main_photo_url} alt={n.nome} className="h-28 w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-28 items-center justify-center bg-zinc-50">
                    <Building2 className="h-8 w-8 text-zinc-200" />
                  </div>
                )}
                <p className="truncate p-3 text-sm font-medium text-zinc-800 group-hover:text-orange-600 transition">
                  {n.nome}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
