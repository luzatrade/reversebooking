import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DeleteButton } from "@/components/console/DeleteButton";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";
import { RequestStatusSelect } from "@/components/console/RequestStatusSelect";
import { StatusBadge } from "@/components/console/StatusBadge";
import { getTravelRequestById } from "@/lib/admin/data";
import { formatDate, formatMoney } from "@/lib/console/format";
import { getServerTranslations } from "@/lib/i18n/get-translations";
import { isServiceRoleConfigured } from "@/lib/utils/env";

export default async function ConsoleAnnuncioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = await getServerTranslations();
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title="Annuncio" description={t.console.noServiceRole} />;
  }

  const { id } = await params;
  const detail = await getTravelRequestById(id);
  if (!detail) notFound();

  const { request, advertiser, offers, targetHotel } = detail;
  const advertiserName = [advertiser?.first_name, advertiser?.last_name].filter(Boolean).join(" ") || "—";

  return (
    <>
      <Link
        href="/console/annunci"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f4c81] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna agli annunci
      </Link>

      <ConsolePageHeader
        title={`${request.request_code ?? "RB------"} · ${request.city_name}`}
        description={`${request.preferred_area} · ${formatDate(request.check_in)} → ${formatDate(request.check_out)}`}
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <StatusBadge value={request.status} />
        <RequestStatusSelect requestId={request.id} current={request.status} />
        <DeleteButton entity="request" id={request.id} />
        {advertiser?.user_id ? (
          <ImpersonateButton userId={advertiser.user_id} label="Entra come inserzionista" />
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Richiesta</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-zinc-500">ID</dt>
              <dd className="font-mono text-xs">{request.id}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Destinazione</dt>
              <dd className="font-medium">
                {request.city_name}, {request.country_name}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Zona / tipo</dt>
              <dd>
                {request.preferred_area} · {request.preferred_structure_type}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Ospiti / camere</dt>
              <dd>
                {request.guests_count} ospiti · {request.rooms_count} camere
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Budget / trattamento</dt>
              <dd>
                {formatMoney(Number(request.budget))} · {request.meal_plan}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Scadenza</dt>
              <dd>{formatDate(request.expires_at)}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Creata</dt>
              <dd>{formatDate(request.created_at)}</dd>
            </div>
            {targetHotel ? (
              <div>
                <dt className="text-zinc-500">Struttura target (diretta)</dt>
                <dd className="font-medium">{targetHotel.property_name} · {targetHotel.city_name}</dd>
              </div>
            ) : null}
            {request.notes ? (
              <div>
                <dt className="text-zinc-500">Note</dt>
                <dd className="whitespace-pre-wrap">{request.notes}</dd>
              </div>
            ) : null}
          </dl>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Inserzionista</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-zinc-500">Nome</dt>
              <dd className="font-medium">{advertiserName}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Email contatto</dt>
              <dd>{advertiser?.contact_email ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Telefono</dt>
              <dd>{advertiser?.contact_phone ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Tipo</dt>
              <dd>{advertiser?.advertiser_type ?? "—"}</dd>
            </div>
          </dl>
          {advertiser?.user_id ? (
            <p className="mt-4">
              <Link
                href={`/inserzionista/annunci/${request.id}`}
                className="text-sm font-semibold text-[#0f4c81] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Apri vista inserzionista ↗
              </Link>
            </p>
          ) : null}
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Offerte ricevute ({offers.length})
        </h2>
        {offers.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-500">Nessuna offerta ancora.</p>
        ) : (
          <ul className="mt-4 divide-y divide-zinc-100">
            {offers.map((offer) => (
              <li key={offer.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                <div>
                  <p className="font-medium">
                    {offer.offer_code ?? offer.id.slice(0, 8)} · {offer.hotel_name ?? "Struttura"}
                  </p>
                  <p className="text-zinc-500">{formatMoney(Number(offer.total_price))} · {formatDate(offer.created_at)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge value={offer.status} />
                  <Link href={`/console/offerte?q=${encodeURIComponent(offer.offer_code ?? offer.id)}`} className="text-xs font-semibold text-[#0f4c81] hover:underline">
                    Console offerte
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
