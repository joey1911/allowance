import type { Config } from '@pandacss/types';
import semanticColors from './tokens/colors.semantic';
import spacing from './tokens/spacing';
import buttonRecipe from "./recipes/button.recipe";
import checkStyleInputRecipe from './recipes/checkStyleInput.recipe';
import globalCss from './tokens/global';
import textStyles from './tokens/text-styles';
import keyframes from './tokens/keyframes';

const definePreset = <T extends Config>(config: T) => config;

const presetBash = definePreset({
  globalCss,
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  },
  theme: {
    textStyles,
    extend: {
      keyframes,
      tokens: {
        spacing
      },
      semanticTokens: {
        colors: semanticColors,
      },
      recipes: {
        button: buttonRecipe,
        checkStyleInput: checkStyleInputRecipe
      },
    },
  },
});

export default presetBash;