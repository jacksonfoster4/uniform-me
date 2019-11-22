import React from 'react';
import fetchUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'
import Loading from '../Loading'

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
                    <Loading />
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                    { this.state.employees ? 
                    this.state.employees.map( (employee) => { return(
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-heading text-left">{ employee['name']}
                                        { employee['requests'].length ? <span class="badge card-text badge-danger">REQUESTS</span> : null}
                                    </h5>
                                    <p className="card-text text-left"><strong>Role: </strong>{employee['role']}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <Link to={`/employees/${employee['id']}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                        <Link to={`/employees/${employee['id']}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )})
                        : null }
                    </div>
                </div>
            </div>        
        );
    }
  }
  
  export default EmployeeList;