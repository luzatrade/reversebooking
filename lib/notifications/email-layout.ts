import { company } from "@/lib/legal/company";
import { escapeHtml } from "@/lib/notifications/email";
import { publicSiteOrigin } from "@/lib/seo/site-url";

/**
 * Blocchi grafici condivisi dalle email transazionali.
 *
 * Usare sempre `siteUrl()` per i link: `appUrl()` ripiega su localhost quando
 * la variabile d'ambiente manca, producendo email con link e immagini rotti.
 */
export function siteUrl(): string {
  return publicSiteOrigin();
}

export const COMPANY_EMAIL = company.supportEmail;
export const COMPANY_PHONE = company.phone;

export type RequestSummaryPayload = {
  request_code: string | null;
  city_name: string;
  preferred_area: string | null;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
};

export function requestCodeLabel(value: string | null | undefined) {
  return value || "RB------";
}

export function formatEmailDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

export function requestSummaryHtml(travelRequest: RequestSummaryPayload) {
  const area = travelRequest.preferred_area?.trim();
  const destination = area
    ? `${escapeHtml(travelRequest.city_name)} (${escapeHtml(area)})`
    : escapeHtml(travelRequest.city_name);

  return `<p style="margin-top:18px;padding:16px 18px;background:#f4f4f5;border-radius:12px;font-size:15px;line-height:1.8"><strong>Codice richiesta:</strong> ${escapeHtml(requestCodeLabel(travelRequest.request_code))}<br /><strong>Destinazione:</strong> ${destination}<br /><strong>Date:</strong> ${escapeHtml(formatEmailDate(travelRequest.check_in))} – ${escapeHtml(formatEmailDate(travelRequest.check_out))}<br /><strong>Ospiti:</strong> ${travelRequest.guests_count}<br /><strong>Camere richieste:</strong> ${travelRequest.rooms_count}</p>`;
}

export function highlightHtml(text: string) {
  return `<p style="margin-top:18px;font-size:15px"><strong>${escapeHtml(text)}</strong></p>`;
}

export function buttonHtml(href: string, label: string) {
  return `<p style="margin-top:22px"><a href="${href}" style="display:inline-block;background:#0f4c81;color:#fff;text-decoration:none;font-weight:700;padding:14px 24px;border-radius:9999px">${escapeHtml(label)}</a></p>`;
}

export function noteHtml(html: string) {
  return `<p style="margin-top:10px;font-size:13px;color:#52525b">${html}</p>`;
}

export function signatureHtml() {
  return `<p style="margin-top:24px;font-size:14px;line-height:1.6;color:#3f3f46">Aiutaci a lanciare questa startup e facci sapere cosa ne pensi: il tuo feedback è fondamentale per noi. Per qualsiasi informazione o assistenza, il nostro team è a tua completa disposizione.</p><p style="margin-top:16px;font-size:14px;line-height:1.6;color:#18181b">Cordiali saluti,<br /><strong>Il team di HotelsDrop</strong><br /><a href="mailto:${COMPANY_EMAIL}" style="color:#0f4c81">${COMPANY_EMAIL}</a> · ${COMPANY_PHONE} · <a href="${siteUrl()}" style="color:#0f4c81">hotelsdrop.com</a></p>`;
}

export function footerImageHtml() {
  return `<p style="margin-top:28px"><a href="${siteUrl()}"><img src="${siteUrl()}/email/hotelsdrop-footer.jpg" alt="HotelsDrop.com — prenotazione diretta senza commissioni" width="600" style="width:100%;max-width:600px;height:auto;border-radius:12px;display:block" /></a></p>`;
}

export function fineprintHtml(html: string) {
  return `<p style="margin-top:16px;font-size:12px;line-height:1.5;color:#a1a1aa">${html}</p>`;
}
