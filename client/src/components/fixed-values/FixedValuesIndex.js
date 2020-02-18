import React, {Fragment, useEffect, useState} from 'react';
import {Link}                                 from "react-router-dom";
import {Badge, Modal, Button}                 from "react-bootstrap";
import {faEdit, faTrashAlt}                   from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon}                      from "@fortawesome/react-fontawesome";
import axios                                  from 'axios';
import moment                                 from 'moment';

// Import Css
import '../../assets/css/airline.css';
import Alerts                                 from "../alert/alerts";
import {base_url}                             from "../../utils/Urls";

const FixedValuesIndex = () => {
    const [fixed_values, set_fixed_values] = useState([]);
    const [deleteInfo, setDeleteInfo]      = useState({
                                                          id  : '',
                                                          name: ''
                                                      });
    
    const [fixedValueDataMessage, setFixedValueDataMessage] = useState({
                                                                           show   : false,
                                                                           variant: '',
                                                                           heading: '',
                                                                           message: '',
                                                                       });
    const {show, variant, heading, message}                 = fixedValueDataMessage;
    
    const [modalShow, setShow] = useState(false);
    const handleClose          = () => setShow(false);
    const handleShow           = () => setShow(true);
    
    const fetchData = async () => {
        const result = await axios.get(`/api/fixed_values/all`);
        set_fixed_values(result.data);
    };
    
    useEffect(() => {
        fetchData();
        
        const fixed_value_add_message = localStorage.getItem('fixed_value_add_message');
        if (fixed_value_add_message) {
            setFixedValueDataMessage({
                                         show    : true,
                                         variant : 'success',
                                         headding: 'New Fixed Value Added!',
                                         message : fixed_value_add_message
                                     });
        }
        localStorage.removeItem('fixed_value_add_message');
        
        const fixed_value_update_message = localStorage.getItem('fixed_value_update_message');
        if (fixed_value_update_message) {
            setFixedValueDataMessage({
                                         show    : true,
                                         variant : 'success',
                                         headding: 'Fixed Value updated',
                                         message : fixed_value_update_message
                                     });
        }
        localStorage.removeItem('fixed_value_update_message');
    }, []);
    const deleteAirport = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const data = {
                id: deleteInfo.id
            };
            
            const result = await axios.post(`api/fixed_values/delete/`, data, config);
            
            setFixedValueDataMessage({
                                         show   : true,
                                         variant: 'success',
                                         heading: 'Fixed Value Delete Message!',
                                         message: result.data.msg
                                     });
            
            fetchData();
            
            return result.data;
            
        } catch (err) {
            setFixedValueDataMessage({
                                         show   : true,
                                         variant: 'danger',
                                         heading: 'Fixed Value Delete Message!',
                                         message: err.response.data.msg,
                                     });
        }
    };
    
    return <Fragment>
        <div className="user-area">
            <div className="container-fluid fixedValues-area-container">
                <div className="col-md-8 mx-auto">
                    <Alerts
                        show={show}
                        variant={variant}
                        heading={heading}
                        message={message}
                    />
                </div>
                
                <div className="text-center pb-3">
                    <h2>Fixed Value Information</h2>
                </div>
                
                <div className="row pb-3">
                    <div className="col-md-12 col-sm-12 col-12 mx-auto">
                        <Link to="/airport_add" className="btn btn-outline-primary d-block ml-auto mb-2"
                              style={{width: 80}}>Create</Link>
                    </div>
                    
                    <div className="col-md-8 col-sm-12 col-12 mx-auto">
                        <table className="table table-bordered table-responsive-md text-center table-striped table-hover table-condensed">
                            <thead className="font-weight-bold">
                            <tr>
                                <td>Serial No</td>
                                <td>Discount Name</td>
                                <td>Discount Code</td>
                                <td>Discount</td>
                                <td>Discount Unit</td>
                                <td>Discount Type</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            {fixed_values.length > 0 ? <Fragment>
                                {fixed_values.map((value, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.discount_name}</td>
                                        <td>{value.discount_code}</td>
                                        <td>{value.discount}</td>
                                        <td>{value.discount_unit}</td>
                                        <td>{value.discount_type}</td>
                                        <td>{value.status_id}</td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`airport/edit/${value.id}`} className="btn btn-sm btn-info">
                                                <FontAwesomeIcon icon={faEdit}/>
                                            </Link>
                                            <Button className="btn btn-sm btn-danger ml-2" onClick={() => {
                                                setDeleteInfo({
                                                                  id  : value.id,
                                                                  name: value.discount_name
                                                              });
                                                
                                                setFixedValueDataMessage({
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
                        <Modal.Title>Airport Information Remove</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete <span>{deleteInfo.name}</span> from here.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-danger" onClick={() => {
                            deleteAirport();
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

export default FixedValuesIndex;