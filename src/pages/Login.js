import React from 'react';
import {encrypt} from 'n-krypta';

function Login() {
    return (
      <div className="Login">
        <header className="App-header">
          <form>
            <p>
              Your Discord 2 ID:
            </p>
              <input type="password"/>
              <input type="submit" value="Login"/>
          </form>
        </header>
      </div>
    );
  }
  
  export default Login;