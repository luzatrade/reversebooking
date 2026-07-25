"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { homePath } from "@/lib/i18n/routing";

const logoSizes = {
  default: "text-3xl font-extrabold sm:text-4xl",
  topbar: "text-lg font-extrabold sm:text-xl",
  homeTopbar: "text-2xl font-extrabold sm:text-3xl",
} as const;

const logoBase =
  "font-brand inline-flex items-center leading-none tracking-tight text-orange-500 transition-opacity hover:opacity-90";

type BrandLogoProps = {
  className?: string;
  asLink?: boolean;
  size?: keyof typeof logoSizes;
  accent?: "blue" | "white";
};

export function BrandLogo({ className = "", asLink = true, size = "default", accent }: BrandLogoProps) {
  const { locale } = useLanguage();
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
      <Link href={homePath(locale)} className={classes} aria-label="HotelsDrop.com — Home">
        {content}
      </Link>
    );
  }

  return <span className={classes}>{content}</span>;
}
