import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = css({
  background: 'background.input',
  borderBottom: '1px solid token(colors.border.bold)',
  padding: 'xs'
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    type,
    ...rest
  }, forwardedRef) => <input type={type} className={styles} ref={forwardedRef} {...rest} />
);
Input.displayName = 'Input';

export default Input;