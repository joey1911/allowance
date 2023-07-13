import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@allowance/styled-system/css';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Component content
   */
  children: React.ReactNode,
}

const styles = css({
  background: 'white',
  padding: 'sm'
});

const Header = ({
  children,
  ...rest
}: HeaderProps) => {
  return (
    <header className={styles} {...rest}>
      {children}
    </header>
  )
};

export default Header;

Header.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}