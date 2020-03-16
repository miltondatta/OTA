import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button, Form}           from "react-bootstrap";
import {faEdit, faTrashAlt, faMoneyBillAlt}   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';

// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {validateInput}                        from "../../utils/funcitons";

const UserIndex = () => {
    
    const fetchData = async () => {
        const result = await axios.get(`/api/users/index`);
        setUserIndex(result.data);
    };
    
    const [userIndex, setUserIndex] = useState([]);
    
    const [userIndexMessage, setUserIndexMessage] = useState({
                                                                 show    : false,
                                                                 variant : '',
                                                                 heading : '',
                                                                 message : '',
                                                             });
    
    const [modalShow, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    
    const [modalBalanceShow, setBalanceShow] = useState(false);
    const handleCloseBalance                 = () => setBalanceShow(false);
    const handleShowBalance                  = () => setBalanceShow(true);
    
    const [modalCrLmShow, setCrLmShow] = useState(false);
    const handleCloseCrLm                 = () => setCrLmShow(false);
    const handleShowCrLm                  = () => setCrLmShow(true);
    
    const [deleteInfo, setDeleteInfo]       = useState({
                                                           id   : '',
                                                           name : ''
                                                       });
    const [updateBalance, setUpdateBalance] = useState({
                                                           user_id   : '',
                                                           user_name : '',
                                                           balance   : ''
                                                       });
    
    const [updateCreditLimit, setUpdateCreditLimit] = useState({
                                                                   user_id        : '',
                                                                   user_name      : '',
                                                                   prev_credit_lm : '',
                                                                   cur_credit_lm  : 0
                                                               });
    
    const setBalanceAmount = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setUpdateBalance({...updateBalance, balance : valid});
        }
        
    };
    
    const setCreditLimit = e => {
        let valid = validateInput(e);
        if (valid || valid === '') {
            setUpdateCreditLimit({...updateCreditLimit, cur_credit_lm : valid});
        }
        
    };
    
    const {show, variant, heading, message} = userIndexMessage;
    
    useEffect(() => {
        
        fetchData();
        
        const userIndex_add_message = localStorage.getItem('userIndex_add_message');
        if (userIndex_add_message) {
            setUserIndexMessage({
                                    show     : true,
                                    variant  : 'success',
                                    headding : 'New User Added!',
                                    message  : userIndex_add_message
                                });
        }
        localStorage.removeItem('userIndex_add_message');
        
        const user_update_message = localStorage.getItem('user_update_message');
        if (user_update_message) {
            setUserIndexMessage({
                                    show     : true,
                                    variant  : 'success',
                                    headding : 'User Updated!',
                                    message  : user_update_message
                                });
        }
        localStorage.removeItem('user_update_message');
        
    }, []);
    
    const deleteUser = async () => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                id : deleteInfo.id
            };
            
            const result = await axios.post(`api/users/delete/`, data, config);
            
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'success',
                                    heading : 'User Delete Message!',
                                    message : result.data.msg
                                });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'danger',
                                    heading : 'Airline Delete Message!',
                                    message : err.response.data.msg,
                                });
        }
    };
    
    const updateUserBalance = async () => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                update_info : updateBalance
            };
            
            const result = await axios.post(`api/users/updateUsersBalance/`, data, config);
            
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'success',
                                    heading : 'Amount Added !',
                                    message : `Amount: ${updateBalance.balance} has been added to ${updateBalance.user_name}`
                                });
            setUpdateBalance({
                                 user_id   : '',
                                 user_name : '',
                                 balance   : ''
                             });
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'danger',
                                    heading : 'Amount not added !',
                                    message : err.response.data.msg,
                                });
        }
    };
    
    const updateUserCreditLm = async () => {
        try {
            const config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            
            const data = {
                update_info : updateCreditLimit
            };
            
            const result = await axios.post(`api/users/updateUsersCreditLimit/`, data, config);
            
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'success',
                                    heading : 'Credit Limit has been updated !',
                                    message : `Amount: ${updateCreditLimit.cur_credit_lm} has been added to ${updateCreditLimit.user_name}`
                                });
            setUpdateCreditLimit({
                                 user_id   : '',
                                 user_name : '',
                                 prev_credit_lm   : '',
                                 cur_credit_lm   : ''
                             });
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'danger',
                                    heading : 'Credit limit not updated !',
                                    message : err.response.data.msg,
                                });
        }
    };
    
    return <Fragment>
        <div className="user-area">
            <div className="container-fluid airline-area-container">
                <div className="col-md-8 mx-auto">
                    <Alerts
                        show={show}
                        variant={variant}
                        heading={heading}
                        message={message}
                    />
                </div>
                
                <div className="text-center pb-3">
                    <h2>Users Information</h2>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <Link to="/register" className="btn btn-outline-primary d-block ml-auto mb-2"
                              style={{width : 80}}>Create</Link>
                        
                        <table className="table table-bordered table-responsive-md text-center">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Credit Limit</td>
                                <td>Balance</td>
                                <td>Status</td>
                                <td>Assign <br/> Balance</td>
                                <td>Update <br/> Credit Limit</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {userIndex.length > 0 ? <Fragment>
                                {userIndex.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.credit_limit}</td>
                                        <td>{value.balance}</td>
                                        <td>
                                            <Badge variant={(value.status === 3) ? 'success' : 'danger'}>{(value.status === 3) ?
                                                                                                          'Active' :
                                                                                                          'Inactive'}</Badge>
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm btn-warning ml-2" onClick={() => {
                                                
                                                setUpdateBalance(prevState => ({
                                                    ...prevState,
                                                    user_id   : value.id,
                                                    user_name : value.name
                                                }));
                                                handleShowBalance();
                                            }}> <span>Assign Balance  </span>
                                                <FontAwesomeIcon icon={faMoneyBillAlt}/>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button className="btn btn-sm btn-success ml-2" onClick={() => {
                                                setUpdateCreditLimit(prevState => ({
                                                    ...prevState,
                                                    user_id   : value.id,
                                                    user_name : value.name,
                                                    prev_credit_lm : value.credit_limit,
                                                    cur_credit_lm : value.credit_limit,
                                                }));
                                                handleShowCrLm();
                                            }}> <span>Update Credit</span>
                                            </Button>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`users/edit/${value.id}`} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id   : value.id,
                                                                  name : value.name
                                                              });
                                                setUserIndexMessage({
                                                                        show : false
                                                                    });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={10}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Information Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.name}</span> from here.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteUser();
                            handleClose();
                        }}>
                            Confirm Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                
                <Modal show={modalBalanceShow} onHide={handleCloseBalance}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User Balance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are adding balance for <b>{updateBalance.user_name}</b>
                    </Modal.Body>
                    <div className="col-md-6">
                        <Form.Group controlId="formProfile">
                            <Form.Label>Amount :</Form.Label>
                            <Form.Control type="text" name="mobile" value={updateBalance.balance}
                                          onChange={e => setBalanceAmount(e)} data-number={'float_only'}
                                          placeholder="Enter Amount" autocomplete="off" required/>
                        </Form.Group>
                    </div>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleCloseBalance}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick={() => {
                            updateUserBalance();
                            handleCloseBalance();
                        }}>
                            Confirm Add
                        </Button>
                    </Modal.Footer>
                </Modal>
    
                <Modal show={modalCrLmShow} onHide={handleCloseCrLm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Credit Limit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are Updating Credit Limit for <b>{updateCreditLimit.user_name}</b> <br/>
                        Current Credit Limit : <b>{updateCreditLimit.prev_credit_lm}</b>
                    </Modal.Body>
                    <div className="col-md-6">
                        <Form.Group controlId="formProfile">
                            <Form.Label>Amount :</Form.Label>
                            <Form.Control type="text" name="crlm" value={updateCreditLimit.cur_credit_lm}
                                          onChange={e => setCreditLimit(e)} data-number={'float_only'}
                                          placeholder="Enter Amount"  required/>
                        </Form.Group>
                    </div>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleCloseCrLm}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick={() => {
                            updateUserCreditLm();
                            handleCloseCrLm();
                        }}>
                            Confirm Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </Fragment>;
};

export default UserIndex;