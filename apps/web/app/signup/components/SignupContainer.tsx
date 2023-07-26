'use client'

import React from 'react';
import { observer } from '@legendapp/state/react';
import SignupForm from './SignupForm';
import SignupConfirmation from './SignupConfirmation';
import signupState from '../signupState';

const SignupContainer = observer(() => {
  const currentStep = signupState.step.get();

  switch(currentStep) {
    case 1:
      return <SignupForm />
    case 2:
      return <SignupConfirmation />
    default:
      return <div>Error</div>
  }
});

export default SignupContainer;