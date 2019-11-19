import React from 'react';
import Cookie from 'js-cookie'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
    logout = () => {
        Cookie.remove('authToken')
        this.props.history.push('/login')
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">Uniform Me</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname == '/' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className={window.location.pathname == '/inventory' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/inventory">Inventory</a>
                    </li>
                    <li className={window.location.pathname == '/employees' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/employees" tabIndex="-1" aria-disabled="true">Employees</a>
                    </li>
                    <li className={window.location.pathname == '/requests' ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/requests" tabIndex="-1" aria-disabled="true">Requests</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.logout} className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Logout</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}

export default withRouter(Header);
