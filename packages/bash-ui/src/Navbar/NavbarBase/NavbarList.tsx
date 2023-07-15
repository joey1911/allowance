'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  type NavigationMenuListProps
} from '@radix-ui/react-navigation-menu';
import { styled } from '@allowance/styled-system/jsx';
import {
  cva,
  type RecipeVariantProps
} from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof navbarListStyle> & {
  /**
   * Horizontal or vertical navbar
   */
  menuOrientation: 'horizontal' | 'vertical',
  /**
   * Component content
   */
  children: React.ReactNode
}

type NavbarListProps = BaseProps & Omit<NavigationMenuListProps, keyof BaseProps>

const navbarListStyle = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    padding: 4,
    borderRadius: 6,
    listStyle: 'none',
    margin: 0
  },
  variants: {
    menuOrientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      }
    }
  }
});

const StyledNavbarList = styled(List, navbarListStyle);

const NavbarList = ({
  menuOrientation = 'horizontal',
  children,
  ...rest
}: NavbarListProps) => {
  return (
    <StyledNavbarList menuOrientation={menuOrientation} {...rest}>
      {children}
    </StyledNavbarList>
  )
};

export default NavbarList;

NavbarList.propTypes = {
  /**
   * Horizontal or vertical navbar
   */
  menuOrientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}