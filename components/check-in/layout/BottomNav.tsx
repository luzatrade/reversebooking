"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { AppTab } from "./BottomNav.types";
import styles from "./BottomNav.module.css";

export type { AppTab };

interface BottomNavProps {
  active: AppTab;
  basePath: "/struttura" | "/agenzia";
}

export function BottomNav({ active, basePath }: BottomNavProps) {
  const { t } = useTranslation();
  const root = `${basePath}/check-in`;

  const tabs: { id: AppTab; label: string; icon: string; href: string }[] = [
    { id: "checkin", label: t("nav.checkin"), icon: "📷", href: root },
    { id: "guests", label: t("nav.guests"), icon: "👥", href: `${root}/ospiti` },
    { id: "export", label: t("nav.export"), icon: "📄", href: `${root}/export` },
  ];

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={active === tab.id ? styles.active : styles.btn}
        >
          <span className={styles.icon}>{tab.icon}</span>
          <span className={styles.label}>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
