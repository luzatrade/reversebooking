/**
 * Parse MRZ e validazione campo-per-campo (Engine G).
 * Port da scripts/mrz-bench/engine-lib.ts — solo logica pura, no sharp/worker.
 */
import type { MrzExtractedData, MrzReviewField } from '@/types/check-in';
import { applyNameFixes } from './parseMrz';

export const WL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';
export const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;

export type LineIndex = 0 | 1 | 2;

export interface PerFieldMrzData {
  documentNumber: string;
  surname: string;
  givenNames: string;
  birthDate: string;
  sex: string;
  nationality: string;
  rawMrz: string;
  mrzValid: boolean;
}

export interface Td1Result {
  data: PerFieldMrzData;
  docOk: boolean;
  birthOk: boolean;
  expiryOk: boolean;
  compositeOk: boolean;
}

export interface ScoredCandidate {
  result: Td1Result;
  score: number;
  bandIndex: number;
}

const CHECK_WEIGHTS = [7, 3, 1];

function normalizeNationality(nat: string): string {
  return nat.replace(/1/g, 'I').replace(/0/g, 'O').slice(0, 3);
}

export function looksItalianTd1(r: Td1Result): boolean {
  const doc = r.data.documentNumber.replace(/<+$/, '');
  if (!ITALIAN_CIE_DOC.test(doc)) return false;
  if (normalizeNationality(r.data.nationality) === 'ITA') return true;
  const l1 = r.data.rawMrz.split('\n')[0] ?? '';
  return l1.slice(2, 5) === 'ITA' || l1.includes('<ITA');
}

export function padLine(line: string, len = 30): string {
  const c = line.toUpperCase().replace(/\s+/g, '').replace(/[^A-Z0-9<]/g, '');
  return c.length >= len ? c.slice(0, len) : c.padEnd(len, '<');
}

export function formatMrzDate(mrzDate: string): string {
  if (!/^\d{6}$/.test(mrzDate)) return '';
  const yy = parseInt(mrzDate.slice(0, 2), 10);
  const mm = mrzDate.slice(2, 4);
  const dd = mrzDate.slice(4, 6);
  const month = parseInt(mm, 10);
  const day = parseInt(dd, 10);
  if (month < 1 || month > 12 || day < 1 || day > 31) return '';
  return `${(yy >= 30 ? 1900 : 2000) + yy}-${mm}-${dd}`;
}

function normalizeSex(sex: string | undefined): 'M' | 'F' | 'X' {
  const s = (sex ?? '').toLowerCase();
  if (s === 'male' || s === 'm') return 'M';
  if (s === 'female' || s === 'f') return 'F';
  return 'X';
}

function charValue(c: string): number {
  if (c === '<') return 0;
  if (c >= '0' && c <= '9') return c.charCodeAt(0) - 48;
  if (c >= 'A' && c <= 'Z') return c.charCodeAt(0) - 55;
  return 0;
}

function checkDigit(s: string): string {
  let sum = 0;
  for (let i = 0; i < s.length; i++) sum += charValue(s[i]!) * CHECK_WEIGHTS[i % 3]!;
  return String(sum % 10);
}

export function fixOcrLine(line: string, lineIndex?: LineIndex): string {
  let l = padLine(line, line.length >= 40 ? 44 : 30);
  if (lineIndex === 1 || /^\d/.test(l)) {
    l = l.replace(/O/g, '0').replace(/I/g, '1').replace(/S/g, '5');
    if (l[7] === 'H' || l[7] === 'N') l = l.slice(0, 7) + 'M' + l.slice(8);
  }
  if (lineIndex === 0 || /^[PIAC]/.test(l)) {
    l = l.replace(/^0(?=[A-Z])/, 'O');
  }
  return l;
}

export function realignLine(line: string, i: LineIndex): string {
  const l = fixOcrLine(line, i);
  const patterns: Record<LineIndex, RegExp> = {
    0: /[PIAC][A-Z<][A-Z]{3}[A-Z0-9<]{9}[0-9]/,
    1: /\d{6}\d[MFHX<]\d{7}[A-Z]{3}/,
    2: /[A-Z<]{2,}<<[A-Z<]/,
  };
  const m = l.match(patterns[i]);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 30);
  return padLine(l, 30);
}

function realignTd3Line1(line: string): string {
  const l = padLine(line, 44);
  const m = l.match(/[PIAC][A-Z<][A-Z]{3}[A-Z<]+<<[A-Z<]+/);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 44);
  return l;
}

function realignTd3Line2(line: string): string {
  const l = fixOcrLine(line);
  const m = l.match(/[A-Z0-9]{9}\d[A-Z]{3}\d{6}\d/);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 44);
  return l;
}

