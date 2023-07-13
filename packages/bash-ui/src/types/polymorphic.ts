import React from 'react';

// Polymorphic prop "as"
type AsProp<C extends React.ElementType> = {
  as?: C;
};

/**
 * Omit props already defined in AsProp and the component's props.
 * 
 * Component props (P) + actual polymorphic prop "as" (AsProps)
 */
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

/**
 * Reusable type utility to define polymorphic component without refs
 */
export type PolymorphicProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// Type the "ref" prop for components with forwardRef
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];

/**
 * Reusable type utility to define polymorphic component with refs
 */
export type PolymorphicPropsWithRef<C extends React.ElementType, Props = {}> = PolymorphicProps<C, Props> & {
  ref?: PolymorphicRef<C>
};