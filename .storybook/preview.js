import { GlobalStyles } from '../src/global-styles'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme'
import React from 'react';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
}

addDecorator(render => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>
      {render()}
    </div>

  </ThemeProvider>
))