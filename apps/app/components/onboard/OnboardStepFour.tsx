import { ObservablePrimitiveChildFns } from '@legendapp/state';

export default function OnboardStepFour({
  onboardState
}: {
  onboardState: ObservablePrimitiveChildFns<number>
}) {
  return (
    <>
      <h1>Product Tour / Walkthrough</h1>
      <p>Now that your account is setup, you can...</p>
      <p>Skippable Step</p>
      <button type="button" onClick={() => onboardState.set(5)}>Complete</button>
    </>
  )
};