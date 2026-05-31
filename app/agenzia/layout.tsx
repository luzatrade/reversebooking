import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export default function AgenziaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells role="hotel" />
      {children}
    </>
  );
}
