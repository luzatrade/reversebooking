"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  alloggiatiExportFilename,
  downloadAlloggiatiFile,
  formatItalianDateLabel,
} from "@/lib/check-in/export/questura";
import { guestsToAlloggiatiRecords } from "@/lib/check-in/export/guestMapper";
import { markGuestsExported, useGuests } from "@/lib/check-in/useGuests";
import { logCheckInTelemetry } from "@/lib/check-in/telemetry";
import { toast } from "@/lib/check-in/useToast";
import styles from "./ExportPage.module.css";

interface ExportPageProps {
  hotelAccountId: string;
  refreshKey?: number;
  usingLocalStorage?: boolean;
  onStorageFallback?: () => void;
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function ExportPage({
  hotelAccountId,
  refreshKey = 0,
  usingLocalStorage = false,
  onStorageFallback,
}: ExportPageProps) {
  const { t } = useTranslation();
  const { guests, loading, refresh } = useGuests(hotelAccountId, {
    onlyPendingExport: true,
    usingLocalStorage,
    onStorageFallback,
  });
  const [selectedDate, setSelectedDate] = useState(todayIso);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [exporting, setExporting] = useState(false);

  const guestsByDate = useMemo(() => {
    const map = new Map<string, typeof guests>();
    for (const guest of guests) {
      const bucket = map.get(guest.arrivalDate) ?? [];
      bucket.push(guest);
      map.set(guest.arrivalDate, bucket);
    }
    return map;
  }, [guests]);

  const availableDates = useMemo(
    () => [...guestsByDate.keys()].sort((a, b) => b.localeCompare(a)),
    [guestsByDate],
  );

  const dateGuests = guestsByDate.get(selectedDate) ?? [];
  const allSelected = dateGuests.length > 0 && selected.size === dateGuests.length;

  const selectedGuests = useMemo(
    () => dateGuests.filter((g) => g.id && selected.has(g.id)),
    [dateGuests, selected],
  );

  useEffect(() => {
    if (availableDates.length === 0) return;
    if (!availableDates.includes(selectedDate)) {
      setSelectedDate(availableDates[0]!);
    }
  }, [availableDates, selectedDate]);

  useEffect(() => {
    setSelected(new Set(dateGuests.map((g) => g.id!).filter(Boolean)));
  }, [selectedDate, dateGuests]);

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(dateGuests.map((g) => g.id!).filter(Boolean)));
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
      downloadAlloggiatiFile(records, alloggiatiExportFilename(selectedDate));

      const ids = selectedGuests.map((g) => g.id!);
      await markGuestsExported(hotelAccountId, ids, usingLocalStorage);

      void logCheckInTelemetry({
        hotelAccountId,
        event: "export",
        exportGuestCount: ids.length,
      });

      toast(
        t("export.success", {
          count: ids.length,
          date: formatItalianDateLabel(selectedDate),
        }),
        "success",
      );
      setSelected(new Set());
      await refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : t("export.error"), "error");
    } finally {
      setExporting(false);
    }
  }

  if (loading) {
    return <p className={styles.empty}>{t("common.loading")}</p>;
  }

  return (
    <div className={styles.page} key={refreshKey}>
      <h2 className={styles.title}>{t("export.title")}</h2>
      <p className={styles.hint}>{t("export.hint")}</p>

      {usingLocalStorage && (
        <p className={styles.localNotice}>{t("export.localStorageNotice")}</p>
      )}

      {guests.length === 0 ? (
        <p className={styles.empty}>{t("export.noGuests")}</p>
      ) : (
        <>
          {availableDates.length > 1 && (
            <div className={styles.dateRow} role="tablist" aria-label={t("export.dateFilter")}>
              {availableDates.map((date) => (
                <button
                  key={date}
                  type="button"
                  role="tab"
                  aria-selected={selectedDate === date}
                  className={selectedDate === date ? styles.dateActive : styles.dateBtn}
                  onClick={() => setSelectedDate(date)}
                >
                  {formatItalianDateLabel(date)}
                  <span className={styles.dateCount}>{guestsByDate.get(date)?.length ?? 0}</span>
                </button>
              ))}
            </div>
          )}

          <p className={styles.dayTitle}>
            {t("export.dayTitle", { date: formatItalianDateLabel(selectedDate) })}
          </p>

          {dateGuests.length === 0 ? (
            <p className={styles.empty}>{t("export.dayEmpty")}</p>
          ) : (
            <>
              <label className={styles.selectAll}>
                <input type="checkbox" checked={allSelected} onChange={toggleAll} />
                {t("export.selectAll")}
              </label>

              <ul className={styles.list}>
                {dateGuests.map((g) => (
                  <li key={g.id}>
                    <label className={styles.item}>
                      <input
                        type="checkbox"
                        checked={selected.has(g.id!)}
                        onChange={() => toggleOne(g.id!)}
                      />
                      <span>
                        <strong>
                          {g.surname} {g.givenNames}
                        </strong>
                        <small>
                          {t("guests.days")}: {g.stayDays}
                        </small>
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
                  ? t("export.exporting")
                  : t("export.downloadDay", {
                      date: formatItalianDateLabel(selectedDate),
                      count: selectedGuests.length,
                    })}
              </button>

              <p className={styles.portalHint}>{t("export.portalHint")}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
