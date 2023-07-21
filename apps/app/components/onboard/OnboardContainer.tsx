'use client'

import React, {
  useRef
} from 'react';
import {
  observer,
  useObservable,
  Switch
} from '@legendapp/state/react';
import type { User } from '@supabase/auth-helpers-nextjs';
import {
  OnboardStepWelcome,
  OnboardStepOne,
  OnboardStepTwo,
  OnboardStepThree,
  OnboardStepFour
} from '@/components/onboard';

// TODO: Would this be better off as a state machine? For now, KISS
const OnboardContainer = observer(({
  currentStep,
  user,
  ...rest
}: {
  currentStep: number,
  user: User
}) => {
  const renderCount = ++useRef(0).current; // eslint-disable-line
  const onboardState = useObservable({
    step: currentStep,
    user
  });

  return (
    <>
      <p suppressHydrationWarning>Re-renders: {renderCount}</p>
      <Switch value={onboardState.step}>
        {{
          0: () => <OnboardStepWelcome onboardState={onboardState.step} {...rest} />,
          1: () => <OnboardStepOne onboardState={onboardState} {...rest} />,
          2: () => <OnboardStepTwo onboardState={onboardState} {...rest} />,
          3: () => <OnboardStepThree onboardState={onboardState} {...rest} />,
          4: () => <OnboardStepFour onboardState={onboardState.step} {...rest} />,
          5: () => <div>Onboarding Complete! Welcome to Allowance!</div>,
          default: () => <div>Error!</div>
        }}
      </Switch>
    </>
  )
});

export default OnboardContainer;