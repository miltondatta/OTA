import React, {Component} from 'react';

// Css
import '../../assets/css/flight-payment.css';

// Component
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import PaymentOption from "./PaymentOption";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class FlightPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.selectedFlight = props.shop.shopData.data[props.location.state.selectedIndex];
    }

    render() {
        return (
            <div className="flight-payment-area">
                <div className="container-fluid flight-payment-area-container">
                    <div className="row">
                        <PaymentForm selectedFlight={this.selectedFlight}/>
                        <PaymentList selectedFlight={this.selectedFlight}/>
                    </div>

                    {/*<PaymentOption/>*/}
                </div>
            </div>
        )
    }
}


FlightPayment.propTypes = {
    shop: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shop: state.shop
});

export default connect(mapStateToProps)(FlightPayment);
