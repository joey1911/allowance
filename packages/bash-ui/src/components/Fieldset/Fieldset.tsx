import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@allowance/styled-system/css';

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
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

const Fieldset = ({
  legend,
  children,
  ...rest
}: FieldsetProps) => {
  return (
    <fieldset className={styles} {...rest}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
};

export default Fieldset;

Fieldset.propTypes = {
  /**
   * Legend content
   */
  legend: PropTypes.string,
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}