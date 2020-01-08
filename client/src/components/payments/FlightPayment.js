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
        console.log(props.location.state.selectedIndex);
    }

    render() {
        return (
            <div className="flight-payment-area">
                <div className="container-fluid flight-payment-area-container">
                    <div className="row">
                        <PaymentForm selectedIndex={this.props.location.state.selectedIndex}/>
                        <PaymentList />
                    </div>

                    {/*<PaymentOption/>*/}
                </div>
            </div>
        )
    }
}


export default FlightPayment;
