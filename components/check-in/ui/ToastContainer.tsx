import type { ToastMessage } from './Toast';
import styles from './Toast.module.css';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className={styles.container} aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
          <span>{t.message}</span>
          <button type="button" onClick={() => onDismiss(t.id)} aria-label="Close">×</button>
        </div>
      ))}
    </div>
  );
}

export type { ToastMessage, ToastType } from './Toast';
