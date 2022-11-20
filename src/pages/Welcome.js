import React from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="Welcome">
      <header className="App-header">
        <p>
          Welcome to Discord 2
        </p>
        <button onClick={() => {navigate("/login")}}>Login</button>
        <button onClick={() => {navigate("/create")}}>Create an Account</button>
        <Link className="App-link" to="/about"> About Discord 2 </Link>
        <Link className="App-link" to="/contact"> Contact Support </Link>
      </header>
    </div>
  );
}

export default Welcome;