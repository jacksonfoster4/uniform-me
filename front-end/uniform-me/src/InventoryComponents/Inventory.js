
import React from 'react';
import InventoryList from './InventoryList'
import InventoryDetail from './InventoryDetail'
import InventoryNew from './InventoryNew'
import InventoryEdit from './InventoryEdit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Inventory extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/inventory/new" component={InventoryNew} />
                        <Route exact path="/inventory/:id/edit" component={InventoryEdit} />
                        <Route exact path="/inventory/:id" component={InventoryDetail} />
                        <Route exact path="/inventory" component={InventoryList} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        );
    }
  }
  
  export default Inventory;