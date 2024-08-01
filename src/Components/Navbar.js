import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {!loggedIn ? (
            <li className="nav-item">
             
            </li>
          ) : (
            <>
              <li className="nav-item">
               
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={() => setLoggedIn(false)}>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
