import React, {Fragment, useEffect, useState} from "react";
import {Button, ButtonToolbar, Form}          from "react-bootstrap";
import axios                                  from "axios";
import {withRouter}                           from 'react-router-dom';

// Css
import '../../assets/css/airline.css';

// Redux
import Alerts              from "../alert/alerts";
import {base_url}          from "../../utils/Urls";

const UserEdit = ({ history, match}) => {
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
                                                 status      : false
                                             });
    
    useEffect(() => {
        const id        = match.params.id;
        const fetchData = async () => {
            const result = await axios.get(base_url + `api/users/edit/${id}`);
            setFormData({
                            id          : result.data.id,
                            name        : result.data.name,
                            email       : result.data.email,
                            role_id     : result.data.role_id,
                            mobile      : result.data.mobile,
                            balance     : result.data.balance,
                            credit_limit: result.data.credit_limit,
                            createdAt   : result.data.createdAt,
                            updatedAt   : result.data.updatedAt,
                            status      : result.data.status == 3 ? true : false
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
        
        /*const res = addNewAirline(data);*/
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
    
    const {name, mobile, credit_limit, status} = formData;
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
                                Edit User Profile
                            </div>
                            <div className="card-body">
                                <Form onSubmit={e => onSubmit(e)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="formProfileName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name="name" value={name}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Name" required/>
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formProfile">
                                                <Form.Label>Mobile No</Form.Label>
                                                <Form.Control type="text" name="mobile" value={mobile}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Mobile No" required/>
                                            </Form.Group>
                                            
                                            <Form.Group controlId="formProfileCreditLimit">
                                                <Form.Label>Credit Limit</Form.Label>
                                                <Form.Control type="text" name="credit_limit" value={credit_limit}
                                                              onChange={e => onChange(e)}
                                                              placeholder="Enter Credit Limit"/>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Check
                                                type="switch"
                                                name="status"
                                                value={status}
                                                onChange={e => {
                                                    setFormData({...formData, [e.target.name]: !status});
                                                }}
                                                id="custom-switch-user"
                                                label="Is Active"/>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Button variant="outline-success" type="submit" className="" disabled={disable}>Update</Button>
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

export default withRouter(UserEdit);