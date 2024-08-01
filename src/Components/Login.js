import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to include this CSS for styling

// Replace these with actual valid Gmail addresses and passwords
const validCredentials: { [key: string]: string } = {
  'user1@gmail.com': '123456',
  'user2@gmail.com': '766816',
};

const Login: React.FC<{ setLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false); // State to show credentials info
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    // Regular expression to check if email ends with '@gmail.com'
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsLoading(true);

    if (!validateEmail(username)) {
      setError('Please enter a valid Gmail address');
      setShowCredentials(true); // Show credentials info on error
      setIsLoading(false);
      return;
    }

    // Simulate a login process (replace with actual authentication logic)
    setTimeout(() => {
      if (username in validCredentials && validCredentials[username] === password) {
        setLoggedIn(true); // Set login state to true
        setSuccess(true);
        setIsLoading(false);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Invalid username or password');
        setShowCredentials(true); // Show credentials info on error
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username (Gmail):</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Gmail address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Login successful!</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        {showCredentials && (
          <div className="credentials-info">
            <p><strong>Example credentials:</strong></p>
            <p>Email: user1@gmail.com</p>
            <p>Password: 123456</p>
            <p>Email: user2@gmail.com</p>
            <p>Password: 766816</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;


