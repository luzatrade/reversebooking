import type { Metadata } from "next";
import { HotelDirectoryClient } from "@/components/directory/HotelDirectoryClient";

export const metadata: Metadata = {
  title: "Directory Strutture — HotelsDrop.com",
  description:
    "Esplora oltre 900 hotel, B&B e strutture ricettive in tutta Italia. Contattali direttamente, senza commissioni.",
};

export default function DirectoryPage() {
  return <HotelDirectoryClient />;
}
