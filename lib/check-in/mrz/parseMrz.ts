import { parse } from 'mrz';
import { extractMRZData, type MRZResult } from 'web-mrz-reader';
import type { MrzExtractedData } from '@/types/check-in';

const MRZ_CHARS = /[^A-Z0-9<]/g;
const MRZ_START = /[PIAC][A-Z<][A-Z]{3}[A-Z0-9<]+/;

export interface MrzParseCandidate {
  data: MrzExtractedData;
  score: number;
  rawMrz: string;
}

const MIN_ACCEPT_SCORE = 6;

/**
 * Parser MRZ con punteggio — accetta solo risultati plausibili (check digit / campi minimi).
 */
export function parseMrzString(rawMrz: string): MrzExtractedData | null {
  const best = parseMrzCandidates(rawMrz)[0];
  return best && best.score >= MIN_ACCEPT_SCORE ? best.data : null;
}

export function parseMrzCandidates(rawMrz: string): MrzParseCandidate[] {
  const candidates: MrzParseCandidate[] = [];

  const push = (data: MrzExtractedData | null, raw: string, validationOk: boolean) => {
    if (!data) return;
    const fixed = applyNameFixes({ ...data, rawMrz: raw });
    const score = scoreMrz(fixed, raw, validationOk);
    candidates.push({ data: fixed, score, rawMrz: raw });
  };

  const extracted = extractMRZData(rawMrz);
  if (extracted && typeof extracted.parsed !== 'string') {
    const validationOk = isValidationOk(extracted.parsed);
    push(mapWebMrzResult(extracted.parsed, extracted.raw), extracted.raw, validationOk);
  }

  const manual = parseMrzBlobManual(rawMrz);
  if (manual) push(manual, manual.rawMrz, false);

  const lines = extractCandidateLines(rawMrz);
  for (const group of buildLineGroups(lines)) {
    const parsed = tryParseGroup(group);
    if (parsed) push(parsed, parsed.rawMrz, false);
  }

  return candidates.sort((a, b) => b.score - a.score);
}

function isValidationOk(parsed: MRZResult): boolean {
  return 'Validation' in parsed && parsed.Validation.isValid === true;
}

function scoreMrz(data: MrzExtractedData, raw: string, validationOk: boolean): number {
  let score = 0;
  if (validationOk) score += 12;

  const flat = raw.replace(/\s/g, '');
  if (flat.length >= 72) score += 3;
  if (flat.includes('<<')) score += 2;

  if (data.surname.length >= 2) score += 3;
  if (data.givenNames.length >= 2) score += 2;
  if (/^[A-Z0-9]{6,12}$/.test(data.documentNumber)) score += 3;
  if (/^\d{4}-\d{2}-\d{2}$/.test(data.birthDate)) score += 3;
  if (data.nationality.length === 3) score += 1;

  return score;
}

function parseMrzBlobManual(raw: string): MrzExtractedData | null {
  const flat = raw.toUpperCase().replace(/(\r\n|\n|\r|\s)/gm, '').replace(MRZ_CHARS, '');
  const match = flat.match(MRZ_START);
  if (!match?.[0]) return null;

  let blob = match[0];
  if (blob.length >= 90) blob = blob.slice(0, 90);
  else if (blob.length >= 88) blob = blob.slice(0, 88);
  else if (blob.length >= 72) blob = blob.slice(0, 72);
  else return null;

  const lines =
    blob.length === 90
      ? [blob.slice(0, 30), blob.slice(30, 60), blob.slice(60, 90)]
      : blob.length === 88
        ? [blob.slice(0, 44), blob.slice(44, 88)]
        : [blob.slice(0, 36), blob.slice(36, 72)];

  return tryParseGroup(lines);
}

function mapWebMrzResult(parsed: MRZResult, rawMrz: string): MrzExtractedData | null {
  const surname = parsed.Surname.trim();
  const givenNames = parsed['Given Names'].trim();
  const documentNumber = (
    'Document Number' in parsed ? parsed['Document Number'] : parsed['Passport Number']
  ).trim();

  if (!surname || !documentNumber) return null;

  return {
    documentNumber,
    surname,
    givenNames,
    nationality: parsed.Nationality.trim(),
    birthDate: formatMrzDate(parsed['Date of Birth']),
    sex: normalizeSex(parsed.Gender),
    expiryDate: formatMrzExpiryDate(parsed['Expiration Date']) || undefined,
    documentType: blobLengthToFormat(rawMrz.replace(/\s/g, '').length),
    rawMrz,
  };
}

function blobLengthToFormat(len: number): string {
  if (len >= 90) return 'TD1';
  if (len >= 88) return 'TD3';
  if (len >= 72) return 'TD2';
  return 'MRZ';
}

function extractCandidateLines(raw: string): string[] {
  return raw
    .toUpperCase()
    .replace(/[«»‹›]/g, '<')
    .split(/\r?\n/)
    .map((line) => {
      let cleaned = line
        .replace(/\s+/g, '')
        .replace(/[|]/g, 'I')
        .replace(MRZ_CHARS, '');
      // O→0 solo sulle righe dati (non sulla riga nomi COGNOME<<NOME)
      if (!cleaned.includes('<<')) {
        cleaned = cleaned.replace(/O/g, '0');
      }
      return cleaned;
    })
    .filter((line) => line.length >= 20 && line.includes('<'));
}

