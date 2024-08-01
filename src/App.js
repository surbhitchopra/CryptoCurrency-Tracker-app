
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CryptoList from './Components/CryptoList';
import CryptoDetails from './Components/CryptoDetails';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Dashboard from './Components/Dashboard';
import Navtab from './Components/Navtab';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navtab /> {/* Navtab should be included here */}
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home at root */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/Contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
          <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/crypto/:id" element={<CryptoDetails />} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;

