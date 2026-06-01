"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Bell, CheckCircle2, Filter, Home, ReceiptText, RefreshCw, UserCog } from "lucide-react";
import { HotelSentOffersPanel, type HotelSentOffer } from "@/components/dashboard/HotelSentOffersPanel";
import { StatCard } from "@/components/dashboard/StatCard";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { MarkNotificationsReadOnDashboard } from "@/components/notifications/MarkNotificationsReadOnDashboard";
import { focusAlertBells, scrollToSection } from "@/lib/dashboard/scrollToSection";
import { relaunchOfferHref } from "@/lib/identifiers";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getAdvertiserTypeLabels, getMealPlanLabels } from "@/lib/i18n/labels";
import type { AdvertiserType, MealPlan } from "@/types/app";

type HotelAccount = { id: string; property_name: string; city_name: string; city_id: string };
type AdvertiserRelation = { advertiser_type: AdvertiserType; short_description: string | null };
type RawSentOffer = Omit<HotelSentOffer, "travel_requests"> & {
  travel_requests?: HotelSentOffer["travel_requests"] | NonNullable<HotelSentOffer["travel_requests"]>[] | null;
};
type TravelRequest = {
  id: string;
  request_code: string | null;
  city_name: string;
  city_id: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: MealPlan;
  notes: string | null;
  visible_contact_email: string | null;
  visible_contact_phone: string | null;
  visible_contact_whatsapp: string | null;
  visible_contact_website: string | null;
  expires_at: string;
  created_at: string;
  advertiser_profiles?: AdvertiserRelation | null;
};
type RawTravelRequest = Omit<TravelRequest, "advertiser_profiles"> & { advertiser_profiles?: AdvertiserRelation | AdvertiserRelation[] | null };
type Offer = { id: string; travel_request_id: string; status: string; offer_code: string | null; created_at: string };
type AcceptedOffer = {
  id: string;
  total_price: number;
  meal_plan_included: MealPlan;
  created_at: string;
  travel_requests?: { id: string; city_name: string; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number } | null;
};
type RawAcceptedOffer = Omit<AcceptedOffer, "travel_requests"> & {
  travel_requests?: AcceptedOffer["travel_requests"] | NonNullable<AcceptedOffer["travel_requests"]>[] | null;
};
type Notification = { id: string; is_read: boolean };

function normalizeRequests(rawRequests: RawTravelRequest[]): TravelRequest[] {
  return rawRequests.map((request) => ({
    ...request,
    advertiser_profiles: Array.isArray(request.advertiser_profiles) ? request.advertiser_profiles[0] ?? null : request.advertiser_profiles ?? null,
  }));
}
function normalizeAcceptedOffers(rawOffers: RawAcceptedOffer[]): AcceptedOffer[] {
  return rawOffers.map((offer) => ({
    ...offer,
    travel_requests: Array.isArray(offer.travel_requests) ? offer.travel_requests[0] ?? null : offer.travel_requests ?? null,
  }));
}
function normalizeSentOffers(rawOffers: RawSentOffer[]): HotelSentOffer[] {
  return rawOffers.map((offer) => ({
    ...offer,
    travel_requests: Array.isArray(offer.travel_requests) ? offer.travel_requests[0] ?? null : offer.travel_requests ?? null,
  }));
}
function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}
function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR" }).format(value);
}
function badgeFor(request: TravelRequest, t: ReturnType<typeof import("@/lib/i18n/messages").getTranslations>) {
  const created = new Date(request.created_at).getTime();
  const expires = new Date(request.expires_at).getTime();
  const now = Date.now();
  if (now - created < 1000 * 60 * 60 * 24) return t.showcase.badgeNew;
  if (expires - now < 1000 * 60 * 60 * 48) return t.showcase.badgeExpiring;
  return t.showcase.badgeActive;
}

