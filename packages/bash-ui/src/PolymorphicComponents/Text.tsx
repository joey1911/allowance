import React from 'react';
import {
  type PolymorphicProps,
  type PolymorphicPropsWithRef,
  type PolymorphicRef
} from '../types';

type TextProps<C extends React.ElementType> = PolymorphicPropsWithRef<C>

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>({
    as,
    children,
    ...restProps
  }: PolymorphicProps<C, TextProps<C>>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    return <Component {...restProps} ref={ref}>{children}</Component>;
  }
);

export default Text;