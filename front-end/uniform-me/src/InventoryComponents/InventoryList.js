import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import NotFound from '../NotFound'

class InventoryList extends React.Component {
    state = {
        loading:true
    }
    componentDidMount(){
        fetchAuthedUrl("inventory").then( (result) => {
            this.setState({
                loading: false,
                items: result
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div>
                    <Loading />
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                    { this.state.items ? 
                    this.state.items.map( (item) => { return(
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-heading text-left">{ item['name']} { item['size'] ? <span>- {item['size']}</span>: null}
                                        { item['need_to_reorder'] ? <span class="badge card-text ml-2 badge-danger">REORDER</span> : null}
                                    </h5>
                                    <p className="card-text text-left"><strong>Quantity: </strong>{item['quantity']}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <Link to={`/inventory/${item['id']}`} className="btn btn-sm btn-outline-secondary">View</Link>
                                        <Link to={`/inventory/${item['id']}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )})
                        : <NotFound /> }
                    </div>
                </div>
            </div>        
        );
    }
  }
  
  export default InventoryList;