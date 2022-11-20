import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Create from './pages/Create';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
