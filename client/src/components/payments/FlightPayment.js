import React, {Component} from 'react';

// Css
import '../../assets/css/flight-payment.css';

// Component
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import PaymentOption from "./PaymentOption";

class FlightPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="flight-payment-area">
                <div className="container flight-payment-area-container">
                    <div className="row">
                        <PaymentForm/>
                        <PaymentList/>
                    </div>

                    <PaymentOption/>
                </div>
            </div>
        )
    }
}


export default FlightPayment;
