"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Bell, Building2, CheckCircle2, FilePlus2, Home, RefreshCw, UserCog } from "lucide-react";
import { AdvertiserRequestsPanel } from "@/components/dashboard/AdvertiserRequestsPanel";
import { OfferBudgetComparison } from "@/components/offers/OfferBudgetComparison";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { AdvertiserFavoritesPanel } from "@/components/favorites/AdvertiserFavoritesPanel";
import { StatCard } from "@/components/dashboard/StatCard";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { MarkNotificationsReadOnDashboard } from "@/components/notifications/MarkNotificationsReadOnDashboard";
import { focusAlertBells, scrollToSection } from "@/lib/dashboard/scrollToSection";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { getMealPlanLabels, getServiceLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import type { MealPlan, StructureType } from "@/types/app";

type AdvertiserProfile = { id: string };
type TravelRequest = { id: string; request_code: string | null; city_name: string; city_id: string; country_code: string; preferred_area: string; preferred_structure_type: "all" | StructureType; check_in: string; check_out: string; guests_count: number; rooms_count: number; budget: number; meal_plan: MealPlan; status: string; created_at: string };
type HotelAccount = { id: string; property_name: string; structure_type: StructureType; city_name: string; specific_area: string | null; main_photo_url: string | null; points_of_interest: string[] | null; services: Record<string, boolean> | null };
type OfferHotel = { property_name: string; structure_type: StructureType };
type Offer = { id: string; offer_code: string | null; total_price: number; meal_plan_included: MealPlan; status: string; created_at: string; hotel_accounts?: OfferHotel | null };
type RawOffer = Omit<Offer, "hotel_accounts"> & { hotel_accounts?: OfferHotel | OfferHotel[] | null };
type AcceptedOffer = Offer & { travel_request_id: string; travel_requests?: { city_name: string; preferred_area: string; check_in: string; check_out: string } | null };
type RawAcceptedOffer = Omit<AcceptedOffer, "hotel_accounts" | "travel_requests"> & { hotel_accounts?: OfferHotel | OfferHotel[] | null; travel_requests?: NonNullable<AcceptedOffer["travel_requests"]> | NonNullable<AcceptedOffer["travel_requests"]>[] | null };

function normalizeOffers(rawOffers: RawOffer[]): Offer[] {
  return rawOffers.map((offer) => ({
    ...offer,
    hotel_accounts: Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] ?? null : offer.hotel_accounts ?? null,
  }));
}
function normalizeAcceptedOffers(rawOffers: RawAcceptedOffer[]): AcceptedOffer[] {
  return rawOffers.map((offer) => ({
    ...offer,
    hotel_accounts: Array.isArray(offer.hotel_accounts) ? offer.hotel_accounts[0] ?? null : offer.hotel_accounts ?? null,
    travel_requests: Array.isArray(offer.travel_requests) ? offer.travel_requests[0] ?? null : offer.travel_requests ?? null,
  }));
}
function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}
function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR" }).format(value);
}
function serviceLabels(services: Record<string, boolean> | null, locale: import("@/lib/i18n/translations").Locale) {
  if (!services) return [];
  const labels = getServiceLabels(locale);
  return Object.entries(services).filter(([, value]) => value).map(([key]) => labels[key] ?? key);
}

