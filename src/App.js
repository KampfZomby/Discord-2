import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Create from './pages/Create';
import Chat from './pages/Chat';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPGoCZVbbeQugFq5vksbPZV3zXAXan2EE",
  authDomain: "discord-2-52e82.firebaseapp.com",
  projectId: "discord-2-52e82",
  storageBucket: "discord-2-52e82.appspot.com",
  messagingSenderId: "31766851232",
  appId: "1:31766851232:web:5105eb05fb6006f34123c5",
  measurementId: "G-8K45NJJM44"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
