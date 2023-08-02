import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';
import type { AccountProfile } from '@/types';

export default async function updateProfile(
  profileData: AccountProfile,
  userId: string
) {
  const supabase = createClientComponentClient<Database>();

  try {
    const results = await supabase.from('profiles').upsert({
      id: userId as string,
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      dob: profileData.dob,
      avatar_url: profileData.avatar_url,
      updated_at: new Date().toISOString()
    });

    if (results.error) {
      throw new Error(results.error.message);
    }

    return {
      status: 'OK',
      data: results
    }
  } catch (error) {
    return {
      status: 'Error',
      message: error.message
    }
  }
};