"use client";

import { useTranslation } from "react-i18next";
import styles from "./BottomNav.module.css";

export type CheckInTab = "checkin" | "guests" | "export";

interface BottomNavProps {
  active: CheckInTab;
  onChange: (tab: CheckInTab) => void;
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  const { t } = useTranslation();

  const tabs: { id: CheckInTab; label: string; icon: string }[] = [
    { id: "checkin", label: t("nav.checkin"), icon: "📷" },
    { id: "guests", label: t("nav.guests"), icon: "👥" },
    { id: "export", label: t("nav.export"), icon: "📄" },
  ];

  return (
    <nav className={styles.nav} aria-label={t("nav.checkin")}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={active === tab.id ? styles.active : styles.btn}
          onClick={() => onChange(tab.id)}
        >
          <span className={styles.icon} aria-hidden>{tab.icon}</span>
          <span className={styles.label}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
