import React, {Component} from 'react';
import {Link} from "react-router-dom";

// Css
import '../../assets/css/flight-payment.css';

// Component
import FlightPassenger from "./FlightPassenger";
import CardPayment from "./CardPayment";
import PaypalPayment from "./PaypalPayment";
import FlightChain from "./FlightChain";
import TicketDetails from "./TicketDetails";

class FlightPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: true,
            paypal: false
        };
    }

    render() {
        return (
            <div className="container flight-payment-container">
                <div className="container mt25 offset-0">
                    <div className="col-md-8 pagecontainer2 offset-0">
                        <div className="padding30 grey">
                            <span className="size16px bold dark left">Passengers</span>
                            <div className="roundstep active right">1</div>
                            <div className="clearfix"></div>
                            <div className="line4"></div>
                            <FlightPassenger/>
                            <br/>
                            <div className="fdash"></div>
                            <br/>
                            <FlightPassenger/>
                            <br/>
                            <br/>
                            <span className="size16px bold dark left">Customer </span>
                            <div className="clearfix"></div>
                            <br/>
                            <ul className="nav navigation-tabs">
                                <li className={this.state.card && 'active'}>
                                    <Link to="#card" onClick={() => this.setState({card: true, paypal: false})}>Credit/Debit card</Link>
                                </li>
                                <li className={this.state.paypal && 'active'}>
                                    <Link to="#paypal" onClick={() => this.setState({paypal: true, card: false})}>Paypal</Link>
                                </li>
                            </ul>
                            <div className="tab-content4">
                                <CardPayment card={this.state.card}/>
                                <PaypalPayment paypal={this.state.paypal}/>
                                <button type="submit" className="bluebtn margtop20 payment-button">Complete booking
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pagecontainer2 paymentbox grey">
                            <div className="padding20">
                                <span className="opensans size18 dark bold">Trip Summary</span>
                            </div>
                            <div className="line3"></div>
                            <div className="hpadding30 margtop30">
                                <FlightChain/>
                                <br/>
                                <span className="dark">2 Tickets: Roundtrip</span>
                                <div className="fdash mt10"></div>
                                <br/>
                                <TicketDetails/>
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
                    </div>
                </div>
            </div>
        )
    }
}


export default FlightPayment;
