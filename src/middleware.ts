import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('ACCESS_TOKEN');
  const isLoggedIn = cookie && cookie.value;

  const { pathname } = request.nextUrl;

  if (pathname === '/login' && isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname !== '/login' && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/english/:path*', '/writing/:path*', '/login'],
};
