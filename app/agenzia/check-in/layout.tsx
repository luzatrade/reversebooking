import type { Metadata } from "next";
import { FastCheckInProvider } from "@/components/check-in/FastCheckInProvider";
import { CheckInShell } from "@/components/check-in/CheckInShell";
import { canonicalUrl } from "@/lib/seo/canonical";

export const metadata: Metadata = {
  title: "Check-in ospiti agenzia",
  description: "Scansione MRZ e verifica dati documento per il check-in agenzia.",
  alternates: { canonical: canonicalUrl("/agenzia/check-in") },
  robots: { index: false, follow: false },
};

export default function AgenziaCheckInLayout({ children }: { children: React.ReactNode }) {
  return (
    <FastCheckInProvider>
      <CheckInShell basePath="/agenzia" expectedProviderKind="agency">
        {children}
      </CheckInShell>
    </FastCheckInProvider>
  );
}
