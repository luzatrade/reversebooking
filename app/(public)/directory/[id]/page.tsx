import type { Metadata } from "next";
import { OnboardingHotelProfile } from "@/components/directory/OnboardingHotelProfile";

export const metadata: Metadata = {
  title: "Profilo Struttura — HotelsDrop.com",
  description: "Scopri questa struttura ricettiva su HotelsDrop.com. Contattala direttamente, senza commissioni.",
};

export default function HotelProfilePage() {
  return <OnboardingHotelProfile />;
}
