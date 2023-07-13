'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  type NavigationMenuProps
} from '@radix-ui/react-navigation-menu';
import { styled } from '@allowance/styled-system/jsx';
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

type NavbarRootProps = BaseProps & Omit<NavigationMenuProps, keyof BaseProps>

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

const NavbarRoot = ({
  menuPlacement = 'right',
  children,
  ...rest
}: NavbarRootProps) => {
  return (
    <StyledNavbarRoot menuPlacement={menuPlacement} {...rest}>
      {children}
    </StyledNavbarRoot>
  )
};

export default NavbarRoot;

NavbarRoot.propTypes = {
  /**
   * Navbar page placement
   */
  menuPlacement: PropTypes.oneOf(['left', 'right']),
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}