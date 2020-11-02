import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Pages } from './pages/index'
import { Header } from './shared/organisms/index'
import { GlobalStyles } from 'global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Pages />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
