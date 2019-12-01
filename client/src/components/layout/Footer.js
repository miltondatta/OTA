import React from 'react';
import {Link} from 'react-router-dom';

// Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

// Css
import '../../assets/css/footer.css';

// Image
import facebook from '../../assets/img/icon-facebook.png';
import twitter from '../../assets/img/icon-twitter.png';
import google_plus from '../../assets/img/icon-gplus.png';
import youtube from '../../assets/img/icon-youtube.png';

export default function CenteredGrid() {

    return (
        <div className={'footerbgblack'}>
            <div className={'container-fluid'}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 com-sm-6 col-12 gridSinglePortion">
                        <span className="grey2">© 2019  |  <Link className={'privacy'} to={'/'}>Privacy Policy</Link>
                        <br/>
                    All Rights Reserved </span>
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12 gridSinglePortion customer-support">
                        <span className="ftitleblack">Customer support</span><br/>
                        <span className="grey2">1-866-599-6674</span><br/>                  
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12 gridSinglePortion partnership">
                        <span className="ftitleblack">Contact Email</span>
                        <br/>
                        <ul className="footerlistblack">
                            <span className="grey2">office@travel.com</span>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12 gridSinglePortion socials">
                        <div className="scont">
                            <Link to={'/'} className="social1b">
                                <img src={facebook} alt=""/>
                            </Link>
                            <Link to={'/'} className="social2b">
                                <img src={twitter} alt=""/>
                            </Link>
                            <Link to={'/'} className="social3b">
                                <img src={google_plus} alt=""/>
                            </Link>
                            <Link to={'/'} className="social4b">
                                <img src={youtube} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
