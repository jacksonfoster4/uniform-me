import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import NotFound from '../NotFound'

class InventoryDetail extends React.Component {
    state ={
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`inventory/${id}`).then( (result) => {
            this.setState({
                id: id,
                item: result,
                loading: false
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
                { this.state.item ? 
                    <div className="container">
                        <div class="row">
                            <div class="col-md-6 text-left">
                                <div className="display-3 text-left">
                                    {this.state.item.name}
                                </div>
                                    <div className="display-4 d-inline">Size: { this.state.item.size ? this.state.item.size : null }</div><br></br>
                                    <h4 className="text-left">Qty: { this.state.item.quantity ? this.state.item.quantity : null }</h4>
                                    <h3 className="text-left d-inline">Reorder Point: </h3>{ this.state.item.reorder_point ? this.state.item.reorder_point : null }<br></br>
                                    { this.state.item.need_to_reorder ? <div className="badge badge-danger"><h3>Need To Reorder</h3><br></br></div>  : null }
                                    <h4 className="d-inline">Notes:</h4>{ this.state.item.notes ? <div className="d-inline"><p className="pl-3 d-inline">{this.state.item.notes}</p></div>  : null }
                                    <br></br><Link to={`/inventory/${this.state.item.id}/edit`} className="btn text-left mt-3 btn-secondary">Edit Item</Link>
                            </div>
                            <div class="col-md-6">
                            <div className="pb-4">
                            <h3 className="display-4">Requests</h3>
                            { this.state.item.requests.length ? 
                                <div>
                                    <table class="rounded table">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th scope="col">Active</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Employee</th>
                                        <th scope="col">Quantity</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      { this.state.item.requests.map( (request) => {return (
                                          <tr className="requests-table-row" onClick={ () => this.props.history.push(`/requests/${request.id}`)}>
                                            <td>{
                                            request.active ? 
                                            <span class="badge badge-pill badge-danger">Active</span>
                                            :
                                            <span class="badge badge-pill badge-success">Not Active</span>
                                            }</td>
                                            <td>{request.date}</td>
                                            <td>{request.employee.name}</td>
                                            <td>{request.quantity}</td>
                                          </tr>
                                      )})}
                                    </tbody>
                                  </table>
                                  </div>
                                : null}
                                <Link to="/requests/new" className="btn mt-3 btn-primary">New Request</Link>
                            </div>
                            <div className="pt-4">
                            { this.state.item.events.length ? 
                                <div>
                                    <h3 className="display-4">Activity</h3>
                                    <table class="rounded table">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Incoming/Outgoing</th>
                                        <th scope="col">Start Quantity</th>
                                        <th scope="col">End Quantity</th>
                                        <th scope="col">Change</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      { this.state.item.events.map( (event) => {return (
                                          <tr className="">
                                            <td>{event.date}</td>
                                            { 
                                            event.start_quantity > event.end_quantity ? 
                                            <td><span className="badge badge-warning">Outgoing</span></td> 
                                            : 
                                            <td><span className="badge badge-info">Incoming</span></td>
                                            }
                                            <td>{event.start_quantity}</td>
                                            <td>{event.end_quantity}</td>
                                            <td>{event.end_quantity - event.start_quantity}</td>
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

export default InventoryDetail