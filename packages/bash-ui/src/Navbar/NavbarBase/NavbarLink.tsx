'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  type NavigationMenuLinkProps
} from '@radix-ui/react-navigation-menu';
import { css } from '@allowance/styled-system/css';

interface NavbarLinkProps extends NavigationMenuLinkProps {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  display: 'block',
  textDecoration: 'none',
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  lineHeight: 1,
  borderRadius: 4,
  color: 'primary',
  '&:focus': {
    boxShadow: '0 0 0 2px token(colors.violet.700)'
  },
  '&:hover': {
    background: 'background.accent.blue.subtlest'
  }
});

const NavbarLink = ({
  children,
  ...rest
}: NavbarLinkProps) => {
  return (
    <Link className={styles} {...rest}>
      {children}
    </Link>
  )
};

export default NavbarLink;

NavbarLink.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}