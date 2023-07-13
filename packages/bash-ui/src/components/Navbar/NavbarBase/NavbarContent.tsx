'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  type NavigationMenuContentProps
} from '@radix-ui/react-navigation-menu';
import { css } from '@allowance/styled-system/css';

interface NavbarContentProps extends NavigationMenuContentProps {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': {
    width: 'auto'
  },
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': {
    animationName: 'enterFromLeft'
  },
  '&[data-motion="from-end"]': {
    animationName: 'enterFromRight'
  },
  '&[data-motion="to-start"]': {
    animationName: 'exitToLeft'
  },
  '&[data-motion="to-end"]': {
    animationName: 'exitToRight'
  }
});

const NavbarContent = ({
  children,
  ...rest
}: NavbarContentProps) => {
  return (
    <Content className={styles} {...rest}>
      {children}
    </Content>
  )
};

export default NavbarContent;

NavbarContent.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}