import type { Metadata } from "next";
import Link from "next/link";
import { LegalMicroLine } from "@/components/legal/LegalMicroLine";
import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { buildPublicPageMetadata } from "@/lib/seo/public-page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return buildPublicPageMetadata(
    "/struttura",
    t.metadata.structureAreaTitle,
    t.metadata.structureAreaDescription,
  );
}

export default async function StrutturaPanelPage() {
  const t = await getServerTranslations();
  const stripePortalUrl = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <RoleAlertBells role="hotel" />
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{t.strutturaArea.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{t.strutturaArea.intro}</p>
      </header>

      <div className="mt-12 space-y-10">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{t.strutturaArea.subscriptionTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.strutturaArea.subscriptionBody}</p>
          <LegalMicroLine variant="subscriptionCheckout" className="mt-4" />
          <div className="mt-4 flex flex-wrap gap-3">
            {stripePortalUrl ? (
              <a
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                href={stripePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.strutturaArea.manageStripe}
              </a>
            ) : (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {t.strutturaArea.portalInactive}{" "}
                <Link href="/contatti" className="font-medium text-zinc-900 underline dark:text-zinc-100">
                  {t.site.support.toLowerCase()}
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{t.strutturaArea.invoicesTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.strutturaArea.invoicesBody}</p>
          <ul className="mt-4 divide-y divide-zinc-100 rounded-lg border border-zinc-100 text-sm dark:divide-zinc-800 dark:border-zinc-800">
            <li className="flex items-center justify-between px-4 py-3 text-zinc-500">
              <span>{t.strutturaArea.noInvoices}</span>
              <span className="text-xs uppercase">—</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{t.strutturaArea.downloadPdfTitle}</h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{t.strutturaArea.downloadPdfBody}</p>
          <button
            type="button"
            disabled
            className="mt-4 inline-flex cursor-not-allowed items-center rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-400 dark:border-zinc-700"
          >
            {t.strutturaArea.downloadPdfButton}
          </button>
        </section>

        <p className="text-sm text-zinc-500">
          {t.strutturaArea.detailsPrefix}{" "}
          <Link href="/condizioni-abbonamento" className="font-medium text-zinc-800 underline dark:text-zinc-200">
            {t.strutturaArea.subscriptionConditions}
          </Link>
          ,{" "}
          <Link href="/termini-e-condizioni" className="font-medium text-zinc-800 underline dark:text-zinc-200">
            {t.strutturaArea.terms}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
