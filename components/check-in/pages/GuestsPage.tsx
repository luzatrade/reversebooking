"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { formatItalianDateLabel } from "@/lib/check-in/export/questura";
import { useGuests } from "@/lib/check-in/useGuests";
import styles from "./GuestsPage.module.css";

interface GuestsPageProps {
  hotelAccountId: string;
  refreshKey?: number;
  usingLocalStorage?: boolean;
  onStorageFallback?: () => void;
}

export function GuestsPage({
  hotelAccountId,
  refreshKey = 0,
  usingLocalStorage = false,
  onStorageFallback,
}: GuestsPageProps) {
  const { t } = useTranslation();
  const { guests, loading } = useGuests(hotelAccountId, {
    usingLocalStorage,
    onStorageFallback,
  });

  const groups = useMemo(() => {
    const map = new Map<string, typeof guests>();
    for (const guest of guests) {
      const bucket = map.get(guest.arrivalDate) ?? [];
      bucket.push(guest);
      map.set(guest.arrivalDate, bucket);
    }
    return [...map.entries()].sort(([a], [b]) => b.localeCompare(a));
  }, [guests]);

  if (loading) {
    return <p className={styles.empty}>{t("common.loading")}</p>;
  }

  if (guests.length === 0) {
    return (
      <div className={styles.page} key={refreshKey}>
        <h2 className={styles.title}>{t("guests.title")}</h2>
        <p className={styles.empty}>{t("guests.empty")}</p>
      </div>
    );
  }

  return (
    <div className={styles.page} key={refreshKey}>
      <h2 className={styles.title}>{t("guests.title")}</h2>
      <p className={styles.subtitle}>{t("guests.subtitle")}</p>

      {groups.map(([date, dateGuests]) => (
        <section key={date} className={styles.group}>
          <h3 className={styles.groupTitle}>
            {formatItalianDateLabel(date)}
            <span className={styles.groupCount}>{dateGuests.length}</span>
          </h3>
          <ul className={styles.list}>
            {dateGuests.map((g) => (
              <li key={g.id} className={styles.item}>
                <div className={styles.name}>
                  <strong>
                    {g.surname} {g.givenNames}
                  </strong>
                  <span className={styles.meta}>
                    {g.stayDays} {t("guests.days")}
                  </span>
                </div>
                <span className={g.exportedQuesturaAt ? styles.exported : styles.pending}>
                  {g.exportedQuesturaAt ? t("guests.exported") : t("guests.pending")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
