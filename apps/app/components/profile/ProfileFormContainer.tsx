import {
  getSession,
  getProfile
} from '@/actions/index';

import type { Session } from '@supabase/auth-helpers-nextjs';
import type { AccountProfile } from '@/types/account';

import ProfileForm from './ProfileForm';

const ProfileFormContainer = async () => {
  const session: Session | null = await getSession();

  if (session === null) {
    // throw error?? redirect to /signin?
  }

  try {
    const data: AccountProfile = await getProfile(session);
    // Default missing values to '' so React Hook Form doesn't complain
    const profileData = {
      first_name: data?.first_name ?? '',
      last_name: data?.last_name ?? '',
      address: data?.address ?? '',
      address2: data?.address2 ?? '',
      city: data?.city ?? '',
      state: data?.state ?? '',
      zip_code: data?.zip_code ?? '',
      dob: data?.dob ?? '',
      avatar_url: data?.avatar_url ?? ''
    };

    return <ProfileForm profileData={profileData} user={session.user} />
  } catch (error) {
    // record error
    return <div>{error.message}</div>
  } finally {
    // log access attempts potentially?
    // this block will execute regardless of the try result
  }
};

export default ProfileFormContainer;