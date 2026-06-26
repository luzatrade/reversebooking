"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Briefcase, Building2, CalendarDays, CheckCircle, Euro, MapPin, Users } from "lucide-react";
import { getCityHeroImage } from "@/lib/destination-slider/cityPhotos";
import { CurrencySwitcher } from "@/components/currency/CurrencySwitcher";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { CityHeroSlider } from "@/components/showcase/CityHeroSlider";
import { HorizontalSlider } from "@/components/showcase/HorizontalSlider";
import { CatalogOfferCard } from "@/components/catalog-offers/CatalogOfferCard";
import { company } from "@/lib/legal/company";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { BrandLogo } from "@/components/navigation/BrandLogo";
import { TopbarControlsMenu } from "@/components/navigation/TopbarControlsMenu";
import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";
import { topbarAuthLinkClass, topbarAuthPrimaryClass } from "@/components/navigation/topbarStyles";
import { formatAdvertiserPublicName, oneAdvertiserProfile } from "@/lib/advertiser/publicName";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { createWorldCity, findCityById, resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType, type UserRole } from "@/types/app";
import type { CatalogOfferListItem } from "@/types/catalog-offers";

function isShowcaseVisibleAfterAcceptance(acceptedAtIso: string, now = new Date()) {
  const until = new Date(acceptedAtIso).getTime() + 24 * 60 * 60 * 1000;
  return now.getTime() < until;
}

type PreferenceFilters = { connecting_rooms?: boolean; disabled_access?: boolean; pool?: boolean; spa?: boolean; bathtub?: boolean; garage?: boolean; beach?: boolean; pets_allowed?: boolean };
type AdvertiserPublic = { first_name: string | null; last_name: string | null; advertiser_type?: string | null };
type TravelRequest = { id: string; country_code: string | null; city_name: string; city_id: string | null; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number; budget: number; meal_plan: MealPlan; preference_filters: PreferenceFilters | null; notes: string | null; expires_at: string; created_at: string; status: string; advertiser_profiles?: AdvertiserPublic | AdvertiserPublic[] | null };
type OnboardingHotelRow = { id: string; nome: string; city_name: string; indirizzo: string | null; email: string | null; phone: string | null; main_photo_url: string | null; website: string | null; google_maps_url: string | null };
type HotelAccount = { id: string; property_name: string; structure_type: StructureType; provider_kind: "structure" | "agency"; country_code: string | null; city_name: string; city_id: string | null; specific_area: string | null; description: string | null; public_email: string | null; public_phone: string | null; website: string | null; main_photo_url: string | null; points_of_interest: string[] | null; services: Record<string, boolean> | null; isOnboarding?: boolean; google_maps_url?: string | null };
type Offer = { id: string; travel_request_id: string };
type Viewer = {
  userId: string | null;
  role: UserRole | null;
  hotelAccountId: string | null;
  hotelCityId: string | null;
  hotelCityName: string | null;
  hotelCountryCode: string | null;
  hotelStructureType: StructureType | null;
};

const serviceLabels: Record<string, string> = { pool: "Piscina", spa: "Spa", garage: "Garage", pets_allowed: "Animali ammessi", disabled_access: "Accesso disabili", beach: "Vicino alla spiaggia", bathtub: "Vasca", connecting_rooms: "Camere comunicanti" };
const ctaMaps = "inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-100";
const ctaEmail = "inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-600";
const ctaWhatsApp = "inline-flex items-center justify-center gap-1.5 rounded-full bg-green-50 px-3.5 py-2 text-xs font-bold text-green-700 shadow-sm transition hover:bg-green-100";
const ctaProfile = "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e8f0f8] px-3.5 py-2 text-xs font-bold text-[#0f4c81] shadow-sm transition hover:bg-[#d4e4f2]";
const ctaRequest = "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#fff7ed] px-3.5 py-2 text-xs font-bold text-[#c2410c] shadow-sm transition hover:bg-[#ffedd5]";

/** Vetrina homepage: elenco agenzie per città (riattivare in un secondo momento). */
const SHOW_HOME_AGENCY_DIRECTORY = false;
const RANDOM_ONBOARDING_POOL = 320;
const RANDOM_ONBOARDING_SHOW = 40;
const RANDOM_REGISTERED_SHOW = 20;
const RANDOM_REQUESTS_SHOW = 24;
const SHOWCASE_REQUESTS_POOL = 200;

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

