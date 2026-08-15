/**
 * Rilevamento bande MRZ su canvas (port Engine G per browser).
 */
import {
  binarizeForMrz,
  cropCanvasRegion,
  enhanceForOcr,
  rotateCanvas,
} from './cropRegion';

export interface MrzBand {
  left: number;
  top: number;
  width: number;
  height: number;
  view: string;
  score: number;
  lineCount: 2 | 3;
}

interface TextRun {
  start: number;
  end: number;
  inkLeft: number;
  inkRight: number;
}

export const BIN_THRESHOLDS = [160, 140, 120, 100, 80] as const;

function cloneCanvas(source: HTMLCanvasElement): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  out.getContext('2d')?.drawImage(source, 0, 0);
  return out;
}

function resizeCanvas(source: HTMLCanvasElement, width: number, height?: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = width;
  out.height = height ?? Math.max(1, Math.round(source.height * (width / source.width)));
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(source, 0, 0, out.width, out.height);
  return out;
}

function grayscaleCanvas(source: HTMLCanvasElement): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  const ctx = out.getContext('2d');
  const srcCtx = source.getContext('2d');
  if (!ctx || !srcCtx) return source;
  ctx.drawImage(source, 0, 0);
  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
    d[i] = gray;
    d[i + 1] = gray;
    d[i + 2] = gray;
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

function thresholdCanvas(source: HTMLCanvasElement, th: number): Uint8Array {
  const ctx = source.getContext('2d');
  if (!ctx) return new Uint8Array(0);
  const { width: w, height: h } = source;
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const bin = new Uint8Array(w * h);
  for (let i = 0, j = 0; i < d.length; i += 4, j++) {
    bin[j] = d[i]! >= th ? 255 : 0;
  }
  return bin;
}

