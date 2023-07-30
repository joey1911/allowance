import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

import type { NextRequest } from 'next/server';
import type { Database } from '@/types/supabase';

// eslint-disable-next-line import/prefer-default-export
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Get and Refresh the user's session
  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();

  // Handle a Signed in User
  if (session?.user) {
    if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/forgot-password') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }

  // Handle an Anonymous User
  if (!session?.user) {
    if (req.nextUrl.pathname !== '/' && req.nextUrl.pathname !== '/forgot-password') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return res;
};

export const config = {
  matcher: ['/', '/forgot-password', '/dashboard', '/onboard']
};