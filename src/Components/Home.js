import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation and login logic
    if (username && password) {
      setLoggedIn(true);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleExplore = () => {
    if (loggedIn) {
      navigate('/dashboard'); // Redirect to dashboard if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  return (
    <div className="home-container">
      <div className="banner-container">
        <div className="banner-content">
          <h1>Welcome to CryptoCurrency Tracker</h1>
          <p>Track your favourite cryptocurrencies in real-time.</p>
          <div className="button-group">
            <button className="explore-button" onClick={handleExplore}>
              Explore Now
            </button>
            {!loggedIn && (
              <button className="login-button" onClick={() => navigate('/login')}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



