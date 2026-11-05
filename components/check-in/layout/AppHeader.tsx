"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { setLocale } from "@/lib/check-in/i18n";
import type { Locale } from "@/types/check-in";
import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  structureName: string;
  dashboardHref: string;
}

export function AppHeader({ structureName, dashboardHref }: AppHeaderProps) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.appName}>{t("app.name")}</span>
        <span className={styles.structureName}>{structureName}</span>
      </div>

      <div className={styles.actions}>
        <div className={styles.langSwitch} role="group" aria-label="Language">
          {(["it", "en"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              className={locale === lang ? styles.langActive : styles.langBtn}
              onClick={() => setLocale(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <Link href={dashboardHref} className={styles.signOut} title={t("auth.signOut")}>
          ←
        </Link>
      </div>
    </header>
  );
}
