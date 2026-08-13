"use client";

import { I18nextProvider } from "react-i18next";
import "@/components/check-in/fastcheckin.css";
import i18n from "@/lib/check-in/i18n";

export function FastCheckInProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
