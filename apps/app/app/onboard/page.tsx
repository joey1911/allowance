import { getUser } from '@/data';
import { OnboardContainer } from './components';

export default async function Page() {
  const loggedInUser = await getUser();
  const currentOnboardingStep = loggedInUser.user_metadata.onboardStep;

  return (
    <OnboardContainer currentStep={currentOnboardingStep} user={loggedInUser} />
  )
};