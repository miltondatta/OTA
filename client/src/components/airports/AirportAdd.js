import React, {Fragment, useEffect, useState} from "react";
import {Button, ButtonToolbar, Form}          from "react-bootstrap";
import axios                                  from "axios";
import {withRouter}                           from 'react-router-dom';

// Css
import '../../assets/css/airline.css';

import Alerts     from "../alert/alerts";
import {base_url} from "../../utils/Urls";

const AirportEdit = ({history, match}) => {
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
            id          : formData.id,
            name        : formData.name,
            mobile      : formData.mobile,
            credit_limit: formData.credit_limit,
            status      : formData.status,
        };
        
        const res = updateUserProfile(data);
    };
    
    const resetFormData = e => {
        e.preventDefault();
        setFormData({
                        name        : '',
                        mobile      : '',
                        credit_limit: '',
                        status      : '',
                    });
    };
    
    async function updateUserProfile(data) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const res = await axios.post(base_url + `api/users/update/`, data, config);
            
            localStorage.setItem('user_update_message', res.data.msg);
            
            history.push('/users_index');
            return res.data;
        } catch (err) {
            setAddMessage({
                              show   : true,
                              variant: 'danger',
                              heading: 'User Update Error!',
                              message: err.response.data.msg,
                          });
            return err.response.data;
        }
    }
    
    const {name, mobile, credit_limit, status}       = formData;
    const {show, variant, heading, message, disable} = addMessage;
    
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
                                                label="Is Active" checked={status}/>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Button variant="outline-success" type="submit" className=""
                                                disabled={disable}>Update</Button>
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

export default withRouter(AirportEdit);