export function AdvertiserDashboardClient() {
  const { locale, t } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);
  const structureTypeLabels = getStructureTypeLabels(locale);
  const [profile, setProfile] = useState<AdvertiserProfile | null>(null);
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [hotels, setHotels] = useState<HotelAccount[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [acceptedOffers, setAcceptedOffers] = useState<AcceptedOffer[]>([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const activeRequest = requests.find((request) => request.status === "active") ?? requests[0] ?? null;

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    setProfile(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        setError(t.dashboard.shared.loginRequiredAdvertiser);
        return;
      }
      const { data: advertiserData, error: advertiserError } = await supabase
        .from("advertiser_profiles")
        .select("id")
        .eq("user_id", authData.user.id)
        .maybeSingle();
      if (advertiserError || !advertiserData) {
        setError(t.dashboard.shared.profileNotFoundAdvertiser);
        return;
      }
      setProfile(advertiserData as AdvertiserProfile);
      const { data: requestData, error: requestError } = await supabase
        .from("travel_requests")
        .select("id, request_code, city_name, city_id, country_code, preferred_area, preferred_structure_type, check_in, check_out, guests_count, rooms_count, budget, meal_plan, status, created_at")
        .eq("advertiser_id", advertiserData.id)
        .order("created_at", { ascending: false });
      if (requestError) {
        setError(requestError.message);
        return;
      }
      const typedRequests = (requestData ?? []) as TravelRequest[];
      setRequests(typedRequests);
      const requestIdsAll = typedRequests.map((request) => request.id);
      if (requestIdsAll.length) {
        const { data: notificationData } = await supabase.from("notifications").select("id").eq("recipient_type", "advertiser").eq("is_read", false).in("travel_request_id", requestIdsAll);
        setUnreadNotifications((notificationData ?? []).length);
      } else setUnreadNotifications(0);
      const selectedRequest = typedRequests.find((request) => request.status === "active") ?? typedRequests[0];
      if (typedRequests.length) {
        const requestIds = typedRequests.map((request) => request.id);
        const { data: acceptedOfferData, error: acceptedOfferError } = await supabase
          .from("offers")
          .select("id, offer_code, travel_request_id, total_price, meal_plan_included, status, created_at, hotel_accounts(property_name, structure_type), travel_requests(city_name, preferred_area, check_in, check_out)")
          .in("travel_request_id", requestIds)
          .eq("status", "accepted")
          .order("created_at", { ascending: false });
        if (acceptedOfferError) {
          setError(acceptedOfferError.message);
          return;
        }
        setAcceptedOffers(normalizeAcceptedOffers((acceptedOfferData ?? []) as unknown as RawAcceptedOffer[]));
      } else setAcceptedOffers([]);
      if (selectedRequest) {
        let hotelQuery = supabase
          .from("hotel_accounts")
          .select("id, property_name, structure_type, city_name, specific_area, main_photo_url, points_of_interest, services")
          .eq("country_code", selectedRequest.country_code)
          .eq("city_id", selectedRequest.city_id)
          .eq("account_status", "active")
          .eq("subscription_active", true)
          .order("property_name", { ascending: true });
        if (selectedRequest.preferred_structure_type !== "all") hotelQuery = hotelQuery.eq("structure_type", selectedRequest.preferred_structure_type);
        const { data: hotelData, error: hotelError } = await hotelQuery;
        if (hotelError) {
          setError(hotelError.message);
          return;
        }
        setHotels((hotelData ?? []) as HotelAccount[]);
        const { data: offerData, error: offerError } = await supabase
          .from("offers")
          .select("id, offer_code, total_price, meal_plan_included, status, created_at, hotel_accounts(property_name, structure_type)")
          .eq("travel_request_id", selectedRequest.id)
          .order("created_at", { ascending: false });
        if (offerError) {
          setError(offerError.message);
          return;
        }
        setOffers(normalizeOffers((offerData ?? []) as unknown as RawOffer[]));
      } else {
        setHotels([]);
        setOffers([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.dashboard.shared.loadError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
  }, []);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash.replace("#", "");
    if (hash) scrollToSection(hash);
  }, [loading]);

  const activeCount = useMemo(() => requests.filter((request) => request.status === "active").length, [requests]);

  return (
    <main className={`${dashboardSurfaces.page} ${dashboardSurfaces.shell}`}>
      <MarkNotificationsReadOnDashboard role="advertiser" />
      <div className={`${dashboardSurfaces.headerPanel} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <p className={dashboardSurfaces.areaLabel}>{t.dashboard.advertiser.areaLabel}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">{t.dashboard.advertiser.title}</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Pubblica richieste gratuite, visualizza le strutture della zona e ricevi proposte nella campanella laterale.
          </p>
          {activeRequest ? (
            <p className="mt-2 text-sm text-zinc-500">
              {t.dashboard.advertiser.selectedRequest}: {activeRequest.city_name} · {activeRequest.preferred_area}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className={dashboardSurfaces.btnSecondary}>
            <Home className="h-4 w-4" /> Home
          </Link>
          <button type="button" onClick={loadDashboard} className={dashboardSurfaces.btnSecondary}>
            <RefreshCw className="h-4 w-4" /> Aggiorna
          </button>
          <Link href="/account" className={dashboardSurfaces.btnSecondary}>
            <UserCog className="h-4 w-4" /> Account
          </Link>
          <Link href="/inserzionista/crea-annuncio" className={dashboardSurfaces.btnPrimary}>
            <FilePlus2 className="h-4 w-4" /> Crea annuncio
          </Link>
          <LogoutButton />
        </div>
      </div>

      {error ? <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        <StatCard
          tone="blue"
          label={t.dashboard.shared.statActiveListings}
          value={loading ? "..." : String(activeCount)}
          description={t.dashboard.shared.statActiveListingsDesc}
          onClick={() => scrollToSection("annunci-attivi")}
        />
        <StatCard
          tone="cream"
          label={t.dashboard.shared.statReceivedOffers}
          value={loading ? "..." : String(offers.length)}
          description={t.dashboard.shared.statReceivedOffersDesc}
          onClick={() => scrollToSection("offerte-ricevute")}
        />
        <StatCard
          tone="accepted"
          label={t.dashboard.shared.statAcceptedOffers}
          value={loading ? "..." : String(acceptedOffers.length)}
          description={t.dashboard.shared.statAcceptedOffersDesc}
          onClick={() => scrollToSection("offerte-accettate")}
        />
        <StatCard
          tone="white"
          label={t.dashboard.shared.statStructuresInArea}
          value={loading ? "..." : String(hotels.length)}
          description={t.dashboard.shared.statStructuresInAreaDesc}
          onClick={() => scrollToSection("strutture-zona")}
        />
        <StatCard
          tone="blue"
          label="Notifiche"
          value={loading ? "..." : String(unreadNotifications)}
          description="Nuove notifiche non lette"
          onClick={focusAlertBells}
        />
      </div>

      <AdvertiserRequestsPanel requests={requests} loading={loading} />

      <section id="offerte-accettate" className={`${dashboardSurfaces.acceptedPanel} mt-8 scroll-mt-24`}>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-orange-700" />
          <div>
            <h2 className="text-xl font-semibold text-orange-950">{t.dashboard.shared.acceptedPanelTitle}</h2>
            <p className="text-sm text-orange-900/85">{t.dashboard.shared.acceptedPanelHint}</p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {loading ? <p className="text-sm text-zinc-500">{t.dashboard.shared.loadingAccepted}</p> : null}
          {!loading && acceptedOffers.length === 0 ? (
            <div className={dashboardSurfaces.acceptedEmpty}>{t.dashboard.shared.noAcceptedOffers}</div>
          ) : null}
          {acceptedOffers.map((offer, index) => (
            <article key={offer.id} className={index % 2 === 0 ? dashboardSurfaces.acceptedCard : dashboardSurfaces.acceptedCardAlt}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-semibold text-zinc-950">
                    {offer.offer_code ?? "OF------"} · {offer.hotel_accounts?.property_name ?? t.common.structure}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {offer.travel_requests?.city_name ?? t.dashboard.shared.destination} · {offer.travel_requests?.preferred_area ?? t.common.zone}
                    {offer.travel_requests ? ` · ${formatDate(offer.travel_requests.check_in, locale)} → ${formatDate(offer.travel_requests.check_out, locale)}` : ""}
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    {formatCurrency(Number(offer.total_price), locale)} · {mealPlanLabels[offer.meal_plan_included]}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/inserzionista/offerte/${offer.id}`} className={`inline-flex justify-center ${dashboardSurfaces.btnPrimary}`}>
                    Vedi riepilogo
                  </Link>
                  <span className="text-center text-xs text-zinc-500">{t.dashboard.shared.chatBottomRight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <section id="strutture-zona" className={`${dashboardSurfaces.panelCream} scroll-mt-24`}>
          <div className="flex items-center gap-3">
            <Building2 className={dashboardSurfaces.sectionIcon} />
            <h2 className={dashboardSurfaces.sectionTitle}>{t.dashboard.advertiser.structuresTitle}</h2>
          </div>
          <p className={dashboardSurfaces.sectionSubtitle}>{t.dashboard.advertiser.structuresSubtitle}</p>
          <div className="mt-5 space-y-3">
            {loading ? <p className="text-sm text-zinc-500">{t.dashboard.shared.loadingStructures}</p> : null}
            {!loading && hotels.length === 0 ? (
              <div className={dashboardSurfaces.emptyDashed}>{t.dashboard.shared.noCompatibleStructures}</div>
            ) : null}
            {hotels.map((hotel, index) => {
              const labels = serviceLabels(hotel.services, locale);
              return (
                <article key={hotel.id} className={index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardCream : dashboardSurfaces.cardWhite}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-zinc-950">{hotel.property_name}</p>
                      <p className="text-sm text-zinc-600">
                        {structureTypeLabels[hotel.structure_type]} · {hotel.specific_area ?? hotel.city_name}
                      </p>
                      {hotel.points_of_interest?.length ? (
                        <p className="mt-2 text-xs text-zinc-500">{t.dashboard.shared.nearTo}: {hotel.points_of_interest.join(", ")}</p>
                      ) : null}
                      {labels.length ? <p className="mt-2 text-xs text-zinc-500">{t.dashboard.shared.services}: {labels.join(", ")}</p> : null}
                    </div>
                    <Link href={`/hotel/${hotel.id}`} className="rounded-full border border-[#B8D4EB] bg-white px-3 py-1 text-xs font-semibold text-[#0f4c81] hover:bg-[#F4F8FC]">
                      Profilo
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside id="offerte-ricevute" className={dashboardSurfaces.panelBlue}>
          <div className="flex items-center gap-3">
            <Bell className={dashboardSurfaces.sectionIcon} />
            <h2 className={dashboardSurfaces.sectionTitle}>{t.dashboard.shared.offersBell}</h2>
          </div>
          <p className={dashboardSurfaces.sectionSubtitle}>{t.dashboard.shared.offersBellDesc}</p>
          <div className="mt-5 space-y-3">
            {loading ? <p className="text-sm text-zinc-500">{t.dashboard.shared.loadingOffers}</p> : null}
            {!loading && offers.length === 0 ? (
              <div className={dashboardSurfaces.emptyDashed}>{t.dashboard.shared.noOffersReceived}</div>
            ) : null}
            {offers.map((offer, index) => (
              <article key={offer.id} className={index % 2 === 0 ? dashboardSurfaces.cardBlue : dashboardSurfaces.cardWhite}>
                <p className="font-semibold text-zinc-950">
                  {offer.offer_code ?? "OF------"} · {offer.hotel_accounts?.property_name ?? t.common.structure}
                </p>
                <p className="text-sm text-zinc-600">
                  {offer.hotel_accounts?.structure_type ? structureTypeLabels[offer.hotel_accounts.structure_type] : "Struttura"} ·{" "}
                  {formatCurrency(Number(offer.total_price), locale)}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {mealPlanLabels[offer.meal_plan_included]} · {offer.status} · {formatDate(offer.created_at, locale)}
                </p>
                {activeRequest ? (
                  <OfferBudgetComparison
                    totalPrice={Number(offer.total_price)}
                    budgetTotal={Number(activeRequest.budget)}
                    locale={locale}
                    className="mt-2"
                  />
                ) : null}
                {offer.status === "accepted" ? (
                  <div className={`mt-3 ${dashboardSurfaces.acceptedBadge}`}>
                    🤝 {t.dashboard.shared.chatEmojiHint}
                  </div>
                ) : (
                  <Link href={`/inserzionista/offerte/${offer.id}`} className={`mt-3 ${dashboardSurfaces.btnPrimarySm}`}>
                    Vedi offerta
                  </Link>
                )}
              </article>
            ))}
          </div>
        </aside>
      </div>

      <AdvertiserFavoritesPanel />
      {loading && !profile ? <p className="mt-4 text-xs text-zinc-400">{t.dashboard.shared.loadingProfileAdvertiser}</p> : null}
    </main>
  );
}
