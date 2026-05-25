import Link from "next/link";

const logoClassName =
  "font-brand inline-flex items-center leading-none text-2xl font-extrabold tracking-tight text-orange-500 transition-opacity hover:opacity-90 sm:text-3xl";

type BrandLogoProps = {
  className?: string;
  asLink?: boolean;
};

export function BrandLogo({ className = "", asLink = true }: BrandLogoProps) {
  const classes = className ? `${logoClassName} ${className}` : logoClassName;

  if (asLink) {
    return (
      <Link href="/" className={classes} aria-label="HotelsDrop.com — Home">
        HotelsDrop.com
      </Link>
    );
  }

  return <span className={classes}>HotelsDrop.com</span>;
}
