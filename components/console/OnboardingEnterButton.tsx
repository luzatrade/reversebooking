"use client";

import { ImpersonateButton } from "@/components/console/ImpersonateButton";

type Props = {
  userId?: string | null;
  onboardingId: string;
};

export function OnboardingEnterButton({ userId, onboardingId }: Props) {
  return <ImpersonateButton userId={userId ?? undefined} onboardingId={onboardingId} />;
}
