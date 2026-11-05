"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { DocumentScanner } from "@/components/check-in/capture/DocumentScanner";
import { GuestForm } from "@/components/check-in/form/GuestForm";
import {
  alloggiatiNucleusFilename,
  alloggiatiSingleFilename,
  downloadAlloggiatiFile,
  formatItalianDateLabel,
} from "@/lib/check-in/export/questura";
import { guestsToAlloggiatiRecords } from "@/lib/check-in/export/guestMapper";
import {
  cancelOpenCheckInNucleus,
  completeCheckInNucleusExport,
  createCheckInNucleus,
  deleteEmptyCheckInNucleus,
  loadCheckInNucleusGuests,
  loadOpenCheckInNuclei,
} from "@/lib/check-in/nuclei";
import { releaseOcr } from "@/lib/check-in/mrz/ocrWorker";
import { logCheckInTelemetry } from "@/lib/check-in/telemetry";
import { createCheckInExport, deleteGuest, registerGuest } from "@/lib/check-in/useGuests";
import { toast } from "@/lib/check-in/useToast";
import type { CheckInNucleus, CheckInNucleusType, GuestRecord, GuestType, MrzExtractedData } from "@/types/check-in";
import styles from "./CheckInPage.module.css";

type View = "scan" | "form";

interface CheckInPageProps {
  hotelAccountId: string;
  usingLocalStorage?: boolean;
  onStorageFallback?: () => void;
  onSaved?: () => void;
}

