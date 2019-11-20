import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

class EmployeeList extends React.Component {
    state = {}
    componentDidMount(){
        fetchAuthedUrl("employees").then( (result) => {
            this.setState({employees: result})
        })
    }
    render(){
        return (
            <div>
            { this.state.employees ? 
                this.state.employees.map( (employee) => { return(
                    <div><Link to={`/employees/${employee['id']}`}>
                        {employee['name']} - {employee['role']}
                    </Link><br></br></div>
                )})
                : null}
                <br></br>
                <Link to="employees/new">Create New Employee</Link>
            </div>
            
        );
    }
  }
  
  export default EmployeeList;