/**
 * Motore MRZ ottimizzato per il banco di prova learning.
 * Esportato anche da probe-failure.ts per diagnostica campione-per-campione.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createWorker, PSM, type Worker } from 'tesseract.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ENGINE_ROOT = path.resolve(__dirname, '../..');

export const WL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';
export const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;

function normalizeNationality(nat: string): string {
  return nat.replace(/1/g, 'I').replace(/0/g, 'O').slice(0, 3);
}

/** ITA in riga 2 OCR-sporco, oppure emittente ITA in riga 1 TD1. */
export function looksItalianTd1(r: Td1Result): boolean {
  const doc = r.data.documentNumber.replace(/<+$/, '');
  if (!ITALIAN_CIE_DOC.test(doc)) return false;
  if (normalizeNationality(r.data.nationality) === 'ITA') return true;
  const l1 = r.data.rawMrz.split('\n')[0] ?? '';
  return l1.slice(2, 5) === 'ITA' || l1.includes('<ITA');
}
const MIN_LINE_HEIGHT_PX = 56;
const MIN_BAND_WIDTH_PX = 2800;
const MAX_OCR_WIDTH_PX = 4200;
const MAX_OCR_HEIGHT_PX = 900;
const BIN_THRESHOLDS = [160, 140, 120, 100, 80] as const;

export type LineIndex = 0 | 1 | 2;

export interface MrzOut {
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
  data: MrzOut;
  docOk: boolean;
  birthOk: boolean;
  expiryOk: boolean;
  compositeOk: boolean;
}

export interface Band {
  left: number;
  top: number;
  width: number;
  height: number;
  view: string;
  score: number;
  lineCount: 2 | 3;
}

export interface EngineOpts {
  deskew: boolean;
  formatHint?: string;
  expectItalian?: boolean;
}

export interface EngineResult {
  data: MrzOut | null;
  accepted: boolean;
  ocrCalls: number;
  namesUncertain: boolean;
  bandsTried: number;
  candidates: number;
}

interface TextRun {
  start: number;
  end: number;
  inkLeft: number;
  inkRight: number;
}

interface ScoredCandidate {
  result: Td1Result;
  score: number;
  bandIndex: number;
}

const CHECK_WEIGHTS = [7, 3, 1];

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

function normalizeSex(sex: string | undefined): string {
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

/** Correzioni OCR-B frequenti prima del parse */
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
  if (opts.expectItalian) {
    return looksItalianTd1(r);
  }
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
    namesUncertain: !merged.compositeOk || vs.uncertain || vg.uncertain,
  };
}

/** Rifiuta auto-accettazione se la foto contiene più MRZ validi (es. due CIE). */
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
  const ranked = [...byDoc.entries()].sort((a, b) => b[1].score - a[1].score || b[1].bands.size - a[1].bands.size);
  const [bestDoc, best] = ranked[0]!;
  const [, second] = ranked[1]!;
  if (best.bands.size >= 2 && second.bands.size === 1 && best.score >= second.score + 8) return false;
  if (best.score >= second.score + 20 && best.bands.size > second.bands.size) return false;
  return true;
}

async function ocr(worker: Worker, buf: Buffer, psm: PSM): Promise<string> {
  const meta = await sharp(buf).metadata();
  if ((meta.width ?? 0) < 80 || (meta.height ?? 0) < 12) return '';
  if ((meta.width ?? 0) > MAX_OCR_WIDTH_PX || (meta.height ?? 0) > MAX_OCR_HEIGHT_PX) {
    buf = await sharp(buf)
      .resize({
        width: Math.min(meta.width ?? MAX_OCR_WIDTH_PX, MAX_OCR_WIDTH_PX),
        height: Math.min(meta.height ?? MAX_OCR_HEIGHT_PX, MAX_OCR_HEIGHT_PX),
        fit: 'inside',
        withoutEnlargement: true,
      })
      .png()
      .toBuffer();
  }
  try {
    await worker.setParameters({
      tessedit_char_whitelist: WL,
      tessedit_pageseg_mode: psm,
      user_defined_dpi: '400',
      preserve_interword_spaces: '0',
    });
    const { data } = await worker.recognize(buf);
    return data.text ?? '';
  } catch {
    return '';
  }
}

