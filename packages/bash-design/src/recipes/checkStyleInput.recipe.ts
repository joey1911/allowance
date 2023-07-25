import type { RecipeConfig } from '@pandacss/types';

const defineRecipe = <T extends RecipeConfig>(config: T) => config;

const checkStyleInputRecipe = defineRecipe({
  name: 'checkStyleInput',
  description: 'The styles for checkbox and radio input',
  base: {
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '0.375em',
    '& input': {
      position: 'absolute',
      left: '-9999px',
      '&:checked + span': {
        '&:before': {
          boxShadow: 'inset 0 0 0 0.4375em token(colors.background.accent.blue.subtlest)'
        }
      }
    },
    '& span': {
      display: 'flex',
      alignItems: 'center',
      '&:before': {
        display: 'flex',
        flexShrink: '0',
        content: '""',
        background: 'white',
        width: '1.5em',
        height: '1.5em',
        marginRight: '0.375em',
        transition: '0.25s ease',
        boxShadow: 'inset 0 0 0 0.125em token(colors.background.accent.blue.subtlest)'
      }
    }
  },
  variants: {
    inputType: {
      checkbox: {
        '& span': {
          '&:before': {
            borderRadius: '0'
          }
        }
      },
      radio: {
        '& span': {
          '&:before': {
            borderRadius: '50%'
          }
        }
      }
    },
    highlighted: {
      true: {
        '& input': {
          '&:checked + span': {
            background: 'background.blue.subtlest'
          }
        },
        '& span': {
          padding: '0.375em 0.75em 0.375em 0.375em',
          borderRadius: '99em',
          transition: '0.25s ease',
          '&:hover': {
            background: 'sky.100'
          }
        }
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

export default checkStyleInputRecipe;