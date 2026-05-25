"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone, Search, ChevronDown } from "lucide-react";
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

const PAGE_SIZE = 24;

function contactMailHref(hotel: OnboardingHotel) {
  if (!hotel.email) return null;
  const subject = encodeURIComponent(`Richiesta informazioni da ${BRAND_NAME}`);
  const body = encodeURIComponent(
    `Buongiorno,\n\nHo trovato la vostra struttura su ${BRAND_NAME} e vorrei ricevere maggiori informazioni.\n\nCordiali saluti`,
  );
  return `mailto:${hotel.email}?subject=${subject}&body=${body}`;
}

function whatsAppHref(hotel: OnboardingHotel) {
  if (!hotel.phone) return null;
  const phone = hotel.phone.replace(/\D/g, "");
  if (!phone) return null;
  const text = encodeURIComponent(
    `Buongiorno, ho trovato la vostra struttura su ${BRAND_NAME} e vorrei ricevere maggiori informazioni.`,
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export function HotelDirectoryClient() {
  const [hotels, setHotels] = useState<OnboardingHotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    async function load() {
      const supabase = createBrowserSupabaseClient();
      const { data } = await supabase
        .from("onboarding_hotels")
        .select("id, nome, indirizzo, city_name, lat, lng, google_maps_url, website, phone, email, main_photo_url, status")
        .order("city_name")
        .order("nome");

      setHotels((data as OnboardingHotel[]) ?? []);
      setLoading(false);
    }
    void load();
  }, []);

  const cities = useMemo(() => {
    const set = new Set(hotels.map((h) => h.city_name));
    return [...set].sort();
  }, [hotels]);

  const filtered = useMemo(() => {
    let result = hotels;
    if (selectedCity) result = result.filter((h) => h.city_name === selectedCity);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (h) => h.nome.toLowerCase().includes(q) || h.city_name.toLowerCase().includes(q) || (h.indirizzo?.toLowerCase().includes(q) ?? false),
      );
    }
    return result;
  }, [hotels, selectedCity, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
        <p className="mt-4 text-sm text-zinc-500">Caricamento strutture...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="font-[var(--font-brand)] text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Directory Strutture
        </h1>
        <p className="mt-3 text-base text-zinc-500 sm:text-lg">
          {hotels.length} strutture in {cities.length} città italiane — contattale direttamente, senza commissioni.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Cerca per nome o città..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setVisibleCount(PAGE_SIZE); }}
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
          />
        </div>
        <select
          value={selectedCity}
          onChange={(e) => { setSelectedCity(e.target.value); setVisibleCount(PAGE_SIZE); }}
          className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
        >
          <option value="">Tutte le città ({cities.length})</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c} ({hotels.filter((h) => h.city_name === c).length})
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <p className="mb-4 text-sm font-medium text-zinc-500">
        {filtered.length === hotels.length
          ? `${hotels.length} strutture`
          : `${filtered.length} di ${hotels.length} strutture`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 py-16 text-center">
          <Building2 className="mx-auto h-10 w-10 text-zinc-300" />
          <p className="mt-3 text-sm text-zinc-500">Nessuna struttura trovata.</p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((hotel) => (
              <Link
                key={hotel.id}
                href={`/directory/${hotel.id}`}
                className="group overflow-hidden rounded-[20px] border border-zinc-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-orange-200"
              >
                {hotel.main_photo_url ? (
                  <div className="relative h-44 overflow-hidden bg-zinc-100">
                    <img
                      src={hotel.main_photo_url}
                      alt={hotel.nome}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-700 backdrop-blur-sm">
                      {hotel.city_name}
                    </span>
                  </div>
                ) : (
                  <div className="flex h-44 items-center justify-center bg-zinc-50">
                    <Building2 className="h-10 w-10 text-zinc-200" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="truncate text-sm font-semibold text-zinc-900 group-hover:text-orange-600 transition">
                    {hotel.nome}
                  </h3>
                  {hotel.indirizzo && (
                    <p className="mt-1 truncate text-xs text-zinc-500">{hotel.indirizzo}</p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hotel.email && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        <Mail className="h-3 w-3" /> Email
                      </span>
                    )}
                    {hotel.phone && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                        <Phone className="h-3 w-3" /> Telefono
                      </span>
                    )}
                    {hotel.google_maps_url && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                        <MapPin className="h-3 w-3" /> Mappa
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700"
              >
                <ChevronDown className="h-4 w-4" />
                Mostra altre ({Math.min(PAGE_SIZE, filtered.length - visibleCount)} di {filtered.length - visibleCount} rimanenti)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
