import { CatalogOfferDetailClient } from "@/components/catalog-offers/CatalogOfferDetailClient";

export default async function CatalogOfferPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  return <CatalogOfferDetailClient offerCode={code} />;
}
