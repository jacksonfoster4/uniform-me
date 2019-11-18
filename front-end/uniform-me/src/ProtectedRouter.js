import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom'

class ProtectedRouter extends React.Component {
    state = {
        authenticated: true
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