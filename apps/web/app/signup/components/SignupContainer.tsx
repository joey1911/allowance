'use client'

import React from 'react';
import {
  observer,
  Switch
} from '@legendapp/state/react';
import SignupForm from './SignupForm';
import SignupConfirmation from './SignupConfirmation';
import signupState from '../signupState';

const SignupContainer = observer(() =>
  (
    <Switch value={signupState.step}>
      {{
        1: () => <SignupForm />,
        2: () => <SignupConfirmation />,
        default: () => <div>Error!</div>
      }}
    </Switch>
  )
);

export default SignupContainer;