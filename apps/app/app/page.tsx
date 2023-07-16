import {
  Section,
  Container
} from '@allowance/bash-ui';
// import createSlade from '@allowance/slade';
import LoginForm from '@/components/LoginForm'; // eslint-disable-line import/no-unresolved

export default async function Page() {
  /*
  const sladeClient = createSlade(
    process.env['NEXT_MARQETA_API_URL'],
    process.env['NEXT_MARQETA_APPLICATION_TOKEN'],
    process.env['NEXT_MARQETA_ADMIN_ACCESS_TOKEN']
  );
  const results = await sladeClient.getUsers();
  console.log(results);
  */

  return (
    <Section type="body">
      <Container>
        <p>Testing Vercel Deploy</p>
        <LoginForm />
      </Container>
    </Section>
  )
};