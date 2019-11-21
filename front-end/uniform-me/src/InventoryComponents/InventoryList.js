import React from 'react';
import fetchUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

class InventoryList extends React.Component {
    state = {
        loading:true
    }
    componentDidMount(){
        fetchUrl("inventory").then( (result) => {
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
                    <div>Loading...</div>
                    <br></br>
                    <Link to="inventory/new">Create New Item</Link>
                </div>
            )
        }
        return (
            <div>
                { this.state.items ? 
                    this.state.items.map( (item) => { return(
                        <div>
                            <Link to={`/inventory/${item['id']}`}>
                                {item['name']} - {item['quantity']}
                            </Link><br></br>
                        </div>
                    )})
                    : null }
                    <br></br>
                    <Link to="inventory/new">Create New Item</Link>
            </div>
            
        );
    }
  }
  
  export default InventoryList;