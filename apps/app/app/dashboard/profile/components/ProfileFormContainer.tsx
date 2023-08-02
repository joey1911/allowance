import type { Session } from '@supabase/auth-helpers-nextjs';
import {
  getProfile,
  getSession,
  type GetProfileResponseSuccess,
  type GetProfileResponseError
} from '@/data';
import ProfileForm from './ProfileForm';

const ProfileFormContainer = async () => {
  const session: Session | null = await getSession();
  const {
    data,
    error
  }: {
    data: GetProfileResponseSuccess,
    error: GetProfileResponseError
  } = await getProfile(session.user.id);

  if (error) {
    return <div>{error.message}</div>
  }

  // Default missing values to '' so React Hook Form doesn't complain
  const profileData = {
    first_name: data?.first_name ?? '',
    last_name: data?.last_name ?? '',
    dob: data?.dob ?? '',
    avatar_url: data?.avatar_url ?? ''
  };

  return <ProfileForm profileData={profileData} user={session.user} />
};

export default ProfileFormContainer;