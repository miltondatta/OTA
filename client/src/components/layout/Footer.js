import React, {Fragment} from 'react';

const Footer = ({showFooter}) => {
    const url = window.location.pathname;
    if(url === '/') showFooter = false;

    return showFooter && <Fragment>
        <div>
            <div classname="footerbgblack">
                <div classname="container">
                    <div classname="col-md-3">
                        <span classname="ftitleblack">Let's socialize</span>
                        <div classname="scont">
                            <a href="#" classname="social1b"><img src="../../travel/images/icon-facebook.png" alt /></a>
                            <a href="#" classname="social2b"><img src="../../travel/images/icon-twitter.png" alt /></a>
                            <a href="#" classname="social3b"><img src="../../travel/images/icon-gplus.png" alt /></a>
                            <a href="#" classname="social4b"><img src="../../travel/images/icon-youtube.png" alt /></a>
                            <br /><br /><br />
                            <a href="#"><img src="../../travel/images/logosmal2.png" alt /></a><br />
                            <span classname="grey2">© 2013  |  <a href="#">Privacy Policy</a><br />
                                All Rights Reserved </span>
                            <br /><br />
                        </div>
                    </div>
                    <div classname="col-md-3">
                        <span classname="ftitleblack">Travel Specialists</span>
                        <br /><br />
                        <ul classname="footerlistblack">
                            <li><a href="#">Golf Vacations</a></li>
                            <li><a href="#">Ski &amp; Snowboarding</a></li>
                            <li><a href="#">Disney Parks Vacations</a></li>
                            <li><a href="#">Disneyland Vacations</a></li>
                            <li><a href="#">Disney World Vacations</a></li>
                            <li><a href="#">Vacations As Advertised</a></li>
                        </ul>
                    </div>
                    <div classname="col-md-3">
                        <span classname="ftitleblack">Travel Specialists</span>
                        <br /><br />
                        <ul classname="footerlistblack">
                            <li><a href="#">Weddings</a></li>
                            <li><a href="#">Accessible Travel</a></li>
                            <li><a href="#">Disney Parks</a></li>
                            <li><a href="#">Cruises</a></li>
                            <li><a href="#">Round the World</a></li>
                            <li><a href="#">First Class Flights</a></li>
                        </ul>
                    </div>
                    <div classname="col-md-3 grey">
                        <span classname="ftitleblack">Newsletter</span>
                        <div classname="relative">
                            <input type="email" classname="form-control fccustom2black" id="exampleInputEmail1" placeholder="Enter email" />
                            <button type="submit" classname="btn btn-default btncustom">Submit<img src="#!" alt /></button>
                        </div>
                        <br /><br />
                        <span classname="ftitleblack">Customer support</span><br />
                        <span classname="pnr">1-866-599-6674</span><br />
                        <span classname="grey2">office@travel.com</span>
                    </div>
                </div>
            </div>
            <div classname="footerbg3black">
                <div classname="container center grey">
                    <a href="#">Home</a> |
      <a href="#">About</a> |
      <a href="#">Last minute</a> |
      <a href="#">Early booking</a> |
      <a href="#">Special offers</a> |
      <a href="#">Blog</a> |
      <a href="#">Contact</a>
                    <a href="#top" classname="gotop scroll"><img src="../../travel/images/spacer.png" alt /></a>
                </div>
            </div>
        </div>
    </Fragment>
};

Footer.defaultProps = {
    showFooter: true
};


export default Footer;