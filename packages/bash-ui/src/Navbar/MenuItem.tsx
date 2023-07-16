import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarItem,
  NavbarLink
} from './NavbarBase';

export interface MenuItemProps {
  /**
   * Next/Link component
   */
  linkItem: React.ReactNode
}

export default function MenuItem({
  linkItem
}: MenuItemProps) {
  return (
    <NavbarItem>
      <NavbarLink asChild>
        {linkItem}
      </NavbarLink>
    </NavbarItem>
  )
};

MenuItem.propTypes = {
  /**
   * Next/Link component
   */
  linkItem: PropTypes.element.isRequired
}