'use client'

import { useRouter } from 'next/navigation';
import { signOut } from '@/actions/auth';
import { Button } from '@allowance/bash-ui';

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
    <Button size="small" onClick={signoutHandler}>Sign out</Button>
  )
}