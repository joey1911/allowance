import './global.css';
import { Container, Box } from '@allowance/bash-ui';
import { flex } from '@allowance/styled-system/patterns';
import MainNavbar from '@/components/MainNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Box type="announcementBar">
          <Container>
            Announcement Bar using "Box" element
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
        {children}
      </body>
    </html>
  )
};