import React from 'react';
import EmployeeList from './EmployeeList'
import EmployeeDetail from './EmployeeDetail'
import EmployeeNew from './EmployeeNew'
import EmployeeEdit from './EmployeeEdit'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class Employees extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <EmployeesHeading />
                    <Switch>
                        <Route exact path="/employees/new" component={EmployeeNew} />
                        <Route exact path="/employees/:id/edit" component={EmployeeEdit} />
                        <Route exact path="/employees/:id" component={EmployeeDetail} />
                        <Route path="/employees" component={EmployeeList} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        );
    }
  }
  
function EmployeesHeading(){
    return (
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading mb-4 ">Employees</h1>
                <Link to="/employees/new" className="btn btn-warning mx-2 mt-3">Create New Employee</Link>
                <Link to="/employees" className="btn btn-primary mx-2 mt-3">View All Employees</Link>
            </div>
        </section>
    )
}

  export default Employees;