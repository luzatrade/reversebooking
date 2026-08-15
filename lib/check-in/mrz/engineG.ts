/**
 * Engine G — pipeline MRZ ottimizzato per check-in browser.
 * Port da scripts/mrz-bench/engine-lib.ts (canvas + Tesseract.js).
 */
import { PSM, type Worker } from 'tesseract.js';
import {
  BIN_THRESHOLDS,
  binarizeCanvasAt,
  cropRelCanvas,
  detectMrzBandsOnCanvas,
  prepBandCanvas,
  upscaleBandCanvas,
  type MrzBand,
} from './canvasBandDetect';
import { rotateCanvas } from './cropRegion';
import {
  acceptPerField,
  extractCandidateLines,
  hasAmbiguousDocuments,
  padLine,
  parseTd1PerField,
  parseTd3PerField,
  pickBestWithNameVote,
  realignLine,
  scorePerField,
  toMrzExtractedData,
  WL,
  type LineIndex,
  type ScoredCandidate,
  type Td1Result,
} from './perFieldParse';
import type { MrzExtractedData } from '@/types/check-in';

const MIN_BAND_WIDTH_PX = 2800;
const MIN_LINE_HEIGHT_PX = 56;
const BIN_FAST = [140, 100] as const;

export interface EngineGOpts {
  deskew?: boolean;
  /** 'TD3' for passport-only scan */
  formatHint?: 'TD1' | 'TD3';
  /** Default true for Italian hotel check-in (CIE) */
  expectItalian?: boolean;
}

let lastDebug = '';

export function getEngineGDebug(): string {
  return lastDebug;
}

function normalizeOcr(text: string): string {
  return text.toUpperCase().replace(/\s+/g, '').replace(/[|]/g, 'I').replace(/[^A-Z0-9<]/g, '');
}

async function ocrCanvas(worker: Worker, canvas: HTMLCanvasElement, psm: PSM): Promise<string> {
  if (canvas.width < 80 || canvas.height < 12) return '';
  await worker.setParameters({
    tessedit_char_whitelist: WL,
    tessedit_pageseg_mode: psm,
    user_defined_dpi: '400',
    preserve_interword_spaces: '0',
  });
  try {
    const { data } = await worker.recognize(canvas);
    return data.text ?? '';
  } catch {
    return '';
  }
}

function cropLineCanvas(source: HTMLCanvasElement, y: number, h: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = h;
  out.getContext('2d')?.drawImage(source, 0, y, source.width, h, 0, 0, source.width, h);
  return out;
}

async function ocrByLines(
  worker: Worker,
  canvas: HTMLCanvasElement,
  count: number,
  lineLen: number,
): Promise<string[]> {
  const scaled = upscaleBandCanvas(canvas, count);
  const owned = scaled !== canvas;
  const w = scaled.width;
  const h = scaled.height;
  if (w < 80) {
    if (owned) {
      scaled.width = 0;
      scaled.height = 0;
    }
    return [];
  }

  const lh = Math.max(MIN_LINE_HEIGHT_PX, Math.floor(h / count));
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const top = Math.min(i * lh, Math.max(0, h - lh));
    const slice = cropLineCanvas(scaled, top, Math.min(lh, h - top));
    if (slice.width >= 80 && slice.height >= 12) {
      const line = normalizeOcr(await ocrCanvas(worker, slice, PSM.SINGLE_LINE));
      out.push(padLine(line, lineLen));
    }
    slice.width = 0;
    slice.height = 0;
  }

  if (owned) {
    scaled.width = 0;
    scaled.height = 0;
  }
  return out;
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

async function collectTd1FromBand(
  worker: Worker,
  canvas: HTMLCanvasElement,
  thorough: boolean,
): Promise<Td1Result[]> {
  const found: Td1Result[] = [];
  const add = (r: Td1Result | null) => {
    if (r && acceptPerField(r, { allowForeign: true })) found.push(r);
  };

  const passes = thorough ? ([1, 1.35] as const) : ([1] as const);
  const thresholds = thorough ? BIN_THRESHOLDS : BIN_FAST;

  for (const mul of passes) {
    const scaled = upscaleBandCanvas(canvas, 3, mul);

    const byLines = await ocrByLines(worker, scaled, 3, 30);
    if (byLines.length >= 3) {
      add(parseTd1PerField(byLines.map((l, i) => realignLine(l, i as LineIndex))));
    }
    if (found.length) return dedupeResults(found);

    const block = await ocrCanvas(worker, scaled, PSM.SINGLE_BLOCK);
    const blockLines = extractCandidateLines(block).map((l) => padLine(l));
    for (let i = 0; i + 2 < blockLines.length; i++) {
      add(parseTd1PerField(blockLines.slice(i, i + 3).map((l, j) => realignLine(l, j as LineIndex))));
    }
    if (found.length) return dedupeResults(found);

    for (const th of thresholds) {
      const bin = binarizeCanvasAt(scaled, th);
      const binText = await ocrCanvas(worker, bin, PSM.SINGLE_BLOCK);
      if (bin !== scaled) {
        bin.width = 0;
        bin.height = 0;
      }
      const binLines = extractCandidateLines(binText).map((l) => padLine(l));
      for (let i = 0; i + 2 < binLines.length; i++) {
        add(parseTd1PerField(binLines.slice(i, i + 3).map((l, j) => realignLine(l, j as LineIndex))));
      }
      if (found.length) return dedupeResults(found);
    }

    if (scaled !== canvas) {
      scaled.width = 0;
      scaled.height = 0;
    }
  }

  return dedupeResults(found);
}

