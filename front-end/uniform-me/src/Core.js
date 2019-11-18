import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './HomeComponents/Home';
import Inventory from './InventoryComponents/Inventory';
import Employees from './EmployeeComponents/Employees';
import Requests from './RequestComponents/Requests';
import User from './UserComponents/User';

function Core() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Route path="/home" component={Home}/>
                <Route path="/inventory" component={Inventory} />
                <Route path="/employee" component={Employees} />
                <Route path="/requests" component={Requests} />
                <Route path="/user" component={User} />
            </BrowserRouter>
        </div>
    );
  }
  
  export default Core;