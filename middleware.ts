import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, hashPasswordEdge } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(SESSION_COOKIE);
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword) {
    // Misconfigured — let through in dev so errors are visible
    return NextResponse.next();
  }

  const expected = await hashPasswordEdge(sitePassword);

  if (!cookie || cookie.value !== expected) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
