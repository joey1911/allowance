'use client'

import { useState } from 'react';
import { Dialog } from '@allowance/bash-ui';
import UpdatePasswordForm from './UpdatePasswordForm';
import useUpdatePasswordForm from '../../useUpdatePasswordForm';

export default function UpdatePasswordContainer() {
  const [open, setOpen] = useState(false);
  const submitCallback = (response) => {
    if (response.status === 'OK') {
      setOpen(false);
    } else {
      alert(response.message);
    }
  };
  const { updatePasswordFormHandler } = useUpdatePasswordForm(submitCallback);

  return (
    <Dialog
      open={open}
      openChangeHandler={setOpen}
      trigger={<button type="button">Change Password</button>}
      title="Change Account Password"
      description="We recommend using at least 8 characters."
    >
      <UpdatePasswordForm handler={updatePasswordFormHandler} />
    </Dialog>
  )
};