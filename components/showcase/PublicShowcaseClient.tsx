"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Building2, CalendarDays, Euro, MapPin, Users } from "lucide-react";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { CityHeroSlider } from "@/components/showcase/CityHeroSlider";
import { company } from "@/lib/legal/company";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { BrandLogo } from "@/components/navigation/BrandLogo";
import { TopbarControlsMenu } from "@/components/navigation/TopbarControlsMenu";
import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";
import { topbarAuthLinkClass, topbarAuthPrimaryClass } from "@/components/navigation/topbarStyles";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { createWorldCity } from "@/lib/constants/world-city-helpers";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType, type UserRole } from "@/types/app";

function isShowcaseVisibleAfterAcceptance(acceptedAtIso: string, now = new Date()) {
  const until = new Date(acceptedAtIso).getTime() + 24 * 60 * 60 * 1000;
  return now.getTime() < until;
}

type PreferenceFilters = { connecting_rooms?: boolean; disabled_access?: boolean; pool?: boolean; spa?: boolean; bathtub?: boolean; garage?: boolean; beach?: boolean; pets_allowed?: boolean };
type AdvertiserPublic = { first_name: string | null; last_name: string | null; advertiser_type?: string | null };
type TravelRequest = { id: string; country_code: string | null; city_name: string; city_id: string | null; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number; budget: number; meal_plan: MealPlan; preference_filters: PreferenceFilters | null; notes: string | null; expires_at: string; created_at: string; status: string; advertiser_profiles?: AdvertiserPublic | AdvertiserPublic[] | null };
type HotelAccount = { id: string; property_name: string; structure_type: StructureType; country_code: string | null; city_name: string; city_id: string | null; specific_area: string | null; description: string | null; public_email: string | null; public_phone: string | null; main_photo_url: string | null; points_of_interest: string[] | null; services: Record<string, boolean> | null };
type Offer = { id: string; travel_request_id: string };
type Viewer = { userId: string | null; role: UserRole | null; hotelAccountId: string | null };

const serviceLabels: Record<string, string> = { pool: "Piscina", spa: "Spa", garage: "Garage", pets_allowed: "Animali ammessi", disabled_access: "Accesso disabili", beach: "Vicino alla spiaggia", bathtub: "Vasca", connecting_rooms: "Camere comunicanti" };
const structureCardActionClass =
  "inline-flex items-center justify-center gap-1 rounded-full border-2 border-[#0f4c81] bg-white px-3 py-1.5 text-xs font-semibold text-[#0f4c81] shadow-sm transition hover:bg-[#0f4c81] hover:text-white";

