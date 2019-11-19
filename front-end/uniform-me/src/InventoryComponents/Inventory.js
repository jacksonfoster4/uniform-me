
import React from 'react';
import InventoryList from './InventoryList'
import InventoryDetail from './InventoryDetail'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

class Inventory extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/inventory/:id" component={InventoryDetail} />
                        <Route path="/inventory" component={InventoryList} />
                    </Switch>
                </BrowserRouter>
            </div>
            
        );
    }
  }
  
  export default withRouter(Inventory);