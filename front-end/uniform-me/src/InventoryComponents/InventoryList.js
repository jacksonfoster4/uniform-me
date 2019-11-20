import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
import {Link} from 'react-router-dom'

class InventoryList extends React.Component {
    state = {}
    componentDidMount(){
        fetchAuthedUrl("inventory").then( (result) => {
            this.setState({items: result})
        })
    }
    render(){
        return (
            <div>
            { this.state.items ? 
                this.state.items.map( (item) => { return(
                    <div><Link to={`/inventory/${item['id']}`}>
                        {item['name']} - {item['quantity']}
                    </Link><br></br></div>
                )})
                : null}
                <br></br>
                <Link to="inventory/new">Create New Item</Link>
            </div>
            
        );
    }
  }
  
  export default InventoryList;