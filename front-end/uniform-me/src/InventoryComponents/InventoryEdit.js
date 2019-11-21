import React from 'react'
import InventoryNew from './InventoryNew'
import fetchUrl from '../uniform-me-client'

class InventoryEdit extends React.Component {
    state={
        loading: true
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetchUrl(`inventory/${id}`).then((result) => {
            this.setState({
                url: `inventory/${id}/edit/`,
                item: result,
                loading: false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <div>Loading...</div>
                </div>
            )
        }
        return(
            <InventoryNew {...this.state.item} url={this.state.url} method="PUT" />
        )
    }
}

export default InventoryEdit