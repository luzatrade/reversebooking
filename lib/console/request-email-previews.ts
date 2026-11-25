import {
  buildCityRequestHtml,
  buildDirectRequestHtml,
} from "@/lib/notifications/dispatch-new-request";
import {
  buildOnboardingCityRequestHtml,
  buildOnboardingDirectRequestHtml,
  type TravelRequestNotifyPayload,
} from "@/lib/notifications/onboarding-new-request";
import { resolveNotificationEmailFrom } from "@/lib/email/from";

export type RequestEmailPreviewVariant = {
  id: string;
  label: string;
  audience: string;
  subject: string;
  bodyHtml: string;
  documentHtml: string;
};

export const SAMPLE_REQUEST_EMAIL: TravelRequestNotifyPayload = {
  id: "00000000-0000-0000-0000-000000000000",
  request_code: "RBNT87WX",
  city_id: "3164527",
  city_name: "Verona",
  country_code: "IT",
  preferred_area: "Centro storico",
  check_in: "2026-09-12",
  check_out: "2026-09-15",
  guests_count: 4,
  rooms_count: 2,
};

const SAMPLE_HOTEL = "Hotel Aurora";
const SAMPLE_ONBOARDING_ID = "11111111-2222-3333-4444-555555555555";

function buildPreview(
  base: Omit<RequestEmailPreviewVariant, "documentHtml">,
): RequestEmailPreviewVariant {
  return {
    ...base,
    documentHtml: wrapRequestEmailPreviewDocument(base),
  };
}

export function getRequestEmailPreviews(): RequestEmailPreviewVariant[] {
  const sample = SAMPLE_REQUEST_EMAIL;
  return [
    buildPreview({
      id: "partner-citta",
      label: "Partner · città",
      audience: "Struttura partner (abbonata) — richiesta nella sua città",
      subject: `Nuova richiesta soggiorno ${sample.request_code} — ${sample.city_name}`,
      bodyHtml: buildCityRequestHtml(sample),
    }),
    buildPreview({
      id: "partner-diretta",
      label: "Partner · diretta",
      audience: "Struttura partner (abbonata) — richiesta diretta a lei",
      subject: `Richiesta diretta ${sample.request_code} — ${sample.city_name}`,
      bodyHtml: buildDirectRequestHtml(sample, SAMPLE_HOTEL),
    }),
    buildPreview({
      id: "catalogo-citta",
      label: "Catalogo · città",
      audience: "Struttura del catalogo (non abbonata) — richiesta nella sua città",
      subject: `Nuova richiesta soggiorno ${sample.request_code} — ${sample.city_name}`,
      bodyHtml: buildOnboardingCityRequestHtml(sample, SAMPLE_ONBOARDING_ID, SAMPLE_HOTEL),
    }),
    buildPreview({
      id: "catalogo-diretta",
      label: "Catalogo · diretta",
      audience: "Struttura del catalogo (non abbonata) — richiesta diretta a lei",
      subject: `Richiesta diretta ${sample.request_code} — ${sample.city_name}`,
      bodyHtml: buildOnboardingDirectRequestHtml(sample, SAMPLE_ONBOARDING_ID, SAMPLE_HOTEL),
    }),
  ];
}

export function wrapRequestEmailPreviewDocument(preview: Pick<RequestEmailPreviewVariant, "subject" | "audience" | "bodyHtml">) {
  const from = resolveNotificationEmailFrom();
  const subject = preview.subject.replace(/"/g, "&quot;");
  const audience = preview.audience.replace(/"/g, "&quot;");
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${subject}</title></head><body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:620px;margin:16px auto;padding:0 12px 24px;color:#18181b;background:#fff"><div style="border:1px solid #e4e4e7;border-radius:12px;padding:14px;margin-bottom:16px;background:#fafafa;font-size:12px;line-height:1.5;color:#52525b"><div><strong>Da:</strong> ${from}</div><div><strong>Oggetto:</strong> ${subject}</div><div><strong>Destinatario:</strong> ${audience}</div></div>${preview.bodyHtml}</body></html>`;
}
