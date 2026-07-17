type Props = {
  cityName: string;
  className?: string;
};

export function CityHeroPlaceholder({ cityName, className }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-br from-[#e8f0f8] via-[#f4f8fc] to-[#d4e4f2] px-3 text-center ${className ?? "h-28"}`}
      aria-hidden
    >
      <span className="text-sm font-semibold tracking-tight text-[#0f4c81]">{cityName}</span>
    </div>
  );
}
