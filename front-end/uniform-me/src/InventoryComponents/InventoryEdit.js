import React from 'react'
import InventoryNew from './InventoryNew'
import fetchUrl from '../uniform-me-client'
import Loading from '../Loading'
import { withRouter } from 'react-router-dom'

class InventoryEdit extends React.Component {
    state={
        loading: true
    }
    delete = (item) => {
        if(window.confirm("Are you sure you want to delete this item?")){
            fetchUrl(`/inventory/${item.id}/delete/`, "DELETE").then( (result) => {
                this.props.history.replace('inventory')
                window.location.reload() }
            )
        } 
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
                <Loading />
            )
        }
        return(
            <div>
                <InventoryNew {...this.state.item} url={this.state.url} method="PUT" />
                <div className="mt-4 container">
                    <div className="pt-4 row">
                        <div className="col-md-12 text-left">
                            <button className="btn btn-sm btn-danger" onClick={() => this.delete(this.state.item)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(InventoryEdit)