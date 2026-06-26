const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: string) {
  return UUID_RE.test(value.trim());
}

/** Rimuove caratteri che rompono i filtri PostgREST `ilike`. */
export function sanitizeSearchTerm(input: string) {
  return input
    .trim()
    .replace(/[%_,"\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeSearchTerm(input: string) {
  return sanitizeSearchTerm(input)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

/** Token principale per query DB (preferisce la parola più lunga). */
export function primarySearchToken(input: string) {
  const raw = input.trim();
  if (!raw) return "";
  if (isUuid(raw)) return raw;
  const tokens = tokenizeSearchTerm(raw);
  if (tokens.length === 0) return sanitizeSearchTerm(raw);
  return tokens.sort((a, b) => b.length - a.length)[0] ?? sanitizeSearchTerm(raw);
}

export function matchesAllTokens(values: Array<string | null | undefined>, tokens: string[]) {
  if (tokens.length === 0) return true;
  const haystack = values
    .map((value) => (value ?? "").trim().toLowerCase())
    .filter(Boolean)
    .join(" ");
  if (!haystack) return false;
  return tokens.every((token) => haystack.includes(token.toLowerCase()));
}

export function buildOrFilter(
  term: string,
  textFields: string[],
  idFields: string[] = ["id"],
) {
  const raw = term.trim();
  if (!raw) return null;

  if (isUuid(raw)) {
    const fields = [...new Set([...idFields, "user_id"])];
    return fields.map((field) => `${field}.eq.${raw}`).join(",");
  }

  const dbTerm = primarySearchToken(raw);
  const sanitized = sanitizeSearchTerm(dbTerm);
  if (!sanitized) return null;

  const pattern = `%${sanitized}%`.replace(/"/g, '""');
  return textFields.map((field) => `${field}.ilike."${pattern}"`).join(",");
}
