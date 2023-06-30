import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return(
    <React.Fragment>
      <div className="navbar">
        <div className="logo">
          <h3>Educatoon</h3>
        </div>
        <div className="links">
          <ul id="links-navbar">
            <li>Sobre nós</li>
            <li>Diferencial</li>
            <li>personagens</li>
            <li id="btn-login"><Link to={"/login"}>
            Fazer Login
             </Link></li>

          </ul>
        </div>
      </div>
      </React.Fragment>
  )
}

export default Navbar;