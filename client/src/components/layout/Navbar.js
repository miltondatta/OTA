import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper2 navbar-fixed-top">
        <div className="container">
          <div className="navbar mtnav">
            <div className="container offset-3">
              <div className="navbar-header">
                <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to={'/'} className="navbar-brand"><img src={logo} alt="Travel Agency Logo" className="logo" /></Link>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown active">
                    <Link data-toggle="dropdown" className="dropdown-toggle" to={'/'}>Home <span className="badge indent0">1</span><b className="lightcaret mt-2"></b></Link>
                    <ul className="dropdown-menu posright-0">
                      <li>
                        <div className="row dropwidth01">
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Homepages</li>
                            <li><Link to="index.html">Home 1 minimal</Link></li>
                          </ul>
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Intro pages</li>
                          </ul>
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Colors</li>
                            <li><Link to="#">Blue</Link></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link data-toggle="dropdown" className="dropdown-toggle" to="#">Pages <span className="badge indent0">14</span><b className="lightcaret mt-2"></b></Link>
                    <ul className="dropdown-menu posright-0">
                      <li>
                        <div className="row dropwidth01">
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Inner pages</li>
                          </ul>
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Update - <span className="green">14 New Pages</span></li>
                          </ul>
                          <ul className="droplist col-md-4">
                            <li className="dropdown-header">Bootstrap Shortcodes</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li><Link to="#">Hotels</Link></li>
                  <li><Link to="#">Flights</Link></li>
                  <li><Link to="#">Vacations</Link></li>
                  <li><Link to="#">Cars</Link></li>
                  <li><Link to="#">Cruises</Link></li>
                  <li><Link to={'/register'}>Register</Link></li>
                  <li><Link to={'/login'}>Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
