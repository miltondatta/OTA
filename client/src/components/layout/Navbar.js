import React, {Fragment} from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

// Redux
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function Menubar({logoutUser, auth: {isAuthenticated, user}}) {
    const guestLinks = (
        <Fragment>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <li className="nav-item"><Link to="#" className={'nav-link'}>Hi, {user.name}</Link></li>
        </Fragment>
    );

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Travel Agency Logo" className="logo"/>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {!isAuthenticated && guestLinks}
                    {isAuthenticated && authLinks}
                    {isAuthenticated &&
                    <NavDropdown title="Profile" id="collasible-nav-dropdown">
                        <Link to={'/profile'} className={'dropdown-item'}>Profile</Link>
                        <Link to={'#'} className={'dropdown-item'} onClick={e => {
                            e.preventDefault();
                            logoutUser();
                        }}>Logout</Link>
                    </NavDropdown>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


Menubar.propTypes = {
    logoutUser: Proptypes.func.isRequired,
    auth: Proptypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {logoutUser};
export default connect(mapStateToProps, mapDispatchToProps)(Menubar);