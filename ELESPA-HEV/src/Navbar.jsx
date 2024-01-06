import React from 'react';
import './Navbar.css';
import logo from './Database/logo.png';
import Bhau from './Database/images/Bhaulogo.jpg';
import { Link,  NavLink,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Reviews from './Reviews.jsx';
import Faqs from './Faqs.jsx';

import Services from './Services.jsx';

function Navbar() {
  return (
    <div>
       <Router>
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
              <NavLink to="/home" className="nav-link active" aria-current="page">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/services" className="nav-link">Services</NavLink>
                  
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <img src={logo} alt="Logo" className="logo-img" />
                  
                </div>
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
                <NavLink to="/enquire" className="nav-link">Enquire</NavLink>
              </div>
              
            </div>
            
          </div>
          
         
        </div>
      </div>
      
    </nav>
    
    <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/reviews" component={Reviews} />
           <Route path="/home" component={Home}/>
    </Switch>
          
          </Router>
    </div>
  );
}

export default Navbar;
