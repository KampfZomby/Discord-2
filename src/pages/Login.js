import React from 'react';
import { Link} from "react-router-dom"
import logo from './logo.svg';

function Login() {
    return (
      <div className="Login">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <form>
            <p>
              You need your Email and Password to log in:
            </p>
              <input type="text"/>
              <input type="password"/>
          </form>
          <p>
            You do not have an account yet...?
            <Link className="App-link" to="/create">Create today!</Link>
          </p>
        </header>
      </div>
    );
  }
  
  export default Login;