'use client'

import { useState } from 'react';
import { observe } from '@legendapp/state';
import { Dialog } from '@allowance/bash-ui';
import UpdatePasswordForm from './UpdatePasswordForm';
import updatePasswordState, {
  resetUpdatePasswordState
} from '../../updatePasswordState';

export default function UpdatePasswordContainer() {
  const [open, setOpen] = useState(false);

  observe(updatePasswordState.step, (e) => {
    if (e.value === 2) {
      setOpen(false);
      resetUpdatePasswordState();
    }
  });

  return (
    <Dialog
      open={open}
      openChangeHandler={setOpen}
      trigger={<button type="button">Change Password</button>}
      title="Change Account Password"
      description="We recommend using at least 8 characters."
    >
      <UpdatePasswordForm />
    </Dialog>
  )
};