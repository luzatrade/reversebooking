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
  if (!q) return comuni.slice(0, limit);
  return comuni
    .filter((c) => c.name.includes(q) || c.province.includes(q) || c.code.includes(q))
    .slice(0, limit);
}

export function searchNations(nations: NationEntry[], query: string, limit = 20): NationEntry[] {
  const q = query.trim().toUpperCase();
  if (!q) return nations.slice(0, limit);
  return nations
    .filter((n) => n.name.includes(q) || n.iso3.includes(q) || n.code.includes(q))
    .slice(0, limit);
}

export const ITALY_CODE = '100000100';
