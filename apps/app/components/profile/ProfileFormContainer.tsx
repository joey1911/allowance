import { redirect } from 'next/navigation';
import type { Session } from '@supabase/auth-helpers-nextjs';
import getSession from '@/actions/getSession'; // eslint-disable-line import/no-unresolved
import getProfile, {
  type GetProfileResponseSuccess,
  type GetProfileResponseError
} from '@/actions/profile/getProfile'; // eslint-disable-line import/no-unresolved
import ProfileForm from './ProfileForm';

const ProfileFormContainer = async () => {
  const session: Session | null = await getSession();

  if (session === null || !session?.user) {
    redirect('/');
  }

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
    address: data?.address ?? '',
    address2: data?.address2 ?? '',
    city: data?.city ?? '',
    state: data?.state ?? '',
    zip_code: data?.zip_code ?? '',
    dob: data?.dob ?? '',
    avatar_url: data?.avatar_url ?? ''
  };

  return <ProfileForm profileData={profileData} user={session.user} />
};

export default ProfileFormContainer;