import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'neutral.900',
    lineHeight: '1.5',
    textStyle: 'base'
  },
  'h1': {
    textStyle: 'h1'
  },
  'h2': {
    textStyle: 'h2'
  },
  'h3': {
    textStyle: 'h3'
  },
  'h4': {
    textStyle: 'h4'
  },
  'p': {
    marginBottom: '2'
  }
});