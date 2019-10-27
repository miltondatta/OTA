import React, {useState} from 'react';
import {Form} from "react-bootstrap";

// Date Picker
import DatePicker from 'react-datepicker2';
import moment from 'moment';

const PaymentForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState(moment());
    const [passportExpiryDate, setPassportExpiryDate] = useState(moment());

    return (
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
                                        onChange={date => setDateOfBirth(date)}
                                        value={dateOfBirth}/>
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
                                        onChange={date => setPassportExpiryDate(date)}
                                        value={passportExpiryDate}/>
                        </div>
                    </Form.Row>
                </Form>
            </div>
        </div>
    )
};


export default PaymentForm;