async function prep(buf: Buffer, minWidth: number): Promise<Buffer> {
  const meta = await sharp(buf).metadata();
  let img = sharp(buf).grayscale().linear(1.45, -(128 * 0.45));
  if ((meta.width ?? 0) < minWidth) {
    img = img.resize({ width: minWidth, kernel: 'nearest' });
  }
  return img.png().toBuffer();
}

async function binarizeAt(buf: Buffer, threshold?: number): Promise<Buffer> {
  const stats = await sharp(buf).grayscale().stats();
  const mean = stats.channels[0]?.mean ?? 128;
  const th = threshold ?? Math.max(1, Math.round(mean - 8));
  return sharp(buf).grayscale().threshold(th).png().toBuffer();
}

async function upscaleBandForOcr(buf: Buffer, lineCount: number, mul = 1): Promise<Buffer> {
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  const minH = lineCount * MIN_LINE_HEIGHT_PX * mul + 24;
  const minW = Math.min(MIN_BAND_WIDTH_PX * mul, MAX_OCR_WIDTH_PX);
  const scale = Math.max(minW / w, minH / h, 1);
  if (scale <= 1.01) return buf;
  let newW = Math.ceil(w * scale);
  let newH = Math.ceil(h * scale);
  const maxPixels = 20_000_000;
  if (newW * newH > maxPixels) {
    const r = Math.sqrt(maxPixels / (newW * newH));
    newW = Math.max(80, Math.floor(newW * r));
    newH = Math.max(48, Math.floor(newH * r));
  }
  try {
    let out = await sharp(buf)
      .resize({ width: newW, height: newH, kernel: 'nearest' })
      .png()
      .toBuffer();
    const om = await sharp(out).metadata();
    if ((om.width ?? 0) > MAX_OCR_WIDTH_PX || (om.height ?? 0) > MAX_OCR_HEIGHT_PX) {
      out = await sharp(out)
        .resize({ width: MAX_OCR_WIDTH_PX, height: MAX_OCR_HEIGHT_PX, fit: 'inside', withoutEnlargement: true })
        .png()
        .toBuffer();
    }
    return out;
  } catch {
    return buf;
  }
}

async function ocrByLines(
  worker: Worker,
  buf: Buffer,
  count: number,
  lineLen: number,
): Promise<string[]> {
  const scaled = await upscaleBandForOcr(buf, count);
  const meta = await sharp(scaled).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  if (w < 80) return [];

  const lh = Math.max(MIN_LINE_HEIGHT_PX, Math.floor(h / count));
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const top = Math.min(i * lh, Math.max(0, h - lh));
    const slice = await sharp(scaled)
      .extract({ left: 0, top, width: w, height: Math.min(lh, h - top) })
      .png()
      .toBuffer();
    const sm = await sharp(slice).metadata();
    if ((sm.width ?? 0) < 80 || (sm.height ?? 0) < 12) continue;
    out.push(padLine(await ocr(worker, slice, PSM.SINGLE_LINE), lineLen));
  }
  return out;
}

function extractCandidateLines(raw: string): string[] {
  return raw
    .toUpperCase()
    .replace(/[«»‹›]/g, '<')
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, '').replace(/[|]/g, 'I').replace(/[^A-Z0-9<]/g, ''))
    .filter((line) => line.length >= 20 && line.includes('<'));
}

async function cropRel(
  buf: Buffer,
  left: number,
  top: number,
  width: number,
  height: number,
): Promise<Buffer> {
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  return sharp(buf)
    .extract({
      left: Math.max(0, Math.floor(w * left)),
      top: Math.max(0, Math.floor(h * top)),
      width: Math.max(1, Math.min(w - Math.floor(w * left), Math.floor(w * width))),
      height: Math.max(1, Math.min(h - Math.floor(h * top), Math.floor(h * height))),
    })
    .png()
    .toBuffer();
}

