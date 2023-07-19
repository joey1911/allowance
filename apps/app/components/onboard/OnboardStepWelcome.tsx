import { ObservablePrimitiveChildFns } from '@legendapp/state';

export default function OnboardStepWelcome({
  onboardState
}: {
  onboardState: ObservablePrimitiveChildFns<number>
}) {
  return (
    <>
      <h1>Welcome to Allowance!</h1>
      <p>We&apos;re going to get you setup, please follow the Onboarding steps to get the most out of Allowance.</p>
      <button type="button" onClick={() => onboardState.set(1)}>Continue</button>
    </>
  )
};