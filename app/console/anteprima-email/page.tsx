import { RequestEmailPreviewApp } from "@/components/console/RequestEmailPreviewApp";
import { getRequestEmailPreviews } from "@/lib/console/request-email-previews";

export default function ConsoleAnteprimaEmailPage() {
  const previews = getRequestEmailPreviews();
  return <RequestEmailPreviewApp previews={previews} />;
}
