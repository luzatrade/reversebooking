/**
 * Banco di prova comparativo dei due pipeline MRZ.
 *
 *   npx tsx scripts/mrz-bench/bench.ts [--photo path] [--only A|B] [--variants n]
 *
 * A = pipeline di questo repo (PR #88): crop bassi multipli, upscale 2000px,
 *     merge riga-per-riga tra tutti i crop/rotazioni, numero documento TD1
 *     estratto a colonne fisse, accettazione solo con check digit validi.
 * B = pipeline di ~/Developer/reversebooking: crop destri+bassi, upscale 1400px,
 *     nessun merge tra crop, numero documento dalla libreria `mrz`,
 *     accettazione a punteggio (>=6) con uscita anticipata a 14.
 *
 * Misura il pipeline immagine + la strategia di selezione, che è dove le due
 * versioni divergono. Il parsing usa in entrambi i casi il pacchetto `mrz`.
 *
 * Un solo documento reale non dà una percentuale di successo assoluta: le
 * degradazioni sintetiche servono a confrontare la ROBUSTEZZA relativa dei due
 * pipeline sulla stessa immagine di partenza.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { createWorker, PSM, type Worker } from 'tesseract.js';
import { parse } from 'mrz';
import { runOptimizedEngine } from './engine-lib.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const ASSETS =
  '/Users/lucianozavaglia/.cursor/projects/Users-lucianozavaglia-Desktop-reverseboking/assets';

interface Truth {
  documentNumber: string;
  surname: string;
  givenNames: string;
  birthDate: string;
  sex: string;
}

interface Sample {
  label: string;
  photo: string;
  format?: string;
  /** null = modalità scoperta (PDF senza verità annotata) */
  truth: Truth | null;
}

const MANIFEST_PATH = path.join(ROOT, 'data/mrz-bench/corpus-manifest.json');
const SPLIT_PATH = path.join(ROOT, 'data/mrz-bench/split-assignments.json');

function loadSplitAssignments(): Record<string, 'dev' | 'holdout'> | null {
  if (!fs.existsSync(SPLIT_PATH)) return null;
  const raw = JSON.parse(fs.readFileSync(SPLIT_PATH, 'utf8')) as {
    assignments?: Record<string, 'dev' | 'holdout'>;
  };
  return raw.assignments ?? null;
}

function loadSamples(
  useCorpus: boolean,
  onlyPhoto?: string,
  verifiedOnly?: boolean,
  split?: 'dev' | 'holdout',
): Sample[] {
  if (useCorpus) {
    if (!fs.existsSync(MANIFEST_PATH)) {
      console.error('Manifest assente. Esegui: node scripts/mrz-bench/prepare-corpus.mjs');
      process.exit(1);
    }
    let all = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as Sample[];
    if (verifiedOnly) all = all.filter((s) => s.truth != null);
    if (split) {
      const assignments = loadSplitAssignments();
      if (!assignments) {
        console.error('Split assignments assenti. Esegui: node scripts/mrz-bench/assign-split.mjs');
        process.exit(1);
      }
      all = all.filter((s) => {
        const id = (s as { id?: string }).id;
        return id && assignments[id] === split;
      });
    }
    if (!onlyPhoto) return all;
    return all.filter(
      (s) => s.photo.includes(onlyPhoto) || s.label.includes(onlyPhoto) || (s as { id?: string }).id?.includes(onlyPhoto),
    );
  }
  return onlyPhoto
    ? SAMPLES.filter((s) => s.photo.includes(onlyPhoto) || s.label.includes(onlyPhoto))
    : SAMPLES;
}

