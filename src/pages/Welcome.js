import React from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from './logo.svg';
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'
import { Fireworks } from '@fireworks-js/react'

function Welcome() {

  const navigate = useNavigate();
  const { width, height } = useWindowSize()

  return (
    <div className="Welcome">
      <header className="App-header">
    <Confetti
      width={width}
      height={height}
      />

    <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          tyle={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed'
          }}
        />

      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Discord 2
        </p>
        <button variant="outlined" onClick={() => {navigate("/login")}}>Login</button>
        <button onClick={() => {navigate("/create")}}>Create an Account</button>
        <Link className="App-link" to="/about"> About Discord 2 </Link>
        <Link className="App-link" to="/contact"> Contact Support </Link>
        <a
          className="App-link"
          href="https://github.com/KampfZomby/Discord2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord 2 on Github
        </a>
      </header>
    </div>
  );
}

export default Welcome;