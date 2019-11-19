import React from 'react';
import Core from './Core'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './LoginComponents/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Core} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
