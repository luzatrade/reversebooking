export interface NationEntry {
  code: string;
  name: string;
  iso3: string;
}

export interface DocumentTypeEntry {
  code: string;
  name: string;
}

export interface ComuneEntry {
  code: string;
  name: string;
  province: string;
  active?: boolean;
}

let nationsCache: NationEntry[] | null = null;
let documentTypesCache: DocumentTypeEntry[] | null = null;
let comuniCache: ComuneEntry[] | null = null;

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json() as Promise<T>;
}

export async function loadNations(): Promise<NationEntry[]> {
  if (!nationsCache) {
    nationsCache = await fetchJson<NationEntry[]>('/data/nations.json');
  }
  return nationsCache;
}

export async function loadDocumentTypes(): Promise<DocumentTypeEntry[]> {
  if (!documentTypesCache) {
    documentTypesCache = await fetchJson<DocumentTypeEntry[]>('/data/document-types.json');
  }
  return documentTypesCache;
}

export async function loadComuni(): Promise<ComuneEntry[]> {
  if (!comuniCache) {
    comuniCache = await fetchJson<ComuneEntry[]>('/data/comuni.json');
  }
  return comuniCache;
}

export function findNationByIso3(nations: NationEntry[], iso3: string): NationEntry | undefined {
  return nations.find((n) => n.iso3 === iso3.toUpperCase());
}

export function searchComuni(comuni: ComuneEntry[], query: string, limit = 20): ComuneEntry[] {
  const q = query.trim().toUpperCase();
  const filtered = q
    ? comuni.filter((c) => c.name.includes(q) || c.province.includes(q) || c.code.includes(q))
    : comuni.filter((c) => c.active !== false);
  return filtered
    .sort((a, b) => {
      const aActive = a.active !== false ? 0 : 1;
      const bActive = b.active !== false ? 0 : 1;
      if (aActive !== bActive) return aActive - bActive;
      return a.name.localeCompare(b.name, 'it');
    })
    .slice(0, limit);
}

export function searchNations(nations: NationEntry[], query: string, limit = 20): NationEntry[] {
  const q = query.trim().toUpperCase();
  if (!q) return nations.slice(0, limit);
  return nations
    .filter((n) => n.name.includes(q) || n.iso3.includes(q) || n.code.includes(q))
    .slice(0, limit);
}

export type IssuePlaceOption = {
  value: string;
  label: string;
  meta: string;
  kind: 'comune' | 'nation';
};

/** Luogo rilascio documento: comune (CIE) o stato (passaporto). */
export function searchIssuePlaces(
  comuni: ComuneEntry[],
  nations: NationEntry[],
  query: string,
  limit = 20,
): IssuePlaceOption[] {
  const q = query.trim().toUpperCase();
  const comuneMatches = (q ? comuni.filter((c) => c.name.includes(q) || c.province.includes(q)) : comuni.slice(0, 10))
    .slice(0, Math.ceil(limit / 2))
    .map((c) => ({
      value: c.code,
      label: c.name,
      meta: c.province,
      kind: 'comune' as const,
    }));

  const nationMatches = searchNations(nations, query, limit - comuneMatches.length).map((n) => ({
    value: n.code,
    label: n.name,
    meta: n.iso3,
    kind: 'nation' as const,
  }));

  return [...comuneMatches, ...nationMatches].slice(0, limit);
}

export const ITALY_CODE = '100000100';
