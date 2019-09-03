import React from 'react'

const PaypalPayment = ({paypal}) => {
    return (
        paypal && <div className="tab-pane" id="paypal">
            <div className="alert alert-warning fade in">
                <button aria-hidden="true" data-dismiss="alert" className="close"
                        type="button">×
                </button>
                <strong>Important:</strong> You will be redirected to PayPal's website to
                securely
                complete your payment.
            </div>

            <button type="submit" className="btn-search5">Proceed to paypal</button>
        </div>
    );
};


export default PaypalPayment;
