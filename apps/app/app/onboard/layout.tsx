import React from 'react';
import { redirect } from 'next/navigation';
import {
  Section,
  Container,
  Box
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import type { Session } from '@supabase/auth-helpers-nextjs';
import SignOutButton from '@/components/SignOutButton'; // eslint-disable-line import/no-unresolved
import getSession from '@/actions/getSession'; // eslint-disable-line import/no-unresolved

export default async function OnboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session: Session | null = await getSession();

  if (session === null || !session?.user) {
    redirect('/');
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
      <Section>
        <Container>
        {children}
        </Container>
      </Section>
    </>
  )
};