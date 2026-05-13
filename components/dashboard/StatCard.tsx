type StatCardProps = {
  label: string;
  value: string | number;
  description?: string;
};

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">{value}</p>
      {description ? <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{description}</p> : null}
    </div>
  );
}
