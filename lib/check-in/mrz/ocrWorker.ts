import { createWorker, PSM, type Worker } from 'tesseract.js';
import {
  binarizeForMrz,
  buildAllMrzCrops,
  enhanceForOcr,
  rotateCanvas,
  upscaleForMrz,
} from './cropRegion';
import { loadImageFileToCanvas } from './imageLoader';
import { getEngineGDebug, runEngineG } from './engineG';
import {
  applyNameFixes,
  assembleMrzFromLinePool,
  classifyMrzLine,
  isStrongMrzHit,
  parseMrzCandidates,
  pickBestMrzFromCandidates,
  scoreMrzLine,
  shouldAcceptMrzResult,
  type MrzLineIndex,
  type MrzParseCandidate,
} from './parseMrz';
import type { MrzExtractedData } from '@/types/check-in';

const MRZ_WHITELIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';
const FAST_EXIT_SCORE = 14;

const OCR_OPTS = {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract/',
  langPath: '/model/',
  gzip: true,
  cachePath: 'hotelsdrop-mrz-v10',
  cacheMethod: 'write' as const,
  // Su iOS Safari i Blob URL del worker possono far crashare il tab.
  workerBlobURL: false,
};

let workerPromise: Promise<Worker> | null = null;
let lastOcrDebug = '';

export function getLastOcrDebug(): string {
  return lastOcrDebug;
}

async function getWorker(): Promise<Worker> {
  if (!workerPromise) {
    workerPromise = createWorker('mrz', 1, OCR_OPTS).catch((err) => {
      workerPromise = null;
      throw err;
    });
  }
  return workerPromise;
}

function normalizeLine(text: string): string {
  return text
    .toUpperCase()
    .replace(/\s+/g, '')
    .replace(/[|]/g, 'I')
    .replace(/[^A-Z0-9<]/g, '');
}

function collectFromText(text: string, out: MrzParseCandidate[]): void {
  if (!text.trim()) return;
  out.push(...parseMrzCandidates(text));
}

function cropLine(source: HTMLCanvasElement, y: number, h: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = h;
  const ctx = out.getContext('2d');
  ctx?.drawImage(source, 0, y, source.width, h, 0, 0, source.width, h);
  return out;
}

async function recognizeLine(worker: Worker, canvas: HTMLCanvasElement): Promise<string> {
  await worker.setParameters({
    tessedit_char_whitelist: MRZ_WHITELIST,
    tessedit_pageseg_mode: PSM.SINGLE_LINE,
    user_defined_dpi: '400',
  });
  const { data } = await worker.recognize(canvas);
  return normalizeLine(data.text ?? '');
}

async function recognizeBlock(worker: Worker, canvas: HTMLCanvasElement): Promise<string> {
  await worker.setParameters({
    tessedit_char_whitelist: MRZ_WHITELIST,
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
    user_defined_dpi: '400',
  });
  const { data } = await worker.recognize(canvas);
  return data.text?.trim() ?? '';
}

async function recognizeMrzLines(
  worker: Worker,
  source: HTMLCanvasElement,
  lineCount: 3 | 2,
  lineLen: 30 | 44,
): Promise<string[]> {
  const lineH = Math.max(1, Math.floor(source.height / lineCount));
  const lines: string[] = [];

  for (let i = 0; i < lineCount; i++) {
    const slice = cropLine(source, i * lineH, lineH);
    let line = await recognizeLine(worker, slice);
    destroyCanvas(slice);
    if (line.length > lineLen) line = line.slice(0, lineLen);
    if (line.length < lineLen) line = line.padEnd(lineLen, '<');
    lines.push(line);
  }

  return lines;
}

function pushLinePool(
  pool: Array<{ line: string; lineIndex: MrzLineIndex }>,
  lines: string[],
  lineLen: 30 | 44,
): void {
  if (lineLen !== 30) return;
  for (const line of lines) {
    const lineIndex = classifyMrzLine(line);
    if (lineIndex !== null && scoreMrzLine(line, lineIndex) >= 6) {
      pool.push({ line, lineIndex });
    }
  }
}

