import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import footer_logo from "../../assets/img/footer-logo.png";
import {Link} from 'react-router-dom';
import '../../assets/css/footer.css';
import {ChevronRight} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    footerLogo: {
        width: '140px !important',
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className="footerbgblack">
                <Grid item md={3} sm={6} xs={12} className="gridSinglePortion">
                    <Link to={'/'}><img className={classes.footerLogo} src={footer_logo} alt=""/></Link><br/>
                    <span className="grey2">© 2019  |  <Link className={'privacy'} to={'/'}>Privacy Policy</Link><br/>
                                All Rights Reserved </span>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className="gridSinglePortion">
                    <span className="ftitleblack">Customer support</span><br/>
                    <span className="pnr">1-866-599-6674</span><br/>
                    <span className="grey2">office@travel.com</span>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className="gridSinglePortion">
                    <span className="ftitleblack">Parnerships</span>
                    <br/>
                    <ul className="footerlistblack">
                        <li><ChevronRight className="footerArrow"/><Link to={'/'}>Weddings</Link></li>
                        <li><ChevronRight className="footerArrow"/><Link to={'/'}>Accessible Travel</Link></li>
                    </ul>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className="gridSinglePortion">
                    <div className="scont">
                        <Link to={'/'} className="social1b"><img src="../../travel/images/icon-facebook.png"
                                                                 alt=""/></Link>
                        <Link to={'/'} className="social2b"><img src="../../travel/images/icon-twitter.png"
                                                                 alt=""/></Link>
                        <Link to={'/'} className="social3b"><img src="../../travel/images/icon-gplus.png"
                                                                 alt=""/></Link>
                        <Link to={'/'} className="social4b"><img src="../../travel/images/icon-youtube.png"
                                                                 alt=""/></Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
