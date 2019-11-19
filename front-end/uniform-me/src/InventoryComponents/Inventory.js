import React from 'react';
import fetchAuthedUrl from '../uniform-me-client'
class Inventory extends React.Component {
    state ={}
    componentDidMount(){
        fetchAuthedUrl("inventory", "GET").then( (result) => {
            this.setState({items: result})
        })
    }
    render(){
        return (
            <div>
            { this.state.items ? 
                this.state.items.map( (item) => { return(
                    <div>
                        {item['name']} | {item['quantity']}
                    </div>    
                )})
                : null}
            </div>
        );
    }
  }
  
  export default Inventory;