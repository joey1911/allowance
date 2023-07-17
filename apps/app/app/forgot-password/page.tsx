import {
  Section,
  Container
} from '@allowance/bash-ui';
import ForgotPasswordForm from '@/components/ForgotPasswordForm'; // eslint-disable-line import/no-unresolved

export default function Page() {
  return (
    <Section type="body">
      <Container>
        <h1>Forgot Password?</h1>
        <p>Enter the email address associated with your account, and we&apos;ll send you a link to reset your password. If you do not receive an email within a few minutes, try checking your spam or junk folder.</p>
        <ForgotPasswordForm />
      </Container>
    </Section>
  )
};