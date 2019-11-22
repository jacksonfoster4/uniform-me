
import React from 'react';
import RequestList from './RequestList'
import RequestNew from './RequestNew'
import RequestEdit from './RequestEdit'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class Requests extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <RequestsHeading />
                    <Switch>
                        <Route path="/requests/new" component={RequestNew} />
                        <Route path="/requests/:id/edit" component={RequestEdit} />
                        <Route path="/requests" component={RequestList} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
function RequestsHeading(){
    return (
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading mb-4 ">Requests</h1>
                <Link to="/requests/new" className="btn btn-warning mx-2 mt-3">Create New Request</Link>
                <Link to="/requests" className="btn btn-primary mx-2 mt-3">View All Requests</Link>
            </div>
        </section>
    )
}
  
  export default Requests;