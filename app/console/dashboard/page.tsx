import Link from "next/link";
import { StatCard } from "@/components/dashboard/StatCard";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { getAdminStats } from "@/lib/admin/data";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleDashboardPage() {
  const t = await getServerTranslations();

  if (!isServiceRoleConfigured()) {
    return (
      <>
        <ConsolePageHeader
          title={t.console.pages.dashboard.title}
          description={t.console.pages.dashboard.descriptionMissingKey}
        />
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {t.console.serviceRoleMissing}
        </p>
      </>
    );
  }

  const stats = await getAdminStats();

  const links = [
    { href: "/console/utenti", label: t.console.navUsers, count: stats.users },
    { href: "/console/strutture", label: t.console.navStructures, count: stats.hotels },
    { href: "/console/inserzionisti", label: t.console.navAdvertisers, count: stats.advertisers },
    { href: "/console/annunci", label: t.console.navListings, count: stats.requests },
    { href: "/console/offerte", label: t.console.navOffers, count: stats.offers },
    { href: "/console/abbonamenti", label: t.console.pages.dashboard.linkActiveSubscriptions, count: stats.activeSubscriptions },
    { href: "/console/fatture", label: t.console.navInvoices, count: stats.invoices },
    { href: "/console/consensi", label: t.console.pages.dashboard.linkLegalConsents, count: null },
  ];

  return (
    <>
      <ConsolePageHeader title={t.console.pages.dashboard.title} description={t.console.pages.dashboard.description} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label={t.console.pages.dashboard.statTotalUsers} value={String(stats.users)} />
        <StatCard label={t.console.pages.dashboard.statStructures} value={String(stats.hotels)} />
        <StatCard label={t.console.pages.dashboard.statAdvertisers} value={String(stats.advertisers)} />
        <StatCard label={t.console.pages.dashboard.statActiveSubscriptions} value={String(stats.activeSubscriptions)} />
        <StatCard label={t.console.pages.dashboard.statListings} value={String(stats.requests)} />
        <StatCard label={t.console.pages.dashboard.statOffers} value={String(stats.offers)} />
        <StatCard label={t.console.pages.dashboard.statInvoices} value={String(stats.invoices)} />
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-900">{t.console.pages.dashboard.operationalSections}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#0f4c81]/40 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
              {item.count !== null ? (
                <p className="mt-2 text-2xl font-bold text-[#0f4c81]">{item.count}</p>
              ) : (
                <p className="mt-2 text-sm text-zinc-500">{t.console.pages.dashboard.consentRegistry}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
