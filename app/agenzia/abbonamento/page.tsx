import type { Metadata } from "next";
import Link from "next/link";
import { LegalMicroLine } from "@/components/legal/LegalMicroLine";
import { getAgencyPackagePromoEndLabel, isAgencyPackagePromoActive } from "@/lib/agency/package-subscription";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return {
    title: t.catalogOffers.agencySubscriptionPageTitle,
    description: t.catalogOffers.agencySubscriptionPageIntro,
  };
}

export default async function AgencySubscriptionPage() {
  const [t, locale] = await Promise.all([getServerTranslations(), getServerLocale()]);
  const c = t.catalogOffers;
  const promoActive = isAgencyPackagePromoActive();
  const promoEnd = getAgencyPackagePromoEndLabel(locale);
  const stripePortalUrl = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/agenzia/dashboard" className="text-sm font-semibold text-[#0f4c81]">
        ← {t.common.backToDashboard}
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0c3d66]">{c.agencySubscriptionPageTitle}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.agencySubscriptionPageIntro}</p>
        {promoActive ? (
          <p className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {c.agencySubscriptionPromoNote.replace("{date}", promoEnd)}
          </p>
        ) : null}
      </header>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-900">{t.strutturaArea.subscriptionTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{t.strutturaArea.subscriptionBody}</p>
        <LegalMicroLine variant="subscriptionCheckout" className="mt-4" />
        <div className="mt-4 flex flex-wrap gap-3">
          {stripePortalUrl ? (
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#0f4c81] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c3d66]"
              href={stripePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.strutturaArea.manageStripe}
            </a>
          ) : (
            <p className="text-sm text-zinc-600">
              {t.strutturaArea.portalInactive}{" "}
              <Link href="/contatti" className="font-medium text-[#0f4c81] underline">
                {t.site.support.toLowerCase()}
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <p className="mt-8 text-sm text-zinc-500">
        <Link href="/condizioni-abbonamento" className="font-medium text-zinc-800 underline">
          {t.strutturaArea.subscriptionConditions}
        </Link>
      </p>
    </div>
  );
}
