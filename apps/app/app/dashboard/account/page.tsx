import { Dialog } from '@allowance/bash-ui';
import { UpdatePasswordForm } from './components';

export default function Page() {
  return (
    <>
      <h1>Account Settings</h1>
      <UpdatePasswordForm />
      <Dialog
        trigger={<button>Open</button>}
        title="Test"
        description="Test description"
      >
        <p>Hello World!</p>
      </Dialog>
    </>
  )
};