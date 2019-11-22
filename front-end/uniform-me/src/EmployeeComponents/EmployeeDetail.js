import React from 'react'
import fetchUrl from '../uniform-me-client'
import { Link, withRouter } from 'react-router-dom'
import NotFound from '../NotFound'
import Loading from '../Loading'

class EmployeeDetail extends React.Component {
    state ={
        loading: true,
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`employees/${id}`).then( (result) => {
            console.log(result)
            this.setState({
                id: id,
                employee: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <Loading />
            )
        }
        return (
            <div>
                { this.state.employee ? 
                    <div className="container">
                        <div class="row">
                            <div class="col-md-6 text-left">
                                <div className="display-3 text-left">
                                    {this.state.employee.name}
                                </div>
                                <div className="display-4 text-left">
                                    {this.state.employee.role}
                                </div>
                                    { this.state.employee.start_date ? <div className="display-4 text-left">{this.state.employee.start_date}</div> : null }
                                     { this.state.employee.start_date ? <div><h3>Role: </h3>{this.state.employee.start_date}</div> : null }
                                    { this.state.employee.size ? <div><h3>Size: </h3>{this.state.employee.size}</div>  : null }
                                <Link to={`/employees/${this.state.employee.id}/edit`} className="btn text-left mt-3 btn-secondary">Edit Employee</Link>
                            </div>
                            <div class="col-md-6">
                            <div className="">
                                { this.state.employee.requests.length ? 
                                <div>
                                    <h3 className="display-4">Requests</h3>
                                    <table class="rounded table">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th scope="col">Active</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Quantity</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      { this.state.employee.requests.map( (request) => {return (
                                          <tr className="requests-table-row" onClick={ () => this.props.history.push(`/requests/${request.id}`)}>
                                            <td>{
                                            request.active ? 
                                            <span class="badge badge-pill badge-danger">Active</span>
                                            :
                                            <span class="badge badge-pill badge-success">Not Active</span>
                                            }</td>
                                            <td>{request.date}</td>
                                            <td>{request.item.name}</td>
                                            <td>{request.quantity}</td>
                                          </tr>
                                      )})}
                                    </tbody>
                                  </table>
                                  </div>
                                : null}
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                : <NotFound />}
            </div>
        )
    }
}
export default withRouter(EmployeeDetail)