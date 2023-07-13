import { defineTokens } from '@pandacss/dev';

export const spacing = defineTokens.spacing({
  xs: {
    value: '{spacing.1.5}'
  },
  sm: {
    value: '{spacing.3.5}'
  },
  md: {
    value: '{spacing.6}'
  },
  lg: {
    value: '{spacing.10}'
  },
  xl: {
    value: '{spacing.16}'
  }
});