export function CheckInPage({
  hotelAccountId,
  usingLocalStorage,
  onStorageFallback,
  onSaved,
}: CheckInPageProps) {
  const { t } = useTranslation();
  const [view, setView] = useState<View>("scan");
  const [mrzData, setMrzData] = useState<MrzExtractedData | undefined>();
  const [saving, setSaving] = useState(false);
  const [openNuclei, setOpenNuclei] = useState<CheckInNucleus[]>([]);
  const [activeNucleus, setActiveNucleus] = useState<CheckInNucleus | null>(null);
  const [nucleusGuests, setNucleusGuests] = useState<GuestRecord[]>([]);
  const [nucleusGuestCount, setNucleusGuestCount] = useState(0);
  const [finishingNucleus, setFinishingNucleus] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void loadOpenCheckInNuclei(hotelAccountId, usingLocalStorage)
      .then((nuclei) => {
        if (!cancelled) setOpenNuclei(nuclei);
      })
      .catch((err) => {
        if (!cancelled) toast(err instanceof Error ? err.message : t("errors.saveFailed"), "error");
      });
    return () => {
      cancelled = true;
    };
  }, [hotelAccountId, usingLocalStorage, onStorageFallback, t]);

  async function handleScanResult(data: MrzExtractedData) {
    await releaseOcr();
    setMrzData(data);
    setView("form");
    void logCheckInTelemetry({ hotelAccountId, event: "scan", mrz: data });
    if (data.mrzValid === false || (data.reviewFields?.length ?? 0) > 0) {
      toast(t("capture.successReview"), "info");
    } else {
      toast(t("capture.success"), "success");
    }
  }

  async function handleManualEntry() {
    await releaseOcr();
    setMrzData(undefined);
    setView("form");
  }

  async function handleConfirm(guest: Omit<GuestRecord, "id" | "hotelAccountId">) {
    setSaving(true);
    try {
      if (activeNucleus) {
        const expectedType: GuestType = activeNucleus.type === "family" ? "family" : "group";
        if (guest.guestType !== expectedType) {
          throw new Error(t("nucleus.mustChooseHead"));
        }
        const result = await registerGuest(
          hotelAccountId,
          { ...guest, nucleusId: activeNucleus.id },
          usingLocalStorage,
        );
        if (result.fellBackToLocalStorage) onStorageFallback?.();
        void logCheckInTelemetry({
          hotelAccountId,
          event: "save",
          mrz: mrzData,
          savedGuest: guest,
        });
        setNucleusGuests((current) => [
          ...current,
          { ...guest, id: result.id, hotelAccountId },
        ]);
        setNucleusGuestCount((count) => count + 1);
        toast(t("nucleus.memberSaved"), "success");
        setView("scan");
        setMrzData(undefined);
        onSaved?.();
        return;
      }

      if (guest.guestType === "family" || guest.guestType === "group") {
        toast(t("nucleus.mustChooseHead"), "error");
        return;
      }

      if (guest.guestType === "head_family" || guest.guestType === "head_group") {
        const nucleusType: CheckInNucleusType = guest.guestType === "head_family" ? "family" : "group";
        const nucleusResult = await createCheckInNucleus(
          hotelAccountId,
          nucleusType,
          usingLocalStorage,
        );
        if (nucleusResult.fellBackToLocalStorage) onStorageFallback?.();

        let guestResult;
        try {
          guestResult = await registerGuest(
            hotelAccountId,
            { ...guest, nucleusId: nucleusResult.id },
            nucleusResult.fellBackToLocalStorage || usingLocalStorage,
          );
        } catch (err) {
          await deleteEmptyCheckInNucleus(
            hotelAccountId,
            nucleusResult.id,
            nucleusResult.fellBackToLocalStorage || usingLocalStorage,
          );
          throw err;
        }

        if (guestResult.fellBackToLocalStorage) onStorageFallback?.();
        const nucleus: CheckInNucleus = {
          id: nucleusResult.id,
          hotelAccountId,
          type: nucleusType,
          status: "open",
          createdAt: new Date().toISOString(),
        };
        setOpenNuclei((current) => [...current.filter((item) => item.id !== nucleus.id), nucleus]);
        setActiveNucleus(nucleus);
        setNucleusGuests([{ ...guest, id: guestResult.id, hotelAccountId }]);
        setNucleusGuestCount(1);
        void logCheckInTelemetry({ hotelAccountId, event: "save", mrz: mrzData, savedGuest: guest });
        toast(t("nucleus.memberSaved"), "success");
        setView("scan");
        setMrzData(undefined);
        onSaved?.();
        return;
      }

      const guestResult = await registerGuest(hotelAccountId, guest, usingLocalStorage);
      if (guestResult.fellBackToLocalStorage) onStorageFallback?.();
      void logCheckInTelemetry({
        hotelAccountId,
        event: "save",
        mrz: mrzData,
        savedGuest: guest,
      });
      setView("scan");
      setMrzData(undefined);

      const savedGuest = { ...guest, id: guestResult.id, hotelAccountId };
      const records = guestsToAlloggiatiRecords([savedGuest]);
      try {
        await createCheckInExport(
          hotelAccountId,
          guest.arrivalDate,
          records,
          [guestResult.id],
          guestResult.fellBackToLocalStorage || usingLocalStorage,
        );
        downloadAlloggiatiFile(records, alloggiatiSingleFilename(guest.arrivalDate, guestResult.id));
        toast(
          t("export.success", {
            count: 1,
            date: formatItalianDateLabel(guest.arrivalDate),
          }),
          "success",
        );
      } catch (err) {
        toast(err instanceof Error ? err.message : t("export.error"), "error");
      }
      onSaved?.();
    } catch (err) {
      toast(err instanceof Error ? err.message : t("errors.saveFailed"), "error");
    } finally {
      setSaving(false);
    }
  }

  async function resumeNucleus(nucleus: CheckInNucleus) {
    setActiveNucleus(nucleus);
    try {
      const guests = await loadCheckInNucleusGuests(
        hotelAccountId,
        nucleus.id,
        usingLocalStorage,
      );
      setNucleusGuests(guests);
      setNucleusGuestCount(guests.length);
    } catch (err) {
      setActiveNucleus(null);
      toast(err instanceof Error ? err.message : t("errors.saveFailed"), "error");
    }
  }

  async function removeNucleusGuest(guest: GuestRecord) {
    if (!activeNucleus || !guest.id) return;
    const isHead = guest.guestType === "head_family" || guest.guestType === "head_group";
    if (isHead) {
      toast(t("nucleus.cancelConfirm"), "info");
      return;
    }
    try {
      await deleteGuest(hotelAccountId, guest.id, usingLocalStorage);
      setNucleusGuests((current) => current.filter((item) => item.id !== guest.id));
      setNucleusGuestCount((count) => Math.max(0, count - 1));
      onSaved?.();
      toast(t("nucleus.guestRemoved"), "success");
    } catch (err) {
      toast(err instanceof Error ? err.message : t("export.deleteError"), "error");
    }
  }

  async function cancelNucleus() {
    if (!activeNucleus || !window.confirm(t("nucleus.cancelConfirm"))) return;
    setFinishingNucleus(true);
    try {
      await cancelOpenCheckInNucleus(hotelAccountId, activeNucleus.id, usingLocalStorage);
      setOpenNuclei((current) => current.filter((nucleus) => nucleus.id !== activeNucleus.id));
      setActiveNucleus(null);
      setNucleusGuests([]);
      setNucleusGuestCount(0);
      onSaved?.();
    } catch (err) {
      toast(err instanceof Error ? err.message : t("nucleus.finishError"), "error");
    } finally {
      setFinishingNucleus(false);
    }
  }

  async function finishNucleus() {
    if (!activeNucleus || nucleusGuestCount < 2) return;
    setFinishingNucleus(true);
    try {
      const guests = await loadCheckInNucleusGuests(
        hotelAccountId,
        activeNucleus.id,
        usingLocalStorage,
      );
      const headType: GuestType = activeNucleus.type === "family" ? "head_family" : "head_group";
      if (guests.length < 2 || !guests.some((guest) => guest.guestType === headType)) {
        throw new Error(t("nucleus.needMembers"));
      }

      const records = guestsToAlloggiatiRecords(guests);
      await completeCheckInNucleusExport(
        hotelAccountId,
        activeNucleus.id,
        guests[0]!.arrivalDate,
        records,
        guests.map((guest) => guest.id!).filter(Boolean),
        usingLocalStorage,
      );
      downloadAlloggiatiFile(
        records,
        alloggiatiNucleusFilename(guests[0]!.arrivalDate, activeNucleus.type, activeNucleus.id),
      );
      setOpenNuclei((current) => current.filter((nucleus) => nucleus.id !== activeNucleus.id));
      setActiveNucleus(null);
      setNucleusGuests([]);
      setNucleusGuestCount(0);
      setView("scan");
      setMrzData(undefined);
      onSaved?.();
      toast(
        t("nucleus.finishSuccess", { count: guests.length }),
        "success",
      );
    } catch (err) {
      toast(err instanceof Error ? err.message : t("nucleus.finishError"), "error");
    } finally {
      setFinishingNucleus(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {view === "scan" ? (
          <>
            {activeNucleus ? (
              <section className={styles.nucleusPanel}>
                <div>
                  <h2 className={styles.title}>
                    {activeNucleus.type === "family" ? t("nucleus.family") : t("nucleus.group")}
                  </h2>
                  <p className={styles.nucleusMeta}>
                    {t("nucleus.memberCount", { count: nucleusGuestCount })}
                  </p>
                  <p className={styles.nucleusHint}>{t("nucleus.addNextHint")}</p>
                </div>
                <ul className={styles.nucleusGuestList}>
                  {nucleusGuests.map((guest) => {
                    const isHead = guest.guestType === "head_family" || guest.guestType === "head_group";
                    return (
                      <li key={guest.id}>
                        <span>
                          {guest.surname} {guest.givenNames}
                          {isHead ? ` · ${activeNucleus.type === "family" ? t("form.guestTypes.head_family") : t("form.guestTypes.head_group")}` : ""}
                        </span>
                        {!isHead && (
                          <button type="button" onClick={() => void removeNucleusGuest(guest)}>
                            {t("export.delete")}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <button
                  type="button"
                  className={styles.finishNucleusBtn}
                  disabled={nucleusGuestCount < 2 || finishingNucleus}
                  onClick={() => void finishNucleus()}
                >
                  {finishingNucleus ? t("nucleus.finishing") : t("nucleus.finish")}
                </button>
                <button
                  type="button"
                  className={styles.cancelNucleusBtn}
                  disabled={finishingNucleus}
                  onClick={() => void cancelNucleus()}
                >
                  {t("nucleus.cancel")}
                </button>
                {nucleusGuestCount < 2 && <small className={styles.nucleusHint}>{t("nucleus.needMembers")}</small>}
              </section>
            ) : (
              <>
                <h2 className={styles.title}>{t("capture.title")}</h2>
                {openNuclei.length > 0 && (
                  <section className={styles.openNuclei}>
                    <h3>{t("nucleus.openTitle")}</h3>
                    {openNuclei.map((nucleus) => (
                      <button
                        key={nucleus.id}
                        type="button"
                        className={styles.resumeNucleusBtn}
                        onClick={() => void resumeNucleus(nucleus)}
                      >
                        {nucleus.type === "family" ? t("nucleus.family") : t("nucleus.group")}
                        <span>{t("nucleus.resume")}</span>
                      </button>
                    ))}
                  </section>
                )}
              </>
            )}
            <DocumentScanner
              onResult={(data) => void handleScanResult(data)}
              onManualEntry={() => void handleManualEntry()}
            />
          </>
        ) : (
          <GuestForm
            key={mrzData?.rawMrz ?? "manual"}
            initialData={mrzData}
            nucleusType={activeNucleus?.type}
            onSubmit={(g) => void handleConfirm(g)}
            onBack={() => setView("scan")}
            saving={saving}
          />
        )}
      </main>
    </div>
  );
}
