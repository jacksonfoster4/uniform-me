import React from 'react';

function Header(props){
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
                <li className={window.location.pathname == '/employee' ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="/employee" tabIndex="-1" aria-disabled="true">Employees</a>
                </li>
                <li className={window.location.pathname == '/requests' ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="/requests" tabIndex="-1" aria-disabled="true">Requests</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
