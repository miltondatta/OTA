import React from 'react';

// image
import card_image from '../../assets/img/pay_card.jpg';
import bkash from '../../assets/img/bkash.png';

const PaymentOption = () => {
    return (
        <div className="row mt-3">
            <div className="col-md-9">
                <div className="flight-payment-card-area">
                    <div className="flight-payment-card-header">
                        <span>Please select your payment method:</span>
                    </div>

                    <div className="flight-payment-card-content d-flex">
                        <label className="radio-inline">
                            <input type="radio" name="radio" className={'input-checkbox'}
                                   checked/>
                            Card
                        </label>
                        <img className="flight-payment-card-content-image-card" src={card_image} alt=""/>

                        <label className="radio-inline pl-3">
                            <input type="radio" name="radio" className={'input-checkbox'}/>
                            Bkash
                        </label>
                        <img className="flight-payment-card-content-image-bkash" src={bkash} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default PaymentOption;
