import React from 'react';
import PropTypes from 'prop-types';
import { Description } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  margin: '10px 0 20px',
  color: 'text.accent.purple',
  fontSize: 15,
  lineHeight: 1.5
});

export default function DialogDescription({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Description className={styles}>{children}</Description>
  )
};

DialogDescription.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}