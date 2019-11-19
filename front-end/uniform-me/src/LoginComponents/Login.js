import React from 'react';
import Cookie from 'js-cookie'
import { fetchUrl } from '../uniform-me-client'

class Login extends React.Component {
    
    login = (e) => {
        e.preventDefault()

        let username = document.getElementById("username").value
        let password = document.getElementById("password").value 

        fetchUrl('auth/', 'POST', {
            "username": username,
            "password": password
        }).then( (result) => {
            Cookie.set('authToken', result['token'])
            this.props.history.push("/");
        })
    }

    render(){
        return (
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
                <button onClick={ this.login } type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
    
  }
  
  export default Login;