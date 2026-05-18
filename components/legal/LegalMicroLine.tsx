import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "acceptOffer" | "subscriptionCheckout";

const copy: Record<Variant, ReactNode> = {
  acceptOffer:
    "Accettando l’offerta, il soggiorno si intende direttamente con la struttura. HotelsDrop non è intermediario di pagamento né agenzia viaggi.",
  subscriptionCheckout: (
    <>
      Procedendo accetti le{" "}
      <Link href="/condizioni-abbonamento" className="underline underline-offset-2">
        Condizioni abbonamento
      </Link>
      . L’abbonamento si rinnova secondo quanto indicato da Stripe.
    </>
  ),
};

export function LegalMicroLine({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <p className={`text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 ${className}`.trim()}>
      {copy[variant]}
    </p>
  );
}
