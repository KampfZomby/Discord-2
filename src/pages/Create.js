import React from "react"
import {useNavigate } from "react-router-dom"
import { getAuth, signInAnonymously } from "firebase/auth";
import { Link} from "react-router-dom"
import logo from './logo.svg';
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

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

function Create() {

  const navigate = useNavigate();

  const auth = getAuth();

  const register = async () => {
    try {
      signInAnonymously(auth)
      await timeout(1000);

      const user = auth.currentUser;

      const uid = user.uid;

      /*await setDoc(doc(db, "user", {uid}), {
        name: "Discord 2 User",
      });*/

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