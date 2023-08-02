import React from 'react';
import { redirect } from 'next/navigation';
import { Box } from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import type { Session } from '@supabase/auth-helpers-nextjs';
import SignOutButton from '@/components/SignOutButton';
import { getSession } from '@/data';
import { AuthProvider } from '@/providers';
import { DashboardNavbar } from './components';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session: Session | null = await getSession();

  if (session.user.user_metadata.onboardStep < 5) {
    // Redirect to the Customer Onboarding
    redirect('/onboard');
  }

  return (
    <AuthProvider session={session}>
      <header>
        <div className={flex({ direction: 'row', align: 'center' })}>
          <Box>Allowance</Box>
          <div className={css({ marginLeft: 'auto' })}>
            <SignOutButton />
          </div>
        </div>
      </header>
      <div className={flex({ direction: 'row', gap: '3' })}>
        <div>
          <DashboardNavbar />
        </div>
        <div>
          {children}
        </div>
      </div>
    </AuthProvider>
  )
};