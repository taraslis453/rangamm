import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Pages } from './pages/index'
import { Header } from './shared/organisms/index'
import { GlobalStyles } from 'global-styles';
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