function normName(s: string): string {
  return s.toUpperCase().replace(/[^A-Z ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function namesMatch(got: string, expected: string): boolean {
  const g = normName(got);
  const e = normName(expected);
  if (g === e) return true;
  // Cognomi composti MRZ: PALPA<ZAVALA vs PALPA ZAVALA
  if (g.replace(/ /g, '') === e.replace(/ /g, '')) return true;
  // Nome parziale accettabile se contiene tutte le parole attese
  const words = e.split(' ');
  return words.every((w) => g.includes(w));
}

const SAMPLES: Sample[] = [
  {
    label: 'CIE 1 — MRZ sul lato destro',
    photo: `${ASSETS}/PHOTO-2026-08-13-22-13-39-26f4505f-e315-4c2e-b5d4-f909411dce96.png`,
    truth: {
      documentNumber: 'CB19477AA9',
      surname: 'ZAVAGLIA',
      givenNames: 'LUCIANO',
      birthDate: '1983-05-26',
      sex: 'M',
    },
  },
  {
    label: 'CIE 2 — MRZ sul lato SINISTRO',
    photo: `${ASSETS}/PHOTO-2026-08-14-12-11-42-4f89fee9-ed47-474d-9a02-65237c8aeb0b.png`,
    truth: {
      documentNumber: 'CA32060FA2',
      surname: 'GRONCHI',
      givenNames: 'IMER',
      birthDate: '1986-02-27',
      sex: 'M',
    },
  },
];

const WL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';
const ITALIAN_CIE_DOC = /^[A-Z]{2}\d{5}[A-Z]{2}\d$/;

type LineIndex = 0 | 1 | 2;

interface MrzOut {
  documentNumber: string;
  surname: string;
  givenNames: string;
  birthDate: string;
  sex: string;
  nationality: string;
  rawMrz: string;
  mrzValid: boolean;
}

// ---------------------------------------------------------------- utilità comuni

function padLine(line: string, len = 30): string {
  const c = line.toUpperCase().replace(/\s+/g, '').replace(/[^A-Z0-9<]/g, '');
  return c.length >= len ? c.slice(0, len) : c.padEnd(len, '<');
}

function formatMrzDate(mrzDate: string): string {
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

async function ocr(worker: Worker, buf: Buffer, psm: PSM): Promise<string> {
  await worker.setParameters({
    tessedit_char_whitelist: WL,
    tessedit_pageseg_mode: psm,
    user_defined_dpi: '400',
    preserve_interword_spaces: '0',
  });
  const { data } = await worker.recognize(buf);
  return data.text ?? '';
}

/** Scala di grigi + contrasto, poi upscale a `minWidth` (equivalente di enhanceForOcr + upscaleForMrz) */
async function prep(buf: Buffer, minWidth: number): Promise<Buffer> {
  const meta = await sharp(buf).metadata();
  let img = sharp(buf).grayscale().linear(1.45, -(128 * 0.45));
  if ((meta.width ?? 0) < minWidth) {
    img = img.resize({ width: minWidth, kernel: 'nearest' });
  }
  return img.png().toBuffer();
}

/** Binarizzazione a soglia media (equivalente di binarizeForMrz) */
async function binarize(buf: Buffer): Promise<Buffer> {
  const stats = await sharp(buf).grayscale().stats();
  const mean = stats.channels[0]?.mean ?? 128;
  return sharp(buf).grayscale().threshold(Math.max(1, Math.round(mean - 8))).png().toBuffer();
}

const MIN_LINE_HEIGHT_PX = 56;
const MIN_BAND_WIDTH_PX = 2800;

/** Upscale banda MRZ finché ogni riga ha altezza e larghezza sufficienti per Tesseract */
async function upscaleBandForOcr(buf: Buffer, lineCount: number): Promise<Buffer> {
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  const minH = lineCount * MIN_LINE_HEIGHT_PX + 24;
  const scale = Math.max(MIN_BAND_WIDTH_PX / w, minH / h, 1);
  if (scale <= 1.01) return buf;
  return sharp(buf)
    .resize({
      width: Math.ceil(w * scale),
      height: Math.ceil(h * scale),
      kernel: 'nearest',
    })
    .png()
    .toBuffer();
}

/** Taglia l'immagine in `count` fasce orizzontali e legge ognuna in SINGLE_LINE */
async function ocrByLines(worker: Worker, buf: Buffer, count: number, lineLen: number): Promise<string[]> {
  let scaled = await upscaleBandForOcr(buf, count);
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

// ------------------------------------------------------- A: pipeline di questo repo

/**
 * Riallinea una riga MRZ scartando la spazzatura iniziale che l'OCR produce
 * quando il taglio prende anche il bordo del documento. Senza questo, una riga
 * corretta preceduta da 4 caratteri di rumore viene letta a colonne sbagliate.
 */
function realignLine(line: string, i: LineIndex): string {
  const l = padLine(line, 30);
  const patterns: Record<LineIndex, RegExp> = {
    0: /[PIAC][A-Z<][A-Z]{3}[A-Z0-9<]{9}[0-9]/,
    1: /\d{6}\d[MFHX<]\d{7}[A-Z]{3}/,
    2: /[A-Z]{2,}<<[A-Z]/,
  };
  const m = l.match(patterns[i]);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 30);
  return l;
}

function scoreLineA(line: string, i: LineIndex): number {
  const l = padLine(line);
  if (i === 0) {
    return (
      (/^[PIAC]/.test(l) ? 4 : 0) +
      (l.slice(2, 5) === 'ITA' ? 4 : 0) +
      (/^[PIAC]<ITA[A-Z0-9]{9}/.test(l) ? 6 : 0)
    );
  }
  if (i === 1) {
    return (/^\d{6}\d[MFHX<]\d\d{6}[A-Z]{3}/.test(l) ? 10 : 0) + (l.slice(15, 18) === 'ITA' ? 4 : 0);
  }
  // L'ancoraggio a inizio riga distingue la lettura pulita da una identica
  // preceduta da rumore: senza questo bonus le due pareggiano e vince l'ordine
  // di inserimento nel pool.
  return (
    (/[A-Z]{3,}<<[A-Z]{2,}/.test(l) ? 10 : 0) +
    (l.includes('<<') ? 2 : 0) +
    (/^[A-Z]{2,}<</.test(l) ? 4 : 0)
  );
}

function classifyLineA(line: string): LineIndex | null {
  const l = padLine(line);
  if (/[A-Z]{3,}<<[A-Z]{2,}/.test(l) && !/^\d/.test(l)) return 2;
  if (/^\d{6}\d[MFHX<]\d/.test(l)) return 1;
  if (/^[PIAC]/.test(l) || (l.includes('ITA') && /[A-Z0-9]{6,}/.test(l.slice(5)))) return 0;
  const ranked = ([0, 1, 2] as LineIndex[])
    .map((i) => ({ i, s: scoreLineA(l, i) }))
    .sort((a, b) => b.s - a.s)[0]!;
  return ranked.s >= 6 ? ranked.i : null;
}

function fixSexA(line: string): string {
  const l = padLine(line);
  if (l[7] === 'H' || l[7] === 'N') return l.slice(0, 7) + 'M' + l.slice(8);
  return l;
}

function extractTd1Doc(rawMrz: string): string | null {
  const line1 = rawMrz.split(/\r?\n/)[0];
  if (!line1) return null;
  const num = padLine(line1).slice(5, 15).replace(/<+$/, '');
  return /^[A-Z0-9]{8,10}$/.test(num) ? num : null;
}

function assembleA(pool: Array<{ line: string; lineIndex: LineIndex }>): MrzOut | null {
  const best = ['', '', ''];
  const bs = [0, 0, 0];
  for (const { line, lineIndex } of pool) {
    const sc = scoreLineA(line, lineIndex);
    if (sc > bs[lineIndex]!) {
      bs[lineIndex] = sc;
      best[lineIndex] = lineIndex === 1 ? fixSexA(line) : line;
    }
  }
  if (bs[0]! < 8 || bs[1]! < 8 || bs[2]! < 8) return null;

  const sized = best.map((l) => padLine(l));
  const rawMrz = sized.join('\n');
  try {
    const r = parse(sized, { autocorrect: true });
    const td1 = extractTd1Doc(rawMrz);
    return {
      documentNumber: td1 ?? r.fields.documentNumber ?? '',
      surname: r.fields.lastName ?? '',
      givenNames: (r.fields.firstName ?? '').replace(/</g, ' ').trim(),
      birthDate: formatMrzDate(r.fields.birthDate ?? ''),
      sex: normalizeSex(r.fields.sex ?? undefined),
      nationality: r.fields.nationality ?? '',
      rawMrz,
      mrzValid: r.valid === true,
    };
  } catch {
    return null;
  }
}

/** Il gate di accettazione di A: check digit validi + formato CIE del numero documento */
function acceptA(d: MrzOut): boolean {
  return (
    d.mrzValid &&
    ITALIAN_CIE_DOC.test(d.documentNumber) &&
    d.surname.length >= 2 &&
    d.givenNames.length >= 2 &&
    /^\d{4}-\d{2}-\d{2}$/.test(d.birthDate)
  );
}

async function runA(
  source: Buffer,
  worker: Worker,
  opts: { block: boolean } = { block: false },
): Promise<{ data: MrzOut | null; accepted: boolean; ocrCalls: number }> {
  const pool: Array<{ line: string; lineIndex: LineIndex }> = [];
  let ocrCalls = 0;

  const addToPool = (line: string) => {
    const idx = classifyLineA(line);
    if (idx !== null && scoreLineA(line, idx) >= 6) pool.push({ line, lineIndex: idx });
  };

  for (const deg of [90, -90, 0]) {
    const base = deg === 0 ? source : await sharp(source).rotate(deg).png().toBuffer();
    for (const top of [0.74, 0.68, 0.62, 0.55]) {
      const crop = await cropRel(base, 0.01, top, 0.98, 0.995 - top);
      const prepped = await prep(crop, 2000);

      for (const line of await ocrByLines(worker, prepped, 3, 30)) addToPool(line);
      ocrCalls += 3;

      // A+ : la segmentazione a blocco di Tesseract trova da sola le righe anche
      // se il documento è leggermente inclinato, dove il taglio in 3 fasce fisse
      // taglia le righe a metà.
      if (opts.block) {
        const text = await ocr(worker, prepped, PSM.SINGLE_BLOCK);
        ocrCalls += 1;
        for (const raw of text.split(/\r?\n/)) {
          const l = padLine(raw);
          if (l.replace(/</g, '').length >= 8) addToPool(l);
        }
      }
    }
  }

  const data = assembleA(pool);
  return { data, accepted: data ? acceptA(data) : false, ocrCalls };
}

// --------------------------------------------- B: pipeline di ~/Developer/reversebooking

const MRZ_LINE_LENGTHS = [30, 36, 44];
const EDGE_ARTIFACT = /^[ELI1|]$/;

function leftOverflow(lineLength: number): number {
  for (const valid of MRZ_LINE_LENGTHS) {
    if (lineLength > valid && lineLength - valid <= 2) return lineLength - valid;
  }
  return 0;
}

function stripEdgeArtifact(surname: string, overflow: number): string {
  let s = surname.toUpperCase().trim();
  let left = overflow;
  while (left > 0 && s.length > 3 && EDGE_ARTIFACT.test(s[0]!)) {
    s = s.slice(1);
    left--;
  }
  return s;
}

function extractCandidateLinesB(raw: string): string[] {
  return raw
    .toUpperCase()
    .replace(/[«»‹›]/g, '<')
    .split(/\r?\n/)
    .map((line) => {
      let cleaned = line.replace(/\s+/g, '').replace(/[|]/g, 'I').replace(/[^A-Z0-9<]/g, '');
      if (!cleaned.includes('<<')) cleaned = cleaned.replace(/O/g, '0');
      return cleaned;
    })
    .filter((line) => line.length >= 20 && line.includes('<'));
}

function extractNamesFromMrzB(rawMrz: string): { surname: string; givenNames: string } | null {
  let best: { surname: string; givenNames: string } | null = null;
  for (const line of extractCandidateLinesB(rawMrz)) {
    if (!line.includes('<<')) continue;
    const match = line.match(/([A-Z]+)<<([A-Z]+)/);
    if (!match?.[1] || !match[2]) continue;
    const surname = stripEdgeArtifact(match[1], leftOverflow(line.length));
    const givenNames = match[2].replace(/</g, '').trim().toUpperCase();
    if (!best || givenNames.length > best.givenNames.length) best = { surname, givenNames };
  }
  return best;
}

function scoreMrzB(d: MrzOut, raw: string, validationOk: boolean): number {
  let score = 0;
  if (validationOk) score += 12;
  const flat = raw.replace(/\s/g, '');
  if (flat.length >= 72) score += 3;
  if (flat.includes('<<')) score += 2;
  if (d.surname.length >= 2) score += 3;
  if (d.givenNames.length >= 2) score += 2;
  if (/^[A-Z0-9]{6,12}$/.test(d.documentNumber)) score += 3;
  if (/^\d{4}-\d{2}-\d{2}$/.test(d.birthDate)) score += 3;
  if (d.nationality.length === 3) score += 1;
  return score;
}

interface CandidateB {
  data: MrzOut;
  score: number;
  namesUncertain: boolean;
}

function parseSizedB(lines: string[], sourceText: string, useTd1: boolean): CandidateB | null {
  try {
    const r = parse(lines, { autocorrect: true });
    const surname = r.fields.lastName ?? '';
    // B prende il numero documento dalla libreria: per il TD1 il check digit
    // finisce in un campo separato e non rientra nel numero. Con `useTd1` si
    // innesta la nostra estrazione a colonne fisse dalla riga 1.
    const fromLib = r.fields.documentNumber ?? '';
    const documentNumber = useTd1 ? (extractTd1Doc(lines.join('\n')) ?? fromLib) : fromLib;
    if (!surname || !documentNumber) return null;

    let data: MrzOut = {
      documentNumber,
      surname,
      givenNames: (r.fields.firstName ?? '').replace(/</g, ' ').trim(),
      birthDate: r.fields.birthDate ? formatMrzDate(r.fields.birthDate) : '',
      sex: normalizeSex(r.fields.sex ?? undefined),
      nationality: r.fields.nationality ?? '',
      rawMrz: lines.join('\n'),
      mrzValid: r.valid === true,
    };

    let namesUncertain = false;
    if (!data.mrzValid) {
      namesUncertain = true;
      const fromLine = extractNamesFromMrzB(sourceText);
      if (fromLine) {
        data = {
          ...data,
          surname: fromLine.surname || data.surname,
          givenNames: fromLine.givenNames || data.givenNames,
        };
      }
    }

    return { data, score: scoreMrzB(data, data.rawMrz, data.mrzValid), namesUncertain };
  } catch {
    return null;
  }
}

function tryParseGroupB(lines: string[], sourceText: string, useTd1: boolean): CandidateB | null {
  const lengths = lines.length === 3 ? [30] : [44, 36, 30];
  for (const len of lengths) {
    const sized = lines.map((l) => (l.length >= len ? l.slice(0, len) : l.padEnd(len, '<')));
    const res = parseSizedB(sized, sourceText, useTd1);
    if (res) return res;
  }
  return parseSizedB(lines, sourceText, useTd1);
}

function parseMrzCandidatesB(rawText: string, useTd1: boolean): CandidateB[] {
  const out: CandidateB[] = [];
  const lines = extractCandidateLinesB(rawText);
  for (let i = 0; i < lines.length; i++) {
    if (i + 2 < lines.length) {
      const c = tryParseGroupB([lines[i]!, lines[i + 1]!, lines[i + 2]!], rawText, useTd1);
      if (c) out.push(c);
    }
    if (i + 1 < lines.length) {
      const c = tryParseGroupB([lines[i]!, lines[i + 1]!], rawText, useTd1);
      if (c) out.push(c);
    }
  }
  if (lines.length === 1) {
    const c = tryParseGroupB(lines, rawText, useTd1);
    if (c) out.push(c);
  }
  return out.sort((a, b) => b.score - a.score);
}

const MIN_ACCEPT_B = 6;
const FAST_EXIT_B = 14;

async function runB(
  source: Buffer,
  worker: Worker,
  orientation: 'portrait' | 'landscape',
  opts: { useTd1: boolean } = { useTd1: false },
): Promise<{ data: MrzOut | null; accepted: boolean; ocrCalls: number; namesUncertain: boolean }> {
  const { useTd1 } = opts;
  const all: CandidateB[] = [];
  let ocrCalls = 0;

  const rightStrips: Array<[number, number, number, number]> = [
    [0.6, 0.03, 0.39, 0.94],
    [0.64, 0.03, 0.35, 0.94],
  ];
  const bottomStrips: Array<[number, number, number, number]> = [
    [0.02, 0.66, 0.96, 0.32],
    [0.02, 0.7, 0.96, 0.28],
  ];
  const cropSpecs = orientation === 'portrait'
    ? [...rightStrips, ...bottomStrips]
    : [...bottomStrips, ...rightStrips];

  const best = () => (all.length ? all.slice().sort((a, b) => b.score - a.score)[0]! : null);

  // Fase 1 — fast pass su ogni crop (block OCR), uscita anticipata a score >= 14
  const crops: Buffer[] = [];
  for (const [l, t, w, h] of cropSpecs) crops.push(await cropRel(source, l, t, w, h));

  for (const crop of crops) {
    for (const deg of [0, 90, -90] as const) {
      const img = deg === 0 ? crop : await sharp(crop).rotate(deg).png().toBuffer();
      const prepped = await prep(img, 1400);
      all.push(...parseMrzCandidatesB(await ocr(worker, prepped, PSM.SINGLE_BLOCK), useTd1));
      ocrCalls += 1;
      const b = best();
      if (b && b.score >= FAST_EXIT_B) {
        return { data: b.data, accepted: true, ocrCalls, namesUncertain: b.namesUncertain };
      }
    }
  }

  // Fase 2 — thorough pass: 3 righe in SINGLE_LINE + block su immagine binarizzata
  for (const crop of crops) {
    for (const deg of [0, 90, -90] as const) {
      const img = deg === 0 ? crop : await sharp(crop).rotate(deg).png().toBuffer();
      const prepped = await prep(img, 1400);
      const lines = await ocrByLines(worker, prepped, 3, 30);
      ocrCalls += 3;
      all.push(...parseMrzCandidatesB(lines.join('\n'), useTd1));

      const bin = await binarize(prepped);
      all.push(...parseMrzCandidatesB(await ocr(worker, bin, PSM.SINGLE_BLOCK), useTd1));
      ocrCalls += 1;

      const b = best();
      if (b && b.score >= FAST_EXIT_B) {
        return { data: b.data, accepted: true, ocrCalls, namesUncertain: b.namesUncertain };
      }
    }
  }

  const b = best();
  if (!b) return { data: null, accepted: false, ocrCalls, namesUncertain: false };
  return {
    data: b.data,
    accepted: b.score >= MIN_ACCEPT_B,
    ocrCalls,
    namesUncertain: b.namesUncertain,
  };
}

// ------------------------------------------- D: rilevamento della banda MRZ + lettura

interface Band {
  /** Coordinate relative alla vista (rotazione + raddrizzamento) in cui è stata trovata */
  left: number;
  top: number;
  width: number;
  height: number;
  /** Chiave della vista in cui la banda è valida */
  view: string;
  score: number;
}

interface TextRun {
  start: number;
  end: number;
  /** Estensione orizzontale dell'inchiostro su questa fascia */
  inkLeft: number;
  inkRight: number;
}

/**
 * Fasce di testo di una immagine, misurate sulle TRANSIZIONI chiaro→scuro per
 * riga e non sulla quantità di scuro. È la differenza che fa funzionare il
 * rilevamento su una foto appoggiata su un piano scuro: il tavolo è scuro ma
 * uniforme (zero transizioni), il testo stampato alterna continuamente.
 */
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

  const MIN_TEXT_TRANS = 12;
  const MIN_PEAK_TRANS = 25;

  const runs: TextRun[] = [];
  let start = -1;
  for (let y = 0; y <= h; y++) {
    const isText = y < h && trans[y]! >= MIN_TEXT_TRANS;
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
      const tallEnough = height >= Math.max(3, h * 0.008) && height <= h * 0.12;
      // La MRZ occupa quasi tutta la larghezza del documento
      const wideEnough = inkRight - inkLeft > w * 0.35;
      if (tallEnough && wideEnough && peak >= MIN_PEAK_TRANS) {
        runs.push({ start, end: y, inkLeft, inkRight });
      }
      start = -1;
    }
  }

  return runs;
}

/**
 * Raggruppa le fasce di testo in candidate MRZ: 3 righe (TD1) o 2 (TD2/TD3)
 * ravvicinate, di altezza simile e larghezza simile.
 */
function groupRuns(runs: TextRun[], w: number, h: number, view: string): Band[] {
  const bands: Band[] = [];

  const consider = (group: TextRun[]) => {
    const heights = group.map((r) => r.end - r.start);
    const avgH = heights.reduce((a, b) => a + b, 0) / heights.length;
    const maxDev = Math.max(...heights.map((x) => Math.abs(x - avgH))) / avgH;
    if (maxDev > 0.55) return;

    const gaps: number[] = [];
    for (let i = 1; i < group.length; i++) gaps.push(group[i]!.start - group[i - 1]!.end);
    if (gaps.some((g) => g > avgH * 1.8)) return;

    const spans = group.map((r) => r.inkRight - r.inkLeft);
    const avgSpan = spans.reduce((a, b) => a + b, 0) / spans.length;
    if (Math.max(...spans.map((s) => Math.abs(s - avgSpan))) / avgSpan > 0.4) return;

    const top = group[0]!.start;
    const bottom = group[group.length - 1]!.end;
    const inkLeft = Math.min(...group.map((r) => r.inkLeft));
    const inkRight = Math.max(...group.map((r) => r.inkRight));
    const padY = avgH * 0.45;
    const padX = avgH * 0.4;

    bands.push({
      left: Math.max(0, (inkLeft - padX) / w),
      top: Math.max(0, (top - padY) / h),
      width: Math.min(1, (inkRight - inkLeft + padX * 2) / w),
      height: Math.min(1, (bottom - top + padY * 2) / h),
      view,
      // Preferisce 3 righe (TD1), bande larghe e righe molto regolari
      score: (group.length === 3 ? 10 : 6) + avgSpan / w * 5 - maxDev * 3,
    });
  };

  for (let i = 0; i + 2 < runs.length; i++) consider([runs[i]!, runs[i + 1]!, runs[i + 2]!]);
  for (let i = 0; i + 1 < runs.length; i++) consider([runs[i]!, runs[i + 1]!]);

  return bands;
}

let debugBands = false;
let dumpOcr = false;

/**
 * Cerca la banda MRZ su tutte le viste dell'immagine. Il raddrizzamento va fatto
 * PRIMA di cercare la banda: con anche solo 2° di inclinazione le tre righe MRZ
 * si fondono in un'unica fascia e il raggruppamento a 3 righe non scatta più.
 */
async function detectMrzBands(
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
      // Soglie multiple: la luminosità della foto cambia molto da scatto a scatto
      for (const th of [140, 120, 100, 80]) {
        const { data, info } = await sharp(buf)
          .grayscale()
          .normalize()
          .resize({ width: 900, withoutEnlargement: true })
          .blur(0.5)
          .threshold(th)
          .raw()
          .toBuffer({ resolveWithObject: true });

        const runs = findTextRuns(data, info.width, info.height);
        const bands = groupRuns(runs, info.width, info.height, key);
        if (debugBands) {
          console.log(
            `    vista=${key.padEnd(7)} th=${th} ${info.width}x${info.height} → ${runs.length} fasce, ${bands.length} bande` +
              (bands.length
                ? ` (migliore ${bands[0]!.score.toFixed(1)} top=${bands[0]!.top.toFixed(2)} h=${bands[0]!.height.toFixed(2)})`
                : ''),
          );
        }
        all.push(...bands);
      }
    }
  }

  return { bands: all.sort((a, b) => b.score - a.score), views };
}

