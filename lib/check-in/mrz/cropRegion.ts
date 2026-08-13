export interface PixelRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Area visibile del video con object-fit: cover */
function visibleVideoRect(video: HTMLVideoElement, container: HTMLElement) {
  const cw = container.clientWidth;
  const ch = container.clientHeight;
  const vw = video.videoWidth;
  const vh = video.videoHeight;
  const containerAR = cw / ch;
  const videoAR = vw / vh;

  if (videoAR > containerAR) {
    const visibleW = vh * containerAR;
    return { sx: (vw - visibleW) / 2, sy: 0, sw: visibleW, sh: vh };
  }

  const visibleH = vw / containerAR;
  return { sx: 0, sy: (vh - visibleH) / 2, sw: vw, sh: visibleH };
}

/** Converte un overlay CSS nel rettangolo in pixel del video */
export function mapOverlayToVideo(
  overlay: HTMLElement,
  container: HTMLElement,
  video: HTMLVideoElement,
): PixelRect | null {
  if (!video.videoWidth || !container.clientWidth) return null;

  const overlayRect = overlay.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const src = visibleVideoRect(video, container);
  const scaleX = src.sw / containerRect.width;
  const scaleY = src.sh / containerRect.height;

  const x = src.sx + (overlayRect.left - containerRect.left) * scaleX;
  const y = src.sy + (overlayRect.top - containerRect.top) * scaleY;
  const w = overlayRect.width * scaleX;
  const h = overlayRect.height * scaleY;

  if (w < 8 || h < 8) return null;

  return {
    x: Math.max(0, Math.floor(x)),
    y: Math.max(0, Math.floor(y)),
    w: Math.min(Math.ceil(w), video.videoWidth),
    h: Math.min(Math.ceil(h), video.videoHeight),
  };
}

/** Ruota canvas per MRZ verticale (CIE retro in portrait) */
export function rotateCanvas(
  source: HTMLCanvasElement,
  degrees: 90 | -90,
): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.height;
  out.height = source.width;
  const ctx = out.getContext('2d');
  if (!ctx) return source;

  const rad = (degrees * Math.PI) / 180;
  ctx.translate(out.width / 2, out.height / 2);
  ctx.rotate(rad);
  ctx.drawImage(source, -source.width / 2, -source.height / 2);
  return out;
}

/** Binarizzazione adattiva — aiuta il modello MRZ su testo stampato */
export function binarizeForMrz(source: HTMLCanvasElement): HTMLCanvasElement {
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
  const grays = new Float32Array(d.length / 4);

  for (let i = 0, j = 0; i < d.length; i += 4, j++) {
    const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
    grays[j] = gray;
    sum += gray;
  }

  const threshold = sum / grays.length - 8;

  for (let i = 0, j = 0; i < d.length; i += 4, j++) {
    const v = grays[j]! > threshold ? 255 : 0;
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }

  ctx.putImageData(img, 0, 0);
  return out;
}

export function cropCanvasRegion(
  source: HTMLCanvasElement,
  x: number,
  y: number,
  w: number,
  h: number,
): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = Math.max(1, w);
  out.height = Math.max(1, h);
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.drawImage(source, x, y, w, h, 0, 0, w, h);
  return out;
}

/** Porta la striscia MRZ ad almeno ~1400px larghezza per OCR-B */
export function upscaleForMrz(source: HTMLCanvasElement, minWidth = 1400): HTMLCanvasElement {
  if (source.width >= minWidth) return source;
  const scale = minWidth / source.width;
  const out = document.createElement('canvas');
  out.width = Math.round(source.width * scale);
  out.height = Math.round(source.height * scale);
  const ctx = out.getContext('2d');
  if (!ctx) return source;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(source, 0, 0, out.width, out.height);
  return out;
}

/** Genera crop MRZ — pochi e mirati (con early exit nel pipeline) */
export function buildAllMrzCrops(
  source: HTMLCanvasElement,
  orientation?: 'portrait' | 'landscape',
): HTMLCanvasElement[] {
  const { width: w, height: h } = source;
  const crops: HTMLCanvasElement[] = [];
  const isPortrait = orientation === 'portrait' || h > w * 1.05;

  if (isPortrait) {
    for (const left of [0.6, 0.64]) {
      crops.push(
        cropCanvasRegion(
          source,
          Math.floor(w * left),
          Math.floor(h * 0.03),
          Math.floor(w * (0.99 - left)),
          Math.floor(h * 0.94),
        ),
      );
    }
  }

  for (const top of [0.66, 0.7]) {
    crops.push(
      cropCanvasRegion(
        source,
        Math.floor(w * 0.02),
        Math.floor(h * top),
        Math.floor(w * 0.96),
        Math.floor(h * (0.98 - top)),
      ),
    );
  }

  return crops;
}

/** @deprecated usa buildAllMrzCrops */
export function buildMrzCropsFromPhoto(source: HTMLCanvasElement): HTMLCanvasElement[] {
  return buildAllMrzCrops(source);
}

export function captureVideoRegion(
  video: HTMLVideoElement,
  region: PixelRect,
  scale = 2,
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(region.w * scale));
  canvas.height = Math.max(1, Math.round(region.h * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(
    video,
    region.x,
    region.y,
    region.w,
    region.h,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  return canvas;
}

/** Scala di grigi + contrasto (niente binarizzazione) */
export function enhanceForOcr(source: HTMLCanvasElement): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = source.width;
  out.height = source.height;
  const ctx = out.getContext('2d');
  const srcCtx = source.getContext('2d');
  if (!ctx || !srcCtx) return source;

  ctx.drawImage(source, 0, 0);
  const img = ctx.getImageData(0, 0, out.width, out.height);
  const d = img.data;
  const contrast = 1.45;
  const intercept = 128 * (1 - contrast);

  for (let i = 0; i < d.length; i += 4) {
    const gray = 0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!;
    const v = Math.max(0, Math.min(255, gray * contrast + intercept));
    d[i] = v;
    d[i + 1] = v;
    d[i + 2] = v;
  }
  ctx.putImageData(img, 0, 0);
  return out;
}
