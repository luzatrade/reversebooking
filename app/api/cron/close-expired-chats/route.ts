import { NextResponse} from "next/server";
import { createAdminSupabaseClient} from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const secret = request.headers.get("x-cron-secret");
  const expected = process.env.CRON_SECRET;
  if (expected && secret !== expected) {
    return NextResponse.json({ error: "Non autorizzato"}, { status: 401});
 }

  try {
    const supabase = createAdminSupabaseClient();
    const { data, error} = await supabase.rpc("close_expired_accepted_chats");
    if (error) return NextResponse.json({ error: error.message}, { status: 500});
    return NextResponse.json({ ok: true, closed: data ?? 0});
 } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Errore chiusura chat"},
      { status: 500},
    );
 }
}
