import React from 'react';
import './Navbar.css';
import logo from './Database/logo.png';
import bhau from './Database/images/Bhaulogo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-4 d-flex align-items-center">
            <a className="navbar-brand" href="#">
              Elespa-HEV
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="col-4 d-flex justify-content-end">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Services
                </a>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img src={logo} alt="Logo" className="logo-img" />
                  
                </div>
                <a className="nav-link" href="#">
                  Blog
                </a>
                <a className="nav-link" href="#">
                  Reviews
                </a>
                <a className="nav-link" href="#">
                  Enquire
                </a>
              </div>
              
            </div>
            
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
                  
                  <img src={bhau} alt="bhau" className="logo-img" />
                </div>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