const countryDisplayNames = typeof Intl !== "undefined" && "DisplayNames" in Intl ? new Intl.DisplayNames(["en"], { type: "region" }) : null;
function countryLabel(code: string | null | undefined) { const c = (code ?? "").trim().toUpperCase(); if (!c) return null; try { return countryDisplayNames?.of(c) ?? c; } catch { return c; } }
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "short" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value); }
function totalBudget(request: TravelRequest) { return Number(request.budget); }
function normalize(value: string | null | undefined) { return (value ?? "").trim().toLowerCase(); }
const cityAliases: Record<string, string[]> = { rome: ["roma"], roma: ["rome"], florence: ["firenze"], firenze: ["florence"], milan: ["milano"], milano: ["milan"], naples: ["napoli"], napoli: ["naples"], venice: ["venezia"], venezia: ["venice"], turin: ["torino"], torino: ["turin"], genoa: ["genova"], genova: ["genoa"], padua: ["padova"], padova: ["padua"], syracuse: ["siracusa"], siracusa: ["syracuse"], capri: ["capri"], sardinia: ["sardegna"], sardegna: ["sardinia"], "reggio calabria": ["reggio di calabria"], "reggio di calabria": ["reggio calabria"], london: ["londra"], londra: ["london"] };
function cityMatch(a: string | null | undefined, b: string | null | undefined) { const na = normalize(a); const nb = normalize(b); if (na === nb) return true; if (cityAliases[na]?.includes(nb)) return true; if (cityAliases[nb]?.includes(na)) return true; return false; }
function titleCaseWord(value: string) { return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); }
function cityLookupNames(cityName: string) {
  const base = cityName.trim();
  if (!base) return [];
  const n = normalize(base);
  const names = new Set<string>([base, titleCaseWord(base)]);
  for (const alias of cityAliases[n] ?? []) {
    names.add(alias);
    names.add(titleCaseWord(alias));
  }
  for (const [key, vals] of Object.entries(cityAliases)) {
    if (vals.includes(n)) {
      names.add(key);
      names.add(titleCaseWord(key));
    }
  }
  return [...names];
}
function onboardingSearchNames(selected: Pick<WorldCity, "city_name" | "city_id" | "country_code">) {
  const canonicalId = resolveCanonicalCityId({
    cityName: selected.city_name,
    countryCode: selected.country_code,
    cityId: selected.city_id,
  });
  const catalogCity = canonicalId ? majorWorldCities.find((city) => city.city_id === canonicalId) : undefined;
  return cityLookupNames(catalogCity?.city_name ?? selected.city_name);
}
function onboardingCityMeta(cityName: string): { country_code: string; city_id: string } {
  const cityId = resolveCanonicalCityId({ cityName });
  const catalogCity = cityId ? majorWorldCities.find((city) => city.city_id === cityId) : undefined;
  const countryCode = catalogCity?.country_code ?? (cityId?.includes("-") ? cityId.split("-")[0]! : "IT");
  return {
    country_code: countryCode,
    city_id: cityId ?? `${String(cityName || "").toLowerCase().replace(/ +/g, "-")}-it`,
  };
}
function mapOnboardingRow(row: OnboardingHotelRow): HotelAccount {
  const { country_code, city_id } = onboardingCityMeta(row.city_name);
  return {
    id: row.id,
    property_name: row.nome,
    structure_type: "hotel",
    provider_kind: "structure",
    country_code,
    city_name: row.city_name,
    city_id,
    specific_area: row.indirizzo,
    description: null,
    public_email: row.email,
    public_phone: row.phone,
    website: row.website,
    main_photo_url: row.main_photo_url,
    points_of_interest: null,
    services: null,
    isOnboarding: true,
    google_maps_url: row.google_maps_url,
  };
}
function publicHotelDescription(description: string | null) { const value = description?.trim() ?? ""; if (!value) return null; const lower = value.toLowerCase(); if (lower.includes("profilo struttura creato") || lower.includes("da completare nel pannello struttura") || lower.includes("accesso social")) return null; return value; }
function activeFilterLabels(filters: PreferenceFilters | null) { if (!filters) return []; return Object.entries(filters).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
function activeServiceLabels(services: Record<string, boolean> | null) { if (!services) return []; return Object.entries(services).filter(([, value]) => Boolean(value)).map(([key]) => serviceLabels[key] ?? key); }
type RequestBadgeKind = "new" | "expiring" | "active";
function requestBadgeKind(request: TravelRequest): RequestBadgeKind {
  const created = new Date(request.created_at).getTime();
  const expires = new Date(request.expires_at).getTime();
  const now = Date.now();
  if (now - created < 1000 * 60 * 60 * 24) return "new";
  if (expires - now < 1000 * 60 * 60 * 48) return "expiring";
  return "active";
}
function requestBadgeClass(kind: RequestBadgeKind) {
  if (kind === "active") return "rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-semibold text-[#c2410c]";
  if (kind === "expiring") return "rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800";
  return "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700";
}
function mapsHref(hotel: HotelAccount) { const query = [hotel.property_name, hotel.specific_area, hotel.city_name].filter(Boolean).join(" "); return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; }
function contactMailHref(hotel: HotelAccount) {
  if (!hotel.public_email) return null;
  const name = hotel.property_name || "la vostra struttura";
  const subject = encodeURIComponent("Richiesta disponibilità — " + name);
  const lines = [
    "Ciao! Ho trovato " + name + " su " + company.companyName + " 😊 e vorrei chiedere gentilmente informazioni e disponibilità per le seguenti date:",
    "",
    "Check-in: ___",
    "Check-out: ___",
    "Ospiti: ___",
    "",
    "Resto in attesa di un vostro cortese riscontro.",
    "Grazie mille!",
  ];
  const body = encodeURIComponent(lines.join("\n"));
  return "mailto:" + hotel.public_email + "?subject=" + subject + "&body=" + body;
}
function contactWhatsAppHref(hotel: HotelAccount) {
  if (!hotel.public_phone) return null;
  const phone = hotel.public_phone.replace(/\D/g, "");
  if (!phone) return null;
  const name = hotel.property_name || "la vostra struttura";
  const msg = "Ciao! Ho trovato " + name + " su " + company.companyName + " 😊 e vorrei chiedere gentilmente informazioni e disponibilità per le seguenti date: ... Grazie mille!";
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
}
function dashboardHref(viewer: Viewer) {
  if (viewer.role === "hotel") return "/struttura/dashboard";
  if (viewer.role === "agency") return "/agenzia/dashboard";
  if (viewer.role === "advertiser") return "/inserzionista/dashboard";
  if (viewer.role === "admin") return "/admin";
  return "/login";
}
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
  const searchParams = useSearchParams();
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [hotels, setHotels] = useState<HotelAccount[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [viewer, setViewer] = useState<Viewer>({
    userId: null,
    role: null,
    hotelAccountId: null,
    hotelCityId: null,
    hotelCityName: null,
    hotelCountryCode: null,
    hotelStructureType: null,
  });
  const [advertiserOfferCount, setAdvertiserOfferCount] = useState(0);
  const [selectedCity, setSelectedCity] = useState(() => createWorldCity("IT", ""));
  const [loading, setLoading] = useState(true);
  const [hotelsLoading, setHotelsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [acceptedRequestIds, setAcceptedRequestIds] = useState<Set<string>>(() => new Set());
  const [structureOffers, setStructureOffers] = useState<CatalogOfferListItem[]>([]);
  const [agencyOffers, setAgencyOffers] = useState<CatalogOfferListItem[]>([]);
  const [offersLoading, setOffersLoading] = useState(true);

  const hasSelectedCity = Boolean(selectedCity.city_name.trim());
  const createRequestBase = hasSelectedCity ? `/inserzionista/crea-annuncio?city_id=${encodeURIComponent(selectedCity.city_id)}&city=${encodeURIComponent(selectedCity.city_name)}` : "/inserzionista/crea-annuncio";
  const createRequestHref = viewer.userId ? createRequestBase : `/login?redirect=${encodeURIComponent(createRequestBase)}`;

  function matchesSelectedCity(item: { city_id?: string | null; city_name?: string | null; country_code?: string | null }) {
    if (!hasSelectedCity) return true;
    if (item.city_id && item.city_id === selectedCity.city_id) return true;
    const itemCountry = item.country_code?.trim().toUpperCase();
    const selectedCountry = selectedCity.country_code?.trim().toUpperCase();
    return cityMatch(item.city_name, selectedCity.city_name) && (!itemCountry || !selectedCountry || itemCountry === selectedCountry);
  }

  useEffect(() => {
    const cityId = searchParams.get("city_id")?.trim();
    const cityName = searchParams.get("city")?.trim();
    if (!cityId && !cityName) return;

    if (cityId) {
      const known = findCityById(cityId);
      if (known.city_id === cityId) {
        setSelectedCity(known);
        return;
      }
    }

    if (cityName) {
      const canonicalId = resolveCanonicalCityId({ cityName, cityId });
      if (canonicalId) {
        setSelectedCity(findCityById(canonicalId));
        return;
      }
      setSelectedCity(createWorldCity(cityId?.match(/^([A-Z]{2})-/)?.[1] ?? "IT", cityName));
    }
  }, [searchParams]);

  function matchesHotelCity(item: { city_id?: string | null; city_name?: string | null; country_code?: string | null }) {
    if (!viewer.hotelCityId) return false;
    if (item.city_id && item.city_id === viewer.hotelCityId) return true;
    const itemCountry = item.country_code?.trim().toUpperCase();
    const hotelCountry = viewer.hotelCountryCode?.trim().toUpperCase();
    if (hotelCountry && itemCountry && itemCountry !== hotelCountry) return false;
    return cityMatch(item.city_name, viewer.hotelCityName);
  }

  async function detectViewer() {
    const supabase = createBrowserSupabaseClient();
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) {
      setViewer({
        userId: null,
        role: null,
        hotelAccountId: null,
        hotelCityId: null,
        hotelCityName: null,
        hotelCountryCode: null,
        hotelStructureType: null,
      });
      setOffers([]);
      setAdvertiserOfferCount(0);
      return;
    }
    let role: UserRole | null = null;
    const [{ data: profile }, { data: hotelAccount }] = await Promise.all([
      supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle(),
      supabase
        .from("hotel_accounts")
        .select("id, city_id, city_name, country_code, structure_type")
        .eq("user_id", authData.user.id)
        .maybeSingle(),
    ]);
    if (profile?.role === "hotel" || profile?.role === "advertiser" || profile?.role === "admin" || profile?.role === "agency") role = profile.role;
    const hotelAccountId = hotelAccount?.id ?? null;
    if (hotelAccountId && !role) role = "hotel";
    setViewer({
      userId: authData.user.id,
      role,
      hotelAccountId,
      hotelCityId: hotelAccount?.city_id ?? null,
      hotelCityName: hotelAccount?.city_name ?? null,
      hotelCountryCode: hotelAccount?.country_code ?? null,
      hotelStructureType: (hotelAccount?.structure_type as StructureType | undefined) ?? null,
    });
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
      const acceptedCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const viewerPromise = detectViewer().catch(() => {});
      const [requestsRes, { data: acceptedOfferRows }] = await Promise.all([
        fetch("/api/showcase/requests", { cache: "no-store", credentials: "include" }),
        supabase
          .from("offers")
          .select("travel_request_id, updated_at")
          .eq("status", "accepted")
          .gt("updated_at", acceptedCutoff),
      ]);

      const requestsJson = (await requestsRes.json()) as { requests?: TravelRequest[]; error?: string };
      if (!requestsRes.ok) {
        setError(requestsJson.error ?? "Errore durante il caricamento delle richieste.");
        return;
      }

      const acceptedIds = new Set<string>();
      for (const row of acceptedOfferRows ?? []) {
        if (isShowcaseVisibleAfterAcceptance(row.updated_at)) acceptedIds.add(row.travel_request_id);
      }
      let concludedRequests: TravelRequest[] = [];
      if (acceptedIds.size > 0) {
        const concludedRes = await fetch(
          `/api/showcase/requests?ids=${encodeURIComponent(Array.from(acceptedIds).join(","))}`,
          { cache: "no-store", credentials: "include" },
        );
        const concludedJson = (await concludedRes.json()) as { requests?: TravelRequest[] };
        if (concludedRes.ok) {
          concludedRequests = (concludedJson.requests ?? []) as TravelRequest[];
        }
      }
      const merged = new Map<string, TravelRequest>();
      for (const request of [...((requestsJson.requests ?? []) as TravelRequest[]), ...concludedRequests]) {
        merged.set(request.id, request);
      }
      setAcceptedRequestIds(acceptedIds);
      setRequests(
        Array.from(merged.values())
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, SHOWCASE_REQUESTS_POOL),
      );
      void viewerPromise;
    } catch (err) { setError(err instanceof Error ? err.message : "Errore durante il caricamento della home."); } finally { setLoading(false); }
  }

  useEffect(() => { void loadShowcase(); }, []);

  useEffect(() => {
    let cancelled = false;
    async function loadHotels() {
      setHotelsLoading(true);
      try {
        const supabase = createBrowserSupabaseClient();
        const hotelSelect =
          "id, property_name, structure_type, provider_kind, country_code, city_name, city_id, specific_area, description, public_email, public_phone, main_photo_url, points_of_interest, services";
        const onboardingSelect = "id, nome, city_name, indirizzo, email, phone, main_photo_url, website, google_maps_url";

        let registeredQuery = supabase
          .from("hotel_accounts")
          .select(hotelSelect)
          .eq("account_status", "active")
          .eq("subscription_active", true)
          .order("property_name", { ascending: true });

        if (hasSelectedCity) {
          registeredQuery = registeredQuery.eq("city_id", selectedCity.city_id);
        } else {
          registeredQuery = registeredQuery.limit(RANDOM_REGISTERED_SHOW);
        }

        const registeredPromise = registeredQuery;

        async function fetchOnboardingHotels(): Promise<OnboardingHotelRow[]> {
          if (hasSelectedCity) {
            const names = onboardingSearchNames(selectedCity);
            let onboardingQuery = supabase
              .from("onboarding_hotels")
              .select(onboardingSelect)
              .order("nome", { ascending: true })
              .limit(200);
            if (names.length === 1) {
              onboardingQuery = onboardingQuery.ilike("city_name", names[0]!);
            } else if (names.length > 1) {
              onboardingQuery = onboardingQuery.or(names.map((name) => `city_name.ilike."${name.replace(/"/g, '""')}"`).join(","));
            }
            const { data } = await onboardingQuery;
            return (data ?? []) as OnboardingHotelRow[];
          }

          const { data } = await supabase
            .from("onboarding_hotels")
            .select(onboardingSelect)
            .limit(RANDOM_ONBOARDING_POOL);
          return shuffleItems((data ?? []) as OnboardingHotelRow[]).slice(0, RANDOM_ONBOARDING_SHOW);
        }

        const [{ data: registeredHotels }, onboardingHotels] = await Promise.all([
          registeredPromise,
          fetchOnboardingHotels(),
        ]);
        if (cancelled) return;

        const mapped = (onboardingHotels ?? []).map(mapOnboardingRow);
        const merged = [...(registeredHotels ?? []), ...mapped] as HotelAccount[];
        setHotels(hasSelectedCity ? merged : shuffleItems(merged));
      } catch {
        if (!cancelled) setHotels([]);
      } finally {
        if (!cancelled) setHotelsLoading(false);
      }
    }
    void loadHotels();
    return () => {
      cancelled = true;
    };
  }, [hasSelectedCity, selectedCity.city_id, selectedCity.city_name, selectedCity.country_code]);

  useEffect(() => {
    let cancelled = false;
    async function loadOffers() {
      setOffersLoading(true);
      try {
        const [hotelRes, agencyRes] = await Promise.all([
          hasSelectedCity && selectedCity.city_id
            ? fetch(`/api/catalog-offers?cityId=${encodeURIComponent(selectedCity.city_id)}&kind=hotel_vacancy`)
            : fetch("/api/catalog-offers?random=1&kind=hotel_vacancy"),
          hasSelectedCity && selectedCity.city_id
            ? fetch(`/api/catalog-offers?cityId=${encodeURIComponent(selectedCity.city_id)}&kind=agency_package`)
            : fetch("/api/catalog-offers?random=1&kind=agency_package"),
        ]);
        const hotelJson = await hotelRes.json();
        const agencyJson = await agencyRes.json();
        if (cancelled) return;
        setStructureOffers(Array.isArray(hotelJson.offers) ? hotelJson.offers : []);
        setAgencyOffers(Array.isArray(agencyJson.offers) ? agencyJson.offers : []);
      } catch {
        if (!cancelled) {
          setStructureOffers([]);
          setAgencyOffers([]);
        }
      } finally {
        if (!cancelled) setOffersLoading(false);
      }
    }
    void loadOffers();
    return () => { cancelled = true; };
  }, [hasSelectedCity, selectedCity.city_id]);

  const visibleHotels = useMemo(() => hotels.filter((h) => h.provider_kind !== "agency").filter(matchesSelectedCity), [hotels, selectedCity.city_id, selectedCity.city_name, selectedCity.country_code]);
  const visibleAgencies = useMemo(() => hotels.filter((h) => h.provider_kind === "agency").filter(matchesSelectedCity), [hotels, selectedCity.city_id, selectedCity.city_name, selectedCity.country_code]);
  const isHotel = viewer.role === "hotel" && Boolean(viewer.hotelAccountId);
  const displayRequests = useMemo(() => {
    if (isHotel) return requests.filter(matchesHotelCity);
    const matched = requests.filter(matchesSelectedCity);
    if (hasSelectedCity) return matched;
    return shuffleItems(matched).slice(0, RANDOM_REQUESTS_SHOW);
  }, [
    requests,
    hasSelectedCity,
    selectedCity.city_id,
    selectedCity.city_name,
    selectedCity.country_code,
    isHotel,
    viewer.hotelCityId,
    viewer.hotelCityName,
    viewer.hotelCountryCode,
  ]);
  const offeredRequestIds = useMemo(() => new Set(offers.map((offer) => offer.travel_request_id)), [offers]);

  function renderRequestCard(request: TravelRequest) {
    const hasOffer = offeredRequestIds.has(request.id);
    const kind = requestBadgeKind(request);
    const publicAdvertiserName = formatAdvertiserPublicName(
      oneAdvertiserProfile(request.advertiser_profiles),
    );
    return (
      <article key={request.id} className="hd-request-card flex w-[18.5rem] shrink-0 snap-start flex-col overflow-hidden p-0 sm:w-[20rem]">
        <div className="relative h-36 w-full overflow-hidden">
          <img
            src={getCityHeroImage({ cityName: request.city_name, countryCode: request.country_code, cityId: request.city_id })}
            alt={request.city_name}
            className="h-full w-full object-cover"
          />
          <span className={`absolute left-3 top-3 ${requestBadgeClass(kind)}`}>
            {kind === "new" ? t.showcase.badgeNew : kind === "expiring" ? t.showcase.badgeExpiring : t.showcase.badgeActive}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <span className="hd-verified-user-badge self-start">
            <CheckCircle className="h-3.5 w-3.5" />
            {publicAdvertiserName ?? "Utente verificato"}
          </span>
          {publicAdvertiserName ? (
            <p className="mt-1 text-xs font-medium text-zinc-500">Utente verificato</p>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold text-[#0f4c81]">{request.city_name}</h3>
          <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">Zona: {request.preferred_area}</p>
          <div className="mt-3 space-y-1.5 text-sm text-zinc-600">
            <p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0" /> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p>
            <p className="inline-flex items-center gap-2"><Users className="h-4 w-4 shrink-0" /> {request.guests_count} ospiti · {request.rooms_count} camere</p>
            <p className="inline-flex items-center gap-2"><Euro className="h-4 w-4 shrink-0" /> {formatCurrency(Number(request.budget))} · {t.common.budgetTotal}</p>
          </div>
          <div className="mt-4 flex-1" />
          {isHotel ? (
            hasOffer ? (
              <div className="rounded-full border border-emerald-200 px-3 py-2.5 text-center text-xs font-semibold text-emerald-700">Offerta inviata</div>
            ) : (
              <Link href={`/struttura/annunci/${request.id}`} className="rounded-full bg-[#0f4c81] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#0d4373]">Fai un’offerta</Link>
            )
          ) : !viewer.userId ? (
            <Link
              href={`/login?redirect=${encodeURIComponent(`/struttura/annunci/${request.id}`)}`}
              className="rounded-full bg-[#0f4c81] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#0d4373]"
            >
              Invia offerta
            </Link>
          ) : (
            <Link href={createRequestHref} className="rounded-full bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-orange-600">Crea richiesta</Link>
          )}
        </div>
      </article>
    );
  }

  function renderHotelCard(hotel: HotelAccount) {
    const country = countryLabel(hotel.country_code);
    const locationLine = `${structureTypeLabels[hotel.structure_type]} · ${hotel.city_name}${country ? `, ${country}` : ""}`;
    const description = publicHotelDescription(hotel.description);
    return (
      <article key={hotel.id} className="flex w-[18.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 sm:w-[20rem]">
        {hotel.main_photo_url ? (
          <img src={hotel.main_photo_url} alt={hotel.property_name} className="h-36 w-full object-cover" />
        ) : (
          <div className="flex h-36 w-full items-center justify-center bg-zinc-100 text-zinc-400"><Building2 className="h-8 w-8" /></div>
        )}
        <div className="flex flex-1 flex-col p-4">
          <p className="font-semibold">{hotel.property_name}</p>
          <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{locationLine}</p>
          {description ? <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{description}</p> : null}
          <div className="mt-4 flex-1" />
          <div className="flex flex-wrap items-center gap-2">
            <a href={mapsHref(hotel)} target="_blank" rel="noreferrer" className={ctaMaps}><MapPin className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardMap}</a>
            {hotel.isOnboarding ? (
              <Link href={`/hotel/onboarding/${hotel.id}`} className={ctaProfile}>{t.showcase.cardProfile}</Link>
            ) : (
              <Link href={`/hotel/${hotel.id}`} className={ctaProfile}>{t.showcase.cardProfile}</Link>
            )}
            {viewer.role !== "hotel" ? (
              <Link href={createRequestHrefForHotel(hotel)} className={ctaRequest}><Euro className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardRequest}</Link>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  function renderAgencyCard(agency: HotelAccount) {
    const country = countryLabel(agency.country_code);
    const locationLine = `${t.showcase.agencyKindLabel} · ${agency.city_name}${country ? `, ${country}` : ""}`;
    const description = publicHotelDescription(agency.description);
    return (
      <article key={agency.id} className="flex w-[18.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 sm:w-[20rem]">
        {agency.main_photo_url ? (
          <img src={agency.main_photo_url} alt={agency.property_name} className="h-36 w-full object-cover" />
        ) : (
          <div className="flex h-36 w-full items-center justify-center bg-zinc-100 text-zinc-400"><Briefcase className="h-8 w-8" /></div>
        )}
        <div className="flex flex-1 flex-col p-4">
          <p className="font-semibold">{agency.property_name}</p>
          <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{locationLine}</p>
          {description ? <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{description}</p> : null}
          <div className="mt-4 flex-1" />
          <div className="flex flex-wrap items-center gap-2">
            <a href={mapsHref(agency)} target="_blank" rel="noreferrer" className={ctaMaps}><MapPin className="h-3.5 w-3.5 shrink-0" /> {t.showcase.cardMap}</a>
            <Link href={`/hotel/${agency.id}`} className={ctaProfile}>{t.showcase.cardProfile}</Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <main className="hd-home-main min-h-screen overflow-x-hidden">
      {viewer.userId ? <RoleAlertBells role={viewer.role === "hotel" ? "hotel" : viewer.role === "advertiser" ? "advertiser" : undefined} /> : null}
      <div className="hd-home-hero">
      <header className="hd-home-topbar relative z-50 overflow-visible">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 pb-0 pt-3 safe-top sm:px-6 sm:pt-4 lg:px-8">
          <BrandLogo size="homeTopbar" className="shrink-0" accent="white" />
          <TopbarControlsMenu collapseBelow="sm">
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
                <Link href="/registrazione?mode=partner" className={topbarAuthLinkClass}>
                  {t.site.becomePartner}
                </Link>
                <Link href="/registrazione" className={topbarAuthPrimaryClass}>
                  {t.site.registration}
                </Link>
              </>
            )}
          </TopbarControlsMenu>
        </div>
      </header>

      <div className="hd-home-tagline font-brand">
        <h1 className="hd-home-headline">{t.showcase.homeHeadline}</h1>
        <p className="hd-home-subtitle">{t.showcase.homeSubtitle}</p>
      </div>
      </div>

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
<div className="relative z-0 mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <HorizontalSlider
        title={
          isHotel && viewer.hotelCityName
            ? `${displayRequests.length} richieste attive a ${viewer.hotelCityName}`
            : hasSelectedCity
              ? `${displayRequests.length} richieste attive a ${selectedCity.city_name}`
              : `${displayRequests.length} richieste in evidenza`
        }
        subtitle={
          isHotel
            ? "Richieste di soggiorno pubblicate nella tua città."
            : hasSelectedCity
              ? "Richieste di soggiorno per la destinazione selezionata."
              : "Selezione casuale di richieste attive da tutto il catalogo."
        }
        itemCount={!loading && !error ? displayRequests.length : 0}
      >
        {error ? <div className="w-full rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
        {loading ? <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">Caricamento home...</div> : null}
        {!loading && !error && displayRequests.length === 0 ? (
          <div className="w-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center">
            <p className="font-semibold">Nessuna richiesta attiva</p>
            <p className="mt-2 text-sm text-zinc-500">
              {isHotel && viewer.hotelCityName
                ? `Al momento non ci sono richieste attive per ${viewer.hotelCityName}.`
                : hasSelectedCity
                  ? `Al momento non ci sono richieste attive per ${selectedCity.city_name}.`
                  : "Al momento non ci sono richieste pubbliche disponibili."}
            </p>
            {viewer.role !== "hotel" ? <Link href={createRequestHref} className="hd-cta-orange mt-4">Crea la tua richiesta</Link> : null}
          </div>
        ) : null}
        {!loading && !error ? displayRequests.map((request) => renderRequestCard(request)) : null}
      </HorizontalSlider>

      <HorizontalSlider
        title={
          hasSelectedCity
            ? hotelsLoading
              ? `Strutture a ${selectedCity.city_name}`
              : `${visibleHotels.length} strutture a ${selectedCity.city_name}`
            : `${visibleHotels.length} strutture in evidenza`
        }
        subtitle={hasSelectedCity ? "Hotel e strutture ricettive per la destinazione selezionata." : "Selezione casuale di strutture da tutto il catalogo."}
        itemCount={!hotelsLoading ? visibleHotels.length : 0}
      >
        {hotelsLoading ? <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">Caricamento strutture...</div> : null}
        {!hotelsLoading && visibleHotels.length === 0 ? (
          <div className="w-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
            {hasSelectedCity ? `Nessuna struttura trovata per ${selectedCity.city_name}.` : "Nessuna struttura trovata."}
          </div>
        ) : null}
        {!hotelsLoading ? visibleHotels.map((hotel) => renderHotelCard(hotel)) : null}
      </HorizontalSlider>

      <HorizontalSlider
        title={t.catalogOffers.structureOffersTitle}
        subtitle={hasSelectedCity ? `${t.catalogOffers.structureOffersSubtitleCity} ${selectedCity.city_name}` : t.catalogOffers.structureOffersSubtitle}
        itemCount={!offersLoading ? structureOffers.length : 0}
      >
        {offersLoading ? <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">Caricamento offerte...</div> : null}
        {!offersLoading && structureOffers.length === 0 ? (
          <div className="w-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
            {t.catalogOffers.structureOffersEmpty}
          </div>
        ) : null}
        {!offersLoading ? structureOffers.map((offer) => (
          <CatalogOfferCard key={offer.id} offer={offer} />
        )) : null}
      </HorizontalSlider>

      {SHOW_HOME_AGENCY_DIRECTORY ? (
        <HorizontalSlider
          title={t.showcase.agenciesSliderTitle}
          subtitle={hasSelectedCity ? `${t.showcase.agenciesSliderSubtitleCity} ${selectedCity.city_name}` : t.showcase.agenciesSliderSubtitle}
          itemCount={!hotelsLoading ? visibleAgencies.length : 0}
        >
          {hotelsLoading ? <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">…</div> : null}
          {!hotelsLoading && visibleAgencies.length === 0 ? (
            <div className="w-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">{t.showcase.agenciesEmpty}</div>
          ) : null}
          {!hotelsLoading ? visibleAgencies.map((agency) => renderAgencyCard(agency)) : null}
        </HorizontalSlider>
      ) : null}

      <HorizontalSlider
        title={t.catalogOffers.agencyOffersTitle}
        subtitle={hasSelectedCity ? `${t.catalogOffers.agencyOffersSubtitleCity} ${selectedCity.city_name}` : t.catalogOffers.agencyOffersSubtitle}
        itemCount={!offersLoading ? agencyOffers.length : 0}
      >
        {offersLoading ? <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">Caricamento offerte...</div> : null}
        {!offersLoading && agencyOffers.length === 0 ? (
          <div className="w-full rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
            {t.catalogOffers.agencyOffersEmpty}
          </div>
        ) : null}
        {!offersLoading ? agencyOffers.map((offer) => (
          <CatalogOfferCard key={offer.id} offer={offer} />
        )) : null}
      </HorizontalSlider>

    </div>
  </main>
  );
}
