import type { Config } from '@pandacss/types';
import semanticColors from './tokens/colors.semantic';
import spacing from './tokens/spacing';
import checkStyleInputRecipe from './recipes/checkStyleInput.recipe';
import globalCss from './tokens/global';
import textStyles from './tokens/text-styles';
import layerStyles from './tokens/layer-styles';
import keyframes from './tokens/keyframes';

const definePreset = <T extends Config>(config: T) => config;

const presetBash = definePreset({
  globalCss,
  theme: {
    textStyles,
    layerStyles,
    extend: {
      keyframes,
      tokens: {
        spacing
      },
      semanticTokens: {
        colors: semanticColors,
      },
      recipes: {
        checkStyleInput: checkStyleInputRecipe
      },
    },
  },
});

export default presetBash;