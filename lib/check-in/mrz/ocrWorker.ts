import type { MrzParseCandidate } from './parseMrz';
import {
  binarizeForMrz,
  buildAllMrzCrops,
  enhanceForOcr,
  rotateCanvas,
  upscaleForMrz,
} from './cropRegion';
import { clearTesseractModelCache } from './clearOcrCache';
import type { MrzExtractedData } from '@/types/check-in';
import { createWorker, PSM, type Worker } from 'tesseract.js';
import { parseMrzCandidates } from './parseMrz';
import { loadImageFileToCanvas } from './imageLoader';

const MRZ_WHITELIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';
const MIN_ACCEPT_SCORE = 6;
const FAST_EXIT_SCORE = 14;

export type OcrScanContext = {
  mode: 'camera' | 'photo';
  orientation?: 'portrait' | 'landscape';
};

const OCR_OPTS = {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract/',
  langPath: '/model/',
  gzip: true,
  cachePath: 'fastcheckin-mrz-v5',
  cacheMethod: 'write' as const,
};

let workerPromise: Promise<Worker> | null = null;
let cacheCleared = false;
let lastOcrDebug = '';

export function getLastOcrDebug(): string {
  return lastOcrDebug;
}

async function initWorker(): Promise<Worker> {
  if (!cacheCleared) {
    await clearTesseractModelCache();
    cacheCleared = true;
  }

  const worker = await createWorker('mrz', 1, OCR_OPTS);
  await worker.setParameters({
    tessedit_char_whitelist: MRZ_WHITELIST,
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
    user_defined_dpi: '400',
    preserve_interword_spaces: '0',
  });
  return worker;
}

async function getWorker(): Promise<Worker> {
  if (!workerPromise) {
    workerPromise = initWorker().catch((err) => {
      workerPromise = null;
      throw err;
    });
  }
  return workerPromise;
}

export async function warmupOcr(): Promise<void> {
  await getWorker();
}

async function recognizeLine(worker: Worker, canvas: HTMLCanvasElement): Promise<string> {
  await worker.setParameters({
    tessedit_char_whitelist: MRZ_WHITELIST,
    tessedit_pageseg_mode: PSM.SINGLE_LINE,
  });
  const { data } = await worker.recognize(canvas);
  return normalizeLine(data.text ?? '');
}

async function recognizeBlock(worker: Worker, canvas: HTMLCanvasElement): Promise<string> {
  await worker.setParameters({
    tessedit_char_whitelist: MRZ_WHITELIST,
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
  });
  const { data } = await worker.recognize(canvas);
  return data.text?.trim() ?? '';
}

function normalizeLine(text: string): string {
  return text
    .toUpperCase()
    .replace(/\s+/g, '')
    .replace(/[|]/g, 'I')
    .replace(/[^A-Z0-9<]/g, '');
}

function collectFromText(text: string, out: MrzParseCandidate[]): void {
  if (!text) return;
  out.push(...parseMrzCandidates(text));
}

function pickBest(candidates: MrzParseCandidate[]): MrzExtractedData | null {
  if (candidates.length === 0) {
    lastOcrDebug = '(OCR vuoto — controlla luce, fuoco e inquadratura MRZ)';
    return null;
  }

  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  lastOcrDebug = sorted
    .slice(0, 4)
    .map((c) => `[${c.score}] ${c.data.surname}/${c.data.documentNumber}`)
    .join(' | ');

  const best = sorted[0]!;
  return best.score >= MIN_ACCEPT_SCORE ? best.data : null;
}

function pickEarly(candidates: MrzParseCandidate[]): MrzExtractedData | null {
  if (candidates.length === 0) return null;
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  const best = sorted[0]!;
  if (best.score >= FAST_EXIT_SCORE) {
    lastOcrDebug = `[fast ${best.score}] ${best.data.surname}/${best.data.documentNumber}`;
    return best.data;
  }
  return null;
}

async function recognizeMrzByLines(
  worker: Worker,
  source: HTMLCanvasElement,
  lineCount: 3 | 2,
  lineLen: 30 | 44,
): Promise<string> {
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

  return lines.join('\n');
}

function cropLine(source: HTMLCanvasElement, y: number, h: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = h;
  const ctx = out.getContext('2d');
  ctx?.drawImage(source, 0, y, source.width, h, 0, 0, source.width, h);
  return out;
}

function prepEnhanced(source: HTMLCanvasElement): HTMLCanvasElement {
  const enhanced = enhanceForOcr(source);
  const upscaled = upscaleForMrz(enhanced);
  if (enhanced !== source) destroyCanvas(enhanced);
  return upscaled;
}

