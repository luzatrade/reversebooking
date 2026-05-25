import { AccountSettingsClient } from "@/components/account/AccountSettingsClient";
import { RoleAlertBells } from "@/components/notifications/RoleAlertBells";

export default function AccountPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <RoleAlertBells />
      <AccountSettingsClient />
    </main>
  );
}
