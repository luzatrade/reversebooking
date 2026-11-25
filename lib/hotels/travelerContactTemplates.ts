import { getAppUrl } from "@/lib/legal/company";
import type { Locale } from "@/lib/i18n/translations";

const PLACEHOLDER = {
  checkIn: "___",
  checkOut: "___",
  guests: "___",
  guestName: "___",
} as const;

export type TravelerContactTemplates = {
  emailSubject: string;
  emailBody: string;
  whatsAppMessage: string;
};

export function getTravelerContactTemplates(locale: Locale): TravelerContactTemplates {
  const siteUrl = getAppUrl();

  if (locale === "en") {
    return {
      emailSubject: `Direct stay availability request via hotelsdrop.com – ${PLACEHOLDER.checkIn} / ${PLACEHOLDER.checkOut}`,
      emailBody: [
        "Hello 😊,",
        "",
        `I discovered your beautiful property on ${siteUrl} and would like to request availability and your best direct-stay rate:`,
        "",
        `* Check-in: ${PLACEHOLDER.checkIn}`,
        `* Check-out: ${PLACEHOLDER.checkOut}`,
        `* Guests: ${PLACEHOLDER.guests}`,
        "",
        `I chose ${siteUrl} because I prefer direct contact with the property, avoiding intermediary commissions and supporting your work.`,
        "",
        "I look forward to your reply with your best offer for these dates.",
        "",
        "Kind regards,",
        "",
        PLACEHOLDER.guestName,
      ].join("\n"),
      whatsAppMessage: [
        `Hello 😊, I discovered your beautiful property on ${siteUrl} and would like to ask about availability and your best direct-stay rate:`,
        "",
        `*Check-in:* ${PLACEHOLDER.checkIn}`,
        `*Check-out:* ${PLACEHOLDER.checkOut}`,
        `*Guests:* ${PLACEHOLDER.guests}`,
        "",
        `I chose ${siteUrl} for direct contact with no commissions! I look forward to your reply. Thank you!`,
        "",
        PLACEHOLDER.guestName,
      ].join("\n"),
    };
  }

  return {
    emailSubject: `Richiesta disponibilità soggiorno diretto via hotelsdrop.com – ${PLACEHOLDER.checkIn} / ${PLACEHOLDER.checkOut}`,
    emailBody: [
      "Ciao 😊,",
      "",
      `ho scoperto la vostra bellissima struttura su ${siteUrl} e desidero richiedere la disponibilità e la vostra migliore tariffa per un soggiorno diretto:`,
      "",
      `* Check-in: ${PLACEHOLDER.checkIn}`,
      `* Check-out: ${PLACEHOLDER.checkOut}`,
      `* Ospiti: ${PLACEHOLDER.guests}`,
      "",
      `Ho scelto di utilizzare ${siteUrl} perché preferisco un contatto diretto con la struttura, azzerando le commissioni d'intermediazione e valorizzando il vostro lavoro.`,
      "",
      "Resto in attesa di un vostro gentile riscontro con la vostra migliore proposta per queste date.",
      "",
      "Cordiali saluti,",
      "",
      PLACEHOLDER.guestName,
    ].join("\n"),
    whatsAppMessage: [
      `Ciao 😊, ho scoperto la vostra bellissima struttura su ${siteUrl} e vorrei chiedere disponibilità e la vostra migliore tariffa per un soggiorno diretto:`,
      "",
      `*Check-in:* ${PLACEHOLDER.checkIn}`,
      `*Check-out:* ${PLACEHOLDER.checkOut}`,
      `*Ospiti:* ${PLACEHOLDER.guests}`,
      "",
      `Ho scelto ${siteUrl} per un contatto diretto e senza commissioni! Resto in attesa di un vostro riscontro. Grazie!`,
      "",
      PLACEHOLDER.guestName,
    ].join("\n"),
  };
}
