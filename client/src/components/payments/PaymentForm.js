import React, {Fragment, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {faMale, faChild, faBaby} from "@fortawesome/free-solid-svg-icons";

// Date Picker
import DatePicker from 'react-datepicker2';
import moment from 'moment';

// Redux
import {getAllCountryList} from "../../actions/countryActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PaymentForm = ({getAllCountryList, country: {countries}}) => {
    const [dateOfBirth, setDateOfBirth] = useState(moment());
    const [passportExpiryDate, setPassportExpiryDate] = useState(moment());
    const [user_flight_search, setUserFlightSearch] = useState({});



    let adultPassengerForm = [];
    for (let i = 1; i <= user_flight_search.ADT; i++) {
        adultPassengerForm.push(user_flight_search);
    }

    let childPassengerForm = [];
    for (let i = 1; i <= user_flight_search.CNN; i++) {
        childPassengerForm.push(user_flight_search);
    }

    let infantPassengerForm = [];
    for (let i = 1; i <= user_flight_search.INF; i++) {
        infantPassengerForm.push(user_flight_search);
    }

    const obj = {
        first_name: '',
        last_name: '',
        nationality: '',
        gender: '',
        date_of_birth: '',
        passport_number: '',
        passport_expiry_date: '',
        passenger_type: 1
    };

    let adultPassengerData = [];

    const [formData, setFormData] = useState(adultPassengerData);

    const onChange = (e, passengerType, key) => {
        if (passengerType === 1) {
            setFormData(formData.map((el, index) => (index === key ? Object.assign({}, el, {[e.target.name]: e.target.value}) : el)));
            console.log(formData);
        }
    };

    useEffect(() => {
        getAllCountryList();
        if (localStorage.getItem('user_flight_search')) {
            setUserFlightSearch(JSON.parse(localStorage.getItem('user_flight_search')));

            for (let i = 0; i < JSON.parse(localStorage.getItem('user_flight_search')).ADT; i++) {
                adultPassengerData.push(obj);
            }
        }

    }, []);

    const passengerForm = (value, key, passengerType) => {

        return <div className="flight-payment-form" style={(passengerType === 1 && key === 0) ? {} : {'marginTop': 16}}
                    key={key}>
            <div className="flight-payment-header">
                <p><span className="font-weight-bolder">Passenger Information :</span> <span
                    className="font-weight-bold">{(passengerType === 1 && 'Adult') || (passengerType === 2 && 'Child') || (passengerType === 3 && 'Infant')}</span>
                    <FontAwesomeIcon
                        icon={(passengerType === 1 && faMale) || (passengerType === 2 && faChild) || (passengerType === 3 && faBaby)}
                        className="ml-2" style={{color: "#80724b"}}/>
                    <span style={{color: "#80724b", fontSize: 17, marginLeft: 2}}
                          className="font-weight-bolder">1</span>
                </p>
            </div>
            <Form>
                <Form.Row>
                    <Form.Group className="col-md-6"
                                controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first_name" placeholder="Enter First Name"
                                      onChange={e => onChange(e, passengerType, key)}
                                      required/>
                    </Form.Group>

                    <Form.Group className="col-md-6"
                                controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="last_name" placeholder="Enter Last Name"
                                      onChange={e => onChange(e, passengerType, key)}
                                      required/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className="col-md-6"
                                controlId="formGridEmail">
                        <Form.Label>Nationality</Form.Label>
                        <select className="form-control" name="nationality" id="nationality"
                                onChange={e => onChange(e, passengerType, key)}>
                            {countries.length > 0 ?
                                <Fragment>
                                    {countries.map((value, key) => (
                                        <option value={value.dial} key={key}>{value.country_name}</option>
                                    ))}
                                </Fragment> :
                                <option>0</option>}
                        </select>
                    </Form.Group>

                    <div className="col-md-6 mt-2">
                        <span>Gender</span>
                        <div className="d-flex">
                            <label className="radio-inline">
                                <input type="radio" name="gender" value="male"
                                       onChange={e => onChange(e, passengerType, key)} className={'input-checkbox'}
                                       checked/>
                                Male
                            </label>

                            <label className="radio-inline pl-3">
                                <input type="radio" name="gender" value="female"
                                       onChange={e => onChange(e, passengerType, key)} className={'input-checkbox'}/>
                                Female
                            </label>
                        </div>
                    </div>
                </Form.Row>

                <Form.Row>
                    <div className="col-md-6">
                        <label htmlFor="date_of_birth">Date Of Birth</label>
                        <DatePicker timePicker={false}
                                    name={'date_of_birth'}
                                    id={'date_of_birth'}
                                    className="form-control"
                                    inputFormat="DD/MM/YYYY"
                                    onChange={date => setDateOfBirth(date)}
                                    value={dateOfBirth}/>
                    </div>

                    <Form.Group className="col-md-6"
                                controlId="formGridPassportNumber">
                        <Form.Label>Passport Number</Form.Label>
                        <Form.Control type="text" name="passport_number" onChange={e => onChange(e, passengerType, key)}
                                      placeholder="Enter Passport Number"
                                      required/>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="pt-3">
                    <div className="col-md-6">
                        <label htmlFor="passport_expiry_date">Passport Expiry Date</label>
                        <DatePicker timePicker={false}
                                    name={'passport_expiry_date'}
                                    id={'passport_expiry_date'}
                                    className="form-control"
                                    inputFormat="DD/MM/YYYY"
                                    onChange={date => setPassportExpiryDate(date)}
                                    value={passportExpiryDate}/>
                    </div>
                </Form.Row>
            </Form>
        </div>;
    };

    return (user_flight_search.ADT > 0 &&

        <Fragment>
            <div className="col-md-9">
                {user_flight_search.ADT > 0 && adultPassengerForm.map((value, key) => (
                    passengerForm(value, key, 1)
                ))}
                {user_flight_search.CNN > 0 && childPassengerForm.map((value, key) => (
                    passengerForm(value, key, 2)
                ))}
                {user_flight_search.INF > 0 && infantPassengerForm.map((value, key) => (
                    passengerForm(value, key, 3)
                ))}
            </div>
        </Fragment>
    )
};

PaymentForm.propTypes = {
    getAllCountryList: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    country: state.country
});

const mapDispatchToProps = {getAllCountryList};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
