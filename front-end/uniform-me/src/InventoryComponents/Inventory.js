
import React from 'react';
import InventoryList from './InventoryList'
import InventoryDetail from './InventoryDetail'
import InventoryNew from './InventoryNew'
import InventoryEdit from './InventoryEdit'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

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

  function InventoryHeading(){
    return (
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading mb-4 ">Inventory</h1>
                <Link to="inventory/new" className="btn btn-warning mt-3">Create New Item</Link>
            </div>
        </section>
    )
}

export default Inventory;
export { InventoryHeading }