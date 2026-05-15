"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Building2, CalendarDays, Euro, Filter, LayoutDashboard, MapPin, Search, Users } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType, type UserRole } from "@/types/app";

type PreferenceFilters = { connecting_rooms?: boolean; disabled_access?: boolean; pool?: boolean; spa?: boolean; bathtub?: boolean; garage?: boolean; beach?: boolean; pets_allowed?: boolean };
type AdvertiserPublic = { first_name: string | null; last_name: string | null; advertiser_type?: string | null };
type TravelRequest = { id: string; country_code: string | null; city_name: string; city_id: string | null; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number; budget: number; meal_plan: MealPlan; preference_filters: PreferenceFilters | null; notes: string | null; expires_at: string; created_at: string; status: string; advertiser_profiles?: AdvertiserPublic | AdvertiserPublic[] | null };
type HotelAccount = { id: string; property_name: string; structure_type: StructureType; country_code: string | null; city_name: string; city_id: string | null; specific_area: string | null; description: string | null; public_email: string | null; public_phone: string | null; main_photo_url: string | null; points_of_interest: string[] | null; services: Record<string, boolean> | null };
type Offer = { id: string; travel_request_id: string };
type Viewer = { userId: string | null; role: UserRole | null; hotelAccountId: string | null };

const serviceLabels: Record<string, string> = { pool: "Piscina", spa: "Spa", garage: "Garage", pets_allowed: "Animali ammessi", disabled_access: "Accesso disabili", beach: "Vicino alla spiaggia", bathtub: "Vasca", connecting_rooms: "Camere comunicanti" };
const filterOptions: { key: keyof PreferenceFilters; label: string }[] = [
  { key: "pool", label: "Piscina" },
  { key: "spa", label: "Spa" },
  { key: "garage", label: "Garage" },
  { key: "pets_allowed", label: "Animali ammessi" },
  { key: "disabled_access", label: "Accesso disabili" },
  { key: "beach", label: "Vicino alla spiaggia" },
  { key: "bathtub", label: "Vasca" },
  { key: "connecting_rooms", label: "Camere comunicanti" },
];

