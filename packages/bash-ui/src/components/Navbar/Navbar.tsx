import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarRoot,
  NavbarList,
  NavbarIndicator,
  NavbarViewport
} from './NavbarBase';

interface NavbarProps {
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

const Navbar = ({
  menuItems,
  menuPlacement,
  menuAlignment
}: NavbarProps) => {
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

export default Navbar;

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