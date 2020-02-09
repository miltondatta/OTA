import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button}                 from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';

// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";

const UserIndex = () => {
    
    const fetchData = async () => {
        const result = await axios.get(`/api/users/index`);
        setUserIndex(result.data);
    };
    
    const [userIndex, setUserIndex] = useState([]);
    
    const [userIndexMessage, setUserIndexMessage] = useState({
                                                                 show   : false,
                                                                 variant: '',
                                                                 heading: '',
                                                                 message: '',
                                                             });
    
    const [modalShow, setShow] = useState(false);
    const handleClose          = () => setShow(false);
    const handleShow           = () => setShow(true);
    
    const [deleteInfo, setDeleteInfo] = useState({
                                                     id  : '',
                                                     name: ''
                                                 });
    
    const {show, variant, heading, message} = userIndexMessage;
    
    useEffect(() => {
        
        fetchData();
        
        const userIndex_add_message = localStorage.getItem('userIndex_add_message');
        if (userIndex_add_message) {
            setUserIndexMessage({
                                    show    : true,
                                    variant : 'success',
                                    headding: 'New User Added!',
                                    message : userIndex_add_message
                                });
        }
        localStorage.removeItem('userIndex_add_message');
        
    }, []);
    
    const deleteUser = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/users/delete/`, data, config);
            
            setUserIndexMessage({
                                    show   : true,
                                    variant: 'success',
                                    heading: 'User Delete Message!',
                                    message: result.data.msg
                                });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setUserIndexMessage({
                                    show   : true,
                                    variant: 'danger',
                                    heading: 'Airline Delete Message!',
                                    message: err.response.data.msg,
                                });
        }
    };
    
    return <Fragment>
        <div className="airline-area">
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
                
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-12 mx-auto">
                        <Link to="airline-add" className="btn btn-outline-primary d-block ml-auto mb-2"
                              style={{width: 80}}>Create</Link>
                        
                        <table className="table table-bordered table-responsive-md text-center">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Status</td>
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
                                        <td>
                                            <Badge variant={(value.status === 3) ? 'success' : 'danger'}>{(value.status === 3) ?
                                                                                                          'Active' :
                                                                                                          'Inactive'}</Badge>
                                        </td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`airline/edit/${value.id}`} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.name
                                                              });
                                                
                                                setUserIndexMessage({
                                                                        show: false
                                                                    });
                                                handleShow();
                                            }}>
                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </Fragment> : <tr>
                                 <td colSpan={8}>
                                     No data found!
                                 </td>
                             </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Airline Information Remove</Modal.Title>
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
            </div>
        </div>
    </Fragment>
};

export default UserIndex;