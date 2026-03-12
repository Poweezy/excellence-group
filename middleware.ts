import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers (additional to next.config.mjs)
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|logo.png|assets).*)',
  ],
};
