import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';
import {
  type AccountProfileRow,
  type AccountProfile
} from '@/types/account'; // eslint-disable-line import/no-unresolved

/**
 * Get user's profile data
 * @param {Session} session - Current session data
 * @returns {object} profileData - Current profile data
 * @returns {boolean} false - If user isn't found, return false
 */
export default async function getProfile(userId: string): Promise<AccountProfile> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data,
    error,
    status
  }: {
    data: AccountProfileRow,
    error: any,
    status: any
  } = await supabase
    .from('profiles')
    .select(`first_name, last_name, address, address2, city, state, zip_code, dob, avatar_url`)
    .eq('id', userId)
    .single();

  if (error && status !== 406) {
    throw error;
  }

  return data;
};