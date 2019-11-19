import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'

class RequestDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`requests/${id}`).then( (result) => {
            this.setState({request: result})
        })
    }
    render(){
        return (
            <div>
                { this.state.request ?
                    <div>
                        {this.state.request['date']} - 
                        {this.state.request['employee']['name']} - 
                        {this.state.request['item']['name'] } - 
                        {this.state.request['item']['quantity'] } - 
                    </div>
                    : null
                }
            </div>
        )
    }
}
export default RequestDetail