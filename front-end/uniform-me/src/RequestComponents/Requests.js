
import React from 'react';
import RequestList from './RequestList'
import RequestDetail from './RequestDetail'
import RequestNew from './RequestNew'
import RequestEdit from './RequestEdit'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Requests extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/requests/new" component={RequestNew} />
                        <Route path="/requests/:id/edit" component={RequestEdit} />
                        <Route path="/requests/:id" component={RequestDetail} />
                        <Route path="/requests" component={RequestList} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
  }
  
  export default Requests;