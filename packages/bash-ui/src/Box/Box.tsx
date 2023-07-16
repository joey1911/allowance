import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@allowance/styled-system/jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
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

export type BoxProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps>

const boxStyle = cva({
  base: {
    boxSizing: 'border-box'
  },
  variants: {
    type: {
      announcementBar: {
        background: 'background.accent.blue.subtlest',
        color: 'text',
        padding: 'xs',
        fontSize: 'md',
        fontWeight: '500'
      }
    }
  }
});

const StyledBox = styled('div', boxStyle);

export default function Box({
  type,
  className,
  children,
  ...rest
}: BoxProps) {
  return (
    <StyledBox type={type} className={className} {...rest}>
      {children}
    </StyledBox>
  )
};

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

Box.defaultProps = {
  className: ''
}