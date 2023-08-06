import Link from 'next/link';
import {
  Section,
  Container
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';
import { LoginContainer } from './login/components';

export default function Page() {
  return (
    <Section type="body">
      <Container>
        <LoginContainer />
        <p className={css({ textStyle: 'sm' })}><Link href="/forgot-password">Trouble signing in?</Link></p>
      </Container>
    </Section>
  )
};