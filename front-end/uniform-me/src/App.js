import React from 'react';
import Core from './Core'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Login from './LoginComponents/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Core} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
