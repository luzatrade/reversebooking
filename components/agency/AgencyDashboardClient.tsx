"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, Briefcase, FilePlus2, Home, Package, RefreshCw, Send, Trash2, UserCog, ReceiptText } from "lucide-react";
import { StatusBadge } from "@/components/console/StatusBadge";
import { formatOfferDateRange, localizedOfferTitle } from "@/lib/catalog-offers/labels";
import type { CatalogOfferStatus, CatalogDateMode } from "@/types/catalog-offers";
import {
  canAgencyPublishCatalogPackage,
  getAgencyPackagePromoEndLabel,
  isAgencyPackagePromoActive,
} from "@/lib/agency/package-subscription";
import { StatCard } from "@/components/dashboard/StatCard";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { scrollToSection } from "@/lib/dashboard/scrollToSection";
import { getHotelOfferBlockMessage } from "@/lib/hotel/offer-eligibility";
import { ensureAgencyProfile } from "@/lib/agency/ensureAgencyProfile";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels } from "@/lib/i18n/labels";
import type { MealPlan } from "@/types/app";

type AgencyAccount = {
  id: string;
  property_name: string;
  city_name: string;
  city_id: string;
  full_address: string | null;
  main_photo_url: string | null;
  subscription_active: boolean | null;
};
type ZoneRequest = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: MealPlan;
  created_at: string;
};
type MyRequest = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  status: string;
  created_at: string;
};
type AgencyCatalogPackage = {
  id: string;
  offer_code: string;
  title_it: string;
  title_en: string;
  status: CatalogOfferStatus;
  date_mode: CatalogDateMode;
  check_in: string | null;
  check_out: string | null;
  valid_from: string | null;
  valid_until: string | null;
  flexible_month: number | null;
  flexible_year: number | null;
  flexible_nights: number | null;
  published_at: string | null;
  created_at: string;
};

