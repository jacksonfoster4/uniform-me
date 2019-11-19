import React from 'react';
import EmployeeList from './EmployeeList'
import EmployeeDetail from './EmployeeDetail'

import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
class Employees extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/employees/:id" component={EmployeeDetail} />
                        <Route path="/employees" component={EmployeeList} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        );
    }
  }
  
  export default withRouter(Employees);