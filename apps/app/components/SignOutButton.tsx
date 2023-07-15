'use client'

import { useRouter } from 'next/navigation';
import { Button } from '@allowance/bash-ui';
import { signOut } from '@/actions/auth'; // eslint-disable-line import/no-unresolved

export default function SignOutButton() {
  const router = useRouter();

  const signoutHandler = async () => {
    if (await signOut()) {
      router.refresh();
    } else {
      // hrm ... what should we do if there's any error signing out?
    }
  };

  return (
    <Button size="sm" variant="secondary" onClick={signoutHandler}>Sign out</Button>
  )
};