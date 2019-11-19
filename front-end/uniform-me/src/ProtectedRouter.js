import React from 'react';
import Cookie from 'js-cookie'
import { BrowserRouter, Redirect } from 'react-router-dom'

class ProtectedRouter extends React.Component {

    state = {
        authenticated: Cookie.get('authToken') ? true : false
    }

    render(){
        if(this.state.authenticated){
            return( 
                <BrowserRouter {...this.props}>
                    { this.props.children }
                </BrowserRouter> 
            )
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

export default ProtectedRouter