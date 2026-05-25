import { cn } from "@/lib/utils";

const tone: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-900",
  pending_verification: "bg-amber-100 text-amber-900",
  accepted: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800",
  expired: "bg-zinc-200 text-zinc-700",
  deleted: "bg-zinc-200 text-zinc-700",
  completed: "bg-blue-100 text-blue-800",
  suspended: "bg-orange-100 text-orange-900",
  banned: "bg-red-100 text-red-800",
  canceled: "bg-zinc-200 text-zinc-700",
  past_due: "bg-orange-100 text-orange-900",
  unpaid: "bg-red-100 text-red-800",
  trialing: "bg-violet-100 text-violet-800",
  inactive: "bg-zinc-200 text-zinc-700",
  paid: "bg-emerald-100 text-emerald-800",
  open: "bg-amber-100 text-amber-900",
};

export function StatusBadge({ value }: { value: string | null | undefined }) {
  const key = (value ?? "—").toLowerCase();
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize",
        tone[key] ?? "bg-zinc-100 text-zinc-700",
      )}
    >
      {value ?? "—"}
    </span>
  );
}
