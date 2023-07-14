import { defineConfig } from '@pandacss/dev';
import preset from '@pandacss/preset-panda';
import presetBash from '@allowance/bash-design';

export default defineConfig({
  presets: [
    presetBash,
    preset
  ],
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