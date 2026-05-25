import Link from "next/link";

const logoSizes = {
  default:
    "text-3xl font-extrabold sm:text-4xl",
  topbar:
    "text-lg font-extrabold sm:text-xl",
} as const;

const logoBase =
  "font-brand inline-flex items-center leading-none tracking-tight text-orange-500 transition-opacity hover:opacity-90";

type BrandLogoProps = {
  className?: string;
  asLink?: boolean;
  size?: keyof typeof logoSizes;
};

export function BrandLogo({ className = "", asLink = true, size = "default" }: BrandLogoProps) {
  const classes = [logoBase, logoSizes[size], className].filter(Boolean).join(" ");

  if (asLink) {
    return (
      <Link href="/" className={classes} aria-label="HotelsDrop.com — Home">
        HotelsDrop.com
      </Link>
    );
  }

  return <span className={classes}>HotelsDrop.com</span>;
}
