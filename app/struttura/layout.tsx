import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export default function StrutturaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells role="hotel" />
      {children}
    </>
  );
}
