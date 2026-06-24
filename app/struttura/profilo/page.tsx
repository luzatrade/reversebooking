import { Suspense } from "react";
import { EditHotelProfileForm } from "@/components/hotels/EditHotelProfileForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento profilo struttura...</div>}>
        <EditHotelProfileForm />
      </Suspense>
    </main>
  );
}
