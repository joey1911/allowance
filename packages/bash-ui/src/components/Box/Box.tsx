'use client'

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@allowance/styled-system/jsx';
import { cva } from '@allowance/styled-system/css';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof boxStyle> & {
  /**
   * Add additional className values
   */
  className?: string,
  /**
   * Component content
   */
  children: React.ReactNode
}

type BoxProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps>

const boxStyle = cva({
  base: {
    boxSizing: 'border-box'
  },
  variants: {
    type: {
      announcementBar: {
        background: 'accent',
        color: 'accentContrast',
        padding: 'xs',
        fontSize: 'md',
        fontWeight: '500'
      }
    }
  }
});

const StyledBox = styled('div', boxStyle);

const Box = ({
  type,
  className,
  children,
  ...rest
}: BoxProps) => {
  return (
    <StyledBox type={type} className={className} {...rest}>
      {children}
    </StyledBox>
  )
};

export default Box;

Box.propTypes = {
  /**
   * Add additional className values
   */
  className: PropTypes.string,
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}