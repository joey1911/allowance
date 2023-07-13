import React from 'react';
import {
  Header,
  Container,
  Box
} from '@allowance/bash-ui';
import SignOutButton from '@/components/SignOutButton';
import DashboardNavbar from '@/components/DashboardNavbar';
import { flex } from '@allowance/styled-system/patterns';
import { css } from '@allowance/styled-system/css';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header>
        <Container>
          <div className={flex({ direction: 'row', align: 'center' })}>
            <Box>Allowance Admin</Box>
            <div className={css({ marginLeft: 'auto' })}>
              <SignOutButton />
            </div>
          </div>
        </Container>
      </Header>
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