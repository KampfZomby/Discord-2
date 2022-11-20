import React from "react"
import {useNavigate } from "react-router-dom"

function Create() {

  const navigate = useNavigate();

    return (
      <div className="Create">
        <header className="App-header">
          <p>
            Create Discord 2 Account
          </p>
            <button onClick={() => {navigate("/home")}}>Create new Account</button>
        </header>
      </div>
    );
  }
  
  export default Create;