function findTextRuns(bin: Buffer, w: number, h: number): TextRun[] {
  const trans = new Int32Array(h);
  const firstEdge = new Int32Array(h).fill(-1);
  const lastEdge = new Int32Array(h).fill(-1);

  for (let y = 0; y < h; y++) {
    let t = 0;
    const row = y * w;
    for (let x = 1; x < w; x++) {
      if ((bin[row + x - 1]! < 128) !== (bin[row + x]! < 128)) {
        t++;
        if (firstEdge[y] === -1) firstEdge[y] = x;
        lastEdge[y] = x;
      }
    }
    trans[y] = t;
  }

  const runs: TextRun[] = [];
  let start = -1;
  for (let y = 0; y <= h; y++) {
    const isText = y < h && trans[y]! >= 12;
    if (isText && start === -1) start = y;
    else if (!isText && start !== -1) {
      const height = y - start;
      let peak = 0;
      let inkLeft = w;
      let inkRight = 0;
      for (let r = start; r < y; r++) {
        peak = Math.max(peak, trans[r]!);
        if (firstEdge[r]! >= 0) inkLeft = Math.min(inkLeft, firstEdge[r]!);
        if (lastEdge[r]! >= 0) inkRight = Math.max(inkRight, lastEdge[r]!);
      }
      const tallEnough = height >= Math.max(3, h * 0.006) && height <= h * 0.2;
      const wideEnough = inkRight - inkLeft > w * 0.3;
      if (tallEnough && wideEnough && peak >= 25) {
        runs.push({ start, end: y, inkLeft, inkRight });
      }
      start = -1;
    }
  }
  return runs;
}

function groupRuns(runs: TextRun[], w: number, h: number, view: string): Band[] {
  const bands: Band[] = [];

  const consider = (group: TextRun[]) => {
    const heights = group.map((r) => r.end - r.start);
    const avgH = heights.reduce((a, b) => a + b, 0) / heights.length;
    const maxDev = Math.max(...heights.map((x) => Math.abs(x - avgH))) / avgH;
    if (maxDev > 0.6) return;

    const gaps: number[] = [];
    for (let i = 1; i < group.length; i++) gaps.push(group[i]!.start - group[i - 1]!.end);
    if (gaps.some((g) => g > avgH * 2)) return;

    const spans = group.map((r) => r.inkRight - r.inkLeft);
    const avgSpan = spans.reduce((a, b) => a + b, 0) / spans.length;
    if (Math.max(...spans.map((s) => Math.abs(s - avgSpan))) / avgSpan > 0.45) return;

    const top = group[0]!.start;
    const bottom = group[group.length - 1]!.end;
    const inkLeft = Math.min(...group.map((r) => r.inkLeft));
    const inkRight = Math.max(...group.map((r) => r.inkRight));
    const lineCount = group.length === 2 ? 2 : 3;
    const padY = avgH * (lineCount === 2 ? 0.65 : 0.45);
    const padX = avgH * 0.45;

    bands.push({
      left: Math.max(0, (inkLeft - padX) / w),
      top: Math.max(0, (top - padY) / h),
      width: Math.min(1, (inkRight - inkLeft + padX * 2) / w),
      height: Math.min(1, (bottom - top + padY * 2) / h),
      view,
      lineCount: lineCount as 2 | 3,
      score:
        (lineCount === 3 ? 10 : 8) +
        (avgSpan / w) * 6 -
        maxDev * 3 +
        (lineCount === 2 ? avgSpan / w : 0),
    });
  };

  for (let i = 0; i + 2 < runs.length; i++) consider([runs[i]!, runs[i + 1]!, runs[i + 2]!]);
  for (let i = 0; i + 1 < runs.length; i++) consider([runs[i]!, runs[i + 1]!]);

  return bands;
}