function pickFromPool(
  all: MrzParseCandidate[],
  linePool: Array<{ line: string; lineIndex: MrzLineIndex }>,
  label: string,
): MrzExtractedData | null {
  const assembled = assembleMrzFromLinePool(linePool);
  if (assembled && shouldAcceptMrzResult(assembled)) {
    lastOcrDebug = `[${label} merge] ${assembled.surname}/${assembled.givenNames}/${assembled.documentNumber} valid=${assembled.mrzValid}`;
    return assembled;
  }

  const sorted = [...all].sort((a, b) => b.score - a.score);
  const top = sorted[0];

  const merged = pickBestMrzFromCandidates(all);
  const candidates = [merged, top?.data].filter(Boolean) as MrzExtractedData[];

  for (const hit of candidates) {
    const fixed = applyNameFixes(hit);
    if (shouldAcceptMrzResult(fixed)) {
      lastOcrDebug = `[${label}] ${fixed.surname}/${fixed.givenNames}/${fixed.documentNumber} valid=${fixed.mrzValid}`;
      return fixed;
    }
  }

  lastOcrDebug =
    sorted
      .slice(0, 3)
      .map((c) => `[${c.score}] ${c.data.surname}/${c.data.documentNumber}`)
      .join(' | ') + ' | lettura non affidabile';
  return null;
}

async function ocrMrzCrop(
  worker: Worker,
  crop: HTMLCanvasElement,
  all: MrzParseCandidate[],
  linePool: Array<{ line: string; lineIndex: MrzLineIndex }>,
): Promise<void> {
  const owned: HTMLCanvasElement[] = [];

  const enhanced = enhanceForOcr(crop);
  if (enhanced !== crop) owned.push(enhanced);
  const upscaled = upscaleForMrz(enhanced, 2000);
  if (upscaled !== enhanced && upscaled !== crop) owned.push(upscaled);
  const binary = binarizeForMrz(upscaled);
  if (binary !== upscaled) owned.push(binary);

  try {
    for (const [buf, lineCount, lineLen] of [
      [upscaled, 3, 30],
      [upscaled, 2, 44],
      [binary, 3, 30],
      [binary, 2, 44],
    ] as const) {
      const lines = await recognizeMrzLines(worker, buf, lineCount, lineLen);
      pushLinePool(linePool, lines, lineLen);
      collectFromText(lines.join('\n'), all);
      if (all.some((c) => c.score >= FAST_EXIT_SCORE && shouldAcceptMrzResult(applyNameFixes(c.data)))) return;
    }

    collectFromText(await recognizeBlock(worker, upscaled), all);
    collectFromText(await recognizeBlock(worker, binary), all);
  } finally {
    for (const c of owned) destroyCanvas(c);
  }
}

async function scanSourcesLegacy(
  worker: Worker,
  sources: HTMLCanvasElement[],
  label: string,
  allCandidates: MrzParseCandidate[],
  linePool: Array<{ line: string; lineIndex: MrzLineIndex }>,
): Promise<MrzExtractedData | null> {
  for (const source of sources) {
    await ocrMrzCrop(worker, source, allCandidates, linePool);
    const hit = pickFromPool(allCandidates, linePool, label);
    if (hit && isStrongMrzHit(hit)) return hit;
  }

  return pickFromPool(allCandidates, linePool, label);
}

async function scanCanvasVariantsLegacy(
  worker: Worker,
  canvas: HTMLCanvasElement,
  orientation: 'portrait' | 'landscape',
  label: string,
  allCandidates: MrzParseCandidate[],
  linePool: Array<{ line: string; lineIndex: MrzLineIndex }>,
): Promise<MrzExtractedData | null> {
  const crops = buildAllMrzCrops(canvas, orientation);
  try {
    return await scanSourcesLegacy(worker, crops, label, allCandidates, linePool);
  } finally {
    for (const c of crops) destroyCanvas(c);
  }
}

