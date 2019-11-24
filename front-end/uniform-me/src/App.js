import React from 'react';
import Core from './Core'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './LoginComponents/Login'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute component={Core} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
