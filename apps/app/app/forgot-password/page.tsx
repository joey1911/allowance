import {
  Section,
  Container
} from '@allowance/bash-ui';
import { ForgotPasswordContainer } from './components';

export default function Page() {
  return (
    <Section type="body">
      <Container>
        <ForgotPasswordContainer />
      </Container>
    </Section>
  )
};