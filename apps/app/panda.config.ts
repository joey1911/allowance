import { defineConfig } from '@pandacss/dev'
import {
  GlobalCss,
  TokensColors,
  TokensSpacing,
  SemanticTokensColors,
  Recipes,
  textStyles
} from '@allowance/bash-design';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  
  // Where to look for your css declarations
  include: [
    "./node_modules/@allowance/bash-design/src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@allowance/bash-ui/src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],

  // Files to exclude
  exclude: [],

  // Global CSS
  globalCss: GlobalCss,

  // Useful for theme customization
  theme: {
    textStyles,
    extend: {
      keyframes: {
        enterFromRight: {
          '0%': {
            transform: 'translateX(200px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        enterFromLeft: {
          '0%': {
            transform: 'translateX(-200px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        exitToRight: {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateX(200px)',
            opacity: 0
          }
        },
        exitToLeft: {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateX(-200px)',
            opacity: 0
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        scaleIn: {
          '0%': {
            transform: 'rotateX(-30deg) scale(0.9)',
            opacity: 0
          },
          '100%': {
            transform: 'rotateX(0deg) scale(1)',
            opacity: 1
          }
        },
        scaleOut: {
          '0%': {
            transform: 'rotateX(0deg) scale(1)',
            opacity: 1
          },
          '100%': {
            transform: 'rotateX(-10deg) scale(0.95)',
            opacity: 0
          }
        }
      },
      tokens: {
        colors: TokensColors,
        spacing: TokensSpacing
      },
      semanticTokens: {
        colors: SemanticTokensColors
      },
      recipes: Recipes
    }
  },

  // Enable JSX Support (styled)
  jsxFramework: "react",

  // The output directory for your css system
  emitPackage: true,
  outdir: "@allowance/styled-system"
});