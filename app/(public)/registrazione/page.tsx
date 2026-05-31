import type { Metadata } from "next";
import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { getServerTranslations } from "@/lib/i18n/get-translations";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerTranslations();
  return {
    title: t.metadata.registrationTitle,
    description: t.metadata.registrationDescription,
  };
}

export default async function RegistrazionePage() {
  const t = await getServerTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{t.metadata.registrationTitle}</h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">{t.auth.registerPageIntro}</p>
      </header>
      <div className="mt-10">
        <Suspense fallback={<div className="mx-auto max-w-lg rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">…</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
