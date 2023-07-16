import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarRoot,
  NavbarList,
  NavbarIndicator,
  NavbarViewport
} from './NavbarBase';

export interface NavbarProps {
  /**
   * Set of menu items
   */
  menuItems: React.ReactNode,
  /**
   * Navbar layout placement
   */
  menuPlacement?: 'left' | 'right',
  /**
   * Horizontal or vertical navbar
   */
  menuAlignment?: 'horizontal' | 'vertical'
}

export default function Navbar({
  menuItems,
  menuPlacement = 'left',
  menuAlignment = 'horizontal'
}: NavbarProps) {
  return (
    <NavbarRoot menuPlacement={menuPlacement} orientation={menuAlignment}>
      <NavbarList menuOrientation={menuAlignment}>
        {menuItems}
        <NavbarIndicator />
      </NavbarList>
      <NavbarViewport />
    </NavbarRoot>
  )
};

Navbar.propTypes = {
  /**
   * Set of menu items
   */
  menuItems: PropTypes.element.isRequired,
  /**
   * Navbar layout placement
   */
  menuPlacement: PropTypes.oneOf(['left', 'right']),
  /**
   * Horizontal or vertical navbar
   */
  menuAlignment: PropTypes.oneOf(['horizontal', 'vertical']),
};

Navbar.defaultProps = {
  menuPlacement: 'right',
  menuAlignment: 'horizontal',
};