export function HotelDashboardClient() {
  const { locale, t } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);
  const advertiserTypeLabels = getAdvertiserTypeLabels(locale);
  const [hotel, setHotel] = useState<HotelAccount | null>(null);
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [sentOffers, setSentOffers] = useState<HotelSentOffer[]>([]);
  const [acceptedOffers, setAcceptedOffers] = useState<AcceptedOffer[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        setError(t.dashboard.shared.loginRequiredHotel);
        return;
      }
      const { data: hotelData, error: hotelError } = await supabase
        .from("hotel_accounts")
        .select("id, property_name, city_name, city_id")
        .eq("user_id", authData.user.id)
        .maybeSingle();
      if (hotelError || !hotelData) {
        setError(t.dashboard.shared.profileNotFoundHotel);
        return;
      }
      setHotel(hotelData as HotelAccount);
      const { data: requestData, error: requestError } = await supabase
        .from("travel_requests")
        .select("id, request_code, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, notes, visible_contact_email, visible_contact_phone, visible_contact_whatsapp, visible_contact_website, expires_at, created_at, advertiser_profiles(advertiser_type, short_description)")
        .eq("status", "active")
        .eq("city_id", hotelData.city_id)
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false });
      if (requestError) {
        setError(requestError.message);
        return;
      }
      const { data: offerData } = await supabase
        .from("offers")
        .select("id, travel_request_id, status, offer_code, created_at")
        .eq("hotel_account_id", hotelData.id)
        .order("created_at", { ascending: false });
      const { data: sentOfferData } = await supabase
        .from("offers")
        .select("id, offer_code, travel_request_id, status, total_price, meal_plan_included, created_at, travel_requests(id, request_code, city_name, preferred_area)")
        .eq("hotel_account_id", hotelData.id)
        .neq("status", "accepted")
        .order("created_at", { ascending: false });
      const { data: acceptedOfferData } = await supabase
        .from("offers")
        .select("id, total_price, meal_plan_included, created_at, travel_requests(id, city_name, preferred_area, check_in, check_out, guests_count, rooms_count)")
        .eq("hotel_account_id", hotelData.id)
        .eq("status", "accepted")
        .order("created_at", { ascending: false });
      const { data: notificationData } = await supabase
        .from("notifications")
        .select("id, is_read")
        .eq("recipient_type", "hotel")
        .eq("recipient_id", hotelData.id)
        .eq("is_read", false);
      setRequests(normalizeRequests((requestData ?? []) as unknown as RawTravelRequest[]));
      setOffers((offerData ?? []) as Offer[]);
      setSentOffers(normalizeSentOffers((sentOfferData ?? []) as unknown as RawSentOffer[]));
      setAcceptedOffers(normalizeAcceptedOffers((acceptedOfferData ?? []) as unknown as RawAcceptedOffer[]));
      setNotifications((notificationData ?? []) as Notification[]);
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

  const latestOfferByRequest = useMemo(() => {
    const map = new Map<string, Offer>();
    for (const offer of offers) {
      if (!map.has(offer.travel_request_id)) map.set(offer.travel_request_id, offer);
    }
    return map;
  }, [offers]);

  const unreadNotifications = notifications.length;

  function offerAction(requestId: string) {
    const offer = latestOfferByRequest.get(requestId);
    if (!offer) return { href: `/struttura/annunci/${requestId}`, label: t.dashboard.hotel.createOffer };
    if (offer.status === "pending") return { href: `/struttura/annunci/${requestId}`, label: t.dashboard.hotel.offerSent };
    if (offer.status === "accepted") return { href: `/struttura/annunci/${requestId}`, label: t.dashboard.shared.viewSummary };
    if (offer.status === "rejected" || offer.status === "expired") {
      return { href: relaunchOfferHref(requestId, offer.id), label: t.dashboard.hotel.relaunchOffer };
    }
    return { href: `/struttura/annunci/${requestId}`, label: t.dashboard.shared.viewOffer };
  }

  return (
    <main className={`${dashboardSurfaces.page} ${dashboardSurfaces.shell}`}>
      <MarkNotificationsReadOnDashboard role="hotel" />

      <div className={`${dashboardSurfaces.headerPanel} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <p className={dashboardSurfaces.areaLabel}>{t.dashboard.hotel.areaLabel}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">{t.dashboard.hotel.title}</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">{t.dashboard.hotel.subtitle}</p>
          {hotel ? (
            <p className="mt-2 text-sm text-zinc-500">
              {hotel.property_name} · {t.dashboard.hotel.registeredCity}: {hotel.city_name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className={dashboardSurfaces.btnSecondary}>
            <Home className="h-4 w-4" /> {t.dashboard.shared.home}
          </Link>
          <button type="button" onClick={loadDashboard} className={dashboardSurfaces.btnSecondary}>
            <RefreshCw className="h-4 w-4" /> {t.dashboard.shared.refresh}
          </button>
          <Link href="/account" className={dashboardSurfaces.btnSecondary}>
            <UserCog className="h-4 w-4" /> {t.dashboard.shared.account}
          </Link>
          <Link href="/struttura/profilo" className={dashboardSurfaces.btnSecondary}>
            {t.dashboard.hotel.structureProfile}
          </Link>
          <Link href="/struttura/offerte/crea" className={dashboardSurfaces.btnSecondary}>
            {t.catalogOffers.createOfferCta}
          </Link>
          <Link href="/struttura" className={dashboardSurfaces.btnSecondary}>
            <ReceiptText className="h-4 w-4" /> {t.dashboard.hotel.billing}
          </Link>
          <Link href="/struttura" className={dashboardSurfaces.btnPrimary}>
            {t.dashboard.hotel.manageSubscription}
          </Link>
          <LogoutButton />
        </div>
      </div>

      {error ? <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <StatCard
          tone="blue"
          label={t.dashboard.hotel.statCompatibleListings}
          value={loading ? "..." : String(requests.length)}
          description={t.dashboard.hotel.statCompatibleListingsDesc}
          onClick={() => scrollToSection("annunci-disponibili")}
        />
        <StatCard
          tone="cream"
          label={t.dashboard.hotel.statSentOffers}
          value={loading ? "..." : String(sentOffers.length)}
          description={t.dashboard.hotel.statSentOffersDesc}
          onClick={() => scrollToSection("offerte-inviate")}
        />
        <StatCard
          tone="accepted"
          label={t.dashboard.shared.statAcceptedOffers}
          value={loading ? "..." : String(acceptedOffers.length)}
          description={t.dashboard.hotel.statAcceptedOffersDesc}
          onClick={() => scrollToSection("offerte-accettate")}
        />
        <StatCard
          tone="blue"
          label={t.dashboard.shared.statNotifications}
          value={loading ? "..." : String(unreadNotifications)}
          description={t.dashboard.shared.statNotificationsDesc}
          onClick={focusAlertBells}
        />
      </div>

      <section id="annunci-disponibili" className={`${dashboardSurfaces.panelBlue} mt-8 scroll-mt-24`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Bell className={dashboardSurfaces.sectionIcon} />
            <div>
              <h2 className={dashboardSurfaces.sectionTitle}>{t.dashboard.hotel.availableListings}</h2>
              <p className="text-sm text-[#3d6f99]">{t.dashboard.hotel.availableListingsDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-[#B8D4EB] bg-white px-4 py-3 text-sm text-[#0c3d66]">
            <Filter className="h-4 w-4 text-[#0f4c81]" /> {t.dashboard.hotel.cityLocked}
          </div>
        </div>
        <div className="mt-6 max-h-[620px] space-y-4 overflow-y-auto pr-2">
          {loading ? <p className="text-sm text-zinc-500">{t.dashboard.hotel.loadingListings}</p> : null}
          {!loading && requests.length === 0 ? (
            <div className={dashboardSurfaces.emptyDashed}>{t.dashboard.hotel.noCompatibleListings}</div>
          ) : null}
          {requests.map((request, index) => {
            const action = offerAction(request.id);
            return (
              <article
                key={request.id}
                className={index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardCreamLg : dashboardSurfaces.cardWhite}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={dashboardSurfaces.badgeBlue}>{badgeFor(request, t)}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">{request.city_name}</span>
                      {request.request_code ? (
                        <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">{request.request_code}</span>
                      ) : null}
                      {request.advertiser_profiles?.advertiser_type ? (
                        <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">
                          {advertiserTypeLabels[request.advertiser_profiles.advertiser_type]}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-zinc-950">
                      {t.common.preferredArea}: {request.preferred_area}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {formatDate(request.check_in, locale)} → {formatDate(request.check_out, locale)} · {request.guests_count} {t.common.guests} · {request.rooms_count} {t.common.rooms} · {formatCurrency(Number(request.budget), locale)}
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-800">
                      {t.dashboard.hotel.requestedMealPlan}: {mealPlanLabels[request.meal_plan]}
                    </p>
                    {request.notes ? <p className="mt-3 text-sm text-zinc-600">{t.common.notes}: {request.notes}</p> : null}
                    {request.advertiser_profiles?.short_description ? (
                      <p className="mt-2 text-sm text-zinc-500">
                        {t.dashboard.hotel.clientProfile}: {request.advertiser_profiles.short_description}
                      </p>
                    ) : null}
                    <div className="mt-3 rounded-2xl border border-amber-200/80 bg-white px-3 py-3 text-xs text-amber-900">
                      {t.dashboard.hotel.contactsHiddenUntilAccept}
                    </div>
                  </div>
                  <Link href={action.href} className={dashboardSurfaces.btnPrimary}>
                    {latestOfferByRequest.has(request.id) ? action.label : t.dashboard.hotel.openRequest}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <HotelSentOffersPanel offers={sentOffers} loading={loading} />

      <section id="offerte-accettate" className={`${dashboardSurfaces.acceptedPanel} mt-8 scroll-mt-24`}>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-orange-700" />
          <div>
            <h2 className="text-xl font-semibold text-orange-950">{t.dashboard.hotel.acceptedPanelTitle}</h2>
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
                    {offer.travel_requests?.city_name ?? t.dashboard.shared.destination} · {offer.travel_requests?.preferred_area ?? t.dashboard.shared.zone}
                  </p>
                  {offer.travel_requests ? (
                    <p className="mt-1 text-sm text-zinc-600">
                      {formatDate(offer.travel_requests.check_in, locale)} → {formatDate(offer.travel_requests.check_out, locale)} · {offer.travel_requests.guests_count} {t.common.guests} · {offer.travel_requests.rooms_count} {t.common.rooms}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    {formatCurrency(Number(offer.total_price), locale)} · {mealPlanLabels[offer.meal_plan_included]}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {offer.travel_requests?.id ? (
                    <Link href={`/struttura/annunci/${offer.travel_requests.id}`} className={`inline-flex justify-center ${dashboardSurfaces.btnPrimary}`}>
                      {t.dashboard.shared.viewSummary}
                    </Link>
                  ) : null}
                  <span className="text-center text-xs text-zinc-500">{t.dashboard.shared.chatBottomRight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
