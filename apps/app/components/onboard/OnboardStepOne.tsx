import { ObservablePrimitiveChildFns } from '@legendapp/state';
import VerifyIdentityForm from './VerifyIdentityForm';

export default function OnboardStepOne({
  onboardState
}: {
  onboardState: ObservablePrimitiveChildFns<number>
}) {
  return (
    <>
      <h1>Verify Your Identity</h1>
      <p>We need this information in order to verify your identy before you&apos;re able to transfer funds into your account.</p>
      <VerifyIdentityForm />
      <button type="button" onClick={() => onboardState.set(2)}>Temp. to Cycle State</button>
    </>
  )
};