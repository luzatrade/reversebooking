import { BRAND_DISPLAY, company, getAppUrl } from "@/lib/legal/company";
import { escapeHtml, sendEmailNotification } from "@/lib/notifications/email";

type SendSignupConfirmationEmailInput = {
  to: string;
  confirmationUrl: string;
};

export function buildSignupConfirmationEmailHtml(confirmationUrl: string): string {
  const safeUrl = escapeHtml(confirmationUrl);
  const appUrl = escapeHtml(getAppUrl());
  const brand = escapeHtml(BRAND_DISPLAY);
  const supportEmail = escapeHtml(company.supportEmail);

  return `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #18181b; line-height: 1.6;">
      <p style="margin: 0 0 16px;">Ciao,</p>
      <p style="margin: 0 0 16px;">
        grazie per esserti registrato su <strong>${brand}</strong>.
        Per attivare il tuo account, conferma il tuo indirizzo email cliccando il pulsante qui sotto.
      </p>
      <p style="margin: 0 0 24px;">
        <a href="${safeUrl}" style="display: inline-block; border-radius: 9999px; background: #09090b; color: #ffffff; padding: 12px 20px; text-decoration: none; font-weight: 600;">
          Conferma il tuo account
        </a>
      </p>
      <p style="margin: 0 0 16px; font-size: 14px; color: #52525b;">
        Se il pulsante non funziona, copia e incolla questo link nel browser:<br />
        <a href="${safeUrl}" style="color: #047857; word-break: break-all;">${safeUrl}</a>
      </p>
      <p style="margin: 0 0 16px; font-size: 14px; color: #52525b;">
        Se non hai creato un account su ${brand}, puoi ignorare questa email.
      </p>
      <p style="margin: 24px 0 0; font-size: 13px; color: #71717a;">
        ${brand} · <a href="${appUrl}" style="color: #047857;">${appUrl.replace(/^https:\/\//, "")}</a><br />
        Assistenza: <a href="mailto:${supportEmail}" style="color: #047857;">${supportEmail}</a>
      </p>
    </div>
  `.trim();
}

export async function sendSignupConfirmationEmail(input: SendSignupConfirmationEmailInput) {
  return sendEmailNotification({
    to: input.to,
    subject: `Conferma il tuo account ${BRAND_DISPLAY}`,
    html: buildSignupConfirmationEmailHtml(input.confirmationUrl),
  });
}
