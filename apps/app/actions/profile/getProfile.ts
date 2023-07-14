import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

/**
 * Get user's profile data
 * @param {Session} session - Current session data
 * @returns {object} profileData - Current profile data
 * @returns {boolean} false - If user isn't found, return false
 */
export default async function getProfile(userId: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  try {
    return await supabase
      .from('profiles')
      .select(`first_name, last_name, address, address2, city, state, zip_code, dob, avatar_url`)
      .eq('id', userId)
      .single();
  } catch (error) {
    return error;
  }
};

type GetProfileResponse = Awaited<ReturnType<typeof getProfile>>
export type GetProfileResponseSuccess = GetProfileResponse['data']
export type GetProfileResponseError = GetProfileResponse['error']