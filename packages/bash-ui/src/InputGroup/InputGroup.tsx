import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { flex } from '@allowance/styled-system/patterns';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

export default function InputGroup({
  children,
  ...rest
}: InputGroupProps) {
  return (
    <div className={flex({ direction: 'column', gap: '0.5' })} {...rest}>
      {children}
    </div>
  )
};

InputGroup.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}