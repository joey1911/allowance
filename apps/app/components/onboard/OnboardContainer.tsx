'use client'

import React from 'react';
import {
  observer,
  useObservable
} from '@legendapp/state/react';
import {
  OnboardStepWelcome,
  OnboardStepOne,
  OnboardStepTwo,
  OnboardStepThree,
  OnboardStepFour
} from '@/components/onboard'; // eslint-disable-line import/no-unresolved

// TODO: Would this be better off as a state machine? For now, KISS
const OnboardContainer = observer(({
  currentStep,
  ...rest
}: {
  currentStep: number
}) => {
  const onboardState = useObservable({
    step: currentStep
  });

  const step = onboardState.step.get();

  switch(step) {
    case 0:
      return <OnboardStepWelcome onboardState={onboardState.step} {...rest} />
    case 1:
      return <OnboardStepOne onboardState={onboardState.step} {...rest} />
    case 2:
      return <OnboardStepTwo onboardState={onboardState.step} {...rest} />
    case 3:
      return <OnboardStepThree onboardState={onboardState.step} {...rest} />
    case 4:
      return <OnboardStepFour onboardState={onboardState.step} {...rest} />
    case 5:
      return <div>Onboarding Complete!</div>
    default:
      return <div>Error</div>
  }
});

export default OnboardContainer;