import { useTranslation } from 'react-i18next';
import { useGuests } from '@/lib/check-in/guests';
import styles from './GuestsPage.module.css';

export function GuestsPage() {
  const { t } = useTranslation();
  const { guests, loading } = useGuests();

  if (loading) {
    return <p className={styles.empty}>{t('common.loading')}</p>;
  }

  if (guests.length === 0) {
    return <p className={styles.empty}>{t('guests.empty')}</p>;
  }

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>{t('guests.title')}</h2>
      <ul className={styles.list}>
        {guests.map((g) => (
          <li key={g.id} className={styles.item}>
            <div className={styles.name}>
              <strong>{g.surname} {g.givenNames}</strong>
              <span className={styles.meta}>
                {g.arrivalDate} · {g.stayDays} {t('guests.days')}
              </span>
            </div>
            <span className={g.exportedQuesturaAt ? styles.exported : styles.pending}>
              {g.exportedQuesturaAt ? t('guests.exported') : t('guests.pending')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
