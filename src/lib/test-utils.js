import React from 'react'
import {render} from '@testing-library/react'
import {theme} from '../theme'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import {store} from '../store'
import {Provider} from 'react-redux'
const AllTheProviders = ({children}) => {
  return (
    <div id='root'>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options})
export * from '@testing-library/react'

export {customRender as render}