function advertiserName(request: TravelRequest) { const advertiser = Array.isArray(request.advertiser_profiles) ? request.advertiser_profiles[0] : request.advertiser_profiles; const name = [advertiser?.first_name, advertiser?.last_name].filter(Boolean).join(" ").trim(); return name || "Inserzionista verificato"; }
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value); }
function totalBudget(request: TravelRequest) { return Number(request.budget) * Number(request.rooms_count || 1); }
function publicHotelDescription(description: string | null) { const value = description?.trim() ?? ""; if (!value) return null; const lower = value.toLowerCase(); if (lower.includes("profilo struttura creato") || lower.includes("da completare nel pannello struttura") || lower.includes("accesso social")) return null; return value; }
function activeFilterLabels(filters: PreferenceFilters | null) { if (!filters) return []; return Object.entries(filters).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
function activeServiceLabels(services: Record<string, boolean> | null) { if (!services) return []; return Object.entries(services).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
function badgeFor(request: TravelRequest) { const created = new Date(request.created_at).getTime(); const expires = new Date(request.expires_at).getTime(); const now = Date.now(); if (now - created < 1000 * 60 * 60 * 24) return "Nuovo"; if (expires - now < 1000 * 60 * 60 * 48) return "In scadenza"; return "Attivo"; }
function mapsHref(hotel: HotelAccount) { const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" "); return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; }
function contactMailHref(hotel: HotelAccount) { if (!hotel.public_email) return null; const subject = encodeURIComponent("Richiesta informazioni da Reverse Booking"); const body = encodeURIComponent("Ho visto il tuo annuncio su Reverse Booking e vorrei ricevere maggiori informazioni."); return `mailto:${hotel.public_email}?subject=${subject}&body=${body}`; }
function contactWhatsAppHref(hotel: HotelAccount) { if (!hotel.public_phone) return null; const phone = hotel.public_phone.replace(/\D/g, ""); if (!phone) return null; const text = encodeURIComponent("Ho visto il tuo annuncio su Reverse Booking e vorrei ricevere maggiori informazioni."); return `https://wa.me/${phone}?text=${text}`; }
function dashboardHref(viewer: Viewer) { if (viewer.role === "hotel") return "/struttura/dashboard"; if (viewer.role === "advertiser") return "/inserzionista/dashboard"; if (viewer.role === "admin") return "/admin"; return "/login"; }

export function PublicShowcaseClient() {
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [hotels, setHotels] = useState<HotelAccount[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [viewer, setViewer] = useState<Viewer>({ userId: null, role: null, hotelAccountId: null });
  const [advertiserOfferCount, setAdvertiserOfferCount] = useState(0);
  const [citySearch, setCitySearch] = useState("");
  const [areaSearch, setAreaSearch] = useState("");
  const [checkInSearch, setCheckInSearch] = useState("");
  const [checkOutSearch, setCheckOutSearch] = useState("");
  const [adultsSearch, setAdultsSearch] = useState("");
  const [childrenSearch, setChildrenSearch] = useState("");
  const [roomsSearch, setRoomsSearch] = useState("");
  const [budgetSearch, setBudgetSearch] = useState("");
  const [hotelSearch, setHotelSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<PreferenceFilters>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const citySuggestions = useMemo(() => majorWorldCities.slice(0, 500), []);
  const selectedCity = useMemo<WorldCity | null>(() => { const value = citySearch.trim().toLowerCase(); if (!value) return null; return majorWorldCities.find((city) => city.label.toLowerCase() === value || city.city_name.toLowerCase() === value) ?? null; }, [citySearch]);
  const selectedFilterCount = Object.values(selectedFilters).filter(Boolean).length;

  const requestDraftHref = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedCity?.country_code) params.set("country_code", selectedCity.country_code);
    if (selectedCity?.city_id) params.set("city_id", selectedCity.city_id);
    if (citySearch.trim()) params.set("city", citySearch.trim());
    if (areaSearch.trim()) params.set("area", areaSearch.trim());
    if (checkInSearch) params.set("check_in", checkInSearch);
    if (checkOutSearch) params.set("check_out", checkOutSearch);
    if (adultsSearch) params.set("adults", adultsSearch);
    if (childrenSearch) params.set("children", childrenSearch);
    if (roomsSearch) params.set("rooms", roomsSearch);
    if (budgetSearch) params.set("budget", budgetSearch);
    const filters = Object.entries(selectedFilters).filter(([, value]) => Boolean(value)).map(([key]) => key).join(",");
    if (filters) params.set("filters", filters);
    const target = `/inserzionista/crea-annuncio${params.toString() ? `?${params.toString()}` : ""}`;
    if (viewer.userId) return target;
    return `/login?redirect=${encodeURIComponent(target)}`;
  }, [viewer.userId, selectedCity, citySearch, areaSearch, checkInSearch, checkOutSearch, adultsSearch, childrenSearch, roomsSearch, budgetSearch, selectedFilters]);

  function toggleFilter(key: keyof PreferenceFilters) { setSelectedFilters((current) => ({ ...current, [key]: !current[key] })); }

  async function detectViewer() {
    const supabase = createBrowserSupabaseClient();
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) { setViewer({ userId: null, role: null, hotelAccountId: null }); setOffers([]); setAdvertiserOfferCount(0); return; }
    let role: UserRole | null = null;
    const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
    if (profile?.role === "hotel" || profile?.role === "advertiser" || profile?.role === "admin") role = profile.role;
    const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id").eq("user_id", authData.user.id).maybeSingle();
    const hotelAccountId = hotelAccount?.id ?? null;
    if (hotelAccountId && !role) role = "hotel";
    setViewer({ userId: authData.user.id, role, hotelAccountId });
    if (hotelAccountId) { const { data: offerData } = await supabase.from("offers").select("id, travel_request_id").eq("hotel_account_id", hotelAccountId); setOffers((offerData ?? []) as Offer[]); } else setOffers([]);
    if (role === "advertiser") {
      const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).maybeSingle();
      if (!advertiser?.id) { setAdvertiserOfferCount(0); return; }
      const { data: ownRequests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
      const requestIds = (ownRequests ?? []).map((request) => request.id);
      if (!requestIds.length) { setAdvertiserOfferCount(0); return; }
      const { data: offerData } = await supabase.from("offers").select("id").in("travel_request_id", requestIds);
      setAdvertiserOfferCount((offerData ?? []).length);
    } else setAdvertiserOfferCount(0);
  }

  async function loadShowcase() {
    setLoading(true); setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      await detectViewer();
      const { data: requestData, error: requestError } = await supabase.from("travel_requests").select("id, country_code, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, preference_filters, notes, expires_at, created_at, status, advertiser_profiles(first_name, last_name, advertiser_type)").eq("status", "active").gt("expires_at", new Date().toISOString()).order("created_at", { ascending: false }).limit(60);
      if (requestError) { setError(requestError.message); return; }
      const { data: hotelData, error: hotelError } = await supabase.from("hotel_accounts").select("id, property_name, structure_type, country_code, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, points_of_interest, services").eq("account_status", "active").eq("subscription_active", true).order("property_name", { ascending: true }).limit(60);
      if (hotelError) { setError(hotelError.message); return; }
      setRequests((requestData ?? []) as unknown as TravelRequest[]); setHotels((hotelData ?? []) as HotelAccount[]);
    } catch (err) { setError(err instanceof Error ? err.message : "Errore durante il caricamento della home."); } finally { setLoading(false); }
  }

  useEffect(() => { void loadShowcase(); }, []);

  const visibleHotels = useMemo(() => {
    const value = hotelSearch.trim().toLowerCase();
    return hotels.filter((hotel) => {
      const description = publicHotelDescription(hotel.description) ?? "";
      if (!value) return true;
      return `${hotel.property_name} ${hotel.city_name} ${hotel.specific_area ?? ""} ${description}`.toLowerCase().includes(value);
    }).slice(0, 8);
  }, [hotels, hotelSearch]);
  const offeredRequestIds = useMemo(() => new Set(offers.map((offer) => offer.travel_request_id)), [offers]);
  const isHotel = viewer.role === "hotel" && Boolean(viewer.hotelAccountId);

  return <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Reverse Booking</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Home richieste e strutture</h1><p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">Inserisci i dati del soggiorno e crea una richiesta. Il feed sotto resta indipendente.</p></div>
          <div className="flex flex-wrap gap-3">{viewer.userId ? <Link href={dashboardHref(viewer)} className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold dark:border-zinc-700"><LayoutDashboard className="h-4 w-4" /> Vai alla dashboard{viewer.role === "advertiser" && advertiserOfferCount > 0 ? <span className="ml-1 rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">{advertiserOfferCount}</span> : null}</Link> : <Link href="/login" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold dark:border-zinc-700">Login</Link>}</div>
        </div>
        <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-3"><p className="text-sm font-semibold text-white">Crea la tua richiesta di soggiorno</p></div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_.7fr_.7fr_.7fr]">
            <label className="text-xs font-semibold text-zinc-500">Città<input value={citySearch} onChange={(event) => setCitySearch(event.target.value)} list="home-city-suggestions" placeholder="Dove vuoi andare?" className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /><datalist id="home-city-suggestions">{citySuggestions.map((city) => <option key={city.city_id} value={city.label} />)}</datalist></label>
            <label className="text-xs font-semibold text-zinc-500">Check-in<input type="date" value={checkInSearch} onChange={(event) => setCheckInSearch(event.target.value)} className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="text-xs font-semibold text-zinc-500">Check-out<input type="date" value={checkOutSearch} onChange={(event) => setCheckOutSearch(event.target.value)} className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="text-xs font-semibold text-zinc-500">Adulti<input type="number" min={0} value={adultsSearch} onChange={(event) => setAdultsSearch(event.target.value)} placeholder="2" className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="text-xs font-semibold text-zinc-500">Bambini<input type="number" min={0} value={childrenSearch} onChange={(event) => setChildrenSearch(event.target.value)} placeholder="0" className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="text-xs font-semibold text-zinc-500">Camere<input type="number" min={1} value={roomsSearch} onChange={(event) => setRoomsSearch(event.target.value)} placeholder="1" className="mt-2 h-13 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-[minmax(160px,320px)_minmax(140px,210px)_112px_auto]">
            <label className="text-xs font-semibold text-zinc-500">Zona<input value={areaSearch} onChange={(event) => setAreaSearch(event.target.value)} placeholder="Centro, fiera, mare..." className="mt-2 h-11 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <label className="text-xs font-semibold text-zinc-500">Budget per camera<input type="number" min={1} value={budgetSearch} onChange={(event) => setBudgetSearch(event.target.value)} placeholder="€" className="mt-2 h-11 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white" /></label>
            <div className="flex items-end"><button type="button" onClick={() => setFiltersOpen((value) => !value)} className="inline-flex h-11 w-28 items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white px-3 text-sm font-semibold text-[#0f4c81] shadow-sm"><Filter className="h-4 w-4" /> Filtri{selectedFilterCount ? ` (${selectedFilterCount})` : ""}</button></div>
            <div className="flex items-end"><Link href={requestDraftHref} className="inline-flex h-11 items-center whitespace-nowrap rounded-2xl bg-white px-5 text-sm font-semibold text-[#0f4c81] shadow-sm">Crea richiesta</Link></div>
          </div>
          {filtersOpen ? <div className="mt-3 max-w-4xl rounded-3xl border border-white/60 bg-white/95 p-3 shadow-sm"><p className="text-sm font-semibold text-[#0f4c81]">Filtri e preferenze richiesta</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{filterOptions.map((filter) => <label key={filter.key} className="flex cursor-pointer items-center gap-2 rounded-2xl border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700"><input type="checkbox" checked={Boolean(selectedFilters[filter.key])} onChange={() => toggleFilter(filter.key)} />{filter.label}</label>)}</div></div> : null}
        </div>
      </div>
    </header>
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
      <aside className="space-y-4 lg:sticky lg:top-6 lg:h-fit"><div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"><div className="flex items-center gap-3"><Building2 className="h-5 w-5" /><div><h2 className="font-semibold">Strutture nella zona</h2><p className="text-xs text-zinc-500">Ricerca dedicata solo agli hotel.</p></div></div><div className="mt-4 flex h-12 items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-950"><Search className="h-4 w-4 text-zinc-500" /><input value={hotelSearch} onChange={(event) => setHotelSearch(event.target.value)} placeholder="Cerca hotel, città o zona" className="w-full bg-transparent text-sm outline-none" /></div><div className="mt-5 space-y-3">{loading ? <p className="text-sm text-zinc-500">Caricamento strutture...</p> : null}{!loading && visibleHotels.length === 0 ? <p className="rounded-2xl border border-dashed p-4 text-sm text-zinc-500">Nessuna struttura trovata.</p> : null}{visibleHotels.map((hotel) => { const services = activeServiceLabels(hotel.services).slice(0, 4); const description = publicHotelDescription(hotel.description); const mailHref = contactMailHref(hotel); const whatsAppHref = contactWhatsAppHref(hotel); return <article key={hotel.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/60">{hotel.main_photo_url ? <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-48 w-full object-cover" /> : null}<div className="p-4"><p className="font-semibold">{hotel.property_name}</p><p className="mt-1 text-xs text-zinc-500">{structureTypeLabels[hotel.structure_type]} · {hotel.specific_area ?? hotel.city_name}</p>{description ? <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p> : null}{services.length ? <div className="mt-3 flex flex-wrap gap-1.5">{services.map((service) => <span key={service} className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">{service}</span>)}</div> : null}<div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold"><a href={mapsHref(hotel)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 dark:border-zinc-700"><MapPin className="h-3 w-3" /> Google Maps</a>{mailHref ? <a href={mailHref} className="rounded-full border px-3 py-1.5 dark:border-zinc-700">Email</a> : null}{whatsAppHref ? <a href={whatsAppHref} target="_blank" rel="noreferrer" className="rounded-full border px-3 py-1.5 dark:border-zinc-700">WhatsApp</a> : null}</div><Link href={`/hotel/${hotel.id}`} className="mt-3 inline-flex text-xs font-semibold text-emerald-700">Vedi profilo struttura</Link></div></article>; })}</div></div></aside>
      <section className="space-y-4"><div className="flex items-center justify-between gap-4"><div><h2 className="text-2xl font-semibold">Feed richieste</h2><p className="text-sm text-zinc-500">Annunci attivi pubblici. Non cambiano mentre compili la richiesta sopra.</p></div><span className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm dark:bg-zinc-900">{requests.length} annunci</span></div>{error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}{loading ? <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">Caricamento home...</div> : null}{!loading && requests.length === 0 ? <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"><p className="font-semibold">Nessun annuncio trovato</p><p className="mt-2 text-sm text-zinc-500">Crea una nuova richiesta gratuita.</p>{viewer.role !== "hotel" ? <Link href={requestDraftHref} className="mt-4 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950">Crea la tua richiesta</Link> : null}</div> : null}{requests.map((request) => { const filters = activeFilterLabels(request.preference_filters).slice(0, 5); const hasOffer = offeredRequestIds.has(request.id); return <article key={request.id} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">{badgeFor(request)}</span><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold dark:bg-zinc-800">{request.city_name}</span><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800">{mealPlanLabels[request.meal_plan]}</span></div><p className="mt-3 text-sm font-semibold text-emerald-700">Pubblicato da {advertiserName(request)}</p><h3 className="mt-1 text-xl font-semibold">Richiesta soggiorno a {request.city_name}</h3><p className="mt-1 text-sm text-zinc-500">Zona preferita: {request.preferred_area}</p><div className="mt-4 grid gap-3 text-sm text-zinc-600 sm:grid-cols-3 dark:text-zinc-400"><p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p><p className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> {request.guests_count} ospiti · {request.rooms_count} camere</p><p className="inline-flex items-center gap-2"><Euro className="h-4 w-4" /> Per camera {formatCurrency(Number(request.budget))}</p></div><div className="mt-3 grid gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 sm:grid-cols-2"><p><strong>Budget per camera:</strong> {formatCurrency(Number(request.budget))}</p><p><strong>Totale indicativo:</strong> {formatCurrency(totalBudget(request))}</p></div>{filters.length ? <div className="mt-4 flex flex-wrap gap-2">{filters.map((filter) => <span key={filter} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">{filter}</span>)}</div> : null}{request.notes ? <p className="mt-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{request.notes}</p> : null}</div><div className="flex shrink-0 flex-col gap-2 md:w-56">{isHotel ? hasOffer ? <div className="rounded-full border border-emerald-200 px-4 py-3 text-center text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:text-emerald-300">Offerta già inviata</div> : <Link href={`/struttura/annunci/${request.id}`} className="rounded-full bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-emerald-950">Fai un’offerta</Link> : <Link href={requestDraftHref} className="rounded-full bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-emerald-950">Crea la tua richiesta</Link>}<button type="button" className="rounded-full border border-zinc-300 px-4 py-3 text-sm font-semibold dark:border-zinc-700">Vedi dettagli</button><p className="text-center text-[11px] text-zinc-400">Contatti protetti fino all’accettazione dell’offerta.</p></div></div></article>; })}</section>
    </div>
  </main>;
}
