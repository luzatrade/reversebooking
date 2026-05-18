import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { FloatingChatWidget } from "@/components/chat/FloatingChatWidget";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { company, getAppUrl } from "@/lib/legal/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(getAppUrl()),
  title: {
    default: `${company.companyName} — Richieste di soggiorno e offerte`,
    template: `%s · ${company.companyName}`,
  },
  description:
    "Metti in contatto inserzionisti e strutture ricettive: annunci di richiesta di soggiorno e risposte con offerte dedicate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-zinc-50 text-zinc-900">
        <LanguageProvider>
          {children}
          <FloatingChatWidget />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
