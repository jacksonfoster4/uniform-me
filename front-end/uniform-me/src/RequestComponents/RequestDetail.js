import React from 'react'
import fetchUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound'
import Loading from '../Loading'

class RequestDetail extends React.Component {
    state = {
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`requests/${id}`).then( (result) => {
            this.setState({
                id: id,
                request: result,
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
                { this.state.request ?
                    <div>
                        {this.state.request['date']} - 
                        {this.state.request['employee']['name']} - 
                        {this.state.request['item']['name'] } - 
                        {this.state.request['quantity'] }
                        <br></br>
                        <Link to={`${this.state.id}/edit`}>Edit Item</Link>
                    </div>
                    : <NotFound />
                }
                
            </div>
        )
    }
}
export default RequestDetail