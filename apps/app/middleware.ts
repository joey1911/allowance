import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

import type { NextRequest } from 'next/server';
import type { Database } from '@/types/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // This needs to run in order to refresh the user's session before loading Server Component routes
  await supabase.auth.getSession();

  // Check to see if a user is logged in
  const {
    data: {
      user
    }
  } = await supabase.auth.getUser();

  // If the user is signed in and the current path is / redirect the user to /dashboard
  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // If the user is not signed in and the current path is not / redirect the user to /
  // *** NOTE: Can't depend on this to protect routes. Protected routes should do their own verification!
  if (!user && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
};

export const config = {
  matcher: ['/', '/dashboard']
};