function buildLineGroups(lines: string[]): string[][] {
  const groups: string[][] = [];
  for (let i = 0; i < lines.length; i++) {
    if (i + 2 < lines.length) groups.push([lines[i]!, lines[i + 1]!, lines[i + 2]!]);
    if (i + 1 < lines.length) groups.push([lines[i]!, lines[i + 1]!]);
  }
  if (lines.length === 1) groups.push(lines);
  return groups;
}

function tryParseGroup(lines: string[]): MrzExtractedData | null {
  const lengths = lines.length === 3 ? [30] : [44, 36, 30];

  for (const len of lengths) {
    const sized = lines.map((line) => padOrTrim(line, len));
    const result = parseSized(sized);
    if (result) return result;
  }

  return parseSized(lines);
}

function padOrTrim(line: string, length: number): string {
  if (line.length === length) return line;
  if (line.length > length) return line.slice(0, length);
  return line.padEnd(length, '<');
}

function parseSized(lines: string[]): MrzExtractedData | null {
  try {
    const result = parse(lines, { autocorrect: true });
    const mapped = mapResult(result, lines.join('\n'));
    // Accetta anche check digit imperfect se cognome + n. documento sono presenti
    // (scoreMrz preferisce comunque i risultati con Validation OK)
    if (!result.valid && !mapped) return null;
    if (!result.valid && mapped) return mapped;
    return mapped;
  } catch {
    return null;
  }
}

function mapResult(
  result: ReturnType<typeof parse>,
  rawMrz: string,
): MrzExtractedData | null {
  const fields = result.fields;
  const surname = fields.lastName ?? '';
  const givenNames = fields.firstName ?? '';
  const documentNumber = fields.documentNumber ?? result.documentNumber ?? '';

  if (!surname || !documentNumber) return null;

  return {
    documentNumber,
    surname,
    givenNames,
    nationality: fields.nationality ?? '',
    birthDate: fields.birthDate ? formatMrzDate(fields.birthDate) : '',
    sex: normalizeSex(fields.sex ?? undefined),
    expiryDate: fields.expirationDate ? formatMrzExpiryDate(fields.expirationDate) : undefined,
    documentType: result.format,
    rawMrz,
  };
}

function formatMrzExpiryDate(mrzDate: string): string {
  if (!/^\d{6}$/.test(mrzDate)) return '';
  const yy = parseInt(mrzDate.slice(0, 2), 10);
  const mm = mrzDate.slice(2, 4);
  const dd = mrzDate.slice(4, 6);
  const century = yy >= 80 ? 1900 : 2000;
  return `${century + yy}-${mm}-${dd}`;
}

function formatMrzDate(mrzDate: string): string {
  if (!/^\d{6}$/.test(mrzDate)) return '';
  const yy = parseInt(mrzDate.slice(0, 2), 10);
  const mm = mrzDate.slice(2, 4);
  const dd = mrzDate.slice(4, 6);
  const month = parseInt(mm, 10);
  const day = parseInt(dd, 10);
  if (month < 1 || month > 12 || day < 1 || day > 31) return '';
  const century = yy >= 30 ? 1900 : 2000;
  return `${century + yy}-${mm}-${dd}`;
}

function normalizeSex(sex: string | undefined): 'M' | 'F' | 'X' {
  const s = sex?.toLowerCase() ?? '';
  if (s === 'male' || s === 'm') return 'M';
  if (s === 'female' || s === 'f') return 'F';
  return 'X';
}

/** Riga 3 TD1: COGNOME<<NOME — preferisce la variante con nome più completo */
function extractNamesFromMrz(rawMrz: string): { surname: string; givenNames: string } | null {
  const lines = extractCandidateLines(rawMrz);
  let best: { surname: string; givenNames: string; givenLen: number } | null = null;

  for (const line of lines) {
    if (!line.includes('<<')) continue;
    const match = line.match(/([A-Z]+)<<([A-Z]+)/);
    if (!match?.[1] || !match[2]) continue;

    const surname = sanitizeMrzSurname(match[1]);
    const givenNames = sanitizeMrzGivenName(match[2].replace(/</g, '').trim());
    if (!best || givenNames.length > best.givenLen) {
      best = { surname, givenNames, givenLen: givenNames.length };
    }
  }

  return best ? { surname: best.surname, givenNames: best.givenNames } : null;
}

/** OCR aggiunge E/L/I/1 sul bordo sinistro della riga 3 */
function sanitizeMrzSurname(surname: string): string {
  let s = surname.toUpperCase().trim();
  if (s.length >= 6 && /^[ELI1|]([A-Z]{5,})$/.test(s)) {
    s = s.slice(1);
  }
  return s;
}

/** OCR tronca nomi italiani comuni: LUCIAN → LUCIANO, GIULIAN → GIULIANO */
function sanitizeMrzGivenName(given: string): string {
  let name = given.toUpperCase().trim();
  if (name.length >= 6 && /IAN$/.test(name) && !/IANO$/.test(name)) {
    name += 'O';
  }
  return name;
}

function applyNameFixes(data: MrzExtractedData): MrzExtractedData {
  const fromLine = extractNamesFromMrz(data.rawMrz);
  const surname = fromLine?.surname || sanitizeMrzSurname(data.surname);
  const givenNames = fromLine?.givenNames || sanitizeMrzGivenName(data.givenNames);

  return { ...data, surname, givenNames };
}
