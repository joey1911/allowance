import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  margin: 0,
  fontWeight: 500,
  color: 'text.accent.purple',
  fontSize: '2xl',
  lineHeight: '1.25em'
});

export default function DialogTitle({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Title className={styles}>{children}</Title>
  )
};

DialogTitle.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}