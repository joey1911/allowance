'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Trigger,
  type NavigationMenuTriggerProps
} from '@radix-ui/react-navigation-menu';
import { css } from '@allowance/styled-system/css';

interface NavbarTriggerProps extends NavigationMenuTriggerProps {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
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

const NavbarTrigger = ({
  children,
  ...rest
}: NavbarTriggerProps) => {
  return (
    <Trigger className={styles} {...rest}>
      {children}
    </Trigger>
  )
};

export default NavbarTrigger;

NavbarTrigger.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}