import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";
import { StrutturaSubNav } from "@/components/struttura/StrutturaSubNav";

export default function StrutturaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells role="hotel" />
      <StrutturaSubNav />
      {children}
    </>
  );
}