export function parseTd1PerField(lines: string[]): Td1Result | null {
  if (lines.length !== 3) return null;
  const [l1, l2, l3] = lines.map((l, i) => realignLine(l, i as LineIndex)) as [string, string, string];

  const docBody = l1.slice(5, 14);
  const docCheck = l1.slice(14, 15);
  const birthBody = l2.slice(0, 6);
  const birthCheck = l2.slice(6, 7);
  const expiryBody = l2.slice(8, 14);
  const expiryCheck = l2.slice(14, 15);
  const sexChar = l2.slice(7, 8);
  const nationality = l2.slice(15, 18);

  const composite = l1.slice(5, 30) + l2.slice(0, 7) + l2.slice(8, 15) + l2.slice(18, 29);
  const compositeOk = checkDigit(composite) === l2.slice(29, 30);
  const docOk = checkDigit(docBody) === docCheck;
  const birthOk = checkDigit(birthBody) === birthCheck;
  const expiryOk = checkDigit(expiryBody) === expiryCheck;

  const nameMatch = l3.match(/^([A-Z<]+?)<<([A-Z<]+)/);
  const surname = (nameMatch?.[1] ?? '').replace(/<+/g, ' ').replace(/\s+/g, ' ').trim();
  const givenNames = (nameMatch?.[2] ?? '').replace(/<+/g, ' ').replace(/\s+/g, ' ').trim();
  const documentNumber = (docBody + docCheck).replace(/<+$/, '');

  return {
    data: {
      documentNumber,
      surname,
      givenNames,
      birthDate: formatMrzDate(birthBody),
      sex: normalizeSex(sexChar),
      nationality,
      rawMrz: [l1, l2, l3].join('\n'),
      mrzValid: compositeOk && docOk && birthOk && expiryOk,
    },
    docOk,
    birthOk,
    expiryOk,
    compositeOk,
  };
}

export function parseTd3PerField(lines: string[]): Td1Result | null {
  if (lines.length !== 2) return null;
  const l1 = realignTd3Line1(lines[0]!);
  const l2 = realignTd3Line2(lines[1]!);

  const docBody = l2.slice(0, 9);
  const docCheck = l2.slice(9, 10);
  const birthBody = l2.slice(13, 19);
  const birthCheck = l2.slice(19, 20);
  const sexChar = l2.slice(20, 21);
  const expiryBody = l2.slice(21, 27);
  const expiryCheck = l2.slice(27, 28);
  const nationality = l2.slice(10, 13);

  const composite = l2.slice(0, 10) + l2.slice(13, 20) + l2.slice(21, 43);
  const compositeOk = checkDigit(composite) === l2.slice(43, 44);
  const docOk = checkDigit(docBody) === docCheck;
  const birthOk = checkDigit(birthBody) === birthCheck;
  const expiryOk = checkDigit(expiryBody) === expiryCheck;

  const nameMatch = l1.match(/^[PIAC][A-Z<][A-Z]{3}([A-Z<]+?)<<([A-Z<]+)/);
  const surname = (nameMatch?.[1] ?? '').replace(/<+/g, ' ').replace(/\s+/g, ' ').trim();
  const givenNames = (nameMatch?.[2] ?? '').replace(/<+/g, ' ').replace(/\s+/g, ' ').trim();
  const documentNumber = (docBody + docCheck).replace(/<+$/, '');

  return {
    data: {
      documentNumber,
      surname,
      givenNames,
      birthDate: formatMrzDate(birthBody),
      sex: normalizeSex(sexChar),
      nationality,
      rawMrz: [l1, l2].join('\n'),
      mrzValid: compositeOk && docOk && birthOk && expiryOk,
    },
    docOk,
    birthOk,
    expiryOk,
    compositeOk,
  };
}

export function acceptPerField(
  r: Td1Result,
  opts: { allowForeign?: boolean; expectItalian?: boolean } = {},
): boolean {
  const doc = r.data.documentNumber.replace(/<+$/, '');
  if (!doc || doc.includes('<') || !/^[A-Z0-9]{6,12}$/.test(doc)) return false;
  if (!r.docOk || !r.birthOk || !r.data.surname || r.data.surname.length < 2) return false;
  if (!['M', 'F'].includes(r.data.sex)) return false;
  if (opts.expectItalian) return looksItalianTd1(r);
  if (opts.allowForeign) return doc.length >= 6;
  return doc.length >= 6;
}

export function scorePerField(
  r: Td1Result,
  opts: { expectItalian?: boolean; bandScore?: number; lineCount?: 2 | 3 } = {},
): number {
  let s = 0;
  if (r.docOk) s += 14;
  if (r.birthOk) s += 14;
  if (r.expiryOk) s += 8;
  if (r.compositeOk) s += 5;
  if (/^([A-Z] ){1,}[A-Z]?$/.test(r.data.surname.trim())) s -= 20;
  else if (r.data.surname.length >= 2) s += 1;
  else s -= 10;
  if (r.data.givenNames.length >= 2) s += 2;
  if (opts.expectItalian && looksItalianTd1(r)) s += 10;
  if (opts.expectItalian && !looksItalianTd1(r)) s -= 50;
  if (ITALIAN_CIE_DOC.test(r.data.documentNumber.replace(/<+$/, ''))) s += 6;
  if (opts.bandScore) s += opts.bandScore * 0.4;
  if (opts.lineCount === 3 && r.data.rawMrz.split('\n').length === 3) s += 3;
  if (opts.lineCount === 2 && r.data.rawMrz.split('\n').length === 2) s += 3;
  return s;
}

