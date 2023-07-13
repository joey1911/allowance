import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@allowance/styled-system/jsx';
import { cva } from '@allowance/styled-system/css';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof sectionStyle> & {
  /**
   * Component content
   */
  children: React.ReactNode
}

type SectionProps = BaseProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseProps>

const sectionStyle = cva({
  base: {
    boxSizing: 'border-box',
    background: 'transparent'
  },
  variants: {
    type: {
      'hero': {
        background: 'sectionHeroBackground',
        color: 'sectionHeroColor'
      },
      'main': {
        background: 'sectionMainBackground'
      },
      'body': {
        background: 'sectionBodyBackground'
      }
    }
  }
});

const StyledSection = styled('section', sectionStyle);

const Section = ({
  type,
  children,
  ...rest
}: SectionProps) => {
  return (
    <StyledSection type={type} {...rest}>
      {children}
    </StyledSection>
  )
};

export default Section;

Section.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}