function advertiserName(request: TravelRequest) {
  const advertiser = Array.isArray(request.advertiser_profiles) ? request.advertiser_profiles[0] : request.advertiser_profiles;
  const name = [advertiser?.first_name, advertiser?.last_name].filter(Boolean).join(" ").trim();
  return name || "Inserzionista verificato";
}
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value); }
function totalBudget(request: TravelRequest) { return Number(request.budget) * Number(request.rooms_count || 1); }
function normalize(value: string | null | undefined) { return (value ?? "").trim().toLowerCase(); }
function publicHotelDescription(description: string | null) { const value = description?.trim() ?? ""; if (!value) return null; const lower = value.toLowerCase(); if (lower.includes("profilo struttura creato") || lower.includes("da completare nel pannello struttura") || lower.includes("accesso social")) return null; return value; }
function activeFilterLabels(filters: PreferenceFilters | null) { if (!filters) return []; return Object.entries(filters).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
function activeServiceLabels(services: Record<string, boolean> | null) { if (!services) return []; return Object.entries(services).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
function badgeFor(request: TravelRequest) { const created = new Date(request.created_at).getTime(); const expires = new Date(request.expires_at).getTime(); const now = Date.now(); if (now - created < 1000 * 60 * 60 * 24) return "Nuovo"; if (expires - now < 1000 * 60 * 60 * 48) return "In scadenza"; return "Attivo"; }
function mapsHref(hotel: HotelAccount) { const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" "); return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; }
function contactMailHref(hotel: HotelAccount) {
  if (!hotel.public_email) return null;
  const subject = encodeURIComponent(`Richiesta informazioni da ${company.companyName}`);
  const body = encodeURIComponent(`Ho visto il tuo annuncio su ${company.companyName} e vorrei ricevere maggiori informazioni.`);
  return `mailto:${hotel.public_email}?subject=${subject}&body=${body}`;
}
function contactWhatsAppHref(hotel: HotelAccount) {
  if (!hotel.public_phone) return null;
  const phone = hotel.public_phone.replace(/\D/g, "");
  if (!phone) return null;
  const text = encodeURIComponent(`Ho visto il tuo annuncio su ${company.companyName} e vorrei ricevere maggiori informazioni.`);
  return `https://wa.me/${phone}?text=${text}`;
}
function dashboardHref(viewer: Viewer) { if (viewer.role === "hotel") return "/struttura/dashboard"; if (viewer.role === "advertiser") return "/inserzionista/dashboard"; if (viewer.role === "admin") return "/admin"; return "/login"; }
function createOfferHref(requestId: string, viewer: Viewer) {
  const path = `/struttura/annunci/${requestId}`;
  if (viewer.role === "hotel" && viewer.userId) return path;
  return `/login?redirect=${encodeURIComponent(path)}`;
}
function createRequestHrefForHotel(hotel: Pick<HotelAccount, "id" | "city_id" | "city_name">) {
  if (!hotel.city_name.trim()) return "/inserzionista/crea-annuncio";
  return `/inserzionista/crea-annuncio?city_id=${encodeURIComponent(hotel.city_id ?? "")}&city=${encodeURIComponent(hotel.city_name)}&hotel_id=${encodeURIComponent(hotel.id)}`;
}
export function PublicShowcaseClient() {
  const { t } = useLanguage();
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [hotels, setHotels] = useState<HotelAccount[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [viewer, setViewer] = useState<Viewer>({ userId: null, role: null, hotelAccountId: null });
  const [advertiserOfferCount, setAdvertiserOfferCount] = useState(0);
  const [selectedCity, setSelectedCity] = useState(() => createWorldCity("IT", ""));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [acceptedRequestIds, setAcceptedRequestIds] = useState<Set<string>>(() => new Set());

  const hasSelectedCity = Boolean(selectedCity.city_name.trim());
  const createRequestBase = hasSelectedCity ? `/inserzionista/crea-annuncio?city_id=${encodeURIComponent(selectedCity.city_id)}&city=${encodeURIComponent(selectedCity.city_name)}` : "/inserzionista/crea-annuncio";
  const createRequestHref = viewer.userId ? createRequestBase : `/login?redirect=${encodeURIComponent(createRequestBase)}`;

  function matchesSelectedCity(item: { city_id?: string | null; city_name?: string | null; country_code?: string | null }) {
    if (!hasSelectedCity) return true;
    if (item.city_id && item.city_id === selectedCity.city_id) return true;
    return normalize(item.city_name) === normalize(selectedCity.city_name) && (!item.country_code || item.country_code === selectedCity.country_code);
  }

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
      const requestSelect =
        "id, country_code, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, preference_filters, notes, expires_at, created_at, status, advertiser_profiles(first_name, last_name, advertiser_type)";
      const { data: requestData, error: requestError } = await supabase
        .from("travel_requests")
        .select(requestSelect)
        .eq("status", "active")
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(60);
      if (requestError) { setError(requestError.message); return; }
      const acceptedCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { data: acceptedOfferRows } = await supabase
        .from("offers")
        .select("travel_request_id, updated_at")
        .eq("status", "accepted")
        .gt("updated_at", acceptedCutoff);
      const acceptedIds = new Set<string>();
      for (const row of acceptedOfferRows ?? []) {
        if (isShowcaseVisibleAfterAcceptance(row.updated_at)) acceptedIds.add(row.travel_request_id);
      }
      let concludedRequests: TravelRequest[] = [];
      if (acceptedIds.size > 0) {
        const { data: concludedData } = await supabase
          .from("travel_requests")
          .select(requestSelect)
          .in("id", Array.from(acceptedIds));
        concludedRequests = (concludedData ?? []) as unknown as TravelRequest[];
      }
      const merged = new Map<string, TravelRequest>();
      for (const request of [...((requestData ?? []) as TravelRequest[]), ...concludedRequests]) {
        merged.set(request.id, request);
      }
      const { data: registeredHotels } = await supabase.from("hotel_accounts").select("id, property_name, structure_type, country_code, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, points_of_interest, services").eq("account_status", "active").eq("subscription_active", true).order("property_name", { ascending: true }).limit(60);
      const { data: onboardingHotels } = await supabase.from("onboarding_hotels").select("id, nome, city_name, indirizzo, email, phone, main_photo_url, website, google_maps_url").order("city_name").limit(1000);
      const mapped = (onboardingHotels || []).map(function mapOnb(h) { return { id: h.id, property_name: h.nome, structure_type: "hotel", country_code: "IT", city_name: h.city_name, city_id: String(h.city_name || "").toLowerCase().replace(/ +/g, "-") + "-it", specific_area: h.indirizzo || null, description: null, public_email: h.email || null, public_phone: h.phone || null, main_photo_url: h.main_photo_url || null, points_of_interest: null, services: null }; });
      const allHotels = [...(registeredHotels || []), ...mapped];
      setAcceptedRequestIds(acceptedIds);
      setRequests(
        Array.from(merged.values()).sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
      );
      setHotels(allHotels as HotelAccount[]);
    } catch (err) { setError(err instanceof Error ? err.message : "Errore durante il caricamento della home."); } finally { setLoading(false); }
  }

  useEffect(() => { void loadShowcase(); }, []);

  const visibleHotels = useMemo(() => hotels.filter(matchesSelectedCity), [hotels, selectedCity.city_id, selectedCity.city_name, selectedCity.country_code]);
  const filteredRequests = useMemo(() => requests.filter(matchesSelectedCity), [requests, selectedCity.city_id, selectedCity.city_name, selectedCity.country_code]);
  const offeredRequestIds = useMemo(() => new Set(offers.map((offer) => offer.travel_request_id)), [offers]);
  const isHotel = viewer.role === "hotel" && Boolean(viewer.hotelAccountId);

  return (
    <main className="hd-home-main min-h-screen overflow-x-hidden">
      {viewer.userId ? <RoleAlertBells role={viewer.role === "hotel" ? "hotel" : viewer.role === "advertiser" ? "advertiser" : undefined} /> : null}
      <header className="hd-home-topbar relative z-50 overflow-visible">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 pb-0 pt-3 safe-top sm:px-6 sm:pt-4 lg:px-8">
          <BrandLogo className="shrink-0" />
          <TopbarControlsMenu>
            <LanguageSwitcher compact />
            <CurrencySwitcher compact />
            {viewer.userId ? (
              <>
                <Link href={dashboardHref(viewer)} className={topbarAuthLinkClass}>
                  Dashboard
                  {viewer.role === "advertiser" && advertiserOfferCount > 0 ? (
                    <span className="ml-1 rounded-full bg-red-600 px-1.5 py-px text-[10px] font-bold text-white sm:text-[11px]">
                      {advertiserOfferCount}
                    </span>
                  ) : null}
                </Link>
                <LogoutButton variant="topbar" />
              </>
            ) : (
              <>
                <Link href="/login" className={topbarAuthLinkClass}>
                  Login
                </Link>
                <Link href="/registrazione" className={topbarAuthPrimaryClass}>
                  Registrati
                </Link>
              </>
            )}
          </TopbarControlsMenu>
        </div>
      </header>

      <p className="hd-home-tagline">{t.showcase.homeTagline}</p>

      <div className="hd-home-bento relative z-10 mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-2 sm:gap-4 sm:px-6 lg:px-8">
        <section className="hd-bento-card hd-bento-search p-3 sm:p-4">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <CityAutocomplete
              value={selectedCity}
              onChange={setSelectedCity}
              label={t.showcase.selectCity}
              hideLabel
              placeholder={t.showcase.citySearchPlaceholder}
            />
            <Link href={createRequestHref} className="hd-cta-orange hd-cta-drop-main w-full text-center">
              {t.showcase.dropYourRequest}
            </Link>
          </div>
          {hasSelectedCity ? (
            <button type="button" onClick={() => setSelectedCity(createWorldCity("IT", ""))} className="hd-clear-city mt-3 text-xs">
              {t.showcase.clearSelectedCity}
            </button>
          ) : null}
        </section>

        <section className="hd-bento-card overflow-hidden p-0">
          <CityHeroSlider selectedCity={selectedCity} onSelectCity={setSelectedCity} />
        </section>
      </div>
<div className="hd-home-grid relative z-0 mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:px-8">
      <aside className="hd-feed-aside order-2 min-w-0 lg:order-1 lg:sticky lg:top-6 lg:h-fit"><div className="hd-feed-card p-5"><div className="flex items-center gap-3"><Building2 className="h-5 w-5" /><div><h2 className="font-semibold">Strutture nella zona</h2><p className="text-xs text-zinc-500">{hasSelectedCity ? `Strutture compatibili con ${selectedCity.city_name}` : "Le strutture pubbliche attive."}</p></div></div><div className="mt-5 space-y-3">{loading ? <p className="text-sm text-zinc-500">Caricamento strutture...</p> : null}{!loading && visibleHotels.length === 0 ? <p className="rounded-2xl border border-dashed p-4 text-sm text-zinc-500">Nessuna struttura trovata.</p> : null}{visibleHotels.map((hotel) => { const services = activeServiceLabels(hotel.services).slice(0, 4); const description = publicHotelDescription(hotel.description); const mailHref = contactMailHref(hotel); const whatsAppHref = contactWhatsAppHref(hotel); return <article key={hotel.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">{hotel.main_photo_url ? <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-48 w-full object-cover" /> : null}<div className="p-4"><p className="font-semibold">{hotel.property_name}</p><p className="mt-1 text-xs text-zinc-500">{structureTypeLabels[hotel.structure_type]} · {hotel.specific_area ?? hotel.city_name}</p>{description ? <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{description}</p> : null}{services.length ? <div className="mt-3 flex flex-wrap gap-1.5">{services.map((service) => <span key={service} className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-zinc-600">{service}</span>)}</div> : null}<div className="mt-3 flex flex-wrap gap-2"><a href={mapsHref(hotel)} target="_blank" rel="noreferrer" className={structureCardActionClass}><MapPin className="h-3 w-3 shrink-0" /> Google Maps</a>{mailHref ? <a href={mailHref} className={structureCardActionClass}>Email</a> : null}{whatsAppHref ? <a href={whatsAppHref} target="_blank" rel="noreferrer" className={structureCardActionClass}>WhatsApp</a> : null}<Link href={`/hotel/${hotel.id}`} className={structureCardActionClass}>Vedi profilo struttura</Link>{viewer.role !== "hotel" ? <Link href={createRequestHrefForHotel(hotel)} className={structureCardActionClass}>Crea richiesta</Link> : null}</div></div></article>; })}</div></div></aside>

      <section className="order-1 min-w-0 space-y-5 lg:order-2"><div className="hd-feed-card p-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-semibold text-zinc-700">{filteredRequests.length} richieste attive{hasSelectedCity ? ` a ${selectedCity.city_name}` : ""}</p></div></div>{error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}{loading ? <div className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">Caricamento home...</div> : null}{!loading && filteredRequests.length === 0 ? <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 text-center"><p className="font-semibold">Nessuna richiesta attiva</p><p className="mt-2 text-sm text-zinc-500">Al momento non ci sono richieste pubbliche disponibili.</p>{viewer.role !== "hotel" ? <Link href={createRequestHref} className="hd-cta-orange mt-4">Crea la tua richiesta</Link> : null}</div> : null}<div className="space-y-4">{filteredRequests.map((request) => { const filters = activeFilterLabels(request.preference_filters).slice(0, 5); const hasOffer = offeredRequestIds.has(request.id); const isAccepted = acceptedRequestIds.has(request.id); return <article key={request.id} className="hd-request-card p-5 transition"><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{badgeFor(request)}</span><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold">{request.city_name}</span><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">{mealPlanLabels[request.meal_plan]}</span></div><p className="mt-3 text-sm font-semibold text-emerald-700">Pubblicato da {advertiserName(request)}</p><h3 className="mt-1 text-xl font-semibold">Richiesta soggiorno a {request.city_name}</h3><p className="mt-1 text-sm text-zinc-500">Zona preferita: {request.preferred_area}</p><div className="mt-4 grid grid-cols-1 gap-3 text-sm text-zinc-600 md:grid-cols-3"><p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p><p className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> {request.guests_count} ospiti · {request.rooms_count} camere</p><p className="inline-flex items-center gap-2"><Euro className="h-4 w-4" /> Per camera {formatCurrency(Number(request.budget))}</p></div>{<div className="mt-3 grid gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-600 sm:grid-cols-2"><p><strong>Budget per camera:</strong> {formatCurrency(Number(request.budget))}</p><p><strong>Totale indicativo:</strong> {formatCurrency(totalBudget(request))}</p></div>}{filters.length ? <div className="mt-4 flex flex-wrap gap-2">{filters.map((filter) => <span key={filter} className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">{filter}</span>)}</div> : null}{request.notes ? <p className="mt-4 line-clamp-2 text-sm text-zinc-600">{request.notes}</p> : null}</div><div className="flex shrink-0 flex-col gap-2 md:w-56">{isHotel ? hasOffer ? <div className="rounded-full border border-emerald-200 px-4 py-3 text-center text-sm font-semibold text-emerald-700">Offerta già inviata</div> : <Link href={`/struttura/annunci/${request.id}`} className="rounded-full bg-[#0f4c81] px-4 py-3 text-center text-sm font-bold text-white">Fai un’offerta</Link> : <Link href={createRequestHref} className="hd-cta-orange w-full text-center">{t.common.createYourRequest}</Link>}{<p className="text-center text-[11px] text-zinc-400">Contatti protetti fino all’accettazione dell’offerta.</p>}</div></div></article>; })}</div></section>
    </div>
  </main>
  );
}
