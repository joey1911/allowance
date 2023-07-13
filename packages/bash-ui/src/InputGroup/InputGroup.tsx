import React from 'react';
import PropTypes from 'prop-types';
import { flex } from '@allowance/styled-system/patterns';

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

const InputGroup = ({
  children,
  ...rest
}: InputGroupProps) => {
  return (
    <div className={flex({ direction: 'column', gap: '0.5' })} {...rest}>
      {children}
    </div>
  )
};

export default InputGroup;

InputGroup.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}