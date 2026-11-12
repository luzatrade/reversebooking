import type { Metadata, Viewport } from "next";
import { EmailPreviewPwaHead } from "@/components/console/EmailPreviewPwaHead";

export const metadata: Metadata = {
  title: "Anteprima email richieste",
  description:
    "Anteprima dei template email inviati alle strutture partner e al catalogo quando viene pubblicata una richiesta.",
  manifest: "/console/anteprima-email/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "HD Email",
    statusBarStyle: "default",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f4c81",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function AnteprimaEmailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EmailPreviewPwaHead />
      {children}
    </>
  );
}
