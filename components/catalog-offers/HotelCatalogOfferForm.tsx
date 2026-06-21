"use client";

import { FormEvent, useEffect, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { HardNavLink } from "@/components/navigation/HardNavLink";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import { HOTEL_PERK_OPTIONS } from "@/lib/catalog-offers/labels";
import { makeCatalogOfferCode } from "@/lib/identifiers";
import { getHotelOfferBlockMessage, HOTEL_OFFER_ELIGIBILITY_SELECT } from "@/lib/hotel/offer-eligibility";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { CatalogCityTax, CatalogPricingModel, CatalogRoomType } from "@/types/catalog-offers";
import type { MealPlan, StructureType } from "@/types/app";

type HotelAccount = {
  id: string;
  property_name: string;
  city_id: string;
  city_name: string;
  country_code: string;
  structure_type: StructureType;
  subscription_active: boolean;
  account_status: string;
};

type RoomRow = { room_type: CatalogRoomType; rooms_available: number; max_occupancy: number };

const ROOM_TYPES: CatalogRoomType[] = ["single", "double", "twin", "triple", "family", "suite"];

export function HotelCatalogOfferForm() {
  const { locale, t } = useLanguage();
  const mealLabels = getMealPlanLabels(locale);
  const structureLabels = getStructureTypeLabels(locale);
  const router = useRouter();
  const [hotel, setHotel] = useState<HotelAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [titleIt, setTitleIt] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [isWeekend, setIsWeekend] = useState(false);
  const [accommodationType, setAccommodationType] = useState<StructureType>("hotel");
  const [boardBasis, setBoardBasis] = useState<MealPlan>("breakfast");
  const [pricingModel, setPricingModel] = useState<CatalogPricingModel>("total_package");
  const [priceAmount, setPriceAmount] = useState(199);
  const [minStay, setMinStay] = useState(1);
  const [maxOccupancy, setMaxOccupancy] = useState(2);
  const [cancellationIt, setCancellationIt] = useState("Cancellazione gratuita fino a 48 ore prima dell'arrivo.");
  const [cancellationEn, setCancellationEn] = useState("Free cancellation up to 48 hours before arrival.");
  const [cityTax, setCityTax] = useState<CatalogCityTax>("excluded");
  const [selectedPerks, setSelectedPerks] = useState<string[]>(["wifi"]);
  const [rooms, setRooms] = useState<RoomRow[]>([{ room_type: "double", rooms_available: 2, max_occupancy: 2 }]);
  const [coverUrl, setCoverUrl] = useState("");
  const [publish, setPublish] = useState(true);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { user } = await getAuthUserFast(supabase);
        if (!active) return;
        if (!user) {
          setError(t.catalogOffers.loginRequired);
          return;
        }
        const { data, error: hotelError } = await supabase
          .from("hotel_accounts")
          .select(HOTEL_OFFER_ELIGIBILITY_SELECT)
          .eq("user_id", user.id)
          .maybeSingle();
        if (!active) return;
        if (hotelError) {
          setError(hotelError.message);
          return;
        }
        const block = getHotelOfferBlockMessage(data);
        if (block || !data || data.provider_kind === "agency") {
          setError(block ?? t.catalogOffers.hotelOnly);
          return;
        }
        if (!data.city_id?.trim()) {
          setError("Completa la città nel profilo struttura prima di pubblicare un'offerta.");
          return;
        }
        setHotel(data as HotelAccount);
        setAccommodationType(data.structure_type as StructureType);
        setTitleIt(`Offerta ${data.property_name}`);
        setTitleEn(`${data.property_name} special offer`);
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function uploadCover(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !hotel) return;
    const supabase = createBrowserSupabaseClient();
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${hotel.id}/cover-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from("offer-media").upload(path, file, { upsert: true });
    if (upErr) {
      setError(upErr.message);
      return;
    }
    const { data } = supabase.storage.from("offer-media").getPublicUrl(path);
    setCoverUrl(data.publicUrl);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!hotel) return;
    setSaving(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const code = makeCatalogOfferCode();
      const perks = HOTEL_PERK_OPTIONS.filter((p) => selectedPerks.includes(p.key)).map((p) => ({
        key: p.key,
        label_it: p.label_it,
        label_en: p.label_en,
      }));

      const { data: offerRow, error: offerErr } = await supabase
        .from("catalog_offers")
        .insert({
          offer_code: code,
          provider_id: hotel.id,
          provider_kind: "structure",
          offer_kind: "hotel_vacancy",
          title_it: titleIt.trim(),
          title_en: titleEn.trim(),
          status: publish ? "published" : "draft",
          date_mode: "fixed",
          check_in: checkIn,
          check_out: checkOut,
          cover_public_url: coverUrl || null,
          published_at: publish ? new Date().toISOString() : null,
        })
        .select("id")
        .single();
      if (offerErr || !offerRow) throw offerErr ?? new Error("Insert failed");

      const offerId = offerRow.id as string;

      const { error: destErr } = await supabase.from("catalog_offer_destinations").insert({
        catalog_offer_id: offerId,
        city_id: hotel.city_id,
        country_code: hotel.country_code,
        city_name: hotel.city_name,
        role: "primary",
        sort_order: 0,
      });
      if (destErr) throw destErr;

      const { error: detErr } = await supabase.from("hotel_offer_details").insert({
        catalog_offer_id: offerId,
        accommodation_type: accommodationType,
        board_basis: boardBasis,
        pricing_model: pricingModel,
        price_amount: priceAmount,
        currency: "EUR",
        min_stay_nights: minStay,
        max_occupancy_per_room: maxOccupancy,
        cancellation_policy_it: cancellationIt,
        cancellation_policy_en: cancellationEn,
        city_tax: cityTax,
        perks,
        is_weekend_offer: isWeekend,
      });
      if (detErr) throw detErr;

      const { error: roomsErr } = await supabase.from("hotel_offer_rooms").insert(
        rooms.map((r, i) => ({
          catalog_offer_id: offerId,
          room_type: r.room_type,
          rooms_available: r.rooms_available,
          max_occupancy: r.max_occupancy,
          sort_order: i,
        })),
      );
      if (roomsErr) throw roomsErr;

      router.push(`/offerta/${code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.catalogOffers.saveError);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="p-6 text-sm text-zinc-500">{t.common.loading}</p>;
  if (error && !hotel) {
    return (
      <div className="mx-auto max-w-lg space-y-4 px-4 py-8">
        <p className="text-sm text-red-600">{error}</p>
        <HardNavLink href="/struttura/profilo" className="inline-block text-sm font-semibold text-[#0f4c81] underline">
          → {t.dashboard.hotel.structureProfile}
        </HardNavLink>
        <HardNavLink href="/struttura/dashboard" className="block text-sm text-zinc-600">
          ← {t.common.backToDashboard}
        </HardNavLink>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <HardNavLink href="/struttura/dashboard" className="text-sm text-[#0f4c81]">← {t.common.backToDashboard}</HardNavLink>
      <h1 className="text-2xl font-semibold">{t.catalogOffers.createHotelOffer}</h1>

      <section className="space-y-3 rounded-2xl border border-zinc-200 p-4">
        <h2 className="font-semibold">{t.catalogOffers.generalInfo}</h2>
        <input required value={titleIt} onChange={(e) => setTitleIt(e.target.value)} placeholder={t.catalogOffers.titleIt} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <input required value={titleEn} onChange={(e) => setTitleEn(e.target.value)} placeholder={t.catalogOffers.titleEn} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <select value={accommodationType} onChange={(e) => setAccommodationType(e.target.value as StructureType)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          {(Object.keys(structureLabels) as StructureType[]).map((k) => (
            <option key={k} value={k}>{structureLabels[k]}</option>
          ))}
        </select>
        <label className="block text-sm">
          {t.catalogOffers.coverImage}
          <input type="file" accept="image/*" onChange={uploadCover} className="mt-2 block w-full text-sm" />
        </label>
      </section>

      <section className="space-y-3 rounded-2xl border border-zinc-200 p-4">
        <h2 className="font-semibold">{t.catalogOffers.vacantDates}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <input required type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
          <input required type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="rounded-2xl border px-4 py-3 text-sm" />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={isWeekend} onChange={(e) => setIsWeekend(e.target.checked)} />
          {t.catalogOffers.weekendBadge}
        </label>
      </section>

      <section className="space-y-3 rounded-2xl border border-zinc-200 p-4">
        <h2 className="font-semibold">{t.catalogOffers.roomsSection}</h2>
        {rooms.map((room, idx) => (
          <div key={idx} className="grid gap-2 rounded-xl bg-zinc-50 p-3 sm:grid-cols-3">
            <select value={room.room_type} onChange={(e) => setRooms((prev) => prev.map((r, i) => i === idx ? { ...r, room_type: e.target.value as CatalogRoomType } : r))} className="rounded-xl border px-3 py-2 text-sm">
              {ROOM_TYPES.map((rt) => <option key={rt} value={rt}>{rt}</option>)}
            </select>
            <input type="number" min={0} value={room.rooms_available} onChange={(e) => setRooms((prev) => prev.map((r, i) => i === idx ? { ...r, rooms_available: Number(e.target.value) } : r))} className="rounded-xl border px-3 py-2 text-sm" />
            <input type="number" min={1} value={room.max_occupancy} onChange={(e) => setRooms((prev) => prev.map((r, i) => i === idx ? { ...r, max_occupancy: Number(e.target.value) } : r))} className="rounded-xl border px-3 py-2 text-sm" />
          </div>
        ))}
        <button type="button" onClick={() => setRooms((p) => [...p, { room_type: "double", rooms_available: 1, max_occupancy: 2 }])} className="text-sm text-[#0f4c81]">{t.catalogOffers.addRoom}</button>
      </section>

      <section className="space-y-3 rounded-2xl border border-zinc-200 p-4">
        <h2 className="font-semibold">{t.catalogOffers.pricingSection}</h2>
        <select value={boardBasis} onChange={(e) => setBoardBasis(e.target.value as MealPlan)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          {(Object.keys(mealLabels) as MealPlan[]).map((k) => <option key={k} value={k}>{mealLabels[k]}</option>)}
        </select>
        <select value={pricingModel} onChange={(e) => setPricingModel(e.target.value as CatalogPricingModel)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          <option value="total_package">{t.catalogOffers.totalPackage}</option>
          <option value="per_night_per_room">{t.catalogOffers.perNightRoom}</option>
        </select>
        <input required type="number" min={1} value={priceAmount} onChange={(e) => setPriceAmount(Number(e.target.value))} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <div className="grid gap-3 sm:grid-cols-2">
          <input type="number" min={1} value={minStay} onChange={(e) => setMinStay(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
          <input type="number" min={1} value={maxOccupancy} onChange={(e) => setMaxOccupancy(Number(e.target.value))} className="rounded-2xl border px-4 py-3 text-sm" />
        </div>
        <select value={cityTax} onChange={(e) => setCityTax(e.target.value as CatalogCityTax)} className="w-full rounded-2xl border px-4 py-3 text-sm">
          <option value="included">{t.catalogOffers.cityTaxIncluded}</option>
          <option value="excluded">{t.catalogOffers.cityTaxExcluded}</option>
          <option value="not_applicable">{t.catalogOffers.cityTaxNa}</option>
        </select>
        <textarea value={cancellationIt} onChange={(e) => setCancellationIt(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
        <textarea value={cancellationEn} onChange={(e) => setCancellationEn(e.target.value)} rows={2} className="w-full rounded-2xl border px-4 py-3 text-sm" />
      </section>

      <section className="space-y-2 rounded-2xl border border-zinc-200 p-4">
        <h2 className="font-semibold">{t.catalogOffers.perksSection}</h2>
        {HOTEL_PERK_OPTIONS.map((p) => (
          <label key={p.key} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={selectedPerks.includes(p.key)} onChange={(e) => setSelectedPerks((prev) => e.target.checked ? [...prev, p.key] : prev.filter((k) => k !== p.key))} />
            {locale === "en" ? p.label_en : p.label_it}
          </label>
        ))}
      </section>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} />
        {t.catalogOffers.publishNow}
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button type="submit" disabled={saving} className="rounded-full bg-[#0f4c81] px-8 py-3 text-sm font-bold text-white disabled:opacity-60">
        {saving ? t.common.saving : t.catalogOffers.saveOffer}
      </button>
    </form>
  );
}
