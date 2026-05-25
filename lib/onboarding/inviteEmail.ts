/**
 * Step 3 — Invio email di invito all'hotel unclaimed.
 *
 * Usa Resend (già configurato nel progetto) per inviare un'email
 * con il magic link di claim del profilo.
 */

import { sendEmailNotification, escapeHtml } from "@/lib/notifications/email";
import { claimUrl } from "./claimToken";

export type InvitePayload = {
  hotelName: string;
  hotelEmail: string;
  cityName: string;
  claimToken: string;
};

function buildInviteHtml(payload: InvitePayload): string {
  const link = claimUrl(payload.claimToken);
  const name = escapeHtml(payload.hotelName);
  const city = escapeHtml(payload.cityName);

  return `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f8f9fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">
    <div style="background:#0c3d66;padding:32px 24px;text-align:center">
      <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700">HotelsDrop</h1>
      <p style="margin:8px 0 0;color:#93c5fd;font-size:14px">Richieste dirette, zero commissioni</p>
    </div>
    <div style="padding:32px 24px">
      <p style="font-size:16px;color:#1f2937;line-height:1.6">
        Ciao <strong>${name}</strong>,
      </p>
      <p style="font-size:16px;color:#1f2937;line-height:1.6">
        Un utente ha cercato un alloggio a <strong>${city}</strong> su HotelsDrop.com!
      </p>
      <p style="font-size:16px;color:#1f2937;line-height:1.6">
        Abbiamo già preparato il tuo profilo con i dati della tua struttura e la mappa di Google Maps.
        <strong>Rivendica gratis il tuo profilo</strong> e inizia a ricevere richieste dirette dai viaggiatori,
        senza pagare commissioni.
      </p>
      <div style="text-align:center;margin:32px 0">
        <a href="${escapeHtml(link)}"
           style="display:inline-block;background:#0c3d66;color:#fff;padding:16px 40px;
                  border-radius:9999px;text-decoration:none;font-size:16px;font-weight:600">
          Rivendica il tuo profilo
        </a>
      </div>
      <p style="font-size:14px;color:#6b7280;line-height:1.5">
        Il link è valido per 30 giorni. Se non hai richiesto questa email,
        puoi semplicemente ignorarla.
      </p>
    </div>
    <div style="background:#f9fafb;padding:20px 24px;text-align:center;border-top:1px solid #e5e7eb">
      <p style="margin:0;font-size:12px;color:#9ca3af">
        HotelsDrop.com — La piattaforma che ribalta il booking.
        <br>Questa email è stata inviata a ${escapeHtml(payload.hotelEmail)}.
      </p>
    </div>
  </div>
</body>
</html>`.trim();
}

/**
 * Invia l'email di invito a un hotel unclaimed.
 * Ritorna { ok, skipped, reason? }
 */
export async function sendClaimInvite(payload: InvitePayload) {
  const html = buildInviteHtml(payload);

  return sendEmailNotification({
    to: payload.hotelEmail,
    subject: `${payload.hotelName}, un viaggiatore ti cerca a ${payload.cityName}!`,
    html,
  });
}
