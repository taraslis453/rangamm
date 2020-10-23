import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom'
import { Pages } from './pages/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
