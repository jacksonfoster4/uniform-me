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
                    <Link to={`/inventory/${item['id']}`}>
                        {item['name']} - {item['quantity']}
                    </Link>
                )})
                : null}
            </div>
            
        );
    }
  }
  
  export default InventoryList;