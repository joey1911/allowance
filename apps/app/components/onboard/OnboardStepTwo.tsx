import { ObservablePrimitiveChildFns } from '@legendapp/state';

export default function OnboardStepTwo({
  onboardState
}: {
  onboardState: ObservablePrimitiveChildFns<number>
}) {
  return (
    <>
      <h1>Add Funding Source</h1>
      <p>Add a Checking or Savings Account to fund your account.</p>
      <p>Skippable Step</p>
      <button type="button" onClick={() => onboardState.set(3)}>Skip</button>
    </>
  )
};