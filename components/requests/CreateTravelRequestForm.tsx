"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CityAutocomplete } from "@/components/location/CityAutocomplete";
import { AppDatePicker } from "@/components/ui/AppDatePicker";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { validateNoContactsInFields } from "@/lib/content/contact-guard";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { cityFromInput, emptyWorldCity } from "@/lib/constants/world-city-helpers";
import { makeRequestCode } from "@/lib/identifiers";
import {
  buildTravelRequestResumePath,
  clearTravelRequestDraft,
  consumeTravelRequestAutoPublish,
  loadTravelRequestDraft,
  markTravelRequestAutoPublish,
  saveTravelRequestDraft,
  type TravelRequestDraft,
} from "@/lib/requests/travelRequestDraft";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/i18n/format";
import { getMealPlanLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import type { MealPlan, PreferredStructureType } from "@/types/app";

type RoomType = "double" | "twin" | "triple" | "quadruple";
type RoomDetail = { room: number; room_type: RoomType; adults: number; children: number; children_ages: number[]; budget: number };
type PreferenceFilters = { connecting_rooms: boolean; disabled_access: boolean; pool: boolean; spa: boolean; bathtub: boolean; garage: boolean; beach: boolean; pets_allowed: boolean };

const emptyFilters: PreferenceFilters = { connecting_rooms: false, disabled_access: false, pool: false, spa: false, bathtub: false, garage: false, beach: false, pets_allowed: false };

const formFieldLgLabel = "text-sm font-medium text-zinc-800 dark:text-zinc-200";
const formFieldLgInput =
  "mt-2 h-16 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-base font-semibold leading-none text-zinc-950 outline-none transition placeholder:font-normal placeholder:text-zinc-400 focus:border-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81]/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500";
import { checkoutExpiresAtIso } from "@/lib/lifecycle/checkout-expiry";
function normalizeRooms(rooms: RoomDetail[]) { return rooms.map((room, index) => ({ ...room, room: index + 1, room_type: room.room_type ?? "double", adults: Math.max(1, room.adults), children: Math.max(0, room.children), children_ages: room.children_ages.slice(0, room.children).map((age) => Math.max(0, age)), budget: Math.max(0, Number(room.budget) || 0) })); }
function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value || 0);
}
function toInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function todayInputValue() { return toInputValue(new Date()); }
function dayAfterInputValue(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  return toInputValue(date);
}
function positiveNumber(value: string | null, fallback: number) { const parsed = Number(value); return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback; }
const defaultRoom: RoomDetail = { room: 1, room_type: "double", adults: 1, children: 0, children_ages: [], budget: 0 };
function cityFromParams(cityId: string | null, cityName: string | null) {
  const byId = cityId ? majorWorldCities.find((city) => city.city_id === cityId) : null;
  if (byId) return byId;
  const value = cityName?.trim();
  if (value) {
    const byName = majorWorldCities.find((city) => city.label.toLowerCase() === value.toLowerCase() || city.city_name.toLowerCase() === value.toLowerCase());
    if (byName) return byName;
    return cityFromInput("IT", value);
  }
  return emptyWorldCity();
}
function initialCity(searchParams: URLSearchParams) {
  if (searchParams.get("city_id") || searchParams.get("city")) {
    return cityFromParams(searchParams.get("city_id"), searchParams.get("city"));
  }
  return emptyWorldCity();
}
function initialRooms(searchParams: URLSearchParams) {
  const budgetParam = Number(searchParams.get("budget"));
  const perRoomBudget = Number.isFinite(budgetParam) && budgetParam > 0 ? budgetParam : 0;
  if (searchParams.get("rooms") || searchParams.get("adults") || searchParams.get("children")) {
    return roomsFromParams(searchParams.get("rooms"), searchParams.get("adults"), searchParams.get("children"), perRoomBudget);
  }
  return [{ ...defaultRoom, budget: perRoomBudget }];
}
function filtersFromParam(value: string | null): PreferenceFilters { if (!value) return emptyFilters; const keys = new Set(value.split(",").map((item) => item.trim()).filter(Boolean)); return { ...emptyFilters, connecting_rooms: keys.has("connecting_rooms"), disabled_access: keys.has("disabled_access"), pool: keys.has("pool"), spa: keys.has("spa"), bathtub: keys.has("bathtub"), garage: keys.has("garage"), beach: keys.has("beach"), pets_allowed: keys.has("pets_allowed") }; }
function roomsFromParams(roomCountValue: string | null, adultsValue: string | null, childrenValue: string | null, perRoomBudget = 0): RoomDetail[] {
  const roomCount = Math.max(1, Math.min(10, positiveNumber(roomCountValue, 1)));
  let adults = Math.max(roomCount, positiveNumber(adultsValue, 2));
  let children = Math.max(0, Number(childrenValue || 0));
  return Array.from({ length: roomCount }).map((_, index) => {
    const roomsLeft = roomCount - index;
    const adultsForRoom = Math.max(1, Math.floor(adults / roomsLeft));
    adults -= adultsForRoom;
    const childrenForRoom = index === 0 ? children : 0;
    children = 0;
    return { room: index + 1, room_type: "double", adults: adultsForRoom, children: childrenForRoom, children_ages: Array.from({ length: childrenForRoom }).map(() => 0), budget: perRoomBudget };
  });
}

