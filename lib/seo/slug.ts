/** Slug URL per pagine struttura: `{nome}-{città}` con suffisso numerico se collisione. */

export function slugifySeo(value: string | null | undefined, maxLength = 72) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, maxLength) || "struttura";
}

export function buildStructureSlugBase(name: string | null | undefined, cityName: string | null | undefined) {
  const nameSlug = slugifySeo(name, 48);
  const citySlug = slugifySeo(cityName, 32);
  return `${nameSlug}-${citySlug}`;
}

export function resolveUniqueSlug(base: string, used: ReadonlySet<string>, reserved?: string | null) {
  const normalizedBase = slugifySeo(base.replace(/^-+|-+$/g, ""), 96) || "struttura";
  if (!used.has(normalizedBase) && normalizedBase !== reserved) {
    return normalizedBase;
  }

  for (let index = 2; index < 10_000; index += 1) {
    const candidate = `${normalizedBase}-${index}`;
    if (!used.has(candidate) && candidate !== reserved) {
      return candidate;
    }
  }

  throw new Error(`Impossibile generare slug univoco per "${base}"`);
}

export function structurePublicPath(slug: string) {
  return `/hotel/${slug}`;
}
