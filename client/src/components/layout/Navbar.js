import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

function Navbar({logoutUser, auth: {isAuthenticated,user}}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const guestLinks = (
        <Fragment>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <li>Hi, {user.name}</li>
        </Fragment>
    );

    return (
        <div className={classes.root}>
            <Grid container className="nav-header">
                <Grid item sm={3}>
                    <Link to={'/'}><img src={logo} alt="Travel Agency Logo" className="logo"/></Link>
                </Grid>

                <Grid item sm={9} className={'menu-bar'}>
                    <ul>
                        {!isAuthenticated && guestLinks}
                        {isAuthenticated && authLinks}
                    </ul>
                    {isAuthenticated &&
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit" style={{marginTop: '4px'}}>
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}>
                            <li><Link className={'profile-menu'} to={'/profile'} onClick={e => {
                                setAnchorEl(null);
                            }}
                            >Profile</Link></li>
                            <li><Link className={'profile-menu'} to={'#'} onClick={e => {
                                e.preventDefault();
                                logoutUser();
                                setAnchorEl(null);
                            }}>Logout</Link></li>
                        </Menu>
                    </div>
                    }
                </Grid>
            </Grid>
        </div>
    );
}


Navbar.propTypes = {
    logoutUser: Proptypes.func.isRequired,
    auth: Proptypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {logoutUser};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);