async function profileVariance(buf: Buffer, angle: number): Promise<number> {
  const rotated = await sharp(buf)
    .rotate(angle === 0 ? 0.001 : angle, { background: '#ffffff' })
    .png()
    .toBuffer();
  const m = await sharp(rotated).metadata();
  const w = m.width ?? 1;
  const h = m.height ?? 1;

  const { data, info } = await sharp(rotated)
    .extract({
      left: Math.floor(w * 0.06),
      top: Math.floor(h * 0.12),
      width: Math.max(1, Math.floor(w * 0.88)),
      height: Math.max(1, Math.floor(h * 0.76)),
    })
    .grayscale()
    .normalize()
    .resize({ width: 700, height: 200, fit: 'fill' })
    .blur(0.4)
    .threshold(140)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const trans: number[] = [];
  for (let y = 0; y < info.height; y++) {
    let t = 0;
    const row = y * info.width;
    for (let x = 1; x < info.width; x++) {
      if ((data[row + x - 1]! < 128) !== (data[row + x]! < 128)) t++;
    }
    trans.push(t);
  }
  const mean = trans.reduce((a, b) => a + b, 0) / trans.length;
  return trans.reduce((a, b) => a + (b - mean) ** 2, 0) / trans.length;
}

async function deskew(buf: Buffer): Promise<{ buf: Buffer; angle: number }> {
  let best = 0;
  let bestScore = -1;
  for (const a of [-6, -4, -2, 0, 2, 4, 6]) {
    const s = await profileVariance(buf, a);
    if (s > bestScore) {
      bestScore = s;
      best = a;
    }
  }
  for (const a of [best - 1, best + 1]) {
    const s = await profileVariance(buf, a);
    if (s > bestScore) {
      bestScore = s;
      best = a;
    }
  }
  if (best === 0) return { buf, angle: 0 };
  return {
    buf: await sharp(buf).rotate(best, { background: '#ffffff' }).png().toBuffer(),
    angle: best,
  };
}

export async function detectMrzBands(
  source: Buffer,
  opts: { deskew: boolean },
): Promise<{ bands: Band[]; views: Map<string, Buffer> }> {
  const all: Band[] = [];
  const views = new Map<string, Buffer>();

  for (const rot of [0, 90, -90] as const) {
    const rotated = rot === 0 ? source : await sharp(source).rotate(rot).png().toBuffer();
    const candidates: Array<{ key: string; buf: Buffer }> = [{ key: `${rot}:0`, buf: rotated }];
    if (opts.deskew) {
      const { buf, angle } = await deskew(rotated);
      if (angle !== 0) candidates.push({ key: `${rot}:${angle}`, buf });
    }

    for (const { key, buf } of candidates) {
      views.set(key, buf);
      for (const th of BIN_THRESHOLDS) {
        const { data, info } = await sharp(buf)
          .grayscale()
          .normalize()
          .resize({ width: 900, withoutEnlargement: true })
          .blur(0.5)
          .threshold(th)
          .raw()
          .toBuffer({ resolveWithObject: true });
        all.push(...groupRuns(findTextRuns(data, info.width, info.height), info.width, info.height, key));
      }
    }
  }

  const deduped = new Map<string, Band>();
  for (const b of all.sort((a, c) => c.score - a.score)) {
    const k = `${b.view}:${b.lineCount}:${Math.round(b.top * 100)}:${Math.round(b.left * 100)}`;
    if (!deduped.has(k)) deduped.set(k, b);
  }
  return { bands: rerankBands([...deduped.values()]), views };
}

function rerankBands(bands: Band[]): Band[] {
  return bands
    .map((b) => ({ b, bonus: bandHeuristicBonus(b) }))
    .sort((a, c) => c.b.score + c.bonus - (a.b.score + a.bonus))
    .map((x) => x.b);
}

function bandHeuristicBonus(b: Band): number {
  let bonus = 0;
  if (b.lineCount === 3) bonus += 5;
  if (b.lineCount === 2) bonus += 3;
  if (b.height >= 0.1 && b.height <= 0.22) bonus += 6;
  if (b.height < 0.06) bonus -= 8;
  if (b.width >= 0.98) bonus -= 4;
  if (b.width >= 0.45 && b.width <= 0.92) bonus += 3;
  if (b.top >= 0.45) bonus += 4;
  if (b.view.startsWith('-90') || b.view.startsWith('90')) bonus += 2;
  return bonus;
}

function dedupeResults(list: Td1Result[]): Td1Result[] {
  const seen = new Set<string>();
  const out: Td1Result[] = [];
  for (const r of list) {
    const k = r.data.rawMrz;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(r);
  }
  return out;
}

