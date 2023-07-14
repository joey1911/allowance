import React from 'react';
import { css } from '@allowance/styled-system/css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const styles = css({
  background: 'inputBackground',
  borderBottom: '1px solid token(colors.inputBorder)',
  padding: 'sm'
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    type,
    ...rest
  }, forwardedRef) => {
    return (
      <input type={type} className={styles} ref={forwardedRef} {...rest} />
    )
  }
);

export default Input;