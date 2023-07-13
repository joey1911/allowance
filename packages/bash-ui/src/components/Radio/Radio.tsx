import React from 'react';
import { checkStyleInput } from '@allowance/styled-system/recipes';

import type { RecipeVariantProps } from '@allowance/styled-system/css';

type BaseProps = RecipeVariantProps<typeof checkStyleInput> & {
  /**
   * Input's label content
   */
  label: string
}

type RadioProps = BaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseProps>

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({
    highlighted,
    disabled,
    label,
    ...rest
  }, forwardedRef) => {
    return (
      <label className={checkStyleInput({ inputType: 'radio', highlighted, disabled })}>
        <input type="radio" {...rest} ref={forwardedRef} />
        <span>{label}</span>
      </label>
    )
  }
);

export default Radio;