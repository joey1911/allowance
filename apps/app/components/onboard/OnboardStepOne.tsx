import type { User } from '@supabase/auth-helpers-nextjs';
import type { ObservableObject } from '@legendapp/state';
import VerifyIdentityForm from './VerifyIdentityForm';

export default function OnboardStepOne({
  onboardState
}: {
  onboardState: ObservableObject<{
    step: number,
    user: User
  }>
}) {
  return (
    <>
      <h1>Verify Your Identity</h1>
      <p>We need this information in order to verify your identy before you&apos;re able to transfer funds into your account.</p>
      <VerifyIdentityForm onboardState={onboardState} />
    </>
  )
};