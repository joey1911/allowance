import {
  Section,
  Container
} from '@allowance/bash-ui';
import LoginForm from '@/components/LoginForm';

export default function Page() {
  return (
    <Section type="body">
      <Container>
        <LoginForm />
      </Container>
    </Section>
  )
};