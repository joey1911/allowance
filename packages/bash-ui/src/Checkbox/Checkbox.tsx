import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { checkStyleInput } from '@allowance/styled-system/recipes';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof checkStyleInput> & {
  /**
   * Input's label content
   */
  label: string
}

export type CheckboxProps = BaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseProps>

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    highlighted,
    disabled,
    label,
    ...rest
  }, forwardedRef) => (
    <label className={checkStyleInput({ inputType: 'checkbox', highlighted, disabled })}>
      <input type="checkbox" {...rest} ref={forwardedRef} />
      <span>{label}</span>
    </label>
  )
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;