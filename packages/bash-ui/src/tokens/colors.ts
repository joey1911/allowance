import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  brand: {
    value: '{colors.cyan.300}'
  },
  primary: {
    value: '{colors.sky.700}'
  },
  secondary: {
    value: '{colors.sky.200}'
  },
  accent: {
    value: '{colors.fuchsia.500}'
  },
  accentContrast: {
    value: '{colors.fuchsia.100}'
  },
  /**
   * Section Colors
   */
  sectionHeroBackground: {
    value: '{colors.stone.800}'
  },
  sectionHeroColor: {
    value: '{colors.stone.200}'
  },
  sectionMainBackground: {
    value: '{colors.slate.500}'
  },
  sectionBodyBackground: {
    value: '{colors.slate.200}'
  },
  /**
   * Form Element Styles
   */
  inputBackground: {
    value: '{colors.sky.200}'
  },
  inputBorder: {
    value: '{colors.sky.600}'
  }
});