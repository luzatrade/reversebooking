import { extractMRZData, type MRZResult } from 'web-mrz-reader';
import { createWorker, type Worker } from 'tesseract.js';
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
import { applyNameFixes } from './parseMrz';
import type { MrzExtractedData } from '@/types/check-in';

/** Allineato a web-mrz-reader — niente PSM/whitelist custom sul modello MRZ */
const OCR_OPTS = {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract/',
  langPath: '/model/',
  gzip: true,
  cachePath: 'hotelsdrop-mrz-v4',
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

function formatMrzExpiryDate(mrzDate: string): string {
  if (!/^\d{6}$/.test(mrzDate)) return '';
  const yy = parseInt(mrzDate.slice(0, 2), 10);
  const mm = mrzDate.slice(2, 4);
  const dd = mrzDate.slice(4, 6);
  const century = yy >= 80 ? 1900 : 2000;
  return `${century + yy}-${mm}-${dd}`;
}

function normalizeSex(gender: string): 'M' | 'F' | 'X' {
  const s = gender.toLowerCase();
  if (s === 'male' || s === 'm') return 'M';
  if (s === 'female' || s === 'f') return 'F';
  return 'X';
}

function mapParsedToExtracted(raw: string, parsed: MRZResult): MrzExtractedData | null {
  if (typeof parsed === 'string') return null;

  const surname = parsed.Surname.trim();
  const givenNames = parsed['Given Names'].trim();
  const documentNumber = (
    'Document Number' in parsed ? parsed['Document Number'] : parsed['Passport Number']
  ).trim();

  if (!surname || !documentNumber) return null;

  const flatLen = raw.replace(/\s/g, '').length;
  let documentType = 'MRZ';
  if (flatLen >= 90) documentType = 'TD1';
  else if (flatLen >= 88) documentType = 'TD3';
  else if (flatLen >= 72) documentType = 'TD2';

  return applyNameFixes({
    documentNumber,
    surname,
    givenNames,
    nationality: parsed.Nationality.trim(),
    birthDate: formatMrzDate(parsed['Date of Birth']),
    sex: normalizeSex(parsed.Gender),
    expiryDate: formatMrzExpiryDate(parsed['Expiration Date']) || undefined,
    documentType,
    rawMrz: raw,
  });
}

function parseOcrText(text: string): MrzExtractedData | null {
  if (!text.trim()) return null;

  lastRawOcr = text.slice(0, 240);
  const extracted = extractMRZData(text);
  if (!extracted || typeof extracted.parsed === 'string') return null;

  return mapParsedToExtracted(extracted.raw, extracted.parsed);
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
  const enhanced = enhanceForOcr(base);
  add(enhanced);
  const upscaled = upscaleForMrz(enhanced);
  add(upscaled);
  add(binarizeForMrz(upscaled));

  return {
    variants,
    cleanup: () => {
      for (const canvas of created) destroyCanvas(canvas);
    },
  };
}

async function recognizeCanvas(worker: Worker, canvas: HTMLCanvasElement): Promise<string> {
  const { variants, cleanup } = prepVariants(canvas);
  try {
    for (const variant of variants) {
      const { data } = await worker.recognize(variant);
      const text = data.text?.trim() ?? '';
      if (text) return text;
    }
    return '';
  } finally {
    cleanup();
  }
}

async function tryCanvas(worker: Worker, canvas: HTMLCanvasElement): Promise<MrzExtractedData | null> {
  const text = await recognizeCanvas(worker, canvas);
  return parseOcrText(text);
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

export async function extractMrzFromCanvases(
  canvases: HTMLCanvasElement[],
): Promise<MrzExtractedData | null> {
  const worker = await getWorker();
  for (const canvas of canvases) {
    const hit = await tryCanvas(worker, canvas);
    if (hit) {
      lastOcrDebug = `[ok] ${hit.surname}/${hit.documentNumber}`;
      return hit;
    }
  }
  return null;
}

export async function extractMrzFromFullFrame(
  canvas: HTMLCanvasElement,
  orientation: 'portrait' | 'landscape' = 'portrait',
): Promise<MrzExtractedData | null> {
  const worker = await getWorker();

  let hit = await tryCanvas(worker, canvas);
  if (hit) {
    lastOcrDebug = `[ok full] ${hit.surname}/${hit.documentNumber}`;
    return hit;
  }

  if (orientation === 'portrait') {
    for (const deg of [90, -90] as const) {
      const rotated = rotateCanvas(canvas, deg);
      hit = await tryCanvas(worker, rotated);
      destroyCanvas(rotated);
      if (hit) {
        lastOcrDebug = `[ok rot${deg}] ${hit.surname}/${hit.documentNumber}`;
        return hit;
      }
    }
  }

  const crops = buildAllMrzCrops(canvas, orientation);
  try {
    for (const crop of crops) {
      hit = await tryCanvas(worker, crop);
      if (hit) {
        lastOcrDebug = `[ok crop] ${hit.surname}/${hit.documentNumber}`;
        return hit;
      }

      if (orientation === 'portrait') {
        for (const deg of [90, -90] as const) {
          const rotated = rotateCanvas(crop, deg);
          hit = await tryCanvas(worker, rotated);
          destroyCanvas(rotated);
          if (hit) {
            lastOcrDebug = `[ok crop rot${deg}] ${hit.surname}/${hit.documentNumber}`;
            return hit;
          }
        }
      }
    }
  } finally {
    for (const c of crops) destroyCanvas(c);
  }

  lastOcrDebug = lastRawOcr
    ? `(OCR senza MRZ valida) ${lastRawOcr.replace(/\s+/g, ' ').slice(0, 120)}`
    : '(OCR vuoto — controlla luce, fuoco e inquadratura MRZ)';
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
