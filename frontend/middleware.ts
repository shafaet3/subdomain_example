import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  if (!host) return NextResponse.next();

  // Root domain & local dev
  if (
    host === 'emmai.app' ||
    host.startsWith('localhost') ||
    host.startsWith('127.0.0.1')
  ) {
    return NextResponse.next();
  }

  // abc.emmai.xxx → abc
  const subdomain = host.split('.')[0];

  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
