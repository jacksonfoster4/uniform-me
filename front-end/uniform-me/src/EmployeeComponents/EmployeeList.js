import React from 'react';
import fetchUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

class EmployeeList extends React.Component {
    state = {
        loading: true
    }
    componentDidMount(){
        fetchUrl("employees").then( (result) => {
            this.setState({
                loading: false,
                employees: result
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <div>Loading...</div>
                    <br></br>
                    <Link to="employees/new">Create New Employee</Link>
                </div>
            )
        }
        return (
            <div>
                { this.state.employees ? 
                    this.state.employees.map( (employee) => { return(
                        <div><Link to={`/employees/${employee['id']}`}>
                            {employee['name']} - {employee['role']}
                        </Link><br></br></div>
                    )})
                    : null }
                <br></br>
                <Link to="employees/new">Create New Employee</Link>
            </div>
            
        );
    }
  }
  
  export default EmployeeList;