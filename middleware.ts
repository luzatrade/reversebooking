import type { Session } from "@supabase/supabase-js";
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

  let session: Session | null = null;

  try {
    const sessionResult = await Promise.race([
      supabase.auth.getSession(),
      new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), 2000);
      }),
    ]);
    if (sessionResult && "data" in sessionResult) {
      session = sessionResult.data.session;
    }
  } catch {
    // Never block page navigation if Auth is slow or unavailable.
  }

  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/struttura/annunci/") && !session?.user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("redirect", `${pathname}${request.nextUrl.search}`);
    loginUrl.searchParams.delete("code");
    return NextResponse.redirect(loginUrl);
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