async function collectTd1FromImage(
  worker: Worker,
  img: Buffer,
  thorough = false,
): Promise<{ results: Td1Result[]; ocrCalls: number }> {
  let ocrCalls = 0;
  const found: Td1Result[] = [];
  const add = (r: Td1Result | null) => {
    if (r && acceptPerField(r, { allowForeign: true })) found.push(r);
  };

  const passes = thorough ? ([1, 1.35] as const) : ([1] as const);
  const thresholds = thorough ? BIN_THRESHOLDS : ([140, 100] as const);

  for (const mul of passes) {
    const scaled = await upscaleBandForOcr(img, 3, mul);

    const byLines = await ocrByLines(worker, scaled, 3, 30);
    ocrCalls += 3;
    if (byLines.length >= 3) {
      add(parseTd1PerField(byLines.map((l, i) => realignLine(l, i as LineIndex))));
    }
    if (found.length) return { results: dedupeResults(found), ocrCalls };

    const block = await ocr(worker, scaled, PSM.SINGLE_BLOCK);
    ocrCalls += 1;
    const blockLines = extractCandidateLines(block).map((l) => padLine(l));
    for (let i = 0; i + 2 < blockLines.length; i++) {
      add(parseTd1PerField(blockLines.slice(i, i + 3).map((l, j) => realignLine(l, j as LineIndex))));
    }
    if (found.length) return { results: dedupeResults(found), ocrCalls };

    for (const th of thresholds) {
      const bin = await binarizeAt(scaled, th);
      const binText = await ocr(worker, bin, PSM.SINGLE_BLOCK);
      ocrCalls += 1;
      const binLines = extractCandidateLines(binText).map((l) => padLine(l));
      for (let i = 0; i + 2 < binLines.length; i++) {
        add(parseTd1PerField(binLines.slice(i, i + 3).map((l, j) => realignLine(l, j as LineIndex))));
      }
      if (found.length) return { results: dedupeResults(found), ocrCalls };
    }
  }

  return { results: dedupeResults(found), ocrCalls };
}

async function readTd1Band(
  worker: Worker,
  crop: Buffer,
  thorough = false,
): Promise<{ results: Td1Result[]; ocrCalls: number }> {
  const prepped = await prep(crop, MIN_BAND_WIDTH_PX);
  return collectTd1FromImage(worker, prepped, thorough);
}

async function collectTd3FromImage(
  worker: Worker,
  img: Buffer,
  thorough = false,
): Promise<{ results: Td1Result[]; ocrCalls: number }> {
  let ocrCalls = 0;
  const found: Td1Result[] = [];

  const tryPairs = (lines: string[]): boolean => {
    const padded = lines.map((l) => padLine(l, 44));
    for (let i = 0; i < padded.length; i++) {
      for (let j = i + 1; j < padded.length; j++) {
        for (const pair of [
          [padded[i]!, padded[j]!],
          [padded[j]!, padded[i]!],
        ] as const) {
          const r = parseTd3PerField(pair);
          if (r && acceptPerField(r, { allowForeign: true })) {
            found.push(r);
            return true;
          }
        }
      }
    }
    return false;
  };

  const passes = thorough ? ([1, 1.35] as const) : ([1] as const);
  const thresholds = thorough ? BIN_THRESHOLDS : ([140, 100] as const);

  for (const mul of passes) {
    const scaled = await upscaleBandForOcr(img, 2, mul);

    const byLines = await ocrByLines(worker, scaled, 2, 44);
    ocrCalls += 2;
    if (tryPairs(byLines)) return { results: dedupeResults(found), ocrCalls };

    const block = await ocr(worker, scaled, PSM.SINGLE_BLOCK);
    ocrCalls += 1;
    if (tryPairs(extractCandidateLines(block))) return { results: dedupeResults(found), ocrCalls };

    for (const th of thresholds) {
      const bin = await binarizeAt(scaled, th);
      const binText = await ocr(worker, bin, PSM.SINGLE_BLOCK);
      ocrCalls += 1;
      if (tryPairs(extractCandidateLines(binText))) return { results: dedupeResults(found), ocrCalls };
    }
  }

  return { results: dedupeResults(found), ocrCalls };
}

