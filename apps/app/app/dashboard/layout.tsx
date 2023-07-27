import React from 'react';
import { redirect } from 'next/navigation';
import {
  Container,
  Box
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import type { Session } from '@supabase/auth-helpers-nextjs';
import SignOutButton from '@/components/SignOutButton';
import { DashboardNavbar } from './components';
import getSession from '@/actions/getSession';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session: Session | null = await getSession();

  if (session === null || !session?.user) {
    redirect('/');
  }

  if (session.user.user_metadata.onboardStep < 5) {
    // Redirect to the Customer Onboarding
    redirect('/onboard');
  }

  return (
    <>
      <header>
        <Container>
          <div className={flex({ direction: 'row', align: 'center' })}>
            <Box>Allowance Admin</Box>
            <div className={css({ marginLeft: 'auto' })}>
              <SignOutButton />
            </div>
          </div>
        </Container>
      </header>
      <div className={flex({ direction: 'row', gap: '3' })}>
        <div>
          Left Side Navigation
          <DashboardNavbar />
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
};