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

/** Termine usato per il pattern `ilike`: frase intera se multi-parola, altrimenti token principale. */
export function searchPatternTerm(input: string) {
  const raw = input.trim();
  if (!raw) return "";
  if (isUuid(raw)) return raw;

  const sanitizedFull = sanitizeSearchTerm(raw);
  const tokens = tokenizeSearchTerm(raw);
  if (tokens.length >= 2 && sanitizedFull.length >= 4) {
    return sanitizedFull;
  }

  return primarySearchToken(raw) || sanitizedFull;
}

export function rankSearchMatch(query: string, values: Array<string | null | undefined>) {
  const normalizedQuery = sanitizeSearchTerm(query).toLowerCase();
  if (!normalizedQuery) return 0;

  const joined = values
    .map((value) => (value ?? "").trim().toLowerCase())
    .filter(Boolean)
    .join(" ");
  if (!joined) return 0;

  const primary = values.find((value) => (value ?? "").trim())?.trim().toLowerCase() ?? joined;
  if (primary === normalizedQuery) return 100;
  if (primary.startsWith(normalizedQuery)) return 90;
  if (joined.includes(normalizedQuery)) return 80;

  const tokens = tokenizeSearchTerm(query);
  if (tokens.length > 0 && tokens.every((token) => joined.includes(token.toLowerCase()))) {
    return 60 + Math.min(tokens.length * 5, 20);
  }

  return 0;
}

export function sortBySearchRelevance<T>(
  items: T[],
  query: string,
  valuesFor: (item: T) => Array<string | null | undefined>,
) {
  return [...items].sort((left, right) => rankSearchMatch(query, valuesFor(right)) - rankSearchMatch(query, valuesFor(left)));
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

  const sanitized = searchPatternTerm(raw);
  if (!sanitized) return null;

  const pattern = `%${sanitized}%`.replace(/"/g, '""');
  return textFields.map((field) => `${field}.ilike."${pattern}"`).join(",");
}
