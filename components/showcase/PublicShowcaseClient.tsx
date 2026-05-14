"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Building2, CalendarDays, Euro, MapPin, RefreshCw, Search, Users } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType, type UserRole } from "@/types/app";

type PreferenceFilters = {
  connecting_rooms?: boolean;
  disabled_access?: boolean;
  pool?: boolean;
  spa?: boolean;
  bathtub?: boolean;
  garage?: boolean;
  beach?: boolean;
  pets_allowed?: boolean;
};

type TravelRequest = {
  id: string;
  city_name: string;
  city_id: string | null;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: MealPlan;
  preference_filters: PreferenceFilters | null;
  notes: string | null;
  expires_at: string;
  created_at: string;
  status: string;
};

type HotelAccount = {
  id: string;
  property_name: string;
  structure_type: StructureType;
  city_name: string;
  city_id: string | null;
  specific_area: string | null;
  description: string | null;
  public_email: string | null;
  public_phone: string | null;
  main_photo_url: string | null;
  points_of_interest: string[] | null;
  services: Record<string, boolean> | null;
};

type Offer = { id: string; travel_request_id: string };

type Viewer = { userId: string | null; role: UserRole | null; hotelAccountId: string | null };

const createRequestHref = "/login?redirect=/inserzionista/crea-annuncio";

const serviceLabels: Record<string, string> = {
  pool: "Piscina",
  spa: "Spa",
  garage: "Garage",
  pets_allowed: "Animali ammessi",
  disabled_access: "Accesso disabili",
  beach: "Vicino alla spiaggia",
  bathtub: "Vasca",
  connecting_rooms: "Camere comunicanti",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short" }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function activeFilterLabels(filters: PreferenceFilters | null) {
  if (!filters) return [];
  return Object.entries(filters).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key);
}

function activeServiceLabels(services: Record<string, boolean> | null) {
  if (!services) return [];
  return Object.entries(services).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key);
}

function badgeFor(request: TravelRequest) {
  const created = new Date(request.created_at).getTime();
  const expires = new Date(request.expires_at).getTime();
  const now = Date.now();
  if (now - created < 1000 * 60 * 60 * 24) return "Nuovo";
  if (expires - now < 1000 * 60 * 60 * 48) return "In scadenza";
  return "Attivo";
}

