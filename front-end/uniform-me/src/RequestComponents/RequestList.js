import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
import {Link, withRouter} from 'react-router-dom'
import Loading from '../Loading'
import NotFound from '../NotFound'

class RequestList extends React.Component {
    state = {
        loading: true,
    }
    toggleActive = (request) => {
        this.setState({loading: true})
        let body = {...request}
        body['active'] = !request.active
        body['item'] = body['item']['id']
        body['employee'] = body['employee']['id']

        fetchAuthedUrl(`/requests/${request.id}/edit/`, "PUT", {...body, active: !request.active}).then( 
            fetchAuthedUrl("requests").then( (result) => {
                this.setState({
                    loading: false,
                    requests: result
                })
            })
        )
    }
    delete = (request) => {
        if(window.confirm("Are you sure you want to delete this request?")){
            fetchAuthedUrl(`/requests/${request.id}/delete/`, "DELETE").then(()=>{
                this.props.history.push("/requests")
                window.location.reload()}
            )
        } 
    }
    componentDidMount(){
        fetchAuthedUrl("requests").then( (result) => {
            this.setState({
                loading: false,
                requests: result
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
                    { this.state.requests ? 
                    (this.state.requests).map( (request) => { return(
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body text-left">
                                    <h5 className="card-heading text-left"><div className="mr-2 d-inline">{request['item']['name']}</div> 
                                        { request['item']['need_to_reorder'] ? <span class="badge card-text badge-danger">REORDER</span> : null}
                                        { request['active'] ? <div className="badge d-inline badge-danger">Active</div> : null }
                                    </h5>
                                    <p className="card-text pt-4 text-left"><strong>Quantity: </strong>{request['quantity']}</p>
                                    <p className="card-text text-left"><strong>Request by: </strong>{request['employee']['name']}</p>
                                    <p className="card-text text-left"><strong>Requested on: </strong>{request['date']}</p>
                                    <div className="d-flex justify-content-between align-items-left">
                                        <div className="btn btn-group">
                                        <Link to={`/requests/${request['id']}/edit`} className="btn btn-sm btn-secondary">Edit</Link>
                                        { request.active ? 
                                            <button onClick={ () => this.toggleActive(request) }className="btn btn-sm btn-primary">Fulfill</button>
                                            :
                                            <button onClick={ () => this.toggleActive(request) }className="btn btn-sm btn-warning">Make Active</button>
                                        }
                                        <button onClick={ () => this.delete(request) }className="btn btn-sm btn-danger">Delete</button>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )})
                        : <NotFound /> }
                    </div>
                </div>
            </div>        
        );
    }
  }
  
  export default withRouter(RequestList);