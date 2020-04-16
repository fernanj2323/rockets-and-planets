import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';


const backgroundNav = ()=> {
  return {

    background: 'linear-gradient(to right, black, #799f0c)',
    color: 'azure'
  }
  }

const colorAzure = () => {
  return { 
    color: 'azure'
  }
}

const Navbah = () => {
  return (
<nav className="navbar navbar-expand-lg" style={backgroundNav()}>
  <div className="container p-1">
     <img src={logo} className="App-logo" alt="logo" />
      <span className="navbar-brand mb-0 h1">Planets App</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">

          <NavLink
            exact
            to="/"
            className="nav-item nav-link" style={colorAzure()}
            activeClassName="nav-item nav-link active"
          >
            Planets
          </NavLink>

          <NavLink
            exact
            to="/arch"
            className="nav-item nav-link" style={colorAzure()}
            activeClassName="nav-item nav-link active"
          >
            
           Architecture 
          </NavLink>

        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbah;
