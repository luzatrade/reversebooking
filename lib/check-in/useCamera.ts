import { useCallback, useEffect, useRef, useState } from 'react';
import {
  captureVisibleVideoFrame,
  captureVideoRegion,
  mapOverlayToVideo,
} from '@/lib/check-in/mrz/cropRegion';

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export interface UseCameraResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  error: string | null;
  isReady: boolean;
  captureFullFrame: (container: HTMLElement) => HTMLCanvasElement | null;
  captureOverlay: (
    container: HTMLElement,
    overlay: HTMLElement,
    scale?: number,
  ) => HTMLCanvasElement | null;
}

export function useCamera(enabled = true): UseCameraResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!enabled) {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      setIsReady(false);
      setError(null);
      return;
    }

    let cancelled = false;

    async function start() {
      try {
        const mobile = isMobileDevice();
        let mediaStream: MediaStream;
        try {
          mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: 'environment' },
              width: { ideal: mobile ? 1280 : 1920 },
              height: { ideal: mobile ? 720 : 1080 },
            },
            audio: false,
          });
        } catch {
          mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
        }

        if (cancelled) {
          mediaStream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = mediaStream;
        const video = videoRef.current;
        if (video) {
          video.srcObject = mediaStream;
          video.setAttribute('playsinline', 'true');
          await video.play();
          setIsReady(true);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Camera error');
      }
    }

    void start();

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      setIsReady(false);
    };
  }, [enabled]);

  const captureFullFrame = useCallback((container: HTMLElement): HTMLCanvasElement | null => {
    const video = videoRef.current;
    if (!video) return null;
    return captureVisibleVideoFrame(video, container, isMobileDevice() ? 720 : 888);
  }, []);

  const captureOverlay = useCallback(
    (container: HTMLElement, overlay: HTMLElement, scale = 6): HTMLCanvasElement | null => {
      const video = videoRef.current;
      if (!video || video.videoWidth === 0) return null;

      const region = mapOverlayToVideo(overlay, container, video);
      if (!region) return null;

      return captureVideoRegion(video, region, scale);
    },
    [],
  );

  return { videoRef, error, isReady, captureFullFrame, captureOverlay };
}