async function runD(
  source: Buffer,
  worker: Worker,
): Promise<{ data: MrzOut | null; accepted: boolean; ocrCalls: number; bands: number }> {
  const { bands, views } = await detectMrzBands(source, { deskew: false });
  const pool: Array<{ line: string; lineIndex: LineIndex }> = [];
  let ocrCalls = 0;

  const addToPool = (line: string) => {
    const idx = classifyLineA(line);
    if (idx !== null && scoreLineA(line, idx) >= 6) pool.push({ line, lineIndex: idx });
  };

  // Le bande sono ordinate per verosimiglianza: bastano le prime, con uscita
  // anticipata appena l'assemblaggio supera il gate.
  for (const [i, band] of bands.slice(0, 6).entries()) {
    const view = views.get(band.view) ?? source;
    const crop = await cropRel(view, band.left, band.top, band.width, band.height);
    const prepped = await prep(crop, 2000);

    const byLines = await ocrByLines(worker, prepped, 3, 30);
    for (const line of byLines) addToPool(line);
    ocrCalls += 3;

    const text = await ocr(worker, prepped, PSM.SINGLE_BLOCK);
    ocrCalls += 1;
    for (const raw of text.split(/\r?\n/)) {
      const l = padLine(raw);
      if (l.replace(/</g, '').length >= 8) addToPool(l);
    }

    if (dumpOcr) {
      const m = await sharp(crop).metadata();
      console.log(
        `    banda ${i} vista=${band.view} score=${band.score.toFixed(1)} ` +
          `rel=[l${band.left.toFixed(2)} t${band.top.toFixed(2)} w${band.width.toFixed(2)} h${band.height.toFixed(2)}] ` +
          `px=${m.width}x${m.height}`,
      );
      for (const l of byLines) console.log(`        riga: ${l}`);
      for (const raw of text.split(/\r?\n/)) {
        if (raw.trim()) console.log(`        blocco: ${padLine(raw)}`);
      }
    }

    const partial = assembleA(pool);
    if (partial && acceptA(partial)) {
      return { data: partial, accepted: true, ocrCalls, bands: bands.length };
    }
  }

  const data = assembleA(pool);
  return { data, accepted: data ? acceptA(data) : false, ocrCalls, bands: bands.length };
}

