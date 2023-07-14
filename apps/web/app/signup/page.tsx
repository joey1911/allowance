import {
  Section,
  Container,
  Box
} from '@allowance/bash-ui';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';
import SignupContainer from '@/components/signup/SignupContainer'; // eslint-disable-line import/no-unresolved

export default function Page() {
  return (
    <>
      <Section type="main">
        <Container>
          <div className={flex({ direction: 'row', gap: 'lg' })}>
            <Box>
              <h1>Signup for Allowance</h1>
              <p>Ipsom</p>
            </Box>
            <Box>
              <SignupContainer />
            </Box>
          </div>
        </Container>
      </Section>
      <Section type="body">
        <Container>
          Why you should sign up
        </Container>
      </Section>
    </>
  )
};