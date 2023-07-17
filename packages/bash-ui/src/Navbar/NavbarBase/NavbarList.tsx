'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  type NavigationMenuListProps
} from '@radix-ui/react-navigation-menu';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@allowance/styled-system/jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
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

export type NavbarListProps = BaseProps & Omit<NavigationMenuListProps, keyof BaseProps>

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

export default function NavbarList({
  menuOrientation = 'horizontal',
  children,
  ...rest
}: NavbarListProps) {
  return (
    <StyledNavbarList menuOrientation={menuOrientation} {...rest}>
      {children}
    </StyledNavbarList>
  )
};

NavbarList.propTypes = {
  /**
   * Horizontal or vertical navbar
   */
  menuOrientation: PropTypes.oneOf(['horizontal', 'vertical']), // eslint-disable-line react/require-default-props
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}