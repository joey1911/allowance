import {
  Section,
  Container
} from '@allowance/bash-ui';
import LoginForm from '@/components/LoginForm';
import { Client } from '@allowance/slade';

export default async function Page() {
  const ApiClient = new Client(process.env.NEXT_MARQETA_API_URL, process.env.NEXT_MARQETA_APPLICATION_TOKEN, process.env.NEXT_MARQETA_ACCESS_TOKEN);
  console.log(ApiClient);
  /*
  const results = ApiClient.makeRequest('cardproducts?sort_by=-lastModifiedTime', 'get');
  console.log(results);
  */
  return (
    <>
      <Section type="body">
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  )
};