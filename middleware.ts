import type { Session } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  isHubSeoPublicInternalPathForLocale,
  isPublicSeoPath,
  localeCookieOptions,
  HD_LOCALE_HEADER,
  HD_PATHNAME_HEADER,
  LOCALE_HEADER,
  localizedPath,
  parseLocalePath,
  shouldSkipLocaleMiddleware,
} from "@/lib/i18n/routing";
import { preferredLocaleFromRequest } from "@/lib/i18n/locale-detect";

const PROTECTED_PREFIXES = [
  "/struttura",
  "/agenzia",
  "/inserzionista",
  "/console",
  "/admin",
  "/account",
  "/chat",
  "/scegli-account",
  "/auth/callback",
  "/auth/impersonate",
];

function isProtectedPath(pathname: string) {
  return PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function handleLocale(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  if (shouldSkipLocaleMiddleware(pathname)) return null;

  const parsed = parseLocalePath(pathname);
  if (parsed) {
    if (parsed.locale === "de" || parsed.locale === "zh") {
      if (parsed.internalPath.startsWith("/hotel/")) {
        const url = request.nextUrl.clone();
        url.pathname = localizedPath("en", parsed.internalPath);
        return NextResponse.redirect(url, 301);
      }
      if (parsed.internalPath !== "/" && !isHubSeoPublicInternalPathForLocale(parsed.internalPath, parsed.locale)) {
        const url = request.nextUrl.clone();
        url.pathname = localizedPath("en", parsed.internalPath);
        return NextResponse.redirect(url, 301);
      }
    }

    const url = request.nextUrl.clone();
    url.pathname = parsed.internalPath;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER, parsed.locale);
    requestHeaders.set(HD_LOCALE_HEADER, parsed.locale);
    requestHeaders.set(HD_PATHNAME_HEADER, pathname);
    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    const cookie = localeCookieOptions(parsed.locale);
    response.cookies.set(cookie.name, cookie.value, {
      path: cookie.path,
      maxAge: cookie.maxAge,
      sameSite: cookie.sameSite,
    });
    response.headers.set(LOCALE_HEADER, parsed.locale);
    return response;
  }

  if (isPublicSeoPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = localizedPath(preferredLocaleFromRequest(request), pathname);
    return NextResponse.redirect(url, 301);
  }

  return null;
}

async function handleAuth(request: NextRequest): Promise<NextResponse> {
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

function mergeCookies(from: NextResponse, into: NextResponse) {
  from.cookies.getAll().forEach((cookie) => {
    into.cookies.set(cookie.name, cookie.value, cookie);
  });
  from.headers.forEach((value, key) => {
    into.headers.set(key, value);
  });
}

export async function middleware(request: NextRequest) {
  const localeResponse = handleLocale(request);
  if (localeResponse && localeResponse.status >= 300 && localeResponse.status < 400) {
    return localeResponse;
  }

  if (isProtectedPath(request.nextUrl.pathname)) {
    const authResponse = await handleAuth(request);
    if (authResponse.status >= 300 && authResponse.status < 400) return authResponse;
    if (localeResponse) {
      mergeCookies(authResponse, localeResponse);
      return localeResponse;
    }
    return authResponse;
  }

  return localeResponse ?? NextResponse.next();
}

export const config = {
  matcher: [
    // Escludi statici OCR (wasm/js/gz) — altrimenti il middleware può 404-are Tesseract
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|html|wasm|js|gz|json|css|map)$).*)",
  ],
};