const COPY = {
  it: {
    eyebrow: "Pannello agenzia",
    title: "Dashboard agenzia",
    subtitle:
      "Come fornitore invii offerte ai viaggiatori della tua zona; come acquirente pubblichi richieste alle strutture.",
    registeredCity: "Città registrata",
    home: "Home",
    refresh: "Aggiorna",
    account: "Account",
    profile: "Profilo agenzia",
    createRequest: "Crea richiesta",
    createCatalogOffer: "Pubblica pacchetto",
    manageSubscription: "Abbonamento pacchetti",
    packagePromoBanner: "Pubblicazione pacchetti gratuita fino al {date}.",
    packageSubscriptionRequired: "Per pubblicare pacchetti in vetrina attiva l'abbonamento agenzia.",
    packageSubscriptionCta: "Attiva abbonamento",
    statZoneRequests: "Richieste in zona",
    statZoneRequestsDesc: "Richieste dei viaggiatori a cui puoi offrire",
    statSentOffers: "Offerte inviate",
    statSentOffersDesc: "Le tue proposte ai viaggiatori",
    statMyRequests: "Le mie richieste",
    statMyRequestsDesc: "Richieste che hai inviato alle strutture",
    statReceivedOffers: "Offerte ricevute",
    statReceivedOffersDesc: "Proposte dalle strutture",
    statPackages: "Pacchetti in vetrina",
    statPackagesDesc: "Pacchetti catalogo che hai pubblicato",
    packagesTitle: "I miei pacchetti in vetrina",
    packagesSubtitle: "Visualizza o rimuovi i pacchetti che hai pubblicato come agenzia.",
    noPackages: "Non hai ancora pubblicato pacchetti.",
    viewPackage: "Vedi pacchetto",
    deletePackage: "Elimina",
    deletingPackage: "Eliminazione…",
    deletePackageConfirm: "Eliminare «{title}» dalla vetrina? L'azione non si può annullare.",
    deletePackageError: "Impossibile eliminare il pacchetto. Riprova più tardi.",
    deletePackageArchived: "Il pacchetto ha accettazioni collegate ed è stato archiviato invece di essere eliminato.",
    statusDraft: "Bozza",
    statusPublished: "Pubblicato",
    statusExpired: "Scaduto",
    statusSoldOut: "Esaurito",
    statusArchived: "Archiviato",
    supplierTitle: "Richieste dei viaggiatori nella tua zona",
    supplierSubtitle: "Apri una richiesta per inviare la tua offerta.",
    noZoneRequests: "Nessuna richiesta attiva nella tua zona al momento.",
    buyerTitle: "Le mie richieste alle strutture",
    buyerSubtitle: "Le richieste che hai pubblicato come agenzia.",
    noMyRequests: "Non hai ancora pubblicato richieste.",
    sendOffer: "Invia offerta",
    viewRequest: "Vedi richiesta",
    guests: "ospiti",
    rooms: "camere",
    completeProfile: "Completa prima il profilo agenzia (città, indirizzo e foto) per vedere le richieste e inviare offerte.",
    completeCta: "Completa profilo",
    loginRequired: "Accedi come agenzia per vedere la dashboard.",
    notFound: "Profilo agenzia non trovato.",
    retrySetup: "Riprova creazione profilo",
    loadError: "Errore nel caricamento dei dati.",
    loading: "Caricamento…",
  },
  en: {
    eyebrow: "Agency panel",
    title: "Agency dashboard",
    subtitle:
      "As a supplier you send offers to travelers in your area; as a buyer you post requests to properties.",
    registeredCity: "Registered city",
    home: "Home",
    refresh: "Refresh",
    account: "Account",
    profile: "Agency profile",
    createRequest: "Create request",
    createCatalogOffer: "Publish package",
    manageSubscription: "Package subscription",
    packagePromoBanner: "Package publishing is free until {date}.",
    packageSubscriptionRequired: "Activate an agency subscription to publish packages in the showcase.",
    packageSubscriptionCta: "Activate subscription",
    statZoneRequests: "Requests in area",
    statZoneRequestsDesc: "Traveler requests you can offer to",
    statSentOffers: "Sent offers",
    statSentOffersDesc: "Your proposals to travelers",
    statMyRequests: "My requests",
    statMyRequestsDesc: "Requests you sent to properties",
    statReceivedOffers: "Received offers",
    statReceivedOffersDesc: "Proposals from properties",
    statPackages: "Showcase packages",
    statPackagesDesc: "Catalog packages you published",
    packagesTitle: "My showcase packages",
    packagesSubtitle: "View or remove packages you published as an agency.",
    noPackages: "You haven't published any packages yet.",
    viewPackage: "View package",
    deletePackage: "Delete",
    deletingPackage: "Deleting…",
    deletePackageConfirm: "Remove «{title}» from the showcase? This cannot be undone.",
    deletePackageError: "Could not delete the package. Please try again later.",
    deletePackageArchived: "The package has linked acceptances and was archived instead of deleted.",
    statusDraft: "Draft",
    statusPublished: "Published",
    statusExpired: "Expired",
    statusSoldOut: "Sold out",
    statusArchived: "Archived",
    supplierTitle: "Traveler requests in your area",
    supplierSubtitle: "Open a request to send your offer.",
    noZoneRequests: "No active requests in your area right now.",
    buyerTitle: "My requests to properties",
    buyerSubtitle: "Requests you posted as an agency.",
    noMyRequests: "You haven't posted any requests yet.",
    sendOffer: "Send offer",
    viewRequest: "View request",
    guests: "guests",
    rooms: "rooms",
    completeProfile: "Complete your agency profile first (city, address and photo) to see requests and send offers.",
    completeCta: "Complete profile",
    loginRequired: "Sign in as an agency to view the dashboard.",
    notFound: "Agency profile not found.",
    retrySetup: "Retry profile setup",
    loadError: "Error while loading data.",
    loading: "Loading…",
  },
};

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}
function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR" }).format(value);
}
function catalogStatusLabel(status: CatalogOfferStatus, c: (typeof COPY)["it"]) {
  const map: Record<CatalogOfferStatus, string> = {
    draft: c.statusDraft,
    published: c.statusPublished,
    expired: c.statusExpired,
    sold_out: c.statusSoldOut,
    archived: c.statusArchived,
  };
  return map[status] ?? status;
}

