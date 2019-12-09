import React from 'react';

const PaymentList = () => {
    return (
        <div className="col-md-3">
            <div className="flight-payment-amount-area">
                <div className="flight-payment-amount-header custom-border-bottom">
                    <span className="d-block font-weight-bold">DAC - CGP</span>
                    <span className="flight-payment-amount-header-trip">One Way</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content">
                    <span className="flight-payment-amount-content-text">Adult</span>
                    <span className="flight-payment-amount-content-price">01</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content">
                    <span className="flight-payment-amount-content-text">Base Fare</span>
                    <span className="flight-payment-amount-content-price">BDT, 3000</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content custom-border-bottom">
                    <span className="flight-payment-amount-content-text">Tax</span>
                    <span className="flight-payment-amount-content-price">BDT, 305</span>
                </div>

                <div className="d-flex justify-content-between flight-payment-amount-content">
                    <span className="flight-payment-amount-content-text font-weight-bold">Total Fare</span>
                    <span className="flight-payment-amount-content-price font-weight-bold">BDT, 3305</span>
                </div>

            </div>
        </div>
    )
};


export default PaymentList;
