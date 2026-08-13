import { useCallback, useEffect, useRef, useState } from 'react';
import { captureVideoRegion, mapOverlayToVideo } from '@/lib/check-in/mrz/cropRegion';

export interface UseCameraResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  error: string | null;
  isReady: boolean;
  captureOverlay: (container: HTMLElement, overlay: HTMLElement) => HTMLCanvasElement | null;
}

export function useCamera(): UseCameraResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function start() {
      try {
        let mediaStream: MediaStream;
        try {
          mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: 'environment' },
              width: { ideal: 1920 },
              height: { ideal: 1080 },
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
  }, []);

  const captureOverlay = useCallback(
    (container: HTMLElement, overlay: HTMLElement): HTMLCanvasElement | null => {
      const video = videoRef.current;
      if (!video || video.videoWidth === 0) return null;

      const region = mapOverlayToVideo(overlay, container, video);
      if (!region) return null;

      return captureVideoRegion(video, region, 6);
    },
    [],
  );

  return { videoRef, error, isReady, captureOverlay };
}
