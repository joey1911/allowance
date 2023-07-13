import React from 'react';
import PropTypes from 'prop-types';
import { container } from '@allowance/styled-system/patterns';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

const Container = ({
  children,
  ...rest
}: ContainerProps) => {
  return (
    <div className={container()} {...rest}>
      {children}
    </div>
  )
};

export default Container;

Container.propTypes = {
  /**
   * Child elements
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}