import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom'
import { Pages } from './pages/index'
import { Header } from './shared/organisms/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
