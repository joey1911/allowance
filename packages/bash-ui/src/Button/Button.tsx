import React, {
  PropsWithChildren
} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@allowance/styled-system/jsx';
import { cva } from '@allowance/styled-system/css';

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  /**
   * Button Variant
   */
  variant: 'primary' | 'secondary' | 'warning',
  /**
   * Size of the Button
   */
  size: 'sm' | 'md' | 'lg',
  /**
   * Component content
   */
  children: React.ReactNode,
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const buttonStyle = cva({
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    color: "stone.800",
    bg: "stone.50",
    lineHeight: "1",
    borderRadius: "lg",
    _hover: {
      bg: "red.400"
    }
  },
  compoundVariants: [],
  variants: {
    variant: {
      primary: { color: "stone.100", bg: "green.500" },
      secondary: {
        color: "stone.800",
        bg: "stone.100",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
      },
      warning: {
        color: "text.warning",
        bg: "background.warning",
        _hover: {
          bg: "background.warning.hovered"
        }
      }
    },
    size: {
      sm: {
        padding: "2",
        fontSize: "sm"
      },
      md: {
        padding: "4",
        fontSize: "md"
      },
      lg: {
        padding: "6",
        fontSize: "lg"
      }
    }
  }
});

const StyledButton = styled('button', buttonStyle);

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
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