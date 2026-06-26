import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchBanner } from "@/components/console/ConsoleSearchBanner";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listOnboardingHotels } from "@/lib/admin/data";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleOnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title="Strutture Onboarding" description="Service role non configurato." />;
  }

  const { q } = await searchParams;
  const hotels = await listOnboardingHotels(q);
  const withEmail = hotels.filter((h) => h.email).length;
  const withPhone = hotels.filter((h) => h.phone).length;
  const claimed = hotels.filter((h) => h.status === "claimed").length;

  return (
    <>
      <ConsolePageHeader
        title="Strutture Onboarding"
        description={`${hotels.length} strutture reali raccolte · ${withEmail} con email · ${withPhone} con telefono · ${claimed} rivendicate`}
      />
      <ConsoleSearchBanner query={q} clearHref="/console/onboarding" />
      <DataTable
        columns={[
          { key: "photo", label: "" },
          { key: "name", label: "Struttura" },
          { key: "city", label: "Città" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Telefono" },
          { key: "status", label: "Stato" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={hotels.map((h) => ({
          id: h.id,
          cells: {
            photo: h.main_photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={h.main_photo_url} alt={h.nome} className="h-10 w-14 rounded-lg object-cover" />
            ) : (
              <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-zinc-100 text-xs text-zinc-400">—</div>
            ),
            name: <span className="font-medium">{h.nome}</span>,
            city: h.city_name,
            email: h.email ?? "—",
            phone: h.phone ?? "—",
            status: <StatusBadge value={h.status ?? "pending"} />,
            actions: <DeleteButton entity="onboarding" id={h.id} />,
          },
        }))}
      />
    </>
  );
}
