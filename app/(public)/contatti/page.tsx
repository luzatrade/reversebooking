import type { Metadata } from "next";
import { company } from "@/lib/legal/company";
import { getServerTranslations } from "@/lib/i18n/get-translations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return {
    title: t.metadata.contactsTitle,
    description: t.metadata.contactsDescription,
  };
}

export default async function ContattiPage() {
  const t = await getServerTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{t.contact.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{t.contact.intro}</p>
      </header>

      <dl className="mt-10 space-y-6 text-base text-zinc-700 dark:text-zinc-300">
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.contact.support}</dt>
          <dd className="mt-1">
            <a className="font-medium text-zinc-900 underline dark:text-zinc-50" href={`mailto:${company.supportEmail}`}>
              {company.supportEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.contact.pec}</dt>
          <dd className="mt-1">
            <a className="font-medium text-zinc-900 underline dark:text-zinc-50" href={`mailto:${company.pecEmail}`}>
              {company.pecEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.contact.phone}</dt>
          <dd className="mt-1">{company.phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.site.headquarters}</dt>
          <dd className="mt-1">
            {company.legalAddress}, {company.postalCode} {company.city} — {company.country}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.contact.website}</dt>
          <dd className="mt-1">
            <a
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.websiteUrl}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
