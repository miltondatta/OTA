import React from 'react';
import {Link} from "react-router-dom";

const FlightPayment = () => {
    return (
        <div className="container">
            <div className="container mt25 offset-0">
                <div className="col-md-8 pagecontainer2 offset-0">
                    <div className="padding30 grey">
                        <span className="size16px bold dark left">Passengers</span>
                        <div className="roundstep active right">1</div>
                        <div className="clearfix"></div>
                        <div className="line4"></div>
                        <div className="row">
                            <div className="col-md-4">
                                <span className="size13 dark">Surname*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Name*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <div className="w50percent">
                                    <span className="size13 dark">Date of birth*</span>
                                    <input type="text" className="form-control mySelectCalendar" id="datepicker3"
                                           placeholder="mm/dd/yyyy"/>
                                </div>
                                <div className="w50percentlast">
                                    <div className="w90percentlast right">
                                        &nbsp;<br/>
                                        <div className="radio radiomargin0">
                                            <label>
                                                <input type="radio" checked="" name="optionsRadios2" id="optionsRadios2"
                                                       value="option2"/>
                                                Male
                                            </label>
                                        </div>
                                        <div className="radio radiomargin0">
                                            <label>
                                                <input type="radio" name="optionsRadios2" id="optionsRadios2"
                                                       value="option2"/>
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <br/>
                            <div className="col-md-4">
                                <span className="size13 dark">Citizenship*</span>
                                <select className="form-control mySelectBoxClass">
                                    <option selected>United States of America</option>
                                    <option>United Kingdom</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Document series and number*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Expiry date (if specified)*</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker3"
                                       placeholder="mm/dd/yyyy"/>
                            </div>
                            <div className="clearfix"></div>
                            <br/>
                            <div className="col-md-4">
                                <div className="checkbox mt-5">
                                    <label>
                                        <input type="checkbox"/>Bonus card OneWorld
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <fieldset disabled="">
                                    <select className="form-control mySelectBoxClass">
                                        <option selected>Air Berlin</option>
                                        <option>Air Berlin</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="col-md-4">
                                <fieldset disabled="">
                                    <select className="form-control mySelectBoxClass" id="disabledSelect">
                                        <option selected>Card number</option>
                                        <option>xxx-xxx-xxx-732</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <br/>
                        <div className="fdash"></div>
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <span className="size13 dark">Surname*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Name*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <div className="w50percent">
                                    <span className="size13 dark">Date of birth*</span>
                                    <input type="text" className="form-control mySelectCalendar" id="datepicker3"
                                           placeholder="mm/dd/yyyy"/>
                                </div>
                                <div className="w50percentlast">
                                    <div className="w90percentlast right">
                                        &nbsp;<br/>
                                        <div className="radio radiomargin0">
                                            <label>
                                                <input type="radio" checked="" name="optionsRadios" id="optionsRadios3"
                                                       value="option3"/>
                                                Male
                                            </label>
                                        </div>
                                        <div className="radio radiomargin0">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios3"
                                                       value="option3"/>
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <br/>
                            <div className="col-md-4">
                                <span className="size13 dark">Citizenship*</span>
                                <select className="form-control mySelectBoxClass">
                                    <option selected>United States of America</option>
                                    <option>United Kingdom</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Document series and number*</span>
                                <input type="text" className="form-control " placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <span className="size13 dark">Expiry date (if specified)*</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker3"
                                       placeholder="mm/dd/yyyy"/>
                            </div>
                            <div className="clearfix"></div>
                            <br/>
                            <div className="col-md-4">
                                <div className="checkbox mt-5">
                                    <label>
                                        <input type="checkbox"/>Bonus card OneWorld
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <fieldset disabled="">
                                    <select className="form-control mySelectBoxClass">
                                        <option selected>Air Berlin</option>
                                        <option>Air Berlin</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="col-md-4">
                                <fieldset disabled="">
                                    <select className="form-control mySelectBoxClass" id="disabledSelect">
                                        <option selected>Card number</option>
                                        <option>xxx-xxx-xxx-732</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="clearfix"></div>

                        </div>
                        <br/>
                        <br/>
                        <span className="size16px bold dark left">Customer </span>
                        <div className="roundstep right">2</div>
                        <div className="clearfix"></div>
                        <div className="line4"></div>
                        Please tell us who will be checking in. Must be 18 or older.
                        <br/><br/>
                        <div className="col-md-4 textright">
                            <div className="margtop15"><span className="dark">Contact Name:</span><span
                                className="red">*</span></div>
                        </div>
                        <div className="col-md-4">
                            <span className="size12">First and Last Name*</span>
                            <input type="text" className="form-control " placeholder=""/>
                        </div>
                        <div className="col-md-4 textleft margtop15">
                        </div>
                        <div className="clearfix"></div>

                        <br/>
                        <div className="col-md-4 textright">
                            <div className="margtop7"><span className="dark">Phone Number:</span><span
                                className="red">*</span></div>
                        </div>
                        <div className="col-md-4">
                            <span className="size12">Country code*</span>
                            <select className="form-control mySelectBoxClass">
                                <option selected>xxx-xxx-xxx-772</option>
                                <option>xxx-xxx-xxx-039</option>
                            </select>
                        </div>
                        <div className="col-md-4 textleft">
                            <span className="size12">Preferred Phone Number*</span>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="clearfix"></div>
                        <br/>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8 textleft">
                            Special Requests (optional)
                            <button type="button" className="collapsebtn3 collapsed mt-5" data-toggle="collapse"
                                    data-target="#collapse3"></button>
                            <div id="collapse3" className="collapse">
                                <textarea rows="3" className="form-control margtop10"/>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                        <br/>
                        <br/>
                        <span className="size16px bold dark left">How would you like to pay?</span>
                        <div className="roundstep right">3</div>
                        <div className="clearfix"></div>
                        <div className="line4"></div>
                        <br/>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            Enter a coupon code
                            <button type="button" className="collapsebtn3 collapsed mt-5" data-toggle="collapse"
                                    data-target="#collapse5"></button>
                            <div id="collapse5" className="collapse">
                                <input type="text" className="form-control margtop10" placeholder=""/>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-4 textleft">
                        </div>
                        <div className="clearfix"></div>
                        <br/>
                        <ul className="nav navigation-tabs">
                            <li className="active"><Link to="#card" data-toggle="tab">Credit/Debit card</Link></li>
                            <li><Link to="#paypal" data-toggle="tab">Paypal</Link></li>
                        </ul>
                        <div className="tab-content4">
                            <div className="tab-pane active" id="card">
                                <div className="col-md-4 textright">
                                    <div className="margtop15"><span
                                        className="dark">Debit/Credit Card Number:</span><span className="red">*</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control margtop10" placeholder=""/>
                                </div>
                                <div className="col-md-4 textleft">
                                </div>
                                <div className="clearfix"></div>
                                <br/>
                                <div className="col-md-4 textright">
                                    <div className="margtop7"><span className="dark">Card Type:</span><span
                                        className="red">*</span></div>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-control mySelectBoxClass">
                                        <option selected>xxx-xxx-xxx-772</option>
                                        <option>xxx-xxx-xxx-039</option>
                                    </select>
                                </div>
                                <div className="col-md-4 textleft">
                                </div>
                                <div className="clearfix"></div>
                                <br/>
                                <div className="col-md-4 textright">
                                    <div className="margtop7"><span className="dark">Expiration Date:</span><span
                                        className="red">*</span></div>
                                </div>
                                <div className="col-md-4">
                                    <div className="w50percent">
                                        <div className="wh90percent">
                                            <select className="form-control mySelectBoxClass">
                                                <option selected>01 JAN</option>
                                                <option>02 FEB</option>
                                                <option>03 MAR</option>
                                                <option>04 APR</option>
                                                <option>05 MAY</option>
                                                <option>06 JUN</option>
                                                <option>07 JUL</option>
                                                <option>08 AUG</option>
                                                <option>09 SEP</option>
                                                <option>10 OCT</option>
                                                <option>11 NOV</option>
                                                <option>12 DEC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w50percentlast">
                                        <div className="wh90percent right">
                                            <select className="form-control mySelectBoxClass">
                                                <option selected>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-4 textleft">
                                </div>
                                <div className="clearfix"></div>
                                <br/>
                                <div className="col-md-4 textright">
                                    <div className="margtop15"><span className="dark">Card Identification Number:</span><span
                                        className="red">*</span></div>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control margtop10" placeholder=""/>
                                </div>
                                <div className="col-md-4 textleft margtop15">What's this?
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4 textright">
                                    <div className="margtop15"><span className="dark">Billing ZIP Code:</span><span
                                        className="red">*</span></div>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control margtop10" placeholder=""/>
                                </div>
                                <div className="col-md-4 textleft margtop15">
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-4 textright">
                                    <div className="margtop15"><span className="dark"> Cardholder Name:</span><span
                                        className="red">*</span></div>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control margtop10" placeholder=""/>
                                </div>
                                <div className="col-md-4 textleft margtop15">(as it appears on the card)
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="tab-pane" id="paypal">
                                <div className="alert alert-warning fade in">
                                    <button aria-hidden="true" data-dismiss="alert" className="close" type="button">×
                                    </button>
                                    <strong>Important:</strong> You will be redirected to PayPal's website to securely
                                    complete your payment.
                                </div>

                                <button type="submit" className="btn-search5">Proceed to paypal</button>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <span className="size16px bold dark left">Where should we send your confirmation?</span>
                        <div className="roundstep right">4</div>
                        <div className="clearfix"></div>
                        <div className="line4"></div>
                        Please enter the email address where you would like to receive your confirmation.<br/>
                        <div className="col-md-4 textright">
                            <div className="mt15"><span className="dark">Email Address:</span><span
                                className="red">*</span></div>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control margtop10" placeholder=""/>
                        </div>
                        <div className="col-md-4 textleft">
                        </div>
                        <div className="clearfix"></div>
                        <br/>
                        <br/>
                        <span className="size16px bold dark left">Review and book your trip</span>
                        <div className="roundstep right">5</div>
                        <div className="clearfix"></div>
                        <div className="line4"></div>
                        <div className="alert alert-info">
                            Attention! Please read important flight information!<br/>
                            <p className="size12">• You have chosen the version offered by foreign partners. In case of
                                visa issue refusal, disease, etc. the
                                refund without penalty provisions is impossible! The ticket will refunded according to
                                the airline rules.</p>
                        </div>
                        By selecting to complete this booking I acknowledge that I have read and accept the
                        <Link to="#" className="clblue">rules & restrictions</Link>
                        <Link to="#" className="clblue">terms & conditions</Link> , and
                        <Link to="#" className="clblue">privacy policy</Link>. <br/>
                        <button type="submit" className="bluebtn margtop20">Complete booking</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="pagecontainer2 paymentbox grey">
                        <div className="padding20">
                            <span className="opensans size18 dark bold">Trip Summary</span>
                        </div>
                        <div className="line3"></div>
                        <div className="hpadding30 margtop30">
                            <div>
                                <div className="wh33percent left size12 bold dark">
                                    BUC
                                </div>
                                <div className="wh33percent left center size12 bold dark">
                                    FRA
                                </div>
                                <div className="wh33percent right textright size12 bold dark">
                                    DUB
                                </div>
                                <div className="clearfix"></div>

                                <div className="wh33percent left">
                                    <div className="fcircle">
                                        <span className="fdeparture"></span>
                                    </div>
                                </div>
                                <div className="wh33percent left">
                                    <div className="fcircle center">
                                        <span className="fstop"></span>
                                    </div>
                                </div>
                                <div className="wh33percent right">
                                    <div className="fcircle right">
                                        <span className="farrival"></span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="fline2px"></div>

                                <div className="wh33percent left size12">
                                    04:05 PM
                                </div>
                                <div className="wh33percent left center size12">
                                    1 h 20 m
                                </div>
                                <div className="wh33percent right textright size12">
                                    07:35 PM
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <br/>
                            <div>
                                <div className="wh33percent left size12 bold dark">
                                    DUB
                                </div>
                                <div className="wh33percent left center size12 bold dark">
                                    FRA
                                </div>
                                <div className="wh33percent right textright size12 bold dark">
                                    BUC
                                </div>
                                <div className="clearfix"></div>
                                <div className="wh33percent left">
                                    <div className="fcircle">
                                        <span className="fdeparture"></span>
                                    </div>
                                </div>
                                <div className="wh33percent left">
                                    <div className="fcircle center">
                                        <span className="fstop"></span>
                                    </div>
                                </div>
                                <div className="wh33percent right">
                                    <div className="fcircle right">
                                        <span className="farrival"></span>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="fline2px"></div>
                                <div className="wh33percent left size12">
                                    17:00 PM
                                </div>
                                <div className="wh33percent left center size12">
                                    1 h 00 m
                                </div>
                                <div className="wh33percent right textright size12">
                                    21:35 PM
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <br/>
                            <span className="dark">2 Tickets: Roundtrip</span>
                            <div className="fdash mt10"></div>
                            <br/>
                            Traveler 1: Adult <span className="right bold green">$787.25</span>
                            <button type="button" className="collapsebtn3 collapsed mt-5" data-toggle="collapse"
                                    data-target="#collapse1"></button>
                            <div id="collapse1" className="collapse in">
                                <div className="left size14">
                                    Flight<br/>
                                    Taxes & Fees
                                </div>
                                <div className="right size14">
                                    $458.00<br/>
                                    $329.25
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="fdash mt10"></div>
                            <br/>
                            Traveler 2: Adult <span className="right bold green">$787.25</span>
                            <button type="button" className="collapsebtn3 collapsed mt-5" data-toggle="collapse"
                                    data-target="#collapse2"></button>
                            <div id="collapse2" className="collapse">
                                <div className="left size14">
                                    Flight<br/>
                                    Taxes & Fees
                                </div>
                                <div className="right size14">
                                    $458.00<br/>
                                    $329.25
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <br/>
                            <br/>
                        </div>
                        <div className="line3"></div>
                        <div className="padding30">
                            <span className="left size14 dark">Trip Total:</span>
                            <span className="right lred2 bold size18">$1,574.50</span>
                            <div className="clearfix"></div>
                        </div>


                    </div>
                    <br/>

                    <div className="pagecontainer2 needassistancebox">
                        <div className="cpadding1">
                            <span className="icon-help"></span>
                            <h3 className="opensans">Need Assistance?</h3>
                            <p className="size14 grey">Our team is 24/7 at your service to help you with your booking
                                issues or answer any related questions</p>
                            <p className="opensans size30 lblue xslim">1-866-599-6674</p>
                        </div>
                    </div>
                    <br/>
                    <div className="pagecontainer2 loginbox">
                        <div className="cpadding1">
                            <span className="icon-lockk"></span>
                            <h3 className="opensans">Log in</h3>
                            <input type="text" className="form-control logpadding" placeholder="Username" />
                                <br/>
                                <input type="text" className="form-control logpadding" placeholder="Password"/>
                                <div className="margtop20">
                                    <div className="left">
                                        <div className="checkbox padding0">
                                            <label>
                                                <input type="checkbox"/>Remember
                                            </label>
                                        </div>
                                        <Link to="#" className="greylink">Lost password?</Link><br/>
                                    </div>
                                    <div className="right">
                                        <button className="btn-search5" type="submit"
                                                onClick="errorMessage()">Login
                                        </button>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <br />
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
};


export default FlightPayment;
