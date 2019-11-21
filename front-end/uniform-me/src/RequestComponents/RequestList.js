import React from 'react';
import fetchUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'
import Loading from '../Loading'
import NotFound from '../NotFound'

class RequestList extends React.Component {
    state = {
        loading: true
    }
    componentDidMount(){
        fetchUrl("requests").then( (result) => {
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
                    this.state.requests.map( (request) => { return(
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-heading text-left">{ request['item']['name']} - {request['quantity']}
                                        { request['item']['need_to_reorder'] ? <span class="badge card-text ml-2 badge-danger">REORDER</span> : null}
                                    </h5>
                                    <p className="card-text text-left"><strong>Request by: </strong>{request['employee']['name']}</p>
                                    <p className="card-text text-left"><strong>Date: </strong>{request['date']}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <Link to={`/requests/${request['id']}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                        <Link to={`/requests/${request['id']}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
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
  
  export default RequestList;