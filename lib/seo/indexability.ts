/** Regole quality gate per indicizzazione Google (anti thin content). */

const PUBLIC_ONBOARDING_STATUSES = new Set(["unclaimed", "claimed", "pending_verification"]);

export type OnboardingIndexRow = {
  nome?: string | null;
  city_name?: string | null;
  indirizzo?: string | null;
  main_photo_url?: string | null;
  status?: string | null;
};

export type HotelAccountIndexRow = {
  property_name?: string | null;
  city_name?: string | null;
  full_address?: string | null;
  main_photo_url?: string | null;
  account_status?: string | null;
  subscription_active?: boolean | null;
  provider_kind?: string | null;
};

export function isOnboardingSeoIndexable(row: OnboardingIndexRow) {
  if (!row.nome?.trim() || !row.city_name?.trim()) return false;
  if (!row.indirizzo?.trim() && !row.main_photo_url?.trim()) return false;
  if (!PUBLIC_ONBOARDING_STATUSES.has(row.status ?? "unclaimed")) return false;
  return true;
}

export function isHotelAccountSeoIndexable(row: HotelAccountIndexRow) {
  if (row.provider_kind === "agency") return false;
  if (row.account_status !== "active" || !row.subscription_active) return false;
  if (!row.property_name?.trim() || !row.city_name?.trim()) return false;
  if (!row.full_address?.trim() && !row.main_photo_url?.trim()) return false;
  return true;
}
