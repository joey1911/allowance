import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

/**
 * Get user data
 * @returns {object} profileData - Current profile data
 * @returns {boolean} false - If user isn't found, return false
 */
export default async function getUser() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: {
      user
    }
  } = await supabase.auth.getUser();

  return user;
};