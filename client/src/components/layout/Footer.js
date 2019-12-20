import React from 'react';
import {Link} from 'react-router-dom';

// Css
import '../../assets/css/footer.css';

// Image
import facebook from '../../assets/img/icon-facebook.png';
import twitter from '../../assets/img/icon-twitter.png';
import google_plus from '../../assets/img/icon-gplus.png';
import youtube from '../../assets/img/icon-youtube.png';

export default function Footer() {

    return (
        <div className="footer-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 com-sm-6 col-12">
                        <div className="single-footer-portion">
                            <h5 className="footer-title mb-4">
                                About Us
                            </h5>
                            <div className="single-footer-content text-justify">
                            All the stories that describe about our size and diversity, as remarkable and significant as they may be, are secondary to the truest measure of Penta Global: The impact we make to the people & the business. Despite of short tenure of establishment (July, 2013), Penta Global imparted more than 20+ years of skilled resources, long-term proven reliability and investment protection, as well as its many certified IT security standards which helps Penta Global to be the trustworthy company to across the industry.
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12 mt-3 mt-sm-3 mt-md-0">
                        <div className="single-footer-portion text-md-left text-lg-center pr-md-5">
                            <h5 className="footer-title mb-4">
                                Links
                            </h5>
                            <div className="single-footer-content">
                                <ul className="list-unstyled">
                                    <li><Link to="/" className="text-decoration-none">Home</Link></li>
                                    <li><Link to="/login" className="text-decoration-none">Login</Link></li>
                                    <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12">
                        <div className="single-footer-portion">
                            <h5 className="footer-title mb-4">
                                Contact Info
                            </h5>
                            <div className="single-footer-content">
                                <ul className="list-unstyled">
                                    <li className="d-block">
                                        <span className="d-block">Address:</span>
                                        <span>Sheba House, 7th ﬂoor, Plot 34, Road 46 <br/> Gulshan-2, Dhaka-1215</span></li>
                                    <li className="d-block"><span className="d-block">Telephone:</span><span>+88 02 985 7492 </span>
                                    </li>
                                    <li className="d-block"><span
                                        className="d-block">Email:</span><span>info@pentabd.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 com-sm-6 col-12">
                        <div className="single-footer-portion">
                            <h5 className="footer-title mb-4">
                                Contact Info
                            </h5>
                            <div className="single-footer-content">
                                    <div className="mb-4">
                                        <h6 className="mb-3">Subscribe to Newsletter</h6>
                                        <form action="#" method="post">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary text-white" type="button" id="button-addon2">Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <h6 className="mb-3">Follow Us</h6>
                                    <Link to="https://fb.com" className="smoothscroll pl-0 pr-0" target="_blank">
                                        <img src={facebook} alt="facebook"/>
                                    </Link>
                                    <Link to="https://twitter.com" className="pl-2 pr-0" target="_blank">
                                        <img src={twitter} alt="facebook"/>
                                    </Link>
                                    <Link to="https://google.com" className="pl-2 pr-0" target="_blank">
                                        <img src={google_plus} alt="facebook"/>
                                    </Link>
                                    <Link to="https://youtube.com" className="pl-2 pr-0" target="_blank">
                                        <img src={youtube} alt="facebook"/>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-5 mt-4 text-center">
                    <div className="col-md-12">
                        <div className="copyright-text-area pt-4">
                            <p>
                                Copyright © {new Date().getFullYear()} All rights reserved | Developed by <a href="https://pentabd.com" target="_blank" className="text-decoration-none">  Penta Global </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
