import React from 'react'
import InventoryNew from './InventoryNew'
import fetchAuthedUrl from '../uniform-me-client'

class InventoryEdit extends React.Component {
    state={}
    componentDidMount(){
        let id = this.props.match.params.id
        fetchAuthedUrl(`inventory/${id}`).then((result) => {
            this.setState({
                url: `inventory/${id}/edit/`,
                item: result
            })
        })
    }
    render(){
        return(
            <InventoryNew {...this.state.item} url={this.state.url} method="PUT" />
        )
    }
}

export default InventoryEdit