'use client'

import React from 'react';
import {
  observable,
  observe
} from '@legendapp/state';
import { observer } from '@legendapp/state/react';
import SignupForm from './SignupForm';
import SignupConfirmation from './SignupConfirmation';

const signupStatus = observable({
  step: 1
});

observe(() => {
  console.log(signupStatus.step.get());
});

const SignupContainer = observer(function SignupContainer() {
  const currentStep = signupStatus.step.get();

  switch(currentStep) {
    case 1:
      return (
        <>
          <SignupForm signupState={signupStatus.step} />
        </>
      )
    case 2:
      return (
        <SignupConfirmation />
      )
  }
});

export default SignupContainer;