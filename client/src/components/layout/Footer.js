import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
            <div className="footerbgblack">
                <div className="container">

                <div className="col-md-3">
                        <a href="#"><img src="../../travel/images/logosmal2.png" alt /></a><br />
                                <span className="grey2">© 2019  |  <a href="#">Privacy Policy</a><br />
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
                            <li><a href="#">Weddings</a></li>
                            <li><a href="#">Accessible Travel</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <div className="scont">
                            <a href="#" className="social1b"><img src="../../travel/images/icon-facebook.png" alt /></a>
                            <a href="#" className="social2b"><img src="../../travel/images/icon-twitter.png" alt /></a>
                            <a href="#" className="social3b"><img src="../../travel/images/icon-gplus.png" alt /></a>
                            <a href="#" className="social4b"><img src="../../travel/images/icon-youtube.png" alt /></a>
                        </div>
                    </div>
                    
                </div>
            </div>
    </Fragment>
        )
    }
}



export default Footer;
