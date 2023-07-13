import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarItem,
  NavbarLink
} from './NavbarBase';

interface MenuItemProps {
  /**
   * Next/Link component
   */
  linkItem: React.ReactNode
}

const MenuItem = ({
  linkItem
}: MenuItemProps) => {
  return (
    <NavbarItem>
      <NavbarLink asChild>
        {linkItem}
      </NavbarLink>
    </NavbarItem>
  )
};

export default MenuItem;

MenuItem.propTypes = {
  /**
   * Next/Link component
   */
  linkItem: PropTypes.element.isRequired
}