import React from 'react';

class Requests extends React.Component {
    state ={}
    componentDidMount(){
        fetch('http://192.168.1.138:8000/api/request').then(res => res.json()).then(
            (result) => {
                console.log(result)
                this.setState({requests: result})
                return result
            }
        )
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