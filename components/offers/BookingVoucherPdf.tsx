import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";
import type { MealPlan, StructureType } from "@/types/app";
import type { Locale } from "@/lib/i18n/translations";

const mealPlanLabelsByLocale: Record<Locale, Record<MealPlan, string>> = {
  it: {
    room_only: "Solo pernottamento",
    breakfast: "Colazione",
    half_board: "Mezza pensione",
    full_board: "Pensione completa",
    all_inclusive: "All inclusive",
  },
  en: {
    room_only: "Room only",
    breakfast: "Breakfast",
    half_board: "Half board",
    full_board: "Full board",
    all_inclusive: "All inclusive",
  },
};

const structureTypeLabelsByLocale: Record<Locale, Record<StructureType, string>> = {
  it: { hotel: "Hotel", bed_and_breakfast: "B&B", apartment: "Appartamento" },
  en: { hotel: "Hotel", bed_and_breakfast: "B&B", apartment: "Apartment" },
};

const copy: Record<Locale, Record<string, string>> = {
  it: {
    brand: "HotelsDrop",
    voucher: "Riepilogo prenotazione",
    accepted: "Offerta accettata",
    destination: "Destinazione",
    dates: "Date soggiorno",
    guestsRooms: "Ospiti / camere",
    guests: "ospiti",
    rooms: "camere",
    amount: "Importo offerta",
    mealRequest: "Trattamento richiesto",
    mealOffer: "Trattamento offerta",
    structure: "Struttura",
    proposal: "Dettagli proposta",
    conditions: "Condizioni",
    acceptedOn: "Accettato il",
    disclaimer:
      "Il soggiorno si intende direttamente con la struttura. HotelsDrop non è intermediario di pagamento.",
  },
  en: {
    brand: "HotelsDrop",
    voucher: "Booking summary",
    accepted: "Offer accepted",
    destination: "Destination",
    dates: "Stay dates",
    guestsRooms: "Guests / rooms",
    guests: "guests",
    rooms: "rooms",
    amount: "Offer amount",
    mealRequest: "Requested board",
    mealOffer: "Offered board",
    structure: "Property",
    proposal: "Proposal details",
    conditions: "Conditions",
    acceptedOn: "Accepted on",
    disclaimer:
      "The stay is arranged directly with the property. HotelsDrop is not a payment intermediary.",
  },
};

function fmtDate(value: string, locale: Locale) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function fmtCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11, color: "#27272a", fontFamily: "Helvetica" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "#059669",
    paddingBottom: 12,
    marginBottom: 18,
  },
  brand: { fontSize: 18, fontFamily: "Helvetica-Bold" },
  brandDrop: { color: "#f97316" },
  badge: {
    backgroundColor: "#ecfdf5",
    color: "#047857",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
  },
  codes: { fontSize: 10, color: "#059669", fontFamily: "Helvetica-Bold", marginBottom: 4 },
  hotelName: { fontSize: 20, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  hotelMeta: { fontSize: 10, color: "#71717a", marginBottom: 18 },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  cell: { width: "50%", marginBottom: 14, paddingRight: 12 },
  label: { fontSize: 9, color: "#71717a", marginBottom: 3, textTransform: "uppercase" },
  value: { fontSize: 12, fontFamily: "Helvetica-Bold" },
  section: { marginTop: 8, paddingTop: 12, borderTopWidth: 1, borderTopColor: "#e4e4e7" },
  sectionTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 4 },
  body: { fontSize: 10, color: "#3f3f46", lineHeight: 1.5 },
  footer: { marginTop: 24, fontSize: 8, color: "#a1a1aa", lineHeight: 1.5 },
});

export function BookingVoucherPdf({
  data,
  locale,
}: {
  data: AcceptedBookingSummaryData;
  locale: Locale;
}) {
  const c = copy[locale];
  const structure = data.hotelStructureType
    ? structureTypeLabelsByLocale[locale][data.hotelStructureType]
    : c.structure;

  return (
    <Document
      title={`${c.voucher} ${data.requestCode}`}
      author="HotelsDrop"
      subject={c.voucher}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>{c.brand}</Text>
          <Text style={styles.badge}>{c.accepted.toUpperCase()}</Text>
        </View>

        <Text style={styles.codes}>
          {c.voucher} · {data.requestCode} / {data.offerCode}
        </Text>
        <Text style={styles.hotelName}>{data.hotelName}</Text>
        <Text style={styles.hotelMeta}>
          {structure} · {data.hotelCity ?? ""}
          {data.hotelArea ? ` · ${data.hotelArea}` : ""}
        </Text>

        <View style={styles.grid}>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.destination}</Text>
            <Text style={styles.value}>
              {data.cityName} — {data.preferredArea}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.dates}</Text>
            <Text style={styles.value}>
              {fmtDate(data.checkIn, locale)} → {fmtDate(data.checkOut, locale)}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.guestsRooms}</Text>
            <Text style={styles.value}>
              {data.guestsCount} {c.guests} · {data.roomsCount} {c.rooms}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.amount}</Text>
            <Text style={styles.value}>{fmtCurrency(data.totalPrice, locale)}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.mealRequest}</Text>
            <Text style={styles.value}>{mealPlanLabelsByLocale[locale][data.mealPlanRequest]}</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>{c.mealOffer}</Text>
            <Text style={styles.value}>{mealPlanLabelsByLocale[locale][data.mealPlanOffer]}</Text>
          </View>
        </View>

        {data.description ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{c.proposal}</Text>
            <Text style={styles.body}>{data.description}</Text>
          </View>
        ) : null}

        {data.conditions ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{c.conditions}</Text>
            <Text style={styles.body}>{data.conditions}</Text>
          </View>
        ) : null}

        <Text style={styles.footer}>
          {c.acceptedOn} {fmtDate(data.acceptedAt, locale)}. {c.disclaimer}
        </Text>
      </Page>
    </Document>
  );
}
