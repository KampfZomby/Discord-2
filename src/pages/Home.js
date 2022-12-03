import React from 'react';
import {useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPGoCZVbbeQugFq5vksbPZV3zXAXan2EE",
  authDomain: "discord-2-52e82.firebaseapp.com",
  projectId: "discord-2-52e82",
  storageBucket: "discord-2-52e82.appspot.com",
  messagingSenderId: "31766851232",
  appId: "1:31766851232:web:5105eb05fb6006f34123c5",
  measurementId: "G-8K45NJJM44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function Home() {

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;

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
        <p>
          Your current Discord 2 ID: {uid}
        </p>
        <p>
        Please create a password or your account will be deleted once you log out:
        </p>
          <label>
            <input type="text" name="name" />
          </label>
          <button>Set password</button>
          <label>
            <input type="text" name="char" />
          </label>
          <button>Create Chat with</button>
          <button onClick={logout}>Log Out</button>
      </header>
    </div>
  );
}

export default Home;
