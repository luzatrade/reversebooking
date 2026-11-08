import type { Metadata } from "next";
import { generateHotelRouteMetadata } from "@/lib/seo/hotel-route-metadata";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { id } = await params;
  return generateHotelRouteMetadata(id);
}

export default function HotelIdLayout({ children }: LayoutProps) {
  return children;
}
