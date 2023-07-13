import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  name: 'button',
  description: 'The styles for the Button component',
  base: {
    padding: '8px 14px',
    borderRadius: 'md',
    fontSize: 'md',
    fontWeight: 'bold',
    boxShadow: 'inset 0 0 0 1px token(colors.slate.700)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px token(colors.slate.800)',
    },
    '&:active': {
      background: 'slate.200',
      boxShadow: 'inset 0 0 0 1px token(colors.slate.800)',
    },
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px token(colors.slate.800), 0 0 0 1px token(colors.slate.800)',
    }
  },
  variants: {
    size: {
      small: {
        fontSize: '14px',
        padding: '4px 8px'
      },
      large: {
        fontSize: '18px',
        padding: '12px 24px'
      }
    },
    color: {
      primary: {
        backgroundColor: 'blue',
        color: 'white'
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black'
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed'
      }
    }
  }
});