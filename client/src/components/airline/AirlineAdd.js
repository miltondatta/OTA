import React, {Fragment, useEffect, useState} from "react";
import {Button, ButtonToolbar, Form} from "react-bootstrap";

// Css
import '../../assets/css/airline.css';

// Redux
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllCountryList} from "../../actions/countryActions";

const AirlineAdd = ({getAllCountryList, country: {countries}}) => {
    useEffect(() => {
        getAllCountryList();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        iata: '',
        icao: '',
        callsign: '',
        country: '',
        active: false
    });

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            name: formData.name,
            iata: formData.iata.toUpperCase(),
            icao: formData.icao.toUpperCase(),
            callsign: formData.callsign.toUpperCase(),
            country: formData.country,
            active: formData.active ? 'Y' : 'N',
        };

        console.log(data);
    };

    const resetFormData = e => {
        e.preventDefault();
        setFormData({
            name: '',
            iata: '',
            icao: '',
            callsign: '',
            country: '',
            active: false
        });
    };

    const {name, iata, icao, callsign, country, active} = formData;

    return <Fragment>
        <div className="airline-area">
            <div className="container-fluid airline-area-container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card bg-light">
                            <div className="card-header">
                                Add New Airline
                            </div>
                            <div className="card-body">
                                <Form onSubmit={e => onSubmit(e)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formAirlineName">
                                                <Form.Label>Airline Name</Form.Label>
                                                <Form.Control type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="Enter Airline Name" required/>
                                            </Form.Group>

                                            <Form.Group controlId="formAirlineIATA">
                                                <Form.Label>IATA Code</Form.Label>
                                                <Form.Control type="text" name="iata" value={iata.toUpperCase()} onChange={e => onChange(e)} placeholder="Enter iata Code" required/>
                                            </Form.Group>

                                            <Form.Group controlId="formAirlineICAO">
                                                <Form.Label>ICAO Code</Form.Label>
                                                <Form.Control type="text" name="icao" value={icao.toUpperCase()} onChange={e => onChange(e)} placeholder="Enter icao Code"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formAirlineCallSign">
                                                <Form.Label>Call Sign</Form.Label>
                                                <Form.Control type="text" name="callsign" value={callsign.toUpperCase()} onChange={e => onChange(e)} placeholder="Enter Call Sign"/>
                                            </Form.Group>

                                            <Form.Group controlId="formAirlineCountry">
                                                <Form.Label>Country</Form.Label>
                                                <select className="form-control" name="country" value={country} onChange={e => onChange(e)} required>
                                                    {countries.length > 0 ?
                                                        <Fragment>
                                                            <option>Select Country</option>
                                                            {countries.map((value, key) => (
                                                                <option value={value.country_name} key={key}>{value.country_name}</option>
                                                            ))}
                                                        </Fragment> :
                                                        <option>Select Country</option>}
                                                </select>
                                            </Form.Group>

                                            <Form.Group className="pt-4">
                                                <Form.Check
                                                    type="switch"
                                                    name="active"
                                                    value={active}
                                                    onChange={e => {
                                                        setFormData({...formData, [e.target.name]: !active});
                                                    }}
                                                    id="custom-switch"
                                                    label="Is Active"/>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <Button variant="outline-success" type="submit" className="">Add Now</Button>
                                        <Button variant="outline-warning" type="reset" className="ml-2" onClick={e => resetFormData(e)}>Reset</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
};

AirlineAdd.propTypes = {
    getAllCountryList: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    country: state.country,
});

const mapDispatchToProps = {getAllCountryList};
export default connect(mapStateToProps, mapDispatchToProps)(AirlineAdd);