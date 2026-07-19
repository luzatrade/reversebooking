import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { OnboardingHotelEditor } from "@/components/console/OnboardingHotelEditor";
import { OnboardingPartnerPanel } from "@/components/console/OnboardingPartnerPanel";
import { getOnboardingHotelById, getOnboardingPartnerContext } from "@/lib/admin/data";
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
  const [hotel, partner] = await Promise.all([getOnboardingHotelById(id), getOnboardingPartnerContext(id)]);

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
        description="Modifica catalogo, crea account partner o entra nella dashboard struttura."
      />
      <OnboardingPartnerPanel
        onboardingId={hotel.id}
        hotelName={hotel.nome}
        defaultEmail={hotel.email}
        partnerUserId={partner.enterUserId}
        profileEmail={partner.profileEmail}
        linkedAccount={partner.linkedAccount}
      />
      <OnboardingHotelEditor hotel={hotel} linkedAccount={partner.linkedAccount} />
    </>
  );
}
