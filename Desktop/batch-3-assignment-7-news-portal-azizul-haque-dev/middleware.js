// Import Next.js Edge middleware response utility
import { NextResponse } from "next/server";

// Import intl locale matcher and negotiator to detect preferred language
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Define supported locales and the fallback default
let defaultLocale = "en";
let locales = ["bn", "en"];

/**
 * Detects the best-matching locale from the request's Accept-Language header.
 * Uses Negotiator to parse the languages, and match to supported ones.
 */
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

  // Convert header into format Negotiator can use
  let headers = { "accept-language": acceptedLanguage };

  // Get list of preferred languages from client
  let languages = new Negotiator({ headers }).languages();

  console.log(languages); // (for debugging) shows detected languages

  // Match preferred languages against supported ones, fall back to default
  return match(languages, locales, defaultLocale); // e.g., returns 'en' or 'bn'
}

/**
 * Middleware runs on every request matched by the config.
 * Redirects users to a locale-prefixed URL if not already present.
 */
export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if the current path already includes a supported locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale is found in the URL, redirect to the best-matched locale version
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Redirect to the same path, but prefixed with the locale (e.g., /en/products)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // If locale already present, allow request to continue
  return NextResponse.next();
}

/**
 * Define which routes the middleware should run on.
 * This skips internal paths like /api, /_next, /assets, etc.
 */
export const config = {
  matcher: [
    "/((?!api|assets|.*\\..*|_next).*)"
    // optionally add '/' here to match root path as well
  ]
};
