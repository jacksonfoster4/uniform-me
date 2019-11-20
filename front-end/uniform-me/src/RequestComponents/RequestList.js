import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

class RequestList extends React.Component {
    state = {}
    componentDidMount(){
        fetchAuthedUrl("requests").then( (result) => {
            this.setState({requests: result})
        })
    }
    render(){
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
                : null}
            </div>
            
        );
    }
  }
  
  export default RequestList;