function normName(s: string): string {
  return s.toUpperCase().replace(/[^A-Z ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function voteField(values: string[]): { value: string; uncertain: boolean } {
  const counts = new Map<string, number>();
  for (const v of values) {
    const n = normName(v);
    if (n.length < 2) continue;
    counts.set(n, (counts.get(n) ?? 0) + 1);
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length);
  if (!sorted.length) return { value: '', uncertain: true };
  const uncertain = sorted.length > 1 && sorted[0]![1] === sorted[1]![1];
  return { value: sorted[0]![0], uncertain };
}

export function pickBestWithNameVote(
  candidates: ScoredCandidate[],
): { result: Td1Result; score: number; namesUncertain: boolean } | null {
  if (!candidates.length) return null;

  const groups = new Map<string, ScoredCandidate[]>();
  for (const c of candidates) {
    const d = c.result.data;
    const key = `${d.documentNumber}|${d.birthDate}|${d.sex}|${d.nationality}`;
    const g = groups.get(key) ?? [];
    g.push(c);
    groups.set(key, g);
  }

  let bestGroup: ScoredCandidate[] | null = null;
  let bestGroupScore = -1;
  for (const g of groups.values()) {
    const gs = g.reduce((a, c) => a + c.score, 0) / g.length + g.length * 2;
    if (gs > bestGroupScore) {
      bestGroupScore = gs;
      bestGroup = g;
    }
  }
  if (!bestGroup?.length) return null;

  const base = bestGroup.sort((a, b) => b.score - a.score)[0]!.result;
  const surnames = bestGroup.map((c) => c.result.data.surname);
  const given = bestGroup.map((c) => c.result.data.givenNames);
  const vs = voteField(surnames);
  const vg = voteField(given);

  const merged: Td1Result = {
    ...base,
    data: {
      ...base.data,
      surname: vs.value || base.data.surname,
      givenNames: vg.value || base.data.givenNames,
    },
  };

  return {
    result: merged,
    score: bestGroupScore,
    namesUncertain: vs.uncertain || vg.uncertain,
  };
}

export function hasAmbiguousDocuments(
  candidates: ScoredCandidate[],
  opts: { expectItalian?: boolean; allowForeign?: boolean } = {},
): boolean {
  const acc = opts.expectItalian
    ? { expectItalian: true }
    : opts.allowForeign
      ? { allowForeign: true }
      : { expectItalian: true };
  const byDoc = new Map<string, { score: number; bands: Set<number> }>();
  for (const c of candidates) {
    if (!acceptPerField(c.result, acc)) continue;
    const doc = c.result.data.documentNumber.replace(/<+$/, '');
    const row = byDoc.get(doc) ?? { score: 0, bands: new Set<number>() };
    row.score += c.score;
    row.bands.add(c.bandIndex);
    byDoc.set(doc, row);
  }
  if (byDoc.size < 2) return false;
  const ranked = [...byDoc.entries()].sort(
    (a, b) => b[1].score - a[1].score || b[1].bands.size - a[1].bands.size,
  );
  const [, best] = ranked[0]!;
  const [, second] = ranked[1]!;
  if (best.bands.size >= 2 && second.bands.size === 1 && best.score >= second.score + 8) return false;
  if (best.score >= second.score + 20 && best.bands.size > second.bands.size) return false;
  return true;
}

export function extractCandidateLines(raw: string): string[] {
  return raw
    .toUpperCase()
    .replace(/[«»‹›]/g, '<')
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, '').replace(/[|]/g, 'I').replace(/[^A-Z0-9<]/g, ''))
    .filter((line) => line.length >= 20 && line.includes('<'));
}

/** Converte risultato Engine G in MrzExtractedData per l'UI check-in. */
export function toMrzExtractedData(
  picked: Td1Result,
  opts: { namesUncertain: boolean; isTd3?: boolean },
): MrzExtractedData {
  const lineCount = picked.data.rawMrz.split('\n').length;
  const documentType = opts.isTd3 || lineCount === 2 ? 'TD3' : 'TD1';
  const reviewFields = new Set<MrzReviewField>(['surname', 'givenNames']);

  if (!picked.docOk) reviewFields.add('documentNumber');
  if (!picked.birthOk) reviewFields.add('birthDate');
  if (picked.data.sex === 'X') reviewFields.add('sex');
  if (opts.namesUncertain) {
    reviewFields.add('surname');
    reviewFields.add('givenNames');
  }

  const perFieldValid = picked.docOk && picked.birthOk;

  const base: MrzExtractedData = {
    documentNumber: picked.data.documentNumber,
    surname: picked.data.surname,
    givenNames: picked.data.givenNames,
    nationality: picked.data.nationality,
    birthDate: picked.data.birthDate,
    sex: picked.data.sex as 'M' | 'F' | 'X',
    documentType,
    rawMrz: picked.data.rawMrz,
    mrzValid: perFieldValid,
    reviewFields: [...reviewFields],
  };

  const fixed = applyNameFixes(base);
  return {
    ...fixed,
    mrzValid: perFieldValid,
    reviewFields: base.reviewFields,
  };
}
