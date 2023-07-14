import { defineConfig } from '@pandacss/dev';
import preset from '@allowance/bash-design';

export default defineConfig({
  presets: [
    preset
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
    }
  },

  // Enable JSX Support (styled)
  jsxFramework: 'react',

  // The output directory for your css system
  emitPackage: true,
  outdir: '@allowance/styled-system'
});