function mapsHref(hotel: HotelAccount) {
  const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function contactMailHref(hotel: HotelAccount) {
  if (!hotel.public_email) return null;
  const subject = encodeURIComponent("Richiesta informazioni da Reverse Booking");
  const body = encodeURIComponent("Ho visto il tuo annuncio su Reverse Booking e vorrei ricevere maggiori informazioni.");
  return `mailto:${hotel.public_email}?subject=${subject}&body=${body}`;
}

function contactWhatsAppHref(hotel: HotelAccount) {
  if (!hotel.public_phone) return null;
  const phone = hotel.public_phone.replace(/\D/g, "");
  if (!phone) return null;
  const text = encodeURIComponent("Ho visto il tuo annuncio su Reverse Booking e vorrei ricevere maggiori informazioni.");
  return `https://wa.me/${phone}?text=${text}`;
}

export function PublicShowcaseClient() {
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [hotels, setHotels] = useState<HotelAccount[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [viewer, setViewer] = useState<Viewer>({ userId: null, role: null, hotelAccountId: null });
  const [cityFilter, setCityFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function detectViewer() {
    const supabase = createBrowserSupabaseClient();
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) {
      setViewer({ userId: null, role: null, hotelAccountId: null });
      setOffers([]);
      return;
    }

    let role: UserRole | null = null;
    const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
    if (profile?.role === "hotel" || profile?.role === "advertiser" || profile?.role === "admin") role = profile.role;

    const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id").eq("user_id", authData.user.id).maybeSingle();
    const hotelAccountId = hotelAccount?.id ?? null;
    if (hotelAccountId && !role) role = "hotel";

    setViewer({ userId: authData.user.id, role, hotelAccountId });

    if (hotelAccountId) {
      const { data: offerData } = await supabase.from("offers").select("id, travel_request_id").eq("hotel_account_id", hotelAccountId);
      setOffers((offerData ?? []) as Offer[]);
    }
  }

  async function loadShowcase() {
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      await detectViewer();

      const { data: requestData, error: requestError } = await supabase
        .from("travel_requests")
        .select("id, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, preference_filters, notes, expires_at, created_at, status")
        .eq("status", "active")
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(30);

      if (requestError) {
        setError(requestError.message);
        return;
      }

      const { data: hotelData, error: hotelError } = await supabase
        .from("hotel_accounts")
        .select("id, property_name, structure_type, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, points_of_interest, services")
        .eq("account_status", "active")
        .eq("subscription_active", true)
        .order("property_name", { ascending: true })
        .limit(20);

      if (hotelError) {
        setError(hotelError.message);
        return;
      }

      setRequests((requestData ?? []) as TravelRequest[]);
      setHotels((hotelData ?? []) as HotelAccount[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante il caricamento della vetrina.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadShowcase();
  }, []);

  const filteredRequests = useMemo(() => {
    const value = cityFilter.trim().toLowerCase();
    if (!value) return requests;
    return requests.filter((request) => `${request.city_name} ${request.preferred_area}`.toLowerCase().includes(value));
  }, [requests, cityFilter]);

  const selectedCityId = filteredRequests[0]?.city_id ?? null;
  const visibleHotels = useMemo(() => {
    const value = cityFilter.trim().toLowerCase();
    let result = hotels;
    if (selectedCityId) result = result.filter((hotel) => hotel.city_id === selectedCityId || !hotel.city_id);
    if (value) result = result.filter((hotel) => `${hotel.property_name} ${hotel.city_name} ${hotel.specific_area ?? ""}`.toLowerCase().includes(value) || hotel.city_name.toLowerCase().includes(value));
    return result.slice(0, 8);
  }, [hotels, selectedCityId, cityFilter]);

  const offeredRequestIds = useMemo(() => new Set(offers.map((offer) => offer.travel_request_id)), [offers]);
  const isHotel = viewer.role === "hotel" && Boolean(viewer.hotelAccountId);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Reverse Booking</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Vetrina richieste e strutture</h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">Scopri richieste di soggiorno attive e strutture disponibili nella zona. La vetrina è pubblica, i contatti restano protetti.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={createRequestHref} className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">Crea la tua richiesta gratuita</Link>
              <Link href="/login" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold dark:border-zinc-700">Login</Link>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Hai bisogno di un soggiorno?</h2>
                <p className="mt-1 text-sm text-emerald-900 dark:text-emerald-100">Crea una richiesta gratuita e ricevi offerte dalle strutture della zona.</p>
              </div>
              <Link href={createRequestHref} className="inline-flex w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">Crea la tua richiesta gratuita</Link>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
            <Search className="h-4 w-4 text-zinc-500" />
            <input value={cityFilter} onChange={(event) => setCityFilter(event.target.value)} placeholder="Cerca città, zona o struttura..." className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400" />
            <button onClick={loadShowcase} className="rounded-full border px-3 py-1 text-xs font-semibold dark:border-zinc-700"><RefreshCw className="inline h-3 w-3" /> Aggiorna</button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
        <aside className="space-y-4 lg:sticky lg:top-6 lg:h-fit">
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-3"><Building2 className="h-5 w-5" /><div><h2 className="font-semibold">Strutture nella zona</h2><p className="text-xs text-zinc-500">Profili pubblici con contatti controllati.</p></div></div>
            <div className="mt-5 space-y-3">
              {loading ? <p className="text-sm text-zinc-500">Caricamento strutture...</p> : null}
              {!loading && visibleHotels.length === 0 ? <p className="rounded-2xl border border-dashed p-4 text-sm text-zinc-500">Nessuna struttura trovata per questa ricerca.</p> : null}
              {visibleHotels.map((hotel) => {
                const services = activeServiceLabels(hotel.services).slice(0, 4);
                const mailHref = contactMailHref(hotel);
                const whatsAppHref = contactWhatsAppHref(hotel);
                return (
                  <article key={hotel.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/60">
                    {hotel.main_photo_url ? <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-32 w-full object-cover" /> : null}
                    <div className="p-4">
                      <p className="font-semibold">{hotel.property_name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{structureTypeLabels[hotel.structure_type]} · {hotel.specific_area ?? hotel.city_name}</p>
                      {hotel.description ? <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">{hotel.description}</p> : null}
                      {services.length ? <div className="mt-3 flex flex-wrap gap-1.5">{services.map((service) => <span key={service} className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">{service}</span>)}</div> : null}
                      <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                        <a href={mapsHref(hotel)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 dark:border-zinc-700"><MapPin className="h-3 w-3" /> Google Maps</a>
                        {mailHref ? <a href={mailHref} className="rounded-full border px-3 py-1.5 dark:border-zinc-700">Email</a> : null}
                        {whatsAppHref ? <a href={whatsAppHref} target="_blank" rel="noreferrer" className="rounded-full border px-3 py-1.5 dark:border-zinc-700">WhatsApp</a> : null}
                      </div>
                      <Link href={`/hotel/${hotel.id}`} className="mt-3 inline-flex text-xs font-semibold text-emerald-700">Vedi profilo struttura</Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Feed richieste</h2>
              <p className="text-sm text-zinc-500">Annunci attivi pubblici, senza contatti privati.</p>
            </div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm dark:bg-zinc-900">{filteredRequests.length} annunci</span>
          </div>

          {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
          {loading ? <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">Caricamento vetrina...</div> : null}
          {!loading && filteredRequests.length === 0 ? <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"><p className="font-semibold">Nessun annuncio trovato</p><p className="mt-2 text-sm text-zinc-500">Prova un’altra città oppure crea tu una richiesta gratuita.</p><Link href={createRequestHref} className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white">Crea la tua richiesta gratuita</Link></div> : null}

          {filteredRequests.map((request) => {
            const filters = activeFilterLabels(request.preference_filters).slice(0, 5);
            const hasOffer = offeredRequestIds.has(request.id);
            return (
              <article key={request.id} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">{badgeFor(request)}</span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold dark:bg-zinc-800">{request.city_name}</span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800">{mealPlanLabels[request.meal_plan]}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">Richiesta soggiorno a {request.city_name}</h3>
                    <p className="mt-1 text-sm text-zinc-500">Zona preferita: {request.preferred_area}</p>
                    <div className="mt-4 grid gap-3 text-sm text-zinc-600 sm:grid-cols-3 dark:text-zinc-400">
                      <p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p>
                      <p className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> {request.guests_count} ospiti · {request.rooms_count} camere</p>
                      <p className="inline-flex items-center gap-2"><Euro className="h-4 w-4" /> Budget {formatCurrency(Number(request.budget))}</p>
                    </div>
                    {filters.length ? <div className="mt-4 flex flex-wrap gap-2">{filters.map((filter) => <span key={filter} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">{filter}</span>)}</div> : null}
                    {request.notes ? <p className="mt-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{request.notes}</p> : null}
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 md:w-56">
                    {isHotel ? (
                      hasOffer ? <div className="rounded-full border border-emerald-200 px-4 py-3 text-center text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:text-emerald-300">Offerta già inviata</div> : <Link href={`/struttura/annunci/${request.id}`} className="rounded-full bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white">Fai un’offerta</Link>
                    ) : (
                      <Link href={createRequestHref} className="rounded-full bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white">Crea la tua richiesta gratuita</Link>
                    )}
                    <button type="button" className="rounded-full border border-zinc-300 px-4 py-3 text-sm font-semibold dark:border-zinc-700">Vedi dettagli</button>
                    <p className="text-center text-[11px] text-zinc-400">Contatti protetti fino all’accettazione dell’offerta.</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
