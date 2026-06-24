import type { Metadata } from "next";
import { PublicOnboardingHotelProfile } from "@/components/hotels/PublicOnboardingHotelProfile";

export const metadata: Metadata = {
  title: "Profilo struttura — HotelsDrop",
  description: "Scheda pubblica di una struttura ricettiva nel catalogo HotelsDrop.",
};

export default function OnboardingHotelProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PublicOnboardingHotelProfile />
    </main>
  );
}