export function CreateTravelRequestForm() {
  const { locale, t } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);
  const structureTypeLabels = getStructureTypeLabels(locale);
  const roomTypeLabels: Record<RoomType, string> = {
    double: t.forms.travelRequest.roomTypeDouble,
    twin: t.forms.travelRequest.roomTypeTwin,
    triple: t.forms.travelRequest.roomTypeTriple,
    quadruple: t.forms.travelRequest.roomTypeQuadruple,
  };
  const filterLabels: Array<{ key: keyof PreferenceFilters; label: string }> = [
    { key: "connecting_rooms", label: t.request.connectingRooms },
    { key: "disabled_access", label: t.request.disabledAccess },
    { key: "pool", label: t.request.pool },
    { key: "spa", label: t.request.spa },
    { key: "bathtub", label: t.request.bathtub },
    { key: "garage", label: t.request.garage },
    { key: "beach", label: t.forms.travelRequest.filterBeachNear },
    { key: "pets_allowed", label: t.request.petsAllowed },
  ];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const autoPublishStarted = useRef(false);
  const [hasSession, setHasSession] = useState<boolean | null>(null);
  const [selectedCity, setSelectedCity] = useState<WorldCity>(() => initialCity(searchParams));
  const [preferredArea, setPreferredArea] = useState(() => searchParams.get("area") ?? "");
  const [preferredStructureType, setPreferredStructureType] = useState<PreferredStructureType>("all");
  const [checkIn, setCheckIn] = useState(() => searchParams.get("check_in") ?? "");
  const [checkOut, setCheckOut] = useState(() => searchParams.get("check_out") ?? "");
  const [rooms, setRooms] = useState<RoomDetail[]>(() => initialRooms(searchParams));
  const [filters, setFilters] = useState<PreferenceFilters>(() => filtersFromParam(searchParams.get("filters")));
  const [mealPlan, setMealPlan] = useState<MealPlan>("breakfast");
  const [notes, setNotes] = useState("");
  const cloneFromId = searchParams.get("clone_from");
  const targetHotelId = searchParams.get("hotel_id");
  const [cloneSourceCode, setCloneSourceCode] = useState<string | null>(null);
  const [prefillLoading, setPrefillLoading] = useState(Boolean(cloneFromId));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const resumePath = useMemo(
    () => buildTravelRequestResumePath(pathname, searchParams.toString()),
    [pathname, searchParams],
  );

  const buildDraft = useCallback(
    (): TravelRequestDraft => ({
      selectedCity,
      preferredArea,
      preferredStructureType,
      checkIn,
      checkOut,
      rooms: normalizeRooms(rooms),
      filters,
      mealPlan,
      notes,
      targetHotelId: targetHotelId || null,
    }),
    [
      selectedCity,
      preferredArea,
      preferredStructureType,
      checkIn,
      checkOut,
      rooms,
      filters,
      mealPlan,
      notes,
      targetHotelId,
    ],
  );

  const applyDraft = useCallback((draft: TravelRequestDraft) => {
    setSelectedCity(draft.selectedCity);
    setPreferredArea(draft.preferredArea);
    setPreferredStructureType(draft.preferredStructureType);
    setCheckIn(draft.checkIn);
    setCheckOut(draft.checkOut);
    setRooms(draft.rooms);
    setFilters(draft.filters);
    setMealPlan(draft.mealPlan);
    setNotes(draft.notes);
  }, []);

  useEffect(() => {
    void createBrowserSupabaseClient()
      .auth.getUser()
      .then(({ data }) => setHasSession(Boolean(data.user)));
  }, []);

  useEffect(() => {
    if (cloneFromId) return;
    const draft = loadTravelRequestDraft();
    if (draft) applyDraft(draft);
  }, [applyDraft, cloneFromId]);

  const validateForm = useCallback(
    (draft: TravelRequestDraft) => {
      if (!draft.selectedCity.city_name.trim()) return t.forms.travelRequest.errorInvalidDestination;
      if (!draft.checkIn || !draft.checkOut) return t.forms.travelRequest.errorDatesRequired;
      if (new Date(draft.checkOut) <= new Date(draft.checkIn)) return t.forms.travelRequest.errorCheckoutAfterCheckin;
      if (draft.rooms.some((room) => !(Number(room.budget) > 0))) return t.forms.travelRequest.errorInvalidBudget;
      if (draft.rooms.some((room) => room.adults < 1)) return t.forms.travelRequest.errorAdultRequired;
      return validateNoContactsInFields([
        { label: t.forms.travelRequest.fieldPreferredArea, value: draft.preferredArea },
        { label: t.forms.travelRequest.fieldNotes, value: draft.notes },
      ]);
    },
    [t.forms.travelRequest],
  );

  const publishDraft = useCallback(
    async (draft: TravelRequestDraft) => {
      const validationError = validateForm(draft);
      if (validationError) {
        setError(validationError);
        return false;
      }

      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        saveTravelRequestDraft(draft);
        markTravelRequestAutoPublish();
        router.push(`/login?redirect=${encodeURIComponent(resumePath)}`);
        return false;
      }

      const { data: advertiser, error: advertiserError } = await supabase
        .from("advertiser_profiles")
        .select("id")
        .eq("user_id", authData.user.id)
        .single();
      if (advertiserError || !advertiser) {
        saveTravelRequestDraft(draft);
        markTravelRequestAutoPublish();
        router.push(`/registrazione?redirect=${encodeURIComponent(resumePath)}`);
        return false;
      }

      const roomsCount = draft.rooms.length;
      const guestsCount = draft.rooms.reduce((total, room) => total + room.adults + room.children, 0);
      const totalBudget = draft.rooms.reduce((total, room) => total + (Number(room.budget) || 0), 0);
      const payload = {
        request_code: makeRequestCode(),
        advertiser_id: advertiser.id,
        country_code: draft.selectedCity.country_code,
        country_name: draft.selectedCity.country_name,
        city_name: draft.selectedCity.city_name,
        city_id: draft.selectedCity.city_id,
        preferred_area: draft.preferredArea,
        preferred_structure_type: draft.preferredStructureType,
        check_in: draft.checkIn,
        check_out: draft.checkOut,
        guests_count: guestsCount,
        rooms_count: roomsCount,
        room_details: draft.rooms,
        preference_filters: draft.filters,
        budget: totalBudget,
        meal_plan: draft.mealPlan,
        notes: draft.notes.trim() || null,
        visible_contact_email: null,
        visible_contact_phone: null,
        visible_contact_whatsapp: null,
        status: "active",
        expires_at: checkoutExpiresAtIso(draft.checkOut, draft.selectedCity.country_code, draft.selectedCity.city_id),
        target_hotel_account_id: draft.targetHotelId || null,
      };
      const { data: newRequest, error: insertError } = await supabase
        .from("travel_requests")
        .insert(payload)
        .select("id")
        .single();
      if (insertError) {
        setError(insertError.message);
        return false;
      }

      const notifyRes = await fetch("/api/notifications/new-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId: newRequest.id }),
      });
      if (!notifyRes.ok) {
        console.warn("Notifica strutture non riuscita", await notifyRes.text());
      }
      clearTravelRequestDraft();
      setSuccess(t.forms.travelRequest.successCreated);
      setTimeout(() => router.push("/inserzionista/dashboard"), 900);
      return true;
    },
    [resumePath, router, t.forms.travelRequest.successCreated, validateForm],
  );

  useEffect(() => {
    if (cloneFromId || autoPublishStarted.current) return;
    const shouldAutoPublish = consumeTravelRequestAutoPublish() || searchParams.get("resume") === "1";
    if (!shouldAutoPublish) return;

    autoPublishStarted.current = true;
    const draft = loadTravelRequestDraft() ?? buildDraft();

    void (async () => {
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
        await publishDraft(draft);
      } catch (err) {
        setError(err instanceof Error ? err.message : t.forms.travelRequest.errorCreate);
      } finally {
        setLoading(false);
      }
    })();
  }, [buildDraft, cloneFromId, publishDraft, searchParams, t.forms.travelRequest.errorCreate]);

  useEffect(() => {
    if (!cloneFromId) {
      setPrefillLoading(false);
      return;
    }
    async function loadClone() {
      setPrefillLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData.user) {
          setError(t.forms.travelRequest.errorLoginAdvertiser);
          return;
        }
        const { data: advertiser, error: advertiserError } = await supabase
          .from("advertiser_profiles")
          .select("id")
          .eq("user_id", authData.user.id)
          .single();
        if (advertiserError || !advertiser) {
          setError(t.forms.travelRequest.errorProfileAdvertiser);
          return;
        }
        const { data: source, error: sourceError } = await supabase
          .from("travel_requests")
          .select("request_code, country_code, country_name, city_name, city_id, preferred_area, preferred_structure_type, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes")
          .eq("id", cloneFromId)
          .eq("advertiser_id", advertiser.id)
          .single();
        if (sourceError || !source) {
          setError(t.forms.travelRequest.errorRelaunchNotFound);
          return;
        }
        setCloneSourceCode(source.request_code ?? null);
        setSelectedCity(cityFromParams(source.city_id, source.city_name));
        setPreferredArea(source.preferred_area);
        setPreferredStructureType(source.preferred_structure_type as PreferredStructureType);
        setCheckIn(source.check_in);
        setCheckOut(source.check_out);
        const sourceRoomsCount = Number(source.rooms_count) || 1;
        const fallbackPerRoom = Number(source.budget) > 0 ? Number(source.budget) / sourceRoomsCount : 0;
        const clonedRooms = Array.isArray(source.room_details) && source.room_details.length
          ? (source.room_details as RoomDetail[]).map((room) => ({ ...room, budget: Number(room.budget) > 0 ? Number(room.budget) : fallbackPerRoom }))
          : roomsFromParams(String(source.rooms_count), String(source.guests_count), "0", fallbackPerRoom);
        setRooms(clonedRooms);
        setFilters({ ...emptyFilters, ...(source.preference_filters as PreferenceFilters | null) });
        setMealPlan(source.meal_plan as MealPlan);
        setNotes(source.notes ?? "");
      } catch (err) {
        setError(err instanceof Error ? err.message : t.forms.travelRequest.errorRelaunchLoad);
      } finally {
        setPrefillLoading(false);
      }
    }
    void loadClone();
  }, [cloneFromId]);
  const normalizedRooms = useMemo(() => normalizeRooms(rooms), [rooms]);
  const roomsCount = normalizedRooms.length;
  const guestsCount = normalizedRooms.reduce((total, room) => total + room.adults + room.children, 0);
  const totalBudget = normalizedRooms.reduce((total, room) => total + (Number(room.budget) || 0), 0);

  function updateRoom(index: number, patch: Partial<RoomDetail>) { setRooms((current) => current.map((room, roomIndex) => { if (roomIndex !== index) return room; const next = { ...room, ...patch }; const childrenAges = [...next.children_ages]; while (childrenAges.length < next.children) childrenAges.push(0); return { ...next, children_ages: childrenAges.slice(0, next.children) }; })); }
  function updateChildAge(roomIndex: number, childIndex: number, age: number) { setRooms((current) => current.map((room, index) => index === roomIndex ? { ...room, children_ages: Object.assign([...room.children_ages], { [childIndex]: age }) } : room)); }
  function addRoom() { setRooms((current) => [...current, { room: current.length + 1, room_type: "double", adults: 1, children: 0, children_ages: [], budget: 0 }]); }
  function removeRoom(index: number) { setRooms((current) => normalizeRooms(current.filter((_, roomIndex) => roomIndex !== index))); }
  function duplicateRoom(index: number) {
    setRooms((current) => {
      if (current.length >= 10) return current;
      const source = current[index];
      if (!source) return current;
      const copy: RoomDetail = {
        ...source,
        children_ages: [...source.children_ages],
      };
      return normalizeRooms([...current.slice(0, index + 1), copy, ...current.slice(index + 1)]);
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await publishDraft(buildDraft());
    } catch (err) {
      setError(err instanceof Error ? err.message : t.forms.travelRequest.errorCreate);
    } finally {
      setLoading(false);
    }
  }

  const cancelHref = hasSession ? "/inserzionista/dashboard" : "/";

  if (prefillLoading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.forms.travelRequest.relaunchLoading}</div>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 overflow-visible rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {cloneFromId ? (
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200">
          {t.forms.travelRequest.relaunchBanner}
        </div>
      ) : null}
      {targetHotelId ? (
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-100">
          {t.forms.travelRequest.directRequestBannerLead}{" "}
          <strong>{t.forms.travelRequest.directRequestBannerHighlight}</strong>{" "}
          {t.forms.travelRequest.directRequestBannerRest}
        </div>
      ) : null}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">{t.forms.travelRequest.searchHint}</div>
      <CityAutocomplete value={selectedCity} onChange={setSelectedCity} label={t.forms.travelRequest.whereToStay} helpText={t.forms.travelRequest.cityHelp} />
      <div className="grid gap-5 md:grid-cols-2">
        <AppDatePicker label={t.common.checkIn} value={checkIn} onChange={setCheckIn} minDate={todayInputValue()} size="lg" />
        <AppDatePicker label={t.common.checkOut} value={checkOut} onChange={setCheckOut} minDate={checkIn ? dayAfterInputValue(checkIn) : todayInputValue()} size="lg" />
        <label className={`block ${formFieldLgLabel}`}>
          {t.common.preferredArea}
          <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} required placeholder={t.forms.travelRequest.preferredAreaPlaceholder} className={formFieldLgInput} />
        </label>
      </div>
      <section className="space-y-4 rounded-3xl border border-zinc-200 p-5 dark:border-zinc-800">
        <div><h2 className="text-lg font-semibold">{t.forms.travelRequest.roomsAndGuests}</h2><p className="text-sm text-zinc-500">{formatMessage(t.forms.travelRequest.roomsGuestsTotal, { rooms: roomsCount, guests: guestsCount })}</p></div>
        {rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold">{formatMessage(t.forms.travelRequest.roomNumber, { n: roomIndex + 1 })}</h3>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => duplicateRoom(roomIndex)}
                  disabled={rooms.length >= 10}
                  className="text-sm font-semibold text-[#0f4c81] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.forms.travelRequest.duplicateRoom}
                </button>
                {rooms.length > 1 ? (
                  <button type="button" onClick={() => removeRoom(roomIndex)} className="text-sm font-semibold text-red-600">
                    {t.forms.travelRequest.removeRoom}
                  </button>
                ) : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <label className="block text-sm font-medium">
                {t.forms.travelRequest.roomType}
                <select
                  value={room.room_type}
                  onChange={(event) => updateRoom(roomIndex, { room_type: event.target.value as RoomType })}
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
                >
                  {Object.entries(roomTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium">
                {t.request.adults}
                <input
                  type="number"
                  min={1}
                  value={room.adults}
                  onChange={(event) => updateRoom(roomIndex, { adults: Number(event.target.value) })}
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
                />
              </label>
              <label className="block text-sm font-medium">
                {t.request.children}
                <input
                  type="number"
                  min={0}
                  value={room.children}
                  onChange={(event) => updateRoom(roomIndex, { children: Number(event.target.value) })}
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium">
              {t.forms.travelRequest.roomBudget}
              <div className="relative mt-2">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-zinc-400">€</span>
                <input
                  type="number"
                  min={1}
                  step="0.01"
                  value={room.budget || ""}
                  onChange={(event) => updateRoom(roomIndex, { budget: Number(event.target.value) })}
                  required
                  placeholder={t.forms.travelRequest.budgetPlaceholder}
                  className="w-full rounded-2xl border border-zinc-300 bg-white py-3 pl-9 pr-4 text-sm font-semibold dark:border-zinc-700 dark:bg-zinc-950"
                />
              </div>
            </label>
            {room.children > 0 ? (
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {Array.from({ length: room.children }).map((_, childIndex) => (
                  <label key={childIndex} className="block text-sm font-medium">
                    {formatMessage(t.forms.travelRequest.childAge, { n: childIndex + 1 })}
                    <input
                      type="number"
                      min={0}
                      max={17}
                      value={room.children_ages[childIndex] ?? 0}
                      onChange={(event) => updateChildAge(roomIndex, childIndex, Number(event.target.value))}
                      className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"
                    />
                  </label>
                ))}
              </div>
            ) : null}
            {roomIndex === rooms.length - 1 ? (
              <button
                type="button"
                onClick={addRoom}
                disabled={rooms.length >= 10}
                className="mt-4 w-full rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                {t.forms.travelRequest.addRoom}
              </button>
            ) : null}
          </div>
        ))}
      </section>
      <section className="rounded-3xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">{t.forms.travelRequest.extraFilters}</h2><p className="mt-1 text-sm text-zinc-500">{t.forms.travelRequest.extraFiltersHint}</p><div className="mt-4 grid gap-3 md:grid-cols-2">{filterLabels.map((filter) => <label key={filter.key} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-950/60"><input type="checkbox" checked={filters[filter.key]} onChange={(event) => setFilters((current) => ({ ...current, [filter.key]: event.target.checked }))} />{filter.label}</label>)}</div></section>
      <div className="grid gap-5 md:grid-cols-2"><label className="block text-sm font-medium">{t.forms.travelRequest.requestedMealPlan}<select value={mealPlan} onChange={(event) => setMealPlan(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">{Object.entries(mealPlanLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium">{t.forms.travelRequest.preferredStructureType}<select value={preferredStructureType} onChange={(event) => setPreferredStructureType(event.target.value as PreferredStructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"><option value="all">{t.values.preferredStructureAll}</option>{Object.entries(structureTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label></div>
      <label className="block text-sm font-medium">{t.common.notes}<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} placeholder={t.forms.travelRequest.notesPlaceholder} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950/60"><h2 className="font-semibold">{t.forms.travelRequest.budgetSummary}</h2><ul className="mt-3 space-y-1.5">{normalizedRooms.map((room) => <li key={room.room} className="flex items-center justify-between gap-3"><span className="text-zinc-600 dark:text-zinc-400">{formatMessage(t.forms.travelRequest.roomNumber, { n: room.room })} · {roomTypeLabels[room.room_type]}</span><span className="font-semibold">{room.budget > 0 ? formatCurrency(room.budget, locale) : "—"}</span></li>)}</ul><div className="mt-3 flex items-center justify-between gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-800"><span className="font-semibold">{t.common.budgetTotal} · {formatMessage(t.forms.travelRequest.roomsGuestsTotal, { rooms: roomsCount, guests: guestsCount })}</span><span className="text-lg font-bold">{totalBudget > 0 ? formatCurrency(totalBudget, locale) : "—"}</span></div><p className="mt-2 text-xs text-zinc-500">{t.forms.travelRequest.budgetSummaryHelp}</p></section>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">{t.forms.travelRequest.noContactsWarning}</div>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}{success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}
      <div className="flex flex-wrap gap-3"><button disabled={loading} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">{loading ? t.forms.travelRequest.creating : t.forms.travelRequest.publishListing}</button><Link href={cancelHref} className="rounded-full border px-6 py-3 text-sm font-semibold">{t.common.cancel}</Link></div>
    </form>
  );
}
