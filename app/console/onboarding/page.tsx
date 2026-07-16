import Link from "next/link";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchForm } from "@/components/console/ConsoleSearchForm";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { OnboardingEnterButton } from "@/components/console/OnboardingEnterButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import {
  countOnboardingHotels,
  listOnboardingHotels,
  mapLinkedHotelUsersForOnboarding,
  resolveOnboardingEnterUserId,
} from "@/lib/admin/data";
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
  const query = q?.trim() ?? "";
  const [hotels, totalCount] = await Promise.all([
    listOnboardingHotels(q),
    query ? Promise.resolve(0) : countOnboardingHotels(),
  ]);
  const withEmail = hotels.filter((h) => h.email).length;
  const withPhone = hotels.filter((h) => h.phone).length;
  const claimed = hotels.filter((h) => h.status === "claimed").length;
  const linkedUsers = await mapLinkedHotelUsersForOnboarding(hotels.map((h) => h.id));

  return (
    <>
      <ConsolePageHeader
        title="Strutture Onboarding"
        description={
          query
            ? `${hotels.length} risultat${hotels.length === 1 ? "o" : "i"} · ${withEmail} con email · ${withPhone} con telefono · ${claimed} rivendicate`
            : `Catalogo vetrina con oltre ${totalCount.toLocaleString("it-IT")} strutture. Usa la ricerca: senza filtro non mostriamo l'elenco completo.`
        }
      />
      <ConsoleSearchForm
        action="/console/onboarding"
        query={q}
        clearHref="/console/onboarding"
        placeholder="Es. de lux stazione, Carriera Grande, Napoli..."
        hint='Per «B&b de lux stazione» prova «de lux stazione» o «Carriera Grande».'
      />

      {!query ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white px-5 py-8 text-sm text-zinc-600">
          <p className="font-medium text-zinc-900">Cerca una struttura del catalogo onboarding</p>
          <p className="mt-2 leading-relaxed">
            Le strutture visibili in mappa/vetrina ma non ancora registrate sono qui. Nel database ce ne sono{" "}
            <strong>{totalCount.toLocaleString("it-IT")}</strong>: scorrerle tutte non è pratico, quindi serve un
            termine di ricerca.
          </p>
        </div>
      ) : null}

      {query && hotels.length === 0 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6 text-sm text-amber-950">
          Nessun risultato per &quot;{query}&quot;. Prova con parte del nome (<strong>de lux stazione</strong>) o
          dell&apos;indirizzo (<strong>Carriera Grande</strong>).
        </div>
      ) : null}

      {hotels.length > 0 ? (
        <DataTable
          columns={[
            { key: "photo", label: "" },
            { key: "name", label: "Struttura" },
            { key: "city", label: "Città" },
            { key: "address", label: "Indirizzo" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Telefono" },
            { key: "status", label: "Stato" },
            { key: "id", label: "ID" },
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
              name: (
                <div className="space-y-1">
                  <span className="font-medium">{h.nome}</span>
                  <Link href={`/hotel/onboarding/${h.id}`} className="block text-xs font-semibold text-[#0f4c81] hover:underline">
                    Vedi profilo pubblico
                  </Link>
                </div>
              ),
              city: h.city_name,
              address: <span className="text-xs text-zinc-600">{h.indirizzo ?? "—"}</span>,
              email: h.email ?? "—",
              phone: h.phone ?? "—",
              status: <StatusBadge value={h.status ?? "pending"} />,
              id: <span className="font-mono text-xs text-zinc-500">{h.id}</span>,
              actions: (
                <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                  <OnboardingEnterButton
                    userId={resolveOnboardingEnterUserId(h, linkedUsers)}
                    onboardingId={h.id}
                  />
                  <Link href={`/console/onboarding/${h.id}`} className="text-xs font-semibold text-[#0f4c81] hover:underline">
                    Modifica
                  </Link>
                  <DeleteButton entity="onboarding" id={h.id} />
                </div>
              ),
            },
          }))}
        />
      ) : null}
    </>
  );
}
