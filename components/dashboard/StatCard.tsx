import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";

type StatCardProps = {
  label: string;
  value: string | number;
  description?: string;
  tone?: "white" | "cream" | "blue" | "accepted";
};

export function StatCard({ label, value, description, tone = "white" }: StatCardProps) {
  const surface =
    tone === "accepted"
      ? "rounded-2xl border border-orange-400 bg-orange-100 p-5 shadow-sm"
      : tone === "blue"
        ? dashboardSurfaces.cardBlue
        : tone === "cream"
          ? "rounded-2xl border border-[#EBE4D8] bg-[#FBF8F4] p-5 shadow-sm ring-1 ring-[#0f4c81]/[0.04]"
          : "rounded-2xl border border-[#B8D4EB]/60 bg-white p-5 shadow-sm ring-1 ring-[#0f4c81]/[0.06]";

  const valueClass =
    tone === "blue" ? "text-[#0f4c81]" : tone === "accepted" ? "text-orange-900" : "text-[#0c3d66]";

  const descriptionClass =
    tone === "blue" ? "text-[#3d6f99]" : tone === "accepted" ? "text-orange-800/80" : "text-zinc-500";

  return (
    <div className={surface}>
      <p className={`text-sm font-medium ${tone === "blue" ? "text-[#3d6f99]" : tone === "accepted" ? "text-orange-800" : "text-zinc-600"}`}>
        {label}
      </p>
      <p className={`mt-2 text-3xl font-semibold tracking-tight ${valueClass}`}>{value}</p>
      {description ? <p className={`mt-2 text-sm ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
