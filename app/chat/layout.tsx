import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RoleAlertBells />
      {children}
    </>
  );
}
