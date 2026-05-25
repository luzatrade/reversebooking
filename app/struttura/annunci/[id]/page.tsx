import { Suspense } from "react";
import { CreateOfferForm } from "@/components/offers/CreateOfferForm";
import { getServerTranslations } from "@/lib/i18n/get-translations";

async function LoadingFallback() {
  const t = await getServerTranslations();
  return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.common.loading}</div>;
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Suspense fallback={<LoadingFallback />}>
        <CreateOfferForm />
      </Suspense>
    </main>
  );
}
