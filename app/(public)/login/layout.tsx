import type { Metadata } from "next";
import { getServerLocale } from "@/lib/i18n/get-translations";
import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  return {
    robots: { index: false, follow: true },
    alternates: {
      canonical: canonicalUrl(localizedPath(locale, "/login")),
    },
  };
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
