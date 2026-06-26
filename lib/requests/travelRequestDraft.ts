import type { MealPlan, PreferredStructureType } from "@/types/app";
import type { WorldCity } from "@/lib/constants/world-cities";

export type TravelRequestDraftRoom = {
  room: number;
  room_type: "double" | "twin" | "triple" | "quadruple";
  adults: number;
  children: number;
  children_ages: number[];
  budget: number;
};

export type TravelRequestDraftFilters = {
  connecting_rooms: boolean;
  disabled_access: boolean;
  pool: boolean;
  spa: boolean;
  bathtub: boolean;
  garage: boolean;
  beach: boolean;
  pets_allowed: boolean;
};

export type TravelRequestDraft = {
  selectedCity: WorldCity;
  preferredArea: string;
  preferredStructureType: PreferredStructureType;
  checkIn: string;
  checkOut: string;
  rooms: TravelRequestDraftRoom[];
  filters: TravelRequestDraftFilters;
  mealPlan: MealPlan;
  notes: string;
  targetHotelId: string | null;
};

const STORAGE_KEY = "hotelsdrop.travel-request-draft";
const AUTO_PUBLISH_KEY = "hotelsdrop.travel-request-auto-publish";

export function saveTravelRequestDraft(draft: TravelRequestDraft) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export function loadTravelRequestDraft(): TravelRequestDraft | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TravelRequestDraft;
  } catch {
    return null;
  }
}

export function clearTravelRequestDraft() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(AUTO_PUBLISH_KEY);
}

export function markTravelRequestAutoPublish() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(AUTO_PUBLISH_KEY, "1");
}

export function consumeTravelRequestAutoPublish() {
  if (typeof window === "undefined") return false;
  const value = sessionStorage.getItem(AUTO_PUBLISH_KEY) === "1";
  sessionStorage.removeItem(AUTO_PUBLISH_KEY);
  return value;
}

export function buildTravelRequestResumePath(pathname: string, search: string) {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  params.set("resume", "1");
  const query = params.toString();
  return `${pathname}?${query}`;
}
