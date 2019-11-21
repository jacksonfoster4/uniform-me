import React from 'react';
import fetchUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

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
                    <div>Loading...</div>
                    <br></br>
                    <Link to="requests/new">Create New Request</Link>
                </div>
            )
        }
        return (
            <div>
                { this.state.requests ? 
                    this.state.requests.map( (request) => { return(
                        <div>
                            <Link to={`/requests/${request['id']}`}>
                                { request['item']['name'] }
                            </Link><br></br>
                        </div>    
                    )})
                    : null }
                <br></br>
                <Link to="requests/new">Create New Request</Link>
            </div>
            
        );
    }
  }
  
  export default RequestList;