import {
  Section,
  Container
} from '@allowance/bash-ui';
import { ForgotPasswordContainer } from './components';

export default function Page() {
  return (
    <Section type="body">
      <Container>
        <h1>Forgot Password?</h1>
        <p>Enter the email address associated with your account, and we&apos;ll send you a link to reset your password.</p>
        <ForgotPasswordContainer />
      </Container>
    </Section>
  )
};