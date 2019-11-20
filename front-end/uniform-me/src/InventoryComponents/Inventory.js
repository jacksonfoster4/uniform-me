
import React from 'react';
import InventoryList from './InventoryList'
import InventoryDetail from './InventoryDetail'
import InventoryNew from './InventoryNew'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Inventory extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/inventory/new" component={InventoryNew} />
                        <Route path="/inventory/:id" component={InventoryDetail} />
                        <Route path="/inventory" component={InventoryList} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        );
    }
  }
  
  export default Inventory;