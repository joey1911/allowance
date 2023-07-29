import { Dialog } from '@allowance/bash-ui';
import { UpdatePasswordForm } from './components';

export default function Page() {
  return (
    <>
      <h1>Account Settings</h1>
      <Dialog
        trigger={<button>Change Password</button>}
        title="Change Account Password"
        description="We recommend using at least 8 characters."
      >
        <UpdatePasswordForm />
      </Dialog>
    </>
  )
};