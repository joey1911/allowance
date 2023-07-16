import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  textStyle: 'label'
});

export default function Label({
  children,
  ...rest
}: LabelProps) {
  return <label className={styles} {...rest}>{children}</label>
};

Label.propTypes = {
  /**
   * Component contents
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}