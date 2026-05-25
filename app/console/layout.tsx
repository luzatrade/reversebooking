import { requireRole } from "@/lib/auth/guards";
import { ConsoleShell } from "@/components/console/ConsoleShell";

export default async function ConsoleLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await requireRole("admin");

  return <ConsoleShell email={profile.email}>{children}</ConsoleShell>;
}
