export type AdvertiserPublicName = {
  first_name?: string | null;
  last_name?: string | null;
};

export function oneAdvertiserProfile<T>(value: T | T[] | null | undefined): T | null {
  if (!value) return null;
  return Array.isArray(value) ? (value[0] ?? null) : value;
}

export function formatAdvertiserPublicName(profile: AdvertiserPublicName | null | undefined): string | null {
  if (!profile) return null;
  const name = [profile.first_name, profile.last_name]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" ")
    .trim();
  return name || null;
}