// ------------------- E: banda rilevata + validazione ICAO campo per campo

const CHECK_WEIGHTS = [7, 3, 1];

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

interface Td1Result {
  data: MrzOut;
  /** Campi il cui check digit ICAO torna: sono affidabili singolarmente */
  docOk: boolean;
  birthOk: boolean;
  expiryOk: boolean;
  compositeOk: boolean;
}

/**
 * Validazione TD1 campo per campo. Il check digit composito copre anche le zone
 * di riempimento `<`, dove un singolo artefatto OCR non tocca alcun dato ma
 * invalida tutto: qui serve solo come informazione, non come veto.
 */
function parseTd1PerField(lines: string[]): Td1Result | null {
  if (lines.length !== 3) return null;
  const [l1, l2, l3] = lines.map((l, i) => realignLine(l, i as LineIndex)) as [
    string,
    string,
    string,
  ];

  const docBody = l1.slice(5, 14);
  const docCheck = l1.slice(14, 15);
  const birthBody = l2.slice(0, 6);
  const birthCheck = l2.slice(6, 7);
  const expiryBody = l2.slice(8, 14);
  const expiryCheck = l2.slice(14, 15);
  const sexChar = l2.slice(7, 8);
  const nationality = l2.slice(15, 18);

  const composite =
    l1.slice(5, 30) + l2.slice(0, 7) + l2.slice(8, 15) + l2.slice(18, 29);
  const compositeOk = checkDigit(composite) === l2.slice(29, 30);

  const docOk = checkDigit(docBody) === docCheck;
  const birthOk = checkDigit(birthBody) === birthCheck;
  const expiryOk = checkDigit(expiryBody) === expiryCheck;

  const nameMatch = l3.match(/^([A-Z]+)<<([A-Z<]+)/);
  const surname = nameMatch?.[1] ?? '';
  const givenNames = (nameMatch?.[2] ?? '').replace(/<+/g, ' ').trim();

  // Il numero documento italiano include il check digit: AA99999AA + 9
  const documentNumber = (docBody + docCheck).replace(/<+$/, '');

  const data: MrzOut = {
    documentNumber,
    surname,
    givenNames,
    birthDate: formatMrzDate(birthBody),
    sex: normalizeSex(sexChar === 'H' || sexChar === 'N' ? 'M' : sexChar),
    nationality,
    rawMrz: [l1, l2, l3].join('\n'),
    mrzValid: compositeOk && docOk && birthOk && expiryOk,
  };

  return { data, docOk, birthOk, expiryOk, compositeOk };
}

