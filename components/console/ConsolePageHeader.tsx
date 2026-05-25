export function ConsolePageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{title}</h1>
      {description ? <p className="mt-2 max-w-3xl text-sm text-zinc-600">{description}</p> : null}
    </header>
  );
}
