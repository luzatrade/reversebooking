import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { downloadAlloggiatiFile } from '@/lib/check-in/export/questura';
import { guestsToAlloggiatiRecords } from '@/lib/check-in/export/guestMapper';
import { markGuestsExported, useGuests } from '@/lib/check-in/guests';
import { toast } from '@/lib/check-in/useToast';
import styles from './ExportPage.module.css';

export function ExportPage() {
  const { t } = useTranslation();
  const { guests, loading, refresh } = useGuests({ onlyPendingExport: true });
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [exporting, setExporting] = useState(false);

  const allSelected = guests.length > 0 && selected.size === guests.length;

  const selectedGuests = useMemo(
    () => guests.filter((g) => g.id && selected.has(g.id)),
    [guests, selected],
  );

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(guests.map((g) => g.id!).filter(Boolean)));
    }
  }

  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleExport() {
    if (selectedGuests.length === 0) return;
    setExporting(true);
    try {
      const records = guestsToAlloggiatiRecords(selectedGuests);
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      downloadAlloggiatiFile(records, `alloggiati_${date}.txt`);

      const ids = selectedGuests.map((g) => g.id!);
      await markGuestsExported(ids);

      toast(t('export.success', { count: ids.length }), 'success');
      setSelected(new Set());
      await refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : t('export.error'), 'error');
    } finally {
      setExporting(false);
    }
  }

  if (loading) {
    return <p className={styles.empty}>{t('common.loading')}</p>;
  }

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>{t('export.title')}</h2>
      <p className={styles.hint}>{t('export.hint')}</p>

      {guests.length === 0 ? (
        <p className={styles.empty}>{t('export.noGuests')}</p>
      ) : (
        <>
          <label className={styles.selectAll}>
            <input type="checkbox" checked={allSelected} onChange={toggleAll} />
            {t('export.selectAll')}
          </label>

          <ul className={styles.list}>
            {guests.map((g) => (
              <li key={g.id}>
                <label className={styles.item}>
                  <input
                    type="checkbox"
                    checked={selected.has(g.id!)}
                    onChange={() => toggleOne(g.id!)}
                  />
                  <span>
                    <strong>{g.surname} {g.givenNames}</strong>
                    <small>{g.arrivalDate}</small>
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.exportBtn}
            disabled={selectedGuests.length === 0 || exporting}
            onClick={() => void handleExport()}
          >
            {exporting
              ? t('export.exporting')
              : t('export.questura', { count: selectedGuests.length })}
          </button>
        </>
      )}
    </div>
  );
}
