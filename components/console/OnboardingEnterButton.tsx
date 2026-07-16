"use client";

import Link from "next/link";
import { ImpersonateButton } from "@/components/console/ImpersonateButton";

type Props = {
  userId: string | null | undefined;
  onboardingId: string;
};

export function OnboardingEnterButton({ userId, onboardingId }: Props) {
  if (userId) {
    return <ImpersonateButton userId={userId} />;
  }

  return (
    <Link
      href={`/console/onboarding/${onboardingId}`}
      className="inline-flex rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
      title="Modifica catalogo: foto, telefono, indirizzo"
    >
      Entra come
    </Link>
  );
}
