import React from 'react';

const PaymentList = ({ selectedFlight }) => {
    return (
        <div className="col-md-3">
                <div className="flight-payment-amount-area">
                    <div className="flight-payment-amount-header custom-border-bottom">
                    <span className="d-block font-weight-bold">{ selectedFlight.from_city } - { selectedFlight.to_city } </span>
                    <span className="flight-payment-amount-header-trip">{ selectedFlight.stoppage }</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content">
                    <span className="flight-payment-amount-content-text">Base Fare</span>
                    <span className="flight-payment-amount-content-price">{parseFloat(selectedFlight.basePrice).toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content custom-border-bottom">
                    <span className="flight-payment-amount-content-text">Tax</span>
                    <span className="flight-payment-amount-content-price">{parseFloat(selectedFlight.taxes).toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content">
                    <span className="flight-payment-amount-content-text font-weight-bold">Total Fare</span>
                    <span className="flight-payment-amount-content-price font-weight-bold">{parseFloat(selectedFlight.totalPrice).toFixed(2)}</span>
                </div>

            </div>
        </div>
    )
};


export default PaymentList;
