import { createWorker, PSM, type Worker } from 'tesseract.js';
import {
  binarizeForMrz,
  buildAllMrzCrops,
  enhanceForOcr,
  normalizeForOcr,
  rotateCanvas,
  upscaleForMrz,
} from './cropRegion';
import { clearTesseractModelCache } from './clearOcrCache';
import { loadImageFileToCanvas } from './imageLoader';
import {
  parseMrzCandidates,
  pickBestMrzFromCandidates,
  type MrzParseCandidate,
} from './parseMrz';
import type { MrzExtractedData } from '@/types/check-in';

const MRZ_WHITELIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<';

const OCR_OPTS = {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract/',
  langPath: '/model/',
  gzip: true,
  cachePath: 'hotelsdrop-mrz-v5',
  cacheMethod: 'write' as const,
};

let workerPromise: Promise<Worker> | null = null;
let cacheCleared = false;
let lastOcrDebug = '';
let lastRawOcr = '';

export function getLastOcrDebug(): string {
  return lastOcrDebug;
}

async function ensureCacheClear(): Promise<void> {
  if (!cacheCleared) {
    await clearTesseractModelCache();
    cacheCleared = true;
  }
}

async function getWorker(): Promise<Worker> {
  await ensureCacheClear();
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
  lastRawOcr = text.slice(0, 240);
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

function prepVariants(source: HTMLCanvasElement): {
  variants: HTMLCanvasElement[];
  cleanup: () => void;
} {
  const created = new Set<HTMLCanvasElement>();
  const variants: HTMLCanvasElement[] = [];

  const add = (canvas: HTMLCanvasElement) => {
    variants.push(canvas);
    if (canvas !== source) created.add(canvas);
  };

  const base = normalizeForOcr(source);
  add(base);
  add(enhanceForOcr(base));
  const upscaled = upscaleForMrz(enhanceForOcr(base));
  add(upscaled);
  add(binarizeForMrz(upscaled));

  return {
    variants,
    cleanup: () => {
      for (const canvas of created) destroyCanvas(canvas);
    },
  };
}

async function ocrCanvasToCandidates(
  worker: Worker,
  canvas: HTMLCanvasElement,
): Promise<MrzParseCandidate[]> {
  const all: MrzParseCandidate[] = [];
  const { variants, cleanup } = prepVariants(canvas);

  try {
    for (const variant of variants) {
      collectFromText(await recognizeBlock(worker, variant), all);
    }

    const upscaled = upscaleForMrz(enhanceForOcr(normalizeForOcr(canvas)));
    collectFromText(await recognizeMrzByLines(worker, upscaled, 3, 30), all);
    collectFromText(await recognizeMrzByLines(worker, upscaled, 2, 44), all);
    if (upscaled !== canvas) destroyCanvas(upscaled);
  } finally {
    cleanup();
  }

  return all;
}

function finalizeCandidates(candidates: MrzParseCandidate[], label: string): MrzExtractedData | null {
  if (candidates.length === 0) return null;

  const hit = pickBestMrzFromCandidates(candidates);
  if (hit) {
    lastOcrDebug = `[${label}] ${hit.surname}/${hit.givenNames}/${hit.documentNumber}`;
    return hit;
  }

  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  lastOcrDebug =
    sorted
      .slice(0, 3)
      .map((c) => `[${c.score}] ${c.data.surname}/${c.data.documentNumber}`)
      .join(' | ') + ' | score basso';
  return null;
}

async function tryCanvas(worker: Worker, canvas: HTMLCanvasElement): Promise<MrzExtractedData | null> {
  const candidates = await ocrCanvasToCandidates(worker, canvas);
  return finalizeCandidates(candidates, 'ok');
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
): Promise<MrzExtractedData | null> {
  const worker = await getWorker();
  const all: MrzParseCandidate[] = [];

  all.push(...(await ocrCanvasToCandidates(worker, canvas)));
  let hit = finalizeCandidates(all, 'full');
  if (hit) return hit;

  if (orientation === 'portrait') {
    for (const deg of [90, -90] as const) {
      const rotated = rotateCanvas(canvas, deg);
      all.push(...(await ocrCanvasToCandidates(worker, rotated)));
      destroyCanvas(rotated);
      hit = finalizeCandidates(all, `rot${deg}`);
      if (hit) return hit;
    }
  }

  const crops = buildAllMrzCrops(canvas, orientation);
  try {
    for (const crop of crops) {
      all.push(...(await ocrCanvasToCandidates(worker, crop)));
      hit = finalizeCandidates(all, 'crop');
      if (hit) return hit;

      if (orientation === 'portrait') {
        for (const deg of [90, -90] as const) {
          const rotated = rotateCanvas(crop, deg);
          all.push(...(await ocrCanvasToCandidates(worker, rotated)));
          destroyCanvas(rotated);
          hit = finalizeCandidates(all, `crop-rot${deg}`);
          if (hit) return hit;
        }
      }
    }
  } finally {
    for (const c of crops) destroyCanvas(c);
  }

  if (!lastOcrDebug && lastRawOcr) {
    lastOcrDebug = `(OCR senza MRZ valida) ${lastRawOcr.replace(/\s+/g, ' ').slice(0, 120)}`;
  } else if (!lastOcrDebug) {
    lastOcrDebug = '(OCR vuoto — controlla luce, fuoco e inquadratura MRZ)';
  }
  return null;
}

export async function extractMrzFromFile(file: File): Promise<MrzExtractedData | null> {
  const canvas = await loadImageFileToCanvas(file);
  if (!canvas) {
    lastOcrDebug = 'Impossibile aprire la foto (prova JPG/PNG)';
    return null;
  }

  const isPortrait = canvas.height > canvas.width * 1.05;
  try {
    return await extractMrzFromFullFrame(canvas, isPortrait ? 'portrait' : 'landscape');
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