async function scanWithRotationsLegacy(
  worker: Worker,
  canvas: HTMLCanvasElement,
  orientation: 'portrait' | 'landscape',
  label: string,
): Promise<MrzExtractedData | null> {
  const allCandidates: MrzParseCandidate[] = [];
  const linePool: Array<{ line: string; lineIndex: MrzLineIndex }> = [];
  const rotations: Array<{ canvas: HTMLCanvasElement; suffix: string; owned: boolean }> = [
    { canvas, suffix: 'base', owned: false },
  ];

  if (orientation === 'portrait') {
    for (const deg of [90, -90] as const) {
      rotations.unshift({ canvas: rotateCanvas(canvas, deg), suffix: `rot${deg}`, owned: true });
    }
  }

  try {
    for (const { canvas: variant, suffix } of rotations) {
      const hit = await scanCanvasVariantsLegacy(
        worker,
        variant,
        orientation,
        `${label}-${suffix}`,
        allCandidates,
        linePool,
      );
      if (hit && isStrongMrzHit(hit)) return hit;
    }

    return pickFromPool(allCandidates, linePool, label);
  } finally {
    for (const { canvas: variant, owned } of rotations) {
      if (owned) destroyCanvas(variant);
    }
  }
}

async function extractWithEngineG(
  canvas: HTMLCanvasElement,
  worker: Worker,
  orientation: 'portrait' | 'landscape',
): Promise<MrzExtractedData | null> {
  const run = (opts: Parameters<typeof runEngineG>[2]) => runEngineG(canvas, worker, { deskew: true, ...opts });

  // Portrait: prima CIE italiana, poi documenti esteri TD1 (es. carta tedesca)
  if (orientation === 'portrait') {
    const italian = await run({ expectItalian: true });
    if (italian) {
      lastOcrDebug = getEngineGDebug();
      return italian;
    }
    const foreign = await run({ expectItalian: false });
    if (foreign) {
      lastOcrDebug = getEngineGDebug();
      return foreign;
    }
  } else {
    const td1 = await run({ expectItalian: false });
    if (td1) {
      lastOcrDebug = getEngineGDebug();
      return td1;
    }
    const td3 = await run({ formatHint: 'TD3', expectItalian: false });
    if (td3) {
      lastOcrDebug = getEngineGDebug();
      return td3;
    }
  }

  lastOcrDebug = getEngineGDebug() || 'Engine G: nessun risultato';
  return null;
}

export async function warmupOcr(): Promise<void> {
  const worker = await getWorker();
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  ctx?.fillRect(0, 0, 32, 32);
  await worker.recognize(canvas);
  destroyCanvas(canvas);
}

export async function extractMrzFromFullFrame(
  canvas: HTMLCanvasElement,
  orientation: 'portrait' | 'landscape' = 'portrait',
  options?: { allowLegacyFallback?: boolean },
): Promise<MrzExtractedData | null> {
  const worker = await getWorker();
  const engineHit = await extractWithEngineG(canvas, worker, orientation);
  if (engineHit) return engineHit;

  if (options?.allowLegacyFallback === false) return null;

  return scanWithRotationsLegacy(worker, canvas, orientation, 'legacy-frame');
}

export async function extractMrzFromFile(file: File): Promise<MrzExtractedData | null> {
  const canvas = await loadImageFileToCanvas(file);
  if (!canvas) {
    lastOcrDebug = 'Impossibile aprire la foto (prova JPG/PNG)';
    return null;
  }

  const orientation = canvas.height > canvas.width * 1.05 ? 'portrait' : 'landscape';
  const worker = await getWorker();

  try {
    const engineHit = await extractWithEngineG(canvas, worker, orientation);
    if (engineHit) return engineHit;

    let hit = await scanWithRotationsLegacy(worker, canvas, orientation, 'legacy-photo');
    if (hit) return hit;

    hit = await scanSourcesLegacy(worker, [canvas], 'legacy-full', [], []);
    return hit;
  } finally {
    destroyCanvas(canvas);
  }
}

export function destroyCanvas(canvas: HTMLCanvasElement | null): void {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 0;
  canvas.height = 0;
}

export function playCaptureSound(): void {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch {
    // audio opzionale
  }
}
