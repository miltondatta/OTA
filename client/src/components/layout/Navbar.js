import React, {Fragment}          from 'react';
import {Link}                     from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

// Redux
import Proptypes    from 'prop-types';
import {connect}    from "react-redux";
import {logoutUser} from "../../actions/authActions";

// Image
import logo from '../../assets/img/logo.png';

function Menubar({logoutUser, auth: {isAuthenticated, user}}) {
    const guestLinks = (
        <Fragment>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </Fragment>
    );
    
    const authLinks = (
        <Fragment>
            <li className="nav-item"><Link to="#" className={'nav-link'}>Hi, {user.name}</Link></li>
        </Fragment>
    );
    
    const admin_role       = [1, 2]; //---- 1 = Super Admin, 2 = Admin ----
    const adminLinks = (<Fragment>
        {/*<li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>*/}
    </Fragment>);
    
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Link className="navbar-brand p-0" to="/">
                    <img src={logo} alt="Travel Agency Logo" className="logo"/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {!isAuthenticated && guestLinks}
                        {isAuthenticated && authLinks}
                        {(isAuthenticated && (admin_role.includes(user.role_id))) && adminLinks}
                        
                        {isAuthenticated && (admin_role.includes(user.role_id)) &&
                        <NavDropdown title="Settings " id="collasible-nav-dropdown">
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/users_index'} className={'dropdown-item'}>Users</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/user_group'} className={'dropdown-item'}>User Group</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/user_group_mapping'} className={'dropdown-item'}>User Group Mapping</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/fixed_values'} className={'dropdown-item'}>Service Fixed Value</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/configure_promotion'} className={'dropdown-item'}>Promotion Configuration</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/airports'} className={'dropdown-item'}>Airports</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/airline'} className={'dropdown-item'}>Airlines</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/api_sources'} className={'dropdown-item'}>Api Sources</Link></NavDropdown.Item>
                            <NavDropdown.Item className={'dropdown-item'}><Link to={'/flight_bookings'} className={'dropdown-item'}>Flight Bookings</Link></NavDropdown.Item>
                        </NavDropdown>
                        }
                        
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
        </Fragment>
    );
}

Menubar.propTypes = {
    logoutUser: Proptypes.func.isRequired,
    auth      : Proptypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {logoutUser};
export default connect(mapStateToProps, mapDispatchToProps)(Menubar);