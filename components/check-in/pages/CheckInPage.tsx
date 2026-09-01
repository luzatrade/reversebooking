"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DocumentScanner } from "@/components/check-in/capture/DocumentScanner";
import { GuestForm } from "@/components/check-in/form/GuestForm";
import { releaseOcr } from "@/lib/check-in/mrz/ocrWorker";
import { registerGuest } from "@/lib/check-in/useGuests";
import { toast } from "@/lib/check-in/useToast";
import type { GuestRecord, MrzExtractedData } from "@/types/check-in";
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

  async function handleScanResult(data: MrzExtractedData) {
    await releaseOcr();
    setMrzData(data);
    setView("form");
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
      const result = await registerGuest(hotelAccountId, guest, usingLocalStorage);
      if (result.fellBackToLocalStorage) {
        onStorageFallback?.();
      }
      toast(t("form.saveSuccess"), "success");
      setView("scan");
      setMrzData(undefined);
      onSaved?.();
    } catch (err) {
      toast(err instanceof Error ? err.message : t("errors.saveFailed"), "error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {view === "scan" ? (
          <>
            <h2 className={styles.title}>{t("capture.title")}</h2>
            <DocumentScanner
              onResult={(data) => void handleScanResult(data)}
              onManualEntry={() => void handleManualEntry()}
            />
          </>
        ) : (
          <GuestForm
            key={mrzData?.rawMrz ?? "manual"}
            initialData={mrzData}
            onSubmit={(g) => void handleConfirm(g)}
            onBack={() => setView("scan")}
            saving={saving}
          />
        )}
      </main>
    </div>
  );
}
