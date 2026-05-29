import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { TwoFactorSetup } from "@/components/console/TwoFactorSetup";
import { getServerTranslations } from "@/lib/i18n/get-translations";

export default async function ConsoleSecurityPage() {
  const t = await getServerTranslations();
  return (
    <>
      <ConsolePageHeader title={t.console.pages.security.title} description={t.console.pages.security.description} />
      <TwoFactorSetup />
    </>
  );
}
