import { Overlay } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  background: 'background.accent.gray.subtle',
  opacity: '.8',
  position: 'fixed',
  inset: 0,
  animation: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  zIndex: 999
});

export default function DialogOverlay() {
  return (
    <Overlay className={styles} />
  )
};