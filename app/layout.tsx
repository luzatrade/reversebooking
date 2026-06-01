import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import { FloatingChatWidget } from "@/components/chat/FloatingChatWidget";
import { AppFooter } from "@/components/legal/AppFooter";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { getAppUrl } from "@/lib/legal/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600"],
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  const title = t.metadata.siteTitleDefault;
  const description = t.metadata.siteDescription;
  const siteUrl = getAppUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: t.metadata.siteTitleTemplate,
    },
    description,
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "HotelsDrop",
      title,
      description,
      locale: "it_IT",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = await getServerLocale();
  return (
    <html
      lang={initialLocale}
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-zinc-50 text-zinc-900">
        <LanguageProvider initialLocale={initialLocale}>
          <div className="flex min-h-full flex-1 flex-col">{children}</div>
          <AppFooter />
          <FloatingChatWidget />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
