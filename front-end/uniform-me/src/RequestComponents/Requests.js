
import React from 'react';
import RequestList from './RequestList'
import RequestDetail from './RequestDetail'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

class Requests extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/requests/:id" component={RequestDetail} />
                        <Route path="/requests" component={RequestList} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
  }
  
  export default withRouter(Requests);