function realignTd3Line1(line: string): string {
  const l = padLine(line, 44);
  const m = l.match(/[PIAC][A-Z<][A-Z]{3}[A-Z]+<<[A-Z<]+/);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 44);
  return l;
}

function realignTd3Line2(line: string): string {
  const l = padLine(line, 44);
  const m = l.match(/[A-Z0-9]{9}\d[A-Z]{3}\d{6}\d/);
  if (m && m.index !== undefined && m.index > 0) return padLine(l.slice(m.index), 44);
  return l;
}

/** Passaporto TD3 — 2 righe da 44 caratteri */
function parseTd3PerField(lines: string[]): Td1Result | null {
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

  const nameMatch = l1.match(/^[PIAC][A-Z<][A-Z]{3}([A-Z]+)<<([A-Z<]+)/);
  const surname = nameMatch?.[1] ?? '';
  const givenNames = (nameMatch?.[2] ?? '').replace(/<+/g, ' ').trim();
  const documentNumber = (docBody + docCheck).replace(/<+$/, '');

  const data: MrzOut = {
    documentNumber,
    surname,
    givenNames,
    birthDate: formatMrzDate(birthBody),
    sex: normalizeSex(sexChar),
    nationality,
    rawMrz: [l1, l2].join('\n'),
    mrzValid: compositeOk && docOk && birthOk && expiryOk,
  };

  return { data, docOk, birthOk, expiryOk, compositeOk };
}

