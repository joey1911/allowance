import { CaretDownIcon } from '@radix-ui/react-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from '@allowance/styled-system/css';

const styles = css({
  position: 'relative',
  color: 'violet.100',
  top: '1',
  transition: 'transform 250ms ease',
  '[data-state=open] &': {
    transform: 'rotate(-180deg)'
  }
});

export default function NavbarCaratIcon() {
  return <CaretDownIcon className={styles} />
};