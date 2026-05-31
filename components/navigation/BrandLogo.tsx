import Link from "next/link";

const logoSizes = {
  default:
    "text-3xl font-extrabold sm:text-4xl",
  topbar:
    "text-lg font-extrabold sm:text-xl",
  // Hero home: leggermente più piccolo del default, così i controlli
  // restano inline accanto al brand senza coprirlo.
  homeTopbar:
    "text-2xl font-extrabold sm:text-3xl",
} as const;

const logoBase =
  "font-brand inline-flex items-center leading-none tracking-tight text-orange-500 transition-opacity hover:opacity-90";

type BrandLogoProps = {
  className?: string;
  asLink?: boolean;
  size?: keyof typeof logoSizes;
  /** Logo bicolore: "Hotels" e ".com" colorati (blu su chiaro, bianco su foto/scuro); "Drop" resta arancione. */
  accent?: "blue" | "white";
};

export function BrandLogo({ className = "", asLink = true, size = "default", accent }: BrandLogoProps) {
  const classes = [logoBase, logoSizes[size], className].filter(Boolean).join(" ");
  const accentPart = accent === "white" ? "text-white" : accent === "blue" ? "text-[#0f4c81]" : undefined;
  const content = (
    <>
      <span className={accentPart}>Hotels</span>
      <span className="text-orange-500">Drop</span>
      <span className={accentPart}>.com</span>
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className={classes} aria-label="HotelsDrop.com — Home">
        {content}
      </Link>
    );
  }

  return <span className={classes}>{content}</span>;
}
