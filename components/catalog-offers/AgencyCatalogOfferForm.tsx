"use client";

import { FormEvent, useEffect, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels } from "@/lib/i18n/labels";
import { createWorldCity } from "@/lib/constants/world-city-helpers";
import type { WorldCity } from "@/lib/constants/world-cities";
import { makeCatalogOfferCode } from "@/lib/identifiers";
import { getHotelOfferBlockMessage } from "@/lib/hotel/offer-eligibility";
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

type AgencyAccount = { id: string; property_name: string; subscription_active: boolean; account_status: string };

const TRIP_TYPES: CatalogTripType[] = ["leisure", "business", "school", "group"];
const TRANSPORTS: TransportMode[] = ["none", "flight", "private_bus", "train"];

export function AgencyCatalogOfferForm() {
  const { locale, t } = useLanguage();
  const mealLabels = getMealPlanLabels(locale);
  const router = useRouter();
  const [agency, setAgency] = useState<AgencyAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [titleIt, setTitleIt] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [tripType, setTripType] = useState<CatalogTripType>("leisure");
  const [dateMode, setDateMode] = useState<CatalogDateMode>("fixed");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [flexMonth, setFlexMonth] = useState(8);
  const [flexYear, setFlexYear] = useState(new Date().getFullYear());
  const [flexNights, setFlexNights] = useState(3);
  const [durationDays, setDurationDays] = useState(4);
  const [durationNights, setDurationNights] = useState(3);
  const [targetType, setTargetType] = useState<CatalogTargetType>("individual");
  const [minParticipants, setMinParticipants] = useState(2);
  const [destinations, setDestinations] = useState<CatalogOfferDestination[]>([]);
  const [destDraft, setDestDraft] = useState<WorldCity>(() => createWorldCity("IT", ""));
  const [itinerary, setItinerary] = useState<AgencyItineraryDay[]>([
    { day_number: 1, title_it: "Arrivo", title_en: "Arrival", description_it: "Arrivo e check-in.", description_en: "Arrival and check-in.", meal_plan: "breakfast", sort_order: 0 },
  ]);
  const [hotelName, setHotelName] = useState("");
  const [hotelCategory, setHotelCategory] = useState("4*");
  const [transports, setTransports] = useState<TransportMode[]>([]);
  const [basePrice, setBasePrice] = useState(450);
  const [singleSupplement, setSingleSupplement] = useState(80);
  const [paymentIt, setPaymentIt] = useState("Acconto 30% alla prenotazione, saldo 30 giorni prima.");
  const [paymentEn, setPaymentEn] = useState("30% deposit on booking, balance 30 days before departure.");
  const [cancelIt, setCancelIt] = useState("Penali secondo condizioni contrattuali dell'agenzia.");
  const [cancelEn, setCancelEn] = useState("Penalties according to agency contract terms.");
  const [tiers, setTiers] = useState<AgencyPriceTier[]>([
    { tier_kind: "individual", min_pax: 1, max_pax: 1, price_per_person: 450, label_it: "Individuale", label_en: "Individual", sort_order: 0 },
  ]);
  const [inclusions, setInclusions] = useState<AgencyInclusion[]>([
    { kind: "included", label_it: "Hotel con trattamento indicato", label_en: "Hotel with selected board", sort_order: 0 },
    { kind: "excluded", label_it: "Tassa di soggiorno", label_en: "City tax", sort_order: 0 },
  ]);
  const [coverUrl, setCoverUrl] = useState("");
  const [publish, setPublish] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createBrowserSupabaseClient();
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) {
        setError(t.catalogOffers.loginRequired);
        setLoading(false);
        return;
      }
      const { data, error: agErr } = await supabase
        .from("hotel_accounts")
        .select("id, property_name, subscription_active, account_status, provider_kind")
        .eq("user_id", auth.user.id)
        .maybeSingle();
      const block = getHotelOfferBlockMessage(agErr ? null : data);
      if (block || !data || data.provider_kind !== "agency") {
        setError(block ?? t.catalogOffers.agencyOnly);
        setLoading(false);
        return;
      }
      setAgency(data as AgencyAccount);
      setTitleIt(`Pacchetto ${data.property_name}`);
      setTitleEn(`${data.property_name} package`);
      setLoading(false);
    }
    void load();
  }, [t.catalogOffers.agencyOnly, t.catalogOffers.loginRequired]);

  function addDestination() {
    if (!destDraft.city_name.trim()) return;
    const role: CatalogDestinationRole = destinations.length === 0 ? "primary" : "stop";
    setDestinations((prev) => [
      ...prev,
      {
        city_id: destDraft.city_id,
        country_code: destDraft.country_code,
        city_name: destDraft.city_name,
        role,
        sort_order: prev.length,
      },
    ]);
    setDestDraft(createWorldCity(destDraft.country_code, ""));
  }

  async function uploadCover(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !agency) return;
    const supabase = createBrowserSupabaseClient();
    const path = `${agency.id}/cover-${Date.now()}.${file.name.split(".").pop() ?? "jpg"}`;
    const { error: upErr } = await supabase.storage.from("offer-media").upload(path, file, { upsert: true });
    if (upErr) {
      setError(upErr.message);
      return;
    }
    setCoverUrl(supabase.storage.from("offer-media").getPublicUrl(path).data.publicUrl);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agency || destinations.length === 0) {
      setError(t.catalogOffers.destinationsRequired);
      return;
    }
    if (transports.includes("flight")) {
      // flight disclaimer acknowledged implicitly on publish
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const code = makeCatalogOfferCode();
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
          cover_public_url: coverUrl || null,
          published_at: publish ? new Date().toISOString() : null,
        })
        .select("id")
        .single();
      if (offerErr || !offerRow) throw offerErr ?? new Error("Insert failed");
      const offerId = offerRow.id as string;

      const { error: destErr } = await supabase.from("catalog_offer_destinations").insert(
        destinations.map((d) => ({ ...d, catalog_offer_id: offerId })),
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
        primary_hotel_name: hotelName || null,
        hotel_category: hotelCategory || null,
        transport_modes: transports.filter((t) => t !== "none"),
        base_price_per_person: basePrice,
        single_supplement: singleSupplement,
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
      setError(err instanceof Error ? err.message : t.catalogOffers.saveError);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="p-6 text-sm text-zinc-500">{t.common.loading}</p>;
  if (error && !agency) return <p className="p-6 text-sm text-red-600">{error}</p>;

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <Link href="/agenzia/dashboard" className="text-sm text-[#0f4c81]">← {t.common.backToDashboard}</Link>
      <h1 className="text-2xl font-semibold">{t.catalogOffers.createAgencyOffer}</h1>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.generalInfo}</h2>
        <input required value={titleIt} onChange={(e) => setTitleIt(e.target.value)} className="w-full rounded-2xl border px-4 py-3 text-sm" placeholder={t.catalogOffers.titleIt} />
        <input required value={titleEn} onChange={(e) => setTitleEn(e.target.value)} className="w-full rounded-2xl border px-4 py-3 text-sm" placeholder={t.catalogOffers.titleEn} />
        <select value={tripType} onChange={(e) => setTripType(e.target.value as CatalogTripType)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          {TRIP_TYPES.map((tt) => <option key={tt} value={tt}>{tt}</option>)}
        </select>
        <label className="block text-sm">{t.catalogOffers.coverImage}<input type="file" accept="image/*" onChange={uploadCover} className="mt-2 block w-full" /></label>
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.destinationsSection}</h2>
        <CityAutocomplete value={destDraft} onChange={setDestDraft} label={t.catalogOffers.addDestination} />
        <button type="button" onClick={addDestination} className="text-sm text-[#0f4c81]">{t.catalogOffers.addDestinationBtn}</button>
        <ul className="text-sm">{destinations.map((d) => <li key={d.city_id + d.sort_order}>{d.city_name} ({d.country_code})</li>)}</ul>
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.logisticsSection}</h2>
        <select value={dateMode} onChange={(e) => setDateMode(e.target.value as CatalogDateMode)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          <option value="fixed">{t.catalogOffers.dateFixed}</option>
          <option value="date_range">{t.catalogOffers.dateRange}</option>
          <option value="month_flexible">{t.catalogOffers.dateFlexible}</option>
        </select>
        {dateMode === "fixed" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <input required type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
            <input required type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
          </div>
        ) : null}
        {dateMode === "date_range" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <input required type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
            <input required type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
          </div>
        ) : null}
        {dateMode === "month_flexible" ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <input type="number" min={1} max={12} value={flexMonth} onChange={(e) => setFlexMonth(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
            <input type="number" min={2024} value={flexYear} onChange={(e) => setFlexYear(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
            <input type="number" min={1} value={flexNights} onChange={(e) => setFlexNights(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
          </div>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="number" min={1} value={durationDays} onChange={(e) => setDurationDays(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
          <input type="number" min={0} value={durationNights} onChange={(e) => setDurationNights(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
        </div>
        <select value={targetType} onChange={(e) => setTargetType(e.target.value as CatalogTargetType)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          <option value="individual">individual</option>
          <option value="group">group</option>
        </select>
        {targetType === "group" ? (
          <input type="number" min={2} value={minParticipants} onChange={(e) => setMinParticipants(Number(e.target.value))} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        ) : null}
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.itinerary}</h2>
        {itinerary.map((day, idx) => (
          <div key={idx} className="space-y-2 rounded-xl bg-zinc-50 p-3">
            <input value={day.title_it} onChange={(e) => setItinerary((p) => p.map((d, i) => i === idx ? { ...d, title_it: e.target.value } : d))} className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="Titolo IT" />
            <input value={day.title_en} onChange={(e) => setItinerary((p) => p.map((d, i) => i === idx ? { ...d, title_en: e.target.value } : d))} className="w-full rounded-xl border px-3 py-2 text-sm" placeholder="Title EN" />
            <textarea value={day.description_it} onChange={(e) => setItinerary((p) => p.map((d, i) => i === idx ? { ...d, description_it: e.target.value } : d))} rows={2} className="w-full rounded-xl border px-3 py-2 text-sm" />
            <textarea value={day.description_en} onChange={(e) => setItinerary((p) => p.map((d, i) => i === idx ? { ...d, description_en: e.target.value } : d))} rows={2} className="w-full rounded-xl border px-3 py-2 text-sm" />
            <select value={day.meal_plan} onChange={(e) => setItinerary((p) => p.map((d, i) => i === idx ? { ...d, meal_plan: e.target.value as MealPlan } : d))} className="w-full rounded-xl border px-3 py-2 text-sm">
              {(Object.keys(mealLabels) as MealPlan[]).map((k) => <option key={k} value={k}>{mealLabels[k]}</option>)}
            </select>
          </div>
        ))}
        <button type="button" onClick={() => setItinerary((p) => [...p, { day_number: p.length + 1, title_it: "", title_en: "", description_it: "", description_en: "", meal_plan: "breakfast", sort_order: p.length }])} className="text-sm text-[#0f4c81]">{t.catalogOffers.addDay}</button>
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.accommodationTransport}</h2>
        <input value={hotelName} onChange={(e) => setHotelName(e.target.value)} placeholder="Hotel" className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <input value={hotelCategory} onChange={(e) => setHotelCategory(e.target.value)} placeholder="4*" className="w-full rounded-2xl border px-4 py-3 text-sm" />
        {TRANSPORTS.filter((tr) => tr !== "none").map((tr) => (
          <label key={tr} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={transports.includes(tr)} onChange={(e) => setTransports((p) => e.target.checked ? [...p, tr] : p.filter((x) => x !== tr))} />
            {tr}
          </label>
        ))}
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.pricingSection}</h2>
        <input type="number" min={1} value={basePrice} onChange={(e) => setBasePrice(Number(e.target.value))} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <input type="number" min={0} value={singleSupplement} onChange={(e) => setSingleSupplement(Number(e.target.value))} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <textarea value={paymentIt} onChange={(e) => setPaymentIt(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <textarea value={paymentEn} onChange={(e) => setPaymentEn(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <textarea value={cancelIt} onChange={(e) => setCancelIt(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <textarea value={cancelEn} onChange={(e) => setCancelEn(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        {tiers.map((tier, idx) => (
          <div key={idx} className="grid gap-2 rounded-xl bg-zinc-50 p-3 sm:grid-cols-2">
            <input value={tier.label_it} onChange={(e) => setTiers((p) => p.map((t, i) => i === idx ? { ...t, label_it: e.target.value } : t))} className="rounded-xl border px-3 py-2 text-sm" />
            <input type="number" value={tier.price_per_person} onChange={(e) => setTiers((p) => p.map((t, i) => i === idx ? { ...t, price_per_person: Number(e.target.value) } : t))} className="rounded-xl border px-3 py-2 text-sm" />
          </div>
        ))}
        <button type="button" onClick={() => setTiers((p) => [...p, { tier_kind: "group", min_pax: 10, max_pax: 15, price_per_person: basePrice - 30, label_it: "Gruppo", label_en: "Group", sort_order: p.length }])} className="text-sm text-[#0f4c81]">{t.catalogOffers.addTier}</button>
      </section>

      <section className="space-y-3 rounded-2xl border p-4">
        <h2 className="font-semibold">{t.catalogOffers.inclusionsSection}</h2>
        {inclusions.map((inc, idx) => (
          <div key={idx} className="grid gap-2 sm:grid-cols-3">
            <select value={inc.kind} onChange={(e) => setInclusions((p) => p.map((x, i) => i === idx ? { ...x, kind: e.target.value as AgencyInclusion["kind"] } : x))} className="rounded-xl border px-3 py-2 text-sm">
              <option value="included">{t.catalogOffers.included}</option>
              <option value="excluded">{t.catalogOffers.excluded}</option>
            </select>
            <input value={inc.label_it} onChange={(e) => setInclusions((p) => p.map((x, i) => i === idx ? { ...x, label_it: e.target.value } : x))} className="rounded-xl border px-3 py-2 text-sm" />
            <input value={inc.label_en} onChange={(e) => setInclusions((p) => p.map((x, i) => i === idx ? { ...x, label_en: e.target.value } : x))} className="rounded-xl border px-3 py-2 text-sm" />
          </div>
        ))}
        <button type="button" onClick={() => setInclusions((p) => [...p, { kind: "included", label_it: "", label_en: "", sort_order: p.length }])} className="text-sm text-[#0f4c81]">{t.catalogOffers.addInclusion}</button>
      </section>

      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} />{t.catalogOffers.publishNow}</label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button type="submit" disabled={saving} className="rounded-full bg-[#0f4c81] px-8 py-3 text-sm font-bold text-white disabled:opacity-60">{saving ? t.common.saving : t.catalogOffers.saveOffer}</button>
    </form>
  );
}
