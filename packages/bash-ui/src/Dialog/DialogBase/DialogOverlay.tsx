import React, {
  type Ref
} from 'react';
import { Overlay } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  background: 'background.accent.gray.subtle',
  opacity: '.8',
  position: 'fixed',
  inset: 0,
  animation: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)'
});

const DialogOverlay = React.forwardRef(
  (_: unknown, forwardedRef: Ref<HTMLDivElement>) => <Overlay className={styles} ref={forwardedRef} />
);
DialogOverlay.displayName = 'Dialog Overlay';

export default DialogOverlay;