type Props = {
  cityName: string;
};

export function CityHeroPlaceholder({ cityName }: Props) {
  return (
    <div
      className="flex h-28 w-full items-center justify-center bg-gradient-to-br from-[#e8f0f8] via-[#f4f8fc] to-[#d4e4f2] px-3 text-center"
      aria-hidden
    >
      <span className="text-sm font-semibold tracking-tight text-[#0f4c81]">{cityName}</span>
    </div>
  );
}
