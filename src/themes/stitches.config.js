import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red400: '#FF3333',
      blue200: '#1D84B5',
      pink300: '#FF1654',
      gray300: '#30343F',
      gray500: '#1F1F1F',
    },
  },
  media: {
    bp1: '(min-width: 720px)',
    bp2: '(min-width: 900px)',
  },
})
