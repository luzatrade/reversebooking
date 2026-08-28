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

type ScanPhase = 'preview' | 'processing' | 'success' | 'error';
type ScanScreen = 'chooser' | 'camera';
export type ScanOrientation = 'portrait' | 'landscape';

const FILE_INPUT_ID = 'fc-document-photo-input';

interface DocumentScannerProps {
  onResult: (data: MrzExtractedData) => void;
  onManualEntry: () => void;
}

export function DocumentScanner({ onResult, onManualEntry }: DocumentScannerProps) {
  const { t } = useTranslation();
  const [screen, setScreen] = useState<ScanScreen>('chooser');
  const [ocrReady, setOcrReady] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);
  const cameraEnabled = screen === 'camera';
  const { videoRef, error: cameraError, isReady, captureFullFrame, captureOverlay } =
    useCamera(cameraEnabled);
  const containerRef = useRef<HTMLDivElement>(null);
  const mrzStripRef = useRef<HTMLDivElement>(null);
  const viewfinderRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);
  const ocrReadyRef = useRef(false);
  const warmupRef = useRef<Promise<boolean> | null>(null);
  const [phase, setPhase] = useState<ScanPhase>('preview');
  const [debugText, setDebugText] = useState('');
  const [orientation, setOrientation] = useState<ScanOrientation>('portrait');
  const [showGuide, setShowGuide] = useState(false);

  /** Avvia (una sola volta) il motore OCR. Non va atteso prima di aprire il
   *  selettore file: l'attesa consuma il gesto utente e il browser blocca il picker. */
  const ensureOcr = useCallback((): Promise<boolean> => {
    if (ocrReadyRef.current) return Promise.resolve(true);
    if (!warmupRef.current) {
      setOcrLoading(true);
      warmupRef.current = warmupOcr()
        .then(() => {
          ocrReadyRef.current = true;
          setOcrReady(true);
          return true;
        })
        .catch((err) => {
          console.error('[OCR] warmup failed', err);
          warmupRef.current = null;
          toast(i18n.t('capture.ocrInitFailed'), 'error');
          setDebugText(err instanceof Error ? err.message : String(err));
          return false;
        })
        .finally(() => setOcrLoading(false));
    }
    return warmupRef.current;
  }, []);

  const runOcr = useCallback(async () => {
    if (processingRef.current) return;
    const container = containerRef.current;
    const mrzStrip = mrzStripRef.current;
    if (!container || !mrzStrip) return;

    processingRef.current = true;
    setPhase('processing');
    setDebugText('');

    try {
      if (!(await ensureOcr())) {
        setPhase('error');
        return;
      }

      const strip = captureOverlay(container, mrzStrip, 4);
      if (strip) {
        const stripResult = await extractMrzFromFullFrame(strip, orientation, {
          allowLegacyFallback: false,
        });
        destroyCanvas(strip);
        if (stripResult) {
          setPhase('success');
          playCaptureSound();
          onResult(stripResult);
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
  }, [captureFullFrame, captureOverlay, ensureOcr, onResult, orientation, t]);

  const handlePhotoUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = '';
      if (!file || processingRef.current) return;

      processingRef.current = true;
      setPhase('processing');
      setDebugText('');

      try {
        if (!(await ensureOcr())) {
          setPhase('error');
          return;
        }

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
    [ensureOcr, onResult, t],
  );

  const handleCameraClick = useCallback(() => {
    setPhase('preview');
    setDebugText('');
    setScreen('camera');
    void ensureOcr();
  }, [ensureOcr]);

  useEffect(() => {
    if (cameraEnabled && isReady && phase !== 'processing' && phase !== 'success') {
      setPhase('preview');
    }
  }, [cameraEnabled, isReady, phase]);

  const fileInput = (
    <input
      id={FILE_INPUT_ID}
      type="file"
      accept="image/*"
      className={styles.hiddenInput}
      disabled={phase === 'processing'}
      onChange={(e) => void handlePhotoUpload(e)}
    />
  );

  const uploadLabelText =
    phase === 'processing'
      ? t('capture.processing')
      : ocrLoading
        ? t('capture.preparingBackground')
        : t('capture.uploadPhoto');

  const captureLabel =
    phase === 'processing'
      ? t('capture.processing')
      : !isReady
        ? t('capture.cameraLoading')
        : phase === 'error'
          ? t('capture.retry')
          : t('capture.shoot');

  if (screen === 'chooser') {
    return (
      <div className={styles.scanner}>
        <div className={styles.body}>
          <p className={styles.chooserHint}>
            {phase === 'processing' ? t('capture.processing') : t('capture.chooserHint')}
          </p>
          {debugText && <pre className={styles.debug}>{debugText}</pre>}
        </div>
        <footer className={styles.footer}>
          {/* Label nativa: apre il selettore file senza click programmatico,
              che i browser mobile bloccano se avviene dopo un'operazione async. */}
          <label
            htmlFor={FILE_INPUT_ID}
            className={phase === 'processing' ? `${styles.captureBtn} ${styles.btnBusy}` : styles.captureBtn}
            onClick={() => void ensureOcr()}
          >
            {uploadLabelText}
          </label>
          <div className={styles.secondaryRow}>
            <button
              type="button"
              className={styles.secondaryBtnAccent}
              onClick={handleCameraClick}
              disabled={phase === 'processing'}
            >
              {t('capture.useCamera')}
            </button>
            <button type="button" className={styles.secondaryBtn} onClick={onManualEntry}>
              {t('capture.manualEntry')}
            </button>
          </div>
          {fileInput}
        </footer>
      </div>
    );
  }

  if (cameraError) {
    return (
      <div className={styles.error}>
        <p>{t('errors.cameraDenied')}</p>
        <button type="button" onClick={() => setScreen('chooser')}>
          {t('capture.backToChooser')}
        </button>
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
            : !isReady
              ? t('capture.cameraLoading')
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
          disabled={!isReady || phase === 'processing'}
        >
          {captureLabel}
        </button>

        <div className={styles.secondaryRow}>
          <label
            htmlFor={FILE_INPUT_ID}
            className={
              phase === 'processing'
                ? `${styles.secondaryBtnAccent} ${styles.btnBusy}`
                : styles.secondaryBtnAccent
            }
            onClick={() => void ensureOcr()}
          >
            {t('capture.uploadPhoto')}
          </label>
          <button type="button" className={styles.secondaryBtn} onClick={() => setScreen('chooser')}>
            {t('capture.backToChooser')}
          </button>
          <button type="button" className={styles.secondaryBtn} onClick={onManualEntry}>
            {t('capture.manualEntry')}
          </button>
        </div>

        {fileInput}
      </footer>
    </div>
  );
}
