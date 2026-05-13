import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { company } from "@/lib/legal/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.websiteUrl),
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
