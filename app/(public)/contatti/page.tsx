import type { Metadata } from "next";
import {
  company,
  companyContactEmails,
  formatLegalAddress,
  type CompanyContactEmailId,
} from "@/lib/legal/company";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { getServerLocale, getServerTranslations } from "@/lib/i18n/get-translations";
import { buildContactPageJsonLd } from "@/lib/seo/contact-jsonld";
import { buildPublicPageMetadata } from "@/lib/seo/public-page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return buildPublicPageMetadata("/contatti", t.metadata.contactsTitle, t.metadata.contactsDescription);
}

function CompanyField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-start sm:gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">{children}</dd>
    </div>
  );
}

export default async function ContattiPage() {
  const t = await getServerTranslations();
  const locale = await getServerLocale();
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <JsonLdScript data={buildContactPageJsonLd(locale)} />
      <header className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          {t.contact.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
          {t.contact.intro}
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
        <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {t.contact.companySectionTitle}
          </h2>

          <dl className="mt-5 space-y-4">
            <CompanyField label={t.contact.legalEntity}>{company.legalEntityName}</CompanyField>
            <CompanyField label={t.contact.tradeName}>{company.companyName}</CompanyField>
            <CompanyField label={t.contact.businessActivity}>{company.businessName}</CompanyField>
            <CompanyField label={t.contact.vatNumber}>{company.vatNumber}</CompanyField>
            <CompanyField label={t.contact.taxCode}>{company.taxCode}</CompanyField>
            <CompanyField label={t.contact.headquarters}>{formatLegalAddress()}</CompanyField>
            <CompanyField label={t.contact.pec}>
              <a
                className="break-all font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
                href={`mailto:${company.pecEmail}`}
              >
                {company.pecEmail}
              </a>
            </CompanyField>
            <CompanyField label={t.contact.phone}>
              <a
                className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
                href={phoneHref}
              >
                {company.phone}
              </a>
            </CompanyField>
            <CompanyField label={t.contact.website}>
              <a
                className="break-all font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.websiteUrl}
              </a>
            </CompanyField>
            <CompanyField label={t.contact.ateco}>{company.atecoCode}</CompanyField>
          </dl>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {t.contact.emailSectionTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.contact.emailSectionHint}
          </p>

          <ul className="mt-5 divide-y divide-zinc-200 dark:divide-zinc-800">
            {companyContactEmails.map(({ id, email }) => {
              const channel = t.contact.emailChannels[id as CompanyContactEmailId];

              return (
                <li key={id} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{channel.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {channel.description}
                  </p>
                  <a
                    className="mt-2 inline-block break-all text-sm font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-50"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
