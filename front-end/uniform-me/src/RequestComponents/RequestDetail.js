import React from 'react'
import fetchAuthedUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'

class RequestDetail extends React.Component {
    state ={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`requests/${id}`).then( (result) => {
            this.setState({
                id: id,
                request: result
            })
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
                        {this.state.request['quantity'] } - 
                    </div>
                    : null
                }
                <br></br>
                <Link to={`${this.state.id}/edit`}>Edit Item</Link>
            </div>
        )
    }
}
export default RequestDetail