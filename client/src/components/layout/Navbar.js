import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import logo from '../../assets/img/logo.png';

class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated, user } = this.props.auth;

    console.log(this.props.auth);

    const authLinks = (
      <Fragment>
        <li><Link to="">{ user ? 'Welcome, ' + user.name : '' }</Link></li>
        <li><Link to="" onClick={ this.onLogoutClick.bind(this) }  >LOGOUT</Link></li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li><Link to={'/login'}>LOGIN</Link></li>
        <li><Link to={'/register'}>REGISTER</Link></li>
      </Fragment>
    );


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
                <Link to={'/'}><img src={logo} alt="Travel Agency Logo" className="logo" /></Link>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to={'/'}>HOME</Link></li>
                  { isAuthenticated? authLinks : guestLinks }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser })(Navbar);
