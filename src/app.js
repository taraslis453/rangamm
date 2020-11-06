import React from 'react'
import {Pages} from './pages/index'
import {Header} from './shared/organisms/index'
import {GlobalStyles} from 'global-styles'
import {ThemeProvider} from 'styled-components'
import {theme} from 'theme'
import {Provider} from 'react-redux'
import {store} from './store'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Pages />
      </ThemeProvider>
    </Provider>
  )
}

export default App
