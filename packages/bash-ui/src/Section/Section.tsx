import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@allowance/styled-system/jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva } from '@allowance/styled-system/css';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof sectionStyle> & {
  /**
   * Component content
   */
  children: React.ReactNode
}

export type SectionProps = BaseProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseProps>

const sectionStyle = cva({
  base: {
    boxSizing: 'border-box'
  },
  variants: {
    type: {
      'hero': {
        layerStyle: 'hero'
      },
      'main': {
        layerStyle: 'main'
      },
      'body': {
        layerStyle: 'body'
      }
    }
  }
});

const StyledSection = styled('section', sectionStyle);

export default function Section({
  type,
  children,
  ...rest
}: SectionProps) {
  return (
    <StyledSection type={type} {...rest}>
      {children}
    </StyledSection>
  )
};

Section.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}