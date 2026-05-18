import { company } from "@/lib/legal/company";
import { acceptedOfferTheme } from "@/components/offers/acceptedOfferTheme";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType } from "@/types/app";

type RoomDetail = { room: number; room_type?: string; adults: number; children: number; children_ages?: number[] };
type PreferenceFilters = {
  connecting_rooms?: boolean;
  disabled_access?: boolean;
  pool?: boolean;
  spa?: boolean;
  bathtub?: boolean;
  garage?: boolean;
  beach?: boolean;
  pets_allowed?: boolean;
};

export type AcceptedBookingSummaryData = {
  audience: "advertiser" | "hotel";
  requestCode: string;
  offerCode: string;
  cityName: string;
  preferredArea: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  roomsCount: number;
  roomDetails?: RoomDetail[] | null;
  mealPlanRequest?: MealPlan | null;
  mealPlanOffer: MealPlan;
  budgetPerRoom?: number | null;
  totalPrice: number;
  hotelName: string;
  hotelStructureType?: StructureType | null;
  hotelCity?: string | null;
  hotelArea?: string | null;
  hotelCin?: string | null;
  description: string;
  conditions?: string | null;
  notes?: string | null;
  preferenceFilters?: PreferenceFilters | null;
  acceptedAt?: string | null;
};

const filterLabels: Array<{ key: keyof PreferenceFilters; label: string }> = [
  { key: "connecting_rooms", label: "Camere comunicanti" },
  { key: "disabled_access", label: "Accesso disabili" },
  { key: "pool", label: "Piscina" },
  { key: "spa", label: "Spa" },
  { key: "bathtub", label: "Vasca" },
  { key: "garage", label: "Garage" },
  { key: "beach", label: "Vicino alla spiaggia" },
  { key: "pets_allowed", label: "Animali ammessi" },
];

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(value));
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
}

function activeFilters(filters: PreferenceFilters | null | undefined) {
  if (!filters) return [];
  return filterLabels.filter((filter) => Boolean(filters[filter.key])).map((filter) => filter.label);
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-orange-100 py-3 last:border-0 sm:grid-cols-[200px_1fr]">
      <dt className="text-sm font-semibold text-zinc-500">{label}</dt>
      <dd className="text-sm text-zinc-900">{value}</dd>
    </div>
  );
}

export function AcceptedBookingSummary({ data }: { data: AcceptedBookingSummaryData }) {
  const filters = activeFilters(data.preferenceFilters);
  const printedAt = formatDateTime(new Date().toISOString());
  const audienceLabel = data.audience === "advertiser" ? "Inserzionista" : "Struttura ricettiva";

  return (
    <section id="accepted-booking-summary" className={`accepted-booking-summary ${acceptedOfferTheme.summary}`}>
      <header className="border-b border-orange-200 pb-6">
        <p className={acceptedOfferTheme.label}>{company.companyName}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-orange-950">Riepilogo soggiorno confermato</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Documento generato per {audienceLabel} · {printedAt}
          {data.acceptedAt ? ` · Accettazione: ${formatDateTime(data.acceptedAt)}` : ""}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className={acceptedOfferTheme.statusPill}>🤝 Stato: Accettata</span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">Richiesta {data.requestCode}</span>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">Offerta {data.offerCode}</span>
        </div>
      </header>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-orange-950">Richiesta di soggiorno</h3>
          <dl className="mt-3">
            <SummaryRow label="Destinazione" value={data.cityName} />
            <SummaryRow label="Zona preferita" value={data.preferredArea} />
            <SummaryRow label="Check-in" value={formatDate(data.checkIn)} />
            <SummaryRow label="Check-out" value={formatDate(data.checkOut)} />
            <SummaryRow label="Ospiti" value={String(data.guestsCount)} />
            <SummaryRow label="Camere" value={String(data.roomsCount)} />
            {data.mealPlanRequest ? <SummaryRow label="Trattamento richiesto" value={mealPlanLabels[data.mealPlanRequest]} /> : null}
            {data.budgetPerRoom != null ? <SummaryRow label="Budget per camera" value={formatCurrency(Number(data.budgetPerRoom))} /> : null}
          </dl>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-950">Offerta accettata</h3>
          <dl className="mt-3">
            <SummaryRow label="Struttura" value={data.hotelName} />
            {data.hotelStructureType ? <SummaryRow label="Tipologia" value={structureTypeLabels[data.hotelStructureType]} /> : null}
            {data.hotelCity ? <SummaryRow label="Città struttura" value={data.hotelCity} /> : null}
            {data.hotelArea ? <SummaryRow label="Zona struttura" value={data.hotelArea} /> : null}
            {data.hotelCin ? <SummaryRow label="CIN" value={data.hotelCin} /> : null}
            <SummaryRow label="Prezzo totale" value={formatCurrency(Number(data.totalPrice))} />
            <SummaryRow label="Trattamento incluso" value={mealPlanLabels[data.mealPlanOffer]} />
          </dl>
        </div>
      </div>

      {data.roomDetails?.length ? (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-orange-950">Dettaglio camere</h3>
          <div className="mt-3 space-y-2">
            {data.roomDetails.map((room) => (
              <p key={room.room} className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm">
                Camera {room.room}: {room.adults} adulti
                {room.children > 0 ? `, ${room.children} bambini` : ""}
                {room.room_type ? ` · ${room.room_type}` : ""}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {filters.length ? (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-orange-950">Preferenze richiesta</h3>
          <p className="mt-2 text-sm text-zinc-600">{filters.join(" · ")}</p>
        </div>
      ) : null}

      <div className="mt-8 space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-5">
        <div>
          <h3 className="font-semibold text-orange-950">Descrizione offerta</h3>
          <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">{data.description}</p>
        </div>
        {data.conditions ? (
          <div>
            <h3 className="font-semibold text-orange-950">Condizioni</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">{data.conditions}</p>
          </div>
        ) : null}
        {data.notes ? (
          <div>
            <h3 className="font-semibold text-orange-950">Note richiesta</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">{data.notes}</p>
          </div>
        ) : null}
      </div>

      <footer className="mt-8 border-t border-orange-200 pt-4 text-xs text-zinc-500">
        {company.companyName} · {company.supportEmail} · Documento informativo generato dalla piattaforma. I contatti completi restano disponibili nell’area riservata e in chat.
      </footer>
    </section>
  );
}
