import {GlobalStyles} from '../src/global-styles'
import {addDecorator} from '@storybook/react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../src/theme'
import {store} from '../src/store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import React from 'react'
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
}

addDecorator(render => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>{render()}</div>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
))
