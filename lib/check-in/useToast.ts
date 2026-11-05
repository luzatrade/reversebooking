import { useCallback, useState } from 'react';
import type { ToastMessage, ToastType } from '@/components/check-in/ui/Toast';

let pushToastFn: ((toast: Omit<ToastMessage, 'id'>) => void) | null = null;

export function registerToastHandler(fn: typeof pushToastFn) {
  pushToastFn = fn;
}

export function toast(message: string, type: ToastType = 'info') {
  pushToastFn?.({ message, type });
}

export function useToastState() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const push = useCallback((t: Omit<ToastMessage, 'id'>) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...t, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 4000);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  return { toasts, push, dismiss };
}
