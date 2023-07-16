import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from '@allowance/styled-system/patterns';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

export default function Container({
  children,
  ...rest
}: ContainerProps) {
  return (
    <div className={container()} {...rest}>
      {children}
    </div>
  )
};

Container.propTypes = {
  /**
   * Child elements
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}