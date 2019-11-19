import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'

class Requests extends React.Component {
    state ={}
    componentDidMount(){
        fetchAuthedUrl("requests", "GET").then( (result) => {
            this.setState({requests: result})
        })
    }
    render(){
        return (
            <div>
            { this.state.requests ? 
                this.state.requests.map( (request) => { return(
                    <div>
                        {request['employee']['name']} | {request['quantity']} {request['item']['name']}s
                    </div>    
                )})
                : null}
            </div>
        );
    }
  }
  
  export default Requests;