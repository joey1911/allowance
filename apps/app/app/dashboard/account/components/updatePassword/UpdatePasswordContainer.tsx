'use client'

import { useState } from 'react';
import { Dialog } from '@allowance/bash-ui';
import UpdatePasswordForm from './UpdatePasswordForm';

export default function UpdatePasswordContainer() {
  const [open, setOpen] = useState(false);

  const onSave = () => {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      openChangeHandler={setOpen}
      trigger={<button type="button">Change Password</button>}
      title="Change Account Password"
      description="We recommend using at least 8 characters."
    >
      <UpdatePasswordForm callback={onSave} />
    </Dialog>
  )
};