export function AgencyDashboardClient() {
  const { locale } = useLanguage();
  const c = locale === "en" ? COPY.en : COPY.it;
  const mealPlanLabels = getMealPlanLabels(locale);
  const [agency, setAgency] = useState<AgencyAccount | null>(null);
  const [zoneRequests, setZoneRequests] = useState<ZoneRequest[]>([]);
  const [myRequests, setMyRequests] = useState<MyRequest[]>([]);
  const [sentOffersCount, setSentOffersCount] = useState(0);
  const [receivedOffersCount, setReceivedOffersCount] = useState(0);
  const [catalogPackages, setCatalogPackages] = useState<AgencyCatalogPackage[]>([]);
  const [deletingPackageId, setDeletingPackageId] = useState<string | null>(null);
  const [packageActionMessage, setPackageActionMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { user, error: authError } = await getAuthUserFast(supabase);
      if (authError || !user) {
        setError(c.loginRequired);
        return;
      }
      const userId = user.id;

      const ensured = await ensureAgencyProfile(supabase, userId);
      if (ensured.error || !ensured.data) {
        setError(ensured.error ?? c.notFound);
        return;
      }
      const agencyData = ensured.data;
      setAgency(agencyData as AgencyAccount);

      const nowIso = new Date().toISOString();
      const zoneQuery =
        agencyData.city_id
          ? supabase
              .from("travel_requests")
              .select(
                "id, request_code, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, created_at",
              )
              .eq("status", "active")
              .eq("city_id", agencyData.city_id)
              .gt("expires_at", nowIso)
              .order("created_at", { ascending: false })
          : Promise.resolve({ data: [] as ZoneRequest[], error: null });

      const [zoneResult, sentResult, advResult, packagesResult] = await Promise.all([
        zoneQuery,
        supabase.from("offers").select("id").eq("hotel_account_id", agencyData.id),
        supabase.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle(),
        supabase
          .from("catalog_offers")
          .select(
            "id, offer_code, title_it, title_en, status, date_mode, check_in, check_out, valid_from, valid_until, flexible_month, flexible_year, flexible_nights, published_at, created_at",
          )
          .eq("provider_id", agencyData.id)
          .eq("offer_kind", "agency_package")
          .order("created_at", { ascending: false }),
      ]);

      setZoneRequests((zoneResult.data ?? []) as ZoneRequest[]);
      setSentOffersCount((sentResult.data ?? []).length);
      setCatalogPackages((packagesResult.data ?? []) as AgencyCatalogPackage[]);

      const advData = advResult.data;
      if (advData?.id) {
        const { data: myData } = await supabase
          .from("travel_requests")
          .select("id, request_code, city_name, preferred_area, check_in, check_out, status, created_at")
          .eq("advertiser_id", advData.id)
          .order("created_at", { ascending: false });
        const myReqs = (myData ?? []) as MyRequest[];
        setMyRequests(myReqs);
        const ids = myReqs.map((r) => r.id);
        if (ids.length) {
          const { data: recv } = await supabase.from("offers").select("id").in("travel_request_id", ids);
          setReceivedOffersCount((recv ?? []).length);
        } else {
          setReceivedOffersCount(0);
        }
      } else {
        setMyRequests([]);
        setReceivedOffersCount(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : c.loadError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeletePackage = async (pkg: AgencyCatalogPackage) => {
    const title = localizedOfferTitle(pkg, locale === "en" ? "en" : "it");
    if (!window.confirm(c.deletePackageConfirm.replace("{title}", title))) return;

    setDeletingPackageId(pkg.id);
    setPackageActionMessage(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: deleteError } = await supabase.from("catalog_offers").delete().eq("id", pkg.id);
      if (deleteError) {
        const { error: archiveError } = await supabase
          .from("catalog_offers")
          .update({ status: "archived" })
          .eq("id", pkg.id);
        if (archiveError) {
          setPackageActionMessage(c.deletePackageError);
          return;
        }
        setCatalogPackages((prev) =>
          prev.map((item) => (item.id === pkg.id ? { ...item, status: "archived" } : item)),
        );
        setPackageActionMessage(c.deletePackageArchived);
        return;
      }
      setCatalogPackages((prev) => prev.filter((item) => item.id !== pkg.id));
    } catch {
      setPackageActionMessage(c.deletePackageError);
    } finally {
      setDeletingPackageId(null);
    }
  };

  const profileIncomplete = Boolean(agency) && Boolean(getHotelOfferBlockMessage(agency));
  const promoActive = isAgencyPackagePromoActive();
  const promoEndLabel = getAgencyPackagePromoEndLabel(locale === "en" ? "en" : "it");
  const canPublishCatalog = agency ? canAgencyPublishCatalogPackage(agency) : false;

  return (
    <main className={`${dashboardSurfaces.page} ${dashboardSurfaces.shell}`}>
      <div
        className={`${dashboardSurfaces.headerPanel} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}
      >
        <div>
          <p className={dashboardSurfaces.areaLabel}>{c.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">{c.title}</h1>
          <p className="mt-2 max-w-2xl text-zinc-600">{c.subtitle}</p>
          {agency ? (
            <p className="mt-2 text-sm text-zinc-500">
              {agency.property_name} · {c.registeredCity}: {agency.city_name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className={dashboardSurfaces.btnSecondary}>
            <Home className="h-4 w-4" /> {c.home}
          </Link>
          <button type="button" onClick={loadDashboard} className={dashboardSurfaces.btnSecondary}>
            <RefreshCw className="h-4 w-4" /> {c.refresh}
          </button>
          <Link href="/account" className={dashboardSurfaces.btnSecondary}>
            <UserCog className="h-4 w-4" /> {c.account}
          </Link>
          <Link href="/agenzia/profilo" className={dashboardSurfaces.btnSecondary}>
            <Briefcase className="h-4 w-4" /> {c.profile}
          </Link>
          <Link href="/agenzia/offerte/crea" className={dashboardSurfaces.btnSecondary}>
            {c.createCatalogOffer}
          </Link>
          <Link href="/agenzia/abbonamento" className={dashboardSurfaces.btnSecondary}>
            <ReceiptText className="h-4 w-4" /> {c.manageSubscription}
          </Link>
          <Link href="/inserzionista/crea-annuncio" className={dashboardSurfaces.btnPrimary}>
            <FilePlus2 className="h-4 w-4" /> {c.createRequest}
          </Link>
          <LogoutButton />
        </div>
      </div>

      {error ? (
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:flex-row sm:items-center sm:justify-between">
          <span>{error}</span>
          <button type="button" onClick={loadDashboard} className={`${dashboardSurfaces.btnPrimarySm} shrink-0`}>
            {c.retrySetup}
          </button>
        </div>
      ) : null}

      {profileIncomplete ? (
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between">
          <span>{c.completeProfile}</span>
          <Link href="/agenzia/profilo" className={`${dashboardSurfaces.btnPrimarySm} shrink-0`}>
            {c.completeCta}
          </Link>
        </div>
      ) : null}

      {agency && promoActive ? (
        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          {c.packagePromoBanner.replace("{date}", promoEndLabel)}
        </p>
      ) : null}

      {agency && !canPublishCatalog ? (
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between">
          <span>{c.packageSubscriptionRequired}</span>
          <Link href="/agenzia/abbonamento" className={`${dashboardSurfaces.btnPrimarySm} shrink-0 text-center`}>
            {c.packageSubscriptionCta}
          </Link>
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <StatCard
          tone="blue"
          label={c.statZoneRequests}
          value={loading ? "..." : String(zoneRequests.length)}
          description={c.statZoneRequestsDesc}
          onClick={() => scrollToSection("agenzia-richieste-zona")}
        />
        <StatCard
          tone="cream"
          label={c.statSentOffers}
          value={loading ? "..." : String(sentOffersCount)}
          description={c.statSentOffersDesc}
        />
        <StatCard
          tone="white"
          label={c.statMyRequests}
          value={loading ? "..." : String(myRequests.length)}
          description={c.statMyRequestsDesc}
          onClick={() => scrollToSection("agenzia-mie-richieste")}
        />
        <StatCard
          tone="blue"
          label={c.statReceivedOffers}
          value={loading ? "..." : String(receivedOffersCount)}
          description={c.statReceivedOffersDesc}
        />
        <StatCard
          tone="cream"
          label={c.statPackages}
          value={loading ? "..." : String(catalogPackages.length)}
          description={c.statPackagesDesc}
          onClick={() => scrollToSection("agenzia-pacchetti")}
        />
      </div>

      <section id="agenzia-pacchetti" className={`${dashboardSurfaces.headerPanel} mt-8 scroll-mt-24`}>
        <div className="flex items-center gap-3">
          <Package className={dashboardSurfaces.sectionIcon} />
          <div>
            <h2 className={dashboardSurfaces.sectionTitle}>{c.packagesTitle}</h2>
            <p className={dashboardSurfaces.sectionSubtitle}>{c.packagesSubtitle}</p>
          </div>
        </div>
        {packageActionMessage ? (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {packageActionMessage}
          </p>
        ) : null}
        <div className="mt-6 space-y-3">
          {loading ? <p className="text-sm text-zinc-500">{c.loading}</p> : null}
          {!loading && catalogPackages.length === 0 ? (
            <div className={dashboardSurfaces.emptyDashed}>{c.noPackages}</div>
          ) : null}
          {catalogPackages.map((pkg, index) => (
            <article key={pkg.id} className={index % 2 === 0 ? dashboardSurfaces.cardCream : dashboardSurfaces.cardWhite}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge value={catalogStatusLabel(pkg.status, c)} />
                    {pkg.offer_code ? (
                      <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">
                        {pkg.offer_code}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 font-semibold text-zinc-950">{localizedOfferTitle(pkg, locale === "en" ? "en" : "it")}</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {formatOfferDateRange(pkg, locale === "en" ? "en" : "it")}
                    {pkg.published_at ? ` · ${formatDate(pkg.published_at, locale)}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/offerta/${pkg.offer_code}`} className={dashboardSurfaces.btnPrimarySm}>
                    {c.viewPackage}
                  </Link>
                  <button
                    type="button"
                    onClick={() => void handleDeletePackage(pkg)}
                    disabled={deletingPackageId === pkg.id}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    {deletingPackageId === pkg.id ? c.deletingPackage : c.deletePackage}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="agenzia-richieste-zona" className={`${dashboardSurfaces.panelBlue} mt-8 scroll-mt-24`}>
        <div className="flex items-center gap-3">
          <Send className={dashboardSurfaces.sectionIcon} />
          <div>
            <h2 className={dashboardSurfaces.sectionTitle}>{c.supplierTitle}</h2>
            <p className="text-sm text-[#3d6f99]">{c.supplierSubtitle}</p>
          </div>
        </div>
        <div className="mt-6 max-h-[620px] space-y-4 overflow-y-auto pr-1">
          {loading ? <p className="text-sm text-zinc-500">{c.loading}</p> : null}
          {!loading && zoneRequests.length === 0 ? (
            <div className={dashboardSurfaces.emptyDashed}>{c.noZoneRequests}</div>
          ) : null}
          {zoneRequests.map((request, index) => (
            <article
              key={request.id}
              className={index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardCreamLg : dashboardSurfaces.cardWhite}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">
                      {request.city_name}
                    </span>
                    {request.request_code ? (
                      <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-[#E5DDD0]">
                        {request.request_code}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-950">{request.preferred_area}</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {formatDate(request.check_in, locale)} → {formatDate(request.check_out, locale)} · {request.guests_count}{" "}
                    {c.guests} · {request.rooms_count} {c.rooms} · {formatCurrency(Number(request.budget), locale)}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-800">{mealPlanLabels[request.meal_plan]}</p>
                </div>
                <Link href={`/struttura/annunci/${request.id}`} className={dashboardSurfaces.btnPrimary}>
                  {c.sendOffer}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="agenzia-mie-richieste" className={`${dashboardSurfaces.panelCream} mt-8 scroll-mt-24`}>
        <div className="flex items-center gap-3">
          <Bell className={dashboardSurfaces.sectionIcon} />
          <div>
            <h2 className={dashboardSurfaces.sectionTitle}>{c.buyerTitle}</h2>
            <p className={dashboardSurfaces.sectionSubtitle}>{c.buyerSubtitle}</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {loading ? <p className="text-sm text-zinc-500">{c.loading}</p> : null}
          {!loading && myRequests.length === 0 ? (
            <div className={dashboardSurfaces.emptyDashed}>{c.noMyRequests}</div>
          ) : null}
          {myRequests.map((request, index) => (
            <article key={request.id} className={index % 2 === 0 ? dashboardSurfaces.cardWhite : dashboardSurfaces.cardCream}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-zinc-950">
                    {request.city_name} · {request.preferred_area}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {formatDate(request.check_in, locale)} → {formatDate(request.check_out, locale)}
                    {request.request_code ? ` · ${request.request_code}` : ""} · {request.status}
                  </p>
                </div>
                <Link href={`/inserzionista/annunci/${request.id}`} className={dashboardSurfaces.btnPrimarySm}>
                  {c.viewRequest}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
