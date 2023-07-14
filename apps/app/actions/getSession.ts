import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Session } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

/**
 * Get current session data from Supabase
 * @returns {Session} session
 */
export default async function getSession(): Promise<Session | null> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();

  return session;
};