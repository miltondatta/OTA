import React, {Fragment, useEffect, useState} from "react";
import {Button, ButtonToolbar, Form}          from "react-bootstrap";
import axios                                  from "axios";
import {withRouter}                           from 'react-router-dom';

// Css
import '../../assets/css/airline.css';

// Redux
import PropTypes           from "prop-types";
import {connect}           from "react-redux";
import {getAllCountryList} from "../../actions/countryActions";
import Alerts              from "../alert/alerts";
import {base_url}          from "../../utils/Urls";

const UserEdit = ({getAllCountryList, country: {countries}, history, match}) => {
    const [userIndex, setUserIndex] = useState([]);
    
    const [formData, setFormData] = useState({
                                                 id          : '',
                                                 name        : '',
                                                 email       : '',
                                                 mobile      : '',
                                                 role_id     : '',
                                                 balance     : '',
                                                 credit_limit: '',
                                                 createdAt   : '',
                                                 updatedAt   : '',
                                                 status      : ''
                                             });
    
    useEffect(() => {
        getAllCountryList();
        const id        = match.params.id;
        const fetchData = async () => {
            const result = await axios.get(base_url + `api/user/edit/${id}`);
            setFormData({
                            id          : result.data.id,
                            name        : result.data.name,
                            email       : result.data.email,
                            role_id     : result.data.role_id,
                            balance     : result.data.balance,
                            credit_limit: result.data.credit_limit,
                            createdAt   : result.data.createdAt,
                            updatedAt   : result.data.updatedAt,
                            status      : result.data.status,
                        });
        };
        
        fetchData();
    }, []);
    
    const [addMessage, setAddMessage] = useState({
                                                     show   : false,
                                                     variant: '',
                                                     heading: '',
                                                     message: '',
                                                     disable: false
                                                 });
    
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const addNewAirline = async (data) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const res = await axios.post(`/api/airline/store`, data, config);
            
            localStorage.setItem('airline_add_message', res.data.msg);
            
            history.push('/airline');
            return res.data;
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'Airline Add Error!',
                              message: err.response.data.msg,
                          });
            return err.response.data;
        }
    };
    
    const onSubmit = e => {
        e.preventDefault();
        const data = {
            name    : formData.name,
            iata    : formData.iata.toUpperCase(),
            icao    : formData.icao.toUpperCase(),
            callsign: formData.callsign.toUpperCase(),
            country : formData.country,
            active  : formData.active ? 'Y' : 'N',
        };
        
        const res = addNewAirline(data);
    };
    
    const resetFormData = e => {
        e.preventDefault();
        setFormData({
                        name    : '',
                        iata    : '',
                        icao    : '',
                        callsign: '',
                        country : '',
                        active  : false
                    });
    };
    
    const checkIata = async e => {
        try {
            const iata = (e.target.value).toUpperCase();
            
            const result = await axios.get(`/api/airline/check/iata/?iata=${iata}`);
            setAddMessage({
                              show   : false,
                              disable: false
                          });
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'IATA CODE ERROR!',
                              message: err.response.data.msg,
                              disable: true
                          });
        }
    };
    
    const {name, iata, icao, callsign, country, active} = formData;
    const {show, variant, heading, message, disable}    = addMessage;
    
    return <Fragment>
        <div className="airline-area">
            <div className="container-fluid airline-area-container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <Alerts
                            show={show}
                            variant={variant}
                            heading={heading}
                            message={message}
                        />
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
                                                <Form.Control type="text" name="name" value={name}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Airline Name" required/>
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formAirlineIATA">
                                                <Form.Label>IATA Code</Form.Label>
                                                <Form.Control type="text" name="iata" value={iata.toUpperCase()}
                                                              onChange={e => {
                                                                  checkIata(e);
                                                                  onChange(e);
                                                              }} placeholder="Enter iata Code" required/>
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formAirlineICAO">
                                                <Form.Label>ICAO Code</Form.Label>
                                                <Form.Control type="text" name="icao" value={icao.toUpperCase()}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter icao Code"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="formAirlineCallSign">
                                                <Form.Label>Call Sign</Form.Label>
                                                <Form.Control type="text" name="callsign" value={callsign.toUpperCase()}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Call Sign"/>
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formAirlineCountry">
                                                <Form.Label>Country</Form.Label>
                                                <select className="form-control" name="country" value={country}
                                                        onChange={e => onChange(e)} required>
                                                    {countries.length > 0 ?
                                                     <Fragment>
                                                         <option>Select Country</option>
                                                         {countries.map((value, key) => (
                                                             <option value={value.country_name}
                                                                     key={key}>{value.country_name}</option>
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
                                        <Button variant="outline-success" type="submit" className="" disabled={disable}>Add
                                            Now</Button>
                                        <Button variant="outline-warning" type="reset" className="ml-2"
                                                onClick={e => resetFormData(e)}>Reset</Button>
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

AirlineEdit.propTypes = {
    getAllCountryList: PropTypes.func.isRequired,
    country          : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    country: state.country,
});

const mapDispatchToProps = {getAllCountryList};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AirlineEdit));