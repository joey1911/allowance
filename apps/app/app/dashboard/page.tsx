import { redirect } from 'next/navigation';
import getUser from '@/actions/user/getUser'; // eslint-disable-line import/no-unresolved

export default async function Page() {
  const user = await getUser();

  if (user.user_metadata.onboardStep === 0) {
    // Redirect to the Customer Onboarding
    redirect('/onboard');
  }

  return (
    <>
      Dashboard-y stuff
    </>
  )
};