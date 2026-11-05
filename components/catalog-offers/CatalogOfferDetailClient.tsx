"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DownloadVoucherButton } from "@/components/offers/DownloadVoucherButton";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels } from "@/lib/i18n/labels";
import {
  boardBasisShort,
  catalogLabelsForLocale,
  catalogRoomTypeLabels,
  catalogTripTypeLabels,
  destinationLine,
  formatOfferDateRange,
  formatOfferPrice,
  localizedOfferTitle,
  offerCoverUrl,
  transportModeLabels,
} from "@/lib/catalog-offers/labels";
import { makeCatalogAcceptanceCode } from "@/lib/identifiers";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { CatalogAcceptanceSnapshot, CatalogOfferDetail } from "@/types/catalog-offers";
import type { TransportMode } from "@/types/catalog-offers";

function computeAcceptanceTotal(offer: CatalogOfferDetail) {
  if (offer.offer_kind === "hotel_vacancy" && offer.hotel_details_full) {
    return Number(offer.hotel_details_full.price_amount);
  }
  if (offer.offer_kind === "agency_package") {
    const tiers = offer.agency_details_full?.price_tiers ?? [];
    if (tiers.length) return Math.min(...tiers.map((t) => Number(t.price_per_person)));
    return Number(offer.agency_details_full?.base_price_per_person ?? 0);
  }
  return 0;
}

function buildSnapshot(offer: CatalogOfferDetail): CatalogAcceptanceSnapshot {
  return {
    offer_code: offer.offer_code,
    offer_kind: offer.offer_kind,
    title_it: offer.title_it,
    title_en: offer.title_en,
    provider_name: offer.provider.property_name,
    destinations: offer.destinations,
    check_in: offer.check_in,
    check_out: offer.check_out,
    date_mode: offer.date_mode,
    flexible_month: offer.flexible_month,
    flexible_year: offer.flexible_year,
    flexible_nights: offer.flexible_nights,
    total_price: computeAcceptanceTotal(offer),
    currency: offer.hotel_details_full?.currency ?? "EUR",
    board_basis: offer.hotel_details_full?.board_basis ?? offer.agency_details_full?.board_basis,
    cancellation_policy_it: offer.hotel_details_full?.cancellation_policy_it,
    cancellation_policy_en: offer.hotel_details_full?.cancellation_policy_en,
    payment_terms_it: offer.agency_details_full?.payment_terms_it ?? undefined,
    payment_terms_en: offer.agency_details_full?.payment_terms_en ?? undefined,
    itinerary: offer.agency_details_full?.itinerary,
    inclusions: offer.agency_details_full?.inclusions,
  };
}