function acceptPerField(r: Td1Result): boolean {
  const doc = r.data.documentNumber.replace(/<+$/, '');
  if (!doc || doc.includes('<') || !/^[A-Z0-9]{6,12}$/.test(doc)) return false;
  return (
    r.docOk &&
    r.birthOk &&
    Boolean(r.data.surname) &&
    doc.length >= 6
  );
}

function scorePerField(r: Td1Result): number {
  let s = 0;
  if (r.docOk) s += 12;
  if (r.birthOk) s += 12;
  if (r.expiryOk) s += 6;
  if (r.compositeOk) s += 4;
  if (r.data.surname.length >= 2) s += 2;
  if (r.data.givenNames.length >= 2) s += 1;
  return s;
}

async function bandPixelSize(
  view: Buffer,
  band: Band,
): Promise<{ width: number; height: number } | null> {
  const meta = await sharp(view).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  return {
    width: Math.floor(w * band.width),
    height: Math.floor(h * band.height),
  };
}

/** Lettura TD1 su una singola banda rilevata */
async function readTd1Band(
  worker: Worker,
  crop: Buffer,
): Promise<{ result: Td1Result | null; ocrCalls: number }> {
  let ocrCalls = 0;
  const prepped = await prep(crop, MIN_BAND_WIDTH_PX);
  const scaled = await upscaleBandForOcr(prepped, 3);

  const byLines = await ocrByLines(worker, scaled, 3, 30);
  ocrCalls += 3;
  const aligned = byLines.map((l, i) => realignLine(l, i as LineIndex));
  let result = parseTd1PerField(aligned);
  if (result && acceptPerField(result)) return { result, ocrCalls };

  const text = await ocr(worker, scaled, PSM.SINGLE_BLOCK);
  ocrCalls += 1;
  const blockLines = text
    .split(/\r?\n/)
    .map((l) => padLine(l))
    .filter((l) => l.replace(/</g, '').length >= 8);
  if (blockLines.length >= 3) {
    result = parseTd1PerField(blockLines.slice(0, 3).map((l, i) => realignLine(l, i as LineIndex)));
    if (result && acceptPerField(result)) return { result, ocrCalls };
  }

  const bin = await binarize(scaled);
  const binText = await ocr(worker, bin, PSM.SINGLE_BLOCK);
  ocrCalls += 1;
  const binLines = binText
    .split(/\r?\n/)
    .map((l) => padLine(l))
    .filter((l) => l.replace(/</g, '').length >= 8);
  if (binLines.length >= 3) {
    result = parseTd1PerField(binLines.slice(0, 3).map((l, i) => realignLine(l, i as LineIndex)));
    if (result && acceptPerField(result)) return { result, ocrCalls };
  }

  return { result: result && acceptPerField(result) ? result : null, ocrCalls };
}

/** Lettura TD3 (passaporto) su una singola banda rilevata */
async function readTd3Band(
  worker: Worker,
  crop: Buffer,
): Promise<{ result: Td1Result | null; ocrCalls: number }> {
  let ocrCalls = 0;
  const prepped = await prep(crop, MIN_BAND_WIDTH_PX);
  const scaled = await upscaleBandForOcr(prepped, 2);

  const tryPairs = (lines: string[]): Td1Result | null => {
    if (lines.length < 2) return null;
    for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        for (const pair of [
          [lines[i]!, lines[j]!],
          [lines[j]!, lines[i]!],
        ] as const) {
          const r = parseTd3PerField(pair);
          if (r && acceptPerField(r)) return r;
        }
      }
    }
    return null;
  };

  const byLines = await ocrByLines(worker, scaled, 2, 44);
  ocrCalls += 2;
  let result = tryPairs(byLines);
  if (result) return { result, ocrCalls };

  const text = await ocr(worker, scaled, PSM.SINGLE_BLOCK);
  ocrCalls += 1;
  result = tryPairs(extractCandidateLinesB(text).map((l) => padLine(l, 44)));
  if (result) return { result, ocrCalls };

  const bin = await binarize(scaled);
  const binText = await ocr(worker, bin, PSM.SINGLE_BLOCK);
  ocrCalls += 1;
  result = tryPairs(extractCandidateLinesB(binText).map((l) => padLine(l, 44)));
  if (result) return { result, ocrCalls };

  return { result: null, ocrCalls };
}

/**
 * Varianza del profilo di transizioni per riga: massima quando le righe di
 * testo sono parallele ai bordi.
 *
 * Due accortezze indispensabili, scoperte misurando:
 * 1. ogni angolo candidato subisce lo stesso ricampionamento (anche lo 0),
 *    altrimenti l'immagine intatta vince sempre per minore sfocatura;
 * 2. si misura solo la parte centrale, per escludere il bordo introdotto
 *    dalla rotazione.
 */
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

/** Stima e annulla l'inclinazione: ricerca grossolana a 2°, poi rifinitura a 1° */
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

async function runE(
  source: Buffer,
  worker: Worker,
  opts: { deskew: boolean; formatHint?: string } = { deskew: false },
): Promise<{
  data: MrzOut | null;
  accepted: boolean;
  ocrCalls: number;
  namesUncertain: boolean;
}> {
  const { bands, views } = await detectMrzBands(source, { deskew: opts.deskew });
  let ocrCalls = 0;
  const preferTd3 = opts.formatHint === 'TD3';

  let best: Td1Result | null = null;
  let bestScore = -1;

  const consider = (r: Td1Result | null) => {
    if (!r || !acceptPerField(r)) return;
    const sc = scorePerField(r);
    if (sc > bestScore) {
      bestScore = sc;
      best = r;
    }
  };

  // Fix 3: prova tutte le bande plausibili e scegli quella con check digit migliori
  for (const band of bands.slice(0, 20)) {
    const view = views.get(band.view) ?? source;
    const px = await bandPixelSize(view, band);
    if (!px || px.width < 120 || px.height < 28) continue;

    const crop = await cropRel(view, band.left, band.top, band.width, band.height);
    const aspect = px.height / px.width;
    const likelyTd3 = preferTd3 || aspect < 0.22 || band.height < 0.06;

    if (likelyTd3) {
      const td3 = await readTd3Band(worker, crop);
      ocrCalls += td3.ocrCalls;
      consider(td3.result);
    }

    if (!preferTd3) {
      const td1 = await readTd1Band(worker, crop);
      ocrCalls += td1.ocrCalls;
      consider(td1.result);
    }
  }

  if (!best) return { data: null, accepted: false, ocrCalls, namesUncertain: false };
  const accepted = acceptPerField(best);
  return {
    data: best.data,
    accepted,
    ocrCalls,
    namesUncertain: !best.compositeOk,
  };
}

