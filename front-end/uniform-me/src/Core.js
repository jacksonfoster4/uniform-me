import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './HomeComponents/Home';
import Inventory from './InventoryComponents/Inventory';
import Employees from './EmployeeComponents/Employees';
import Requests from './RequestComponents/Requests';
import User from './UserComponents/User';
import NotFound from './NotFound'
import ProtectedRouter from './ProtectedRouter'

function Core() {
    return (
        <div>
            <ProtectedRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/inventory" component={Inventory} />
                    <Route path="/employees" component={Employees} />
                    <Route path="/requests" component={Requests} />
                    <Route path="/user" component={User} />
                    <Route component={NotFound} />
                </Switch>
            </ProtectedRouter>
        </div>
    );
  }
  
  export default Core;