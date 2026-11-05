import { withSupabaseFallback } from "../lib/supabase/admin";

async function main() {
  const ok = await withSupabaseFallback("ok", "fallback", async () => "value");
  if (ok !== "value") {
    console.error("expected value, got", ok);
    process.exit(1);
  }

  const failed = await withSupabaseFallback("fail", "fallback", async () => {
    throw new Error("fetch failed");
  });
  if (failed !== "fallback") {
    console.error("expected fallback, got", failed);
    process.exit(1);
  }

  console.log("OK withSupabaseFallback returns value and swallows network throws");
}

void main();
