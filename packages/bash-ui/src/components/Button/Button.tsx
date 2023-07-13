import React from 'react';
import PropTypes from 'prop-types';
import { button } from '@allowance/styled-system/recipes';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof button> & {
  /**
   * Component content
   */
  children: React.ReactNode
}

type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>

const Button = ({
  size,
  color,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={button({ size, color, disabled })} {...rest}>
      {children}
    </button>
  )
};

export default Button;

Button.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}