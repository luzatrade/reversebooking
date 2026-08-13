import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCamera } from '@/lib/check-in/useCamera';
import {
  destroyCanvas,
  extractMrzFromFile,
  extractMrzFromFullFrame,
  getLastOcrDebug,
  playCaptureSound,
  warmupOcr,
} from '@/lib/check-in/mrz/ocrWorker';
import i18n from '@/lib/check-in/i18n';
import { toast } from '@/lib/check-in/useToast';
import type { MrzExtractedData } from '@/types/check-in';
import styles from './DocumentScanner.module.css';

type ScanPhase = 'loading' | 'preview' | 'processing' | 'success' | 'error';
export type ScanOrientation = 'portrait' | 'landscape';

interface DocumentScannerProps {
  onResult: (data: MrzExtractedData) => void;
  onManualEntry: () => void;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function DocumentScanner({ onResult, onManualEntry }: DocumentScannerProps) {
  const { t } = useTranslation();
  const { videoRef, error: cameraError, isReady, captureFullFrame, captureOverlay } = useCamera();
  const containerRef = useRef<HTMLDivElement>(null);
  const mrzStripRef = useRef<HTMLDivElement>(null);
  const viewfinderRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingRef = useRef(false);
  const [phase, setPhase] = useState<ScanPhase>('loading');
  const [ocrReady, setOcrReady] = useState(false);
  const [debugText, setDebugText] = useState('');
  const [orientation, setOrientation] = useState<ScanOrientation>('portrait');
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void warmupOcr()
      .then(() => {
        if (!cancelled) setOcrReady(true);
      })
      .catch((err) => {
        console.error('[OCR] warmup failed', err);
        if (!cancelled) {
          toast(i18n.t('capture.ocrInitFailed'), 'error');
          setDebugText(err instanceof Error ? err.message : String(err));
          setPhase('error');
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isReady && phase === 'loading') setPhase('preview');
  }, [isReady, phase]);

  const runOcr = useCallback(async () => {
    if (processingRef.current || !ocrReady) return;
    const container = containerRef.current;
    const mrzStrip = mrzStripRef.current;
    if (!container || !mrzStrip) return;

    processingRef.current = true;
    setPhase('processing');
    setDebugText('');

    try {
      for (let i = 0; i < 2; i++) {
        const strip = captureOverlay(container, mrzStrip, 4);
        if (strip) {
          const result = await extractMrzFromFullFrame(strip, orientation);
          destroyCanvas(strip);
          if (result) {
            setPhase('success');
            playCaptureSound();
            onResult(result);
            return;
          }
        }

        const full = captureFullFrame(container);
        if (full) {
          const result = await extractMrzFromFullFrame(full, orientation);
          destroyCanvas(full);
          if (result) {
            setPhase('success');
            playCaptureSound();
            onResult(result);
            return;
          }
        } else {
          setDebugText('(cattura video fallita — attendi che la camera sia pronta)');
        }

        if (i < 1) await sleep(200);
      }

      setDebugText(getLastOcrDebug());
      setPhase('error');
      toast(t('capture.failed'), 'error');
    } catch (err) {
      setPhase('error');
      setDebugText(err instanceof Error ? err.message : t('capture.failed'));
      toast(t('capture.failed'), 'error');
    } finally {
      processingRef.current = false;
    }
  }, [captureFullFrame, captureOverlay, ocrReady, onResult, orientation, t]);

  const handlePhotoUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = '';
      if (!file || processingRef.current || !ocrReady) return;

      processingRef.current = true;
      setPhase('processing');
      setDebugText('');

      try {
        const result = await extractMrzFromFile(file);
        if (result) {
          setPhase('success');
          playCaptureSound();
          onResult(result);
        } else {
          setDebugText(getLastOcrDebug());
          setPhase('error');
          toast(t('capture.failedPhoto'), 'error');
        }
      } catch (err) {
        setPhase('error');
        setDebugText(err instanceof Error ? err.message : String(err));
        toast(t('capture.failedPhoto'), 'error');
      } finally {
        processingRef.current = false;
      }
    },
    [ocrReady, onResult, t],
  );

  const captureLabel =
    phase === 'processing'
      ? t('capture.processing')
      : !isReady
        ? t('capture.cameraLoading')
        : !ocrReady
          ? t('capture.preparing')
          : phase === 'error'
            ? t('capture.retry')
            : t('capture.shoot');

  if (cameraError) {
    return (
      <div className={styles.error}>
        <p>{t('errors.cameraDenied')}</p>
        <button type="button" onClick={onManualEntry}>
          {t('capture.manualEntry')}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.scanner}>
      <div className={styles.body}>
        <div className={styles.modeRow}>
          <button
            type="button"
            className={orientation === 'portrait' ? styles.modeActive : styles.modeBtn}
            onClick={() => setOrientation('portrait')}
          >
            {t('capture.modePortrait')}
          </button>
          <button
            type="button"
            className={orientation === 'landscape' ? styles.modeActive : styles.modeBtn}
            onClick={() => setOrientation('landscape')}
          >
            {t('capture.modeLandscape')}
          </button>
        </div>

        <div ref={containerRef} className={styles.videoContainer}>
          <video ref={videoRef} className={styles.video} playsInline muted autoPlay />
          <div
            ref={viewfinderRef}
            className={orientation === 'portrait' ? styles.viewfinderPortrait : styles.viewfinderLandscape}
            aria-hidden="true"
          >
            <span className={styles.rotateHint}>
              {orientation === 'portrait' ? t('capture.guidePortraitShort') : t('capture.guideLandscapeShort')}
            </span>
            <span className={styles.mrzLabel}>MRZ</span>
            <div
              ref={mrzStripRef}
              className={orientation === 'portrait' ? styles.mrzStripRight : styles.mrzStripBottom}
            />
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />
          </div>
        </div>

        <p className={styles.hint}>
          {phase === 'processing'
            ? t('capture.processing')
            : !ocrReady
              ? t('capture.preparing')
              : orientation === 'portrait'
                ? t('capture.hintPortrait')
                : t('capture.hintLandscape')}
        </p>

        <button type="button" className={styles.guideToggle} onClick={() => setShowGuide((v) => !v)}>
          {showGuide ? t('capture.hideGuide') : t('capture.showGuide')}
        </button>

        {showGuide && (
          <div className={styles.guideBox}>
            <p><strong>{t('capture.guidePhotoTitle')}</strong></p>
            <ul>
              <li>{t('capture.guidePhotoPortrait')}</li>
              <li>{t('capture.guidePhotoLandscape')}</li>
              <li>{t('capture.guidePhotoLight')}</li>
            </ul>
            <p><strong>{t('capture.guideCameraTitle')}</strong></p>
            <ul>
              <li>{t('capture.guideCameraFocus')}</li>
              <li>{t('capture.guideCameraBurst')}</li>
            </ul>
          </div>
        )}

        {debugText && <pre className={styles.debug}>{debugText}</pre>}
      </div>

      <footer className={styles.footer}>
        <button
          type="button"
          className={styles.captureBtn}
          onClick={() => void runOcr()}
          disabled={!isReady || !ocrReady || phase === 'processing'}
        >
          {captureLabel}
        </button>

        <div className={styles.secondaryRow}>
          <button
            type="button"
            className={styles.secondaryBtnAccent}
            onClick={() => fileInputRef.current?.click()}
            disabled={!ocrReady || phase === 'processing'}
          >
            {t('capture.uploadPhoto')}
          </button>
          <button type="button" className={styles.secondaryBtn} onClick={onManualEntry}>
            {t('capture.manualEntry')}
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          onChange={(e) => void handlePhotoUpload(e)}
        />
      </footer>
    </div>
  );
}
