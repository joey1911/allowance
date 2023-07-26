import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@allowance/styled-system/jsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cva } from '@allowance/styled-system/css';
import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof buttonStyle> & {
  /**
   * Component content
   */
  children: React.ReactNode,
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>

const buttonStyle = cva({
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    color: "stone.800",
    bg: "button.primary",
    lineHeight: "1",
    borderRadius: "65px",
    _hover: {
      bg: "button.primary.hovered"
    }
  },
  compoundVariants: [],
  variants: {
    variant: {
      primary: { color: "text.white", bg: "button.primary" },
      secondary: {
        color: "text.black",
        bg: "button.secondary",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
        _hover: {
          bg: "button.primary",
          color: "text.white"
        }
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
        paddingTop: "11px",
        paddingBottom: "13px",
        paddingX: "17px",
        fontSize: "md"
      },
      lg: {
        paddingY: "11px",
        fontSize: "lg"
      }
    }
  }
});

const StyledButton = styled('button', buttonStyle);

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick = () => { },
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type="button" variant={variant} size={size} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

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
  onClick: PropTypes.func // eslint-disable-line react/require-default-props
}