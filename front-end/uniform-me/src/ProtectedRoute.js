import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
class ProtectedRoute extends React.Component {
    render(){
        if(Cookies.get('authToken')){
            return (
                <Route {...this.props} />
            )
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

export default ProtectedRoute