function binarizeCanvasAt(source: HTMLCanvasElement, threshold?: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  const ctx = out.getContext('2d');
  const srcCtx = source.getContext('2d');
  if (!ctx || !srcCtx) return source;
  ctx.drawImage(source, 0, 0);
  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;
  let sum = 0;
  for (let i = 0; i < d.length; i += 4) {
    const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
    sum += gray;
  }
  const th = threshold ?? Math.max(1, sum / (d.length / 4) - 8);
  for (let i = 0; i < d.length; i += 4) {
    const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
    const v = gray >= th ? 255 : 0;
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

function findTextRuns(bin: Uint8Array, w: number, h: number): TextRun[] {
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

function groupRuns(runs: TextRun[], w: number, h: number, view: string): MrzBand[] {
  const bands: MrzBand[] = [];

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

function bandHeuristicBonus(b: MrzBand): number {
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

function rerankBands(bands: MrzBand[]): MrzBand[] {
  return bands
    .map((b) => ({ b, bonus: bandHeuristicBonus(b) }))
    .sort((a, c) => c.b.score + c.bonus - (a.b.score + a.bonus))
    .map((x) => x.b);
}

function rotateCanvasDegrees(source: HTMLCanvasElement, degrees: number): HTMLCanvasElement {
  if (degrees === 0) return source;
  const out = document.createElement('canvas');
  const rad = (degrees * Math.PI) / 180;
  const cos = Math.abs(Math.cos(rad));
  const sin = Math.abs(Math.sin(rad));
  out.width = Math.ceil(source.width * cos + source.height * sin);
  out.height = Math.ceil(source.width * sin + source.height * cos);
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, out.width, out.height);
  ctx.translate(out.width / 2, out.height / 2);
  ctx.rotate(rad);
  ctx.drawImage(source, -source.width / 2, -source.height / 2);
  return out;
}

function profileVariance(canvas: HTMLCanvasElement, angle: number): number {
  const rotated = rotateCanvasDegrees(canvas, angle);
  const owned = angle !== 0;
  const w = rotated.width;
  const h = rotated.height;
  const x0 = Math.floor(w * 0.06);
  const y0 = Math.floor(h * 0.12);
  const rw = Math.max(1, Math.floor(w * 0.88));
  const rh = Math.max(1, Math.floor(h * 0.76));
  const slice = cropCanvasRegion(rotated, x0, y0, rw, rh);
  const small = resizeCanvas(grayscaleCanvas(slice), 700, 200);
  const bin = thresholdCanvas(small, 140);
  const sw = small.width;
  const sh = small.height;
  const trans: number[] = [];
  for (let y = 0; y < sh; y++) {
    let t = 0;
    const row = y * sw;
    for (let x = 1; x < sw; x++) {
      if ((bin[row + x - 1]! < 128) !== (bin[row + x]! < 128)) t++;
    }
    trans.push(t);
  }
  if (owned) {
    rotated.width = 0;
    rotated.height = 0;
  }
  slice.width = 0;
  slice.height = 0;
  small.width = 0;
  small.height = 0;
  const mean = trans.reduce((a, b) => a + b, 0) / trans.length;
  return trans.reduce((a, b) => a + (b - mean) ** 2, 0) / trans.length;
}

function deskewCanvas(source: HTMLCanvasElement): { canvas: HTMLCanvasElement; angle: number } {
  let best = 0;
  let bestScore = -1;
  for (const a of [-6, -4, -2, 0, 2, 4, 6]) {
    const s = profileVariance(source, a);
    if (s > bestScore) {
      bestScore = s;
      best = a;
    }
  }
  if (best === 0) return { canvas: source, angle: 0 };
  return { canvas: rotateCanvasDegrees(source, best), angle: best };
}

function bandsFromView(canvas: HTMLCanvasElement, viewKey: string): MrzBand[] {
  const all: MrzBand[] = [];
  const gray = grayscaleCanvas(canvas);
  const targetW = Math.min(900, gray.width);
  const scaled = gray.width > targetW ? resizeCanvas(gray, targetW) : gray;

  for (const th of BIN_THRESHOLDS) {
    const bin = thresholdCanvas(scaled, th);
    all.push(...groupRuns(findTextRuns(bin, scaled.width, scaled.height), scaled.width, scaled.height, viewKey));
  }

  if (scaled !== gray) {
    scaled.width = 0;
    scaled.height = 0;
  }
  gray.width = 0;
  gray.height = 0;
  return all;
}

export function cropRelCanvas(
  source: HTMLCanvasElement,
  left: number,
  top: number,
  width: number,
  height: number,
): HTMLCanvasElement {
  const w = source.width;
  const h = source.height;
  return cropCanvasRegion(
    source,
    Math.max(0, Math.floor(w * left)),
    Math.max(0, Math.floor(h * top)),
    Math.max(1, Math.min(w - Math.floor(w * left), Math.floor(w * width))),
    Math.max(1, Math.min(h - Math.floor(h * top), Math.floor(h * height))),
  );
}

export function detectMrzBandsOnCanvas(
  source: HTMLCanvasElement,
  opts: { deskew: boolean },
): { bands: MrzBand[]; views: Map<string, HTMLCanvasElement> } {
  const all: MrzBand[] = [];
  const views = new Map<string, HTMLCanvasElement>();

  for (const rot of [0, 90, -90] as const) {
    const rotated = rot === 0 ? cloneCanvas(source) : rotateCanvas(source, rot);
    const candidates: Array<{ key: string; canvas: HTMLCanvasElement }> = [
      { key: `${rot}:0`, canvas: rotated },
    ];

    if (opts.deskew && rot === 0) {
      const { canvas: deskewed, angle } = deskewCanvas(rotated);
      if (angle !== 0) candidates.push({ key: `${rot}:${angle}`, canvas: deskewed });
    }

    for (const { key, canvas } of candidates) {
      views.set(key, canvas);
      all.push(...bandsFromView(canvas, key));
    }
  }

  const deduped = new Map<string, MrzBand>();
  for (const b of all.sort((a, c) => c.score - a.score)) {
    const k = `${b.view}:${b.lineCount}:${Math.round(b.top * 100)}:${Math.round(b.left * 100)}`;
    if (!deduped.has(k)) deduped.set(k, b);
  }

  return { bands: rerankBands([...deduped.values()]), views };
}

export function prepBandCanvas(source: HTMLCanvasElement, minWidth: number): HTMLCanvasElement {
  const enhanced = enhanceForOcr(source);
  if (enhanced.width >= minWidth) return enhanced;
  const out = document.createElement('canvas');
  out.width = minWidth;
  out.height = Math.max(1, Math.round(source.height * (minWidth / source.width)));
  const ctx = out.getContext('2d');
  if (!ctx) return enhanced;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(enhanced, 0, 0, out.width, out.height);
  if (enhanced !== source) {
    enhanced.width = 0;
    enhanced.height = 0;
  }
  return out;
}

export function upscaleBandCanvas(
  source: HTMLCanvasElement,
  lineCount: number,
  mul = 1,
): HTMLCanvasElement {
  const MIN_LINE_HEIGHT_PX = 56;
  const MAX_OCR_WIDTH_PX = 4200;
  const MAX_OCR_HEIGHT_PX = 900;
  const minW = Math.min(2800 * mul, MAX_OCR_WIDTH_PX);
  const minH = lineCount * MIN_LINE_HEIGHT_PX * mul + 24;
  const scale = Math.max(minW / source.width, minH / source.height, 1);
  if (scale <= 1.01) return source;

  let newW = Math.ceil(source.width * scale);
  let newH = Math.ceil(source.height * scale);
  const maxPixels = 20_000_000;
  if (newW * newH > maxPixels) {
    const r = Math.sqrt(maxPixels / (newW * newH));
    newW = Math.max(80, Math.floor(newW * r));
    newH = Math.max(48, Math.floor(newH * r));
  }

  const out = document.createElement('canvas');
  out.width = Math.min(newW, MAX_OCR_WIDTH_PX);
  out.height = Math.min(newH, MAX_OCR_HEIGHT_PX);
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(source, 0, 0, out.width, out.height);
  return out;
}

export { binarizeCanvasAt, binarizeForMrz };
