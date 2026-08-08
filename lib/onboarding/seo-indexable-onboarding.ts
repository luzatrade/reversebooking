/** Ricalcolo seo_indexable onboarding (allineato a scripts/lib/seo-slug.mjs). */

const MIN_DESCRIPTION_LENGTH = 80;
const PUBLIC_STATUSES = new Set(["unclaimed", "claimed", "pending_verification"]);

export type OnboardingSeoRow = {
  nome?: string | null;
  city_name?: string | null;
  indirizzo?: string | null;
  main_photo_url?: string | null;
  status?: string | null;
  description?: string | null;
  description_en?: string | null;
};

function meetsDescriptionRule(row: OnboardingSeoRow) {
  const it = (row.description ?? "").trim();
  const en = (row.description_en ?? "").trim();
  if (!it && !en) return true;
  return it.length >= MIN_DESCRIPTION_LENGTH || en.length >= MIN_DESCRIPTION_LENGTH;
}

export function computeOnboardingSeoIndexable(row: OnboardingSeoRow): boolean {
  if (!row.nome?.trim() || !row.city_name?.trim()) return false;
  if (!row.indirizzo?.trim()) return false;
  if (!row.main_photo_url?.trim()) return false;
  if (!meetsDescriptionRule(row)) return false;
  if (!PUBLIC_STATUSES.has(row.status ?? "unclaimed")) return false;
  return true;
}
