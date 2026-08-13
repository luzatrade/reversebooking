import type { Metadata } from "next";
import { FastCheckInProvider } from "@/components/check-in/FastCheckInProvider";
import { CheckInShell } from "@/components/check-in/CheckInShell";
import { canonicalUrl } from "@/lib/seo/canonical";

export const metadata: Metadata = {
  title: "Check-in ospiti",
  description: "Scansione MRZ e verifica dati documento per il check-in.",
  alternates: { canonical: canonicalUrl("/struttura/check-in") },
  robots: { index: false, follow: false },
};

export default function StrutturaCheckInLayout({ children }: { children: React.ReactNode }) {
  return (
    <FastCheckInProvider>
      <CheckInShell basePath="/struttura" expectedProviderKind="structure">
        {children}
      </CheckInShell>
    </FastCheckInProvider>
  );
}