async function collectTd3FromBand(
  worker: Worker,
  canvas: HTMLCanvasElement,
  thorough: boolean,
): Promise<Td1Result[]> {
  const found: Td1Result[] = [];

  const tryPairs = (lines: string[]): boolean => {
    const padded = lines.map((l) => padLine(l, 44));
    for (let i = 0; i < padded.length; i++) {
      for (let j = i + 1; j < padded.length; j++) {
        for (const pair of [
          [padded[i]!, padded[j]!],
          [padded[j]!, padded[i]!],
        ] as const) {
          const r = parseTd3PerField([pair[0], pair[1]]);
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
  const thresholds = thorough ? BIN_THRESHOLDS : BIN_FAST;

  for (const mul of passes) {
    const scaled = upscaleBandCanvas(canvas, 2, mul);

    const byLines = await ocrByLines(worker, scaled, 2, 44);
    if (tryPairs(byLines)) return dedupeResults(found);

    const block = await ocrCanvas(worker, scaled, PSM.SINGLE_BLOCK);
    if (tryPairs(extractCandidateLines(block))) return dedupeResults(found);

    for (const th of thresholds) {
      const bin = binarizeCanvasAt(scaled, th);
      const binText = await ocrCanvas(worker, bin, PSM.SINGLE_BLOCK);
      if (bin !== scaled) {
        bin.width = 0;
        bin.height = 0;
      }
      if (tryPairs(extractCandidateLines(binText))) return dedupeResults(found);
    }

    if (scaled !== canvas) {
      scaled.width = 0;
      scaled.height = 0;
    }
  }

  return dedupeResults(found);
}

async function readTd1Band(
  worker: Worker,
  crop: HTMLCanvasElement,
  thorough: boolean,
): Promise<Td1Result[]> {
  const prepped = prepBandCanvas(crop, MIN_BAND_WIDTH_PX);
  const owned = prepped !== crop;
  const results = await collectTd1FromBand(worker, prepped, thorough);
  if (owned) {
    prepped.width = 0;
    prepped.height = 0;
  }
  return results;
}

async function readTd3Band(
  worker: Worker,
  crop: HTMLCanvasElement,
  thorough: boolean,
): Promise<Td1Result[]> {
  const prepped = prepBandCanvas(crop, MIN_BAND_WIDTH_PX);
  const owned = prepped !== crop;
  const all: Td1Result[] = [];

  for (const deg of [0, 90, -90] as const) {
    const img = deg === 0 ? prepped : rotateCanvas(prepped, deg);
    const imgOwned = deg !== 0;
    const results = await collectTd3FromBand(worker, img, thorough);
    all.push(...results);
    if (imgOwned) {
      img.width = 0;
      img.height = 0;
    }
    if (all.length) break;
  }

  if (owned) {
    prepped.width = 0;
    prepped.height = 0;
  }
  return dedupeResults(all);
}

function bandPixelSize(view: HTMLCanvasElement, band: MrzBand) {
  return {
    width: Math.floor(view.width * band.width),
    height: Math.floor(view.height * band.height),
  };
}

async function fallbackRegionScans(
  source: HTMLCanvasElement,
  worker: Worker,
  opts: { preferTd3: boolean; expectItalian: boolean },
): Promise<ScoredCandidate[]> {
  const candidates: ScoredCandidate[] = [];
  const accTd1 = opts.expectItalian ? { expectItalian: true } : { allowForeign: true };
  const accTd3 = { allowForeign: true };

  for (const rot of [0, 90, -90] as const) {
    const view = rot === 0 ? source : rotateCanvas(source, rot);
    const viewOwned = rot !== 0;
    const regions: Array<[number, number, number, number]> = [
      [0.02, 0.62, 0.96, 0.36],
      [0.02, 0.68, 0.96, 0.3],
      [0.58, 0.03, 0.4, 0.94],
      [0.02, 0.03, 0.4, 0.94],
    ];

    for (const [left, top, width, height] of regions) {
      const crop = cropRelCanvas(view, left, top, width, height);
      if (!opts.preferTd3) {
        const td1 = await readTd1Band(worker, crop, true);
        for (const r of td1) {
          if (acceptPerField(r, accTd1)) {
            candidates.push({
              result: r,
              score: scorePerField(r, { expectItalian: opts.expectItalian, lineCount: 3 }) + 5,
              bandIndex: -1,
            });
          }
        }
      }
      if (opts.preferTd3) {
        const td3 = await readTd3Band(worker, crop, true);
        for (const r of td3) {
          if (acceptPerField(r, accTd3)) {
            candidates.push({
              result: r,
              score: scorePerField(r, { lineCount: 2 }) + 5,
              bandIndex: -1,
            });
          }
        }
      }
      crop.width = 0;
      crop.height = 0;
    }

    if (viewOwned) {
      view.width = 0;
      view.height = 0;
    }
  }

  return candidates;
}

function releaseViews(views: Map<string, HTMLCanvasElement>, keep?: HTMLCanvasElement): void {
  for (const [key, canvas] of views) {
    if (canvas !== keep) {
      canvas.width = 0;
      canvas.height = 0;
      views.delete(key);
    }
  }
}

export async function runEngineG(
  source: HTMLCanvasElement,
  worker: Worker,
  opts: EngineGOpts = {},
): Promise<MrzExtractedData | null> {
  const deskew = opts.deskew ?? true;
  const preferTd3 = opts.formatHint === 'TD3';
  const expectItalian = opts.expectItalian ?? opts.formatHint !== 'TD3';

  const { bands, views } = detectMrzBandsOnCanvas(source, { deskew });

  const accTd1 = expectItalian ? { expectItalian: true } : { allowForeign: true };
  const accTd3 = { allowForeign: true };

  const allCandidates: ScoredCandidate[] = [];
  let bandsTried = 0;

  const tryBands = async (limit: number, thorough: boolean) => {
    for (const band of bands.slice(bandsTried, limit)) {
      bandsTried++;
      const view = views.get(band.view) ?? source;
      const px = bandPixelSize(view, band);
      if (px.width < 140 || px.height < 36) continue;

      const crop = cropRelCanvas(view, band.left, band.top, band.width, band.height);

      if (!preferTd3 && (band.lineCount === 3 || !preferTd3)) {
        const td1 = await readTd1Band(worker, crop, thorough);
        for (const r of td1) {
          if (acceptPerField(r, accTd1)) {
            allCandidates.push({
              result: r,
              score: scorePerField(r, { expectItalian, bandScore: band.score, lineCount: 3 }),
              bandIndex: bandsTried,
            });
          }
        }
      }

      if (preferTd3 || band.lineCount === 2) {
        const td3 = await readTd3Band(worker, crop, thorough);
        for (const r of td3) {
          if (acceptPerField(r, accTd3)) {
            allCandidates.push({
              result: r,
              score: scorePerField(r, { bandScore: band.score, lineCount: 2 }),
              bandIndex: bandsTried,
            });
          }
        }
      }

      crop.width = 0;
      crop.height = 0;

      const interim = pickBestWithNameVote(allCandidates);
      if (interim && interim.score >= 32) return;
    }
  };

  await tryBands(8, false);
  let picked = pickBestWithNameVote(allCandidates);
  if (!picked || picked.score < 28) await tryBands(Math.min(16, bands.length), true);
  picked = pickBestWithNameVote(allCandidates);

  if (!picked || picked.score < 28) {
    const fb = await fallbackRegionScans(source, worker, { preferTd3, expectItalian });
    allCandidates.push(...fb);
    picked = pickBestWithNameVote(allCandidates);
  }

  releaseViews(views, source);

  if (!picked || picked.score < 28) {
    lastDebug = `Engine G: nessun candidato (${bands.length} bande, ${allCandidates.length} parse)`;
    return null;
  }

  const isTd3 = picked.result.data.rawMrz.split('\n').length === 2;
  const ambAcc = isTd3 ? accTd3 : accTd1;
  if (hasAmbiguousDocuments(allCandidates, ambAcc)) {
    lastDebug = 'Engine G: più documenti MRZ validi — inserimento manuale';
    return null;
  }

  const out = toMrzExtractedData(picked.result, {
    namesUncertain: picked.namesUncertain,
    isTd3,
  });

  lastDebug = `Engine G: ${out.surname}/${out.givenNames}/${out.documentNumber} perField=${out.mrzValid}`;
  return out;
}
