import React from "react"
import {useNavigate } from "react-router-dom"
import { getAuth, signInAnonymously } from "firebase/auth";
import { Link} from "react-router-dom"
import logo from './logo.svg';

function Create() {

  const navigate = useNavigate();

  const auth = getAuth();

  const register = async () => {
    try {
      signInAnonymously(auth)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  };

    return (
      <div className="Create">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Create your Discord 2 Account!
          </p>
            <button onClick={register}>Create new Account</button>
          <p>
            Already have an account?
            <Link className="App-link" to="/login">Log in now!</Link>
          </p>
        </header>
      </div>
    );
  }
  
  export default Create;