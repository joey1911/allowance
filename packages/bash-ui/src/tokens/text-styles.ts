import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  h1: {
    description: 'H1 Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '600',
      fontSize: '5xl',
      lineHeight: '4.25rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  h2: {
    description: 'H2 Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '600',
      fontSize: '4xl',
      lineHeight: '3.75rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  h3: {
    description: 'H3 Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '500',
      fontSize: '3xl',
      lineHeight: '3.25rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  h4: {
    description: 'H4 Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '400',
      fontSize: '2xl',
      lineHeight: '2.75rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  base: {
    description: 'P Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '400',
      fontSize: 'lg',
      lineHeight: '1.25rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  sm: {
    description: 'P Font style - Small',
    value: {
      fontFamily: 'sans',
      fontWeight: '400',
      fontSize: 'md',
      lineHeight: '1.50rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  },
  label: {
    description: 'Label Font style',
    value: {
      fontFamily: 'sans',
      fontWeight: '500',
      fontSize: 'md',
      lineHeight: '1.50rem',
      letterSpacing: '0px',
      textDecoration: 'none',
      textTransform: 'none'
    }
  }
});