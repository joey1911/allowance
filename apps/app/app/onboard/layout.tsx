import React from 'react';
import {
  Section,
  Container,
  Box
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import SignOutButton from '@/components/SignOutButton';

export default async function OnboardLayout({
  children
}: {
  children: React.ReactNode
}) {
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