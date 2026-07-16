import { createServiceRoleClient } from "@/lib/supabase/admin";
import {
  buildOrFilter,
  isUuid,
  matchesAllTokens,
  searchPatternTerm,
  sortBySearchRelevance,
  tokenizeSearchTerm,
} from "@/lib/admin/query";
import { resolveCanonicalCityId } from "@/lib/constants/world-city-helpers";
import { majorWorldCities } from "@/lib/constants/world-cities";

const REGISTERED_FIELDS = ["property_name", "city_name", "full_address", "specific_area"] as const;
const ONBOARDING_FIELDS = ["nome", "city_name", "indirizzo"] as const;

/** Parole troppo generiche per una query DB da sole (es. "hotel" → migliaia di match). */
const GENERIC_STRUCTURE_TOKENS = new Set([
  "hotel",
  "b",
  "bb",
  "bed",
  "and",
  "breakfast",
  "casa",
  "room",
  "rooms",
  "house",
  "guest",
  "residence",
  "relais",
  "suite",
  "suites",
  "pensione",
  "albergo",
  "affittacamere",
  "agriturismo",
  "hostel",
  "via",
  "viale",
  "corso",
  "piazza",
  "strada",
]);

export type CatalogStructureHit = {
  id: string;
  name: string;
  cityName: string;
  cityId: string | null;
  countryCode: string;
  address: string | null;
  kind: "registered" | "onboarding";
};

function sanitizeSearchTerm(input: string) {
  return input
    .trim()
    .replace(/[%_,"\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function dbSearchTerms(term: string): string[] {
  const tokens = tokenizeSearchTerm(term);
  const phrase = sanitizeSearchTerm(term);
  const terms: string[] = [];

  if (tokens.length >= 2 && phrase.length >= 4) {
    terms.push(phrase);
  }

  for (const token of tokens) {
    if (GENERIC_STRUCTURE_TOKENS.has(token.toLowerCase())) continue;
    if (!terms.includes(token)) terms.push(token);
  }

  if (terms.length === 0) {
    const fallback = searchPatternTerm(term) || tokens.sort((a, b) => b.length - a.length)[0];
    if (fallback) terms.push(fallback);
  }

  return terms;
}

function cityMeta(cityName: string) {
  const cityId = resolveCanonicalCityId({ cityName });
  const catalogCity = cityId ? majorWorldCities.find((city) => city.city_id === cityId) : undefined;
  const countryCode = catalogCity?.country_code ?? (cityId?.includes("-") ? cityId.split("-")[0]! : "IT");
  return { cityId: cityId ?? null, countryCode };
}

async function queryOnboardingRows(
  supabase: NonNullable<ReturnType<typeof createServiceRoleClient>>,
  dbTerms: string[],
  fetchLimit: number,
) {
  const byId = new Map<string, { id: string; nome: string; city_name: string; indirizzo: string | null }>();

  for (const dbTerm of dbTerms) {
    const filter = buildOrFilter(dbTerm, [...ONBOARDING_FIELDS], ["id"]);
    if (!filter) continue;

    const { data, error } = await supabase
      .from("onboarding_hotels")
      .select("id, nome, city_name, indirizzo")
      .or(filter)
      .order("nome", { ascending: true })
      .limit(fetchLimit);

    if (error) throw error;
    for (const row of data ?? []) {
      byId.set(row.id, row);
    }
  }

  return [...byId.values()];
}

async function queryRegisteredRows(
  supabase: NonNullable<ReturnType<typeof createServiceRoleClient>>,
  dbTerms: string[],
  fetchLimit: number,
) {
  const byId = new Map<
    string,
    {
      id: string;
      property_name: string;
      city_name: string;
      full_address: string | null;
      specific_area: string | null;
    }
  >();

  for (const dbTerm of dbTerms) {
    const filter = buildOrFilter(dbTerm, [...REGISTERED_FIELDS], ["id"]);
    if (!filter) continue;

    const { data, error } = await supabase
      .from("hotel_accounts")
      .select("id, property_name, city_name, full_address, specific_area")
      .eq("account_status", "active")
      .eq("subscription_active", true)
      .or(filter)
      .order("property_name", { ascending: true })
      .limit(fetchLimit);

    if (error) throw error;
    for (const row of data ?? []) {
      byId.set(row.id, row);
    }
  }

  return [...byId.values()];
}

export async function searchCatalogStructures(query: string, limit = 6): Promise<CatalogStructureHit[]> {
  const term = query.trim();
  if (term.length < 2 && !isUuid(term)) return [];

  const supabase = createServiceRoleClient();
  if (!supabase) return [];

  const tokens = tokenizeSearchTerm(term);
  const dbTerms = isUuid(term) ? [term] : dbSearchTerms(term);
  if (!dbTerms.length) return [];

  const fetchLimit = Math.max(limit * 4, 24);
  const tokenFilter = tokens.length > 0 ? tokens : dbTerms;

  const [registeredRows, onboardingRows] = await Promise.all([
    queryRegisteredRows(supabase, dbTerms, fetchLimit),
    queryOnboardingRows(supabase, dbTerms, fetchLimit),
  ]);

  const registeredHits: CatalogStructureHit[] = registeredRows
    .filter((row) =>
      matchesAllTokens([row.property_name, row.city_name, row.full_address, row.specific_area], tokenFilter),
    )
    .map((row) => {
      const { cityId, countryCode } = cityMeta(row.city_name);
      return {
        id: row.id,
        name: row.property_name,
        cityName: row.city_name,
        cityId,
        countryCode,
        address: row.full_address ?? row.specific_area ?? null,
        kind: "registered" as const,
      };
    });

  const onboardingHits: CatalogStructureHit[] = onboardingRows
    .filter((row) => matchesAllTokens([row.nome, row.city_name, row.indirizzo], tokenFilter))
    .map((row) => {
      const { cityId, countryCode } = cityMeta(row.city_name);
      return {
        id: row.id,
        name: row.nome,
        cityName: row.city_name,
        cityId,
        countryCode,
        address: row.indirizzo,
        kind: "onboarding" as const,
      };
    });

  const merged = sortBySearchRelevance([...registeredHits, ...onboardingHits], term, (hit) => [
    hit.name,
    hit.address,
    hit.cityName,
  ]);

  const seen = new Set<string>();
  const deduped: CatalogStructureHit[] = [];
  for (const hit of merged) {
    const key = `${hit.kind}:${hit.id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(hit);
    if (deduped.length >= limit) break;
  }

  return deduped;
}
