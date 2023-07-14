import React from 'react';
import {
  Container,
  Box
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import SignOutButton from '@/components/SignOutButton'; // eslint-disable-line import/no-unresolved
import DashboardNavbar from '@/components/DashboardNavbar'; // eslint-disable-line import/no-unresolved

export default function DashboardLayout({
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