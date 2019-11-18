import React from 'react';

class Inventory extends React.Component {
    state ={}
    componentDidMount(){
        fetch('http://192.168.1.138:8000/api/inventory').then(res => res.json()).then(
            (result) => {
                console.log(result)
                this.setState({items: result})
                return result
            }
        )
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