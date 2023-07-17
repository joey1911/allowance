import getUser from '@/actions/user/getUser'; // eslint-disable-line import/no-unresolved

export default async function Page() {
  const user = await getUser();
  const onboardingStep = user.user_metadata.onboardStep;

  return (
    <>
      Onboarding Flow, current Step: {onboardingStep}
    </>
  )
};