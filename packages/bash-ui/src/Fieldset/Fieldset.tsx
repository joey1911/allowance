import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Legend content
   */
  legend: string,
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  '& legend': {
    textStyle: 'label'
  }
});

export default function Fieldset({
  legend,
  children,
  ...rest
}: FieldsetProps) {
  return (
    <fieldset className={styles} {...rest}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
};

Fieldset.propTypes = {
  /**
   * Legend content
   */
  legend: PropTypes.string.isRequired,
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}