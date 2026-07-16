"use client";

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
    <a
      href={`/hotel/onboarding/${onboardingId}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
    >
      Entra come
    </a>
  );
}
