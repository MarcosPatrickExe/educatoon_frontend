import React from 'react';
import { Link } from 'react-router-dom';
import './navbarHome.css';


function Navbar() {

  return(
    <React.Fragment>
      <div className="navbar">
        <div className="logo">
             <h3>Educatoon</h3>
        </div>
        <div className="links">
          <ul id="links-navbar">
              <li><a href="#secao-sobre-nos">Sobre nós</a></li>
              <li><a href="#secao-vantagens">Diferencial</a></li>
              <li> <a href="#secao-personagens">personagens</a></li>
              <li id="btn-login">
                <Link to={"/login"}> Fazer Login </Link>
              </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;