export function CatalogOfferDetailClient({ offerCode }: { offerCode: string }) {
  const { locale, t } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);
  const router = useRouter();
  const [offer, setOffer] = useState<CatalogOfferDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [interestNote, setInterestNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [acceptanceCode, setAcceptanceCode] = useState<string | null>(null);
  const [viewerAdvertiserId, setViewerAdvertiserId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/catalog-offers/${encodeURIComponent(offerCode)}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Not found");
        setOffer(json.offer as CatalogOfferDetail);

        const supabase = createBrowserSupabaseClient();
        const { data: auth } = await supabase.auth.getUser();
        if (auth.user) {
          const { data: adv } = await supabase.from("advertiser_profiles").select("id").eq("user_id", auth.user.id).maybeSingle();
          setViewerAdvertiserId(adv?.id ?? null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : t.catalogOffers.loadError);
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [offerCode, t.catalogOffers.loadError]);

  async function submitInterest(e: FormEvent) {
    e.preventDefault();
    if (!offer || !viewerAdvertiserId) {
      router.push(`/login?redirect=${encodeURIComponent(`/offerta/${offerCode}`)}`);
      return;
    }
    setSaving(true);
    setMessage("");
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: insertError } = await supabase.from("catalog_offer_interests").insert({
        catalog_offer_id: offer.id,
        advertiser_id: viewerAdvertiserId,
        message: interestNote.trim() || null,
        contact_snapshot: {},
      });
      if (insertError) throw insertError;
      setMessage(t.catalogOffers.interestSent);
      setInterestNote("");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : t.catalogOffers.actionError);
    } finally {
      setSaving(false);
    }
  }

  async function acceptOffer() {
    if (!offer) return;
    if (!viewerAdvertiserId) {
      router.push(`/login?redirect=${encodeURIComponent(`/offerta/${offerCode}`)}`);
      return;
    }
    setSaving(true);
    setMessage("");
    try {
      const supabase = createBrowserSupabaseClient();
      const code = makeCatalogAcceptanceCode();
      const snapshot = buildSnapshot(offer);
      const total = computeAcceptanceTotal(offer);
      const { error: insertError } = await supabase.from("catalog_offer_acceptances").insert({
        acceptance_code: code,
        catalog_offer_id: offer.id,
        advertiser_id: viewerAdvertiserId,
        provider_id: offer.provider.id,
        snapshot_json: snapshot,
        total_price_snapshot: total,
        currency: snapshot.currency,
        status: "pending",
      });
      if (insertError) throw insertError;
      setAcceptanceCode(code);
      setMessage(t.catalogOffers.accepted);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : t.catalogOffers.actionError);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-sm text-zinc-500">{t.common.loading}</div>;
  if (error || !offer) return <div className="p-8 text-sm text-red-600">{error ?? t.catalogOffers.notFound}</div>;

  const title = localizedOfferTitle(offer, locale);
  const cover = offerCoverUrl(offer);
  const dates = formatOfferDateRange(offer, locale);
  const price = formatOfferPrice(offer, locale);
  const destinations = destinationLine(offer.destinations, locale);
  const snapshot = buildSnapshot(offer);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link href="/" className="text-sm text-[#0f4c81] hover:underline">
        ← {t.common.home}
      </Link>

      <article className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        {cover ? <img src={cover} alt={title} className="h-56 w-full object-cover sm:h-72" /> : null}
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0f4c81]">{offer.offer_code}</p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">{title}</h1>
          <p className="mt-2 text-sm text-zinc-500">
            {offer.provider.property_name}
            {destinations ? ` · ${destinations}` : ""}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span>{dates}</span>
            <span className="font-semibold text-[#0f4c81]">{price}</span>
          </div>

          {offer.offer_kind === "hotel_vacancy" && offer.hotel_details_full ? (
            <section className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold">{t.catalogOffers.hotelSection}</h2>
              <p className="text-sm text-zinc-600">
                {mealPlanLabels[offer.hotel_details_full.board_basis]} ({catalogLabelsForLocale(boardBasisShort, locale)[offer.hotel_details_full.board_basis]})
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {offer.hotel_details_full.rooms.map((room) => (
                  <li key={room.id ?? room.room_type} className="rounded-2xl border border-zinc-200 p-3 text-sm">
                    <strong>{catalogLabelsForLocale(catalogRoomTypeLabels, locale)[room.room_type]}</strong>
                    <span className="text-zinc-500"> · {room.rooms_available} {t.catalogOffers.roomsAvailable}</span>
                  </li>
                ))}
              </ul>
              {(offer.hotel_details_full.perks ?? []).length ? (
                <ul className="list-disc pl-5 text-sm text-zinc-600">
                  {offer.hotel_details_full.perks.map((p) => (
                    <li key={p.key}>{locale === "en" ? p.label_en : p.label_it}</li>
                  ))}
                </ul>
              ) : null}
              <p className="text-sm text-zinc-600">
                <strong>{t.catalogOffers.cancellation}:</strong>{" "}
                {locale === "en" ? offer.hotel_details_full.cancellation_policy_en : offer.hotel_details_full.cancellation_policy_it}
              </p>
            </section>
          ) : null}

          {offer.offer_kind === "agency_package" && offer.agency_details_full ? (
            <section className="mt-8 space-y-6">
              <h2 className="text-lg font-semibold">{t.catalogOffers.agencySection}</h2>
              <p className="text-sm text-zinc-600">
                {catalogLabelsForLocale(catalogTripTypeLabels, locale)[offer.agency_details_full.trip_type]} · {offer.agency_details_full.duration_days} {t.catalogOffers.days} / {offer.agency_details_full.duration_nights} {t.catalogOffers.nights}
              </p>
              <p className="text-sm text-zinc-600">
                {mealPlanLabels[offer.agency_details_full.board_basis]} ({catalogLabelsForLocale(boardBasisShort, locale)[offer.agency_details_full.board_basis]})
              </p>
              {offer.agency_details_full.transport_modes.length ? (
                <p className="text-sm text-zinc-600">
                  {offer.agency_details_full.transport_modes
                    .filter((m) => m !== "none")
                    .map((m) => catalogLabelsForLocale(transportModeLabels, locale)[m as TransportMode] ?? m)
                    .join(" · ")}
                </p>
              ) : null}
              {offer.agency_details_full.transport_modes.includes("flight") ? (
                <p className="rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">{t.catalogOffers.flightDisclaimer}</p>
              ) : null}

              <div>
                <h3 className="font-semibold">{t.catalogOffers.itinerary}</h3>
                <ol className="mt-3 space-y-3">
                  {offer.agency_details_full.itinerary
                    .slice()
                    .sort((a, b) => a.day_number - b.day_number)
                    .map((day) => (
                      <li key={day.id ?? day.day_number} className="rounded-2xl border border-zinc-200 p-4 text-sm">
                        <p className="font-semibold">
                          {t.catalogOffers.day} {day.day_number}: {locale === "en" ? day.title_en : day.title_it}
                        </p>
                        <p className="mt-1 text-zinc-600">{locale === "en" ? day.description_en : day.description_it}</p>
                        <p className="mt-1 text-xs text-zinc-500">{mealPlanLabels[day.meal_plan]}</p>
                      </li>
                    ))}
                </ol>
              </div>

              {offer.agency_details_full.price_tiers.length ? (
                <div>
                  <h3 className="font-semibold">{t.catalogOffers.pricingTiers}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {offer.agency_details_full.price_tiers.map((tier) => (
                      <li key={tier.id ?? tier.label_it}>
                        {locale === "en" ? tier.label_en : tier.label_it}: €{tier.price_per_person}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold">{t.catalogOffers.included}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600">
                    {offer.agency_details_full.inclusions
                      .filter((i) => i.kind === "included")
                      .map((i) => (
                        <li key={i.id ?? i.label_it}>{locale === "en" ? i.label_en : i.label_it}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">{t.catalogOffers.excluded}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600">
                    {offer.agency_details_full.inclusions
                      .filter((i) => i.kind === "excluded")
                      .map((i) => (
                        <li key={i.id ?? i.label_it}>{locale === "en" ? i.label_en : i.label_it}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row">
            <button
              type="button"
              disabled={saving}
              onClick={() => void acceptOffer()}
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600 disabled:opacity-60"
            >
              {t.catalogOffers.acceptOffer}
            </button>
            <form onSubmit={submitInterest} className="flex flex-1 flex-col gap-2 sm:flex-row">
              <input
                value={interestNote}
                onChange={(e) => setInterestNote(e.target.value)}
                placeholder={t.catalogOffers.interestPlaceholder}
                className="flex-1 rounded-2xl border border-zinc-300 px-4 py-3 text-sm"
              />
              <button
                type="submit"
                disabled={saving}
                className="rounded-full border border-[#0f4c81] px-6 py-3 text-sm font-bold text-[#0f4c81] hover:bg-[#0f4c81]/5 disabled:opacity-60"
              >
                {t.catalogOffers.requestInfo}
              </button>
            </form>
          </div>

          {message ? <p className="mt-4 text-sm text-emerald-700">{message}</p> : null}

          {acceptanceCode ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                {t.catalogOffers.acceptanceCode}: {acceptanceCode}
              </p>
              <div className="mt-3">
                <DownloadVoucherButton
                  kind="catalog"
                  catalogOfferId={offer.id}
                  requestCode={offer.offer_code}
                />
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}
