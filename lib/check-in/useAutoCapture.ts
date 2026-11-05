import { useCallback, useEffect, useRef, useState } from 'react';

export interface AutoCaptureOptions {
  /** Pixel diff threshold (0-255) — lower = more sensitive */
  stabilityThreshold?: number;
  /** Consecutive stable frames required before capture */
  stableFramesRequired?: number;
  /** Sample interval ms — don't analyze every rAF frame */
  sampleIntervalMs?: number;
  onCapture: () => void;
  enabled?: boolean;
}

export interface AutoCaptureState {
  isStabilizing: boolean;
  progress: number; // 0-1
}

/**
 * Rileva stabilità del preview video confrontando frame ridimensionati.
 * NON esegue OCR — solo trigger di cattura quando il documento è fermo.
 */
export function useAutoCapture(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  options: AutoCaptureOptions,
): AutoCaptureState {
  const {
    stabilityThreshold = 12,
    stableFramesRequired = 8,
    sampleIntervalMs = 150,
    onCapture,
    enabled = true,
  } = options;

  const [isStabilizing, setIsStabilizing] = useState(false);
  const [progress, setProgress] = useState(0);

  const prevFrameRef = useRef<ImageData | null>(null);
  const stableCountRef = useRef(0);
  const capturedRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const analyzeFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.videoWidth === 0 || capturedRef.current || !enabled) return;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
    }
    const canvas = canvasRef.current;
    const sampleW = 160;
    const sampleH = 100;
    canvas.width = sampleW;
    canvas.height = sampleH;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, sampleW, sampleH);
    const frame = ctx.getImageData(0, 0, sampleW, sampleH);
    const prev = prevFrameRef.current;

    if (prev) {
      let diff = 0;
      const pixels = frame.data;
      const prevPixels = prev.data;
      for (let i = 0; i < pixels.length; i += 4) {
        diff += Math.abs(pixels[i]! - prevPixels[i]!);
        diff += Math.abs(pixels[i + 1]! - prevPixels[i + 1]!);
        diff += Math.abs(pixels[i + 2]! - prevPixels[i + 2]!);
      }
      const avgDiff = diff / (pixels.length / 4) / 3;

      if (avgDiff < stabilityThreshold) {
        stableCountRef.current += 1;
        setIsStabilizing(true);
        setProgress(Math.min(stableCountRef.current / stableFramesRequired, 1));

        if (stableCountRef.current >= stableFramesRequired) {
          capturedRef.current = true;
          onCapture();
        }
      } else {
        stableCountRef.current = 0;
        setIsStabilizing(false);
        setProgress(0);
      }
    }

    prevFrameRef.current = frame;
  }, [videoRef, stabilityThreshold, stableFramesRequired, onCapture, enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Reset quando si torna in preview (es. dopo errore → Riprova)
    capturedRef.current = false;
    stableCountRef.current = 0;
    setIsStabilizing(false);
    setProgress(0);

    const interval = setInterval(analyzeFrame, sampleIntervalMs);
    return () => clearInterval(interval);
  }, [analyzeFrame, sampleIntervalMs, enabled]);

  return { isStabilizing, progress };
}

export function resetAutoCapture(): { capturedRef: { current: boolean } } {
  return { capturedRef: { current: false } };
}
