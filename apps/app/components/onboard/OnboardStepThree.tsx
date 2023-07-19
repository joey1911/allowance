import { ObservablePrimitiveChildFns } from '@legendapp/state';

export default function OnboardStepThree({
  onboardState
}: {
  onboardState: ObservablePrimitiveChildFns<number>
}) {
  return (
    <>
      <h1>Add Additional Account Holders</h1>
      <p>Add additional members of your family to the account.</p>
      <p>Skippable Step</p>
      <button type="button" onClick={() => onboardState.set(4)}>Skip</button>
    </>
  )
};