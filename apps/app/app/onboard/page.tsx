import OnboardContainer from '@/components/onboard/OnboardContainer'; // eslint-disable-line import/no-unresolved
import getUser from '@/actions/user/getUser'; // eslint-disable-line import/no-unresolved

export default async function Page() {
  const loggedInUser = await getUser();
  const currentOnboardingStep = loggedInUser.user_metadata.onboardStep;

  return (
    <OnboardContainer currentStep={currentOnboardingStep} user={loggedInUser} />
  )
};