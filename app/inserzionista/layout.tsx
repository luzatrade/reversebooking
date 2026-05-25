import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export default function InserzionistaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells role="advertiser" />
      {children}
    </>
  );
}
