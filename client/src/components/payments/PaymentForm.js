import React, {Fragment, useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {faMale, faChild, faBaby} from "@fortawesome/free-solid-svg-icons";
import {ButtonToolbar, Button} from "react-bootstrap";
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Date Picker
import DatePicker from 'react-datepicker2';
import moment from 'moment';

// Redux
import {getAllCountryList} from "../../actions/countryActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {savePassengerInfo} from "../../actions/passengerActions";
import passengerReducer from "../../reducers/passengerReducer";

const PaymentForm = ({getAllCountryList, country: {countries}, savePassengerInfo, passenger}) => {
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

    const adultFormObj = {
        first_name: '',
        last_name: '',
        nationality: '',
        gender: '',
        date_of_birth: moment(),
        passport_number: '',
        passport_expiry_date: moment(),
        passenger_type: 'ADT'
    };

    const childFormObj = {
        first_name: '',
        last_name: '',
        nationality: '',
        gender: '',
        date_of_birth: moment(),
        passport_number: '',
        passport_expiry_date: moment(),
        passenger_type: 'CNN'
    };

    const infantFormObj = {
        first_name: '',
        last_name: '',
        nationality: '',
        gender: '',
        date_of_birth: moment(),
        passport_number: '',
        passport_expiry_date: moment(),
        passenger_type: 'INF'
    };

    const phoneObj = {
        
    };


    let adultPassengerData = [];
    const [adultFormData, setAdultFormData] = useState(adultPassengerData);

    let childPassengerData = [];
    const [childFormData, setChildFormData] = useState(childPassengerData);

    let infantPassengerData = [];
    const [infantFormData, setInfantFormData] = useState(infantPassengerData);

    const onChange = (e, passengerType, key, input_name) => {
        if (passengerType === 1) {
            if (e.target) {
                const {name, value} = e.target;
                setAdultFormData(adultFormData.map((el, index) => (index === key ? Object.assign({}, el, {[name]: value}) : el)));
            } else {
                setAdultFormData(adultFormData.map((el, index) => (index === key ? Object.assign({}, el, {[input_name]: e}) : el)));
            }
        }

        if (passengerType === 2) {
            if (e.target) {
                const {name, value} = e.target;
                setChildFormData(childFormData.map((el, index) => (index === key ? Object.assign({}, el, {[name]: value}) : el)));
            } else {
                setChildFormData(childFormData.map((el, index) => (index === key ? Object.assign({}, el, {[input_name]: e}) : el)));
            }
        }

        if (passengerType === 3) {
            if (e.target) {
                const {name, value} = e.target;
                setInfantFormData(infantFormData.map((el, index) => (index === key ? Object.assign({}, el, {[name]: value}) : el)));
            } else {
                setInfantFormData(infantFormData.map((el, index) => (index === key ? Object.assign({}, el, {[input_name]: e}) : el)));
            }
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        const masterPassengerData = [];
        masterPassengerData.push(adultFormData);
        masterPassengerData.push(childFormData);
        masterPassengerData.push(infantFormData);

        let bookInfo = {
            passengers: masterPassengerData,
            phone: {},
            segments: {}
        };
        



        savePassengerInfo(bookInfo, true);
    };

    useEffect(() => {
        getAllCountryList();
        if (localStorage.getItem('user_flight_search')) {
            const flight_search = JSON.parse(localStorage.getItem('user_flight_search'));
            setUserFlightSearch(flight_search);

            for (let i = 0; i < flight_search.ADT; i++) {
                adultPassengerData.push(adultFormObj);
            }

            for (let i = 0; i < flight_search.CNN; i++) {
                childPassengerData.push(childFormObj);
            }

            for (let i = 0; i < flight_search.INF; i++) {
                infantPassengerData.push(infantFormObj);
            }
        }

    }, []);

    if (passenger.msgs.msg) {
        NotificationManager.success(passenger.msgs.msg, 'Passenger Info Message!', 10000);
        savePassengerInfo([], false);
    }

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
                          className="font-weight-bolder">{(key + 1)}</span>
                </p>
            </div>
            <Form.Row>
                <Form.Group className="col-md-6"
                            controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="first_name" placeholder="Enter First Name"
                                  onChange={e => onChange(e, passengerType, key)}/>
                </Form.Group>

                <Form.Group className="col-md-6"
                            controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="last_name" placeholder="Enter Last Name"
                                  onChange={e => onChange(e, passengerType, key)}/>
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
                                    <option value={value.iso3166_1_alpha_2} key={key}>{value.country_name}</option>
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
                                   id={(passengerType === 1 && ('adult_male_' + key)) || (passengerType === 2 && ('child_male_' + key)) || (passengerType === 3 && ('infant_male_' + key))}/>
                            Male
                        </label>

                        <label className="radio-inline pl-3">
                            <input type="radio" name="gender" value="female"
                                   id={(passengerType === 1 && ('adult_female_' + key)) || (passengerType === 2 && ('child_female_' + key)) || (passengerType === 3 && ('infant_female_' + key))}
                                   onChange={e => onChange(e, passengerType, key)} className={'input-checkbox'}
                            />
                            Female
                        </label>
                    </div>
                </div>
            </Form.Row>

            <Form.Row>
                <div className="col-md-6">
                    <label htmlFor="date_of_birth">Date Of Birth</label>
                    <DatePicker timePicker={false}
                                name="date_of_birth"
                                id="date_of_birth"
                                className="form-control"
                                inputFormat="DD/MM/YYYY"
                                onChange={e => onChange(e, passengerType, key, "date_of_birth")}
                                value={(passengerType === 1 && adultFormData[key].date_of_birth) || (passengerType === 2 && childFormData[key].date_of_birth) || (passengerType === 3 && infantFormData[key].date_of_birth)}/>
                </div>

                <Form.Group className="col-md-6"
                            controlId="formGridPassportNumber">
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control type="text" name="passport_number" onChange={e => onChange(e, passengerType, key)}
                                  placeholder="Enter Passport Number"/>
                </Form.Group>
            </Form.Row>

            <Form.Row className="pt-3">
                <div className="col-md-6">
                    <label htmlFor="passport_expiry_date">Passport Expiry Date</label>
                    <DatePicker timePicker={false}
                                name="passport_expiry_date"
                                id="passport_expiry_date"
                                className="form-control"
                                inputFormat="DD/MM/YYYY"
                                onChange={e => onChange(e, passengerType, key, "passport_expiry_date")}
                                value={(passengerType === 1 && adultFormData[key].passport_expiry_date) || (passengerType === 2 && childFormData[key].passport_expiry_date) || (passengerType === 3 && infantFormData[key].passport_expiry_date)}/>
                </div>
            </Form.Row>
        </div>;
    };

    return (user_flight_search.ADT > 0 &&

        <Fragment>
            <div className="col-md-9">
                <Form onSubmit={onSubmit}>
                    {user_flight_search.ADT > 0 && adultPassengerForm.map((value, key) => (
                        passengerForm(value, key, 1)
                    ))}
                    {user_flight_search.CNN > 0 && childPassengerForm.map((value, key) => (
                        passengerForm(value, key, 2)
                    ))}
                    {user_flight_search.INF > 0 && infantPassengerForm.map((value, key) => (
                        passengerForm(value, key, 3)
                    ))}
                    <ButtonToolbar className="pt-3 mb-3 mb-sm-3 mb-md-0">
                        <Button variant="outline-success" type="submit">Save and Continue</Button>
                    </ButtonToolbar>
                </Form>
            </div>
            <NotificationContainer/>
        </Fragment>
    )
};

PaymentForm.propTypes = {
    getAllCountryList: PropTypes.func.isRequired,
    savePassengerInfo: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired,
    passenger: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    country: state.country,
    passenger: state.passenger
});

const mapDispatchToProps = {getAllCountryList, savePassengerInfo};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