// ------------------------------------------------------------------------ dataset

interface Variant {
  name: string;
  buf: Buffer;
}

async function buildVariants(source: Buffer, limit: number): Promise<Variant[]> {
  const meta = await sharp(source).metadata();
  const w = meta.width ?? 1000;

  const recipes: Array<{ name: string; make: () => Promise<Buffer> }> = [
    { name: 'originale', make: async () => source },
    { name: 'rot +2°', make: () => sharp(source).rotate(2, { background: '#808080' }).png().toBuffer() },
    { name: 'rot -3°', make: () => sharp(source).rotate(-3, { background: '#808080' }).png().toBuffer() },
    { name: 'rot +6°', make: () => sharp(source).rotate(6, { background: '#808080' }).png().toBuffer() },
    { name: 'sfocata 0.8', make: () => sharp(source).blur(0.8).png().toBuffer() },
    { name: 'sfocata 1.6', make: () => sharp(source).blur(1.6).png().toBuffer() },
    { name: 'buia (0.75x)', make: () => sharp(source).linear(0.75, 0).png().toBuffer() },
    { name: 'sovraesposta (1.3x)', make: () => sharp(source).linear(1.3, 10).png().toBuffer() },
    { name: 'jpeg q60', make: () => sharp(source).jpeg({ quality: 60 }).toBuffer() },
    { name: 'jpeg q35', make: () => sharp(source).jpeg({ quality: 35 }).toBuffer() },
    { name: `ridotta 1200px`, make: () => sharp(source).resize({ width: Math.min(1200, w) }).png().toBuffer() },
    { name: `ridotta 800px`, make: () => sharp(source).resize({ width: Math.min(800, w) }).png().toBuffer() },
    {
      name: 'ridotta 1000px + jpeg q50',
      make: () => sharp(source).resize({ width: Math.min(1000, w) }).jpeg({ quality: 50 }).toBuffer(),
    },
    {
      name: 'rot -2° + sfocata 1.0 + jpeg q70',
      make: () =>
        sharp(source).rotate(-2, { background: '#808080' }).blur(1.0).jpeg({ quality: 70 }).toBuffer(),
    },
  ];

  const out: Variant[] = [];
  for (const r of recipes.slice(0, limit)) {
    out.push({ name: r.name, buf: await r.make() });
  }
  return out;
}

// --------------------------------------------------------------------- valutazione

/**
 * Nel TD1 la terza riga (cognome e nome) non entra in NESSUN check digit: un
 * errore sui nomi è invisibile a qualunque validazione e va sempre corretto a
 * video. Numero documento, date e sesso hanno invece un check digit proprio: se
 * uno di questi è sbagliato e viene accettato, l'errore finisce nel registro.
 */
type Verdict =
  | 'tutto_corretto'
  | 'solo_nomi_errati'
  | 'campo_verificabile_errato'
  | 'non_letto';

function evaluate(
  data: MrzOut | null,
  accepted: boolean,
  truth: Truth | null,
): { verdict: Verdict; wrong: string[] } {
  if (!data || !accepted) return { verdict: 'non_letto', wrong: [] };
  if (!truth) return { verdict: 'non_letto', wrong: [] }; // non conta nel tally; stampato a parte

  const hardWrong: string[] = [];
  const docGot = data.documentNumber.replace(/<+$/, '');
  const docExp = truth.documentNumber.replace(/<+$/, '');
  if (docGot !== docExp && !docGot.startsWith(docExp) && docExp !== docGot.slice(0, -1)) {
    hardWrong.push(`doc=${data.documentNumber || '∅'}`);
  }
  if (data.birthDate !== truth.birthDate) hardWrong.push(`nascita=${data.birthDate || '∅'}`);
  if (data.sex !== truth.sex) hardWrong.push(`sesso=${data.sex}`);

  const softWrong: string[] = [];
  if (!namesMatch(data.surname, truth.surname)) softWrong.push(`cognome=${data.surname || '∅'}`);
  if (!namesMatch(data.givenNames, truth.givenNames)) softWrong.push(`nome=${data.givenNames || '∅'}`);

  if (hardWrong.length) {
    return { verdict: 'campo_verificabile_errato', wrong: [...hardWrong, ...softWrong] };
  }
  if (softWrong.length) return { verdict: 'solo_nomi_errati', wrong: softWrong };
  return { verdict: 'tutto_corretto', wrong: [] };
}

// ---------------------------------------------------------------------------- main

