'use client'

import React from 'react';
import {
  observer,
  Switch
} from '@legendapp/state/react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import forgotPasswordState from '../forgotPasswordState';

const ForgotPasswordContainer = observer(() =>
  (
    <Switch value={forgotPasswordState.step}>
      {{
        1: () => <ForgotPasswordForm />,
        2: () => <ForgotPasswordConfirmation />,
        default: () => <div>Error!</div>
      }}
    </Switch>
  )
);

export default ForgotPasswordContainer;