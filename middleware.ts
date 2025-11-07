import createMiddleware from "next-intl/middleware";
// Use a relative path here because middleware runs in the edge runtime
// and may not resolve TypeScript path aliases like `@/...`.
import { locales, defaultLocale } from "./src/config";

// Create the next-intl middleware instance once.
const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

// Export a small wrapper so we can log at runtime per-request. Module-level
// console logs may run when the module is loaded (and some runtimes hide
// those), so logging inside the exported middleware ensures you see an entry
// whenever a request is processed.
import type { NextRequest } from "next/server";
export default async function middleware(request: NextRequest) {
  try {
    // eslint-disable-next-line no-console
    console.log("middleware: handling request", request.nextUrl?.pathname);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("middleware: per-request log failed", e);
  }

  // Delegate to the next-intl middleware implementation.
  return nextIntlMiddleware(request as any);
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)"
  ]
};