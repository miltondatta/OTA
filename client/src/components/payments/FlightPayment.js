import React, {Component} from 'react';
import {Form} from "react-bootstrap";

// Date Picker
import DatePicker from 'react-datepicker2';
import moment from 'moment';

// Css
import '../../assets/css/flight-payment.css';

// image
import card_image from '../../assets/img/pay_card.jpg';
import bkash from '../../assets/img/bkash.png';

class FlightPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOfBirth: moment(),
            passportExpiryDate: moment(),
        };
    }

    render() {
        return (
            <div className="flight-payment-area">
                <div className="container flight-payment-area-container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="flight-payment-form">
                                <div className="flight-payment-header">
                                    <p>Passenger Information : Adult</p>
                                </div>
                                <Form>
                                    <Form.Row>
                                        <Form.Group className="col-md-6"
                                                    controlId="formGridFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" name="first_name" placeholder="Enter First Name"
                                                          required/>
                                        </Form.Group>

                                        <Form.Group className="col-md-6"
                                                    controlId="formGridLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" name="last_name" placeholder="Enter Last Name"
                                                          required/>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group className="col-md-6"
                                                    controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Enter email" required/>
                                        </Form.Group>

                                        <Form.Group className="col-md-6"
                                                    controlId="formGridPhoneNumber">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" name="mobile" placeholder="Enter Phone Number"
                                                          required/>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <div className="col-md-6">
                                            <span>Gender</span>
                                            <div className="d-flex">
                                                <label className="radio-inline">
                                                    <input type="radio" name="radio" className={'input-checkbox'}
                                                           checked/>
                                                    Male
                                                </label>

                                                <label className="radio-inline pl-3">
                                                    <input type="radio" name="radio" className={'input-checkbox'}/>
                                                    Female
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                                            <DatePicker timePicker={false}
                                                        name={'dateOfBirth'}
                                                        id={'dateOfBirth'}
                                                        className="form-control"
                                                        inputFormat="DD/MM/YYYY"
                                                        onChange={date => this.setState({dateOfBirth: date})}
                                                        value={this.state.dateOfBirth}/>
                                        </div>
                                    </Form.Row>

                                    <Form.Row className="pt-3">
                                        <Form.Group className="col-md-6"
                                                    controlId="formGridPassportNumber">
                                            <Form.Label>Passport Number</Form.Label>
                                            <Form.Control type="text" name="passport_number"
                                                          placeholder="Enter Passport Number"
                                                          required/>
                                        </Form.Group>

                                        <div className="col-md-6">
                                            <label htmlFor="passportExpiryDate">Passport Expiry Date</label>
                                            <DatePicker timePicker={false}
                                                        name={'passportExpiryDate'}
                                                        id={'passportExpiryDate'}
                                                        className="form-control"
                                                        inputFormat="DD/MM/YYYY"
                                                        onChange={date => this.setState({passportExpiryDate: date})}
                                                        value={this.state.passportExpiryDate}/>
                                        </div>
                                    </Form.Row>
                                </Form>
                            </div>
                        </div>
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
                    </div>

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
                </div>
            </div>
        )
    }
}


export default FlightPayment;
