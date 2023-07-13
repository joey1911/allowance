import PropTypes from 'prop-types';
import { css } from '@allowance/styled-system/css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Component content
   */
  children: React.ReactNode
}

const styles = css({
  textStyle: 'label'
});

const Label = ({
  children,
  ...rest
}: LabelProps) => {
  return <label className={styles} {...rest}>{children}</label>
};

export default Label;

Label.propTypes = {
  /**
   * Input that the label belongs to
   */
  htmlFor: PropTypes.string,
  /**
   * Component contents
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]
  ).isRequired
}