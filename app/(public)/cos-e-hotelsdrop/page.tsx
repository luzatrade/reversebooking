import type { Metadata } from "next";
import { HotelsDropAboutMarkup } from "@/components/legal/HotelsDropAboutMarkup";
import { getServerTranslations } from "@/lib/i18n/get-translations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return {
    title: t.metadata.aboutPageTitle,
    description: t.metadata.aboutPageDescription,
  };
}

export default async function CosEHotelsDropPage() {
  const t = await getServerTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {t.showcase.dropYourRequestModal.title}
        </h1>
      </header>

      <HotelsDropAboutMarkup
        className="mt-6 sm:mt-8"
        content={t.showcase.dropYourRequestModal}
        showActions
      />
    </div>
  );
}
