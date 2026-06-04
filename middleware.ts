import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request: { headers: request.headers } });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return response;

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  try {
    await Promise.race([
      supabase.auth.getSession(),
      new Promise<void>((resolve) => {
        setTimeout(resolve, 2000);
      }),
    ]);
  } catch {
    // Never block page navigation if Auth is slow or unavailable.
  }
  return response;
}

export const config = {
  // Session refresh only where auth matters — avoids a Supabase round-trip on every public page/API hit.
  matcher: [
    "/struttura/:path*",
    "/agenzia/:path*",
    "/inserzionista/:path*",
    "/console/:path*",
    "/admin/:path*",
    "/account/:path*",
    "/chat/:path*",
    "/scegli-account",
    "/auth/callback",
    "/auth/impersonate",
  ],
};
