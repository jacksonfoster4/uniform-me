import React from 'react'
import RequestNew from './RequestNew'
import fetchUrl from '../uniform-me-client'

class RequestEdit extends React.Component {
    state={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`requests/${id}`).then((result) => {
            this.setState({
                url: `requests/${id}/edit/`,
                request: result
            })
        })
    }
    render(){
        console.log(this.state)
        return(
            <RequestNew {...this.state.request} url={this.state.url} method="PUT" />
        )
    }
}

export default RequestEdit