import { CaretDownIcon } from '@radix-ui/react-icons';
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

const NavbarCaratIcon = () => {
  return <CaretDownIcon className={styles} />
};

export default NavbarCaratIcon;