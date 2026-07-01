import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { OnboardingHotelEditor } from "@/components/console/OnboardingHotelEditor";
import { getLinkedHotelAccountForOnboarding, getOnboardingHotelById } from "@/lib/admin/data";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleOnboardingEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title="Modifica onboarding" description="Service role non configurato." />;
  }

  const { id } = await params;
  const [hotel, linkedAccount] = await Promise.all([
    getOnboardingHotelById(id),
    getLinkedHotelAccountForOnboarding(id),
  ]);

  if (!hotel) notFound();

  return (
    <>
      <Link
        href={`/console/onboarding?q=${encodeURIComponent(hotel.nome)}`}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f4c81] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna a Onboarding
      </Link>
      <ConsolePageHeader
        title={hotel.nome}
        description="Modifica dati catalogo, correggi telefono/email e gestisci lo stato di rivendica."
      />
      <OnboardingHotelEditor hotel={hotel} linkedAccount={linkedAccount} />
    </>
  );
}
