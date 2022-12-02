import React, {useState } from 'react';
import {useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {linkWithCredential } from "firebase/auth";

function Home() {

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const handleEmail = event => {
    setCreateEmail(event.target.value);
  };

  const handlePassword = event => {
    setCreatePassword(event.target.value);
  };

  const create = async () => {
    try {
      console.log(createEmail)
      console.log(createPassword)
      linkWithCredential(auth.currentUser, createEmail, createPassword)
    } catch(error) {
      console.log("Error upgrading anonymous account", error);
    }
  }

  const logout = async () => {
    try {
      signOut(auth)
      navigate("/login")
    } catch (error){
      console.log(error)
    } 
  }

  return (
    <div className="Home">
      <header className="App-header">
        <div>
          <input type="text" onChange={handleEmail}/>
          <input type="text" onChange={handlePassword}/>
          <button onClick={create}>Create permanent account</button>
        </div>
        <p>
          Your current Discord 2 ID: 
        </p>
          <button onClick={logout}>Log Out</button>
      </header>
    </div>
  );
}

export default Home;
