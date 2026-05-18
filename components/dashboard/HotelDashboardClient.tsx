"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Bell, CheckCircle2, Filter, Home, ReceiptText, RefreshCw, UserCog } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { MarkNotificationsReadOnDashboard } from "@/components/notifications/MarkNotificationsReadOnDashboard";
import { relaunchOfferHref } from "@/lib/identifiers";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { advertiserTypeLabels, mealPlanLabels, type AdvertiserType, type MealPlan } from "@/types/app";

type HotelAccount = { id: string; property_name: string; city_name: string; city_id: string };
type AdvertiserRelation = { advertiser_type: AdvertiserType; short_description: string | null };
type TravelRequest = {
  id: string;
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
function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}
function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
}
function badgeFor(request: TravelRequest) {
  const created = new Date(request.created_at).getTime();
  const expires = new Date(request.expires_at).getTime();
  const now = Date.now();
  if (now - created < 1000 * 60 * 60 * 24) return "Nuovo";
  if (expires - now < 1000 * 60 * 60 * 48) return "In scadenza";
  return "Attivo";
}

export function HotelDashboardClient() {
  const [hotel, setHotel] = useState<HotelAccount | null>(null);
  const [requests, setRequests] = useState<TravelRequest[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
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
        setError("Devi effettuare il login come struttura ricettiva.");
        return;
      }
      const { data: hotelData, error: hotelError } = await supabase
        .from("hotel_accounts")
        .select("id, property_name, city_name, city_id")
        .eq("user_id", authData.user.id)
        .maybeSingle();
      if (hotelError || !hotelData) {
        setError("Profilo struttura non trovato. Completa la registrazione come struttura ricettiva.");
        return;
      }
      setHotel(hotelData as HotelAccount);
      const { data: requestData, error: requestError } = await supabase
        .from("travel_requests")
        .select("id, city_name, city_id, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, notes, visible_contact_email, visible_contact_phone, visible_contact_whatsapp, visible_contact_website, expires_at, created_at, advertiser_profiles(advertiser_type, short_description)")
        .eq("status", "active")
        .eq("city_id", hotelData.city_id)
        .gt("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false });
      if (requestError) {
        setError(requestError.message);
        return;
      }
      const { data: offerData } = await supabase.from("offers").select("id, travel_request_id, status, offer_code, created_at").eq("hotel_account_id", hotelData.id).order("created_at", { ascending: false });
      const { data: acceptedOfferData } = await supabase
        .from("offers")
        .select("id, total_price, meal_plan_included, created_at, travel_requests(id, city_name, preferred_area, check_in, check_out, guests_count, rooms_count)")
        .eq("hotel_account_id", hotelData.id)
        .eq("status", "accepted")
        .order("created_at", { ascending: false });
      const { data: notificationData } = await supabase.from("notifications").select("id, is_read").eq("recipient_type", "hotel").eq("recipient_id", hotelData.id).eq("is_read", false);
      setRequests(normalizeRequests((requestData ?? []) as unknown as RawTravelRequest[]));
      setOffers((offerData ?? []) as Offer[]);
      setAcceptedOffers(normalizeAcceptedOffers((acceptedOfferData ?? []) as unknown as RawAcceptedOffer[]));
      setNotifications((notificationData ?? []) as Notification[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante il caricamento della dashboard.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
  }, []);

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
    if (!offer) return { href: `/struttura/annunci/${requestId}`, label: "CREA OFFERTA" };
    if (offer.status === "pending") return { href: `/struttura/annunci/${requestId}`, label: "Offerta inviata" };
    if (offer.status === "accepted") return { href: `/struttura/annunci/${requestId}`, label: "Vedi riepilogo" };
    if (offer.status === "rejected" || offer.status === "expired") return { href: relaunchOfferHref(requestId, offer.id), label: "Rilancia offerta" };
    return { href: `/struttura/annunci/${requestId}`, label: "Vedi offerta" };
  }

  return (
    <main className={`${dashboardSurfaces.page} ${dashboardSurfaces.shell}`}>
      <MarkNotificationsReadOnDashboard role="hotel" />

      <div className={`${dashboardSurfaces.headerPanel} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <p className={dashboardSurfaces.areaLabel}>Area strutture</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">Dashboard struttura</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">Puoi inviare offerte solo per annunci nella città registrata della tua struttura.</p>
          {hotel ? <p className="mt-2 text-sm text-zinc-500">{hotel.property_name} · città registrata: {hotel.city_name}</p> : null}
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
          <Link href="/struttura/profilo" className={dashboardSurfaces.btnSecondary}>
            Profilo struttura
          </Link>
          <Link href="/struttura" className={dashboardSurfaces.btnSecondary}>
            <ReceiptText className="h-4 w-4" /> Fatturazione
          </Link>
          <Link href="/struttura" className={dashboardSurfaces.btnPrimary}>
            Gestisci abbonamento
          </Link>
        </div>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>{error}</p>
          {error.includes("login") ? (
            <Link href="/login" className={`mt-3 inline-flex ${dashboardSurfaces.btnPrimary}`}>
              Vai al login
            </Link>
          ) : error.includes("registrazione") ? (
            <Link href="/registrazione" className={`mt-3 inline-flex ${dashboardSurfaces.btnPrimary}`}>
              Registrati come struttura
            </Link>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <StatCard tone="blue" label="Annunci compatibili" value={loading ? "..." : String(requests.length)} description="Solo nella città della struttura" />
        <StatCard tone="cream" label="Offerte inviate" value={loading ? "..." : String(offers.length)} description="Proposte già inviate dalla struttura" />
        <StatCard tone="accepted" label="Offerte accettate" value={loading ? "..." : String(acceptedOffers.length)} description="Richieste confermate" />
        <StatCard tone="blue" label="Notifiche" value={loading ? "..." : String(unreadNotifications)} description="Nuove notifiche non lette" />
      </div>

      <section className={`${dashboardSurfaces.acceptedPanel} mt-8`}>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-orange-700" />
          <div>
            <h2 className="text-xl font-semibold text-orange-950">Offerte accettate</h2>
            <p className="text-sm text-orange-900/85">Richieste confermate. Per scrivere usa la chat flottante in basso a destra.</p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {loading ? <p className="text-sm text-zinc-500">Caricamento offerte accettate...</p> : null}
          {!loading && acceptedOffers.length === 0 ? (
            <div className={dashboardSurfaces.acceptedEmpty}>Nessuna offerta accettata al momento.</div>
          ) : null}
          {acceptedOffers.map((offer, index) => (
            <article key={offer.id} className={index % 2 === 0 ? dashboardSurfaces.acceptedCard : dashboardSurfaces.acceptedCardAlt}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-semibold text-zinc-950">
                    {offer.travel_requests?.city_name ?? "Destinazione"} · {offer.travel_requests?.preferred_area ?? "Zona"}
                  </p>
                  {offer.travel_requests ? (
                    <p className="mt-1 text-sm text-zinc-600">
                      {formatDate(offer.travel_requests.check_in)} → {formatDate(offer.travel_requests.check_out)} · {offer.travel_requests.guests_count} ospiti · {offer.travel_requests.rooms_count} camere
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    {formatCurrency(Number(offer.total_price))} · {mealPlanLabels[offer.meal_plan_included]}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {offer.travel_requests?.id ? (
                    <Link href={`/struttura/annunci/${offer.travel_requests.id}`} className={`inline-flex justify-center ${dashboardSurfaces.btnPrimary}`}>
                      Vedi riepilogo
                    </Link>
                  ) : null}
                  <span className="text-center text-xs text-zinc-500">Chat in basso a destra</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${dashboardSurfaces.panelBlue} mt-8`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Bell className={dashboardSurfaces.sectionIcon} />
            <div>
              <h2 className={dashboardSurfaces.sectionTitle}>Annunci disponibili</h2>
              <p className="text-sm text-[#3d6f99]">Solo annunci della città registrata della struttura.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-[#B8D4EB] bg-white px-4 py-3 text-sm text-[#0c3d66]">
            <Filter className="h-4 w-4 text-[#0f4c81]" /> Città bloccata dopo la registrazione
          </div>
        </div>
        <div className="mt-6 max-h-[620px] space-y-4 overflow-y-auto pr-2">
          {loading ? <p className="text-sm text-zinc-500">Caricamento annunci...</p> : null}
          {!loading && requests.length === 0 ? (
            <div className={dashboardSurfaces.emptyDashed}>Nessun annuncio compatibile nella città registrata.</div>
          ) : null}
          {requests.map((request, index) => (
            <article
              key={request.id}
              className={index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardCreamLg : dashboardSurfaces.cardWhite}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={dashboardSurfaces.badgeBlue}>{badgeFor(request)}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">{request.city_name}</span>
                    {request.advertiser_profiles?.advertiser_type ? (
                      <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">
                        {advertiserTypeLabels[request.advertiser_profiles.advertiser_type]}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-950">Zona preferita: {request.preferred_area}</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {formatDate(request.check_in)} → {formatDate(request.check_out)} · {request.guests_count} ospiti · {request.rooms_count} camere · {formatCurrency(Number(request.budget))}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-800">Trattamento richiesto: {mealPlanLabels[request.meal_plan]}</p>
                  {request.notes ? <p className="mt-3 text-sm text-zinc-600">Note: {request.notes}</p> : null}
                  {request.advertiser_profiles?.short_description ? (
                    <p className="mt-2 text-sm text-zinc-500">Profilo cliente: {request.advertiser_profiles.short_description}</p>
                  ) : null}
                  <div className="mt-3 rounded-2xl border border-amber-200/80 bg-white px-3 py-3 text-xs text-amber-900">
                    Contatti nascosti: disponibili solo dopo accettazione dell’offerta.
                  </div>
                </div>
                <Link href={offerAction(request.id).href} className={dashboardSurfaces.btnPrimary}>
                  {offerAction(request.id).label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
