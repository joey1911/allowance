import React from 'react';
import {
  type PolymorphicProps,
  type PolymorphicPropsWithRef,
  type PolymorphicRef
} from '../types';

type BorderColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet"
  | "black"

type BorderVariant =
  | "solid"
  | "dotted"
  | "dashed"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden"

type BorderProps<C extends React.ElementType> = PolymorphicPropsWithRef<
  C,
  { color?: BorderColor; variant?: BorderVariant; width?: number }
>

type BorderComponent = <C extends React.ElementType = 'div'>(
  props: BorderProps<C>
) => React.ReactElement | null

const Border: BorderComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      as,
      children,
      width = 1,
      color = 'black',
      variant = 'solid',
      ...rest
    }: PolymorphicProps<C, BorderProps<C>>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div';

    const borderStyle = `${width}px ${variant} ${color}`;

    return (
      <Component {...rest} ref={ref} style={{ border: borderStyle }}>
        {children}
      </Component>
    )
  }
);


export default Border;