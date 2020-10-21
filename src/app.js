import React from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Search } from './pages/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
