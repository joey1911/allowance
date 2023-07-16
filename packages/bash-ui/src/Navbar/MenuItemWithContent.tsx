import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarItem,
  NavbarTrigger,
  NavbarCaratIcon,
  NavbarContent
} from './NavbarBase';

export interface MenuItemWithContentProps {
  /**
   * Menu item title
   */
  menuItemTitle: string,
  /**
   * Submenu item content component
   */
  content: React.ReactNode
}

export default function MenuItemWithContent({
  menuItemTitle,
  content
}: MenuItemWithContentProps) {
  return (
    <NavbarItem>
      <NavbarTrigger>
        {menuItemTitle} <NavbarCaratIcon aria-hidden />
      </NavbarTrigger>
      <NavbarContent>
        {content}
      </NavbarContent>
    </NavbarItem>
  )
};

MenuItemWithContent.propTypes = {
  /**
   * Menu item title
   */
  menuItemTitle: PropTypes.string.isRequired,
  /**
   * Submenu item content component
   */
  content: PropTypes.element.isRequired
}