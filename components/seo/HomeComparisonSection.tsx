import { getServerLocale } from "@/lib/i18n/get-translations";
import { getHomeComparisonTable } from "@/lib/i18n/seo-marketing";

export async function HomeComparisonSection() {
  const locale = await getServerLocale();
  const table = getHomeComparisonTable(locale);

  return (
    <section
      aria-labelledby="home-comparison-title"
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 id="home-comparison-title" className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
            {table.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{table.subtitle}</p>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                {table.headers.map((header) => (
                  <th key={header} scope="col" className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100 sm:px-5">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.topic} className="border-b border-zinc-100 last:border-0 dark:border-zinc-800">
                  <th scope="row" className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200 sm:px-5">
                    {row.topic}
                  </th>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 sm:px-5">{row.traditional}</td>
                  <td className="px-4 py-3 font-medium text-[#0f4c81] sm:px-5">{row.hotelsdrop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
