import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './HomeComponents/Home';
import Inventory from './InventoryComponents/Inventory';
import Employees from './EmployeeComponents/Employees';
import Requests from './RequestComponents/Requests';
import NotFound from './NotFound'

function Core() {
    return (
        <div>
            <Header />
            <div className="container px-5 pt-2">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/inventory" component={Inventory} />
                    <Route path="/employees" component={Employees} />
                    <Route path="/requests" component={Requests} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    );
  }
  
  export default Core;