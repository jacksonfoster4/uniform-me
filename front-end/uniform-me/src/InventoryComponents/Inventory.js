
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
                    <InventoryHeading />
                    <Switch>
                        <Route path="/inventory/new" component={InventoryNew} />
                        <Route exact path="/inventory/:id/edit" component={InventoryEdit} />
                        <Route exact path="/inventory/:id" component={InventoryDetail} />
                        <Route path="/inventory" component={InventoryList} />
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
                <Link to="/inventory/new" className="btn btn-warning mx-2 mt-3">Create New Item</Link>
                <Link to="/inventory" className="btn btn-primary mx-2 mt-3">View All Items</Link>
            </div>
        </section>
    )
}

export default Inventory;
