import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocumentScanner } from '@/components/check-in/capture/DocumentScanner';
import { GuestForm } from '@/components/check-in/form/GuestForm';
import { toast } from '@/lib/check-in/useToast';
import type { GuestRecord, MrzExtractedData } from '@/types/check-in';
import styles from './CheckInPage.module.css';

type View = 'scan' | 'form';

export function CheckInPage() {
  const { t } = useTranslation();
  const [view, setView] = useState<View>('scan');
  const [mrzData, setMrzData] = useState<MrzExtractedData | undefined>();

  function handleScanResult(data: MrzExtractedData) {
    setMrzData(data);
    setView('form');
    toast(t('capture.success'), 'success');
  }

  function handleConfirm(_guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>) {
    toast(t('form.saveSuccess'), 'success');
    setView('scan');
    setMrzData(undefined);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {view === 'scan' ? (
          <>
            <h2 className={styles.title}>{t('capture.title')}</h2>
            <DocumentScanner
              onResult={handleScanResult}
              onManualEntry={() => {
                setMrzData(undefined);
                setView('form');
              }}
            />
          </>
        ) : (
          <GuestForm
            key={mrzData?.rawMrz ?? 'manual'}
            initialData={mrzData}
            onSubmit={handleConfirm}
            onBack={() => setView('scan')}
          />
        )}
      </main>
    </div>
  );
}