async function main() {
  const argv = process.argv;
  const arg = (name: string) => {
    const i = argv.indexOf(name);
    return i !== -1 ? argv[i + 1] : undefined;
  };
  const useCorpus = argv.includes('--corpus');
  const verifiedOnly = argv.includes('--verified');
  const compact = argv.includes('--compact') || useCorpus;
  const jsonOut = argv.includes('--json');
  const splitArg = arg('--split');
  const split =
    splitArg === 'dev' || splitArg === 'holdout' ? (splitArg as 'dev' | 'holdout') : undefined;
  const onlyPhoto = arg('--photo');
  const only = arg('--only')?.toUpperCase();
  const variantLimit = compact
    ? 1
    : Number.parseInt(arg('--variants') ?? '14', 10);

  const samples = loadSamples(useCorpus, onlyPhoto, verifiedOnly, split);

  if (samples.length === 0) {
    console.error('Nessun campione da processare.');
    process.exit(split ? 1 : 0);
  }

  for (const s of samples) {
    if (!fs.existsSync(s.photo)) {
      console.error('Foto non trovata:', s.photo);
      process.exit(1);
    }
  }

  const worker = await createWorker('mrz', 1, {
    langPath: path.join(ROOT, 'public/model'),
    corePath: path.join(ROOT, 'public/tesseract'),
    gzip: true,
  });

  const ALL_ENGINES = [
    { id: 'A', label: 'A  nostro' },
    { id: 'A+', label: 'A+ nostro + blocco' },
    { id: 'B', label: 'B  loro' },
    { id: 'B+', label: 'B+ loro + TD1' },
    { id: 'D', label: 'D  banda rilevata' },
    { id: 'E', label: 'E  banda + campo/campo' },
    { id: 'F', label: 'F  E + raddrizzamento' },
    { id: 'G', label: 'G  ottimizzato learning' },
  ] as const;
  type EngineId = (typeof ALL_ENGINES)[number]['id'];

  debugBands = argv.includes('--debug-bands');
  dumpOcr = argv.includes('--dump-ocr');

  const wanted = arg('--engines')?.split(',').map((s) => s.trim().toUpperCase());
  const ENGINES = wanted
    ? ALL_ENGINES.filter((e) => wanted.includes(e.id.toUpperCase()))
    : ALL_ENGINES;

  const VERDICTS: Verdict[] = [
    'tutto_corretto',
    'solo_nomi_errati',
    'campo_verificabile_errato',
    'non_letto',
  ];
  const empty = (): Record<Verdict, number> => ({
    tutto_corretto: 0,
    solo_nomi_errati: 0,
    campo_verificabile_errato: 0,
    non_letto: 0,
  });
  const tally: Record<string, Record<Verdict, number>> = {};
  const timing: Record<string, number> = {};
  const calls: Record<string, number> = {};
  for (const e of ENGINES) {
    tally[e.id] = empty();
    timing[e.id] = 0;
    calls[e.id] = 0;
  }

  const W = 26;
  const RULE = '-'.repeat(30 + W * ENGINES.length);
  let totalRuns = 0;
  let discoveryRead = 0;
  let discoveryTotal = 0;

  for (const sample of samples) {
    const source = await sharp(sample.photo).rotate().png().toBuffer();
    const meta = await sharp(source).metadata();
    const orientation: 'portrait' | 'landscape' =
      (meta.height ?? 0) > (meta.width ?? 0) * 1.05 ? 'portrait' : 'landscape';

    const run = async (id: EngineId, buf: Buffer) => {
      if (id === 'A') return runA(buf, worker, { block: false });
      if (id === 'A+') return runA(buf, worker, { block: true });
      if (id === 'B') return runB(buf, worker, orientation, { useTd1: false });
      if (id === 'B+') return runB(buf, worker, orientation, { useTd1: true });
      if (id === 'D') return runD(buf, worker);
      if (id === 'E') return runE(buf, worker, { deskew: false, formatHint: sample.format });
      if (id === 'F') return runE(buf, worker, { deskew: true, formatHint: sample.format });
      return runOptimizedEngine(buf, worker, {
        deskew: true,
        formatHint: sample.format,
        expectItalian: sample.format !== 'TD3',
      });
    };

    const variants = await buildVariants(source, variantLimit);
    totalRuns += variants.length;

    console.log(`\n### ${sample.label}`);
    console.log(`    ${meta.width}x${meta.height} (${orientation}) · ${variants.length} varianti`);
    if (sample.truth) {
      console.log(
        `    atteso: ${sample.truth.surname} / ${sample.truth.givenNames} / ${sample.truth.documentNumber} / ${sample.truth.birthDate} / ${sample.truth.sex}`,
      );
    } else {
      console.log('    atteso: (scoperta — annotare verità dal risultato)');
    }
    console.log('');
    console.log('variante'.padEnd(30) + ENGINES.map((e) => e.label.padEnd(W)).join(''));
    console.log(RULE);

    if (!sample.truth) discoveryTotal += variants.length;

    for (const v of variants) {
      const line: string[] = [v.name.slice(0, 29).padEnd(30)];

      for (const e of ENGINES) {
        if (only && only !== e.id.toUpperCase()) {
          line.push('—'.padEnd(W));
          continue;
        }
        const t0 = Date.now();
        const res = await run(e.id, v.buf);
        const ms = Date.now() - t0;
        timing[e.id]! += ms;
        calls[e.id]! += res.ocrCalls;

        const { verdict, wrong } = evaluate(res.data, res.accepted, sample.truth);
        if (sample.truth) {
          tally[e.id]![verdict]++;
        } else if (res.accepted && res.data) {
          discoveryRead++;
        }

        const mark =
          verdict === 'tutto_corretto'
            ? 'OK'
            : verdict === 'solo_nomi_errati'
              ? 'nomi'
              : verdict === 'campo_verificabile_errato'
                ? 'ERR'
                : '--';
        const detail = wrong.length ? ' ' + wrong.join(' ') : '';
        // B avvisa l'operatore solo quando i check digit non tornano, e solo sui nomi
        const warned = 'namesUncertain' in res && res.namesUncertain ? '!' : '';
        line.push(`${mark}${warned} ${(ms / 1000).toFixed(1)}s${detail}`.slice(0, W - 1).padEnd(W));

        if (!sample.truth && v.name === 'originale' && res.data && res.accepted) {
          const d = res.data;
          console.log(
            `    ↳ letto: ${d.surname} / ${d.givenNames} / ${d.documentNumber} / ${d.birthDate} / ${d.sex}`,
          );
        }
      }

      console.log(line.join(''));
    }
  }

  const scoredRuns = totalRuns - discoveryTotal;
  const summary = {
    generatedAt: new Date().toISOString(),
    split: split ?? null,
    verifiedOnly,
    sampleCount: samples.length,
    scoredRuns,
    discoveryTotal,
    engines: ENGINES.map((e) => ({
      id: e.id,
      label: e.label,
      tally: tally[e.id],
      avgSeconds: scoredRuns ? timing[e.id]! / scoredRuns / 1000 : null,
      ocrCalls: calls[e.id],
    })),
  };

  if (jsonOut) {
    console.log(JSON.stringify(summary, null, 2));
    await worker.terminate();
    return;
  }

  console.log('\n' + '='.repeat(30 + W * ENGINES.length));
  console.log(
    `  TOTALE su ${scoredRuns} prove verificate`.padEnd(30) +
      ENGINES.map((e) => e.label.padEnd(W)).join(''),
  );
  if (discoveryTotal > 0) {
    console.log(`  ( + ${discoveryTotal} pagine PDF in scoperta, esclusi dal punteggio )`);
  }
  console.log(RULE);
  for (const verdict of VERDICTS) {
    console.log(
      `  ${verdict}`.padEnd(30) +
        ENGINES.map((e) => `${tally[e.id]![verdict]}/${scoredRuns || 1}`.padEnd(W)).join(''),
    );
  }
  console.log(RULE);
  console.log(
    '  tempo medio'.padEnd(30) +
      ENGINES.map((e) => `${scoredRuns ? (timing[e.id]! / scoredRuns / 1000).toFixed(1) : '—'}s`.padEnd(W)).join(''),
  );
  console.log(
    '  chiamate OCR totali'.padEnd(30) +
      ENGINES.map((e) => String(calls[e.id]).padEnd(W)).join(''),
  );
  console.log('='.repeat(30 + W * ENGINES.length));
  console.log(
    '\n  tutto_corretto             nessun intervento necessario\n' +
      '  solo_nomi_errati           cognome/nome da correggere a video (nessun check digit li protegge)\n' +
      '  campo_verificabile_errato  GRAVE: numero documento o data errati accettati come validi\n' +
      '  non_letto                  nessun dato precompilato, si passa al manuale\n' +
      '  "!"                        il sistema avvisava di verificare i nomi',
  );

  await worker.terminate();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
