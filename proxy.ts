import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const pathname = nextUrl.pathname;

  // Redirect logged-in users away from the login page
  if (pathname === "/admin/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Protect the admin dashboard routes
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Role-based Access Control (RBAC)
    const userRole = req.auth?.user?.role;

    // Protect Account page: only SUPERADMIN can access
    if (
      pathname.startsWith("/admin/dashboard/account") &&
      userRole !== "SUPERADMIN"
    ) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }

    const response = NextResponse.next();
    // Headers to prevent browser from caching protected routes
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate",
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  }

  return NextResponse.next();
});

// Configure the middleware to only run on specific paths to optimize performance
export const config = {
  matcher: [
    "/admin/:path*",
    "/api/user/:path*",
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
  ],
};
