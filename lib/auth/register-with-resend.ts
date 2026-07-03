import type { User } from "@supabase/supabase-js";
import { sendSignupConfirmationEmail } from "@/lib/auth/signup-confirmation-email";
import { getAppUrl } from "@/lib/legal/company";
import { createServiceRoleClient } from "@/lib/supabase/admin";

type RegisterWithResendInput = {
  email: string;
  password: string;
  userMetadata: Record<string, unknown>;
};

type RegisterWithResendResult =
  | { ok: true; user: User; session: null; emailConfirmationRequired: true }
  | { ok: false; error: string; status?: number };

function canSendSignupViaResend(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim() && createServiceRoleClient());
}

export function shouldRegisterWithResend(): boolean {
  return canSendSignupViaResend();
}

export async function registerWithResend(input: RegisterWithResendInput): Promise<RegisterWithResendResult> {
  const admin = createServiceRoleClient();
  if (!admin || !process.env.RESEND_API_KEY?.trim()) {
    return { ok: false, error: "Registrazione email non configurata.", status: 503 };
  }

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email: input.email,
    password: input.password,
    email_confirm: false,
    user_metadata: input.userMetadata,
  });

  if (createError) {
    return { ok: false, error: createError.message, status: 400 };
  }

  const user = created.user;
  if (!user) {
    return { ok: false, error: "Registrazione fallita.", status: 500 };
  }

  const redirectTo = `${getAppUrl()}/auth/callback`;
  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({
    type: "signup",
    email: input.email,
    password: input.password,
    options: { redirectTo },
  });

  const confirmationUrl = linkData?.properties?.action_link;
  if (linkError || !confirmationUrl) {
    return {
      ok: false,
      error: linkError?.message ?? "Impossibile generare il link di conferma.",
      status: 500,
    };
  }

  const emailResult = await sendSignupConfirmationEmail({
    to: input.email,
    confirmationUrl,
  });

  if (!emailResult.ok) {
    return {
      ok: false,
      error: "Account creato ma email di conferma non inviata. Contatta assistenza.",
      status: 503,
    };
  }

  return {
    ok: true,
    user,
    session: null,
    emailConfirmationRequired: true,
  };
}
