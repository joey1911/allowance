'use client'

import { Indicator } from '@radix-ui/react-navigation-menu';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const indicatorStyles = css({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: 'fadeIn 200ms ease' },
  '&[data-state="hidden"]': { animation: 'fadeOut 200ms ease' }
});

const indicatorArrowStyles = css({
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2
});

export default function NavbarIndicator() {
  return (
    <Indicator className={indicatorStyles}>
      <div className={indicatorArrowStyles} />
    </Indicator>
  );
};