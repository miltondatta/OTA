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
                  <li><Link to={'/'}>HOME</Link></li>
                  <li><Link to={'/register'}>REGISTER</Link></li>
                  <li><Link to={'/login'}>LOGIN</Link></li>
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
