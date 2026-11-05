"use client";

import { FormEvent, useEffect, useMemo, useState, type ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ImagePlus, X } from "lucide-react";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  boardBasisShort,
  catalogLabelsForLocale,
  catalogTripTypeLabels,
  formatOfferDateRange,
  mealPlanWizardDescriptions,
  MONTH_OPTIONS,
  targetTypeLabels,
  transportModeLabels,
} from "@/lib/catalog-offers/labels";
import { createWorldCity, resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import type { WorldCity } from "@/lib/constants/world-cities";
import { getMealPlanLabels } from "@/lib/i18n/labels";
import { catalogOfferExpiresAtIso } from "@/lib/lifecycle/checkout-expiry";
import { makeCatalogOfferCode } from "@/lib/identifiers";
import { getHotelOfferBlockMessage, HOTEL_OFFER_ELIGIBILITY_SELECT } from "@/lib/hotel/offer-eligibility";
import {
  canAgencyPublishCatalogPackage,
  getAgencyPackagePromoEndLabel,
  isAgencyPackagePromoActive,
} from "@/lib/agency/package-subscription";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type {
  AgencyInclusion,
  AgencyItineraryDay,
  AgencyPriceTier,
  CatalogDateMode,
  CatalogDestinationRole,
  CatalogOfferDestination,
  CatalogTargetType,
  CatalogTripType,
  TransportMode,
} from "@/types/catalog-offers";
import type { MealPlan } from "@/types/app";

type AgencyAccount = { id: string; property_name: string; subscription_active: boolean; account_status: string; provider_kind?: string };

const TRIP_TYPES: CatalogTripType[] = ["leisure", "business", "school", "group"];
const DATE_MODES: CatalogDateMode[] = ["fixed", "date_range", "month_flexible"];
const MEAL_PLANS: MealPlan[] = ["room_only", "breakfast", "half_board", "full_board", "all_inclusive"];
const TRANSPORTS: TransportMode[] = ["flight", "private_bus", "train"];
const STEPS = 6;
const fieldClass =
  "mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm placeholder:text-zinc-400";
const fieldClassCompact = "mt-1 w-full rounded-xl border px-3 py-2 text-sm placeholder:text-zinc-400";

function defaultItinerary(): AgencyItineraryDay[] {
  return [
    {
      day_number: 1,
      title_it: "Arrivo",
      title_en: "Arrival",
      description_it: "Arrivo in destinazione e check-in.",
      description_en: "Arrival and check-in.",
      meal_plan: "breakfast",
      sort_order: 0,
    },
  ];
}

function OptionCard({
  selected,
  title,
  hint,
  badge,
  onClick,
}: {
  selected: boolean;
  title: string;
  hint?: string;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-[#0f4c81] bg-[#E8F4FC] ring-2 ring-[#0f4c81]/20"
          : "border-zinc-200 bg-white hover:border-zinc-300"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-zinc-900">{title}</span>
        {badge ? (
          <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-[#0f4c81]">{badge}</span>
        ) : null}
      </div>
      {hint ? <p className="mt-1 text-sm text-zinc-600">{hint}</p> : null}
    </button>
  );
}

export function AgencyCatalogOfferWizard() {
  const { locale, t } = useLanguage();
  const c = t.catalogOffers;
  const mealLabels = getMealPlanLabels(locale);
  const router = useRouter();
  const [agency, setAgency] = useState<AgencyAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const [titleIt, setTitleIt] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [tripType, setTripType] = useState<CatalogTripType>("leisure");
  const [coverUrl, setCoverUrl] = useState("");
  const [dateMode, setDateMode] = useState<CatalogDateMode>("month_flexible");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [flexMonth, setFlexMonth] = useState(8);
  const [flexYear, setFlexYear] = useState(new Date().getFullYear());
  const [flexNights, setFlexNights] = useState(7);
  const [durationDays, setDurationDays] = useState(4);
  const [durationNights, setDurationNights] = useState(3);
  const [targetType, setTargetType] = useState<CatalogTargetType>("individual");
  const [minParticipants, setMinParticipants] = useState(10);
  const [destinations, setDestinations] = useState<CatalogOfferDestination[]>([]);
  const [destDraft, setDestDraft] = useState<WorldCity>(() => createWorldCity("IT", ""));
  const [boardBasis, setBoardBasis] = useState<MealPlan>("half_board");
  const [hotelName, setHotelName] = useState("");
  const [hotelCategory, setHotelCategory] = useState("4*");
  const [transports, setTransports] = useState<TransportMode[]>([]);
  const [itinerary, setItinerary] = useState<AgencyItineraryDay[]>(defaultItinerary);
  const [basePrice, setBasePrice] = useState(450);
  const [paymentIt, setPaymentIt] = useState("Acconto 30% alla prenotazione, saldo 30 giorni prima della partenza.");
  const [paymentEn, setPaymentEn] = useState("30% deposit on booking, balance 30 days before departure.");
  const [cancelIt, setCancelIt] = useState("Penali secondo condizioni contrattuali dell'agenzia e polizze applicabili.");
  const [cancelEn, setCancelEn] = useState("Penalties according to agency contract terms and applicable policies.");
  const [tiers, setTiers] = useState<AgencyPriceTier[]>([
    {
      tier_kind: "individual",
      min_pax: 1,
      max_pax: 1,
      price_per_person: 450,
      label_it: "Individuale",
      label_en: "Individual",
      sort_order: 0,
    },
  ]);
  const [inclusions, setInclusions] = useState<AgencyInclusion[]>([
    { kind: "included", label_it: "Pernottamento con trattamento indicato", label_en: "Stay with selected board basis", sort_order: 0 },
    { kind: "included", label_it: "Assistenza agenzia in destinazione", label_en: "Agency assistance on site", sort_order: 1 },
    { kind: "excluded", label_it: "Tassa di soggiorno", label_en: "City tax", sort_order: 0 },
    { kind: "excluded", label_it: "Bevande fuori formula", label_en: "Drinks outside board basis", sort_order: 1 },
  ]);
  const [publish, setPublish] = useState(true);

  const promoActive = isAgencyPackagePromoActive();
  const promoEndLabel = getAgencyPackagePromoEndLabel(locale === "en" ? "en" : "it");
  const canPublishCatalog = agency ? canAgencyPublishCatalogPackage(agency) : false;

  const stepLabels = [
    c.wizardStepIdentity,
    c.wizardStepDestinations,
    c.wizardStepStay,
    c.wizardStepItinerary,
    c.wizardStepPricing,
    c.wizardStepPreview,
  ];

  const stepHints = [
    c.wizardIdentityHint,
    c.wizardDestinationsHint,
    c.wizardStayHint,
    c.wizardItineraryHint,
    c.wizardPricingHint,
    c.wizardPreviewHint,
  ];

  useEffect(() => {
    async function load() {
      const supabase = createBrowserSupabaseClient();
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) {
        setError(c.loginRequired);
        setLoading(false);
        return;
      }
      const [{ data, error: agErr }, { data: profileData }] = await Promise.all([
        supabase.from("hotel_accounts").select(HOTEL_OFFER_ELIGIBILITY_SELECT).eq("user_id", auth.user.id).maybeSingle(),
        supabase.from("profiles").select("phone_verified").eq("user_id", auth.user.id).maybeSingle(),
      ]);
      const block = getHotelOfferBlockMessage(agErr ? null : data, profileData);
      if (block || !data || data.provider_kind !== "agency") {
        setError(block ?? c.agencyOnly);
        setLoading(false);
        return;
      }
      setAgency(data as AgencyAccount);
      setTitleIt(`Pacchetto ${data.property_name}`);
      setTitleEn(`${data.property_name} package`);
      setLoading(false);
    }
    void load();
  }, [c.agencyOnly, c.loginRequired]);

  useEffect(() => {
    if (agency && !canAgencyPublishCatalogPackage(agency)) {
      setPublish(false);
    }
  }, [agency]);

  function buildDestinationFromCity(city: WorldCity, sortOrder: number, role?: CatalogDestinationRole): CatalogOfferDestination {
    const cityId =
      resolveCanonicalCityId({
        cityName: city.city_name,
        countryCode: city.country_code,
        cityId: city.city_id,
      }) ?? city.city_id;
    return {
      city_id: cityId,
      country_code: city.country_code,
      city_name: city.city_name.trim(),
      role: role ?? (sortOrder === 0 ? "primary" : "stop"),
      sort_order: sortOrder,
    };
  }

  function destinationAlreadyAdded(list: CatalogOfferDestination[], city: WorldCity) {
    const cityId =
      resolveCanonicalCityId({
        cityName: city.city_name,
        countryCode: city.country_code,
        cityId: city.city_id,
      }) ?? city.city_id;
    return list.some(
      (item) =>
        item.city_id === cityId ||
        (item.country_code === city.country_code &&
          item.city_name.trim().toLowerCase() === city.city_name.trim().toLowerCase()),
    );
  }

  function addDestinationFromCity(city: WorldCity): boolean {
    if (!city.city_name.trim()) return false;
    let added = false;
    setDestinations((prev) => {
      if (destinationAlreadyAdded(prev, city)) return prev;
      added = true;
      return [...prev, buildDestinationFromCity(city, prev.length)];
    });
    if (added) {
      setDestDraft(createWorldCity(city.country_code, ""));
      setError(null);
    }
    return added;
  }

  function addDestination() {
    if (!destDraft.city_name.trim()) return;
    addDestinationFromCity(destDraft);
  }

  function removeTier(index: number) {
    setTiers((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((_, i) => i !== index).map((tier, i) => ({ ...tier, sort_order: i }));
    });
  }

  function addPriceTier() {
    setTiers((prev) => [
      ...prev,
      {
        tier_kind: "group",
        min_pax: 10,
        max_pax: 15,
        price_per_person: Math.max(1, basePrice - 30),
        label_it: c.wizardDefaultGroupTierIt,
        label_en: c.wizardDefaultGroupTierIt,
        sort_order: prev.length,
      },
    ]);
  }

  function mergePendingDestination(list: CatalogOfferDestination[]): CatalogOfferDestination[] {
    if (!destDraft.city_name.trim() || destinationAlreadyAdded(list, destDraft)) return list;
    return [...list, buildDestinationFromCity(destDraft, list.length)];
  }

  async function uploadCover(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !agency) return;
    if (!file.type.startsWith("image/")) {
      setError(locale === "en" ? "Only images are allowed." : "Sono ammesse solo immagini.");
      return;
    }
    setUploadingCover(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${agency.id}/cover-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("offer-media").upload(path, file, { cacheControl: "3600", upsert: true });
      if (upErr) throw upErr;
      setCoverUrl(supabase.storage.from("offer-media").getPublicUrl(path).data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.saveError);
    } finally {
      setUploadingCover(false);
      e.target.value = "";
    }
  }

  function validateStep(current: number, destList = destinations): string | null {
    if (current === 1) {
      if (!titleIt.trim() || !titleEn.trim()) return c.wizardValidationTitle;
      return null;
    }
    if (current === 2) {
      if (!destList.length) return c.wizardValidationDestinations;
      if (dateMode === "fixed" && (!checkIn || !checkOut)) return c.wizardValidationDates;
      if (dateMode === "date_range" && (!validFrom || !validUntil)) return c.wizardValidationDates;
      if (dateMode === "month_flexible" && (!flexMonth || !flexYear || flexNights < 1)) return c.wizardValidationDates;
      if (durationDays < 1 || durationNights < 0) return c.wizardValidationDates;
      return null;
    }
    if (current === 4) {
      const ok = itinerary.some((d) => d.title_it.trim() && d.description_it.trim());
      if (!ok) return c.wizardValidationItinerary;
      return null;
    }
    if (current === 5) {
      if (basePrice < 1) return c.wizardValidationPrice;
      return null;
    }
    return null;
  }

  function goNext() {
    let nextDestinations = destinations;
    if (step === 2) {
      nextDestinations = mergePendingDestination(destinations);
      if (nextDestinations.length !== destinations.length) {
        setDestinations(nextDestinations);
        setDestDraft(createWorldCity(destDraft.country_code, ""));
      }
    }
    const msg = validateStep(step, nextDestinations);
    if (msg) {
      setError(msg);
      return;
    }
    setError(null);
    setStep((s) => Math.min(STEPS, s + 1));
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  const previewDates = useMemo(
    () =>
      formatOfferDateRange(
        {
          date_mode: dateMode,
          check_in: checkIn || null,
          check_out: checkOut || null,
          valid_from: validFrom || null,
          valid_until: validUntil || null,
          flexible_month: flexMonth,
          flexible_year: flexYear,
          flexible_nights: flexNights,
        },
        locale,
      ),
    [checkIn, checkOut, dateMode, flexMonth, flexNights, flexYear, locale, validFrom, validUntil],
  );

  const previewDestinations = destinations.map((d) => d.city_name).join(locale === "en" ? " · " : " · ");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = validateStep(5);
    if (msg) {
      setError(msg);
      setStep(5);
      return;
    }
    if (publish && !canPublishCatalog) {
      setError(c.agencyPackagePublishBlocked);
      setStep(6);
      return;
    }
    if (!agency) {
      setError(c.destinationsRequired);
      return;
    }
    const finalDestinations = mergePendingDestination(destinations);
    if (!finalDestinations.length) {
      setError(c.destinationsRequired);
      setStep(2);
      return;
    }
    if (finalDestinations.length !== destinations.length) {
      setDestinations(finalDestinations);
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const code = makeCatalogOfferCode();
      const primaryDestination =
        finalDestinations.find((destination) => destination.role === "primary") ??
        [...finalDestinations].sort((a, b) => a.sort_order - b.sort_order)[0]!;
      const expiresAt = catalogOfferExpiresAtIso({
        dateMode,
        checkOut: dateMode === "fixed" ? checkOut : null,
        validUntil: dateMode === "date_range" ? validUntil : null,
        flexibleMonth: dateMode === "month_flexible" ? flexMonth : null,
        flexibleYear: dateMode === "month_flexible" ? flexYear : null,
        countryCode: primaryDestination.country_code,
        cityId: primaryDestination.city_id,
      });
      const { data: offerRow, error: offerErr } = await supabase
        .from("catalog_offers")
        .insert({
          offer_code: code,
          provider_id: agency.id,
          provider_kind: "agency",
          offer_kind: "agency_package",
          title_it: titleIt.trim(),
          title_en: titleEn.trim(),
          status: publish ? "published" : "draft",
          date_mode: dateMode,
          check_in: dateMode === "fixed" ? checkIn : null,
          check_out: dateMode === "fixed" ? checkOut : null,
          valid_from: dateMode === "date_range" ? validFrom : null,
          valid_until: dateMode === "date_range" ? validUntil : null,
          flexible_month: dateMode === "month_flexible" ? flexMonth : null,
          flexible_year: dateMode === "month_flexible" ? flexYear : null,
          flexible_nights: dateMode === "month_flexible" ? flexNights : null,
          expires_at: expiresAt,
          cover_public_url: coverUrl || null,
          published_at: publish ? new Date().toISOString() : null,
        })
        .select("id")
        .single();
      if (offerErr || !offerRow) throw offerErr ?? new Error("Insert failed");
      const offerId = offerRow.id as string;

      const { error: destErr } = await supabase.from("catalog_offer_destinations").insert(
        finalDestinations.map((d) => ({ ...d, catalog_offer_id: offerId })),
      );
      if (destErr) throw destErr;

      const { error: detErr } = await supabase.from("agency_offer_details").insert({
        catalog_offer_id: offerId,
        trip_type: tripType,
        duration_days: durationDays,
        duration_nights: durationNights,
        target_type: targetType,
        min_participants: targetType === "group" ? minParticipants : null,
        date_type: dateMode,
        board_basis: boardBasis,
        primary_hotel_name: hotelName || null,
        hotel_category: hotelCategory || null,
        transport_modes: transports,
        base_price_per_person: basePrice,
        single_supplement: null,
        payment_terms_it: paymentIt,
        payment_terms_en: paymentEn,
        cancellation_terms_it: cancelIt,
        cancellation_terms_en: cancelEn,
        flight_disclaimer_ack: transports.includes("flight"),
      });
      if (detErr) throw detErr;

      const { error: itErr } = await supabase.from("agency_offer_itinerary_days").insert(
        itinerary.map((d, i) => ({ ...d, catalog_offer_id: offerId, sort_order: i })),
      );
      if (itErr) throw itErr;

      const { error: tierErr } = await supabase.from("agency_offer_price_tiers").insert(
        tiers.map((tier, i) => ({ ...tier, catalog_offer_id: offerId, sort_order: i })),
      );
      if (tierErr) throw tierErr;

      const { error: incErr } = await supabase.from("agency_offer_inclusions").insert(
        inclusions.map((inc, i) => ({ ...inc, catalog_offer_id: offerId, sort_order: i })),
      );
      if (incErr) throw incErr;

      router.push(`/offerta/${code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.saveError);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="p-6 text-sm text-zinc-500">{t.common.loading}</p>;
  if (error && !agency) {
    return (
      <div className={`${dashboardSurfaces.page} max-w-lg space-y-4`}>
        <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>
        {error === c.loginRequired ? (
          <Link
            href="/login?redirect=%2Fagenzia%2Fofferte%2Fcrea"
            className="inline-flex rounded-full bg-[#0f4c81] px-6 py-3 text-sm font-semibold text-white"
          >
            {locale === "en" ? "Sign in to continue" : "Accedi per continuare"}
          </Link>
        ) : null}
        <Link href="/agenzia/dashboard" className="block text-sm text-[#0f4c81]">
          ← {t.common.backToDashboard}
        </Link>
      </div>
    );
  }

  return (
    <div className={`${dashboardSurfaces.page} max-w-4xl`}>
      <Link href="/agenzia/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f4c81]">
        <ArrowLeft className="h-4 w-4" /> {t.common.backToDashboard}
      </Link>

      <div className="mt-6">
        <p className={dashboardSurfaces.areaLabel}>{c.createAgencyOffer}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">{c.createAgencyOffer}</h1>
        <p className="mt-2 text-sm text-zinc-600">
          {c.wizardStepCounter.replace("{current}", String(step)).replace("{total}", String(STEPS))}
        </p>
      </div>

      <div className="mt-6 flex gap-1 overflow-x-auto pb-1">
        {stepLabels.map((label, index) => {
          const n = index + 1;
          const done = n < step;
          const active = n === step;
          return (
            <div
              key={label}
              className={`flex min-w-[88px] flex-1 flex-col items-center gap-1 rounded-xl px-2 py-2 text-center text-xs ${
                active ? "bg-[#E8F4FC] font-semibold text-[#0f4c81]" : done ? "text-emerald-700" : "text-zinc-400"
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  active ? "bg-[#0f4c81] text-white" : done ? "bg-emerald-100 text-emerald-800" : "bg-zinc-100"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : n}
              </span>
              <span className="leading-tight">{label}</span>
            </div>
          );
        })}
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        {agency && promoActive ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {c.agencyPackagePromoBanner.replace("{date}", promoEndLabel)}
          </p>
        ) : null}
        {agency && !canPublishCatalog ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between">
            <span>{c.agencyPackageSubscriptionRequired}</span>
            <Link href="/agenzia/abbonamento" className={`${dashboardSurfaces.btnPrimarySm} shrink-0 text-center`}>
              {c.agencyPackageSubscriptionCta}
            </Link>
          </div>
        ) : null}
        <section className={`${dashboardSurfaces.headerPanel} space-y-5`}>
          <div>
            <h2 className={dashboardSurfaces.sectionTitle}>{stepLabels[step - 1]}</h2>
            <p className={dashboardSurfaces.sectionSubtitle}>{stepHints[step - 1]}</p>
          </div>

          {step === 1 ? (
            <div className="space-y-5">
              <label className="block text-sm font-medium">
                {c.titleIt}
                <input
                  required
                  value={titleIt}
                  onChange={(e) => setTitleIt(e.target.value)}
                  placeholder={c.wizardExampleTitleIt}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-medium">
                {c.titleEn}
                <input
                  required
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  placeholder={c.wizardExampleTitleEn}
                  className={fieldClass}
                />
              </label>
              <div>
                <p className="text-sm font-medium">{c.wizardTripTypeLabel}</p>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  {TRIP_TYPES.map((tt) => (
                    <OptionCard
                      key={tt}
                      selected={tripType === tt}
                      title={catalogLabelsForLocale(catalogTripTypeLabels, locale)[tt]}
                      onClick={() => setTripType(tt)}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-medium">{c.coverImage}</p>
                <p className="mt-1 text-xs text-zinc-500">{c.wizardCoverHint}</p>
                <div className="mt-4 aspect-video overflow-hidden rounded-2xl bg-zinc-100">
                  {coverUrl ? (
                    <Image src={coverUrl} alt={c.coverImage} width={960} height={540} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-500">{c.noPhoto}</div>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white">
                    <ImagePlus className="h-4 w-4" />
                    {uploadingCover ? c.wizardCoverUploading : c.wizardCoverUpload}
                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadCover} disabled={uploadingCover} className="sr-only" />
                  </label>
                  {coverUrl ? (
                    <button type="button" onClick={() => setCoverUrl("")} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
                      <X className="h-4 w-4" /> {c.wizardCoverRemove}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5">
              <CityAutocomplete
                value={destDraft}
                onChange={setDestDraft}
                onPick={addDestinationFromCity}
                label={c.addDestination}
                placeholder={c.wizardExampleDestination}
              />
              <button type="button" onClick={addDestination} className="rounded-full border border-[#0f4c81] px-4 py-2 text-sm font-semibold text-[#0f4c81]">
                + {c.addDestinationBtn}
              </button>
              {destDraft.city_name.trim() && !destinationAlreadyAdded(destinations, destDraft) ? (
                <p className="text-xs text-amber-700">
                  {locale === "en"
                    ? "City selected — click Add or press Next to include it."
                    : "Città selezionata — clicca Aggiungi oppure Avanti per confermarla."}
                </p>
              ) : null}
              {destinations.length ? (
                <ul className="space-y-2 rounded-2xl border border-zinc-200 p-3 text-sm">
                  <p className="font-medium text-zinc-700">{c.wizardDestinationsList}</p>
                  {destinations.map((d, idx) => (
                    <li key={`${d.city_id}-${idx}`} className="flex items-center justify-between gap-2">
                      <span>
                        {d.city_name} ({d.country_code})
                        {d.role === "primary" ? ` · ${c.wizardPrimaryDestination}` : ""}
                      </span>
                      <button type="button" onClick={() => setDestinations((p) => p.filter((_, i) => i !== idx))} className="text-zinc-500 hover:text-red-600">
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div>
                <p className="text-sm font-medium">{c.logisticsSection}</p>
                <div className="mt-2 grid gap-3">
                  <OptionCard selected={dateMode === "fixed"} title={c.dateFixed} hint={c.wizardDateFixedHint} onClick={() => setDateMode("fixed")} />
                  <OptionCard selected={dateMode === "date_range"} title={c.dateRange} hint={c.wizardDateRangeHint} onClick={() => setDateMode("date_range")} />
                  <OptionCard selected={dateMode === "month_flexible"} title={c.dateFlexible} hint={c.wizardDateFlexHint} onClick={() => setDateMode("month_flexible")} />
                </div>
              </div>

              {dateMode === "fixed" ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    {c.wizardCheckIn}
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm" />
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardCheckOut}
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm" />
                  </label>
                </div>
              ) : null}

              {dateMode === "date_range" ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    {c.wizardValidFrom}
                    <input type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm" />
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardValidUntil}
                    <input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm" />
                  </label>
                </div>
              ) : null}

              {dateMode === "month_flexible" ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  <label className="block text-sm font-medium">
                    {c.wizardMonthLabel}
                    <select value={flexMonth} onChange={(e) => setFlexMonth(Number(e.target.value))} className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm">
                      {catalogLabelsForLocale(MONTH_OPTIONS, locale).map((m) => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardYearLabel}
                    <input
                      type="number"
                      min={2024}
                      max={2035}
                      value={flexYear}
                      onChange={(e) => setFlexYear(Number(e.target.value))}
                      placeholder={c.wizardExampleFlexYear}
                      className={fieldClass}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardFlexNights}
                    <input
                      type="number"
                      min={1}
                      value={flexNights}
                      onChange={(e) => setFlexNights(Number(e.target.value))}
                      placeholder={c.wizardExampleFlexNights}
                      className={fieldClass}
                    />
                  </label>
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    {c.wizardDurationDays}
                    <input
                      type="number"
                      min={1}
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      placeholder={c.wizardExampleDurationDays}
                      className={fieldClass}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardDurationNights}
                    <input
                      type="number"
                      min={0}
                      value={durationNights}
                      onChange={(e) => setDurationNights(Number(e.target.value))}
                      placeholder={c.wizardExampleDurationNights}
                      className={fieldClass}
                    />
                  </label>
              </div>

              <div>
                <p className="text-sm font-medium">{c.wizardTargetLabel}</p>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  {(["individual", "group"] as CatalogTargetType[]).map((tt) => (
                    <OptionCard
                      key={tt}
                      selected={targetType === tt}
                      title={catalogLabelsForLocale(targetTypeLabels, locale)[tt]}
                      onClick={() => setTargetType(tt)}
                    />
                  ))}
                </div>
              </div>
              {targetType === "group" ? (
                <label className="block text-sm font-medium">
                  {c.wizardMinParticipants}
                  <input
                    type="number"
                    min={2}
                    value={minParticipants}
                    onChange={(e) => setMinParticipants(Number(e.target.value))}
                    placeholder={c.wizardExampleMinParticipants}
                    className={fieldClass}
                  />
                </label>
              ) : null}
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium">{c.wizardBoardBasisLabel}</p>
                <p className="mt-1 text-xs text-zinc-500">{c.wizardBoardBasisHint}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {MEAL_PLANS.map((mp) => {
                    const copy = catalogLabelsForLocale(mealPlanWizardDescriptions, locale)[mp];
                    return (
                      <OptionCard
                        key={mp}
                        selected={boardBasis === mp}
                        title={copy.title}
                        hint={copy.hint}
                        badge={catalogLabelsForLocale(boardBasisShort, locale)[mp]}
                        onClick={() => setBoardBasis(mp)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  {c.wizardHotelName}
                  <input
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    placeholder={c.wizardExampleHotelName}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm font-medium">
                  {c.wizardHotelCategory}
                  <input
                    value={hotelCategory}
                    onChange={(e) => setHotelCategory(e.target.value)}
                    placeholder={c.wizardExampleHotelCategory}
                    className={fieldClass}
                  />
                </label>
              </div>
              <div>
                <p className="text-sm font-medium">{c.wizardTransportLabel}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {TRANSPORTS.map((tr) => (
                    <label key={tr} className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-3 text-sm">
                      <input
                        type="checkbox"
                        checked={transports.includes(tr)}
                        onChange={(e) =>
                          setTransports((p) => (e.target.checked ? [...p, tr] : p.filter((x) => x !== tr)))
                        }
                      />
                      {catalogLabelsForLocale(transportModeLabels, locale)[tr]}
                    </label>
                  ))}
                </div>
                {transports.includes("flight") ? (
                  <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">{c.flightDisclaimer}</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-4">
              {itinerary.map((day, idx) => (
                <div key={idx} className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-[#0f4c81]">
                    {c.day} {day.day_number}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block text-xs font-medium text-zinc-700">
                      {c.wizardDayTitleIt}
                      <input
                        value={day.title_it}
                        onChange={(e) => setItinerary((p) => p.map((d, i) => (i === idx ? { ...d, title_it: e.target.value } : d)))}
                        placeholder={c.wizardExampleDayTitleIt}
                        className={`${fieldClassCompact} bg-white`}
                      />
                    </label>
                    <label className="block text-xs font-medium text-zinc-700">
                      {c.wizardDayTitleEn}
                      <input
                        value={day.title_en}
                        onChange={(e) => setItinerary((p) => p.map((d, i) => (i === idx ? { ...d, title_en: e.target.value } : d)))}
                        placeholder={c.wizardExampleDayTitleEn}
                        className={`${fieldClassCompact} bg-white`}
                      />
                    </label>
                  </div>
                  <label className="block text-xs font-medium text-zinc-700">
                    {c.wizardDayDescIt}
                    <textarea
                      value={day.description_it}
                      onChange={(e) => setItinerary((p) => p.map((d, i) => (i === idx ? { ...d, description_it: e.target.value } : d)))}
                      rows={3}
                      placeholder={c.wizardExampleDayDescIt}
                      className={`${fieldClassCompact} bg-white`}
                    />
                  </label>
                  <label className="block text-xs font-medium text-zinc-700">
                    {c.wizardDayDescEn}
                    <textarea
                      value={day.description_en}
                      onChange={(e) => setItinerary((p) => p.map((d, i) => (i === idx ? { ...d, description_en: e.target.value } : d)))}
                      rows={2}
                      placeholder={c.wizardExampleDayDescEn}
                      className={`${fieldClassCompact} bg-white`}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    {c.wizardDayMealOverride}
                    <select value={day.meal_plan} onChange={(e) => setItinerary((p) => p.map((d, i) => (i === idx ? { ...d, meal_plan: e.target.value as MealPlan } : d)))} className="mt-1 w-full rounded-xl border px-3 py-2 text-sm">
                      {(Object.keys(mealLabels) as MealPlan[]).map((k) => (
                        <option key={k} value={k}>{mealLabels[k]}</option>
                      ))}
                    </select>
                  </label>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setItinerary((p) => [
                    ...p,
                    {
                      day_number: p.length + 1,
                      title_it: "",
                      title_en: "",
                      description_it: "",
                      description_en: "",
                      meal_plan: boardBasis,
                      sort_order: p.length,
                    },
                  ])
                }
                className="text-sm font-semibold text-[#0f4c81]"
              >
                + {c.addDay}
              </button>
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                {c.wizardBasePrice}
                <input
                  type="number"
                  min={1}
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                  placeholder={c.wizardExampleBasePrice}
                  className={fieldClass}
                />
                <span className="mt-1 block text-xs font-normal text-zinc-500">{c.wizardBasePriceHint}</span>
              </label>
              <label className="block text-sm font-medium">
                {c.wizardPaymentTerms} (IT)
                <textarea
                  value={paymentIt}
                  onChange={(e) => setPaymentIt(e.target.value)}
                  rows={2}
                  placeholder={c.wizardExamplePaymentIt}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-medium">
                {c.wizardPaymentTerms} (EN)
                <textarea
                  value={paymentEn}
                  onChange={(e) => setPaymentEn(e.target.value)}
                  rows={2}
                  placeholder={c.wizardExamplePaymentEn}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-medium">
                {c.wizardCancellationTerms} (IT)
                <textarea
                  value={cancelIt}
                  onChange={(e) => setCancelIt(e.target.value)}
                  rows={2}
                  placeholder={c.wizardExampleCancelIt}
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm font-medium">
                {c.wizardCancellationTerms} (EN)
                <textarea
                  value={cancelEn}
                  onChange={(e) => setCancelEn(e.target.value)}
                  rows={2}
                  placeholder={c.wizardExampleCancelEn}
                  className={fieldClass}
                />
              </label>

              <div className="space-y-3 rounded-2xl border border-zinc-200 p-4">
                <div>
                  <p className="text-sm font-medium text-zinc-900">{c.wizardTiersSection}</p>
                  <p className="mt-1 text-xs text-zinc-500">{c.wizardTiersHint}</p>
                </div>
                {tiers.map((tier, idx) => (
                  <div key={idx} className="space-y-3 rounded-xl border border-zinc-200 bg-zinc-50/50 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {c.wizardTierNumber.replace("{n}", String(idx + 1))}
                      </p>
                      {tiers.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => removeTier(idx)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-red-600"
                        >
                          <X className="h-3.5 w-3.5" />
                          {c.removeTier}
                        </button>
                      ) : null}
                    </div>
                    <label className="block text-xs font-medium text-zinc-700">
                      {c.wizardTierLabel}
                      <input
                        value={tier.label_it}
                        onChange={(e) => {
                          const value = e.target.value;
                          setTiers((p) =>
                            p.map((t, i) => (i === idx ? { ...t, label_it: value, label_en: value } : t)),
                          );
                        }}
                        placeholder={c.wizardExampleTierLabel}
                        className={`${fieldClassCompact} bg-white`}
                      />
                    </label>
                    <label className="block text-xs font-medium text-zinc-700">
                      {c.wizardTierPrice}
                      <input
                        type="number"
                        min={1}
                        value={tier.price_per_person}
                        onChange={(e) =>
                          setTiers((p) => p.map((t, i) => (i === idx ? { ...t, price_per_person: Number(e.target.value) } : t)))
                        }
                        placeholder={c.wizardExampleTierPrice}
                        className={`${fieldClassCompact} bg-white sm:max-w-xs`}
                      />
                    </label>
                    {tier.tier_kind === "group" ? (
                      <div className="grid gap-3 sm:grid-cols-2">
                        <label className="block text-xs font-medium text-zinc-700">
                          {c.wizardTierMinPax}
                          <input
                            type="number"
                            min={2}
                            value={tier.min_pax}
                            onChange={(e) =>
                              setTiers((p) => p.map((t, i) => (i === idx ? { ...t, min_pax: Number(e.target.value) } : t)))
                            }
                            placeholder={c.wizardExampleTierMinPax}
                            className={`${fieldClassCompact} bg-white`}
                          />
                        </label>
                        <label className="block text-xs font-medium text-zinc-700">
                          {c.wizardTierMaxPax}
                          <input
                            type="number"
                            min={tier.min_pax}
                            value={tier.max_pax ?? tier.min_pax}
                            onChange={(e) =>
                              setTiers((p) => p.map((t, i) => (i === idx ? { ...t, max_pax: Number(e.target.value) } : t)))
                            }
                            placeholder={c.wizardExampleTierMaxPax}
                            className={`${fieldClassCompact} bg-white`}
                          />
                        </label>
                      </div>
                    ) : null}
                  </div>
                ))}
                <button type="button" onClick={addPriceTier} className="text-sm font-semibold text-[#0f4c81]">
                  + {c.addTier}
                </button>
              </div>
            </div>
          ) : null}

          {step === 6 ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium">{c.inclusionsSection}</p>
                {inclusions.map((inc, idx) => (
                  <div key={idx} className="mt-2 grid gap-2 sm:grid-cols-3">
                    <select value={inc.kind} onChange={(e) => setInclusions((p) => p.map((x, i) => (i === idx ? { ...x, kind: e.target.value as AgencyInclusion["kind"] } : x)))} className="rounded-xl border px-3 py-2 text-sm">
                      <option value="included">{c.included}</option>
                      <option value="excluded">{c.excluded}</option>
                    </select>
                    <input
                      value={inc.label_it}
                      onChange={(e) => setInclusions((p) => p.map((x, i) => (i === idx ? { ...x, label_it: e.target.value } : x)))}
                      placeholder={c.wizardExampleInclusionIt}
                      className={`rounded-xl border px-3 py-2 text-sm placeholder:text-zinc-400`}
                    />
                    <input
                      value={inc.label_en}
                      onChange={(e) => setInclusions((p) => p.map((x, i) => (i === idx ? { ...x, label_en: e.target.value } : x)))}
                      placeholder={c.wizardExampleInclusionEn}
                      className={`rounded-xl border px-3 py-2 text-sm placeholder:text-zinc-400`}
                    />
                  </div>
                ))}
                <button type="button" onClick={() => setInclusions((p) => [...p, { kind: "included", label_it: "", label_en: "", sort_order: p.length }])} className="mt-2 text-sm font-semibold text-[#0f4c81]">
                  + {c.addInclusion}
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold">{c.wizardPreviewCardTitle}</p>
                <article className="mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                  <div className="aspect-[16/10] bg-zinc-100">
                    {coverUrl ? (
                      <Image src={coverUrl} alt="" width={640} height={400} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-zinc-500">{c.noPhoto}</div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0f4c81]">{catalogLabelsForLocale(catalogTripTypeLabels, locale)[tripType]}</p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900">{locale === "en" ? titleEn : titleIt}</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {agency?.property_name}
                      {previewDestinations ? ` · ${previewDestinations}` : ""}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <span>{previewDates}</span>
                      <span className="font-semibold text-[#0f4c81]">
                        {locale === "en" ? "from" : "da"} €{basePrice}
                        {locale === "en" ? "/person" : "/persona"}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-semibold">
                        {catalogLabelsForLocale(boardBasisShort, locale)[boardBasis]} · {catalogLabelsForLocale(mealPlanWizardDescriptions, locale)[boardBasis].title}
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={publish}
                  disabled={!canPublishCatalog}
                  onChange={(e) => setPublish(e.target.checked)}
                />
                <span>
                  {c.publishNow}
                  {!canPublishCatalog ? (
                    <span className="mt-1 block text-xs text-zinc-500">
                      {c.agencyPackageDraftOnlyHint.replace("{date}", promoEndLabel)}
                    </span>
                  ) : null}
                </span>
              </label>
            </div>
          ) : null}
        </section>

        {error ? <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

        <div className="flex flex-wrap items-center justify-between gap-3">
          {step > 1 ? (
            <button type="button" onClick={goBack} className={dashboardSurfaces.btnSecondary}>
              <ArrowLeft className="h-4 w-4" /> {c.wizardBack}
            </button>
          ) : (
            <span />
          )}
          {step < STEPS ? (
            <button type="button" onClick={goNext} className={dashboardSurfaces.btnPrimary}>
              {c.wizardNext} <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={saving || uploadingCover} className={dashboardSurfaces.btnPrimary}>
              {saving ? t.common.saving : c.saveOffer}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
