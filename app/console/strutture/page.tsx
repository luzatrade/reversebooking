import Link from "next/link";
import { AccountStatusSelect } from "@/components/console/AccountStatusSelect";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { ConsoleSearchForm } from "@/components/console/ConsoleSearchForm";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { listHotels, listOnboardingHotels } from "@/lib/admin/data";
import { formatDate } from "@/lib/console/format";
import { structureTypeLabels } from "@/types/app";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleStrutturePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title={t.console.pages.structures.title} description={t.console.noServiceRole} />;
  }

  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const [hotels, onboardingHotels] = await Promise.all([
    listHotels(q),
    query ? listOnboardingHotels(q) : Promise.resolve([]),
  ]);

  return (
    <>
      <ConsolePageHeader
        title={t.console.pages.structures.title}
        description={
          query
            ? `${t.console.pages.structures.description} Cerca anche nel catalogo onboarding (strutture in vetrina non ancora registrate).`
            : `${t.console.pages.structures.description} Per strutture visibili in mappa ma non registrate, usa la ricerca (es. nome o indirizzo) o apri Onboarding.`
        }
      />
      <ConsoleSearchForm
        action="/console/strutture"
        query={q}
        clearHref="/console/strutture"
        placeholder="Es. de lux stazione, Carriera Grande, Napoli..."
        hint="Mostra strutture registrate e, con ricerca attiva, anche quelle del catalogo onboarding (vetrina/mappa)."
      />

      {query && hotels.length === 0 && onboardingHotels.length > 0 ? (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Nessuna struttura registrata per &quot;{query}&quot;. Trovate {onboardingHotels.length} nel{" "}
          <strong>catalogo onboarding</strong> (profilo pubblico in vetrina, non account partner).
        </div>
      ) : null}

      <DataTable
        columns={[
          { key: "name", label: "Struttura" },
          { key: "city", label: "Città" },
          { key: "type", label: "Tipo" },
          { key: "cin", label: "CIN" },
          { key: "sub", label: "Abbonamento" },
          { key: "status", label: "Stato" },
          { key: "created", label: "Registrata" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={hotels.map((h) => ({
          id: h.id,
          cells: {
            name: <span className="font-medium">{h.property_name}</span>,
            city: `${h.city_name}, ${h.country_name}`,
            type: structureTypeLabels[h.structure_type as keyof typeof structureTypeLabels] ?? h.structure_type,
            cin: <span className="font-mono text-xs">{h.cin_code}</span>,
            sub: (
              <div className="flex flex-col gap-1">
                <StatusBadge value={h.subscription_active ? "active" : "inactive"} />
                <span className="text-xs text-zinc-500">{h.subscription_status}</span>
              </div>
            ),
            status: <StatusBadge value={h.account_status} />,
            created: formatDate(h.created_at),
            actions: (
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                <AccountStatusSelect profileId={h.id} current={h.account_status} kind="hotel" />
                <ImpersonateButton userId={h.user_id} />
                <DeleteButton entity="hotel" id={h.id} />
              </div>
            ),
          },
        }))}
      />

      {query && onboardingHotels.length > 0 ? (
        <section className="mt-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Catalogo onboarding</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Strutture raccolte per la vetrina/mappa. Non sono account registrati finché non rivendicano il profilo.
              </p>
            </div>
            <Link href={`/console/onboarding?q=${encodeURIComponent(query)}`} className="text-sm font-semibold text-[#0f4c81] hover:underline">
              Apri sezione Onboarding
            </Link>
          </div>
          <DataTable
            columns={[
              { key: "name", label: "Struttura" },
              { key: "city", label: "Città" },
              { key: "address", label: "Indirizzo" },
              { key: "status", label: "Stato" },
              { key: "id", label: "ID" },
              { key: "actions", label: "Azioni" },
            ]}
            rows={onboardingHotels.map((h) => ({
              id: h.id,
              cells: {
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
                status: <StatusBadge value={h.status ?? "pending"} />,
                id: <span className="font-mono text-xs text-zinc-500">{h.id}</span>,
                actions: (
                  <div className="flex flex-col gap-1.5">
                    <Link href={`/console/onboarding/${h.id}`} className="text-xs font-semibold text-[#0f4c81] hover:underline">
                      Modifica
                    </Link>
                    <DeleteButton entity="onboarding" id={h.id} />
                  </div>
                ),
              },
            }))}
          />
        </section>
      ) : null}
    </>
  );
}
