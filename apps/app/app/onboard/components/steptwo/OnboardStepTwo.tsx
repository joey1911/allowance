import type { OnboardState } from '@/types';
import PlaidLink from '@/components/PlaidLink';

export default function OnboardStepTwo({
  onboardState
}: {
  onboardState: OnboardState
}) {
  return (
    <>
      <h1>Add Funding Source</h1>
      <p>Add a Checking or Savings Account to fund your account.</p>
      <p>Skippable Step</p>
      <PlaidLink user={onboardState.user.get()} />
      <button type="button" onClick={() => onboardState.step.set(3)}>Skip</button>
    </>
  )
};