async function readTd3Band(
  worker: Worker,
  crop: Buffer,
  thorough = false,
): Promise<{ results: Td1Result[]; ocrCalls: number }> {
  const prepped = await prep(crop, MIN_BAND_WIDTH_PX);
  let ocrCalls = 0;
  const all: Td1Result[] = [];

  for (const deg of [0, 90, -90] as const) {
    const img = deg === 0 ? prepped : await sharp(prepped).rotate(deg).png().toBuffer();
    const { results, ocrCalls: c } = await collectTd3FromImage(worker, img, thorough);
    ocrCalls += c;
    all.push(...results);
    if (all.length) break;
  }

  return { results: dedupeResults(all), ocrCalls };
}

async function bandPixelSize(view: Buffer, band: Band) {
  const meta = await sharp(view).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  return { width: Math.floor(w * band.width), height: Math.floor(h * band.height) };
}

async function fallbackRegionScans(
  source: Buffer,
  worker: Worker,
  opts: { preferTd3: boolean; expectItalian: boolean },
): Promise<{ candidates: ScoredCandidate[]; ocrCalls: number }> {
  let ocrCalls = 0;
  const candidates: ScoredCandidate[] = [];
  const acc = opts.preferTd3 ? { allowForeign: true } : opts.expectItalian ? { expectItalian: true } : { allowForeign: true };

  for (const rot of [0, 90, -90] as const) {
    const view = rot === 0 ? source : await sharp(source).rotate(rot).png().toBuffer();
    const regions: Array<[number, number, number, number]> = [
      [0.02, 0.62, 0.96, 0.36],
      [0.02, 0.68, 0.96, 0.3],
      [0.58, 0.03, 0.4, 0.94],
      [0.02, 0.03, 0.4, 0.94],
    ];
    for (const [left, top, width, height] of regions) {
      const crop = await cropRel(view, left, top, width, height);
      if (!opts.preferTd3) {
        const td1 = await readTd1Band(worker, crop, true);
        ocrCalls += td1.ocrCalls;
        for (const r of td1.results) {
          if (acceptPerField(r, acc)) {
            candidates.push({
              result: r,
              score: scorePerField(r, { expectItalian: opts.expectItalian, lineCount: 3 }) + 5,
              bandIndex: -1,
            });
          }
        }
      }
      if (opts.preferTd3) {
        const td3 = await readTd3Band(worker, crop);
        ocrCalls += td3.ocrCalls;
        for (const r of td3.results) {
          if (acceptPerField(r, acc)) {
            candidates.push({
              result: r,
              score: scorePerField(r, { lineCount: 2 }) + 5,
              bandIndex: -1,
            });
          }
        }
      }
    }
  }

  return { candidates, ocrCalls };
}

