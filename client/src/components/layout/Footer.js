import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import footer_logo from '../../assets/img/footer-logo.png';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerbgblack">
                    <div className="container">
                        <div className="col-md-3">
                            <Link to={'/'}><img className="footer-logo" src={footer_logo} alt="" /></Link><br />
                            <span className="grey2">© 2019  |  <Link to={'/'}>Privacy Policy</Link><br />
                                All Rights Reserved </span>
                        </div>
                        <div className="col-md-3 grey">
                            <span className="ftitleblack">Customer support</span><br />
                            <span className="pnr">1-866-599-6674</span><br />
                            <span className="grey2">office@travel.com</span>
                        </div>
                        <div className="col-md-3">
                            <span className="ftitleblack">Parnerships</span>
                            <br />
                            <ul className="footerlistblack">
                                <li><Link to={'/'}>Weddings</Link></li>
                                <li><Link to={'/'}>Accessible Travel</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="scont">
                                <Link to={'/'} className="social1b"><img src="../../travel/images/icon-facebook.png" alt=""  /></Link>
                                <Link to={'/'} className="social2b"><img src="../../travel/images/icon-twitter.png"  alt="" /></Link>
                                <Link to={'/'} className="social3b"><img src="../../travel/images/icon-gplus.png" alt="" /></Link>
                                <Link to={'/'} className="social4b"><img src="../../travel/images/icon-youtube.png"  alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default Footer;
