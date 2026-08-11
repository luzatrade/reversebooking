/** Slug SEO — stessa logica di lib/seo/slug.ts (per script Node .mjs). */

export function slugifySeo(value, maxLength = 72) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, maxLength) || "struttura";
}

export function buildStructureSlugBase(name, cityName) {
  return `${slugifySeo(name, 48)}-${slugifySeo(cityName, 32)}`;
}

export function resolveUniqueSlug(base, used, reserved = null) {
  const normalizedBase = slugifySeo(base.replace(/^-+|-+$/g, ""), 96) || "struttura";
  if (!used.has(normalizedBase) && normalizedBase !== reserved) return normalizedBase;

  for (let index = 2; index < 10_000; index += 1) {
    const candidate = `${normalizedBase}-${index}`;
    if (!used.has(candidate) && candidate !== reserved) return candidate;
  }

  throw new Error(`Impossibile generare slug univoco per "${base}"`);
}

const MIN_DESCRIPTION_LENGTH = 80;

function meetsDescriptionRule(row) {
  const it = (row.description ?? "").trim();
  const en = (row.description_en ?? "").trim();
  if (!it && !en) return false;
  return it.length >= MIN_DESCRIPTION_LENGTH || en.length >= MIN_DESCRIPTION_LENGTH;
}

export function isOnboardingSeoIndexable(row) {
  const statuses = new Set(["unclaimed", "claimed", "pending_verification"]);
  if (!row.nome?.trim() || !row.city_name?.trim()) return false;
  if (!row.indirizzo?.trim()) return false;
  if (!row.main_photo_url?.trim()) return false;
  if (!meetsDescriptionRule(row)) return false;
  if (!statuses.has(row.status ?? "unclaimed")) return false;
  return true;
}

export function isHotelAccountSeoIndexable(row) {
  if (row.provider_kind === "agency") return false;
  if (row.account_status !== "active" || !row.subscription_active) return false;
  if (!row.property_name?.trim() || !row.city_name?.trim()) return false;
  if (!row.full_address?.trim()) return false;
  if (!row.main_photo_url?.trim()) return false;
  if (!meetsDescriptionRule(row)) return false;
  return true;
}