export async function runOptimizedEngine(
  source: Buffer,
  worker: Worker,
  opts: EngineOpts,
): Promise<EngineResult> {
  const { bands, views } = await detectMrzBands(source, { deskew: opts.deskew });
  const preferTd3 = opts.formatHint === 'TD3';
  const expectItalian = opts.expectItalian ?? opts.formatHint !== 'TD3';

  function acceptOpts(): { allowForeign?: boolean; expectItalian?: boolean } {
    if (preferTd3) return { allowForeign: true };
    if (expectItalian) return { expectItalian: true };
    return { allowForeign: true };
  }

  const acc = acceptOpts();

  const allCandidates: ScoredCandidate[] = [];
  let ocrCalls = 0;
  let bandsTried = 0;

  const tryBands = async (limit: number, thorough: boolean) => {
    for (const band of bands.slice(bandsTried, limit)) {
      bandsTried++;
      const view = views.get(band.view) ?? source;
      const px = await bandPixelSize(view, band);
      if (!px || px.width < 140 || px.height < 36) continue;

      const crop = await cropRel(view, band.left, band.top, band.width, band.height);
      const tryTd3 = preferTd3;
      const tryTd1 = !preferTd3;

      if (tryTd3) {
        const td3 = await readTd3Band(worker, crop, thorough);
        ocrCalls += td3.ocrCalls;
        for (const r of td3.results) {
          if (acceptPerField(r, acc)) {
            allCandidates.push({
              result: r,
              score: scorePerField(r, { expectItalian, bandScore: band.score, lineCount: 2 }),
              bandIndex: bandsTried,
            });
          }
        }
      }

      if (tryTd1) {
        const td1 = await readTd1Band(worker, crop, thorough);
        ocrCalls += td1.ocrCalls;
        for (const r of td1.results) {
          if (acceptPerField(r, acc)) {
            allCandidates.push({
              result: r,
              score: scorePerField(r, { expectItalian, bandScore: band.score, lineCount: 3 }),
              bandIndex: bandsTried,
            });
          }
        }
      }

      const interim = pickBestWithNameVote(allCandidates);
      if (interim && interim.score >= 32) return;
    }
  };

  await tryBands(8, false);
  let picked = pickBestWithNameVote(allCandidates);
  if (!picked || picked.score < 28) await tryBands(16, true);
  picked = pickBestWithNameVote(allCandidates);

  if (!picked || picked.score < 28) {
    const fb = await fallbackRegionScans(source, worker, { preferTd3, expectItalian });
    ocrCalls += fb.ocrCalls;
    allCandidates.push(...fb.candidates);
    picked = pickBestWithNameVote(allCandidates);
  }

  if (!picked) {
    return { data: null, accepted: false, ocrCalls, namesUncertain: false, bandsTried, candidates: 0 };
  }

  if (hasAmbiguousDocuments(allCandidates, acc)) {
    return {
      data: null,
      accepted: false,
      ocrCalls,
      namesUncertain: false,
      bandsTried,
      candidates: allCandidates.length,
    };
  }

  return {
    data: picked.result.data,
    accepted: true,
    ocrCalls,
    namesUncertain: picked.namesUncertain,
    bandsTried,
    candidates: allCandidates.length,
  };
}

export async function createMrzWorker(): Promise<Worker> {
  return createWorker('mrz', 1, {
    langPath: path.join(ENGINE_ROOT, 'public/model'),
    corePath: path.join(ENGINE_ROOT, 'public/tesseract'),
    gzip: true,
  });
}

export interface ProbeBandResult {
  bandIndex: number;
  band: Band;
  px: { width: number; height: number };
  td1: Td1Result[];
  td3: Td1Result[];
  ocrCalls: number;
}

export async function probeSample(
  source: Buffer,
  worker: Worker,
  opts: EngineOpts,
): Promise<{ bands: Band[]; bandResults: ProbeBandResult[]; picked: ReturnType<typeof pickBestWithNameVote> }> {
  const { bands, views } = await detectMrzBands(source, { deskew: opts.deskew });
  const bandResults: ProbeBandResult[] = [];
  const allCandidates: ScoredCandidate[] = [];
  const expectItalian = opts.expectItalian ?? opts.formatHint !== 'TD3';

  for (let i = 0; i < Math.min(bands.length, 12); i++) {
    const band = bands[i]!;
    const view = views.get(band.view) ?? source;
    const px = (await bandPixelSize(view, band)) ?? { width: 0, height: 0 };
    if (px.width < 100 || px.height < 24) continue;
    const crop = await cropRel(view, band.left, band.top, band.width, band.height);
    const td1 = await readTd1Band(worker, crop);
    const td3 = await readTd3Band(worker, crop);
    bandResults.push({
      bandIndex: i,
      band,
      px,
      td1: td1.results,
      td3: td3.results,
      ocrCalls: td1.ocrCalls + td3.ocrCalls,
    });
    for (const r of [...td1.results, ...td3.results]) {
      if (acceptPerField(r, { allowForeign: true })) {
        allCandidates.push({
          result: r,
          score: scorePerField(r, { expectItalian, bandScore: band.score, lineCount: band.lineCount }),
          bandIndex: i,
        });
      }
    }
  }

  return { bands, bandResults, picked: pickBestWithNameVote(allCandidates) };
}
