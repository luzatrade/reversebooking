"use client";

const LAST_MINUTE_SECTION_ID = "last-minute-offers";

export function scrollToLastMinuteOffers() {
  document.getElementById(LAST_MINUTE_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type LastMinuteOffersButtonProps = {
  visible: boolean;
  label: string;
  /** Mobile inline placement below the city search. */
  variant: "inline" | "fab";
};

export function LastMinuteOffersButton({ visible, label, variant }: LastMinuteOffersButtonProps) {
  if (!visible) return null;

  const sharedProps = {
    type: "button" as const,
    onClick: scrollToLastMinuteOffers,
    "aria-label": label,
  };

  if (variant === "inline") {
    return (
      <button {...sharedProps} className="hd-cta-orange hd-cta-drop-main w-full text-center md:hidden">
        {label}
      </button>
    );
  }

  return (
    <button {...sharedProps} className="hd-last-minute-fab hd-cta-orange hidden md:inline-flex">
      {label}
    </button>
  );
}

export { LAST_MINUTE_SECTION_ID };
