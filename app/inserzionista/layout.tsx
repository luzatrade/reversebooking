import type { Metadata } from "next";
import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function InserzionistaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells role="advertiser" />
      {children}
    </>
  );
}
