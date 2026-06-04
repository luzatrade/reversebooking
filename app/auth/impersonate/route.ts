import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { safeRedirectPath } from "@/lib/auth/safeRedirectPath";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const next = safeRedirectPath(searchParams.get("next"));

  if (!tokenHash) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return NextResponse.redirect(new URL("/login?error=config", request.url));
  }

  let response = NextResponse.redirect(new URL(next, request.url));

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

  const { error: magicError } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type: "magiclink",
  });

  if (magicError) {
    const { error: emailError } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "email",
    });
    if (emailError) {
      return NextResponse.redirect(new URL("/login?error=impersonate", request.url));
    }
  }

  return response;
}
