import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const styles = css({
  display: 'block',
  width: '45px',
  height: '25px',
  cursor: 'pointer',
  position: 'relative',
  marginRight: '0.375em',
  '& input[type="checkbox"]': {
    display: 'none'
  },
  '& input[type="checkbox"]:checked + div': {
    background: 'background.accent.blue.subtlest'
  },
  '& input[type="checkbox"]:checked + div > div': {
    left: '23px'
  }
});

const trackStyle = css({
  background: '#ccc',
  position: 'absolute',
  borderRadius: '100px',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  transition: 'all 300ms ease'
});

const knobStyle = css({
  position: 'absolute',
  transition: 'all 300ms ease',
  width: '19px',
  height: '19px',
  borderRadius: '50%',
  left: '3px',
  top: '3px',
  background: '#fff'
});

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({
    label,
    ...rest
  }, forwardedRef) => (
    <div className={css({ display: 'flex' })}>
      <label className={styles}>
        <input type="checkbox" {...rest} ref={forwardedRef} />
        <div className={trackStyle}>
          <div className={knobStyle} />
        </div>
      </label>
      <div>{label}</div>
    </div>
  )
);
Switch.displayName = 'Switch'

export default Switch;