import { ConsolePageHeader } from "@/components/console/ConsolePageHeader";
import { DataTable } from "@/components/console/DataTable";
import { DeleteButton } from "@/components/console/DeleteButton";
import { StatusBadge } from "@/components/console/StatusBadge";
import { isServiceRoleConfigured } from "@/lib/utils/env";
import { createClient } from "@supabase/supabase-js";

async function listOnboardingHotels() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const { data, error } = await sb
    .from("onboarding_hotels")
    .select("id, nome, city_name, indirizzo, email, phone, main_photo_url, status, created_at")
    .order("created_at", { ascending: false })
    .limit(1000);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export default async function ConsoleOnboardingPage() {
  if (!isServiceRoleConfigured()) {
    return <ConsolePageHeader title="Strutture Onboarding" description="Service role non configurato." />;
  }

  const hotels = await listOnboardingHotels();
  const withEmail = hotels.filter((h) => h.email).length;
  const withPhone = hotels.filter((h) => h.phone).length;
  const claimed = hotels.filter((h) => h.status === "claimed").length;

  return (
    <>
      <ConsolePageHeader
        title="Strutture Onboarding"
        description={`${hotels.length} strutture reali raccolte · ${withEmail} con email · ${withPhone} con telefono · ${claimed} rivendicate`}
      />
      <DataTable
        columns={[
          { key: "photo", label: "" },
          { key: "name", label: "Struttura" },
          { key: "city", label: "Città" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Telefono" },
          { key: "status", label: "Stato" },
          { key: "actions", label: "Azioni" },
        ]}
        rows={hotels.map((h) => ({
          id: h.id,
          cells: {
            photo: h.main_photo_url ? (
              <img src={h.main_photo_url} alt={h.nome} className="h-10 w-14 rounded-lg object-cover" />
            ) : (
              <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-zinc-100 text-[10px] text-zinc-400">
                N/A
              </div>
            ),
            name: (
              <div>
                <span className="font-medium">{h.nome}</span>
                {h.indirizzo ? <p className="text-xs text-zinc-500">{h.indirizzo}</p> : null}
              </div>
            ),
            city: h.city_name,
            email: h.email ? (
              <a href={`mailto:${h.email}`} className="text-xs text-blue-600 hover:underline">
                {h.email}
              </a>
            ) : (
              <span className="text-xs text-zinc-400">—</span>
            ),
            phone: h.phone ? (
              <span className="text-xs">{h.phone}</span>
            ) : (
              <span className="text-xs text-zinc-400">—</span>
            ),
            status: <StatusBadge value={h.status === "claimed" ? "active" : "pending"} />,
            actions: <DeleteButton entity="onboarding" id={h.id} />,
          },
        }))}
      />
    </>
  );
}
