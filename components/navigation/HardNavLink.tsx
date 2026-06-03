import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

/** Full page navigation — avoids client router stalls on /struttura/* when middleware is slow. */
export function HardNavLink({ href, className, children }: Props) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
