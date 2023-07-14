import './global.css';
import React from 'react';
import { Container, Box } from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
import MainNavbar from '@/components/MainNavbar'; // eslint-disable-line import/no-unresolved
import ThemeChanger from '@/components/ThemeChanger'; // eslint-disable-line import/no-unresolved
import { Providers } from '../providers/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Box type="announcementBar">
            <Container>
              Announcement Bar using &quot;Box&quot; element
            </Container>
          </Box>
          <header>
            <Container>
              <div className={flex({ direction: 'row', align: 'center', gap: '15px' })}>
                <Box>Allowance</Box>
                <MainNavbar />
              </div>
            </Container>
          </header>
          <ThemeChanger />
          {children}
        </Providers>
      </body>
    </html>
  )
};