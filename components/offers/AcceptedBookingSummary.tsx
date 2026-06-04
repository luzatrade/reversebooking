import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType } from "@/types/app";

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
  roomDetails: unknown;
  mealPlanRequest: MealPlan;
  mealPlanOffer: MealPlan;
  budgetPerRoom: number;
  totalPrice: number;
  hotelName: string;
  hotelStructureType: StructureType | null;
  hotelCity: string | null;
  hotelArea: string | null;
  hotelCin: string | null;
  description: string;
  conditions: string | null;
  notes: string | null;
  preferenceFilters: unknown;
  acceptedAt: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
}

export function AcceptedBookingSummary({ data }: { data: AcceptedBookingSummaryData }) {
  return (
    <article
      id="accepted-booking-summary"
      className="rounded-3xl border border-emerald-200 bg-white p-6 text-zinc-900 shadow-sm dark:border-emerald-900/50 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
        Riepilogo accettazione · {data.requestCode} / {data.offerCode}
      </p>
      <h2 className="mt-2 text-2xl font-semibold">{data.hotelName}</h2>
      <p className="mt-1 text-sm text-zinc-500">
        {data.hotelStructureType ? structureTypeLabels[data.hotelStructureType] : "Struttura"} · {data.hotelCity}
        {data.hotelArea ? ` · ${data.hotelArea}` : ""}
      </p>
      <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-zinc-500">Destinazione</dt>
          <dd className="font-medium">
            {data.cityName} — {data.preferredArea}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Date</dt>
          <dd className="font-medium">
            {formatDate(data.checkIn)} → {formatDate(data.checkOut)}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Ospiti / camere</dt>
          <dd className="font-medium">
            {data.guestsCount} ospiti · {data.roomsCount} camere
          </dd>
        </div>
        <div>
          <dt className="text-zinc-500">Importo offerta</dt>
          <dd className="font-medium">{formatCurrency(data.totalPrice)}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Trattamento richiesto</dt>
          <dd className="font-medium">{mealPlanLabels[data.mealPlanRequest]}</dd>
        </div>
        <div>
          <dt className="text-zinc-500">Trattamento offerta</dt>
          <dd className="font-medium">{mealPlanLabels[data.mealPlanOffer]}</dd>
        </div>
      </dl>
      {data.description ? <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{data.description}</p> : null}
      {data.conditions ? (
        <p className="mt-2 text-sm text-zinc-500">
          <strong>Condizioni:</strong> {data.conditions}
        </p>
      ) : null}
      <p className="mt-6 text-xs text-zinc-500">
        Accettato il {formatDate(data.acceptedAt)}. Il soggiorno si intende direttamente con la struttura; HotelsDrop non
        è intermediario di pagamento.
      </p>
    </article>
  );
}