async function ocrFastPass(
  worker: Worker,
  source: HTMLCanvasElement,
  out: MrzParseCandidate[],
): Promise<void> {
  const prep = prepEnhanced(source);
  collectFromText(await recognizeBlock(worker, prep), out);
  destroyCanvas(prep);
}

async function ocrThoroughPass(
  worker: Worker,
  source: HTMLCanvasElement,
  out: MrzParseCandidate[],
): Promise<void> {
  const enhanced = enhanceForOcr(source);
  const binary = binarizeForMrz(enhanced);
  const upscaledE = upscaleForMrz(enhanced);
  const upscaledB = upscaleForMrz(binary);

  collectFromText(await recognizeMrzByLines(worker, upscaledE, 3, 30), out);
  collectFromText(await recognizeBlock(worker, upscaledB), out);

  if (upscaledE !== source) destroyCanvas(upscaledE);
  if (upscaledB !== source) destroyCanvas(upscaledB);
  if (enhanced !== source) destroyCanvas(enhanced);
  if (binary !== enhanced) destroyCanvas(binary);
}

function rotationsForContext(ctx: OcrScanContext): Array<90 | -90 | 0> {
  if (ctx.mode === 'camera') {
    return ctx.orientation === 'portrait' ? [0, 90] : [0];
  }
  return ctx.orientation === 'landscape' ? [0] : [0, 90, -90];
}

async function ocrOneSource(
  worker: Worker,
  source: HTMLCanvasElement,
  ctx: OcrScanContext,
  thorough: boolean,
): Promise<MrzParseCandidate[]> {
  const local: MrzParseCandidate[] = [];

  for (const deg of rotationsForContext(ctx)) {
    const img = deg === 0 ? source : rotateCanvas(source, deg);
    await ocrFastPass(worker, img, local);
    const early = pickEarly(local);
    if (early) {
      if (deg !== 0) destroyCanvas(img);
      return local;
    }

    if (thorough) {
      await ocrThoroughPass(worker, img, local);
      const mid = pickEarly(local);
      if (mid) {
        if (deg !== 0) destroyCanvas(img);
        return local;
      }
    }

    if (deg !== 0) destroyCanvas(img);
  }

  return local;
}

/** Camera: frame uno alla volta, esce al primo successo */
export async function extractMrzFromCanvases(
  canvases: HTMLCanvasElement[],
  ctx: OcrScanContext = { mode: 'camera', orientation: 'portrait' },
): Promise<MrzExtractedData | null> {
  if (canvases.length === 0) return null;

  const worker = await getWorker();
  const all: MrzParseCandidate[] = [];

  for (const canvas of canvases) {
    all.push(...(await ocrOneSource(worker, canvas, ctx, false)));
    let hit = pickEarly(all);
    if (hit) return hit;

    all.push(...(await ocrOneSource(worker, canvas, ctx, true)));
    hit = pickEarly(all) ?? pickBest(all);
    if (hit) return hit;
  }

  return pickBest(all);
}

export async function extractMrzFromImage(
  imageSource: HTMLCanvasElement,
  ctx: OcrScanContext = { mode: 'camera', orientation: 'portrait' },
): Promise<MrzExtractedData | null> {
  const worker = await getWorker();
  const all: MrzParseCandidate[] = [];

  all.push(...(await ocrOneSource(worker, imageSource, ctx, false)));
  let hit = pickEarly(all);
  if (hit) return hit;

  all.push(...(await ocrOneSource(worker, imageSource, ctx, true)));
  return pickEarly(all) ?? pickBest(all);
}

export async function extractMrzFromFile(
  file: File,
  ctx: OcrScanContext = { mode: 'photo' },
): Promise<MrzExtractedData | null> {
  const canvas = await loadImageFileToCanvas(file);
  if (!canvas) {
    lastOcrDebug = 'Impossibile aprire la foto (prova JPG/PNG)';
    return null;
  }

  const isPortrait = canvas.height > canvas.width * 1.05;
  const photoCtx: OcrScanContext = {
    ...ctx,
    mode: 'photo',
    orientation: isPortrait ? 'portrait' : 'landscape',
  };

  try {
    const crops = buildAllMrzCrops(canvas, photoCtx.orientation);
    const worker = await getWorker();
    const all: MrzParseCandidate[] = [];

    for (const crop of crops) {
      all.push(...(await ocrOneSource(worker, crop, photoCtx, false)));
      const hit = pickEarly(all);
      if (hit) {
        for (const c of crops) destroyCanvas(c);
        return hit;
      }
    }

    for (const crop of crops) {
      await ocrThoroughPass(worker, prepEnhanced(crop), all);
      const hit = pickEarly(all);
      if (hit) {
        for (const c of crops) destroyCanvas(c);
        return hit;
      }
    }

    for (const c of crops) destroyCanvas(c);
    return pickBest(all);
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
