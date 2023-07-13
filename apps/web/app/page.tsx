import {
  Section,
  Container
} from '@allowance/bash-ui';
import { css } from '@allowance/styled-system/css';
import { flex } from '@allowance/styled-system/patterns';

export default function Page() {
  return (
    <>
      <Section type="hero">
        <Container>
          <h1>Hero Value Prop</h1>
        </Container>
      </Section>
      <Section type="body">
        <Container>
          <div className={flex({ direction: 'column', gap: '8' })}>
            <Section>
              <div>
                <h1>Title Header Native</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </Section>
            <Section>
              Normal Section 2
              <img src="https://placehold.co/600x400" />
            </Section>
            <Section>
              <h1>Typography</h1>
              <h1>The little brown fox (H1)</h1>
              <h2>The little brown fox (H2)</h2>
              <h3>The little brown fox (H3)</h3>
              <h4>The little brown fox (H4)</h4>
              <p>The little brown fox (p)</p>
              <p className={css({ textStyle: 'sm' })}>The little brown fox (p.sm)</p>
            </Section>
          </div>
        </Container>
      </Section>
    </>
  )
};