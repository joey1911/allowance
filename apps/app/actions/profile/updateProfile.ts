import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/types/supabase';
import type { AccountProfile } from '@/types/account';

export default async function updateProfile(
  profileData: AccountProfile,
  userId: string
) {
  const supabase = createClientComponentClient<Database>();

  try {
    const { error } = await supabase.from('profiles').upsert({
      id: userId as string,
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      address: profileData.address,
      address2: profileData.address2,
      city: profileData.city,
      state: profileData.state,
      zip_code: profileData.zip_code,
      dob: profileData.dob,
      avatar_url: profileData.avatar_url,
      updated_at: new Date().toISOString()
    });

    if (error) throw error;

    alert('Profile updated!');
  } catch (error) {
    alert('Error updating the data!');
  }
};