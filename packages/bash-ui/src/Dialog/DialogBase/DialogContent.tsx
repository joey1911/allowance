import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '@radix-ui/react-dialog';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  background: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  '&:focus': {
    outline: 'none'
  }
});

export default function DialogContent({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Content className={styles}>{children}</Content>
  )
};

DialogContent.propTypes = {
  /**
   * Component content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}