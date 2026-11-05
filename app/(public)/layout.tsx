import { SiteFooter } from "@/components/legal/SiteFooter";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      {/* SiteHeader is rendered globally via ConditionalSiteHeader in root layout */}
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
