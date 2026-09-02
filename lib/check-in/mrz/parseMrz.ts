import { parse } from 'mrz';
import { validateItalianCieDocumentNumber } from '@/lib/check-in/mrz/cieCheckDigit';
import { extractMRZData, type MRZResult } from 'web-mrz-reader';
import type { MrzExtractedData, MrzReviewField } from '@/types/check-in';

const MRZ_CHARS = /[^A-Z0-9<]/g;
const MRZ_START = /[PIAC][A-Z<][A-Z]{3}[A-Z0-9<]+/;

export interface MrzParseCandidate {
  data: MrzExtractedData;
  score: number;
  rawMrz: string;
}

const MIN_ACCEPT_SCORE = 6;

function formatGivenNames(raw: string): string {
  return raw
    .replace(/</g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function pickBestMrzFromCandidates(candidates: MrzParseCandidate[]): MrzExtractedData | null {
  if (candidates.length === 0) return null;

  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  const best = sorted[0]!;
  if (best.score < MIN_ACCEPT_SCORE) return null;

  const merged: MrzExtractedData = { ...best.data };

  for (const c of sorted.slice(1, 6)) {
    if (c.score < best.score - 2) break;
    if (!merged.birthDate && c.data.birthDate) merged.birthDate = c.data.birthDate;
    if (!merged.expiryDate && c.data.expiryDate) merged.expiryDate = c.data.expiryDate;
    if (merged.sex === 'X' && c.data.sex !== 'X') merged.sex = c.data.sex;
    if (!merged.nationality && c.data.nationality) merged.nationality = c.data.nationality;
    if (
      c.data.givenNames.length > merged.givenNames.length ||
      (merged.givenNames.length < 3 && c.data.givenNames.length >= 3)
    ) {
      merged.givenNames = c.data.givenNames;
    }
    if (c.data.surname.length > merged.surname.length) merged.surname = c.data.surname;
    if (c.data.documentNumber.length > merged.documentNumber.length) {
      merged.documentNumber = c.data.documentNumber;
    }
  }

  return applyNameFixes(merged);
}
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
  if (data.givenNames.length >= 6) score += 2;
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
  const givenNames = formatGivenNames(parsed['Given Names']);
  const format = blobLengthToFormat(rawMrz.replace(/\s/g, '').length);
  const fromLine = format === 'TD1' ? extractTd1DocumentNumber(rawMrz) : null;
  const documentNumber = (
    fromLine ??
    ('Document Number' in parsed ? parsed['Document Number'] : parsed['Passport Number'])
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
  const givenNames = formatGivenNames(fields.firstName ?? '');
  const documentNumber = formatDocumentNumber(result, fields, rawMrz);

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

/** TD1 (CIE): il numero stampato sulla carta include la check digit (es. CB19477AA9) */
function formatDocumentNumber(
  result: ReturnType<typeof parse>,
  fields: ReturnType<typeof parse>['fields'],
  rawMrz: string,
): string {
  if (result.format === 'TD1') {
    const fromLine = extractTd1DocumentNumber(rawMrz);
    if (fromLine) return fromLine;
  }

  let num = (fields.documentNumber ?? result.documentNumber ?? '').replace(/<+$/, '');
  const checkDigit = fields.documentNumberCheckDigit;
  if (
    (result.format === 'TD1' || result.format === 'TD2') &&
    checkDigit &&
    /^[0-9A-Z]$/.test(checkDigit) &&
    !num.endsWith(checkDigit)
  ) {
    num += checkDigit;
  }
  return num;
}

function extractTd1DocumentNumber(rawMrz: string): string | null {
  const line1 = rawMrz.split(/\r?\n/)[0];
  if (!line1) return null;
  const l = padMrzLine(line1);
  if (!/^[PIAC]/.test(l)) return null;
  const num = l.slice(5, 15).replace(/<+$/, '');
  return /^[A-Z0-9]{8,10}$/.test(num) ? num : null;
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
    const match = line.match(/([A-Z]+)<<([A-Z<]+)/);
    if (!match?.[1] || !match[2]) continue;

    const surname = sanitizeMrzSurname(match[1]);
    const givenNames = sanitizeMrzGivenName(formatGivenNames(match[2]));
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

export function applyNameFixes(data: MrzExtractedData): MrzExtractedData {
  const fromLine = extractNamesFromMrz(data.rawMrz);
  const surname = fromLine?.surname || sanitizeMrzSurname(data.surname);
  const givenNames = fromLine?.givenNames || sanitizeMrzGivenName(data.givenNames);

  return enrichMrzValidation({ ...data, surname, givenNames });
}

export type MrzLineIndex = 0 | 1 | 2;

function padMrzLine(line: string, len = 30): string {
  const cleaned = line.toUpperCase().replace(/\s+/g, '').replace(MRZ_CHARS, '');
  if (cleaned.length >= len) return cleaned.slice(0, len);
  return cleaned.padEnd(len, '<');
}

/** Punteggio euristico per singola riga TD1 (30 char) */
export function scoreMrzLine(line: string, lineIndex: MrzLineIndex): number {
  const l = padMrzLine(line);
  let score = 0;

  if (lineIndex === 0) {
    if (/^[PIAC][A-Z<]/.test(l)) score += 4;
    if (l.slice(2, 5) === 'ITA') score += 4;
    if (/^[PIAC]<ITA[A-Z0-9]{9}/.test(l)) score += 6;
    if (/[0-9]{5}/.test(l.slice(5, 14))) score += 2;
  } else if (lineIndex === 1) {
    if (/^\d{6}\d[MFHX<]\d\d{6}[A-Z]{3}/.test(l)) score += 10;
    if (l.slice(15, 18) === 'ITA') score += 4;
    if (/^\d{6}[0-9][MF][0-9]\d{6}ITA/.test(l)) score += 4;
  } else {
    if (/[A-Z]{3,}<<[A-Z]{2,}/.test(l)) score += 10;
    if (l.includes('<<')) score += 2;
    if (/^[A-Z]+<<[A-Z<]+/.test(l)) score += 4;
  }

  return score;
}

function fixLine2Sex(line: string): string {
  const l = padMrzLine(line);
  if (!/^\d{6}/.test(l)) return l;
  const sex = l[7];
  if (sex === 'H' || sex === 'N') {
    return l.slice(0, 7) + 'M' + l.slice(8);
  }
  return l;
}

/** Classifica una riga TD1 per contenuto (non per posizione nel crop) */
export function classifyMrzLine(line: string): MrzLineIndex | null {
  const l = padMrzLine(line);
  const scores: Array<{ index: MrzLineIndex; score: number }> = [
    { index: 0 as MrzLineIndex, score: scoreMrzLine(l, 0) },
    { index: 1 as MrzLineIndex, score: scoreMrzLine(l, 1) },
    { index: 2 as MrzLineIndex, score: scoreMrzLine(l, 2) },
  ].sort((a, b) => b.score - a.score);

  const top = scores[0]!;
  if (top.score < 6) return null;

  // Nomi: preferisci riga 3 se contiene COGNOME<<NOME
  if (/[A-Z]{3,}<<[A-Z]{2,}/.test(l) && !/^\d/.test(l)) return 2;
  // Data di nascita + sesso + scadenza
  if (/^\d{6}\d[MFHX<]\d/.test(l)) return 1;
  // Documento + ITA
  if (/^[PIAC]/.test(l) || (l.includes('ITA') && /[A-Z0-9]{6,}/.test(l.slice(5)))) return 0;

  return top.index;
}

/** Combina la miglior riga 1/2/3 raccolte da crop/rotazioni diverse */
export function assembleMrzFromLinePool(
  pool: Array<{ line: string; lineIndex: MrzLineIndex }>,
): MrzExtractedData | null {
  const best: string[] = ['', '', ''];
  const bestScore = [0, 0, 0];

  for (const { line, lineIndex } of pool) {
    const score = scoreMrzLine(line, lineIndex);
    if (score > bestScore[lineIndex]!) {
      bestScore[lineIndex] = score;
      best[lineIndex] = lineIndex === 1 ? fixLine2Sex(line) : line;
    }
  }

  if (bestScore[0]! < 8 || bestScore[1]! < 8 || bestScore[2]! < 8) return null;

  const sized = best.map((l) => padMrzLine(l));
  const parsed = tryParseGroup(sized);
  if (!parsed) return null;

  return applyNameFixes({ ...parsed, rawMrz: sized.join('\n'), documentType: parsed.documentType ?? 'TD1' });
}

const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;

/** Valida MRZ e marca i campi da ricontrollare se la lettura è incerta */
export function enrichMrzValidation(data: MrzExtractedData): MrzExtractedData {
  const reviewFields = new Set<MrzReviewField>();
  const lines = data.rawMrz
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  let mrzValid = false;

  try {
    if (lines.length === 3) {
      const sized = lines.map((l) => padMrzLine(l));
      const result = parse(sized, { autocorrect: true });
      mrzValid = result.valid === true;
    } else if (lines.length === 2) {
      const sized = lines.map((l) => padOrTrim(l, 44));
      const result = parse(sized, { autocorrect: true });
      mrzValid = result.valid === true;
    }
  } catch {
    mrzValid = false;
  }

  if (!mrzValid) {
    reviewFields.add('documentNumber');
    reviewFields.add('birthDate');
    reviewFields.add('surname');
    reviewFields.add('givenNames');
  }

  if (data.sex === 'X') reviewFields.add('sex');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.birthDate)) reviewFields.add('birthDate');
  if (data.surname.length < 2) reviewFields.add('surname');
  if (data.givenNames.length < 2) reviewFields.add('givenNames');

  if (
    (data.documentType === 'TD1' || data.nationality === 'ITA') &&
    data.documentNumber &&
    !ITALIAN_CIE_DOC.test(data.documentNumber)
  ) {
    reviewFields.add('documentNumber');
  }

  if (
    (data.documentType === 'TD1' || data.nationality === 'ITA') &&
    data.documentNumber &&
    ITALIAN_CIE_DOC.test(data.documentNumber.replace(/<+$/, '')) &&
    !validateItalianCieDocumentNumber(data.documentNumber)
  ) {
    reviewFields.add('documentNumber');
    mrzValid = false;
  }

  return {
    ...data,
    mrzValid,
    reviewFields: reviewFields.size > 0 ? [...reviewFields] : undefined,
  };
}

export function isStrongMrzHit(data: MrzExtractedData): boolean {
  if (!data.surname || data.surname.length < 2) return false;
  if (!data.givenNames || data.givenNames.length < 2) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.birthDate)) return false;
  if (data.sex !== 'M' && data.sex !== 'F') return false;

  const doc = data.documentNumber.replace(/<+$/, '');
  if (!doc) return false;

  if (data.documentType === 'TD1' || data.nationality === 'ITA') {
    if (!ITALIAN_CIE_DOC.test(doc)) return false;
  } else if (!/^[A-Z0-9]{6,12}$/.test(doc)) {
    return false;
  }

  return data.mrzValid === true;
}

export function isPartialMrzHit(data: MrzExtractedData): boolean {
  if (!data.surname || !data.givenNames || !data.birthDate || !data.documentNumber) return false;
  return data.mrzValid === false && (data.reviewFields?.length ?? 0) > 0;
}

export function shouldAcceptMrzResult(data: MrzExtractedData | null): data is MrzExtractedData {
  if (!data) return false;
  return isStrongMrzHit(data) || isPartialMrzHit(data);
}
