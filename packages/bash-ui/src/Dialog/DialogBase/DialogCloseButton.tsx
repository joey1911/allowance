import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'text.accent.purple',
  position: 'absolute',
  top: '10px',
  right: '10px',
  '&:hover': {
    background: 'background.accent.purple.subtler'
  },
  '&:focus': {
    boxShadow: '0 0 0 2px token(colors.background.accent.purple.subtle)'
  }
});

export default function DialogCloseButton({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Close className={styles}>{children}</Close>
  )
};

DialogCloseButton.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}