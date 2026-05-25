import { cn } from "@/lib/utils";

export function DataTable({
  columns,
  rows,
  emptyMessage = "Nessun record.",
}: {
  columns: { key: string; label: string; className?: string }[];
  rows: { id: string; cells: Record<string, React.ReactNode> }[];
  emptyMessage?: string;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-12 text-center text-sm text-zinc-500">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={cn("px-4 py-3", col.className)}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-zinc-50/80">
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-4 py-3 align-top text-zinc-800", col.className)}>
                    {row.cells[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
