'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  type NavigationMenuProps
} from '@radix-ui/react-navigation-menu';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@allowance/styled-system/jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  cva,
  type RecipeVariantProps
} from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof navbarRootStyle> & {
  /**
   * Menu Placement
   */
  menuPlacement: 'right' | 'left',
  /**
   * Component content
   */
  children: React.ReactNode
}

export type NavbarRootProps = BaseProps & Omit<NavigationMenuProps, keyof BaseProps>

const navbarRootStyle = cva({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1  
  },
  variants: {
    menuPlacement: {
      right: {
        justifyContent: 'flex-end',
        flexBasis: '100%'
      },
      left: {
        justifyContent: 'flex-start',
        flexShrink: 0
      }
    }
  }
});

const StyledNavbarRoot = styled(Root, navbarRootStyle);

export default function NavbarRoot({
  menuPlacement = 'right',
  children,
  ...rest
}: NavbarRootProps) {
  return (
    <StyledNavbarRoot menuPlacement={menuPlacement} {...rest}>
      {children}
    </StyledNavbarRoot>
  )
};

NavbarRoot.propTypes = {
  /**
   * Navbar page placement
   */
  menuPlacement: PropTypes.oneOf(['left', 'right']).isRequired,
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}