import React, {Fragment} from "react";
import {Tab, Tabs} from "react-bootstrap";

// Css
import '../../assets/css/flight-payment-info.css';

// Component
import Bkash from "./Bikas";
import Card from "./Card";
import Rocket from "./Rocket";
import Bank from "./Bank";

const PaymentInfo = () => {
    return <Fragment>
        <div className="flight-payment-info-area">
            <div className="container-fluid flight-payment-info-area-container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <Tabs defaultActiveKey="bkash" id="payment-info-tab">
                            <Tab eventKey="bkash" title="Bkash">
                                <Bkash/>
                            </Tab>
                            <Tab eventKey="card" title="Card">
                                <Card/>
                            </Tab>
                            <Tab eventKey="rocket" title="Rocket">
                                <Rocket/>
                            </Tab>
                            <Tab eventKey="bank_deposit" title="Bank Deposit">
                                <Bank/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
};


export default PaymentInfo;