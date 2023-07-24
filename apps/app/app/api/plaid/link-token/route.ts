import { NextResponse } from 'next/server';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { createLinkToken } from '@/actions/plaid';
import getSession from '@/actions/getSession';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const session: Session | null = await getSession();

  if (session === null || !session?.user) {
    return NextResponse.json({
      status: 'Error',
      message: 'No user session found'
    });
  }

  try {
    const response = await createLinkToken(session.user.id);
  
    return NextResponse.json({
      status: 'OK',
      linkToken: response.data.link_token
    });
  } catch (error) {
    return NextResponse.json({
      status: 'Error',
      message: error.message
    });
  }
};